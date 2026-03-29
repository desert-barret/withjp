<template>
  <section id="about" ref="sectionEl" class="section-mesh py-16 md:py-24 bg-[#f4f6ff] dark:bg-[#0a0f1e]">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">

      <!-- Header -->
      <div class="text-center mb-10 md:mb-16 reveal" :class="{ visible: visible }">
        <span class="tag text-xs mb-4 inline-flex">{{ t('about.subtitle') }}</span>
        <h2 class="section-title">{{ t('about.title') }}</h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

        <!-- Left: bio + links -->
        <div class="reveal reveal-delay-1" :class="{ visible: visible }">
          <p class="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
            {{ profile ? (locale === 'es' ? profile.bio_es : profile.bio_en) : t('about.description') }}
          </p>

          <!-- Info pills -->
          <div class="flex flex-wrap gap-3 mb-8">
            <div class="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium
                        bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300
                        border border-slate-200 dark:border-white/[0.08]">
              <svg class="w-4 h-4 text-rose-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              {{ profile ? (locale === 'es' ? profile.location_es : profile.location_en) : 'Ecuador' }}
            </div>
            <a v-if="profile?.email" :href="`mailto:${profile.email}`"
              class="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium
                     bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300
                     border border-slate-200 dark:border-white/[0.08]
                     hover:border-primary-400 dark:hover:border-primary-500/50
                     hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              <svg class="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              {{ profile.email }}
            </a>
          </div>

          <!-- Social links -->
          <div class="flex flex-wrap gap-3 mb-10">
            <a v-for="link in socialLinks" :key="link.label"
               :href="link.url" target="_blank" rel="noopener noreferrer"
               class="group flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-medium
                      border border-slate-200 dark:border-white/[0.08]
                      text-slate-600 dark:text-slate-400
                      hover:border-primary-400 dark:hover:border-primary-500/40
                      hover:text-primary-600 dark:hover:text-primary-400
                      bg-white dark:bg-white/[0.02] hover:bg-primary-50 dark:hover:bg-primary-900/10
                      transition-all duration-200">
              <span class="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform" v-html="link.icon" />
              {{ link.label }}
            </a>
          </div>

          <!-- Stats grid -->
          <div class="grid grid-cols-2 gap-4">
            <div v-for="(s, i) in statsItems" :key="s.label"
              class="gradient-card p-6 text-center
                     bg-slate-50 dark:bg-transparent
                     reveal" :class="[{ visible: visible }, `reveal-delay-${i + 2}`]">
              <p class="font-display font-bold text-3xl gradient-text mb-1">{{ s.value }}</p>
              <p class="text-xs text-slate-500 dark:text-slate-400 tracking-wide">{{ s.label }}</p>
            </div>
          </div>
        </div>

        <!-- Right: technologies -->
        <div class="reveal reveal-delay-2" :class="{ visible: visible }">
          <h3 class="font-display font-semibold text-slate-900 dark:text-white text-lg mb-5">
            {{ t('about.tech_title') }}
          </h3>

          <div class="flex flex-wrap gap-2.5">
            <span v-for="(tech, i) in technologies" :key="tech"
              class="group flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium cursor-default
                     bg-white dark:bg-white/[0.03]
                     border border-slate-200 dark:border-white/[0.08]
                     text-slate-700 dark:text-slate-300
                     hover:border-primary-400 dark:hover:border-primary-500/50
                     hover:text-primary-600 dark:hover:text-primary-400
                     hover:bg-primary-50 dark:hover:bg-primary-900/10
                     transition-all duration-200"
              :style="{ transitionDelay: `${i * 30}ms` }">
              {{ tech }}
            </span>
          </div>

          <!-- Experience timeline hint -->
          <div class="mt-10 space-y-3">
            <h3 class="font-display font-semibold text-slate-900 dark:text-white text-lg mb-5">
              {{ locale === 'es' ? 'Áreas de expertise' : 'Areas of expertise' }}
            </h3>
            <div v-for="area in expertise" :key="area.name" class="space-y-1.5">
              <div class="flex justify-between text-sm">
                <span class="text-slate-700 dark:text-slate-300 font-medium">{{ area.name }}</span>
                <span class="text-primary-500 font-semibold text-xs">{{ area.pct }}%</span>
              </div>
              <div class="h-1.5 rounded-full bg-slate-100 dark:bg-white/[0.06] overflow-hidden">
                <div class="h-full rounded-full bg-gradient-to-r from-primary-500 to-violet-500 transition-all duration-1000"
                  :style="{ width: visible ? `${area.pct}%` : '0%' }" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useProfileStore } from '@/stores/profile';
import { useReveal } from '@/composables/useReveal';

const { t, locale } = useI18n();
const { el: sectionEl, visible } = useReveal(0.1);
const profileStore = useProfileStore();
const profile = computed(() => profileStore.profile);

const technologies = computed(() =>
  profile.value?.technologies || [
    'Vue 3', 'NestJS', 'TypeScript', 'Python', 'FastAPI',
    'MySQL', 'PostgreSQL', 'Redis', 'Docker', 'GCP', 'n8n', 'Node.js',
  ]
);
const ICON_LINKEDIN = `<svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`;
const ICON_YOUTUBE  = `<svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`;
const ICON_UDEMY    = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`;

const socialLinks = computed(() => {
  const p = profileStore.profile;
  return [
    { label: 'LinkedIn', icon: ICON_LINKEDIN, url: p?.linkedin_url || 'https://www.linkedin.com/in/desertbarret/' },
    { label: 'YouTube',  icon: ICON_YOUTUBE,  url: p?.youtube_url  || 'https://www.youtube.com/@jp.desertbarret' },
    { label: 'Udemy',    icon: ICON_UDEMY,    url: p?.udemy_url    || 'https://www.udemy.com/user/juan-pablo-guaman-rodriguez/' },
  ];
});
const statsItems = computed(() => [
  { value: '10+', label: t('about.experience') },
  { value: '5+',  label: t('about.courses_count') },
  { value: '25K+', label: t('about.students') },
  { value: '∞',   label: 'Passion' },
]);
const expertise = computed(() =>
  locale.value === 'es'
    ? [
        { name: 'Full Stack Development', pct: 95 },
        { name: 'Automatización & Bots',  pct: 90 },
        { name: 'DevOps & Cloud',          pct: 75 },
        { name: 'IA & Machine Learning',   pct: 65 },
      ]
    : [
        { name: 'Full Stack Development',  pct: 95 },
        { name: 'Automation & Bots',       pct: 90 },
        { name: 'DevOps & Cloud',          pct: 75 },
        { name: 'AI & Machine Learning',   pct: 65 },
      ]
);
onMounted(() => { if (!profileStore.profile) profileStore.fetch(); });
</script>
