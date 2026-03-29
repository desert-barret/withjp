<template>
  <div class="min-h-screen bg-slate-50 dark:bg-dark-950">
    <!-- Admin sidebar (only when authenticated) -->
    <template v-if="auth.isAuthenticated && route.name !== 'AdminLogin'">
      <div class="flex h-screen overflow-hidden">
        <!-- Sidebar -->
        <aside class="w-64 bg-white dark:bg-dark-900 border-r border-slate-200 dark:border-slate-800 flex flex-col">
          <!-- Logo -->
          <div class="px-6 py-5 border-b border-slate-200 dark:border-slate-800">
            <router-link to="/" class="flex items-center gap-2">
              <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <span class="text-white font-bold text-sm">JP</span>
              </div>
              <span class="font-display font-bold text-slate-900 dark:text-white">withjp.ai</span>
            </router-link>
          </div>

          <!-- Navigation -->
          <nav class="flex-1 px-3 py-4 space-y-1">
            <router-link
              v-for="item in navItems"
              :key="item.to"
              :to="item.to"
              class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors"
              :class="route.path.startsWith(item.to) && item.to !== '/admin' || route.path === item.to
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
              <div class="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
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
              class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
            >
              <span>🚪</span>
              {{ t('admin.logout') }}
            </button>
          </div>
        </aside>

        <!-- Main content -->
        <main class="flex-1 overflow-y-auto">
          <div class="p-8">
            <RouterView />
          </div>
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
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useAuthStore } from '@/stores/auth';

const { t } = useI18n();
const route = useRoute();
const router = useRouter();
const auth = useAuthStore();

const navItems = [
  { to: '/admin', icon: '📊', label: 'Dashboard' },
  { to: '/admin/projects', icon: '🚀', label: 'Proyectos' },
  { to: '/admin/profile', icon: '👤', label: 'Perfil' },
];

function handleLogout() {
  auth.logout();
  router.push({ name: 'AdminLogin' });
}
</script>
