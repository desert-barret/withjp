<template>
  <div>
    <!-- ═══ HERO ══════════════════════════════════════════════════ -->
    <section class="relative pt-28 pb-16 overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-dark-950 dark:to-dark-900">
      <div class="absolute inset-0 dot-grid opacity-30 dark:opacity-15"></div>
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div class="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <!-- Badge -->
        <div class="hero-enter-1 inline-flex items-center gap-2 px-4 py-2 rounded-full
                    bg-primary-50 dark:bg-primary-500/10 border border-primary-200 dark:border-primary-500/20 mb-8">
          <svg class="w-4 h-4 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
          </svg>
          <span class="text-sm font-semibold text-primary-700 dark:text-primary-400">
            {{ t('academia_page.badge') }}
          </span>
        </div>

        <h1 class="hero-enter-2 text-4xl sm:text-5xl lg:text-6xl font-display font-bold
                   text-slate-900 dark:text-white leading-tight mb-6">
          {{ t('academia_page.hero.title') }}
        </h1>
        <p class="hero-enter-3 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12">
          {{ t('academia_page.hero.subtitle') }}
        </p>

        <!-- Stats -->
        <div class="hero-enter-4 inline-flex flex-wrap items-center justify-center gap-8 sm:gap-12
                    px-8 py-5 rounded-2xl bg-white dark:bg-dark-900
                    border border-slate-200 dark:border-slate-800 shadow-sm">
          <div v-for="stat in heroStats" :key="stat.label" class="text-center">
            <div class="text-2xl sm:text-3xl font-display font-bold gradient-text">{{ stat.value }}</div>
            <div class="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ CATEGORY TABS ════════════════════════════════════════ -->
    <div class="bg-white dark:bg-dark-900 border-b border-slate-200 dark:border-slate-800 sticky top-14 sm:top-16 z-30">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div class="flex flex-wrap gap-2">
          <button
            @click="activeTab = 'udemy'"
            class="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
            :class="activeTab === 'udemy'
              ? 'bg-primary-600 text-white shadow-md shadow-primary-500/25'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'">
            📚 Udemy ({{ allCourses.length }})
          </button>
          <button
            @click="activeTab = 'academy'"
            class="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
            :class="activeTab === 'academy'
              ? 'bg-primary-600 text-white shadow-md shadow-primary-500/25'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'">
            ⚡ JP Academy ({{ academiaItems.length }})
          </button>
          <!-- Category filters (only for udemy tab) -->
          <template v-if="activeTab === 'udemy'">
            <div class="w-px h-9 bg-slate-200 dark:bg-slate-700 self-center mx-1"></div>
            <button v-for="cat in categories" :key="cat.value"
              @click="activeCategory = cat.value"
              class="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
              :class="activeCategory === cat.value && activeTab === 'udemy'
                ? 'bg-slate-800 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'">
              {{ cat.label }}
            </button>
          </template>
        </div>
      </div>
    </div>

    <!-- ═══ JP ACADEMY ════════════════════════════════════════════ -->
    <section v-show="activeTab === 'academy'" class="py-20 bg-white dark:bg-dark-900">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">

        <div class="max-w-2xl mb-12 reveal">
          <span class="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest
                       bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 mb-4">
            {{ t('academia_page.exclusive.title') }}
          </span>
          <h2 class="section-title mb-3">{{ t('academia_page.exclusive.title') }}</h2>
          <p class="text-slate-600 dark:text-slate-400">{{ t('academia_page.exclusive.subtitle') }}</p>
        </div>

        <div v-if="academiaItems.length" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(item, idx) in academiaItems" :key="item.id"
            class="gradient-card card-hover overflow-hidden reveal"
            :class="`stagger-${(idx % 6) + 1}`">
            <div class="p-6">
              <div class="flex items-center gap-2 mb-4">
                <span class="px-2.5 py-1 text-xs font-bold rounded-lg uppercase tracking-wide
                             bg-violet-100 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400">
                  {{ t('academia_page.exclusive.badge') }}
                </span>
                <span v-if="item.category"
                  class="px-2 py-0.5 text-xs font-medium rounded-md uppercase
                         bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                  {{ item.category }}
                </span>
              </div>
              <h3 class="font-display font-bold text-lg text-slate-900 dark:text-white mb-2 line-clamp-2">
                {{ getTranslation(item).title }}
              </h3>
              <p class="text-sm text-slate-600 dark:text-slate-400 mb-5 leading-relaxed line-clamp-3">
                {{ getTranslation(item).short_description || getTranslation(item).description }}
              </p>
              <div class="flex flex-wrap gap-1.5 mb-5">
                <span v-for="tech in (item.technologies || []).slice(0, 5)" :key="tech"
                  class="px-2.5 py-1 text-xs font-semibold rounded-lg
                         bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                  {{ tech }}
                </span>
              </div>
              <a v-if="item.subdomain_url" :href="item.subdomain_url" target="_blank" rel="noopener"
                class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold
                       text-white bg-primary-600 hover:bg-primary-500 transition-colors">
                {{ t('academia_page.exclusive.access') }} →
              </a>
              <span v-else class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold
                                 text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800">
                🔜 {{ t('academia_page.exclusive.coming_soon') }}
              </span>
            </div>
          </div>
        </div>

        <div v-else class="py-20 text-center">
          <div class="w-16 h-16 rounded-2xl bg-violet-100 dark:bg-violet-500/10 flex items-center justify-center mx-auto mb-4">
            <span class="text-3xl">🔜</span>
          </div>
          <p class="text-slate-500 dark:text-slate-400 font-medium">{{ t('academia_page.exclusive.coming_soon') }}</p>
        </div>
      </div>
    </section>

    <!-- ═══ UDEMY COURSES ════════════════════════════════════════ -->
    <section v-show="activeTab === 'udemy'" class="py-20 bg-white dark:bg-dark-900">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">

        <div class="max-w-2xl mb-12 reveal">
          <span class="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest
                       bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 mb-4">
            {{ t('academia_page.udemy.title') }}
          </span>
          <h2 class="section-title mb-3">{{ t('academia_page.udemy.title') }}</h2>
          <p class="text-slate-600 dark:text-slate-400">{{ t('academia_page.udemy.subtitle') }}</p>
        </div>

        <div v-if="filteredCourses.length" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <router-link v-for="(course, idx) in filteredCourses" :key="course.id"
            :to="`/cursos/${course.slug}`"
            class="gradient-card card-hover overflow-hidden reveal"
            :class="`stagger-${(idx % 6) + 1}`">
            <div class="p-6">
              <div class="flex items-center gap-2 mb-4">
                <span class="px-2 py-0.5 text-xs font-bold rounded-md uppercase
                             bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400">
                  {{ course.category }}
                </span>
                <span v-if="course.featured"
                  class="px-2 py-0.5 text-xs font-bold rounded-md
                         bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  ★ {{ t('academia_page.featured') }}
                </span>
              </div>
              <h3 class="font-display font-bold text-slate-900 dark:text-white mb-2
                         group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                {{ getTranslation(course).title }}
              </h3>
              <p class="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-4">
                {{ getTranslation(course).short_description }}
              </p>
              <div class="flex flex-wrap gap-1.5">
                <span v-for="tech in (course.technologies || []).slice(0, 4)" :key="tech"
                  class="px-2.5 py-1 text-xs font-semibold rounded-lg
                         bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                  {{ tech }}
                </span>
              </div>
              <div class="mt-4 flex items-center text-xs font-semibold text-primary-600 dark:text-primary-400">
                {{ locale === 'es' ? 'Ver curso' : 'View course' }}
                <svg class="w-3.5 h-3.5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </div>
          </router-link>
        </div>

        <div v-else class="py-20 text-center text-slate-500 dark:text-slate-400">
          {{ t('academia_page.no_courses') }}
        </div>
      </div>
    </section>

    <!-- ═══ UDEMY CTA ════════════════════════════════════════════ -->
    <section class="py-20 bg-slate-50 dark:bg-dark-950">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 text-center reveal">
        <div class="w-16 h-16 rounded-2xl bg-white dark:bg-dark-900 border border-slate-200 dark:border-slate-800
                    flex items-center justify-center mx-auto mb-6 shadow-sm">
          <svg class="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
          </svg>
        </div>
        <h2 class="text-2xl font-display font-bold text-slate-900 dark:text-white mb-3">
          {{ t('academia_page.udemy.title') }}
        </h2>
        <p class="text-slate-600 dark:text-slate-400 mb-8">
          {{ t('academia_page.udemy.subtitle') }}
        </p>
        <a href="https://www.udemy.com/user/juan-pablo-guaman-rodriguez/" target="_blank" rel="noopener"
          class="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold
                 text-white bg-slate-900 dark:bg-white dark:text-slate-900
                 hover:bg-slate-800 dark:hover:bg-slate-100
                 shadow-lg transition-all duration-300">
          {{ t('academia_page.udemy.see_all') }}
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useHead } from '@unhead/vue';
import { coursesApi, academiaApi } from '@/services/api';
import { useReveal } from '@/composables/useReveal';

