const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
require('dotenv').config();

// Create express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'db',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'rootpassword',
  database: process.env.DB_NAME || 'mydb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Enhanced database connection with retry logic
async function connectWithRetry(maxAttempts = 10, delay = 5000) {
  let attempts = 0;
  
  console.log('Starting database connection attempts...');
  
  while (attempts < maxAttempts) {
    try {
      console.log(`Attempt ${attempts + 1}/${maxAttempts} to connect to database...`);
      const connection = await pool.getConnection();
      const [rows] = await connection.query('SELECT NOW() as now');
      console.log('Database connected:', rows[0].now);
      connection.release();
      return true;
    } catch (err) {
      attempts++;
      console.log(`Database connection attempt ${attempts}/${maxAttempts} failed:`, err.message);
      
      if (attempts >= maxAttempts) {
        console.error('Max connection attempts reached. Giving up.');
        return false;
      }
      
      console.log(`Retrying in ${delay}ms...`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'backend' });
});

// Get all tasks
app.get('/api/tasks', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM tasks');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Create a new task
app.post('/api/tasks', async (req, res) => {
  try {
    const { name, description, completed } = req.body;
    const [result] = await pool.query(
      'INSERT INTO tasks (name, description, completed) VALUES (?, ?, ?)',
      [name, description, completed]
    );
    
    const [rows] = await pool.query('SELECT * FROM tasks WHERE id = ?', [result.insertId]);
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Update a task
app.put('/api/tasks/:id', async (req, res) => {
  try {
    const { name, description, completed } = req.body;
    const taskId = req.params.id;
    
    const [result] = await pool.query(
      'UPDATE tasks SET name = ?, description = ?, completed = ? WHERE id = ?',
      [name, description, completed, taskId]
    );
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Task not found' });
    }
    
    const [rows] = await pool.query('SELECT * FROM tasks WHERE id = ?', [taskId]);
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete a task
app.delete('/api/tasks/:id', async (req, res) => {
  try {
    const taskId = req.params.id;
    const [result] = await pool.query('DELETE FROM tasks WHERE id = ?', [taskId]);
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Task not found' });
    }
    
    res.json({ message: 'Task deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Start server after ensuring database connection
async function startServer() {
  console.log('Starting server initialization...');
  
  // Start Express listener first, but don't announce ready until DB is connected
  const server = app.listen(PORT, () => {
    console.log(`Server process running on port ${PORT}, waiting for database...`);
  });
  
  // Try to connect to database
  const connected = await connectWithRetry();
  console.log('Database connection result:', connected);
  
  if (!connected) {
    console.error('Failed to connect to database after maximum retries. Shutting down.');
    server.close();
    process.exit(1);
  }
  
  console.log(`Server fully initialized and ready for connections on port ${PORT}`);
}

// Initialize the server with better error handling
console.log('Initializing application...');
startServer().catch(err => {
  console.error('Fatal error during startup:', err);
  process.exit(1);
});