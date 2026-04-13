<template>
  <div>
    <section class="pt-32 pb-8 bg-gradient-to-b from-slate-50 to-white dark:from-dark-950 dark:to-dark-900">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 class="text-4xl sm:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4">
          {{ t('courses_page.title') }}
        </h1>
        <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
          {{ t('courses_page.subtitle') }}
        </p>
      </div>
    </section>

    <!-- Filters -->
    <section class="py-6 bg-white dark:bg-dark-900 border-b border-slate-200 dark:border-slate-800 sticky top-14 sm:top-16 z-30">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="flex flex-wrap gap-2">
          <button v-for="cat in categories" :key="cat.value"
            @click="activeCategory = cat.value"
            class="px-4 py-2 rounded-xl text-sm font-medium transition-all"
            :class="activeCategory === cat.value
              ? 'bg-primary-600 text-white shadow-md'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'">
            {{ cat.label }}
          </button>
        </div>
      </div>
    </section>

    <!-- Course grid -->
    <section class="py-12 bg-white dark:bg-dark-900">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div v-if="filteredCourses.length" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <router-link v-for="course in filteredCourses" :key="course.id"
            :to="`/cursos/${course.slug}`"
            class="group rounded-2xl border border-slate-200 dark:border-slate-800
                   hover:border-primary-300 dark:hover:border-primary-500/30
                   hover:shadow-lg transition-all duration-300 overflow-hidden
                   bg-white dark:bg-dark-900">
            <div class="p-6">
              <div class="flex items-center gap-2 mb-4">
                <span class="px-2 py-0.5 text-xs font-semibold rounded-md uppercase
                             bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400">
                  {{ course.category }}
                </span>
                <span v-if="course.featured"
                  class="px-2 py-0.5 text-xs font-semibold rounded-md
                         bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  ★ {{ t('courses_page.featured') }}
                </span>
              </div>
              <h3 class="font-display font-bold text-slate-900 dark:text-white mb-2
                         group-hover:text-primary-600 dark:group-hover:text-primary-400
                         transition-colors line-clamp-2">
                {{ getTranslation(course).title }}
              </h3>
              <p class="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-4">
                {{ getTranslation(course).short_description }}
              </p>
              <div class="flex flex-wrap gap-1.5">
                <span v-for="tech in (course.technologies || []).slice(0, 4)" :key="tech"
                  class="px-2 py-0.5 text-xs rounded-md
                         bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                  {{ tech }}
                </span>
              </div>
            </div>
          </router-link>
        </div>

        <div v-else class="py-20 text-center text-slate-500 dark:text-slate-400">
          {{ t('courses_page.no_courses') }}
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
  title: () => t('courses_page.meta.title'),
  meta: [
    { name: 'description', content: () => t('courses_page.meta.description') },
    { name: 'keywords', content: 'Cursos, Udemy, Juan Pablo Guaman, Juan Pablo Guaman Rodriguez, Juan Pablo Guamán, Juan Pablo Guamán Rodríguez, withjp.ai, NestJS, Flutter, Python, desarrollo web, Ecuador' },
    { name: 'author', content: 'Juan Pablo Guamán Rodríguez' },
    { property: 'og:title', content: () => t('courses_page.meta.title') },
    { property: 'og:description', content: () => t('courses_page.meta.description') },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://withjp.ai/cursos' },
    { property: 'og:image', content: 'https://withjp.ai/og-image.jpg' },
    { property: 'og:site_name', content: 'withjp.ai' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@jp_desertbarret' },
    { name: 'twitter:title', content: () => t('courses_page.meta.title') },
    { name: 'twitter:description', content: () => t('courses_page.meta.description') },
    { name: 'twitter:image', content: 'https://withjp.ai/og-image.jpg' },
  ],
});

const allCourses = ref<any[]>([]);
const activeCategory = ref('all');

const categories = computed(() => [
  { value: 'all', label: t('courses.category.all') },
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
    const { data } = await coursesApi.getAll();
    allCourses.value = data;
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
