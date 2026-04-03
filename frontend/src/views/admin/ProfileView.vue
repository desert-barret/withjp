<template>
  <div>
    <!-- Page header -->
    <div class="mb-6 sm:mb-8">
      <h1 class="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">Mi Perfil</h1>
      <p class="text-slate-500 dark:text-slate-400 mt-0.5 text-sm">Gestiona tu información pública y sesiones activas</p>
    </div>

    <!-- Loading -->
    <div v-if="loading" class="flex justify-center py-20">
      <div class="w-8 h-8 border-2 border-primary-500/20 border-t-primary-500 rounded-full animate-spin" />
    </div>

    <template v-else>
      <!-- Tabs -->
      <div class="flex gap-1 mb-6 p-1 bg-slate-100 dark:bg-white/[0.04]
                  rounded-xl w-full sm:w-fit overflow-x-auto scrollbar-none border border-slate-200/60 dark:border-white/[0.05]">
        <button v-for="tab in tabs" :key="tab.id"
          @click="activeTab = tab.id"
          class="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 flex-shrink-0"
          :class="activeTab === tab.id
            ? 'bg-white dark:bg-white/10 text-slate-900 dark:text-white shadow-sm'
            : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'">
          <span class="w-4 h-4 flex items-center justify-center" v-html="tab.icon" />
          {{ tab.label }}
          <span v-if="tab.id === 'sessions' && sessions.length"
            class="ml-1 px-1.5 py-0.5 text-[10px] font-bold rounded-full
                   bg-primary-100 dark:bg-primary-500/20 text-primary-600 dark:text-primary-400">
            {{ sessions.length }}
          </span>
        </button>
      </div>

      <form @submit.prevent="handleSave" class="max-w-3xl">

        <!-- ── Tab: Información ─────────────────────────────── -->
        <div v-show="activeTab === 'info'" class="space-y-5">
          <div class="card p-4 sm:p-6">
            <h2 class="font-semibold text-slate-900 dark:text-white mb-5 text-sm flex items-center gap-2">
              <span class="w-5 h-5 text-primary-500" v-html="TAB_INFO" />
              Información básica
            </h2>
            <div class="space-y-4">
              <div>
                <label class="label">Nombre completo</label>
                <input v-model="form.name" type="text" class="input" placeholder="Juan Pablo Guamán Rodríguez" />
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="label">Título (ES)</label>
                  <input v-model="form.title_es" type="text" class="input" placeholder="Arquitecto de Software" />
                </div>
                <div>
                  <label class="label">Título (EN)</label>
                  <input v-model="form.title_en" type="text" class="input" placeholder="Software Architect" />
                </div>
              </div>
              <div>
                <label class="label">Bio (ES)</label>
                <textarea v-model="form.bio_es" rows="3" class="input resize-none" />
              </div>
              <div>
                <label class="label">Bio (EN)</label>
                <textarea v-model="form.bio_en" rows="3" class="input resize-none" />
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="label">Ubicación (ES)</label>
                  <input v-model="form.location_es" type="text" class="input" placeholder="Ecuador" />
                </div>
                <div>
                  <label class="label">Ubicación (EN)</label>
                  <input v-model="form.location_en" type="text" class="input" placeholder="Ecuador" />
                </div>
              </div>
              <div>
                <label class="label">Email público</label>
                <input v-model="form.email" type="email" class="input" placeholder="info@withjp.ai" />
              </div>
              <div>
                <label class="label">URL de avatar</label>
                <input v-model="form.avatar_url" type="text" class="input" placeholder="https://..." />
              </div>
            </div>
          </div>
          <SaveBar :saving="saving" :success="saveSuccess" :error="saveError" />
        </div>

        <!-- ── Tab: Redes sociales ─────────────────────────── -->
        <div v-show="activeTab === 'social'" class="space-y-5">
          <div class="card p-4 sm:p-6">
            <h2 class="font-semibold text-slate-900 dark:text-white mb-5 text-sm flex items-center gap-2">
              <span class="w-5 h-5 text-primary-500" v-html="TAB_SOCIAL" />
              Redes sociales
            </h2>
            <div class="space-y-4">
              <div v-for="social in socialFields" :key="social.key">
                <label class="label flex items-center gap-2">
                  <span class="w-4 h-4 flex items-center justify-center" :class="social.color" v-html="social.icon" />
                  {{ social.label }}
                </label>
                <input v-model="(form as any)[social.key]" type="text" class="input" :placeholder="social.placeholder" />
              </div>
            </div>
          </div>
          <SaveBar :saving="saving" :success="saveSuccess" :error="saveError" />
        </div>

        <!-- ── Tab: Habilidades ────────────────────────────── -->
        <div v-show="activeTab === 'skills'" class="space-y-5">
          <div class="card p-4 sm:p-6">
            <h2 class="font-semibold text-slate-900 dark:text-white mb-5 text-sm flex items-center gap-2">
              <span class="w-5 h-5 text-primary-500" v-html="TAB_SKILLS" />
              Habilidades y tecnologías
            </h2>
            <div class="space-y-4">
              <div>
                <label class="label">Skills (separados por coma)</label>
                <input
                  :value="form.skills?.join(', ')"
                  @input="(e: any) => form.skills = e.target.value.split(',').map((s: string) => s.trim()).filter(Boolean)"
                  type="text" class="input"
                  placeholder="Vue.js, NestJS, TypeScript, Python..."
                />
                <div v-if="form.skills?.length" class="flex flex-wrap gap-1.5 mt-2">
                  <span v-for="s in form.skills" :key="s" class="tag text-[11px]">{{ s }}</span>
                </div>
              </div>
              <div>
                <label class="label">Tecnologías (separadas por coma)</label>
                <input
                  :value="form.technologies?.join(', ')"
                  @input="(e: any) => form.technologies = e.target.value.split(',').map((s: string) => s.trim()).filter(Boolean)"
                  type="text" class="input"
                  placeholder="Vue 3, NestJS, Docker, GCP..."
                />
                <div v-if="form.technologies?.length" class="flex flex-wrap gap-1.5 mt-2">
                  <span v-for="t in form.technologies" :key="t" class="tag text-[11px]">{{ t }}</span>
                </div>
              </div>
            </div>
          </div>
          <SaveBar :saving="saving" :success="saveSuccess" :error="saveError" />
        </div>

      </form>

      <!-- ── Tab: Sesiones (outside form) ───────────────────── -->
      <div v-if="activeTab === 'sessions'" class="max-w-3xl">
        <div class="card p-4 sm:p-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 class="font-semibold text-slate-900 dark:text-white flex items-center gap-2 text-sm">
                <span class="w-5 h-5 text-primary-500" v-html="TAB_SESSIONS" />
                Sesiones activas
              </h2>
              <p class="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                Dispositivos donde has iniciado sesión recientemente
              </p>
            </div>
            <button @click="revokeOthers"
              :disabled="revoking"
              class="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold
                     border border-red-200 dark:border-red-800/40
                     text-red-600 dark:text-red-400
                     hover:bg-red-50 dark:hover:bg-red-500/10 transition-all duration-200
                     disabled:opacity-50">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
              Cerrar otras sesiones
            </button>
          </div>

          <!-- Loading sessions -->
          <div v-if="sessionsLoading" class="flex justify-center py-8">
            <div class="w-6 h-6 border-2 border-primary-500/20 border-t-primary-500 rounded-full animate-spin" />
          </div>

          <!-- Empty -->
          <div v-else-if="sessions.length === 0" class="text-center py-10">
            <div class="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center mx-auto mb-3">
              <svg class="w-6 h-6 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            </div>
            <p class="text-sm text-slate-400 dark:text-slate-500">No hay sesiones activas</p>
          </div>

          <!-- Sessions list -->
          <div v-else class="space-y-3">
            <div v-for="s in sessions" :key="s.id"
              class="flex items-start sm:items-center gap-4 p-4 rounded-xl transition-all duration-200
                     border"
              :class="s.token_id === currentJti
                ? 'bg-emerald-50 dark:bg-emerald-900/10 border-emerald-200 dark:border-emerald-800/40'
                : 'bg-slate-50 dark:bg-white/[0.02] border-slate-200/80 dark:border-white/[0.05]'">

              <!-- Device icon -->
              <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                   :class="s.token_id === currentJti ? 'bg-emerald-100 dark:bg-emerald-900/30' : 'bg-slate-200 dark:bg-white/[0.06]'">
                <svg v-if="isMobile(s.user_agent)" class="w-5 h-5" :class="s.token_id === currentJti ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-500 dark:text-slate-400'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                <svg v-else class="w-5 h-5" :class="s.token_id === currentJti ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-500 dark:text-slate-400'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              </div>

              <!-- Info -->
              <div class="flex-1 min-w-0">
                <div class="flex flex-wrap items-center gap-2">
                  <p class="text-sm font-semibold text-slate-900 dark:text-white">
                    {{ getBrowser(s.user_agent) }}
                  </p>
                  <span v-if="s.token_id === currentJti"
                    class="flex items-center gap-1 px-2 py-0.5 text-[10px] font-bold rounded-full
                           bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Esta sesión
                  </span>
                </div>
                <p class="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                  {{ getDevice(s.user_agent) }} &middot; IP: <span class="font-mono">{{ s.ip || '—' }}</span>
                </p>
                <p class="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                  Último uso: {{ formatDate(s.last_used_at) }}
                  &middot; Inicio: {{ formatDate(s.created_at) }}
                </p>
              </div>

              <!-- Action -->
              <div class="flex-shrink-0">
                <span v-if="s.token_id === currentJti"
                  class="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  Activa
                </span>
                <button v-else
                  @click="revokeSession(s.id)"
                  :disabled="revoking"
                  class="px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200
                         border border-red-200 dark:border-red-800/40
                         text-red-600 dark:text-red-400
                         hover:bg-red-50 dark:hover:bg-red-500/10
                         disabled:opacity-50">
                  Revocar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { authApi } from '@/services/api';
