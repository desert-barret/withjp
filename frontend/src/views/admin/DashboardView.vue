<template>
  <div>
    <!-- Page header -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
      <div>
        <h1 class="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">Dashboard</h1>
        <p class="text-slate-500 dark:text-slate-400 mt-0.5 text-sm">
          Bienvenido, <span class="font-medium text-slate-700 dark:text-slate-300">{{ auth.user?.email }}</span>
        </p>
      </div>
      <div class="flex items-center gap-2 self-start sm:self-auto
                  px-3 py-1.5 rounded-full text-xs font-semibold
                  bg-emerald-50 dark:bg-emerald-900/20
                  text-emerald-700 dark:text-emerald-400
                  border border-emerald-200 dark:border-emerald-800/50">
        <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        Sistema en línea
      </div>
    </div>

    <!-- Stats -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div v-for="stat in stats" :key="stat.label"
        class="card p-5 flex flex-col gap-4 hover:shadow-lg dark:hover:shadow-black/20
               hover:border-primary-200 dark:hover:border-primary-500/20 transition-all duration-300">
        <div class="flex items-start justify-between">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center"
               :class="stat.iconBg">
            <span class="w-5 h-5 flex items-center justify-center" :class="stat.iconColor" v-html="stat.icon" />
          </div>
          <span class="text-xs font-semibold px-2 py-0.5 rounded-full"
                :class="stat.badgeCls">
            {{ stat.badge }}
          </span>
        </div>
        <div>
          <p class="font-display font-bold text-2xl text-slate-900 dark:text-white leading-none">{{ stat.value }}</p>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">{{ stat.label }}</p>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

      <!-- Quick actions -->
      <div class="card p-6">
        <h2 class="font-semibold text-slate-900 dark:text-white mb-5 flex items-center gap-2 text-sm">
          <svg class="w-4 h-4 text-primary-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          Acciones rápidas
        </h2>
        <div class="space-y-2">
          <router-link to="/admin/projects"
            class="group flex items-center gap-4 p-4 rounded-xl transition-all duration-200
                   bg-slate-50 dark:bg-white/[0.03]
                   hover:bg-primary-50 dark:hover:bg-primary-500/10
                   border border-transparent hover:border-primary-200 dark:hover:border-primary-500/20">
            <div class="w-9 h-9 rounded-xl bg-indigo-100 dark:bg-indigo-500/15 flex items-center justify-center flex-shrink-0">
              <svg class="w-4 h-4 text-indigo-600 dark:text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-slate-800 dark:text-slate-200 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                Gestionar proyectos
              </p>
              <p class="text-xs text-slate-400 dark:text-slate-500 mt-0.5">Añade, edita o elimina cursos</p>
            </div>
            <svg class="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-primary-400 group-hover:translate-x-0.5 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </router-link>

          <router-link to="/admin/profile"
            class="group flex items-center gap-4 p-4 rounded-xl transition-all duration-200
                   bg-slate-50 dark:bg-white/[0.03]
                   hover:bg-violet-50 dark:hover:bg-violet-500/10
                   border border-transparent hover:border-violet-200 dark:hover:border-violet-500/20">
            <div class="w-9 h-9 rounded-xl bg-violet-100 dark:bg-violet-500/15 flex items-center justify-center flex-shrink-0">
              <svg class="w-4 h-4 text-violet-600 dark:text-violet-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-slate-800 dark:text-slate-200 group-hover:text-violet-700 dark:group-hover:text-violet-300 transition-colors">
                Editar perfil
              </p>
              <p class="text-xs text-slate-400 dark:text-slate-500 mt-0.5">Actualiza tu información pública</p>
            </div>
            <svg class="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-violet-400 group-hover:translate-x-0.5 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </router-link>

          <a href="/" target="_blank" rel="noopener noreferrer"
            class="group flex items-center gap-4 p-4 rounded-xl transition-all duration-200
                   bg-slate-50 dark:bg-white/[0.03]
                   hover:bg-emerald-50 dark:hover:bg-emerald-500/10
                   border border-transparent hover:border-emerald-200 dark:hover:border-emerald-500/20">
            <div class="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
              <svg class="w-4 h-4 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-slate-800 dark:text-slate-200 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
                Ver sitio público
              </p>
              <p class="text-xs text-slate-400 dark:text-slate-500 mt-0.5">withjp.ai abre en nueva pestaña</p>
            </div>
            <svg class="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-emerald-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>
      </div>

      <!-- Site info -->
      <div class="card p-6">
        <h2 class="font-semibold text-slate-900 dark:text-white mb-5 flex items-center gap-2 text-sm">
          <svg class="w-4 h-4 text-primary-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          Estado del sitio
        </h2>
        <div class="space-y-3">
          <div class="flex items-center justify-between p-3.5 rounded-xl
                      bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-800/30">
            <div class="flex items-center gap-2.5">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span class="text-sm text-slate-700 dark:text-slate-300">Estado</span>
            </div>
            <span class="text-sm font-semibold text-emerald-600 dark:text-emerald-400">Online</span>
          </div>
          <div class="flex items-center justify-between p-3.5 rounded-xl
                      bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.05]">
            <span class="text-sm text-slate-500 dark:text-slate-400">Dominio</span>
            <span class="text-sm font-semibold text-slate-900 dark:text-white">withjp.ai</span>
          </div>
          <div class="flex items-center justify-between p-3.5 rounded-xl
                      bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.05]">
            <span class="text-sm text-slate-500 dark:text-slate-400">Idiomas</span>
            <div class="flex items-center gap-1.5">
              <span class="px-2 py-0.5 text-[11px] font-semibold rounded-full bg-primary-100 dark:bg-primary-500/20 text-primary-700 dark:text-primary-300">ES</span>
              <span class="px-2 py-0.5 text-[11px] font-semibold rounded-full bg-primary-100 dark:bg-primary-500/20 text-primary-700 dark:text-primary-300">EN</span>
            </div>
          </div>
          <div class="flex items-center justify-between p-3.5 rounded-xl
                      bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.05]">
            <span class="text-sm text-slate-500 dark:text-slate-400">Admin</span>
            <span class="text-sm font-medium text-slate-900 dark:text-white truncate max-w-[180px]">{{ auth.user?.email }}</span>
          </div>
          <div class="flex items-center justify-between p-3.5 rounded-xl
                      bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.05]">
            <span class="text-sm text-slate-500 dark:text-slate-400">Backend</span>
            <span class="text-sm font-medium text-slate-900 dark:text-white">back.withjp.ai</span>
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

