<template>
  <div>
    <div class="mb-6 sm:mb-8">
      <h1 class="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">{{ t('admin.profile') }}</h1>
      <p class="text-slate-500 dark:text-slate-400 mt-1 text-sm sm:text-base">Información pública del portafolio</p>
    </div>

    <div v-if="loading" class="flex justify-center py-20">
      <div class="w-8 h-8 border-2 border-primary-500/20 border-t-primary-500 rounded-full animate-spin" />
    </div>

    <form v-else @submit.prevent="handleSave" class="space-y-6 max-w-3xl">
      <!-- Basic info -->
      <div class="card p-4 sm:p-6">
        <h2 class="font-semibold text-slate-900 dark:text-white mb-5">Información básica</h2>
        <div class="space-y-4">
          <div>
            <label class="label">Nombre</label>
            <input v-model="form.name" type="text" class="input" />
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="label">Título (ES)</label>
              <input v-model="form.title_es" type="text" class="input" />
            </div>
            <div>
              <label class="label">Título (EN)</label>
              <input v-model="form.title_en" type="text" class="input" />
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
              <input v-model="form.location_es" type="text" class="input" />
            </div>
            <div>
              <label class="label">Ubicación (EN)</label>
              <input v-model="form.location_en" type="text" class="input" />
            </div>
          </div>
          <div>
            <label class="label">Email</label>
            <input v-model="form.email" type="email" class="input" />
          </div>
          <div>
            <label class="label">URL Avatar</label>
            <input v-model="form.avatar_url" type="text" class="input" placeholder="https://..." />
          </div>
        </div>
      </div>

      <!-- Social links -->
      <div class="card p-4 sm:p-6">
        <h2 class="font-semibold text-slate-900 dark:text-white mb-5">Redes sociales</h2>
        <div class="space-y-4">
          <div>
            <label class="label">💼 LinkedIn URL</label>
            <input v-model="form.linkedin_url" type="text" class="input" placeholder="https://linkedin.com/in/..." />
          </div>
          <div>
            <label class="label">🐙 GitHub URL</label>
            <input v-model="form.github_url" type="text" class="input" placeholder="https://github.com/..." />
          </div>
          <div>
            <label class="label">▶️ YouTube URL</label>
            <input v-model="form.youtube_url" type="text" class="input" placeholder="https://youtube.com/@..." />
          </div>
          <div>
            <label class="label">🎓 Udemy URL</label>
            <input v-model="form.udemy_url" type="text" class="input" placeholder="https://udemy.com/user/..." />
          </div>
        </div>
      </div>

      <!-- Skills & Technologies -->
      <div class="card p-4 sm:p-6">
        <h2 class="font-semibold text-slate-900 dark:text-white mb-5">Habilidades y tecnologías</h2>
        <div class="space-y-4">
          <div>
            <label class="label">Skills (separados por coma)</label>
            <input
              :value="form.skills?.join(', ')"
              @input="(e: any) => form.skills = e.target.value.split(',').map((s: string) => s.trim()).filter(Boolean)"
              type="text"
              class="input"
              placeholder="Vue.js, NestJS, TypeScript..."
            />
          </div>
          <div>
            <label class="label">Tecnologías (separadas por coma)</label>
            <input
              :value="form.technologies?.join(', ')"
              @input="(e: any) => form.technologies = e.target.value.split(',').map((s: string) => s.trim()).filter(Boolean)"
              type="text"
              class="input"
              placeholder="Vue 3, React, NestJS..."
            />
          </div>
        </div>
      </div>

      <!-- Messages -->
      <div v-if="saveError" class="px-4 py-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-700 dark:text-red-400 text-sm">{{ saveError }}</div>
      <div v-if="saveSuccess" class="px-4 py-3 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl text-emerald-700 dark:text-emerald-400 text-sm">{{ t('admin.saved') }}</div>

      <!-- Submit -->
      <div class="flex items-center gap-4">
        <button type="submit" :disabled="saving" class="btn-primary px-8 py-3">
          <span v-if="saving" class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          {{ saving ? t('admin.loading') : t('admin.save') }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useProfileStore } from '@/stores/profile';

const { t } = useI18n();
const profileStore = useProfileStore();

const loading = ref(true);
const saving = ref(false);
const saveError = ref('');
const saveSuccess = ref(false);

const form = ref<any>({});

onMounted(async () => {
  await profileStore.fetch();
  form.value = { ...profileStore.profile };
  loading.value = false;
});

async function handleSave() {
  saving.value = true;
  saveError.value = '';
  saveSuccess.value = false;
  try {
    await profileStore.update(form.value);
    saveSuccess.value = true;
    setTimeout(() => saveSuccess.value = false, 3000);
  } catch (e: any) {
    saveError.value = e.response?.data?.message || t('admin.error');
  } finally {
    saving.value = false;
  }
}
</script>
