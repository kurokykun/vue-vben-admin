import type { RouteRecordRaw } from 'vue-router';

const productRoutes: RouteRecordRaw[] = [
    
  {
    
    path: '/products',
    name: 'ProductList',
    component: () => import('#/views/products/productList.vue'), // Ensure this path is correct
    meta: {
      title: 'Productos',
      icon: 'lucide:shopping-cart',
      requiresAuth: true, // Si la ruta requiere autenticación
    },
  },
];

export default productRoutes;