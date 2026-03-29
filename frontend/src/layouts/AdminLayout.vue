<template>
  <div class="min-h-screen bg-slate-50 dark:bg-dark-950">

    <!-- ── Authenticated layout ──────────────────────────────── -->
    <template v-if="auth.isAuthenticated && route.name !== 'AdminLogin'">

      <!-- Mobile overlay backdrop -->
      <Transition name="fade">
        <div v-if="sidebarOpen"
          class="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm lg:hidden"
          @click="sidebarOpen = false" />
      </Transition>

      <!-- Sidebar -->
      <aside
        class="fixed top-0 left-0 h-full z-40 w-64
               bg-white dark:bg-dark-900
               border-r border-slate-200 dark:border-slate-800
               flex flex-col
               transition-transform duration-300 ease-out
               lg:translate-x-0"
        :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full'">

        <!-- Logo -->
        <div class="px-6 py-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <router-link to="/" class="flex items-center gap-2" @click="sidebarOpen = false">
            <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
              <span class="text-white font-bold text-sm">JP</span>
            </div>
            <span class="font-display font-bold text-slate-900 dark:text-white">withjp.ai</span>
          </router-link>
          <!-- Close on mobile -->
          <button @click="sidebarOpen = false"
            class="lg:hidden w-8 h-8 flex items-center justify-center rounded-lg
                   text-slate-400 hover:text-slate-600 dark:hover:text-slate-200
                   hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-colors">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <!-- Navigation -->
        <nav class="flex-1 px-3 py-4 space-y-1">
          <router-link
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            @click="sidebarOpen = false"
            class="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-colors"
            :class="(route.path.startsWith(item.to) && item.to !== '/admin') || route.path === item.to
              ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'"
          >
            <span class="text-lg">{{ item.icon }}</span>
            {{ item.label }}
          </router-link>
        </nav>

        <!-- User info & logout -->
        <div class="px-3 py-4 border-t border-slate-200 dark:border-slate-800">
          <div class="flex items-center gap-3 px-3 py-2 mb-2">
            <div class="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
              <span class="text-primary-600 dark:text-primary-400 text-sm font-semibold">
                {{ auth.user?.email?.[0].toUpperCase() }}
              </span>
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-slate-900 dark:text-white truncate">{{ auth.user?.email }}</p>
              <p class="text-xs text-slate-500 dark:text-slate-400">{{ auth.user?.role }}</p>
            </div>
          </div>
          <button
            @click="handleLogout"
            class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium
                   text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
            <span>🚪</span>
            {{ t('admin.logout') }}
          </button>
        </div>
      </aside>

      <!-- Main wrapper -->
      <div class="lg:pl-64 min-h-screen flex flex-col">

        <!-- Mobile top bar -->
        <header class="lg:hidden sticky top-0 z-20
                        bg-white/90 dark:bg-dark-900/90 backdrop-blur-xl
                        border-b border-slate-200 dark:border-slate-800
                        px-4 h-14 flex items-center justify-between">
          <button @click="sidebarOpen = true"
            class="w-10 h-10 flex items-center justify-center rounded-xl
                   text-slate-500 dark:text-slate-400
                   hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-colors">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>

          <div class="flex items-center gap-2">
            <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
              <span class="text-white font-bold text-xs">JP</span>
            </div>
            <span class="font-display font-bold text-slate-900 dark:text-white text-sm">withjp.ai</span>
          </div>

          <router-link to="/" target="_blank"
            class="w-10 h-10 flex items-center justify-center rounded-xl
                   text-slate-500 dark:text-slate-400
                   hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-colors">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </router-link>
        </header>

        <!-- Page content -->
        <main class="flex-1 p-4 sm:p-6 lg:p-8">
          <RouterView />
        </main>
      </div>

    </template>

    <!-- Login page (no sidebar) -->
    <template v-else>
      <RouterView />
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useAuthStore } from '@/stores/auth';

const { t } = useI18n();
const route = useRoute();
const router = useRouter();
const auth = useAuthStore();

const sidebarOpen = ref(false);

const navItems = [
  { to: '/admin',          icon: '📊', label: 'Dashboard' },
  { to: '/admin/projects', icon: '🚀', label: 'Proyectos' },
  { to: '/admin/profile',  icon: '👤', label: 'Perfil' },
];

function handleLogout() {
  auth.logout();
  router.push({ name: 'AdminLogin' });
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.25s ease; }
.fade-enter-from, .fade-leave-to       { opacity: 0; }
</style>