import { useProfileStore } from '@/stores/profile';
import { defineComponent, h, onMounted, ref } from 'vue';

// ── Save bar component (inline) ──────────────────────────────
const SaveBar = defineComponent({
  props: ['saving', 'success', 'error'],
  setup(props) {
    return () => h('div', { class: 'flex flex-col sm:flex-row items-start sm:items-center gap-3' }, [
      h('button', {
        type: 'submit',
        disabled: props.saving,
        class: 'btn-primary px-8 py-2.5 flex items-center gap-2',
      }, [
        props.saving
          ? h('span', { class: 'w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin' })
          : null,
        props.saving ? 'Guardando...' : 'Guardar cambios',
      ]),
      props.error
        ? h('p', { class: 'text-sm text-red-600 dark:text-red-400' }, props.error)
        : null,
      props.success
        ? h('p', { class: 'text-sm text-emerald-600 dark:text-emerald-400 flex items-center gap-1' }, '✓ Guardado correctamente')
        : null,
    ]);
  },
});

// ── Tab icons ─────────────────────────────────────────────────
const TAB_INFO     = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
const TAB_SOCIAL   = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`;
const TAB_SKILLS   = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;
const TAB_SESSIONS = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`;

const ICON_LINKEDIN = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`;
const ICON_GITHUB   = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`;
const ICON_YOUTUBE  = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`;
const ICON_UDEMY    = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`;

