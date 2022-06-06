import { createRouter, createWebHistory } from 'vue-router';

import { useAuthStore } from '@/stores/auth.store.js';
import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import DashboardView from '@/views/DashboardView.vue';

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: 'active',
    routes: [
        { path: '/', component: DashboardView },
        { path: '/login', component: LoginView },
        { path: '/home', component: HomeView }
    ]
});

router.beforeEach(async (to) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/login'];
    const authRequired = !publicPages.includes(to.path);
    const auth = useAuthStore();

    if (authRequired && !auth.user) {
        auth.returnUrl = to.fullPath;
        return '/login';
    }
});