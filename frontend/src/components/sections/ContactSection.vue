<template>
  <section id="contact" ref="sectionEl" class="py-24 bg-white dark:bg-[#0a0f1e] overflow-hidden">
    <div class="max-w-6xl mx-auto px-6">

      <!-- Header -->
      <div class="text-center mb-14 reveal" :class="{ visible: visible }">
        <span class="tag text-xs mb-4 inline-flex">{{ t('contact.subtitle') }}</span>
        <h2 class="section-title mb-3">{{ t('contact.title') }}</h2>
        <p class="text-slate-500 dark:text-slate-400 text-lg max-w-md mx-auto">
          {{ t('contact.description') }}
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        <a v-for="(link, i) in contactLinks" :key="link.label"
           :href="link.url" target="_blank" rel="noopener noreferrer"
           class="gradient-card group block p-6 cursor-pointer
                  bg-white dark:bg-transparent
                  transition-all duration-300 hover:-translate-y-1
                  reveal"
           :class="[{ visible: visible }, `reveal-delay-${i + 1}`]">
          <div class="mb-4">
            <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl
                        transition-transform duration-300 group-hover:scale-110"
                 :class="link.bgClass">
              {{ link.icon }}
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
            {{ locale === 'es' ? '¿Tienes un proyecto en mente?' : 'Got a project in mind?' }}
          </h3>
          <p class="text-indigo-200 mb-8 text-lg max-w-md mx-auto">
            {{ locale === 'es'
              ? 'Hablemos y construyamos algo increíble juntos.'
              : "Let's talk and build something incredible together." }}
          </p>
          <a href="mailto:jp@withjp.ai"
            class="inline-flex items-center gap-3 px-8 py-4 rounded-2xl
                   bg-white text-indigo-700 font-bold text-base
                   hover:bg-indigo-50 hover:scale-105
                   transition-all duration-200 shadow-xl shadow-black/20">
            ✉️ jp@withjp.ai
          </a>
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

const contactLinks = computed(() => {
  const p = profileStore.profile;
  return [
    { label: 'LinkedIn', icon: '💼', url: p?.linkedin_url || 'https://www.linkedin.com/in/desertbarret/', handle: '/in/desertbarret',          bgClass: 'bg-blue-100 dark:bg-blue-900/20' },
    { label: 'YouTube',  icon: '▶️', url: p?.youtube_url  || 'https://www.youtube.com/@jp.desertbarret',  handle: '@jp.desertbarret',           bgClass: 'bg-red-100 dark:bg-red-900/20' },
    { label: 'Udemy',    icon: '🎓', url: p?.udemy_url    || 'https://www.udemy.com/user/juan-pablo-guaman-rodriguez/', handle: 'juan-pablo-guaman', bgClass: 'bg-purple-100 dark:bg-purple-900/20' },
    { label: 'Email',    icon: '✉️', url: `mailto:${p?.email || 'jp@withjp.ai'}`, handle: p?.email || 'jp@withjp.ai', bgClass: 'bg-emerald-100 dark:bg-emerald-900/20' },
  ];
});
onMounted(() => { if (!profileStore.profile) profileStore.fetch(); });
</script>
