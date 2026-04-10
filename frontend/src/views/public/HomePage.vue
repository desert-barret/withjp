<template>
  <div>
    <!-- HERO — Conversion focused -->
    <section class="relative min-h-[90vh] flex items-center overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-100/50
                  dark:from-dark-950 dark:via-dark-900 dark:to-dark-950"></div>
      <div class="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style="background-image: radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0); background-size: 32px 32px;"></div>

      <div class="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <div class="text-center max-w-4xl mx-auto">
          <!-- Status badge -->
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full
                      bg-emerald-50 dark:bg-emerald-500/10
                      border border-emerald-200 dark:border-emerald-500/20 mb-8">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span class="text-sm font-medium text-emerald-700 dark:text-emerald-400">
              {{ t('home.hero.available') }}
            </span>
          </div>

          <!-- Headline -->
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-display font-bold
                     text-slate-900 dark:text-white leading-tight mb-6">
            {{ t('home.hero.headline') }}
          </h1>

          <p class="text-lg sm:text-xl text-slate-600 dark:text-slate-400
                    max-w-2xl mx-auto mb-10 leading-relaxed">
            {{ t('home.hero.description') }}
          </p>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <router-link to="/whatsapp"
              class="w-full sm:w-auto px-8 py-4 rounded-2xl font-semibold text-white
                     bg-gradient-to-r from-emerald-600 to-emerald-500
                     hover:from-emerald-500 hover:to-emerald-400
                     shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40
                     transition-all duration-300 text-center">
              {{ t('home.hero.cta_primary') }}
            </router-link>
            <router-link to="/cursos"
              class="w-full sm:w-auto px-8 py-4 rounded-2xl font-semibold
                     text-slate-700 dark:text-slate-200
                     border-2 border-slate-200 dark:border-slate-700
                     hover:border-primary-400 dark:hover:border-primary-500
                     hover:text-primary-600 dark:hover:text-primary-400
                     transition-all duration-300 text-center">
              {{ t('home.hero.cta_secondary') }}
            </router-link>
          </div>

          <!-- Social proof bar -->
          <div class="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            <div v-for="stat in stats" :key="stat.label"
              class="text-center">
              <div class="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
                {{ stat.value }}
              </div>
              <div class="text-sm text-slate-500 dark:text-slate-400">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SERVICES — 3 pillars -->
    <section class="py-20 sm:py-28 bg-white dark:bg-dark-900">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider
                       bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 mb-4">
            {{ t('home.services.tag') }}
          </span>
          <h2 class="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            {{ t('home.services.title') }}
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <router-link v-for="(service, idx) in services" :key="idx" :to="service.link"
            class="group p-8 rounded-2xl border border-slate-200 dark:border-slate-800
                   hover:border-primary-300 dark:hover:border-primary-500/30
                   hover:shadow-xl hover:shadow-primary-500/5
                   bg-white dark:bg-dark-900 transition-all duration-300">
            <div class="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-2xl"
              :class="service.iconBg">
              {{ service.icon }}
            </div>
            <h3 class="text-xl font-display font-bold text-slate-900 dark:text-white mb-3
                       group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {{ service.title }}
            </h3>
            <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
              {{ service.description }}
            </p>
          </router-link>
        </div>
      </div>
    </section>

    <!-- HOW IT WORKS — 3 steps -->
    <section class="py-20 sm:py-28 bg-slate-50 dark:bg-dark-950">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider
                       bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 mb-4">
            {{ t('home.how.tag') }}
          </span>
          <h2 class="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            {{ t('home.how.title') }}
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(step, idx) in steps" :key="idx"
            class="relative p-8 rounded-2xl bg-white dark:bg-dark-900
                   border border-slate-200 dark:border-slate-800">
            <div class="text-5xl font-display font-bold text-primary-100 dark:text-primary-900/30 mb-4">
              {{ String(idx + 1).padStart(2, '0') }}
            </div>
            <h3 class="text-lg font-display font-bold text-slate-900 dark:text-white mb-2">
              {{ step.title }}
            </h3>
            <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
              {{ step.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURED COURSES -->
    <section class="py-20 sm:py-28 bg-white dark:bg-dark-900">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="flex items-end justify-between mb-12">
          <div>
            <span class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider
                         bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 mb-4">
              {{ t('home.courses.tag') }}
            </span>
            <h2 class="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
              {{ t('home.courses.title') }}
            </h2>
          </div>
          <router-link to="/cursos"
            class="hidden sm:inline-flex items-center gap-2 text-sm font-semibold
                   text-primary-600 dark:text-primary-400 hover:text-primary-700 transition-colors">
            {{ t('home.courses.see_all') }} &rarr;
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

        <div class="mt-8 text-center sm:hidden">
          <router-link to="/cursos"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm
                   text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-primary-500/30
                   hover:bg-primary-50 dark:hover:bg-primary-500/10 transition-colors">
            {{ t('home.courses.see_all') }} &rarr;
          </router-link>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-20 sm:py-28 bg-slate-50 dark:bg-dark-950">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            {{ t('home.faq.title') }}
          </h2>
        </div>

        <div class="space-y-4">
          <details v-for="(item, idx) in faqItems" :key="idx"
            class="group rounded-2xl border border-slate-200 dark:border-slate-800
                   bg-white dark:bg-dark-900 overflow-hidden">
            <summary class="flex items-center justify-between px-6 py-5 cursor-pointer
                           text-slate-900 dark:text-white font-semibold
                           hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              {{ item.question }}
              <svg class="w-5 h-5 shrink-0 ml-4 transition-transform group-open:rotate-180"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
              </svg>
            </summary>
            <div class="px-6 pb-5 text-slate-600 dark:text-slate-400 leading-relaxed">
              {{ item.answer }}
            </div>
          </details>
        </div>
      </div>
    </section>

    <!-- CTA FINAL -->
    <section class="py-20 sm:py-28 bg-gradient-to-br from-primary-600 to-primary-700">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 class="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
          {{ t('home.cta.title') }}
        </h2>
        <p class="text-lg text-primary-100 mb-10 max-w-2xl mx-auto">
          {{ t('home.cta.subtitle') }}
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <router-link to="/whatsapp"
            class="w-full sm:w-auto px-8 py-4 rounded-2xl font-semibold
                   bg-white text-primary-700 hover:bg-primary-50
                   shadow-lg transition-all duration-300 text-center">
            {{ t('home.cta.button_primary') }}
          </router-link>
          <router-link to="/cursos"
            class="w-full sm:w-auto px-8 py-4 rounded-2xl font-semibold
                   text-white border-2 border-white/30
                   hover:bg-white/10 transition-all duration-300 text-center">
            {{ t('home.cta.button_secondary') }}
          </router-link>
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
  { value: '10+', label: t('home.stats.experience') },
  { value: '25,000+', label: t('home.stats.students') },
  { value: '17', label: t('home.stats.courses') },
  { value: '100%', label: t('home.stats.meta_api') },
]);

