<template>
  <section id="contact" ref="sectionEl" class="section-mesh py-16 md:py-24 bg-[#f8f9ff] dark:bg-[#0a0f1e] overflow-hidden">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">

      <!-- Header -->
      <div class="text-center mb-10 md:mb-14 reveal" :class="{ visible: visible }">
        <span class="tag text-xs mb-4 inline-flex">{{ t('contact.subtitle') }}</span>
        <h2 class="section-title mb-3">{{ t('contact.title') }}</h2>
        <p class="text-slate-500 dark:text-slate-400 text-lg max-w-md mx-auto">
          {{ t('contact.description') }}
        </p>
      </div>

      <!-- WhatsApp CTA — primary action -->
      <div class="flex flex-col sm:flex-row gap-3 justify-center mb-10 reveal" :class="{ visible: visible }">
        <a
          :href="whatsappUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl
                 bg-emerald-500 hover:bg-emerald-600
                 text-white font-bold text-base
                 hover:scale-105 transition-all duration-200
                 shadow-lg shadow-emerald-500/25"
        >
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
          </svg>
          {{ locale === 'es' ? 'Hablar por WhatsApp' : 'Chat on WhatsApp' }}
        </a>
        <a
          :href="`mailto:${contactEmail}`"
          class="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl
                 border-2 border-slate-200 dark:border-white/[0.12]
                 text-slate-700 dark:text-slate-200 font-bold text-base
                 hover:border-primary-400 dark:hover:border-primary-500/60
                 hover:text-primary-600 dark:hover:text-primary-400
                 hover:scale-105 transition-all duration-200"
        >
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          {{ locale === 'es' ? 'Enviar un email' : 'Send an email' }}
        </a>
      </div>

      <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12">
        <a v-for="(link, i) in contactLinks" :key="link.label"
           :href="link.url"
           :target="link.isEmail ? '_self' : '_blank'"
           :rel="link.isEmail ? undefined : 'noopener noreferrer'"
           class="gradient-card group block p-4 sm:p-6 cursor-pointer
                  bg-white dark:bg-transparent
                  transition-all duration-300 hover:-translate-y-1
                  reveal"
           :class="[{ visible: visible }, `reveal-delay-${i + 1}`]">
          <div class="mb-4">
            <div class="w-12 h-12 rounded-2xl flex items-center justify-center
                        transition-transform duration-300 group-hover:scale-110"
                 :class="link.bgClass">
              <span class="w-6 h-6 flex items-center justify-center" :class="link.iconColor" v-html="link.icon" />
            </div>
          </div>
          <p class="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">
            {{ link.label }}
          </p>
          <p class="text-sm font-semibold text-slate-900 dark:text-white truncate
                    group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {{ link.handle }}
          </p>
          <p class="text-xs text-slate-400 dark:text-slate-600 mt-1">
            {{ locale === 'es' ? 'Abrir →' : 'Open →' }}
          </p>
        </a>
      </div>

      <!-- Hero CTA banner -->
      <div class="relative overflow-hidden rounded-3xl
                  reveal reveal-delay-5" :class="{ visible: visible }"
           style="background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #0891b2 100%)">
        <!-- Pattern -->
        <div class="absolute inset-0 opacity-10"
          style="background-image: radial-gradient(circle, rgba(255,255,255,.5) 1px, transparent 1px);
                 background-size: 28px 28px" />
        <!-- Orbs -->
        <div class="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
        <div class="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-cyan-400/20 blur-3xl" />

        <div class="relative px-8 sm:px-16 py-14 text-center">
          <h3 class="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
            {{ t('contact.cta_banner_title') }}
          </h3>
          <p class="text-indigo-200 mb-8 text-lg max-w-md mx-auto">
            {{ t('contact.cta_banner_subtitle') }}
          </p>
          <div class="flex flex-col sm:flex-row gap-3 justify-center">
            <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl
                     bg-emerald-400 hover:bg-emerald-300 text-emerald-900 font-bold text-base
                     hover:scale-105 transition-all duration-200 shadow-xl shadow-black/20">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
              {{ locale === 'es' ? 'Hablar por WhatsApp' : 'Chat on WhatsApp' }}
            </a>
            <a :href="`mailto:${contactEmail}`"
              class="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl
                     bg-white text-indigo-700 font-bold text-base
                     hover:bg-indigo-50 hover:scale-105
                     transition-all duration-200 shadow-xl shadow-black/20">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              {{ locale === 'es' ? 'Enviar email' : 'Send email' }}
            </a>
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

const contactEmail = computed(() => profileStore.profile?.email || 'info@withjp.ai');

// WhatsApp: update WHATSAPP_NUMBER with your international number (no + or spaces)
// Example: '593987654321' for Ecuador +593 987 654 321
const WHATSAPP_NUMBER = '593';
const whatsappUrl = computed(() => {
  const msg = encodeURIComponent(locale.value === 'es'
    ? 'Hola JP, quiero saber más sobre tus servicios de automatización.'
    : 'Hi JP, I want to learn more about your automation services.');
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
});

const ICON_LINKEDIN = `<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`;
const ICON_YOUTUBE  = `<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`;
const ICON_UDEMY    = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`;
const ICON_EMAIL    = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`;

const contactLinks = computed(() => {
  const p = profileStore.profile;
  return [
    { label: 'LinkedIn', icon: ICON_LINKEDIN, iconColor: 'text-blue-600 dark:text-blue-400',    url: p?.linkedin_url || 'https://www.linkedin.com/in/desertbarret/', handle: '/in/desertbarret',          bgClass: 'bg-blue-100 dark:bg-blue-900/20',     isEmail: false },
    { label: 'YouTube',  icon: ICON_YOUTUBE,  iconColor: 'text-red-600 dark:text-red-400',      url: p?.youtube_url  || 'https://www.youtube.com/@jp.desertbarret',  handle: '@jp.desertbarret',           bgClass: 'bg-red-100 dark:bg-red-900/20',        isEmail: false },
    { label: 'Udemy',    icon: ICON_UDEMY,    iconColor: 'text-purple-600 dark:text-purple-400',url: p?.udemy_url    || 'https://www.udemy.com/user/juan-pablo-guaman-rodriguez/', handle: 'juan-pablo-guaman', bgClass: 'bg-purple-100 dark:bg-purple-900/20', isEmail: false },
    { label: 'Email',    icon: ICON_EMAIL,    iconColor: 'text-emerald-600 dark:text-emerald-400', url: `mailto:${p?.email || 'info@withjp.ai'}`, handle: p?.email || 'info@withjp.ai', bgClass: 'bg-emerald-100 dark:bg-emerald-900/20', isEmail: true },
  ];
});
onMounted(() => { if (!profileStore.profile) profileStore.fetch(); });
</script>
