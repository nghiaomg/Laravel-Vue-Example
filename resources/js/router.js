import { createRouter, createWebHashHistory } from "vue-router";

import HomeComponent from './components/HomeComponent.vue';
import Helloworld from './components/Helloworld.vue';

const routes = [
    {
        path: '/',
        component: HomeComponent,
    },
    {
        path: '/helloworld',
        component: Helloworld,
    },
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
});

export default router;