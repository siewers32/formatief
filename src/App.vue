<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { useAuthStore } from '@/stores/auth.store.js';
const authStore = useAuthStore();


</script>


<template>
    <div class="app-container bg-light">
        <nav v-show="authStore.user" class="navbar navbar-expand navbar-dark bg-dark">
            <div class="navbar-nav">
                <RouterLink to="/home" class="nav-item nav-link">Home</RouterLink>
                <a @click="authStore.logout()" class="nav-item nav-link">Logout</a>
            </div>
        </nav>
        <div class="container pt-4 pb-4">
        Hallo
            <RouterView />
        </div>
    </div>
</template>


<style>
@import '@/assets/base.css';
</style>