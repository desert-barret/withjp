<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-20 bg-gradient-to-b from-blue-50/50 to-white dark:from-blue-950/20 dark:to-dark-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full
                    bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 mb-8">
          <span class="text-sm font-medium text-blue-700 dark:text-blue-400">
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

    <!-- Stats bar -->
    <section class="py-12 bg-white dark:bg-dark-900 border-y border-slate-200 dark:border-slate-800">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <div class="grid grid-cols-3 gap-8 text-center">
          <div>
            <div class="text-3xl font-display font-bold text-slate-900 dark:text-white">25,000+</div>
            <div class="text-sm text-slate-500 dark:text-slate-400">{{ t('academia_page.stats.students') }}</div>
          </div>
          <div>
            <div class="text-3xl font-display font-bold text-slate-900 dark:text-white">17+</div>
            <div class="text-sm text-slate-500 dark:text-slate-400">{{ t('academia_page.stats.courses') }}</div>
          </div>
          <div>
            <div class="text-3xl font-display font-bold text-slate-900 dark:text-white">4.3 ★</div>
            <div class="text-sm text-slate-500 dark:text-slate-400">{{ t('academia_page.stats.rating') }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Udemy Courses CTA -->
    <section class="py-20 bg-white dark:bg-dark-900">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="flex items-end justify-between mb-12">
          <div>
            <h2 class="text-3xl font-display font-bold text-slate-900 dark:text-white">
              {{ t('academia_page.udemy.title') }}
            </h2>
            <p class="text-slate-600 dark:text-slate-400 mt-2">{{ t('academia_page.udemy.subtitle') }}</p>
          </div>
          <router-link to="/cursos"
            class="hidden sm:inline-flex text-sm font-semibold text-primary-600 dark:text-primary-400">
            {{ t('academia_page.udemy.see_all') }} &rarr;
          </router-link>
        </div>

        <div v-if="courses.length" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <router-link v-for="course in courses.slice(0, 6)" :key="course.id"
            :to="`/cursos/${course.slug}`"
            class="group p-6 rounded-2xl border border-slate-200 dark:border-slate-800
                   hover:border-primary-300 dark:hover:border-primary-500/30
                   bg-white dark:bg-dark-900 hover:shadow-lg transition-all">
            <div class="flex flex-wrap gap-1.5 mb-4">
              <span v-for="tech in (course.technologies || []).slice(0, 3)" :key="tech"
                class="px-2 py-0.5 text-xs font-medium rounded-md
                       bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                {{ tech }}
              </span>
            </div>
            <h3 class="font-display font-bold text-slate-900 dark:text-white
                       group-hover:text-primary-600 dark:group-hover:text-primary-400
                       transition-colors line-clamp-2 mb-2">
              {{ getTranslation(course).title }}
            </h3>
            <p class="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
              {{ getTranslation(course).short_description }}
            </p>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Academia JP private -->
    <section class="py-20 bg-slate-50 dark:bg-dark-950">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 class="text-3xl font-display font-bold text-slate-900 dark:text-white mb-4 text-center">
          {{ t('academia_page.private.title') }}
        </h2>
        <p class="text-slate-600 dark:text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          {{ t('academia_page.private.subtitle') }}
        </p>

        <div v-if="academiaItems.length" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="item in academiaItems" :key="item.id"
            class="p-6 rounded-2xl border border-slate-200 dark:border-slate-800
                   bg-white dark:bg-dark-900">
            <div class="flex items-center gap-2 mb-4">
              <span v-if="item.badge"
                class="px-2 py-0.5 text-xs font-bold rounded-md uppercase
                       bg-primary-100 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400">
                {{ item.badge }}
              </span>
            </div>
            <h3 class="font-display font-bold text-slate-900 dark:text-white mb-2">
              {{ getTranslation(item).title }}
            </h3>
            <p class="text-sm text-slate-600 dark:text-slate-400 mb-4">
              {{ getTranslation(item).short_description || getTranslation(item).description }}
            </p>
            <div class="flex flex-wrap gap-1.5 mb-4">
              <span v-for="tech in (item.technologies || []).slice(0, 4)" :key="tech"
                class="px-2 py-0.5 text-xs rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                {{ tech }}
              </span>
            </div>
            <a v-if="item.subdomain_url" :href="item.subdomain_url" target="_blank" rel="noopener"
              class="inline-flex items-center gap-2 text-sm font-semibold
                     text-primary-600 dark:text-primary-400 hover:text-primary-700 transition-colors">
              {{ t('academia_page.private.access') }} &rarr;
            </a>
            <span v-else class="text-sm font-medium text-slate-400 dark:text-slate-500">
              {{ t('academia_page.private.coming_soon') }}
            </span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useHead } from '@unhead/vue';
import { coursesApi, academiaApi } from '@/services/api';

const { t, locale } = useI18n();

useHead({
  title: () => t('academia_page.meta.title'),
  meta: [
    { name: 'description', content: () => t('academia_page.meta.description') },
  ],
});

const courses = ref<any[]>([]);
const academiaItems = ref<any[]>([]);

onMounted(async () => {
  const [coursesRes, academiaRes] = await Promise.all([
    coursesApi.getFeatured().catch(() => ({ data: [] })),
    academiaApi.getAll().catch(() => ({ data: [] })),
  ]);
  courses.value = coursesRes.data;
  academiaItems.value = academiaRes.data;
});

function getTranslation(item: any) {
  const list = item.translations || [];
  return list.find((t: any) => t.locale === locale.value)
    || list.find((t: any) => t.locale === 'es')
    || list[0]
    || { title: '', description: '', short_description: '' };
}
</script>
