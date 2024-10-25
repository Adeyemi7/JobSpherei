import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'loginPage',
      component: () => import('@/views/loginPage.vue'),
    },
    {
      path: '/Loading',
      name: 'loading',
      // route level code-splitting
      // this generates a separate chunk (LoginPage.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/components/pageSkeleton.vue'),
    },
    {
      path: '/jobPage',
      name: 'jobPage',
      // route level code-splitting
      // this generates a separate chunk (LoginPage.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/JobPage.vue'),
    },
  ],
})

export default router
