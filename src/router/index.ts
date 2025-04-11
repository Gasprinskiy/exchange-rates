import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/home/HomeView.vue';
import СonversionView from '@/views/conversion/СonversionView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/conversion', component: СonversionView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
