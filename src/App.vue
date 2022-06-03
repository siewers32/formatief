<script setup>
import { ref, computed } from 'vue'
import { useFetch } from './useFetch.js'
const seen = ref(2)
const url = ref('http://127.0.0.1:8555/api/tasks')
const { data, error, retry } = useFetch(url)
</script>

<template>
  <div v-if="error">
    <p>Oops! Error encountered: {{ error.message }}</p>
    <button @click="retry">Retry</button>
  </div>
  <div v-else-if="data">Data loaded: <pre>{{ data }}</pre></div>
  <div v-else>Loading...</div>
  <p v-if="seen">Bla</p>
  <ul v-for="item in data">
    <li>
      <ul v-for="value in item">
        <li>{{ value }}</li>
      </ul>
    </li>
  </ul>
</template>