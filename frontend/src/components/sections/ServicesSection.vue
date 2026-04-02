<template>
  <section id="services" ref="sectionEl" class="py-16 md:py-24 bg-white dark:bg-[#080B14]">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">

      <!-- Header -->
      <div class="text-center mb-12 md:mb-16 reveal" :class="{ visible: visible }">
        <span class="tag text-xs mb-4 inline-flex">{{ t('services.tag') }}</span>
        <h2 class="section-title mb-4">{{ t('services.title') }}</h2>
        <p class="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto">
          {{ t('services.subtitle') }}
        </p>
      </div>

      <!-- Services grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
        <div
          v-for="(service, i) in services"
          :key="service.key"
          class="gradient-card group p-6 sm:p-8 cursor-default
                 bg-slate-50 dark:bg-transparent
                 hover:-translate-y-1 transition-all duration-300
                 reveal"
          :class="[{ visible: visible }, `reveal-delay-${i + 1}`]"
        >
          <!-- Icon -->
          <div
            class="w-12 h-12 rounded-2xl flex items-center justify-center mb-5
                   transition-transform duration-300 group-hover:scale-110"
            :class="service.bgClass"
          >
            <span class="w-6 h-6 flex items-center justify-center" :class="service.iconColor" v-html="service.icon" />
          </div>

          <!-- Content -->
          <h3 class="font-display font-bold text-slate-900 dark:text-white text-lg mb-3">
            {{ service.title }}
          </h3>
          <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
            {{ service.description }}
          </p>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-12 reveal reveal-delay-5" :class="{ visible: visible }">
        <a
          href="#contact"
          class="btn-primary btn-glow inline-flex items-center gap-2 text-base px-8 py-3.5"
        >
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          {{ locale === 'es' ? 'Hablemos de tu proyecto' : "Let's talk about your project" }}
        </a>
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

const ICON_BOT = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><circle cx="12" cy="5" r="1"/><line x1="8" y1="15" x2="8" y2="17"/><line x1="12" y1="15" x2="12" y2="17"/><line x1="16" y1="15" x2="16" y2="17"/></svg>`;
const ICON_WHATSAPP = `<svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>`;
const ICON_API = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;
const ICON_CUSTOM = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`;

const services = computed(() => [
  {
    key: 'bot',
    title: t('services.bot.title'),
    description: t('services.bot.description'),
    icon: ICON_BOT,
    bgClass: 'bg-indigo-100 dark:bg-indigo-900/20',
    iconColor: 'text-indigo-600 dark:text-indigo-400',
  },
  {
    key: 'whatsapp',
    title: t('services.whatsapp.title'),
    description: t('services.whatsapp.description'),
    icon: ICON_WHATSAPP,
    bgClass: 'bg-emerald-100 dark:bg-emerald-900/20',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
  },
  {
    key: 'api',
    title: t('services.api.title'),
    description: t('services.api.description'),
    icon: ICON_API,
    bgClass: 'bg-cyan-100 dark:bg-cyan-900/20',
    iconColor: 'text-cyan-600 dark:text-cyan-400',
  },
  {
    key: 'custom',
    title: t('services.custom.title'),
    description: t('services.custom.description'),
    icon: ICON_CUSTOM,
    bgClass: 'bg-violet-100 dark:bg-violet-900/20',
    iconColor: 'text-violet-600 dark:text-violet-400',
  },
]);
</script>
