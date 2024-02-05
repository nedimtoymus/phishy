import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/components/LoginPage.vue';
import RegisterPage from '@/components/RegisterPage.vue';

const routes = [
  
        {
          path: '/login',
          name: 'Login',
          component: LoginPage,
          meta: { hideNavigation: true },
        },
        {
          path: '/register',
          name: 'Register',
          component: RegisterPage,
          meta: { hideNavigation: true },
        },
        // Diğer rotalarınız...
     
      
  // Varsayılan yol - Uygulama açıldığında otomatik olarak /login'e yönlendir
  {
    path: '/',
    redirect: '/login'
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
