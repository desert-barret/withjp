<template>
  <div class="min-h-screen bg-slate-50 dark:bg-[#080B14]">

    <!-- ── Authenticated layout ──────────────────────────────── -->
    <template v-if="auth.isAuthenticated && route.name !== 'AdminLogin'">

      <!-- Mobile overlay -->
      <Transition name="fade">
        <div v-if="sidebarOpen"
          class="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden"
          @click="sidebarOpen = false" />
      </Transition>

      <!-- ── Sidebar ─────────────────────────────────────────── -->
      <aside
        class="fixed top-0 left-0 h-full z-40 w-64
               bg-white dark:bg-[#0d1117]
               border-r border-slate-200/80 dark:border-white/[0.05]
               flex flex-col
               transition-transform duration-300 ease-out
               lg:translate-x-0
               shadow-xl shadow-black/5 dark:shadow-black/30"
        :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full'">

        <!-- Brand header -->
        <div class="px-5 py-5 border-b border-slate-200/80 dark:border-white/[0.05]">
          <div class="flex items-center justify-between">
            <router-link to="/" target="_blank"
              class="flex items-center gap-3 group">
              <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-600 to-violet-600
                          flex items-center justify-center shadow-lg shadow-primary-500/30
                          group-hover:scale-105 group-hover:shadow-primary-500/50 transition-all duration-200">
                <span class="text-white font-bold text-sm">JP</span>
              </div>
              <div>
                <p class="font-display font-bold text-slate-900 dark:text-white text-sm leading-tight">
                  withjp<span class="text-primary-500">.ai</span>
                </p>
                <p class="text-[10px] text-slate-400 dark:text-slate-500 tracking-wide">Admin Panel</p>
              </div>
            </router-link>
            <button @click="sidebarOpen = false"
              class="lg:hidden w-8 h-8 flex items-center justify-center rounded-lg
                     text-slate-400 hover:text-slate-600 dark:hover:text-slate-200
                     hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-colors">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
        </div>

        <!-- Navigation -->
        <nav class="flex-1 px-3 py-5 overflow-y-auto">
          <p class="px-3 mb-2 text-[10px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
            Principal
          </p>

          <div class="space-y-0.5">
            <router-link
              v-for="item in navItems" :key="item.to" :to="item.to"
              @click="sidebarOpen = false"
              class="relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
              :class="isActive(item.to)
                ? 'bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/[0.05] hover:text-slate-900 dark:hover:text-white'">
              <!-- Active left bar -->
              <span v-if="isActive(item.to)"
                class="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-r-full bg-primary-500" />
              <span class="w-5 h-5 flex-shrink-0" v-html="item.icon" />
              {{ item.label }}
            </router-link>
          </div>

          <!-- External section -->
          <div class="mt-6 pt-5 border-t border-slate-200/80 dark:border-white/[0.05]">
            <p class="px-3 mb-2 text-[10px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
              Externo
            </p>
            <a href="/" target="_blank" rel="noopener noreferrer"
              class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium
                     text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/[0.05]
                     hover:text-slate-900 dark:hover:text-white transition-all duration-200">
              <svg class="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              Ver sitio público
              <svg class="w-3.5 h-3.5 ml-auto opacity-40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>
        </nav>

        <!-- User + Logout -->
        <div class="px-3 py-3 border-t border-slate-200/80 dark:border-white/[0.05]">
          <router-link to="/admin/profile" @click="sidebarOpen = false"
            class="flex items-center gap-3 px-3 py-2.5 rounded-xl mb-1
                   hover:bg-slate-50 dark:hover:bg-white/[0.04] transition-colors cursor-pointer">
            <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-violet-600
                        flex items-center justify-center flex-shrink-0
                        shadow-md shadow-primary-500/25 text-white font-bold text-sm">
              {{ userInitial }}
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-slate-900 dark:text-white truncate">{{ auth.user?.email }}</p>
              <p class="text-[11px] text-slate-400 dark:text-slate-500 capitalize">{{ auth.user?.role || 'admin' }}</p>
            </div>
            <svg class="w-4 h-4 text-slate-300 dark:text-slate-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </router-link>

          <button @click="handleLogout"
            class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium
                   text-red-500 dark:text-red-400
                   hover:bg-red-50 dark:hover:bg-red-500/10
                   transition-all duration-200">
            <svg class="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
            Cerrar sesión
          </button>
        </div>
      </aside>

      <!-- ── Main content ────────────────────────────────────── -->
      <div class="lg:pl-64 min-h-screen flex flex-col">

        <!-- Mobile top bar -->
        <header class="lg:hidden sticky top-0 z-20
                        bg-white/90 dark:bg-[#0d1117]/90 backdrop-blur-xl
                        border-b border-slate-200/80 dark:border-white/[0.05]
                        px-4 h-14 flex items-center justify-between">
          <button @click="sidebarOpen = true"
            class="w-10 h-10 flex items-center justify-center rounded-xl
                   text-slate-500 dark:text-slate-400
                   hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-colors">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>

          <div class="flex items-center gap-2">
            <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-primary-600 to-violet-600 flex items-center justify-center">
              <span class="text-white font-bold text-xs">JP</span>
            </div>
            <span class="font-display font-bold text-slate-900 dark:text-white text-sm">withjp<span class="text-primary-500">.ai</span></span>
          </div>

          <router-link to="/admin/profile"
            class="w-9 h-9 flex items-center justify-center rounded-xl text-sm font-bold
                   bg-gradient-to-br from-primary-500 to-violet-600 text-white
                   shadow-md shadow-primary-500/25">
            {{ userInitial }}
          </router-link>
        </header>

        <!-- Page content -->
        <main class="flex-1 p-4 sm:p-6 lg:p-8">
          <div class="max-w-6xl mx-auto">
            <RouterView />
          </div>
        </main>
      </div>

    </template>

    <!-- Login page -->
    <template v-else>
      <RouterView />
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const route  = useRoute();
const router = useRouter();
const auth   = useAuthStore();

const sidebarOpen = ref(false);

const userInitial = computed(() =>
  (auth.user?.email?.[0] ?? 'A').toUpperCase()
);

const ICON_DASHBOARD = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>`;
const ICON_COURSES   = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`;
const ICON_ACADEMIA  = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`;
const ICON_PROFILE   = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;

const navItems = [
  { to: '/admin',           icon: ICON_DASHBOARD, label: 'Dashboard' },
  { to: '/admin/courses',   icon: ICON_COURSES,   label: 'Cursos' },
  { to: '/admin/academia',  icon: ICON_ACADEMIA,  label: 'Academia' },
  { to: '/admin/profile',   icon: ICON_PROFILE,   label: 'Mi Perfil' },
];

function isActive(to: string) {
  if (to === '/admin') return route.path === '/admin';
  return route.path.startsWith(to);
}

function handleLogout() {
  auth.logout();
  router.push({ name: 'AdminLogin' });
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.25s ease; }
.fade-enter-from, .fade-leave-to       { opacity: 0; }
</style>