const services = computed(() => [
  {
    icon: '💬',
    iconBg: 'bg-emerald-50 dark:bg-emerald-500/10',
    title: t('home.services.whatsapp.title'),
    description: t('home.services.whatsapp.description'),
    link: '/whatsapp',
  },
  {
    icon: '🎓',
    iconBg: 'bg-blue-50 dark:bg-blue-500/10',
    title: t('home.services.courses.title'),
    description: t('home.services.courses.description'),
    link: '/academia',
  },
  {
    icon: '⚡',
    iconBg: 'bg-purple-50 dark:bg-purple-500/10',
    title: t('home.services.dev.title'),
    description: t('home.services.dev.description'),
    link: '/about',
  },
]);

const steps = computed(() => [
  { title: t('home.how.step1.title'), description: t('home.how.step1.description') },
  { title: t('home.how.step2.title'), description: t('home.how.step2.description') },
  { title: t('home.how.step3.title'), description: t('home.how.step3.description') },
]);

const faqItems = computed(() => [
  { question: t('home.faq.q1.question'), answer: t('home.faq.q1.answer') },
  { question: t('home.faq.q2.question'), answer: t('home.faq.q2.answer') },
  { question: t('home.faq.q3.question'), answer: t('home.faq.q3.answer') },
  { question: t('home.faq.q4.question'), answer: t('home.faq.q4.answer') },
  { question: t('home.faq.q5.question'), answer: t('home.faq.q5.answer') },
]);
</script>
