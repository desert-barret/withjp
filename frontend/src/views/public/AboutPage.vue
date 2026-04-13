<template>
  <div>
    <!-- ═══ HERO ════════════════════════════════════════════════ -->
    <section class="relative pt-28 pb-20 overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-dark-950 dark:to-dark-900">
      <div class="absolute inset-0 dot-grid opacity-30 dark:opacity-15"></div>
      <div class="absolute top-20 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div class="relative max-w-4xl mx-auto px-4 sm:px-6">
        <div class="flex flex-col md:flex-row md:items-start gap-10 mb-14">
          <!-- Avatar -->
          <div class="hero-enter-1 shrink-0">
            <div class="relative w-28 h-28 md:w-32 md:h-32">
              <div class="w-full h-full rounded-3xl overflow-hidden ring-4 ring-white dark:ring-dark-900 shadow-xl">
                <img v-if="profile?.avatar" :src="profile.avatar" alt="Juan Pablo Guaman"
                  class="w-full h-full object-cover" />
                <div v-else class="w-full h-full bg-gradient-to-br from-indigo-500 via-violet-600 to-purple-700
                                  flex items-center justify-center">
                  <span class="text-white font-bold text-3xl font-display">JP</span>
                </div>
              </div>
              <!-- Available dot -->
              <div class="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full bg-emerald-500 ring-4 ring-white dark:ring-dark-900"></div>
            </div>
          </div>

          <!-- Identity -->
          <div class="hero-enter-2">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full
                        bg-primary-50 dark:bg-primary-500/10 border border-primary-200 dark:border-primary-500/20 mb-4">
              <span class="text-xs font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wide">
                Backend Engineer & AI
              </span>
            </div>
            <h1 class="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white mb-2">
              Juan Pablo Guaman
            </h1>
            <p class="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              {{ t('about.role') }}
            </p>
          </div>
        </div>

        <!-- Bio -->
        <div class="hero-enter-3 max-w-3xl space-y-5">
          <p class="text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
            {{ t('about.bio.p1') }}
          </p>
          <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {{ t('about.bio.p2') }}
          </p>
          <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {{ t('about.bio.p3') }}
          </p>
        </div>
      </div>
    </section>

    <!-- ═══ STATS ════════════════════════════════════════════════ -->
    <section class="py-0 bg-white dark:bg-dark-900 border-y border-slate-200 dark:border-slate-800">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <div class="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200 dark:divide-slate-800">
          <div v-for="stat in stats" :key="stat.label"
            class="py-8 px-6 text-center">
            <div class="text-3xl font-display font-bold gradient-text">{{ stat.value }}</div>
            <div class="text-sm text-slate-500 dark:text-slate-400 mt-1">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ STRENGTHS ════════════════════════════════════════════ -->
    <section class="py-24 sm:py-32 bg-white dark:bg-dark-900 section-mesh">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <div class="mb-14 reveal">
          <span class="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest
                       bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 mb-5">
            Team fit
          </span>
          <h2 class="section-title">{{ t('about.strengths.title') }}</h2>
        </div>

        <div class="grid sm:grid-cols-2 gap-5">
          <div v-for="(item, idx) in strengths" :key="idx"
            class="gradient-card card-hover p-7 reveal"
            :class="`reveal-delay-${idx + 1}`">
            <div class="w-10 h-10 rounded-xl mb-5 flex items-center justify-center text-xl"
              :class="strengthColors[idx]">
              {{ strengthIcons[idx] }}
            </div>
            <h3 class="font-display font-bold text-slate-900 dark:text-white mb-2 text-lg">{{ item.title }}</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ STACK ════════════════════════════════════════════════ -->
    <section class="py-24 sm:py-32 bg-slate-50 dark:bg-dark-950">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <div class="mb-14 reveal">
          <span class="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest
                       bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 mb-5">
            Stack
          </span>
          <h2 class="section-title">{{ t('about.stack.title') }}</h2>
        </div>

        <div class="space-y-10">
          <div v-for="(group, idx) in stackGroups" :key="idx" class="reveal" :class="`reveal-delay-${idx + 1}`">
            <h3 class="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">
              {{ group.label }}
            </h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in group.items" :key="tech"
                class="px-3.5 py-2 rounded-xl text-sm font-semibold
                       bg-white dark:bg-dark-900 border border-slate-200 dark:border-slate-800
                       text-slate-700 dark:text-slate-300
                       hover:border-primary-300 dark:hover:border-primary-500/40
                       hover:text-primary-700 dark:hover:text-primary-400
                       transition-all duration-150 cursor-default">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ CTA ══════════════════════════════════════════════════ -->
    <section class="py-24 sm:py-32 relative overflow-hidden bg-slate-900 dark:bg-dark-950">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-slate-900 to-violet-900/30"></div>
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>
      <div class="relative max-w-3xl mx-auto px-4 sm:px-6 text-center reveal">
        <h2 class="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
          {{ t('about.cta.title') }}
        </h2>
        <p class="text-slate-400 mb-10 max-w-xl mx-auto">{{ t('about.cta.subtitle') }}</p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="mailto:info@withjp.ai"
            class="w-full sm:w-auto px-10 py-4 rounded-2xl font-semibold
                   bg-white text-slate-900 hover:bg-slate-100
                   shadow-2xl shadow-white/10 transition-all duration-300 text-center">
            {{ t('about.cta.email') }}
          </a>
          <a href="https://www.linkedin.com/in/desertbarret/" target="_blank" rel="noopener"
            class="w-full sm:w-auto px-10 py-4 rounded-2xl font-semibold
                   text-white border-2 border-white/20 hover:bg-white/10
                   transition-all duration-300 text-center">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useHead } from '@unhead/vue';
