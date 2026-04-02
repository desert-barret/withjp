<template>
  <section id="how-it-works" ref="sectionEl" class="py-16 md:py-24 bg-[#f4f6ff] dark:bg-[#0a0f1e]">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">

      <!-- Header -->
      <div class="text-center mb-12 md:mb-16 reveal" :class="{ visible: visible }">
        <span class="tag text-xs mb-4 inline-flex">{{ t('how_it_works.tag') }}</span>
        <h2 class="section-title mb-4">{{ t('how_it_works.title') }}</h2>
        <p class="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto">
          {{ t('how_it_works.subtitle') }}
        </p>
      </div>

      <!-- Steps -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
        <div
          v-for="(step, i) in steps"
          :key="step.key"
          class="relative reveal"
          :class="[{ visible: visible }, `reveal-delay-${i + 1}`]"
        >
          <!-- Connector arrow (desktop only) -->
          <div v-if="i < steps.length - 1"
               class="hidden md:flex absolute top-10 left-[calc(100%-1rem)] w-8 items-center justify-center z-10">
            <svg class="w-5 h-5 text-slate-300 dark:text-white/20" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </div>

          <div class="gradient-card p-7 sm:p-8 h-full bg-white dark:bg-transparent">
            <!-- Number + icon -->
            <div class="flex items-center gap-4 mb-5">
              <div class="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0
                          bg-gradient-to-br from-primary-500 to-violet-600 shadow-lg shadow-primary-500/20">
                <span class="text-white font-display font-extrabold text-xl">{{ step.number }}</span>
              </div>
              <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                   :class="step.iconBg">
                <span :class="step.iconColor" v-html="step.icon" />
              </div>
            </div>

            <h3 class="font-display font-bold text-slate-900 dark:text-white text-lg mb-3">
              {{ step.title }}
            </h3>
            <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              {{ step.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center reveal reveal-delay-4" :class="{ visible: visible }">
        <a href="#contact"
           class="btn-primary btn-glow inline-flex items-center gap-2 text-base px-8 py-3.5">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
          </svg>
          {{ t('how_it_works.cta') }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useReveal } from '@/composables/useReveal';

const { t } = useI18n();
const { el: sectionEl, visible } = useReveal(0.1);

const ICON_CONNECT = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`;
const ICON_FLOWS  = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>`;
const ICON_SCALE  = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`;

const steps = computed(() => [
  {
    key: 'connect',
    number: t('how_it_works.step1.number'),
    title: t('how_it_works.step1.title'),
    description: t('how_it_works.step1.description'),
    icon: ICON_CONNECT,
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/20',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
  },
  {
    key: 'flows',
    number: t('how_it_works.step2.number'),
    title: t('how_it_works.step2.title'),
    description: t('how_it_works.step2.description'),
    icon: ICON_FLOWS,
    iconBg: 'bg-indigo-100 dark:bg-indigo-900/20',
    iconColor: 'text-indigo-600 dark:text-indigo-400',
  },
  {
    key: 'scale',
    number: t('how_it_works.step3.number'),
    title: t('how_it_works.step3.title'),
    description: t('how_it_works.step3.description'),
    icon: ICON_SCALE,
    iconBg: 'bg-violet-100 dark:bg-violet-900/20',
    iconColor: 'text-violet-600 dark:text-violet-400',
  },
]);
</script>
