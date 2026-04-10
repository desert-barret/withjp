<template>
  <div>
    <!-- Hero -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-slate-50 to-white dark:from-dark-950 dark:to-dark-900"></div>
      <div class="relative max-w-4xl mx-auto px-4 sm:px-6">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full
                    bg-emerald-50 dark:bg-emerald-500/10
                    border border-emerald-200 dark:border-emerald-500/20 mb-8">
          <span class="text-sm font-medium text-emerald-700 dark:text-emerald-400">
            {{ t('vision.badge') }}
          </span>
        </div>

        <h1 class="text-4xl sm:text-5xl font-display font-bold
                   text-slate-900 dark:text-white leading-tight mb-6 max-w-3xl">
          {{ t('vision.hero.headline') }}
        </h1>
        <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mb-10">
          {{ t('vision.hero.description') }}
        </p>

        <a href="mailto:info@withjp.ai"
          class="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white
                 bg-emerald-600 hover:bg-emerald-500
                 shadow-lg shadow-emerald-500/25 transition-all duration-300">
          {{ t('vision.hero.cta') }}
        </a>
      </div>
    </section>

    <!-- Problem / Solution -->
    <section class="py-20 bg-white dark:bg-dark-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <div class="grid md:grid-cols-2 gap-12">
          <div>
            <h2 class="text-2xl font-display font-bold text-slate-900 dark:text-white mb-6">
              {{ t('vision.problem.title') }}
            </h2>
            <ul class="space-y-4">
              <li v-for="(item, idx) in problemItems" :key="idx" class="flex items-start gap-3">
                <span class="text-red-500 text-lg mt-0.5 shrink-0">&#10005;</span>
                <span class="text-slate-600 dark:text-slate-400">{{ item }}</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="text-2xl font-display font-bold text-slate-900 dark:text-white mb-6">
              {{ t('vision.solution.title') }}
            </h2>
            <ul class="space-y-4">
              <li v-for="(item, idx) in solutionItems" :key="idx" class="flex items-start gap-3">
                <span class="text-emerald-500 text-lg mt-0.5 shrink-0">&#10003;</span>
                <span class="text-slate-600 dark:text-slate-400">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- How I build it -->
    <section class="py-20 bg-slate-50 dark:bg-dark-950">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 class="text-2xl font-display font-bold text-slate-900 dark:text-white mb-10">
          {{ t('vision.how.title') }}
        </h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(step, idx) in processSteps" :key="idx" class="text-center">
            <div class="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800
                        flex items-center justify-center mx-auto mb-4
                        text-slate-900 dark:text-white font-bold text-sm">
              {{ idx + 1 }}
            </div>
            <h3 class="font-display font-bold text-slate-900 dark:text-white mb-2 text-sm">{{ step.title }}</h3>
            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech -->
    <section class="py-20 bg-white dark:bg-dark-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 class="text-2xl font-display font-bold text-slate-900 dark:text-white mb-6">
          {{ t('vision.stack.title') }}
        </h2>
        <p class="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl">
          {{ t('vision.stack.description') }}
        </p>
        <div class="flex flex-wrap gap-2">
          <span v-for="tech in stackItems" :key="tech"
            class="px-3 py-1.5 rounded-lg text-sm font-medium
                   bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700
                   text-slate-700 dark:text-slate-300">
            {{ tech }}
          </span>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-emerald-600">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 class="text-3xl font-display font-bold text-white mb-4">
          {{ t('vision.cta.title') }}
        </h2>
        <p class="text-emerald-100 mb-8">{{ t('vision.cta.subtitle') }}</p>
        <a href="mailto:info@withjp.ai"
          class="inline-flex px-8 py-4 rounded-2xl font-semibold
                 bg-white text-emerald-700 hover:bg-emerald-50
                 shadow-lg transition-all duration-300">
          {{ t('vision.cta.button') }}
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useHead } from '@unhead/vue';

const { t } = useI18n();

useHead({
  title: () => t('vision.meta.title'),
  meta: [{ name: 'description', content: () => t('vision.meta.description') }],
});

const problemItems = computed(() => [
  t('vision.problem.p1'), t('vision.problem.p2'),
  t('vision.problem.p3'), t('vision.problem.p4'),
]);

const solutionItems = computed(() => [
  t('vision.solution.s1'), t('vision.solution.s2'),
  t('vision.solution.s3'), t('vision.solution.s4'),
]);

const processSteps = computed(() => [
  { title: t('vision.how.s1.title'), description: t('vision.how.s1.desc') },
  { title: t('vision.how.s2.title'), description: t('vision.how.s2.desc') },
  { title: t('vision.how.s3.title'), description: t('vision.how.s3.desc') },
  { title: t('vision.how.s4.title'), description: t('vision.how.s4.desc') },
]);

const stackItems = [
  'WhatsApp Business API', 'NestJS', 'Python', 'FastAPI',
  'Meta Graph API', 'n8n', 'Docker', 'PostgreSQL', 'Redis',
];
</script>
