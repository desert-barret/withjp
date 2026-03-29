<template>
  <div>
    <div class="mb-6 sm:mb-8">
      <h1 class="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">Dashboard</h1>
      <p class="text-slate-500 dark:text-slate-400 mt-1 text-sm sm:text-base truncate">Bienvenido, {{ auth.user?.email }}</p>
    </div>

    <!-- Stats -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
      <div v-for="stat in stats" :key="stat.label" class="card p-6">
        <div class="flex items-start justify-between mb-4">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center text-xl" :class="stat.bgClass">
            {{ stat.icon }}
          </div>
        </div>
        <p class="font-display font-bold text-2xl text-slate-900 dark:text-white mb-0.5">{{ stat.value }}</p>
        <p class="text-sm text-slate-500 dark:text-slate-400">{{ stat.label }}</p>
      </div>
    </div>

    <!-- Quick actions -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="card p-6">
        <h2 class="font-semibold text-slate-900 dark:text-white mb-4">Acciones rápidas</h2>
        <div class="space-y-3">
          <router-link
            to="/admin/projects"
            class="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 hover:bg-primary-50 dark:hover:bg-primary-900/10 rounded-xl transition-colors group"
          >
            <div class="flex items-center gap-3">
              <span class="text-xl">🚀</span>
              <span class="font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">Gestionar proyectos</span>
            </div>
            <span class="text-slate-400 group-hover:text-primary-500 transition-colors">→</span>
          </router-link>
          <router-link
            to="/admin/profile"
            class="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 hover:bg-primary-50 dark:hover:bg-primary-900/10 rounded-xl transition-colors group"
          >
            <div class="flex items-center gap-3">
              <span class="text-xl">👤</span>
              <span class="font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">Editar perfil</span>
            </div>
            <span class="text-slate-400 group-hover:text-primary-500 transition-colors">→</span>
          </router-link>
          <a
            href="/"
            target="_blank"
            class="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 hover:bg-emerald-50 dark:hover:bg-emerald-900/10 rounded-xl transition-colors group"
          >
            <div class="flex items-center gap-3">
              <span class="text-xl">🌐</span>
              <span class="font-medium text-slate-700 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">Ver sitio público</span>
            </div>
            <span class="text-slate-400 group-hover:text-emerald-500 transition-colors">↗</span>
          </a>
        </div>
      </div>

      <div class="card p-6">
        <h2 class="font-semibold text-slate-900 dark:text-white mb-4">Sitio</h2>
        <div class="space-y-3 text-sm">
          <div class="flex items-center justify-between p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl">
            <span class="text-slate-600 dark:text-slate-400">Estado</span>
            <span class="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Online
            </span>
          </div>
          <div class="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
            <span class="text-slate-600 dark:text-slate-400">Dominio</span>
            <span class="text-slate-900 dark:text-white font-medium">withjp.ai</span>
          </div>
          <div class="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
            <span class="text-slate-600 dark:text-slate-400">Admin</span>
            <span class="text-slate-900 dark:text-white font-medium">{{ auth.user?.email }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { projectsApi } from '@/services/api';

const auth = useAuthStore();
const projectCount = ref(0);
const featuredCount = ref(0);

const stats = ref([
  { icon: '🚀', label: 'Proyectos totales', value: '—', bgClass: 'bg-primary-100 dark:bg-primary-900/30' },
  { icon: '⭐', label: 'Proyectos destacados', value: '—', bgClass: 'bg-amber-100 dark:bg-amber-900/30' },
  { icon: '👁️', label: 'Idiomas', value: '2', bgClass: 'bg-blue-100 dark:bg-blue-900/30' },
  { icon: '🌐', label: 'Subdominios', value: '2', bgClass: 'bg-emerald-100 dark:bg-emerald-900/30' },
]);

onMounted(async () => {
  try {
    const { data } = await projectsApi.getAll(true);
    const featured = data.filter((p: any) => p.featured);
    stats.value[0].value = String(data.length);
    stats.value[1].value = String(featured.length);
  } catch (e) {}
});
</script>
