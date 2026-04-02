<template>
  <section id="how-i-work" ref="sectionEl" class="py-16 md:py-24 bg-white dark:bg-[#080B14]">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">

      <!-- Header -->
      <div class="text-center mb-12 md:mb-16 reveal" :class="{ visible: visible }">
        <span class="tag text-xs mb-4 inline-flex">{{ t('how_i_work.tag') }}</span>
        <h2 class="section-title mb-4">{{ t('how_i_work.title') }}</h2>
        <p class="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto">
          {{ t('how_i_work.subtitle') }}
        </p>
      </div>

      <!-- Steps -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        <div
          v-for="(step, i) in steps"
          :key="step.key"
          class="relative reveal"
          :class="[{ visible: visible }, `reveal-delay-${i + 1}`]"
        >
          <!-- Connector line (hidden on last item and on mobile) -->
          <div
            v-if="i < steps.length - 1"
            class="hidden lg:block absolute top-6 left-[calc(50%+2rem)] right-0 h-px
                   bg-gradient-to-r from-slate-200 dark:from-white/10 to-transparent"
          />

          <div class="flex flex-col items-center text-center">
            <!-- Step number -->
            <div
              class="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 font-display font-bold text-lg
                     bg-gradient-to-br from-primary-500 to-violet-600 text-white shadow-lg shadow-primary-500/20"
            >
              {{ i + 1 }}
            </div>

            <h3 class="font-display font-bold text-slate-900 dark:text-white text-base mb-3">
              {{ step.title }}
            </h3>
            <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              {{ step.description }}
            </p>
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

const steps = computed(() => [
  {
    key: 'discovery',
    title: t('how_i_work.steps.discovery.title'),
    description: t('how_i_work.steps.discovery.description'),
  },
  {
    key: 'proposal',
    title: t('how_i_work.steps.proposal.title'),
    description: t('how_i_work.steps.proposal.description'),
  },
  {
    key: 'development',
    title: t('how_i_work.steps.development.title'),
    description: t('how_i_work.steps.development.description'),
  },
  {
    key: 'delivery',
    title: t('how_i_work.steps.delivery.title'),
    description: t('how_i_work.steps.delivery.description'),
  },
]);
</script>
