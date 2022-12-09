import { createRouter, createWebHistory } from 'vue-router';
import Home from './Home';
import Movie from './Movie';

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/movie/:id',
      component: Movie,
    }
  ],
});