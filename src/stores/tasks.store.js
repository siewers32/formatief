import { defineStore } from 'pinia';

import { fetchWrapper } from '@/helpers/fetch-wrapper.js';

const baseUrl = `${import.meta.env.VITE_API_URL}/tasks`;

export const useTasksStore = defineStore({
    id: 'tasks',
    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        tasks:{}
    }),
    actions: {
        async getAll() {
             this.tasks = { loading: true }
             fetchWrapper.get(`${baseUrl}`)
                .then(tasks => this.tasks = tasks)
                .catch(error => this.tasks = { error })
        }
    }
});