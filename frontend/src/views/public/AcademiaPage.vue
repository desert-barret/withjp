<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-16 bg-gradient-to-b from-slate-50 to-white dark:from-dark-950 dark:to-dark-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full
                    bg-primary-50 dark:bg-primary-500/10 border border-primary-200 dark:border-primary-500/20 mb-8">
          <span class="text-sm font-medium text-primary-700 dark:text-primary-400">
            {{ t('academia_page.badge') }}
          </span>
        </div>
        <h1 class="text-4xl sm:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
          {{ t('academia_page.hero.title') }}
        </h1>
        <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          {{ t('academia_page.hero.subtitle') }}
        </p>
      </div>
    </section>

    <!-- JP Academy courses -->
    <section class="py-20 bg-white dark:bg-dark-900">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div v-if="academiaItems.length" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="item in academiaItems" :key="item.id"
            class="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-dark-900">
            <div class="flex items-center gap-2 mb-4">
              <span v-if="item.badge"
                class="px-2.5 py-1 text-xs font-bold rounded-lg uppercase
                       bg-primary-100 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400">
                {{ item.badge }}
              </span>
              <span v-if="item.category"
                class="px-2 py-0.5 text-xs font-medium rounded-md uppercase
                       bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                {{ item.category }}
              </span>
            </div>
            <h3 class="font-display font-bold text-lg text-slate-900 dark:text-white mb-2">
              {{ getTranslation(item).title }}
            </h3>
            <p class="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              {{ getTranslation(item).short_description || getTranslation(item).description }}
            </p>
            <div class="flex flex-wrap gap-1.5 mb-5">
              <span v-for="tech in (item.technologies || []).slice(0, 5)" :key="tech"
                class="px-2 py-0.5 text-xs rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                {{ tech }}
              </span>
            </div>
            <a v-if="item.subdomain_url" :href="item.subdomain_url" target="_blank" rel="noopener"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold
                     text-white bg-primary-600 hover:bg-primary-500 transition-colors">
              {{ t('academia_page.private.access') }} &rarr;
            </a>
            <span v-else class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium
                               text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800">
              {{ t('academia_page.private.coming_soon') }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Udemy bridge -->
    <section class="py-20 bg-slate-50 dark:bg-dark-950">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 class="text-2xl font-display font-bold text-slate-900 dark:text-white mb-4">
          {{ t('academia_page.udemy.title') }}
        </h2>
        <p class="text-slate-600 dark:text-slate-400 mb-8">
          {{ t('academia_page.udemy.subtitle') }}
        </p>
        <router-link to="/cursos"
          class="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold
                 text-white bg-slate-900 dark:bg-white dark:text-slate-900
                 hover:bg-slate-800 dark:hover:bg-slate-100
                 shadow-lg transition-all duration-300">
          {{ t('academia_page.udemy.see_all') }} &rarr;
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useHead } from '@unhead/vue';
import { academiaApi } from '@/services/api';

const { t, locale } = useI18n();

useHead({
  title: () => t('academia_page.meta.title'),
  meta: [
    { name: 'description', content: () => t('academia_page.meta.description') },
    { property: 'og:title', content: () => t('academia_page.meta.title') },
    { property: 'og:description', content: () => t('academia_page.meta.description') },
    { property: 'og:type', content: 'website' },
  ],
});

const academiaItems = ref<any[]>([]);

onMounted(async () => {
  try {
    const { data } = await academiaApi.getAll();
    academiaItems.value = data;
  } catch { /* graceful */ }
});

function getTranslation(item: any) {
  const list = item.translations || [];
  return list.find((t: any) => t.locale === locale.value)
    || list.find((t: any) => t.locale === 'es')
    || list[0]
    || { title: '', description: '', short_description: '' };
}
</script>
