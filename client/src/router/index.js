import { createRouter, createWebHistory } from 'vue-router';
import productList from '../views/productList.vue';
import productDetail from '../views/productDetail.vue';
import productCreate from '../views/productCreate.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: productList,
  },
  {
    path: '/detail',
    name: 'productDetail',
    component: productDetail,
  },
  {
    path: '/create',
    name: 'productCreate',
    component: productCreate,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
