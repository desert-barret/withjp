<template>
  <div>
    <!-- ═══ HERO ════════════════════════════════════════════════ -->
    <section class="pt-28 pb-12 bg-gradient-to-b from-indigo-50/60 to-white dark:from-dark-950 dark:to-dark-900">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        <router-link to="/blog"
          class="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400
                 hover:text-primary-600 dark:hover:text-primary-400 transition-colors mb-8">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          {{ t('blog_ia.back') }}
        </router-link>

        <!-- Category + read time -->
        <div class="flex items-center gap-3 mb-6">
          <span class="px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wide
                       bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
            {{ t('blog_page.static_tag') }}
          </span>
          <span class="text-xs text-slate-400">{{ t('blog_page.static_read') }}</span>
          <span class="text-xs text-slate-400">· {{ currentDate }}</span>
        </div>

        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white
                   leading-tight mb-6">
          {{ t('blog_ia.title') }}
        </h1>

        <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          {{ t('blog_ia.intro') }}
        </p>
      </div>
    </section>

    <!-- ═══ COVER ════════════════════════════════════════════════ -->
    <div class="max-w-3xl mx-auto px-4 sm:px-6 mb-12">
      <div class="aspect-video rounded-2xl overflow-hidden
                  bg-gradient-to-br from-indigo-500 via-violet-600 to-purple-700 relative">
        <div class="absolute inset-0 opacity-20"
          style="background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0); background-size: 28px 28px;"></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="text-center">
            <div class="text-8xl mb-4">🤖</div>
            <p class="text-white/60 text-sm font-medium uppercase tracking-widest">
              AI & Productivity
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- ═══ ARTICLE CONTENT ═════════════════════════════════════ -->
    <article class="max-w-3xl mx-auto px-4 sm:px-6 pb-24">
      <div class="prose prose-lg prose-slate dark:prose-invert max-w-none
                  prose-headings:font-display prose-headings:font-bold
                  prose-p:leading-relaxed prose-p:text-slate-600 dark:prose-p:text-slate-400
                  prose-li:text-slate-600 dark:prose-li:text-slate-400
                  prose-strong:text-slate-900 dark:prose-strong:text-white">

        <!-- Section 1 -->
        <h2>{{ t('blog_ia.s1_title') }}</h2>
        <p>{{ t('blog_ia.s1') }}</p>

        <!-- Section 2 -->
        <h2>{{ t('blog_ia.s2_title') }}</h2>
        <p>{{ t('blog_ia.s2') }}</p>
        <ul>
          <li v-for="item in s2List" :key="item">{{ item }}</li>
        </ul>

        <!-- Section 3 -->
        <h2>{{ t('blog_ia.s3_title') }}</h2>
        <p>{{ t('blog_ia.s3') }}</p>

        <!-- Section 4 -->
        <h2>{{ t('blog_ia.s4_title') }}</h2>
        <p>{{ t('blog_ia.s4') }}</p>

        <!-- Section 5 -->
        <h2>{{ t('blog_ia.s5_title') }}</h2>
        <p>{{ t('blog_ia.s5') }}</p>
      </div>

      <!-- Conclusion highlight -->
      <div class="mt-12 p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-violet-50
                  dark:from-indigo-500/10 dark:to-violet-500/10
                  border border-indigo-100 dark:border-indigo-500/20">
        <p class="text-base font-semibold text-slate-800 dark:text-slate-200 leading-relaxed italic">
          "{{ t('blog_ia.conclusion') }}"
        </p>
        <div class="mt-4 flex items-center gap-3">
          <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
            <span class="text-white text-xs font-bold">JP</span>
          </div>
          <span class="text-sm font-semibold text-slate-700 dark:text-slate-300">Juan Pablo Guaman</span>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-16 p-8 rounded-2xl bg-slate-900 dark:bg-white/5 text-center">
        <p class="text-white dark:text-slate-200 font-semibold text-lg mb-2">
          {{ locale === 'es' ? '¿Querés implementar IA en tu negocio o producto?' : 'Want to implement AI in your business or product?' }}
        </p>
        <p class="text-slate-400 dark:text-slate-400 text-sm mb-6">
          {{ locale === 'es' ? 'Hablemos de tu caso específico.' : "Let's talk about your specific case." }}
        </p>
        <a href="mailto:info@withjp.ai"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold
                 bg-white text-slate-900 hover:bg-slate-100 transition-colors">
          {{ locale === 'es' ? 'Escribirme' : 'Get in touch' }}
        </a>
      </div>

      <!-- Back -->
      <div class="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
        <router-link to="/blog"
          class="inline-flex items-center gap-2 text-sm font-semibold
                 text-primary-600 dark:text-primary-400 hover:gap-3 transition-all duration-200">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          {{ t('blog_ia.back') }}
        </router-link>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useHead } from '@unhead/vue';

const { t, locale } = useI18n();

useHead({
  title: () => t('blog_ia.meta.title'),
  meta: [
    { name: 'description', content: () => t('blog_ia.meta.description') },
    { property: 'og:title', content: () => t('blog_ia.meta.title') },
    { property: 'og:description', content: () => t('blog_ia.meta.description') },
    { property: 'og:type', content: 'article' },
  ],
});

const currentDate = new Date().toLocaleDateString(locale.value === 'es' ? 'es-EC' : 'en-US', {
  year: 'numeric', month: 'long', day: 'numeric',
});

const s2List = computed(() => {
  const raw = t('blog_ia.s2_list');
  if (Array.isArray(raw)) return raw;
  return [];
});
</script>
