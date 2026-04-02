<template>
  <section id="services" ref="sectionEl" class="py-16 md:py-24 bg-[#f4f6ff] dark:bg-[#0a0f1e]">
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
          class="gradient-card group p-6 sm:p-8
                 bg-white dark:bg-transparent
                 hover:-translate-y-1 transition-all duration-300
                 reveal"
          :class="[{ visible: visible }, `reveal-delay-${i + 1}`]"
        >
          <!-- Icon -->
          <div class="w-12 h-12 rounded-2xl flex items-center justify-center mb-5
                      transition-transform duration-300 group-hover:scale-110"
               :class="service.bgClass">
            <span class="w-6 h-6 flex items-center justify-center" :class="service.iconColor" v-html="service.icon" />
          </div>

          <h3 class="font-display font-bold text-slate-900 dark:text-white text-lg mb-3">
            {{ service.title }}
          </h3>
          <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">
            {{ service.description }}
          </p>

          <!-- Result tag -->
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
               :class="service.resultClass">
            <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            {{ service.result }}
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-12 reveal reveal-delay-5" :class="{ visible: visible }">
        <a href="#contact"
           class="btn-primary btn-glow inline-flex items-center gap-2 text-base px-8 py-3.5">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          {{ locale === 'es' ? 'Solicitar presupuesto' : 'Request a quote' }}
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

const ICON_FLOWS   = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`;
const ICON_WA      = `<svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>`;
const ICON_CONNECT = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`;
const ICON_PANEL   = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`;

const services = computed(() => [
  {
    key: 'flows',
    title: t('services.flows.title'),
    description: t('services.flows.description'),
    result: locale.value === 'es' ? 'Atención disponible 24/7' : 'Support available 24/7',
    icon: ICON_FLOWS,
    bgClass: 'bg-indigo-100 dark:bg-indigo-900/20',
    iconColor: 'text-indigo-600 dark:text-indigo-400',
    resultClass: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400',
  },
  {
    key: 'whatsapp',
    title: t('services.whatsapp.title'),
    description: t('services.whatsapp.description'),
    result: locale.value === 'es' ? '100% cumplimiento de políticas Meta' : '100% Meta policy compliant',
    icon: ICON_WA,
    bgClass: 'bg-emerald-100 dark:bg-emerald-900/20',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    resultClass: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400',
  },
  {
    key: 'api',
    title: t('services.api.title'),
    description: t('services.api.description'),
    result: locale.value === 'es' ? 'Respuestas en tiempo real desde tu sistema' : 'Real-time answers from your system',
    icon: ICON_CONNECT,
    bgClass: 'bg-cyan-100 dark:bg-cyan-900/20',
    iconColor: 'text-cyan-600 dark:text-cyan-400',
    resultClass: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400',
  },
  {
    key: 'panel',
    title: t('services.panel.title'),
    description: t('services.panel.description'),
    result: locale.value === 'es' ? 'Control total de tus conversaciones' : 'Full control of your conversations',
    icon: ICON_PANEL,
    bgClass: 'bg-violet-100 dark:bg-violet-900/20',
    iconColor: 'text-violet-600 dark:text-violet-400',
    resultClass: 'bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400',
  },
]);
</script>