const ICON_LAYERS  = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`;
const ICON_STAR    = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
const ICON_GLOBE   = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`;
const ICON_SERVER  = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`;

const stats = ref([
  { label: 'Proyectos totales',   value: '—', icon: ICON_LAYERS, iconBg: 'bg-indigo-100 dark:bg-indigo-500/15',  iconColor: 'text-indigo-600 dark:text-indigo-400',  badge: 'Total',   badgeCls: 'bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400' },
  { label: 'Proyectos destacados',value: '—', icon: ICON_STAR,   iconBg: 'bg-amber-100 dark:bg-amber-500/15',   iconColor: 'text-amber-600 dark:text-amber-400',   badge: 'Featured', badgeCls: 'bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400' },
  { label: 'Idiomas activos',     value: '2', icon: ICON_GLOBE,  iconBg: 'bg-emerald-100 dark:bg-emerald-500/15',iconColor: 'text-emerald-600 dark:text-emerald-400',badge: 'ES · EN',  badgeCls: 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400' },
  { label: 'Subdominios',         value: '2', icon: ICON_SERVER, iconBg: 'bg-cyan-100 dark:bg-cyan-500/15',     iconColor: 'text-cyan-600 dark:text-cyan-400',     badge: 'Pronto',   badgeCls: 'bg-cyan-100 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400' },
]);

onMounted(async () => {
  try {
    const { data } = await projectsApi.getAll(true);
    stats.value[0].value = String(data.length);
    stats.value[1].value = String(data.filter((p: any) => p.featured).length);
  } catch {}
});
</script>
