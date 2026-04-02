<template>
  <section id="use-cases" ref="sectionEl" class="py-16 md:py-24 bg-[#f4f6ff] dark:bg-[#0a0f1e]">
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
          class="gradient-card p-6 bg-white dark:bg-transparent
                 hover:-translate-y-1 transition-all duration-300
                 reveal"
          :class="[{ visible: visible }, `reveal-delay-${i + 1}`]"
        >
          <div class="flex items-start gap-4">
            <div
              class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
              :class="item.bgClass"
            >
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
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useReveal } from '@/composables/useReveal';

const { t } = useI18n();
const { el: sectionEl, visible } = useReveal(0.1);

const ICON_CHAT     = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`;
const ICON_BELL     = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`;
const ICON_FILTER   = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>`;
const ICON_LINK     = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`;
const ICON_DASHBOARD= `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`;
const ICON_BRAIN    = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.14z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.14z"/></svg>`;

const useCases = computed(() => [
  {
    key: 'whatsapp_support',
    title: t('use_cases.items.whatsapp_support.title'),
    description: t('use_cases.items.whatsapp_support.description'),
    icon: ICON_CHAT,
    bgClass: 'bg-emerald-100 dark:bg-emerald-900/20',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
  },
  {
    key: 'notifications',
    title: t('use_cases.items.notifications.title'),
    description: t('use_cases.items.notifications.description'),
    icon: ICON_BELL,
    bgClass: 'bg-amber-100 dark:bg-amber-900/20',
    iconColor: 'text-amber-600 dark:text-amber-400',
  },
  {
    key: 'lead_qualification',
    title: t('use_cases.items.lead_qualification.title'),
    description: t('use_cases.items.lead_qualification.description'),
    icon: ICON_FILTER,
    bgClass: 'bg-indigo-100 dark:bg-indigo-900/20',
    iconColor: 'text-indigo-600 dark:text-indigo-400',
  },
  {
    key: 'integrations',
    title: t('use_cases.items.integrations.title'),
    description: t('use_cases.items.integrations.description'),
    icon: ICON_LINK,
    bgClass: 'bg-cyan-100 dark:bg-cyan-900/20',
    iconColor: 'text-cyan-600 dark:text-cyan-400',
  },
  {
    key: 'admin_panel',
    title: t('use_cases.items.admin_panel.title'),
    description: t('use_cases.items.admin_panel.description'),
    icon: ICON_DASHBOARD,
    bgClass: 'bg-violet-100 dark:bg-violet-900/20',
    iconColor: 'text-violet-600 dark:text-violet-400',
  },
  {
    key: 'ai_assistant',
    title: t('use_cases.items.ai_assistant.title'),
    description: t('use_cases.items.ai_assistant.description'),
    icon: ICON_BRAIN,
    bgClass: 'bg-rose-100 dark:bg-rose-900/20',
    iconColor: 'text-rose-600 dark:text-rose-400',
  },
]);
</script>
