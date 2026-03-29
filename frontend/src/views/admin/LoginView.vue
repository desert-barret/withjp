<template>
  <div class="min-h-screen flex items-center justify-center relative overflow-hidden
              bg-slate-50 dark:bg-[#080B14] px-4">

    <!-- Background blobs -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full
                  bg-gradient-to-br from-primary-500/20 to-violet-500/10 blur-3xl" />
      <div class="absolute bottom-0 right-0 w-80 h-80 rounded-full
                  bg-gradient-to-tl from-cyan-500/10 to-transparent blur-3xl" />
      <div class="absolute inset-0 dot-grid opacity-30" />
    </div>

    <div class="relative w-full max-w-sm">

      <!-- Logo -->
      <div class="text-center mb-8">
        <div class="inline-flex items-center justify-center w-14 h-14 rounded-2xl
                    bg-gradient-to-br from-primary-600 to-violet-600 mb-4
                    shadow-xl shadow-primary-500/40">
          <span class="text-white font-display font-bold text-xl">JP</span>
        </div>
        <h1 class="font-display font-bold text-2xl text-slate-900 dark:text-white">
          Bienvenido de vuelta
        </h1>
        <p class="text-slate-500 dark:text-slate-400 mt-1.5 text-sm">
          Accede al panel de administración
        </p>
      </div>

      <!-- Card -->
      <div class="bg-white dark:bg-[#0d1117] rounded-2xl
                  border border-slate-200/80 dark:border-white/[0.07]
                  shadow-2xl shadow-black/5 dark:shadow-black/40 p-7">

        <form @submit.prevent="handleLogin" class="space-y-5">

          <!-- Email -->
          <div>
            <label for="email" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
              Correo electrónico
            </label>
            <div class="relative">
              <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </span>
              <input
                id="email"
                v-model="form.email"
                type="email"
                class="input pl-10"
                placeholder="admin@withjp.ai"
                autocomplete="email"
                required
              />
            </div>
          </div>

          <!-- Password -->
          <div>
            <label for="password" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
              Contraseña
            </label>
            <div class="relative">
              <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </span>
              <input
                id="password"
                v-model="form.password"
                :type="showPass ? 'text' : 'password'"
                class="input pl-10 pr-11"
                placeholder="••••••••"
                autocomplete="current-password"
                required
              />
              <button
                type="button"
                @click="showPass = !showPass"
                class="absolute right-3.5 top-1/2 -translate-y-1/2
                       text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
                <svg v-if="showPass" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                <svg v-else class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              </button>
            </div>
          </div>

          <!-- Error -->
          <div v-if="error"
            class="flex items-center gap-2 px-4 py-3 rounded-xl
                   bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/60
                   text-red-700 dark:text-red-400 text-sm">
            <svg class="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            {{ error }}
          </div>

          <!-- Submit -->
          <button
            type="submit"
            :disabled="loading"
            class="btn-primary w-full justify-center py-3 text-base mt-2">
            <span v-if="loading" class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <svg v-else class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            {{ loading ? 'Iniciando sesión...' : 'Iniciar sesión' }}
          </button>
        </form>
      </div>

      <p class="text-center text-xs text-slate-400 dark:text-slate-600 mt-6">
        withjp.ai Admin Panel &copy; {{ new Date().getFullYear() }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const router  = useRouter();
const auth    = useAuthStore();
const form    = ref({ email: '', password: '' });
const loading = ref(false);
const error   = ref('');
const showPass = ref(false);

async function handleLogin() {
  loading.value = true;
  error.value   = '';
  try {
    await auth.login(form.value.email, form.value.password);
    router.push({ name: 'Dashboard' });
  } catch (e: any) {
    error.value = e.response?.data?.message || 'Credenciales inválidas';
  } finally {
    loading.value = false;
  }
}
</script>
