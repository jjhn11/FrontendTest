<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="/">Vue 3 Tasks</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav
                ms-auto">
                    <li class="nav-item">
                        <RouterLink to="/" class="nav-link">Tasks</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/add" class="nav-link">Add Task</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    
</template>