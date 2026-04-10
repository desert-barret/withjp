<template>
  <div>
    <!-- ═══ HERO ════════════════════════════════════════════════ -->
    <section class="pt-28 pb-16 bg-gradient-to-b from-slate-50 to-white dark:from-dark-950 dark:to-dark-900">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="hero-enter-1 max-w-2xl">
          <span class="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest
                       bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 mb-5">
            Blog
          </span>
          <h1 class="text-4xl sm:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4">
            {{ t('blog_page.title') }}
          </h1>
          <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            {{ t('blog_page.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- ═══ POSTS GRID ══════════════════════════════════════════ -->
    <section class="py-16 bg-white dark:bg-dark-900">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <!-- Static first article (AI) -->
          <router-link to="/blog/por-que-usar-ia-es-una-ventaja"
            class="group gradient-card card-hover overflow-hidden reveal">
            <!-- Cover image -->
            <div class="aspect-video bg-gradient-to-br from-indigo-500 via-violet-600 to-purple-700
                        relative overflow-hidden">
              <div class="absolute inset-0 opacity-20"
                style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 24px 24px;"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-6xl opacity-80">🤖</div>
              </div>
              <!-- Category badge over image -->
              <div class="absolute top-3 left-3">
                <span class="px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur text-white">
                  {{ t('blog_page.static_tag') }}
                </span>
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center gap-3 mb-3">
                <span class="text-xs text-slate-400">{{ t('blog_page.static_read') }}</span>
              </div>
              <h3 class="font-display font-bold text-slate-900 dark:text-white mb-3
                         group-hover:text-primary-600 dark:group-hover:text-primary-400
                         transition-colors text-lg leading-snug">
                {{ t('blog_page.static_title') }}
              </h3>
              <p class="text-sm text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed">
                {{ t('blog_page.static_excerpt') }}
              </p>
              <div class="mt-4 flex items-center text-xs font-semibold text-primary-600 dark:text-primary-400">
                {{ locale === 'es' ? 'Leer artículo' : 'Read article' }}
                <svg class="w-3.5 h-3.5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </div>
          </router-link>

          <!-- API posts -->
          <router-link v-for="(post, idx) in posts" :key="post.id"
            :to="`/blog/${post.slug}`"
            class="group gradient-card card-hover overflow-hidden reveal"
            :class="`stagger-${(idx % 5) + 2}`">
            <div v-if="post.featured_image"
              class="aspect-video bg-slate-100 dark:bg-slate-800 overflow-hidden">
              <img :src="post.featured_image" :alt="getTranslation(post).title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div v-else class="aspect-video bg-gradient-to-br from-slate-700 to-slate-900 relative overflow-hidden">
              <div class="absolute inset-0 opacity-10"
                style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 24px 24px;"></div>
            </div>
            <div class="p-6">
              <div class="flex items-center gap-3 mb-3">
                <span v-if="post.category"
                  class="px-2.5 py-1 text-xs font-bold rounded-lg uppercase
                         bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400">
                  {{ post.category }}
                </span>
                <span v-if="post.reading_time" class="text-xs text-slate-400">
                  {{ post.reading_time }} {{ t('blog_page.read') }}
                </span>
              </div>
              <h3 class="font-display font-bold text-slate-900 dark:text-white mb-2
                         group-hover:text-primary-600 dark:group-hover:text-primary-400
                         transition-colors line-clamp-2 text-lg">
                {{ getTranslation(post).title }}
              </h3>
              <p class="text-sm text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed">
                {{ getTranslation(post).excerpt }}
              </p>
              <div class="mt-4 flex items-center text-xs font-semibold text-primary-600 dark:text-primary-400">
                {{ locale === 'es' ? 'Leer artículo' : 'Read article' }}
                <svg class="w-3.5 h-3.5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </div>
          </router-link>
        </div>

        <!-- Coming soon notice if no API posts -->
        <div v-if="!posts.length" class="mt-12 py-12 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800
                                         text-center text-slate-500 dark:text-slate-400">
          <div class="text-4xl mb-3">✍️</div>
          <p class="font-medium">{{ t('blog_page.no_posts') }}</p>
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
import { useReveal } from '@/composables/useReveal';

const { t, locale } = useI18n();
useReveal();

useHead({
  title: () => t('blog_page.meta.title'),
  meta: [
    { name: 'description', content: () => t('blog_page.meta.description') },
    { property: 'og:title', content: () => t('blog_page.meta.title') },
    { property: 'og:description', content: () => t('blog_page.meta.description') },
    { property: 'og:type', content: 'website' },
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
