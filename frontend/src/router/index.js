import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeOwnersList from '../views/HomeOwnersList.vue';
import HomeList from '../views/HomeList.vue';
import CreateHome from '../views/CreateHome.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HomeOwnerList',
    component: HomeOwnersList,
  },
  {
    path: '/:id/homes/create',
    name: 'CreateHome',
    component: CreateHome,
  },
  {
    path: '/:id/homes',
    name: 'HomeList',
    component: HomeList,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
