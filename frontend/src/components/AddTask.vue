<script setup>
import { reactive } from 'vue';
import axios from 'axios';

const form = reactive({
    taskTitle: '',
    taskDescription: ''
});

const handleSubmit = async () => {
    const newTask = { 
        name: form.taskTitle,
        description: form.taskDescription,
        completed: false   
     };
    try {
        const response = await axios.post('http://localhost:3000/api/tasks', newTask);
        form.taskTitle = '';
        form.taskDescription = '';
    } catch (error) {
        console.error(error);
    }
};
</script>

<template>
    <div class="container mt-4">
        <h1 class="text-center mb-4">Add Task</h1>
        <form @submit.prevent="handleSubmit">
            <div class="mb-3">
                <label for="taskTitle" class="form-label">Task Title</label>
                <input type="text" class="form-control" id="taskTitle" v-model="form.taskTitle" required>
            </div>
            <div class="mb-3">
                <label for="taskDescription" class="form-label">Task Description</label>
                <textarea class="form-control" id="taskDescription" v-model="form.taskDescription" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Add Task</button>
        </form>
    </div>
</template>