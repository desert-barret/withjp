import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, _, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) return { el: to.hash, behavior: 'smooth' };
    return { top: 0 };
  },
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/DefaultLayout.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/HomeView.vue'),
          meta: { title: 'Juan Pablo Guaman | withjp.ai' },
        },
      ],
    },
    {
      path: '/admin',
      component: () => import('@/layouts/AdminLayout.vue'),
      children: [
        {
          path: 'login',
          name: 'AdminLogin',
          component: () => import('@/views/admin/LoginView.vue'),
          meta: { title: 'Admin Login | withjp.ai', guestOnly: true },
        },
        {
          path: '',
          name: 'Dashboard',
          component: () => import('@/views/admin/DashboardView.vue'),
          meta: { title: 'Dashboard | withjp.ai', requiresAuth: true },
        },
        {
          path: 'courses',
          name: 'AdminCourses',
          component: () => import('@/views/admin/CoursesView.vue'),
          meta: { title: 'Cursos | withjp.ai', requiresAuth: true },
        },
        {
          path: 'academia',
          name: 'AdminAcademia',
          component: () => import('@/views/admin/AcademiaView.vue'),
          meta: { title: 'Academia | withjp.ai', requiresAuth: true },
        },
        {
          path: 'profile',
          name: 'AdminProfile',
          component: () => import('@/views/admin/ProfileView.vue'),
          meta: { title: 'Perfil | withjp.ai', requiresAuth: true },
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFoundView.vue'),
    },
  ],
});

router.beforeEach((to, _from, next) => {
  const auth = useAuthStore();

  if (to.meta.title) {
    document.title = to.meta.title as string;
  }

  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    next({ name: 'AdminLogin' });
  } else if (to.meta.guestOnly && auth.isAuthenticated) {
    next({ name: 'Dashboard' });
  } else {
    next();
  }
});

export default router;
