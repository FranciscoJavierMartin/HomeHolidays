import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeOwnersList from '../views/HomeOwnersList.vue';
import HomeList from '../views/HomeList.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HomeOwnerList',
    component: HomeOwnersList,
  },
  {
    path: '/:id/homes/:page?',
    name: 'HomeList',
    component: HomeList,
    props: (route) => ({ id: route.params.page || 1 }),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
