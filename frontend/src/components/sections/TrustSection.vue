<template>
  <section id="trust" ref="sectionEl" class="py-14 md:py-20 bg-[#f4f6ff] dark:bg-[#0a0f1e]">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">

      <!-- Label -->
      <div class="text-center mb-10 md:mb-14 reveal" :class="{ visible: visible }">
        <span class="tag text-xs mb-4 inline-flex">{{ t('trust.tag') }}</span>
        <h2 class="section-title mb-3">{{ t('trust.title') }}</h2>
        <p class="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto">
          {{ t('trust.subtitle') }}
        </p>
      </div>

      <!-- Trust pillars -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6 mb-12">
        <div
          v-for="(pillar, i) in pillars"
          :key="pillar.key"
          class="gradient-card p-6 sm:p-8 text-center
                 bg-white dark:bg-transparent
                 hover:-translate-y-1 transition-all duration-300
                 reveal"
          :class="[{ visible: visible }, `reveal-delay-${i + 1}`]"
        >
          <div
            class="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5
                   bg-gradient-to-br from-primary-500 to-violet-600"
          >
            <span class="text-white" v-html="pillar.icon" />
          </div>
          <h3 class="font-display font-bold text-slate-900 dark:text-white text-lg mb-3">
            {{ pillar.title }}
          </h3>
          <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
            {{ pillar.description }}
          </p>
        </div>
      </div>

      <!-- Stats bar -->
      <div
        class="grid grid-cols-2 sm:grid-cols-4 gap-4
               p-6 sm:p-8 rounded-2xl
               bg-white dark:bg-white/[0.03]
               border border-slate-200 dark:border-white/[0.08]
               reveal reveal-delay-4"
        :class="{ visible: visible }"
      >
        <div v-for="stat in stats" :key="stat.label" class="text-center">
          <p class="font-display font-extrabold text-2xl sm:text-3xl gradient-text mb-1">
            {{ stat.value }}
          </p>
          <p class="text-xs text-slate-500 dark:text-slate-400 leading-snug">
            {{ stat.label }}
          </p>
        </div>
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

const ICON_CLIENTS = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`;
const ICON_CUSTOM  = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93l-1.41 1.41M4.93 4.93l1.41 1.41M4.93 19.07l1.41-1.41M19.07 19.07l-1.41-1.41M21 12h-2M5 12H3M12 21v-2M12 5V3"/></svg>`;
const ICON_DIRECT  = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`;

const pillars = computed(() => [
  {
    key: 'clients',
    title: t('trust.pillars.clients.title'),
    description: t('trust.pillars.clients.description'),
    icon: ICON_CLIENTS,
  },
  {
    key: 'custom',
    title: t('trust.pillars.custom.title'),
    description: t('trust.pillars.custom.description'),
    icon: ICON_CUSTOM,
  },
  {
    key: 'direct',
    title: t('trust.pillars.direct.title'),
    description: t('trust.pillars.direct.description'),
    icon: ICON_DIRECT,
  },
]);

const stats = computed(() => [
  { value: '10+',  label: t('trust.stats.experience') },
  { value: '25K+', label: t('trust.stats.students') },
  { value: '5+',   label: t('trust.stats.courses') },
  { value: '100%', label: t('trust.stats.custom') },
]);
</script>
