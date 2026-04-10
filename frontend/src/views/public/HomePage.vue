<template>
  <div>
    <!-- ═══ HERO ═══════════════════════════════════════════════════ -->
    <section class="relative min-h-screen flex items-center overflow-hidden">
      <!-- Mesh background -->
      <div class="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50/30
                  dark:from-dark-950 dark:via-dark-900 dark:to-dark-950"></div>
      <div class="mesh-blob mesh-blob-1"></div>
      <div class="mesh-blob mesh-blob-2"></div>
      <div class="mesh-blob mesh-blob-3"></div>
      <!-- Dot grid -->
      <div class="absolute inset-0 dot-grid opacity-40 dark:opacity-20"></div>

      <div class="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 pt-32 w-full">
        <div class="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          <!-- ── Text side ──────────────────────────────── -->
          <div>
            <!-- Status badge -->
            <div class="hero-enter-1 inline-flex items-center gap-2.5 px-4 py-2 rounded-full
                        bg-emerald-50 dark:bg-emerald-500/10
                        border border-emerald-200 dark:border-emerald-500/20 mb-8">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span class="text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                {{ t('home.hero.available') }}
              </span>
            </div>

            <!-- Headline -->
            <h1 class="hero-enter-2 font-display font-bold leading-[1.05] mb-6">
              <span class="block text-5xl sm:text-6xl lg:text-7xl text-slate-900 dark:text-white">
                {{ t('home.hero.headline_1') }}
              </span>
              <span class="block text-5xl sm:text-6xl lg:text-7xl gradient-text">
                {{ t('home.hero.headline_2') }}
              </span>
              <span class="block text-5xl sm:text-6xl lg:text-7xl text-slate-900 dark:text-white">
                {{ t('home.hero.headline_3') }}
              </span>
            </h1>

            <!-- Description -->
            <p class="hero-enter-3 text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-10 max-w-xl">
              {{ t('home.hero.description') }}
            </p>

            <!-- CTAs -->
            <div class="hero-enter-4 flex flex-col sm:flex-row gap-4 mb-12">
              <a href="mailto:info@withjp.ai"
                class="btn-primary btn-glow text-center justify-center px-8 py-4 rounded-2xl text-base">
                {{ t('home.hero.cta_primary') }}
              </a>
              <a href="#work"
                class="btn-secondary text-center justify-center px-8 py-4 rounded-2xl text-base">
                {{ t('home.hero.cta_secondary') }}
                <svg class="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M19 9l-7 7-7-7"/></svg>
              </a>
            </div>

            <!-- Stats -->
            <div class="hero-enter-5 flex flex-wrap gap-8">
              <div v-for="stat in stats" :key="stat.label">
                <div class="text-3xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
                  {{ stat.value }}
                </div>
                <div class="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{{ stat.label }}</div>
              </div>
            </div>
          </div>

          <!-- ── Profile card ───────────────────────────── -->
          <div class="hero-enter-card relative flex justify-center lg:justify-end">
            <!-- Glow behind card -->
            <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-violet-500/10 to-cyan-500/20
                        blur-3xl rounded-full scale-110 dark:from-indigo-500/10 dark:via-violet-500/05 dark:to-cyan-500/10"></div>

            <div class="relative w-full max-w-sm">
              <!-- Main card -->
              <div class="gradient-card p-8 rounded-3xl">
                <!-- Avatar -->
                <div class="flex items-center gap-4 mb-6">
                  <div class="w-20 h-20 rounded-2xl overflow-hidden shrink-0 ring-4 ring-white dark:ring-dark-900 shadow-lg">
                    <img v-if="profile?.avatar" :src="profile.avatar" alt="Juan Pablo Guaman"
                      class="w-full h-full object-cover" />
                    <div v-else class="w-full h-full bg-gradient-to-br from-indigo-500 via-violet-600 to-purple-700
                                      flex items-center justify-center">
                      <span class="text-white font-bold text-2xl font-display">JP</span>
                    </div>
                  </div>
                  <div>
                    <h2 class="font-display font-bold text-slate-900 dark:text-white text-lg leading-tight">
                      Juan Pablo<br>Guaman
                    </h2>
                    <p class="text-primary-500 dark:text-primary-400 text-sm font-medium mt-0.5">
                      {{ t('home.card.role') }}
                    </p>
                  </div>
                </div>

                <!-- Location -->
                <div class="flex items-center gap-2 mb-6 text-sm text-slate-500 dark:text-slate-400">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  {{ t('home.card.location') }}
                </div>

                <!-- Tech tags -->
                <div class="flex flex-wrap gap-1.5 mb-6">
                  <span v-for="tech in heroTechs" :key="tech"
                    class="px-2.5 py-1 text-xs font-semibold rounded-lg
                           bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {{ tech }}
                  </span>
                </div>

                <!-- Divider -->
                <div class="section-divider mb-6" style="margin: 0 0 1.5rem 0;"></div>

                <!-- Mini stats -->
                <div class="grid grid-cols-3 gap-3 text-center">
                  <div v-for="stat in cardStats" :key="stat.label"
                    class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                    <div class="text-base font-display font-bold text-slate-900 dark:text-white">{{ stat.value }}</div>
                    <div class="text-xs text-slate-400 dark:text-slate-500 mt-0.5 leading-tight">{{ stat.label }}</div>
                  </div>
                </div>
              </div>

              <!-- Floating badge: Available -->
              <div class="absolute -top-4 -right-4 flex items-center gap-2
                          bg-white dark:bg-dark-900 rounded-2xl px-3 py-2 shadow-xl
                          border border-slate-200 dark:border-slate-700 float">
                <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span class="text-xs font-bold text-slate-700 dark:text-slate-200">{{ t('home.card.open') }}</span>
              </div>

              <!-- Floating badge: Ecuador -->
              <div class="absolute -bottom-4 -left-4 bg-white dark:bg-dark-900 rounded-2xl px-3 py-2
                          shadow-xl border border-slate-200 dark:border-slate-700 float-slow">
                <span class="text-sm">🇪🇨 Ecuador</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1
                  text-slate-400 dark:text-slate-600 animate-bounce">
        <span class="text-xs font-medium tracking-widest uppercase">scroll</span>
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M19 9l-7 7-7-7"/></svg>
      </div>
    </section>

    <!-- ═══ WHAT I DO ════════════════════════════════════════════ -->
    <section class="py-24 sm:py-32 bg-white dark:bg-dark-900 section-mesh">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="max-w-2xl mb-16 reveal">
          <span class="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest
                       bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 mb-5">
            {{ t('home.what.tag') }}
          </span>
          <h2 class="section-title mb-4">{{ t('home.what.title') }}</h2>
          <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {{ t('home.what.subtitle') }}
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="(service, idx) in services" :key="idx"
            class="gradient-card card-hover p-8 reveal"
            :class="`reveal-delay-${idx + 1}`">
            <!-- Icon -->
            <div class="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center"
              :class="service.iconBg">
              <svg class="w-7 h-7" :class="service.iconColor" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path :d="service.iconPath" />
                <path v-if="service.iconPath2" :d="service.iconPath2" />
              </svg>
            </div>
            <h3 class="text-lg font-display font-bold text-slate-900 dark:text-white mb-3">
              {{ service.title }}
            </h3>
            <p class="text-slate-600 dark:text-slate-400 leading-relaxed text-sm mb-5">
              {{ service.description }}
            </p>
            <div class="flex flex-wrap gap-1.5">
              <span v-for="tech in service.techs" :key="tech"
                class="px-2.5 py-1 text-xs font-semibold rounded-lg
                       bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ SELECTED WORK ════════════════════════════════════════ -->
    <section id="work" class="py-24 sm:py-32 bg-slate-50 dark:bg-dark-950">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="max-w-2xl mb-16 reveal">
          <span class="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest
                       bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 mb-5">
            {{ t('home.work.tag') }}
          </span>
          <h2 class="section-title">{{ t('home.work.title') }}</h2>
        </div>

        <div class="space-y-5">
          <div v-for="(project, idx) in projects" :key="idx"
            class="gradient-card card-hover reveal"
            :class="`reveal-delay-${idx + 1}`">
            <div class="p-8 flex flex-col lg:flex-row lg:items-start gap-8">
              <div class="flex-1">
                <div class="flex flex-wrap items-center gap-3 mb-4">
                  <h3 class="text-xl font-display font-bold text-slate-900 dark:text-white">
                    {{ project.title }}
                  </h3>
                  <span class="px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wide
                               bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400">
                    {{ project.type }}
                  </span>
                </div>
                <p class="text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                  {{ project.description }}
                </p>
                <div class="flex flex-wrap gap-1.5">
                  <span v-for="tech in project.techs" :key="tech"
                    class="px-2.5 py-1 text-xs font-semibold rounded-lg
                           bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400
                           border border-slate-200 dark:border-slate-700">
                    {{ tech }}
                  </span>
                </div>
              </div>
              <!-- Metrics -->
              <div class="lg:w-44 shrink-0 flex lg:flex-col gap-6 lg:gap-4">
                <div v-for="(metric, mIdx) in project.metrics" :key="mIdx"
                  class="text-center lg:text-right">
                  <div class="text-2xl font-display font-bold gradient-text">{{ metric.value }}</div>
                  <div class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{{ metric.label }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ TEACHING ════════════════════════════════════════════ -->
    <section v-if="featuredCourses.length" class="py-24 sm:py-32 bg-white dark:bg-dark-900">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="flex items-end justify-between mb-16">
          <div class="reveal">
            <span class="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest
                         bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 mb-5">
              {{ t('home.teaching.tag') }}
            </span>
            <h2 class="section-title">{{ t('home.teaching.title') }}</h2>
            <p class="text-slate-600 dark:text-slate-400 mt-3 max-w-lg">
              {{ t('home.teaching.subtitle') }}
            </p>
          </div>
          <router-link to="/cursos"
            class="hidden sm:inline-flex items-center gap-2 text-sm font-semibold
                   text-primary-600 dark:text-primary-400 hover:gap-3 transition-all duration-200">
            {{ t('home.teaching.see_all') }}
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </router-link>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <router-link v-for="(course, idx) in featuredCourses.slice(0, 6)" :key="course.id"
            :to="`/cursos/${course.slug}`"
            class="gradient-card card-hover overflow-hidden reveal"
            :class="`stagger-${(idx % 6) + 1}`">
            <div class="p-6">
              <div class="flex flex-wrap gap-1.5 mb-4">
                <span v-for="tech in (course.technologies || []).slice(0, 3)" :key="tech"
                  class="px-2 py-0.5 text-xs font-semibold rounded-md
                         bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                  {{ tech }}
                </span>
              </div>
              <h3 class="font-display font-bold text-slate-900 dark:text-white mb-2
                         group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                {{ getTranslation(course).title }}
              </h3>
              <p class="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                {{ getTranslation(course).short_description }}
              </p>
              <div class="mt-4 flex items-center text-xs font-semibold text-primary-600 dark:text-primary-400">
                Ver curso
                <svg class="w-3.5 h-3.5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </div>
          </router-link>
        </div>

        <div class="sm:hidden mt-8 text-center">
          <router-link to="/cursos"
            class="inline-flex items-center gap-2 text-sm font-semibold
                   text-primary-600 dark:text-primary-400">
            {{ t('home.teaching.see_all') }} →
          </router-link>
        </div>
      </div>
    </section>

    <!-- ═══ CTA FINAL ════════════════════════════════════════════ -->
    <section class="py-24 sm:py-32 relative overflow-hidden bg-slate-900 dark:bg-dark-950">
      <!-- Background gradient -->
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-br from-indigo-900/50 via-slate-900 to-violet-900/30"></div>
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl"></div>
      </div>

      <div class="relative max-w-3xl mx-auto px-4 sm:px-6 text-center reveal">
        <h2 class="text-4xl sm:text-5xl font-display font-bold text-white leading-tight mb-6">
          {{ t('home.cta.title') }}
        </h2>
        <p class="text-lg text-slate-400 mb-12 max-w-xl mx-auto leading-relaxed">
          {{ t('home.cta.subtitle') }}
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="mailto:info@withjp.ai"
            class="w-full sm:w-auto px-10 py-4 rounded-2xl font-semibold
                   bg-white text-slate-900 hover:bg-slate-100
                   shadow-2xl shadow-white/10 transition-all duration-300 text-center">
            {{ t('home.cta.button_primary') }}
          </a>
          <a href="https://www.linkedin.com/in/desertbarret/" target="_blank" rel="noopener"
            class="w-full sm:w-auto px-10 py-4 rounded-2xl font-semibold
                   text-white border-2 border-white/20
                   hover:bg-white/10 hover:border-white/40 transition-all duration-300 text-center">
            {{ t('home.cta.button_secondary') }}
          </a>
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
import { useProfileStore } from '@/stores/profile';
import { useReveal } from '@/composables/useReveal';

const { t, locale } = useI18n();
const profileStore = useProfileStore();
useReveal();

useHead({
  title: () => t('home.meta.title'),
  meta: [
    { name: 'description', content: () => t('home.meta.description') },
  ],
});

const profile = computed(() => profileStore.profile);
const featuredCourses = ref<any[]>([]);

onMounted(async () => {
  if (!profileStore.profile) profileStore.fetch();
  try {
    const { data } = await coursesApi.getFeatured();
    featuredCourses.value = data;
  } catch { /* graceful */ }
});

function getTranslation(item: any) {
  const list = item.translations || [];
  return list.find((t: any) => t.locale === locale.value)
    || list.find((t: any) => t.locale === 'es')
    || list[0]
    || { title: '', description: '', short_description: '' };
}

const stats = computed(() => [
  { value: '10+', label: t('home.stats.years') },
  { value: '25K+', label: t('home.stats.students') },
  { value: '17', label: t('home.stats.courses') },
]);

const cardStats = computed(() => [
  { value: '10+', label: locale.value === 'es' ? 'Años exp.' : 'Yrs exp.' },
  { value: '25K+', label: locale.value === 'es' ? 'Estudiantes' : 'Students' },
  { value: '17', label: locale.value === 'es' ? 'Cursos' : 'Courses' },
]);

const heroTechs = ['NestJS', 'Python', 'Flutter', 'PostgreSQL', 'Docker', 'AI'];

const services = computed(() => [
  {
    iconPath: 'M5 12h14M12 5l7 7-7 7',
    iconPath2: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5',
    iconBg: 'bg-indigo-50 dark:bg-indigo-500/10',
    iconColor: 'text-indigo-600 dark:text-indigo-400',
    title: t('home.what.backend.title'),
    description: t('home.what.backend.description'),
    techs: ['NestJS', 'Node.js', 'Python', 'PostgreSQL', 'Docker'],
  },
  {
    iconPath: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    iconBg: 'bg-violet-50 dark:bg-violet-500/10',
    iconColor: 'text-violet-600 dark:text-violet-400',
    title: t('home.what.ai.title'),
    description: t('home.what.ai.description'),
    techs: ['Claude API', 'OpenAI', 'LangChain', 'FastAPI', 'RAG'],
  },
  {
    iconPath: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
    iconBg: 'bg-cyan-50 dark:bg-cyan-500/10',
    iconColor: 'text-cyan-600 dark:text-cyan-400',
    title: t('home.what.mobile.title'),
    description: t('home.what.mobile.description'),
    techs: ['Flutter', 'React Native', 'Kotlin', 'Firebase', 'Socket.IO'],
  },
]);

const projects = computed(() => [
  {
    title: t('home.work.p1.title'),
    type: t('home.work.p1.type'),
    description: t('home.work.p1.description'),
    techs: ['Flutter', 'NestJS', 'PostgreSQL', 'Docker', 'Google Maps', 'Firebase'],
    metrics: [
      { value: '700K+', label: t('home.work.p1.m1') },
      { value: '80K+', label: t('home.work.p1.m2') },
    ],
  },
  {
    title: t('home.work.p2.title'),
    type: t('home.work.p2.type'),
    description: t('home.work.p2.description'),
    techs: ['WhatsApp Business API', 'NestJS', 'Python', 'n8n', 'Meta'],
    metrics: [
      { value: '24/7', label: t('home.work.p2.m1') },
      { value: '80%', label: t('home.work.p2.m2') },
    ],
  },
  {
    title: t('home.work.p3.title'),
    type: t('home.work.p3.type'),
    description: t('home.work.p3.description'),
    techs: ['Flutter', 'NestJS', 'MySQL', 'Socket.IO', 'Clean Architecture'],
    metrics: [
      { value: '5', label: t('home.work.p3.m1') },
      { value: '3', label: t('home.work.p3.m2') },
    ],
  },
]);
</script>
