<script setup>
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/stores/auth.store.js';
import { useTasksStore } from '@/stores/tasks.store.js';
const tasksStore = useTasksStore();
const { tasks } = storeToRefs(tasksStore);
const authStore = useAuthStore();
const authUser = authStore.user.user
tasksStore.getAll()
console.log(tasks)

</script>

<template>
    <div>
        <h1>Hi {{authUser.name}}! You 're on the home view</h1>
        <p>You're logged in with Vue 3 + Pinia & JWT!!</p>
        <h3>Users from secure api end point:</h3>
        <ul v-if="tasks.length">
            <li v-for="task in tasks" :key="task.id">{{task.title}}</li>
        </ul>
        <div v-if="tasks.loading" class="spinner-border spinner-border-sm"></div>
        <div v-if="tasks.error" class="text-danger">Error loading tasks: {{tasks.error}}</div>
    </div>
</template>