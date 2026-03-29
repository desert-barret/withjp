<template>
  <section id="courses" ref="sectionEl" class="py-16 md:py-24 bg-[#f4f6ff] dark:bg-[#080B14]">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">

      <!-- Header -->
      <div class="text-center mb-14 reveal" :class="{ visible: visible }">
        <span class="tag text-xs mb-4 inline-flex">{{ t('courses.subtitle') }}</span>
        <h2 class="section-title">{{ t('courses.title') }}</h2>
      </div>

      <!-- Channel cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

        <!-- YouTube -->
        <a href="https://www.youtube.com/@jp.desertbarret" target="_blank" rel="noopener noreferrer"
           class="gradient-card group flex items-start gap-5 p-7
                  bg-white dark:bg-transparent
                  transition-all duration-300 hover:-translate-y-1
                  reveal reveal-delay-1" :class="{ visible: visible }">
          <div class="w-14 h-14 rounded-2xl bg-red-50 dark:bg-red-900/20
                      flex items-center justify-center flex-shrink-0
                      group-hover:scale-110 transition-transform duration-300">
            <svg class="w-7 h-7 text-red-600 dark:text-red-400" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </div>
          <div class="flex-1 min-w-0">
            <h3 class="font-display font-bold text-xl text-slate-900 dark:text-white mb-1.5
                       group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              YouTube
            </h3>
            <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
              {{ locale === 'es'
                ? 'Tutoriales gratuitos de Vue.js, NestJS, Python, automatización e IA.'
                : 'Free tutorials on Vue.js, NestJS, Python, automation and AI.' }}
            </p>
            <div class="flex flex-wrap gap-1.5 mb-4">
              <span class="tag">Vue 3</span>
              <span class="tag">NestJS</span>
              <span class="tag">Python</span>
              <span class="tag">Bots</span>
            </div>
            <span class="inline-flex items-center gap-1.5 text-sm font-semibold
                         text-red-600 dark:text-red-400">
              {{ t('courses.youtube') }}
              <span class="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </div>
        </a>

        <!-- Udemy -->
        <a href="https://www.udemy.com/user/juan-pablo-guaman-rodriguez/" target="_blank" rel="noopener noreferrer"
           class="gradient-card group flex items-start gap-5 p-7
                  bg-white dark:bg-transparent
                  transition-all duration-300 hover:-translate-y-1
                  reveal reveal-delay-2" :class="{ visible: visible }">
          <div class="w-14 h-14 rounded-2xl bg-purple-50 dark:bg-purple-900/20
                      flex items-center justify-center flex-shrink-0
                      group-hover:scale-110 transition-transform duration-300">
            <svg class="w-7 h-7 text-purple-600 dark:text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
          </div>
          <div class="flex-1 min-w-0">
            <h3 class="font-display font-bold text-xl text-slate-900 dark:text-white mb-1.5
                       group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              Udemy
            </h3>
            <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
              {{ locale === 'es'
                ? 'Cursos completos y estructurados para dominar las tecnologías más demandadas.'
                : 'Complete structured courses to master the most in-demand technologies.' }}
            </p>
            <div class="flex flex-wrap gap-1.5 mb-4">
              <span class="tag">Full Stack</span>
              <span class="tag">TypeScript</span>
              <span class="tag">Automatización</span>
            </div>
            <span class="inline-flex items-center gap-1.5 text-sm font-semibold
                         text-purple-600 dark:text-purple-400">
              {{ t('courses.udemy') }}
              <span class="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </div>
        </a>
      </div>

      <!-- Subdomains coming soon -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4
                  reveal reveal-delay-3" :class="{ visible: visible }">
        <div v-for="sub in subdomains" :key="sub.name"
          class="gradient-card flex items-center gap-5 p-5
                 bg-white dark:bg-transparent">
          <div class="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
               :style="{ background: sub.gradient }">
            {{ sub.icon }}
          </div>
          <div class="flex-1 min-w-0">
            <p class="font-semibold text-slate-900 dark:text-white text-sm">{{ sub.name }}</p>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{{ sub.desc }}</p>
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-semibold
                       bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400
                       flex-shrink-0">
            Soon
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useReveal } from '@/composables/useReveal';

const { t, locale } = useI18n();
const { el: sectionEl, visible } = useReveal(0.1);

const subdomains = computed(() => [
  {
    name: 'radio.withjp.ai',
    icon: '📻',
    desc: locale.value === 'es' ? 'Radio online en vivo' : 'Live online radio',
    gradient: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
  },
  {
    name: 'bots.withjp.ai',
    icon: '🤖',
    desc: locale.value === 'es' ? 'Plataforma de bots inteligentes' : 'Intelligent bots platform',
    gradient: 'linear-gradient(135deg,#06b6d4,#6366f1)',
  },
]);
</script>
