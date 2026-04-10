<template>
  <div>
    <!-- Hero — PAS (Problem Agitation Solution) -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-emerald-50/50 to-white dark:from-emerald-950/20 dark:to-dark-900"></div>
      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full
                    bg-emerald-50 dark:bg-emerald-500/10
                    border border-emerald-200 dark:border-emerald-500/20 mb-8">
          <span class="text-sm font-medium text-emerald-700 dark:text-emerald-400">
            WhatsApp Business API · Official Meta Partner
          </span>
        </div>

        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-display font-bold
                   text-slate-900 dark:text-white leading-tight mb-6">
          {{ t('whatsapp.hero.headline') }}
        </h1>
        <p class="text-lg sm:text-xl text-slate-600 dark:text-slate-400
                  max-w-2xl mx-auto mb-10 leading-relaxed">
          {{ t('whatsapp.hero.description') }}
        </p>

        <a href="mailto:info@withjp.ai"
          class="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white
                 bg-gradient-to-r from-emerald-600 to-emerald-500
                 hover:from-emerald-500 hover:to-emerald-400
                 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40
                 transition-all duration-300">
          {{ t('whatsapp.hero.cta') }}
        </a>
      </div>
    </section>

    <!-- Problem -->
    <section class="py-20 bg-white dark:bg-dark-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-display font-bold text-slate-900 dark:text-white mb-6">
              {{ t('whatsapp.problem.title') }}
            </h2>
            <ul class="space-y-4">
              <li v-for="(item, idx) in problemItems" :key="idx"
                class="flex items-start gap-3">
                <span class="text-red-500 text-xl mt-0.5">✕</span>
                <span class="text-slate-600 dark:text-slate-400">{{ item }}</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="text-3xl font-display font-bold text-slate-900 dark:text-white mb-6">
              {{ t('whatsapp.solution.title') }}
            </h2>
            <ul class="space-y-4">
              <li v-for="(item, idx) in solutionItems" :key="idx"
                class="flex items-start gap-3">
                <span class="text-emerald-500 text-xl mt-0.5">✓</span>
                <span class="text-slate-600 dark:text-slate-400">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Use Cases with results -->
    <section class="py-20 bg-slate-50 dark:bg-dark-950">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 class="text-3xl font-display font-bold text-slate-900 dark:text-white mb-12 text-center">
          {{ t('whatsapp.cases.title') }}
        </h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(useCase, idx) in useCases" :key="idx"
            class="p-6 rounded-2xl bg-white dark:bg-dark-900
                   border border-slate-200 dark:border-slate-800">
            <div class="text-3xl mb-4">{{ useCase.icon }}</div>
            <h3 class="font-display font-bold text-slate-900 dark:text-white mb-2">
              {{ useCase.title }}
            </h3>
            <p class="text-sm text-slate-600 dark:text-slate-400 mb-3">{{ useCase.description }}</p>
            <div class="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
              {{ useCase.result }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section class="py-20 bg-white dark:bg-dark-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 class="text-3xl font-display font-bold text-slate-900 dark:text-white mb-12 text-center">
          {{ t('whatsapp.process.title') }}
        </h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(step, idx) in processSteps" :key="idx" class="text-center">
            <div class="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-500/10
                        flex items-center justify-center mx-auto mb-4
                        text-primary-600 dark:text-primary-400 font-bold text-lg">
              {{ idx + 1 }}
            </div>
            <h3 class="font-display font-bold text-slate-900 dark:text-white mb-2">{{ step.title }}</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust signals -->
    <section class="py-20 bg-slate-50 dark:bg-dark-950">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 class="text-3xl font-display font-bold text-slate-900 dark:text-white mb-12 text-center">
          {{ t('whatsapp.trust.title') }}
        </h2>
        <div class="grid sm:grid-cols-2 gap-6">
          <div v-for="(item, idx) in trustItems" :key="idx"
            class="flex items-start gap-4 p-6 rounded-2xl bg-white dark:bg-dark-900
                   border border-slate-200 dark:border-slate-800">
            <span class="text-emerald-500 text-2xl shrink-0">✓</span>
            <div>
              <h3 class="font-semibold text-slate-900 dark:text-white mb-1">{{ item.title }}</h3>
              <p class="text-sm text-slate-600 dark:text-slate-400">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-20 bg-white dark:bg-dark-900">
      <div class="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 class="text-3xl font-display font-bold text-slate-900 dark:text-white mb-12 text-center">
          {{ t('whatsapp.faq.title') }}
        </h2>
        <div class="space-y-4">
          <details v-for="(item, idx) in faqItems" :key="idx"
            class="group rounded-2xl border border-slate-200 dark:border-slate-800
                   bg-slate-50 dark:bg-dark-950 overflow-hidden">
            <summary class="flex items-center justify-between px-6 py-5 cursor-pointer
                           text-slate-900 dark:text-white font-semibold">
              {{ item.question }}
              <svg class="w-5 h-5 shrink-0 ml-4 transition-transform group-open:rotate-180"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
              </svg>
            </summary>
            <div class="px-6 pb-5 text-slate-600 dark:text-slate-400 leading-relaxed">
              {{ item.answer }}
            </div>
          </details>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="py-20 bg-gradient-to-br from-emerald-600 to-emerald-700">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 class="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
          {{ t('whatsapp.cta.title') }}
        </h2>
        <p class="text-lg text-emerald-100 mb-8">
          {{ t('whatsapp.cta.subtitle') }}
        </p>
        <a href="mailto:info@withjp.ai"
          class="inline-flex px-8 py-4 rounded-2xl font-semibold
                 bg-white text-emerald-700 hover:bg-emerald-50
                 shadow-lg transition-all duration-300">
          {{ t('whatsapp.cta.button') }}
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useHead } from '@unhead/vue';

