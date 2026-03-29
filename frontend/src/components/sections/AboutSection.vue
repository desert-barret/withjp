<template>
  <section id="about" ref="sectionEl" class="py-24 bg-white dark:bg-[#0a0f1e]">
    <div class="max-w-6xl mx-auto px-6">

      <!-- Header -->
      <div class="text-center mb-16 reveal" :class="{ visible: visible }">
        <span class="tag text-xs mb-4 inline-flex">{{ t('about.subtitle') }}</span>
        <h2 class="section-title">{{ t('about.title') }}</h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        <!-- Left: bio + links -->
        <div class="reveal reveal-delay-1" :class="{ visible: visible }">
          <p class="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8">
            {{ profile ? (locale === 'es' ? profile.bio_es : profile.bio_en) : t('about.description') }}
          </p>

          <!-- Info pills -->
          <div class="flex flex-wrap gap-3 mb-8">
            <div class="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium
                        bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300
                        border border-slate-200 dark:border-white/[0.08]">
              📍 {{ profile ? (locale === 'es' ? profile.location_es : profile.location_en) : 'Ecuador' }}
            </div>
            <a v-if="profile?.email" :href="`mailto:${profile.email}`"
              class="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium
                     bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300
                     border border-slate-200 dark:border-white/[0.08]
                     hover:border-primary-400 dark:hover:border-primary-500/50
                     hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              ✉️ {{ profile.email }}
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
              <span class="text-base group-hover:scale-110 transition-transform">{{ link.icon }}</span>
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
const socialLinks = computed(() => {
  const p = profileStore.profile;
  return [
    { label: 'LinkedIn', icon: '💼', url: p?.linkedin_url || 'https://www.linkedin.com/in/desertbarret/' },
    { label: 'YouTube', icon: '▶️', url: p?.youtube_url || 'https://www.youtube.com/@jp.desertbarret' },
    { label: 'Udemy',   icon: '🎓', url: p?.udemy_url   || 'https://www.udemy.com/user/juan-pablo-guaman-rodriguez/' },
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