const socialFields = [
  { key: 'linkedin_url', label: 'LinkedIn URL', placeholder: 'https://linkedin.com/in/...', icon: ICON_LINKEDIN, color: 'text-blue-600 dark:text-blue-400' },
  { key: 'github_url',   label: 'GitHub URL',   placeholder: 'https://github.com/...',    icon: ICON_GITHUB,   color: 'text-slate-700 dark:text-slate-300' },
  { key: 'youtube_url',  label: 'YouTube URL',  placeholder: 'https://youtube.com/@...',  icon: ICON_YOUTUBE,  color: 'text-red-600 dark:text-red-400' },
  { key: 'udemy_url',    label: 'Udemy URL',    placeholder: 'https://udemy.com/user/...', icon: ICON_UDEMY,   color: 'text-violet-600 dark:text-violet-400' },
];

const tabs = [
  { id: 'info',     label: 'Información', icon: TAB_INFO },
  { id: 'social',   label: 'Redes',       icon: TAB_SOCIAL },
  { id: 'skills',   label: 'Habilidades', icon: TAB_SKILLS },
  { id: 'sessions', label: 'Sesiones',    icon: TAB_SESSIONS },
];

// ── State ─────────────────────────────────────────────────────
const profileStore   = useProfileStore();
const activeTab      = ref('info');
const loading        = ref(true);
const saving         = ref(false);
const saveError      = ref('');
const saveSuccess    = ref(false);
const form           = ref<any>({});