const { t } = useI18n();

useHead({
  title: () => t('whatsapp.meta.title'),
  meta: [
    { name: 'description', content: () => t('whatsapp.meta.description') },
  ],
});

const problemItems = computed(() => [
  t('whatsapp.problem.p1'), t('whatsapp.problem.p2'),
  t('whatsapp.problem.p3'), t('whatsapp.problem.p4'),
]);

const solutionItems = computed(() => [
  t('whatsapp.solution.s1'), t('whatsapp.solution.s2'),
  t('whatsapp.solution.s3'), t('whatsapp.solution.s4'),
]);

const useCases = computed(() => [
  { icon: '❓', title: t('whatsapp.cases.faq.title'), description: t('whatsapp.cases.faq.desc'), result: t('whatsapp.cases.faq.result') },
  { icon: '📦', title: t('whatsapp.cases.orders.title'), description: t('whatsapp.cases.orders.desc'), result: t('whatsapp.cases.orders.result') },
  { icon: '📅', title: t('whatsapp.cases.appointments.title'), description: t('whatsapp.cases.appointments.desc'), result: t('whatsapp.cases.appointments.result') },
  { icon: '🛎️', title: t('whatsapp.cases.support.title'), description: t('whatsapp.cases.support.desc'), result: t('whatsapp.cases.support.result') },
  { icon: '🎯', title: t('whatsapp.cases.leads.title'), description: t('whatsapp.cases.leads.desc'), result: t('whatsapp.cases.leads.result') },
  { icon: '🔔', title: t('whatsapp.cases.notifications.title'), description: t('whatsapp.cases.notifications.desc'), result: t('whatsapp.cases.notifications.result') },
]);

const processSteps = computed(() => [
  { title: t('whatsapp.process.s1.title'), description: t('whatsapp.process.s1.desc') },
  { title: t('whatsapp.process.s2.title'), description: t('whatsapp.process.s2.desc') },
  { title: t('whatsapp.process.s3.title'), description: t('whatsapp.process.s3.desc') },
  { title: t('whatsapp.process.s4.title'), description: t('whatsapp.process.s4.desc') },
]);

const trustItems = computed(() => [
  { title: t('whatsapp.trust.t1.title'), description: t('whatsapp.trust.t1.desc') },
  { title: t('whatsapp.trust.t2.title'), description: t('whatsapp.trust.t2.desc') },
  { title: t('whatsapp.trust.t3.title'), description: t('whatsapp.trust.t3.desc') },
  { title: t('whatsapp.trust.t4.title'), description: t('whatsapp.trust.t4.desc') },
]);

const faqItems = computed(() => [
  { question: t('whatsapp.faq.q1.q'), answer: t('whatsapp.faq.q1.a') },
  { question: t('whatsapp.faq.q2.q'), answer: t('whatsapp.faq.q2.a') },
  { question: t('whatsapp.faq.q3.q'), answer: t('whatsapp.faq.q3.a') },
  { question: t('whatsapp.faq.q4.q'), answer: t('whatsapp.faq.q4.a') },
]);
</script>
