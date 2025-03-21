FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
COPY nodemon.json ./

# Ensure nodemon is installed globally to avoid any path issues
RUN npm install && npm install -g nodemon

COPY . .

EXPOSE 3000

# Use the global nodemon for reliability
CMD ["nodemon", "--config", "nodemon.json", "src/index.js"]