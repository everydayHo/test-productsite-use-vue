import { createRouter, createWebHistory } from 'vue-router';
import productList from '../views/productList.vue';
import productDetail from '../views/productDetail.vue';
import productCreate from '../views/productCreate.vue';
import productUpdate from '../views/productUpdate.vue';
import salesList from '../views/salesList.vue';
import imageInsert from '../views/imageInsert.vue';

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
  {
    path: '/update',
    name: 'productUpdate',
    component: productUpdate,
  },
  {
    path: '/sales',
    name: 'salesList',
    component: salesList,
  },
  {
    path: '/image_insert',
    name: 'imageInsert',
    component: imageInsert,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
