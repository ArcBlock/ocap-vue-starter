import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/query',
      name: 'query',
      // route level code-splitting
      // this generates a separate chunk (query.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "query" */ './views/Query.vue'),
    },
    {
      path: '/subscription',
      name: 'subscription',
      component: () => import(/* webpackChunkName: "subscription" */ './views/Subscription.vue'),
    },
  ],
});
