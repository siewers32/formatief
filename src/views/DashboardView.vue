<script setup>

//import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/stores/auth.store.js';
const authStore = useAuthStore();
console.log(authStore.user.token);
const user = authStore.user.user;
//const { user: authUser } = storeToRefs(authStore);



</script>

<template>
    <div>
        <p>Hi {{user.name}}, iam on dashboard.</p>
    </div>
</template>