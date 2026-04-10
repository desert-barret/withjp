<template>
  <div>
    <!-- Hero -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-emerald-50/50 to-white dark:from-emerald-950/20 dark:to-dark-900"></div>
      <div class="relative max-w-4xl mx-auto px-4 sm:px-6">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full
                    bg-emerald-50 dark:bg-emerald-500/10
                    border border-emerald-200 dark:border-emerald-500/20 mb-8">
          <svg class="w-4 h-4 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          <span class="text-sm font-medium text-emerald-700 dark:text-emerald-400">
            WhatsApp Business API &middot; Meta
          </span>
        </div>

        <h1 class="text-4xl sm:text-5xl font-display font-bold
                   text-slate-900 dark:text-white leading-tight mb-6 max-w-3xl">
          {{ t('vision.hero.headline') }}
        </h1>
        <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mb-10">
          {{ t('vision.hero.description') }}
        </p>

        <a href="mailto:info@withjp.ai"
          class="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white
                 bg-emerald-600 hover:bg-emerald-500
                 shadow-lg shadow-emerald-500/25 transition-all duration-300">
          {{ t('vision.hero.cta') }}
        </a>
      </div>
    </section>

    <!-- Chat Demo -->
    <section class="py-20 bg-white dark:bg-dark-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <div class="grid lg:grid-cols-2 gap-12 items-start">
          <!-- Chat mockup -->
          <div class="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden
                      bg-slate-50 dark:bg-dark-950 shadow-xl">
            <!-- Chat header -->
            <div class="px-4 py-3 bg-emerald-600 flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <svg class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
              </div>
              <div>
                <div class="text-white font-semibold text-sm">{{ t('vision.demo.business') }}</div>
                <div class="text-emerald-100 text-xs">{{ t('vision.demo.status') }}</div>
              </div>
            </div>

            <!-- Messages -->
            <div class="p-4 space-y-3 min-h-[320px]">
              <!-- Customer msg -->
              <div class="flex justify-end">
                <div class="bg-emerald-100 dark:bg-emerald-900/30 text-slate-800 dark:text-emerald-100
                            px-4 py-2 rounded-2xl rounded-br-md max-w-[80%] text-sm">
                  {{ t('vision.demo.msg1') }}
                </div>
              </div>
              <!-- Bot reply -->
              <div class="flex justify-start">
                <div class="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300
                            px-4 py-2 rounded-2xl rounded-bl-md max-w-[85%] text-sm shadow-sm
                            border border-slate-100 dark:border-slate-700">
                  {{ t('vision.demo.msg2') }}
                </div>
              </div>
              <!-- Customer msg -->
              <div class="flex justify-end">
                <div class="bg-emerald-100 dark:bg-emerald-900/30 text-slate-800 dark:text-emerald-100
                            px-4 py-2 rounded-2xl rounded-br-md max-w-[80%] text-sm">
                  {{ t('vision.demo.msg3') }}
                </div>
              </div>
              <!-- Bot reply with options -->
              <div class="flex justify-start">
                <div class="max-w-[85%]">
                  <div class="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300
                              px-4 py-2 rounded-2xl rounded-bl-md text-sm shadow-sm
                              border border-slate-100 dark:border-slate-700 mb-2">
                    {{ t('vision.demo.msg4') }}
                  </div>
                  <div class="space-y-1.5">
                    <div v-for="opt in demoOptions" :key="opt"
                      class="px-4 py-2 rounded-xl text-xs font-medium text-center
                             border border-emerald-200 dark:border-emerald-800
                             text-emerald-700 dark:text-emerald-400
                             bg-emerald-50/50 dark:bg-emerald-950/30">
                      {{ opt }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Footer note -->
            <div class="px-4 py-2 bg-slate-100 dark:bg-slate-800/50 text-center">
              <span class="text-xs text-slate-400">{{ t('vision.demo.note') }}</span>
            </div>
          </div>

          <!-- Description -->
          <div>
            <h2 class="text-2xl font-display font-bold text-slate-900 dark:text-white mb-6">
              {{ t('vision.demo.title') }}
            </h2>
            <div class="space-y-4">
              <div v-for="(feature, idx) in demoFeatures" :key="idx"
                class="flex items-start gap-3">
                <span class="text-emerald-500 mt-1 shrink-0">
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                <span class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{{ feature }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Problem / Solution -->
    <section class="py-20 bg-slate-50 dark:bg-dark-950">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <div class="grid md:grid-cols-2 gap-12">
          <div>
            <h2 class="text-2xl font-display font-bold text-slate-900 dark:text-white mb-6">
              {{ t('vision.problem.title') }}
            </h2>
            <ul class="space-y-4">
              <li v-for="(item, idx) in problemItems" :key="idx" class="flex items-start gap-3">
                <span class="text-red-500 text-lg mt-0.5 shrink-0">&#10005;</span>
                <span class="text-slate-600 dark:text-slate-400 text-sm">{{ item }}</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="text-2xl font-display font-bold text-slate-900 dark:text-white mb-6">
              {{ t('vision.solution.title') }}
            </h2>
            <ul class="space-y-4">
              <li v-for="(item, idx) in solutionItems" :key="idx" class="flex items-start gap-3">
                <span class="text-emerald-500 text-lg mt-0.5 shrink-0">&#10003;</span>
                <span class="text-slate-600 dark:text-slate-400 text-sm">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="py-20 bg-white dark:bg-dark-900">
      <div class="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 class="text-2xl font-display font-bold text-slate-900 dark:text-white mb-10 text-center">
          {{ t('vision.how.title') }}
        </h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(step, idx) in processSteps" :key="idx" class="text-center">
            <div class="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-500/10
                        flex items-center justify-center mx-auto mb-4
                        text-emerald-700 dark:text-emerald-400 font-bold text-sm">
              {{ idx + 1 }}
            </div>
            <h3 class="font-display font-bold text-slate-900 dark:text-white mb-2 text-sm">{{ step.title }}</h3>
            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-emerald-600">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 class="text-3xl font-display font-bold text-white mb-4">
          {{ t('vision.cta.title') }}
        </h2>
        <p class="text-emerald-100 mb-8">{{ t('vision.cta.subtitle') }}</p>
        <a href="mailto:info@withjp.ai"
          class="inline-flex px-8 py-4 rounded-2xl font-semibold
                 bg-white text-emerald-700 hover:bg-emerald-50
                 shadow-lg transition-all duration-300">
          {{ t('vision.cta.button') }}
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
  title: () => t('vision.meta.title'),
  meta: [
    { name: 'description', content: () => t('vision.meta.description') },
    { property: 'og:title', content: () => t('vision.meta.title') },
    { property: 'og:description', content: () => t('vision.meta.description') },
    { property: 'og:type', content: 'website' },
  ],
});

const demoOptions = computed(() => [
  t('vision.demo.opt1'), t('vision.demo.opt2'), t('vision.demo.opt3'),
]);

const demoFeatures = computed(() => [
  t('vision.demo.f1'), t('vision.demo.f2'), t('vision.demo.f3'), t('vision.demo.f4'),
]);

const problemItems = computed(() => [
  t('vision.problem.p1'), t('vision.problem.p2'),
  t('vision.problem.p3'), t('vision.problem.p4'),
]);

const solutionItems = computed(() => [
  t('vision.solution.s1'), t('vision.solution.s2'),
  t('vision.solution.s3'), t('vision.solution.s4'),
]);

const processSteps = computed(() => [
  { title: t('vision.how.s1.title'), description: t('vision.how.s1.desc') },
  { title: t('vision.how.s2.title'), description: t('vision.how.s2.desc') },
  { title: t('vision.how.s3.title'), description: t('vision.how.s3.desc') },
  { title: t('vision.how.s4.title'), description: t('vision.how.s4.desc') },
]);
</script>
