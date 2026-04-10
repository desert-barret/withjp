<template>
  <div v-if="post">
    <section class="pt-32 pb-12 bg-gradient-to-b from-slate-50 to-white dark:from-dark-950 dark:to-dark-900">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        <!-- Breadcrumb -->
        <nav class="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-8">
          <router-link to="/" class="hover:text-primary-600">{{ t('nav.home') }}</router-link>
          <span>/</span>
          <router-link to="/blog" class="hover:text-primary-600">Blog</router-link>
          <span>/</span>
          <span class="text-slate-900 dark:text-white truncate">{{ translation.title }}</span>
        </nav>

        <div class="flex items-center gap-3 mb-4">
          <span v-if="post.category"
            class="px-3 py-1 text-xs font-semibold rounded-full uppercase
                   bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400">
            {{ post.category }}
          </span>
          <span v-if="post.reading_time" class="text-sm text-slate-400">
            {{ post.reading_time }} min {{ t('blog_page.read') }}
          </span>
          <span v-if="post.published_at" class="text-sm text-slate-400">
            · {{ new Date(post.published_at).toLocaleDateString(locale === 'en' ? 'en-US' : 'es-ES', { year: 'numeric', month: 'long', day: 'numeric' }) }}
          </span>
        </div>

        <h1 class="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">
          {{ translation.title }}
        </h1>

        <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          {{ translation.excerpt }}
        </p>
      </div>
    </section>

    <!-- Content -->
    <section class="pb-20 bg-white dark:bg-dark-900">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        <article class="prose prose-slate dark:prose-invert prose-lg max-w-none
                        prose-headings:font-display prose-headings:font-bold
                        prose-a:text-primary-600 dark:prose-a:text-primary-400
                        prose-code:text-primary-600 dark:prose-code:text-primary-400"
          v-html="renderedContent">
        </article>

        <!-- Tags -->
        <div v-if="post.tags && post.tags.length" class="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div class="flex flex-wrap gap-2">
            <span v-for="tag in post.tags" :key="tag"
              class="px-3 py-1 text-sm rounded-full
                     bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
              #{{ tag }}
            </span>
          </div>
        </div>

        <!-- Back -->
        <div class="mt-8">
          <router-link to="/blog" class="text-primary-600 dark:text-primary-400 font-semibold">
            &larr; {{ t('blog_page.back') }}
          </router-link>
        </div>
      </div>
    </section>
  </div>

  <div v-else-if="loading" class="pt-32 pb-20 text-center">
    <p class="text-slate-500">{{ t('common.loading') }}</p>
  </div>

  <div v-else class="pt-32 pb-20 text-center">
    <h1 class="text-3xl font-display font-bold text-slate-900 dark:text-white mb-4">{{ t('common.not_found') }}</h1>
    <router-link to="/blog" class="text-primary-600 dark:text-primary-400 font-semibold">
      &larr; {{ t('blog_page.back') }}
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useHead } from '@unhead/vue';
import MarkdownIt from 'markdown-it';
import { blogApi } from '@/services/api';

const md = new MarkdownIt({ html: false, linkify: true, typographer: true });

const route = useRoute();
const { t, locale } = useI18n();

const post = ref<any>(null);
const loading = ref(true);

const translation = computed(() => {
  if (!post.value) return { title: '', excerpt: '', content: '' };
  const list = post.value.translations || [];
  return list.find((t: any) => t.locale === locale.value)
    || list.find((t: any) => t.locale === 'es')
    || list[0]
    || { title: '', excerpt: '', content: '' };
});

const renderedContent = computed(() => md.render(translation.value.content || ''));

useHead({
  title: () => translation.value?.title ? `${translation.value.title} | withjp.ai` : 'Blog | withjp.ai',
  meta: [
    { name: 'description', content: () => translation.value?.excerpt || '' },
    { property: 'og:title', content: () => translation.value?.title || '' },
    { property: 'og:description', content: () => translation.value?.excerpt || '' },
    { property: 'og:type', content: 'article' },
  ],
});

async function loadPost(slug: string) {
  loading.value = true;
  try {
    const { data } = await blogApi.getBySlug(slug);
    post.value = data;
  } catch {
    post.value = null;
  } finally {
    loading.value = false;
  }
}

onMounted(() => loadPost(route.params.slug as string));
watch(() => route.params.slug, (slug) => { if (slug) loadPost(slug as string); });
</script>
