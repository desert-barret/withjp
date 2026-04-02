<template>
  <section id="faq" ref="sectionEl" class="py-16 md:py-24 bg-white dark:bg-[#080B14]">
    <div class="max-w-3xl mx-auto px-4 sm:px-6">

      <!-- Header -->
      <div class="text-center mb-10 md:mb-14 reveal" :class="{ visible: visible }">
        <span class="tag text-xs mb-4 inline-flex">{{ t('faq.tag') }}</span>
        <h2 class="section-title mb-3">{{ t('faq.title') }}</h2>
        <p class="text-slate-500 dark:text-slate-400 text-lg max-w-lg mx-auto">
          {{ t('faq.subtitle') }}
        </p>
      </div>

      <!-- Accordion -->
      <div class="space-y-3 reveal reveal-delay-1" :class="{ visible: visible }">
        <div
          v-for="(item, i) in faqs"
          :key="i"
          class="border border-slate-200 dark:border-white/[0.08] rounded-2xl overflow-hidden
                 bg-slate-50 dark:bg-white/[0.02]
                 transition-all duration-200"
          :class="openIndex === i ? 'border-primary-300 dark:border-primary-500/30' : ''"
        >
          <!-- Question -->
          <button
            class="w-full flex items-center justify-between gap-4 px-6 py-5 text-left
                   hover:bg-slate-100 dark:hover:bg-white/[0.04] transition-colors"
            @click="openIndex = openIndex === i ? null : i"
            :aria-expanded="openIndex === i"
          >
            <span class="font-display font-semibold text-slate-900 dark:text-white text-base leading-snug">
              {{ item.question }}
            </span>
            <svg
              class="w-5 h-5 text-slate-400 dark:text-slate-500 flex-shrink-0 transition-transform duration-200"
              :class="openIndex === i ? 'rotate-45 text-primary-500' : ''"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19"/>
              <line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
          </button>

          <!-- Answer -->
          <Transition name="faq-slide">
            <div v-if="openIndex === i" class="px-6 pb-5">
              <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                {{ item.answer }}
              </p>
            </div>
          </Transition>
        </div>
      </div>

      <!-- CTA below FAQs -->
      <div class="text-center mt-10 reveal reveal-delay-2" :class="{ visible: visible }">
        <p class="text-slate-500 dark:text-slate-400 text-sm mb-4">
          {{ t('faq.cta_label') }}
        </p>
        <a
          href="#contact"
          class="btn-primary inline-flex items-center gap-2 px-6 py-3"
        >
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          {{ t('faq.cta_button') }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useReveal } from '@/composables/useReveal';

const { t } = useI18n();
const { el: sectionEl, visible } = useReveal(0.1);

const openIndex = ref<number | null>(0);

const faqs = computed(() => [
  { question: t('faq.items.q1.question'), answer: t('faq.items.q1.answer') },
  { question: t('faq.items.q2.question'), answer: t('faq.items.q2.answer') },
  { question: t('faq.items.q3.question'), answer: t('faq.items.q3.answer') },
  { question: t('faq.items.q4.question'), answer: t('faq.items.q4.answer') },
  { question: t('faq.items.q5.question'), answer: t('faq.items.q5.answer') },
  { question: t('faq.items.q6.question'), answer: t('faq.items.q6.answer') },
]);
</script>

<style scoped>
.faq-slide-enter-active {
  transition: all 0.25s cubic-bezier(0.22, 1, 0.36, 1);
}
.faq-slide-leave-active {
  transition: all 0.15s ease-in;
}
.faq-slide-enter-from,
.faq-slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
