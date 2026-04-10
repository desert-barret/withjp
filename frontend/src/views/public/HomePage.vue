<template>
  <div>
    <!-- ═══ HERO ═══════════════════════════════════════════ -->
    <section class="relative min-h-[90vh] flex items-center overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-100/50
                  dark:from-dark-950 dark:via-dark-900 dark:to-dark-950"></div>
      <div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style="background-image: radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0); background-size: 32px 32px;"></div>

      <div class="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <div class="max-w-3xl">
          <!-- Status -->
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full
                      bg-emerald-50 dark:bg-emerald-500/10
                      border border-emerald-200 dark:border-emerald-500/20 mb-8">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span class="text-sm font-medium text-emerald-700 dark:text-emerald-400">
              {{ t('home.hero.available') }}
            </span>
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-display font-bold
                     text-slate-900 dark:text-white leading-[1.1] mb-6">
            {{ t('home.hero.headline') }}
          </h1>

          <p class="text-lg sm:text-xl text-slate-600 dark:text-slate-400
                    max-w-2xl mb-10 leading-relaxed">
            {{ t('home.hero.description') }}
          </p>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row items-start gap-4 mb-14">
            <a href="mailto:info@withjp.ai"
              class="w-full sm:w-auto px-8 py-4 rounded-2xl font-semibold text-white
                     bg-slate-900 dark:bg-white dark:text-slate-900
                     hover:bg-slate-800 dark:hover:bg-slate-100
                     shadow-lg transition-all duration-300 text-center">
              {{ t('home.hero.cta_primary') }}
            </a>
            <router-link to="/about"
              class="w-full sm:w-auto px-8 py-4 rounded-2xl font-semibold
                     text-slate-700 dark:text-slate-200
                     border-2 border-slate-200 dark:border-slate-700
                     hover:border-slate-400 dark:hover:border-slate-500
                     transition-all duration-300 text-center">
              {{ t('home.hero.cta_secondary') }}
            </router-link>
          </div>

          <!-- Proof -->
          <div class="flex flex-wrap items-center gap-8 sm:gap-12">
            <div v-for="stat in stats" :key="stat.label">
              <div class="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
                {{ stat.value }}
              </div>
              <div class="text-sm text-slate-500 dark:text-slate-400">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ WHAT I DO ══════════════════════════════════════ -->
    <section class="py-20 sm:py-28 bg-white dark:bg-dark-900">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="max-w-2xl mb-16">
          <span class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider
                       bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 mb-4">
            {{ t('home.what.tag') }}
          </span>
          <h2 class="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">
            {{ t('home.what.title') }}
          </h2>
          <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {{ t('home.what.subtitle') }}
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(service, idx) in services" :key="idx"
            class="p-8 rounded-2xl border border-slate-200 dark:border-slate-800
                   bg-white dark:bg-dark-900">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-xl"
              :class="service.iconBg">
              {{ service.icon }}
            </div>
            <h3 class="text-lg font-display font-bold text-slate-900 dark:text-white mb-3">
              {{ service.title }}
            </h3>
            <p class="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
              {{ service.description }}
            </p>
            <div class="flex flex-wrap gap-1.5 mt-4">
              <span v-for="tech in service.techs" :key="tech"
                class="px-2 py-0.5 text-xs font-medium rounded-md
                       bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ SELECTED WORK ══════════════════════════════════ -->
    <section class="py-20 sm:py-28 bg-slate-50 dark:bg-dark-950">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="max-w-2xl mb-16">
          <span class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider
                       bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 mb-4">
            {{ t('home.work.tag') }}
          </span>
          <h2 class="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            {{ t('home.work.title') }}
          </h2>
        </div>

        <div class="space-y-6">
          <div v-for="(project, idx) in projects" :key="idx"
            class="p-8 rounded-2xl border border-slate-200 dark:border-slate-800
                   bg-white dark:bg-dark-900">
            <div class="flex flex-col lg:flex-row lg:items-start gap-6">
              <div class="flex-1">
                <div class="flex items-center gap-3 mb-3">
                  <h3 class="text-xl font-display font-bold text-slate-900 dark:text-white">
                    {{ project.title }}
                  </h3>
                  <span class="px-2 py-0.5 text-xs font-semibold rounded-md
                               bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400">
                    {{ project.type }}
                  </span>
                </div>
                <p class="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {{ project.description }}
                </p>
                <div class="flex flex-wrap gap-1.5">
                  <span v-for="tech in project.techs" :key="tech"
                    class="px-2 py-0.5 text-xs font-medium rounded-md
                           bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                    {{ tech }}
                  </span>
                </div>
              </div>
              <div class="lg:w-48 shrink-0">
                <div v-for="(metric, mIdx) in project.metrics" :key="mIdx" class="mb-3 last:mb-0">
                  <div class="text-lg font-display font-bold text-slate-900 dark:text-white">{{ metric.value }}</div>
                  <div class="text-xs text-slate-500 dark:text-slate-400">{{ metric.label }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ TEACHING ═══════════════════════════════════════ -->
    <section class="py-20 sm:py-28 bg-white dark:bg-dark-900">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="flex items-end justify-between mb-12">
          <div>
            <span class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider
                         bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 mb-4">
              {{ t('home.teaching.tag') }}
            </span>
            <h2 class="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
              {{ t('home.teaching.title') }}
            </h2>
            <p class="text-slate-600 dark:text-slate-400 mt-2 max-w-lg">
              {{ t('home.teaching.subtitle') }}
            </p>
          </div>
          <router-link to="/cursos"
            class="hidden sm:inline-flex items-center gap-2 text-sm font-semibold
                   text-primary-600 dark:text-primary-400 hover:text-primary-700 transition-colors">
            {{ t('home.teaching.see_all') }} &rarr;
          </router-link>
        </div>

        <div v-if="featuredCourses.length" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <router-link v-for="course in featuredCourses.slice(0, 6)" :key="course.id"
            :to="`/cursos/${course.slug}`"
            class="group rounded-2xl border border-slate-200 dark:border-slate-800
                   hover:border-primary-300 dark:hover:border-primary-500/30
                   hover:shadow-lg transition-all duration-300 overflow-hidden
                   bg-white dark:bg-dark-900">
            <div class="p-6">
              <div class="flex flex-wrap gap-1.5 mb-4">
                <span v-for="tech in (course.technologies || []).slice(0, 3)" :key="tech"
                  class="px-2 py-0.5 text-xs font-medium rounded-md
                         bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  {{ tech }}
                </span>
              </div>
              <h3 class="font-display font-bold text-slate-900 dark:text-white mb-2
                         group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                {{ getTranslation(course).title }}
              </h3>
              <p class="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                {{ getTranslation(course).short_description }}
              </p>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- ═══ CTA FINAL ══════════════════════════════════════ -->
    <section class="py-20 sm:py-28 bg-slate-900 dark:bg-dark-950">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 class="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
          {{ t('home.cta.title') }}
        </h2>
        <p class="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
          {{ t('home.cta.subtitle') }}
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="mailto:info@withjp.ai"
            class="w-full sm:w-auto px-8 py-4 rounded-2xl font-semibold
                   bg-white text-slate-900 hover:bg-slate-100
                   shadow-lg transition-all duration-300 text-center">
            {{ t('home.cta.button_primary') }}
          </a>
          <a href="https://www.linkedin.com/in/desertbarret/" target="_blank" rel="noopener"
            class="w-full sm:w-auto px-8 py-4 rounded-2xl font-semibold
                   text-white border-2 border-white/20
                   hover:bg-white/10 transition-all duration-300 text-center">
            {{ t('home.cta.button_secondary') }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useHead } from '@unhead/vue';
import { coursesApi } from '@/services/api';

const { t, locale } = useI18n();

useHead({
  title: () => t('home.meta.title'),
  meta: [
    { name: 'description', content: () => t('home.meta.description') },
  ],
});

const featuredCourses = ref<any[]>([]);

onMounted(async () => {
  try {
    const { data } = await coursesApi.getFeatured();
    featuredCourses.value = data;
  } catch { /* graceful */ }
});

function getTranslation(item: any) {
  const list = item.translations || [];
  return list.find((t: any) => t.locale === locale.value)
    || list.find((t: any) => t.locale === 'es')
    || list[0]
    || { title: '', description: '', short_description: '' };
}

const stats = computed(() => [
  { value: '10+', label: t('home.stats.years') },
  { value: '25K+', label: t('home.stats.students') },
  { value: '17', label: t('home.stats.courses') },
]);

const services = computed(() => [
  {
    icon: '{ }',
    iconBg: 'bg-slate-100 dark:bg-slate-800',
    title: t('home.what.backend.title'),
    description: t('home.what.backend.description'),
    techs: ['NestJS', 'Node.js', 'Python', 'PostgreSQL', 'Docker'],
  },
  {
    icon: '~/',
    iconBg: 'bg-slate-100 dark:bg-slate-800',
    title: t('home.what.ai.title'),
    description: t('home.what.ai.description'),
    techs: ['Claude API', 'OpenAI', 'LangChain', 'FastAPI', 'RAG'],
  },
  {
    icon: '[ ]',
    iconBg: 'bg-slate-100 dark:bg-slate-800',
    title: t('home.what.mobile.title'),
    description: t('home.what.mobile.description'),
    techs: ['Flutter', 'React Native', 'Kotlin', 'Firebase', 'Socket.IO'],
  },
]);

const projects = computed(() => [
  {
    title: t('home.work.p1.title'),
    type: t('home.work.p1.type'),
    description: t('home.work.p1.description'),
    techs: ['Flutter', 'NestJS', 'PostgreSQL', 'Docker', 'Google Maps', 'Firebase'],
    metrics: [
      { value: '700K+', label: t('home.work.p1.m1') },
      { value: '80K+', label: t('home.work.p1.m2') },
    ],
  },
  {
    title: t('home.work.p2.title'),
    type: t('home.work.p2.type'),
    description: t('home.work.p2.description'),
    techs: ['WhatsApp Business API', 'NestJS', 'Python', 'n8n', 'Meta'],
    metrics: [
      { value: '24/7', label: t('home.work.p2.m1') },
      { value: '80%', label: t('home.work.p2.m2') },
    ],
  },
  {
    title: t('home.work.p3.title'),
    type: t('home.work.p3.type'),
    description: t('home.work.p3.description'),
    techs: ['Flutter', 'NestJS', 'MySQL', 'Socket.IO', 'Clean Architecture'],
    metrics: [
      { value: '5', label: t('home.work.p3.m1') },
      { value: '3', label: t('home.work.p3.m2') },
    ],
  },
]);
</script>
