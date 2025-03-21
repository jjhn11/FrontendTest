<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    task: {
        type: Object,
        required: true,
    }
});
</script>

<template>
    <li class="list-group-item d-flex justify-content-between align-items-center task-item">
        <div>
            <h5 :class="{ 'text-decoration-line-through': task.completed }">{{ task.name }}</h5>
            <p>{{ task.description }}</p>
        </div>
        <span class="badge rounded-pill" :class="task.completed ? 'bg-success' : 'bg-warning'">
            {{ task.completed ? 'Completed' : 'Pending' }}
        </span>
    </li>
</template>

<style scoped>
.task-item {
    transition: background-color 0.3s ease;
}

.task-item:hover {
    background-color: #f8f9fa;
}

.text-decoration-line-through {
    text-decoration: line-through;
}
</style>