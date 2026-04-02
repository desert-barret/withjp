<template>
  <section id="use-cases" ref="sectionEl" class="py-16 md:py-24 bg-white dark:bg-[#080B14]">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">

      <!-- Header -->
      <div class="text-center mb-12 md:mb-16 reveal" :class="{ visible: visible }">
        <span class="tag text-xs mb-4 inline-flex">{{ t('use_cases.tag') }}</span>
        <h2 class="section-title mb-4">{{ t('use_cases.title') }}</h2>
        <p class="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto">
          {{ t('use_cases.subtitle') }}
        </p>
      </div>

      <!-- Use cases grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        <div
          v-for="(item, i) in useCases"
          :key="item.key"
          class="gradient-card p-6 bg-slate-50 dark:bg-transparent
                 hover:-translate-y-1 transition-all duration-300
                 reveal"
          :class="[{ visible: visible }, `reveal-delay-${i + 1}`]"
        >
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                 :class="item.bgClass">
              <span :class="item.iconColor" v-html="item.icon" />
            </div>
            <div>
              <h3 class="font-display font-semibold text-slate-900 dark:text-white text-base mb-2">
                {{ item.title }}
              </h3>
              <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom note -->
      <p class="text-center text-slate-400 dark:text-slate-500 text-xs mt-10 reveal reveal-delay-6" :class="{ visible: visible }">
        {{ locale === 'es'
          ? '¿Tu caso no está aquí? Cuéntamelo — si es un flujo de atención, seguramente puedo construirlo.'
          : "Don't see your case here? Tell me — if it's a support flow, I can most likely build it." }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useReveal } from '@/composables/useReveal';

const { t, locale } = useI18n();
const { el: sectionEl, visible } = useReveal(0.1);

const ICON_FAQ    = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`;
const ICON_ORDER  = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>`;
const ICON_APPT   = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`;
const ICON_SUPPORT= `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`;
const ICON_LEAD   = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>`;
const ICON_NOTIF  = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`;

const useCases = computed(() => [
  {
    key: 'faq',
    title: t('use_cases.items.faq.title'),
    description: t('use_cases.items.faq.description'),
    icon: ICON_FAQ,
    bgClass: 'bg-indigo-100 dark:bg-indigo-900/20',
    iconColor: 'text-indigo-600 dark:text-indigo-400',
  },
  {
    key: 'orders',
    title: t('use_cases.items.orders.title'),
    description: t('use_cases.items.orders.description'),
    icon: ICON_ORDER,
    bgClass: 'bg-emerald-100 dark:bg-emerald-900/20',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
  },
  {
    key: 'appointments',
    title: t('use_cases.items.appointments.title'),
    description: t('use_cases.items.appointments.description'),
    icon: ICON_APPT,
    bgClass: 'bg-cyan-100 dark:bg-cyan-900/20',
    iconColor: 'text-cyan-600 dark:text-cyan-400',
  },
  {
    key: 'after_sales',
    title: t('use_cases.items.after_sales.title'),
    description: t('use_cases.items.after_sales.description'),
    icon: ICON_SUPPORT,
    bgClass: 'bg-amber-100 dark:bg-amber-900/20',
    iconColor: 'text-amber-600 dark:text-amber-400',
  },
  {
    key: 'leads',
    title: t('use_cases.items.leads.title'),
    description: t('use_cases.items.leads.description'),
    icon: ICON_LEAD,
    bgClass: 'bg-violet-100 dark:bg-violet-900/20',
    iconColor: 'text-violet-600 dark:text-violet-400',
  },
  {
    key: 'notifications',
    title: t('use_cases.items.notifications.title'),
    description: t('use_cases.items.notifications.description'),
    icon: ICON_NOTIF,
    bgClass: 'bg-rose-100 dark:bg-rose-900/20',
    iconColor: 'text-rose-600 dark:text-rose-400',
  },
]);
</script>
