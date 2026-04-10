import { useAuthStore } from '@/stores/auth';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, _, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) return { el: to.hash, behavior: 'smooth' };
    return { top: 0 };
  },
  routes: [
    // ── Public pages ──────────────────────────────────────
    {
      path: '/',
      component: () => import('@/layouts/DefaultLayout.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/public/HomePage.vue'),
        },
        {
          path: 'about',
          name: 'About',
          component: () => import('@/views/public/AboutPage.vue'),
        },
        {
          path: 'whatsapp',
          name: 'WhatsApp',
          component: () => import('@/views/public/WhatsAppPage.vue'),
        },
        {
          path: 'academia',
          name: 'Academia',
          component: () => import('@/views/public/AcademiaPage.vue'),
        },
        {
          path: 'cursos',
          name: 'Courses',
          component: () => import('@/views/public/CoursesPage.vue'),
        },
        {
          path: 'cursos/:slug',
          name: 'CourseDetail',
          component: () => import('@/views/public/CourseDetailPage.vue'),
        },
        {
          path: 'blog',
          name: 'Blog',
          component: () => import('@/views/public/BlogPage.vue'),
        },
        {
          path: 'blog/:slug',
          name: 'BlogPost',
          component: () => import('@/views/public/BlogPostPage.vue'),
        },
        // Legal pages
        {
          path: 'legal/privacidad',
          name: 'Privacy',
          component: () => import('@/views/legal/LegalPage.vue'),
          meta: { legalType: 'privacy' },
        },
        {
          path: 'legal/terminos',
          name: 'Terms',
          component: () => import('@/views/legal/LegalPage.vue'),
          meta: { legalType: 'terms' },
        },
        {
          path: 'legal/cookies',
          name: 'Cookies',
          component: () => import('@/views/legal/LegalPage.vue'),
          meta: { legalType: 'cookies' },
        },
        {
          path: 'legal/whatsapp-policy',
          name: 'WhatsAppPolicy',
          component: () => import('@/views/legal/LegalPage.vue'),
          meta: { legalType: 'whatsapp_policy' },
        },
        // Legacy redirects
        {
          path: 'whatsapp-automation',
          redirect: '/legal/whatsapp-policy',
        },
        {
          path: 'whatsapp-business',
          redirect: '/legal/whatsapp-policy',
        },
      ],
    },

    // ── Admin ─────────────────────────────────────────────
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

    // ── 404 ───────────────────────────────────────────────
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFoundView.vue'),
    },
  ],
});

router.beforeEach(async (to) => {
  const auth = useAuthStore();

  // Set page title from meta (admin pages only — public pages use @unhead/vue)
  if (to.meta.title) {
    document.title = to.meta.title as string;
  }

  if (to.meta.requiresAuth) {
    if (!auth.isAuthenticated) return { name: 'AdminLogin' };
    if (!auth.user) {
      await auth.fetchMe();
      if (!auth.isAuthenticated) return { name: 'AdminLogin' };
    }
  } else if (to.meta.guestOnly && auth.isAuthenticated) {
    return { name: 'Dashboard' };
  }
});

export default router;
