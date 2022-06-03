import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './helpers';

import App from './App.vue'

createApp(App).mount('#app')

app.config.errorHandler = (err) => {
    /* handle error */
}

app.use(createPinia())
