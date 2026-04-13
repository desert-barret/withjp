<template>
  <div v-if="course">
    <section class="pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white dark:from-dark-950 dark:to-dark-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <!-- Breadcrumb -->
        <nav class="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-8">
          <router-link to="/" class="hover:text-primary-600 dark:hover:text-primary-400">{{ t('nav.home') }}</router-link>
          <span>/</span>
          <router-link to="/cursos" class="hover:text-primary-600 dark:hover:text-primary-400">{{ t('nav.courses') }}</router-link>
          <span>/</span>
          <span class="text-slate-900 dark:text-white truncate">{{ translation.title }}</span>
        </nav>

        <!-- Category + Featured badges -->
        <div class="flex items-center gap-2 mb-4">
          <span class="px-3 py-1 text-xs font-semibold rounded-full uppercase
                       bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400">
            {{ course.category }}
          </span>
          <span v-if="course.featured"
            class="px-3 py-1 text-xs font-semibold rounded-full
                   bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400">
            ★ {{ t('courses_page.featured') }}
          </span>
        </div>

        <h1 class="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">
          {{ translation.title }}
        </h1>

        <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
          {{ translation.description }}
        </p>

        <!-- Tech stack -->
        <div class="flex flex-wrap gap-2 mb-8">
          <span v-for="tech in (course.technologies || [])" :key="tech"
            class="px-3 py-1.5 text-sm font-medium rounded-xl
                   bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            {{ tech }}
          </span>
        </div>

        <!-- CTAs -->
        <div class="flex flex-wrap gap-4">
          <a v-if="course.demo_url" :href="course.demo_url" target="_blank" rel="noopener"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-white
                   bg-gradient-to-r from-purple-600 to-purple-500
                   hover:from-purple-500 hover:to-purple-400
                   shadow-lg shadow-purple-500/25 transition-all duration-300">
            {{ t('courses_page.view_on_udemy') }}
          </a>
          <a v-if="course.github_url" :href="course.github_url" target="_blank" rel="noopener"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold
                   text-slate-700 dark:text-slate-200 border-2 border-slate-200 dark:border-slate-700
                   hover:border-slate-400 transition-all duration-300">
            GitHub
          </a>
        </div>
      </div>
    </section>

    <!-- Related courses -->
    <section v-if="relatedCourses.length" class="py-20 bg-white dark:bg-dark-900">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 class="text-2xl font-display font-bold text-slate-900 dark:text-white mb-8">
          {{ t('courses_page.related') }}
        </h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <router-link v-for="c in relatedCourses" :key="c.id" :to="`/cursos/${c.slug}`"
            class="group p-6 rounded-2xl border border-slate-200 dark:border-slate-800
                   hover:border-primary-300 dark:hover:border-primary-500/30
                   hover:shadow-lg transition-all">
            <h3 class="font-display font-bold text-slate-900 dark:text-white
                       group-hover:text-primary-600 dark:group-hover:text-primary-400
                       transition-colors line-clamp-2 mb-2">
              {{ getTranslation(c).title }}
            </h3>
            <p class="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
              {{ getTranslation(c).short_description }}
            </p>
          </router-link>
        </div>
      </div>
    </section>
  </div>

  <!-- Loading -->
  <div v-else-if="loading" class="pt-32 pb-20 text-center">
    <p class="text-slate-500">{{ t('common.loading') }}</p>
  </div>

  <!-- Not found -->
  <div v-else class="pt-32 pb-20 text-center">
    <h1 class="text-3xl font-display font-bold text-slate-900 dark:text-white mb-4">{{ t('common.not_found') }}</h1>
    <router-link to="/cursos" class="text-primary-600 dark:text-primary-400 font-semibold">
      &larr; {{ t('courses_page.back_to_courses') }}
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useHead } from '@unhead/vue';
import { coursesApi } from '@/services/api';

const route = useRoute();
const { t, locale } = useI18n();

const course = ref<any>(null);
const loading = ref(true);
const allCourses = ref<any[]>([]);

const translation = computed(() => getTranslation(course.value));

const relatedCourses = computed(() => {
  if (!course.value) return [];
  return allCourses.value
    .filter(c => c.id !== course.value.id && c.category === course.value.category)
    .slice(0, 3);
});

useHead({
  title: () => translation.value?.title ? `${translation.value.title} | withjp.ai` : 'withjp.ai',
  meta: [
    { name: 'description', content: () => translation.value?.short_description || translation.value?.description || '' },
    { name: 'keywords', content: () => `${translation.value?.title || 'Curso'}, Juan Pablo Guaman, Juan Pablo Guaman Rodriguez, Juan Pablo Guamán, Juan Pablo Guamán Rodríguez, withjp.ai, Udemy, curso online` },
    { name: 'author', content: 'Juan Pablo Guamán Rodríguez' },
    { property: 'og:title', content: () => translation.value?.title || '' },
    { property: 'og:description', content: () => translation.value?.short_description || '' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: 'https://withjp.ai/og-image.jpg' },
    { property: 'og:site_name', content: 'withjp.ai' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@jp_desertbarret' },
    { name: 'twitter:title', content: () => translation.value?.title || '' },
    { name: 'twitter:description', content: () => translation.value?.short_description || '' },
    { name: 'twitter:image', content: 'https://withjp.ai/og-image.jpg' },
  ],
});

async function loadCourse(slug: string) {
  loading.value = true;
  try {
    const [courseRes, allRes] = await Promise.all([
      coursesApi.getBySlug(slug),
      coursesApi.getAll(),
    ]);
    course.value = courseRes.data;
    allCourses.value = allRes.data;
  } catch {
    course.value = null;
  } finally {
    loading.value = false;
  }
}

function getTranslation(item: any) {
  if (!item) return { title: '', description: '', short_description: '' };
  const list = item.translations || [];
  return list.find((t: any) => t.locale === locale.value)
    || list.find((t: any) => t.locale === 'es')
    || list[0]
    || { title: '', description: '', short_description: '' };
}

onMounted(() => loadCourse(route.params.slug as string));
watch(() => route.params.slug, (slug) => { if (slug) loadCourse(slug as string); });
</script>
