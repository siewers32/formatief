import { defineStore } from 'pinia';

import { fetchWrapper } from '@/helpers/fetch-wrapper.js';
import { router } from '@/helpers/routers.js';

const baseUrl = `${import.meta.env.VITE_API_URL}`;

export const useTasksStore = defineStore({
    id: 'tasks',
    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        tasks: JSON.parse(localStorage.getItem('tasks')),
        returnUrl: null
    }),
    actions: {
        async getTasks() {
            const tasks = await fetchWrapper.get(`${baseUrl}/tasks`);

            // update pinia state
            this.tasks = tasks;

            // store user details and jwt in local storage to keep user logged in between page refreshes
            localStorage.setItem('tasks', JSON.stringify(tasks));

            // redirect to previous url or default to home page
            router.push(this.returnUrl || '/home');
        }
    }
});