// Sessions
const sessions        = ref<any[]>([]);
const sessionsLoading = ref(false);
const revoking        = ref(false);

// Get current session JTI from token
const currentJti = (() => {
  try {
    const token = localStorage.getItem('withjp_token');
    if (!token) return null;
    return JSON.parse(atob(token.split('.')[1])).jti ?? null;
  } catch { return null; }
})();

// ── Profile ───────────────────────────────────────────────────
onMounted(async () => {
  await profileStore.fetch();
  form.value    = { ...profileStore.profile };
  loading.value = false;
  loadSessions();
});

async function handleSave() {
  saving.value      = true;
  saveError.value   = '';
  saveSuccess.value = false;
  try {
    await profileStore.update(form.value);
    saveSuccess.value = true;
    setTimeout(() => (saveSuccess.value = false), 3000);
  } catch (e: any) {
    saveError.value = e.response?.data?.message || 'Error al guardar';
  } finally {
    saving.value = false;
  }
}

// ── Sessions ──────────────────────────────────────────────────
async function loadSessions() {
  sessionsLoading.value = true;
  try {
    const { data } = await authApi.sessions();
    sessions.value = data;
  } catch {} finally {
    sessionsLoading.value = false;
  }
}

async function revokeSession(id: number) {
  revoking.value = true;
  try {
    await authApi.revokeSession(id);
    sessions.value = sessions.value.filter(s => s.id !== id);
  } catch {} finally {
    revoking.value = false;
  }
}

async function revokeOthers() {
  revoking.value = true;
  try {
    await authApi.revokeOthers();
    sessions.value = sessions.value.filter(s => s.token_id === currentJti);
  } catch {} finally {
    revoking.value = false;
  }
}

// ── Helpers ───────────────────────────────────────────────────
function getBrowser(ua: string): string {
  if (!ua) return 'Navegador desconocido';
  if (ua.includes('Edg'))     return 'Microsoft Edge';
  if (ua.includes('Chrome'))  return 'Google Chrome';
  if (ua.includes('Firefox')) return 'Mozilla Firefox';
  if (ua.includes('Safari'))  return 'Safari';
  if (ua.includes('Opera'))   return 'Opera';
  return 'Navegador desconocido';
}

function getDevice(ua: string): string {
  if (!ua) return 'Desktop';
  if (/Mobile|Android|iPhone|iPad/.test(ua)) return 'Móvil';
  return 'Desktop';
}

function isMobile(ua: string): boolean {
  return /Mobile|Android|iPhone|iPad/.test(ua ?? '');
}

function formatDate(date: string): string {
  if (!date) return '—';
  return new Intl.DateTimeFormat('es', {
    day: '2-digit', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  }).format(new Date(date));
}
</script>
