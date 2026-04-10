<template>
  <div>
    <section class="pt-32 pb-8 bg-gradient-to-b from-slate-50 to-white dark:from-dark-950 dark:to-dark-900">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 class="text-4xl sm:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4">
          {{ t('blog_page.title') }}
        </h1>
        <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
          {{ t('blog_page.subtitle') }}
        </p>
      </div>
    </section>

    <section class="py-12 bg-white dark:bg-dark-900">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div v-if="posts.length" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <router-link v-for="post in posts" :key="post.id"
            :to="`/blog/${post.slug}`"
            class="group rounded-2xl border border-slate-200 dark:border-slate-800
                   hover:border-primary-300 dark:hover:border-primary-500/30
                   hover:shadow-lg transition-all duration-300 overflow-hidden
                   bg-white dark:bg-dark-900">
            <div v-if="post.featured_image"
              class="aspect-video bg-slate-100 dark:bg-slate-800 overflow-hidden">
              <img :src="post.featured_image" :alt="getTranslation(post).title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div class="p-6">
              <div class="flex items-center gap-3 mb-3">
                <span v-if="post.category"
                  class="px-2 py-0.5 text-xs font-semibold rounded-md uppercase
                         bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400">
                  {{ post.category }}
                </span>
                <span v-if="post.reading_time" class="text-xs text-slate-400">
                  {{ post.reading_time }} min
                </span>
              </div>
              <h3 class="font-display font-bold text-slate-900 dark:text-white mb-2
                         group-hover:text-primary-600 dark:group-hover:text-primary-400
                         transition-colors line-clamp-2">
                {{ getTranslation(post).title }}
              </h3>
              <p class="text-sm text-slate-500 dark:text-slate-400 line-clamp-3">
                {{ getTranslation(post).excerpt }}
              </p>
            </div>
          </router-link>
        </div>

        <div v-else class="py-20 text-center text-slate-500 dark:text-slate-400">
          {{ t('blog_page.no_posts') }}
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useHead } from '@unhead/vue';
import { blogApi } from '@/services/api';

const { t, locale } = useI18n();

useHead({
  title: () => t('blog_page.meta.title'),
  meta: [
    { name: 'description', content: () => t('blog_page.meta.description') },
  ],
});

const posts = ref<any[]>([]);

onMounted(async () => {
  try {
    const { data } = await blogApi.getAll();
    posts.value = data;
  } catch { /* graceful */ }
});

function getTranslation(item: any) {
  const list = item.translations || [];
  return list.find((t: any) => t.locale === locale.value)
    || list.find((t: any) => t.locale === 'es')
    || list[0]
    || { title: '', excerpt: '', content: '' };
}
</script>
