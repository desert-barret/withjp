<template>
  <div class="pt-32 pb-20 bg-white dark:bg-dark-900">
    <div class="max-w-3xl mx-auto px-4 sm:px-6">
      <!-- Breadcrumb -->
      <nav class="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-8">
        <router-link to="/" class="hover:text-primary-600">{{ t('nav.home') }}</router-link>
        <span>/</span>
        <span class="text-slate-900 dark:text-white">{{ pageTitle }}</span>
      </nav>

      <h1 class="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white mb-8">
        {{ pageTitle }}
      </h1>

      <div class="prose prose-slate dark:prose-invert max-w-none
                  prose-headings:font-display
                  prose-a:text-primary-600 dark:prose-a:text-primary-400"
        v-html="content">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useHead } from '@unhead/vue';

const route = useRoute();
const { t } = useI18n();

const pageType = computed(() => route.meta.legalType as string || 'privacy');

const pageTitle = computed(() => t(`legal.${pageType.value}.title`));

const content = computed(() => t(`legal.${pageType.value}.content`));

useHead({
  title: () => `${pageTitle.value} | withjp.ai`,
  meta: [
    { name: 'robots', content: 'noindex, follow' },
  ],
});
</script>