const { t, locale } = useI18n();
useReveal();

useHead({
  title: () => t('academia_page.meta.title'),
  meta: [
    { name: 'description', content: () => t('academia_page.meta.description') },
    { name: 'keywords', content: 'Academia, cursos, Udemy, Juan Pablo Guaman, Juan Pablo Guaman Rodriguez, Juan Pablo Guamán, Juan Pablo Guamán Rodríguez, withjp.ai, NestJS, Flutter, Python, educación técnica, Ecuador' },
    { name: 'author', content: 'Juan Pablo Guamán Rodríguez' },
    { property: 'og:title', content: () => t('academia_page.meta.title') },
    { property: 'og:description', content: () => t('academia_page.meta.description') },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://withjp.ai/academia' },
    { property: 'og:image', content: 'https://withjp.ai/og-image.jpg' },
    { property: 'og:site_name', content: 'withjp.ai' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@jp_desertbarret' },
    { name: 'twitter:title', content: () => t('academia_page.meta.title') },
    { name: 'twitter:description', content: () => t('academia_page.meta.description') },
    { name: 'twitter:image', content: 'https://withjp.ai/og-image.jpg' },
  ],
});

const activeTab = ref<'udemy' | 'academy'>('udemy');
const activeCategory = ref('all');
const allCourses = ref<any[]>([]);
const academiaItems = ref<any[]>([]);

const heroStats = computed(() => [
  { value: '25K+', label: t('academia_page.stats.students') },
  { value: '17', label: t('academia_page.stats.courses') },
  { value: '4.3★', label: t('academia_page.stats.rating') },
]);

const categories = computed(() => [
  { value: 'all', label: t('academia_page.filter_all') },
  { value: 'web', label: t('courses.category.web') },
  { value: 'mobile', label: t('courses.category.mobile') },
  { value: 'automation', label: t('courses.category.automation') },
  { value: 'ai', label: t('courses.category.ai') },
]);

const filteredCourses = computed(() => {
  if (activeCategory.value === 'all') return allCourses.value;
  return allCourses.value.filter(c => c.category === activeCategory.value);
});

onMounted(async () => {
  try {
    const [coursesRes, academiaRes] = await Promise.all([
      coursesApi.getAll(),
      academiaApi.getAll(),
    ]);
    allCourses.value = coursesRes.data;
    academiaItems.value = academiaRes.data;
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