import { useProfileStore } from '@/stores/profile';
import { useReveal } from '@/composables/useReveal';

const { t } = useI18n();
const profileStore = useProfileStore();
useReveal();

useHead({
  title: () => t('about.meta.title'),
  meta: [
    { name: 'description', content: () => t('about.meta.description') },
    { name: 'keywords', content: 'Juan Pablo Guaman, Juan Pablo Guaman Rodriguez, Juan Pablo Guamán, Juan Pablo Guamán Rodríguez, withjp.ai, Sobre mí, About, Software Architect, Full Stack Developer, Ecuador, Loja' },
    { name: 'author', content: 'Juan Pablo Guamán Rodríguez' },
    { property: 'og:type', content: 'profile' },
    { property: 'og:title', content: () => t('about.meta.title') },
    { property: 'og:description', content: () => t('about.meta.description') },
    { property: 'og:url', content: 'https://withjp.ai/about' },
    { property: 'og:image', content: 'https://withjp.ai/og-image.jpg' },
    { property: 'og:site_name', content: 'withjp.ai' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@jp_desertbarret' },
    { name: 'twitter:title', content: () => t('about.meta.title') },
    { name: 'twitter:description', content: () => t('about.meta.description') },
    { name: 'twitter:image', content: 'https://withjp.ai/og-image.jpg' },
  ],
});

const profile = computed(() => profileStore.profile);

onMounted(() => {
  if (!profileStore.profile) profileStore.fetch();
});

const stats = computed(() => [
  { value: '10+', label: t('about.stats.years') },
  { value: '25K+', label: t('about.stats.students') },
  { value: '17', label: t('about.stats.courses') },
  { value: '4.3★', label: t('about.stats.rating') },
]);

const strengths = computed(() => [
  { title: t('about.strengths.s1.title'), description: t('about.strengths.s1.desc') },
  { title: t('about.strengths.s2.title'), description: t('about.strengths.s2.desc') },
  { title: t('about.strengths.s3.title'), description: t('about.strengths.s3.desc') },
  { title: t('about.strengths.s4.title'), description: t('about.strengths.s4.desc') },
]);

const strengthColors = [
  'bg-indigo-100 dark:bg-indigo-500/10',
  'bg-violet-100 dark:bg-violet-500/10',
  'bg-cyan-100 dark:bg-cyan-500/10',
  'bg-emerald-100 dark:bg-emerald-500/10',
];

const strengthIcons = ['🏗️', '🚀', '🤖', '📢'];

const stackGroups = computed(() => [
  { label: 'Backend', items: ['NestJS', 'Node.js', 'Python', 'FastAPI', 'Django', 'Spring Boot', 'TypeORM', 'REST APIs', 'WebSockets'] },
  { label: 'Mobile', items: ['Flutter', 'Kotlin', 'React Native', 'Dart', 'Jetpack Compose'] },
  { label: 'Frontend', items: ['Vue 3', 'React', 'TypeScript', 'Next.js', 'Tailwind CSS'] },
  { label: 'Data', items: ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB', 'Firebase'] },
  { label: 'Infra & DevOps', items: ['Docker', 'GCP', 'Cloud Run', 'Cloud SQL', 'Nginx', 'CI/CD'] },
  { label: 'AI & Automation', items: ['Claude API', 'OpenAI', 'WhatsApp Business API', 'n8n', 'LangChain', 'RAG'] },
]);
</script>
