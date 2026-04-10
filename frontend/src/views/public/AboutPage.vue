<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white dark:from-dark-950 dark:to-dark-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <div class="flex flex-col md:flex-row md:items-center gap-8 mb-12">
          <div class="w-20 h-20 rounded-2xl bg-slate-900 dark:bg-white
                      flex items-center justify-center shrink-0">
            <span class="text-white dark:text-slate-900 font-bold text-2xl">JP</span>
          </div>
          <div>
            <h1 class="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white mb-2">
              Juan Pablo Guaman
            </h1>
            <p class="text-xl text-primary-600 dark:text-primary-400 font-medium">
              {{ t('about.role') }}
            </p>
          </div>
        </div>

        <div class="prose prose-lg prose-slate dark:prose-invert max-w-none
                    prose-p:text-slate-600 dark:prose-p:text-slate-400 prose-p:leading-relaxed">
          <p>{{ t('about.bio.p1') }}</p>
          <p>{{ t('about.bio.p2') }}</p>
          <p>{{ t('about.bio.p3') }}</p>
        </div>
      </div>
    </section>

    <!-- Numbers -->
    <section class="py-16 bg-white dark:bg-dark-900 border-y border-slate-200 dark:border-slate-800">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div v-for="stat in stats" :key="stat.label">
            <div class="text-3xl font-display font-bold text-slate-900 dark:text-white">{{ stat.value }}</div>
            <div class="text-sm text-slate-500 dark:text-slate-400 mt-1">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- What I bring -->
    <section class="py-20 bg-white dark:bg-dark-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 class="text-2xl font-display font-bold text-slate-900 dark:text-white mb-10">
          {{ t('about.strengths.title') }}
        </h2>
        <div class="grid sm:grid-cols-2 gap-6">
          <div v-for="(item, idx) in strengths" :key="idx"
            class="p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
            <h3 class="font-display font-bold text-slate-900 dark:text-white mb-2">{{ item.title }}</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stack -->
    <section class="py-20 bg-slate-50 dark:bg-dark-950">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 class="text-2xl font-display font-bold text-slate-900 dark:text-white mb-10">
          {{ t('about.stack.title') }}
        </h2>
        <div class="space-y-8">
          <div v-for="(group, idx) in stackGroups" :key="idx">
            <h3 class="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
              {{ group.label }}
            </h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in group.items" :key="tech"
                class="px-3 py-1.5 rounded-lg text-sm font-medium
                       bg-white dark:bg-dark-900 border border-slate-200 dark:border-slate-800
                       text-slate-700 dark:text-slate-300">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-slate-900 dark:bg-dark-950">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 class="text-3xl font-display font-bold text-white mb-4">
          {{ t('about.cta.title') }}
        </h2>
        <p class="text-slate-400 mb-8">{{ t('about.cta.subtitle') }}</p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="mailto:info@withjp.ai"
            class="px-8 py-4 rounded-2xl font-semibold bg-white text-slate-900
                   hover:bg-slate-100 shadow-lg transition-all duration-300">
            {{ t('about.cta.email') }}
          </a>
          <a href="https://www.linkedin.com/in/desertbarret/" target="_blank" rel="noopener"
            class="px-8 py-4 rounded-2xl font-semibold text-white
                   border-2 border-white/20 hover:bg-white/10 transition-all duration-300">
            LinkedIn
          </a>
        </div>
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
  title: () => t('about.meta.title'),
  meta: [{ name: 'description', content: () => t('about.meta.description') }],
});

const stats = computed(() => [
  { value: '10+', label: t('about.stats.years') },
  { value: '25K+', label: t('about.stats.students') },
  { value: '17', label: t('about.stats.courses') },
  { value: '4.3', label: t('about.stats.rating') },
]);

const strengths = computed(() => [
  { title: t('about.strengths.s1.title'), description: t('about.strengths.s1.desc') },
  { title: t('about.strengths.s2.title'), description: t('about.strengths.s2.desc') },
  { title: t('about.strengths.s3.title'), description: t('about.strengths.s3.desc') },
  { title: t('about.strengths.s4.title'), description: t('about.strengths.s4.desc') },
]);

const stackGroups = computed(() => [
  { label: 'Backend', items: ['NestJS', 'Node.js', 'Python', 'FastAPI', 'Django', 'Spring Boot', 'TypeORM', 'REST APIs', 'WebSockets'] },
  { label: 'Mobile', items: ['Flutter', 'Kotlin', 'React Native', 'Dart', 'Jetpack Compose'] },
  { label: 'Frontend', items: ['Vue 3', 'React', 'TypeScript', 'Next.js', 'Tailwind CSS'] },
  { label: 'Data', items: ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB', 'Firebase'] },
  { label: 'Infra & DevOps', items: ['Docker', 'GCP', 'Cloud Run', 'Cloud SQL', 'Nginx', 'CI/CD'] },
  { label: 'AI & Automation', items: ['Claude API', 'OpenAI', 'WhatsApp Business API', 'n8n', 'LLM Integration'] },
]);
</script>
