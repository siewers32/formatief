<template>
  <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
  <div v-else-if="data">
    Data loaded:
    <pre>{{ data }}</pre>
  </div>
  <div v-else>Loading...</div>
</template>

<script setup>
import { ref } from 'vue'

const data = ref(null)
const error = ref(null)

fetch('http://127.0.0.1/api/tasks/9')
    .then((res) => res.json())
    .then((json) => (data.value = json))
    .catch((err) => (error.value = err))
</script>

<style scoped>

</style>

