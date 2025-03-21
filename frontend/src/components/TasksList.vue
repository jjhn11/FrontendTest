<script setup>
import Task from './Task.vue';
import { ref, defineProps, onMounted } from 'vue';
import axios from 'axios';

const props = defineProps({
    limit: Number
});

const tasks = ref([]);
const loading = ref(true);
const error = ref(null);
const retryCount = ref(0);

async function loadTasks() {
    loading.value = true;
    error.value = null;
    
    try {
        const response = await axios.get('http://localhost:3000/api/tasks');
        tasks.value = response.data.slice(0, props.limit);
        loading.value = false;
    } catch (err) {
        console.error(err);
        error.value = "Failed to load tasks. Retrying...";
        
        // Retry up to 3 times with increasing delays
        if (retryCount.value < 3) {
            retryCount.value++;
            const delay = retryCount.value * 2000; // Increase delay each time
            setTimeout(loadTasks, delay);
        } else {
            error.value = "Failed to load tasks. Please refresh the page.";
            loading.value = false;
        }
    }
}

onMounted(() => {
    loadTasks();
});
</script>

<template>
    <div class="container mt-4">
        <h1 class="text-center mb-4">Tasks</h1>
        
        <div v-if="loading" class="text-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <p>Loading tasks...</p>
        </div>
        
        <div v-else-if="error" class="alert alert-danger" role="alert">
            {{ error }}
        </div>
        
        <ul v-else class="list-group">
            <Task v-for="task in tasks" :key="task.id" :task="task" />
            <li v-if="tasks.length === 0" class="list-group-item text-center">
                No tasks found.
            </li>
        </ul>
    </div>
</template>