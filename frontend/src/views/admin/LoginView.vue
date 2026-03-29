<template>
  <div class="min-h-screen bg-slate-50 dark:bg-dark-950 flex items-center justify-center px-6">
    <!-- Background -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
    </div>

    <div class="relative w-full max-w-md">
      <!-- Logo -->
      <div class="text-center mb-10">
        <div class="inline-flex items-center gap-2 mb-4">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg shadow-primary-500/30">
            <span class="text-white font-bold">JP</span>
          </div>
          <span class="font-display font-bold text-2xl text-slate-900 dark:text-white">withjp<span class="text-primary-500">.ai</span></span>
        </div>
        <h1 class="text-2xl font-display font-bold text-slate-900 dark:text-white">Panel Admin</h1>
        <p class="text-slate-500 dark:text-slate-400 mt-1 text-sm">Ingresa tus credenciales para continuar</p>
      </div>

      <!-- Form card -->
      <div class="card p-8 shadow-xl shadow-black/5">
        <form @submit.prevent="handleLogin" class="space-y-5">
          <!-- Email -->
          <div>
            <label for="email" class="label">{{ t('admin.email') }}</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              class="input"
              placeholder="admin@withjp.ai"
              autocomplete="email"
              required
            />
          </div>

          <!-- Password -->
          <div>
            <label for="password" class="label">{{ t('admin.password') }}</label>
            <div class="relative">
              <input
                id="password"
                v-model="form.password"
                :type="showPass ? 'text' : 'password'"
                class="input pr-12"
                placeholder="••••••••"
                autocomplete="current-password"
                required
              />
              <button
                type="button"
                @click="showPass = !showPass"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
              >
                {{ showPass ? '🙈' : '👁️' }}
              </button>
            </div>
          </div>

          <!-- Error -->
          <div v-if="error" class="px-4 py-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-700 dark:text-red-400 text-sm">
            {{ error }}
          </div>

          <!-- Submit -->
          <button
            type="submit"
            :disabled="loading"
            class="btn-primary w-full justify-center py-3 text-base"
          >
            <span v-if="loading" class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <span v-else>🔐</span>
            {{ loading ? t('common.loading') : t('admin.login') }}
          </button>
        </form>
      </div>

      <p class="text-center text-xs text-slate-400 dark:text-slate-600 mt-6">
        withjp.ai Admin Panel © {{ new Date().getFullYear() }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useAuthStore } from '@/stores/auth';

const { t } = useI18n();
const router = useRouter();
const auth = useAuthStore();

const form = ref({ email: '', password: '' });
const loading = ref(false);
const error = ref('');
const showPass = ref(false);

async function handleLogin() {
  loading.value = true;
  error.value = '';
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
