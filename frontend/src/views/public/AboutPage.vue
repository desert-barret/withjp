<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white dark:from-dark-950 dark:to-dark-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div class="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary-600 to-violet-600
                    flex items-center justify-center mx-auto mb-8 shadow-xl shadow-primary-500/20">
          <span class="text-white font-bold text-3xl">JP</span>
        </div>
        <h1 class="text-4xl sm:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4">
          Juan Pablo Guaman Rodriguez
        </h1>
        <p class="text-xl text-primary-600 dark:text-primary-400 font-medium mb-6">
          {{ profileTitle }}
        </p>
        <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          {{ profileBio }}
        </p>
      </div>
    </section>

    <!-- Stats -->
    <section class="py-16 bg-white dark:bg-dark-900 border-y border-slate-200 dark:border-slate-800">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div v-for="stat in stats" :key="stat.label">
            <div class="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
              {{ stat.value }}
            </div>
            <div class="text-sm text-slate-500 dark:text-slate-400 mt-1">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Story / Timeline -->
    <section class="py-20 bg-white dark:bg-dark-900">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 class="text-3xl font-display font-bold text-slate-900 dark:text-white mb-12 text-center">
          {{ t('about.journey.title') }}
        </h2>
        <div class="space-y-8">
          <div v-for="(milestone, idx) in milestones" :key="idx"
            class="flex gap-6">
            <div class="flex flex-col items-center">
              <div class="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-500/10
                          flex items-center justify-center text-primary-600 dark:text-primary-400 font-bold text-sm shrink-0">
                {{ milestone.year }}
              </div>
              <div v-if="idx < milestones.length - 1" class="w-px flex-1 bg-slate-200 dark:bg-slate-700 mt-2"></div>
            </div>
            <div class="pb-8">
              <h3 class="font-display font-bold text-slate-900 dark:text-white mb-1">{{ milestone.title }}</h3>
              <p class="text-slate-600 dark:text-slate-400 leading-relaxed">{{ milestone.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack -->
    <section class="py-20 bg-slate-50 dark:bg-dark-950">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 class="text-3xl font-display font-bold text-slate-900 dark:text-white mb-12 text-center">
          {{ t('about.tech.title') }}
        </h2>
        <div class="flex flex-wrap justify-center gap-3">
          <span v-for="tech in technologies" :key="tech"
            class="px-4 py-2 rounded-xl text-sm font-medium
                   bg-white dark:bg-dark-900 border border-slate-200 dark:border-slate-800
                   text-slate-700 dark:text-slate-300">
            {{ tech }}
          </span>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-white dark:bg-dark-900">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 class="text-3xl font-display font-bold text-slate-900 dark:text-white mb-6">
          {{ t('about.cta.title') }}
        </h2>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <router-link to="/whatsapp"
            class="px-8 py-4 rounded-2xl font-semibold text-white
                   bg-gradient-to-r from-emerald-600 to-emerald-500
                   shadow-lg shadow-emerald-500/25 transition-all duration-300">
            {{ t('about.cta.button') }}
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useHead } from '@unhead/vue';
import { useProfileStore } from '@/stores/profile';

const { t, locale } = useI18n();
const profileStore = useProfileStore();

useHead({
  title: () => t('about.meta.title'),
  meta: [
    { name: 'description', content: () => t('about.meta.description') },
  ],
});

onMounted(() => {
  if (!profileStore.profile) profileStore.fetch();
});

const profileTitle = computed(() => {
  const p = profileStore.profile;
  return locale.value === 'en' ? (p?.title_en || p?.title_es || '') : (p?.title_es || '');
});

const profileBio = computed(() => {
  const p = profileStore.profile;
  return locale.value === 'en' ? (p?.bio_en || p?.bio_es || '') : (p?.bio_es || '');
});

const technologies = computed(() =>
  profileStore.profile?.technologies || [
    'Flutter', 'NestJS', 'React', 'Vue.js', 'TypeScript', 'Node.js',
    'Kotlin', 'Python', 'Django', 'MySQL', 'PostgreSQL', 'Docker',
    'Firebase', 'GCP', 'WhatsApp API',
  ]
);

const stats = computed(() => [
  { value: '10+', label: t('about.stats.experience') },
  { value: '25,000+', label: t('about.stats.students') },
  { value: '17', label: t('about.stats.courses') },
  { value: '4.3 ★', label: t('about.stats.rating') },
]);

const milestones = computed(() => [
  { year: '\'16', title: t('about.journey.m1.title'), description: t('about.journey.m1.description') },
  { year: '\'20', title: t('about.journey.m2.title'), description: t('about.journey.m2.description') },
  { year: '\'23', title: t('about.journey.m3.title'), description: t('about.journey.m3.description') },
  { year: '\'25', title: t('about.journey.m4.title'), description: t('about.journey.m4.description') },
  { year: '\'26', title: t('about.journey.m5.title'), description: t('about.journey.m5.description') },
]);
</script>
