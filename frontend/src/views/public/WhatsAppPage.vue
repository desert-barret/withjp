<template>
  <div>
    <!-- ═══ HERO ══════════════════════════════════════════════════ -->
    <section class="relative pt-28 pb-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50/30
                  dark:from-dark-950 dark:via-dark-900 dark:to-emerald-950/20"></div>
      <div class="absolute top-20 right-0 w-[600px] h-[600px] rounded-full
                  bg-emerald-400/10 dark:bg-emerald-500/05 blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 rounded-full
                  bg-teal-400/10 dark:bg-teal-500/05 blur-3xl pointer-events-none"></div>

      <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div class="grid lg:grid-cols-2 gap-12 items-center">

          <!-- Text side -->
          <div>
            <!-- Badge -->
            <div class="hero-enter-1 inline-flex items-center gap-2.5 px-4 py-2 rounded-full
                        bg-emerald-50 dark:bg-emerald-500/10
                        border border-emerald-200 dark:border-emerald-500/20 mb-8">
              <svg class="w-4 h-4 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span class="text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                WhatsApp Business API · Meta oficial
              </span>
            </div>

            <!-- Headline: pain-point first -->
            <h1 class="hero-enter-2 font-display font-bold leading-[1.05] mb-6">
              <span class="block text-4xl sm:text-5xl text-slate-900 dark:text-white">
                {{ t('vision.hero.headline_1') }}
              </span>
              <span class="block text-4xl sm:text-5xl text-slate-900 dark:text-white">
                {{ t('vision.hero.headline_2') }}
              </span>
              <span class="block text-4xl sm:text-5xl" style="color: #ef4444;">
                {{ t('vision.hero.headline_3') }}
              </span>
              <span class="block text-3xl sm:text-4xl mt-2 text-emerald-600 dark:text-emerald-400 font-medium">
                {{ t('vision.hero.headline_sub') }}
              </span>
            </h1>

            <p class="hero-enter-3 text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-10 max-w-xl">
              {{ t('vision.hero.description') }}
            </p>

            <div class="hero-enter-4 flex flex-col sm:flex-row gap-4 mb-12">
              <a href="mailto:info@withjp.ai"
                class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold
                       text-white bg-emerald-600 hover:bg-emerald-500
                       shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40
                       transition-all duration-300">
                {{ t('vision.hero.cta') }}
              </a>
              <a href="#demo"
                class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold
                       text-emerald-700 dark:text-emerald-400
                       border-2 border-emerald-200 dark:border-emerald-500/30
                       hover:bg-emerald-50 dark:hover:bg-emerald-500/10
                       transition-all duration-300">
                {{ t('vision.hero.cta_secondary') }}
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M19 9l-7 7-7-7"/></svg>
              </a>
            </div>

            <!-- Key metrics -->
            <div class="hero-enter-5 grid grid-cols-3 gap-4">
              <div v-for="m in heroMetrics" :key="m.label"
                class="p-4 rounded-2xl bg-white dark:bg-dark-900
                       border border-emerald-100 dark:border-emerald-500/10
                       shadow-sm text-center">
                <div class="text-2xl font-display font-bold text-emerald-600 dark:text-emerald-400">
                  {{ m.value }}
                </div>
                <div class="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-tight">{{ m.label }}</div>
              </div>
            </div>
          </div>

          <!-- Chat demo preview (hero) -->
          <div class="hero-enter-card">
            <div class="relative max-w-xs mx-auto lg:ml-auto">
              <!-- Glow -->
              <div class="absolute inset-0 bg-emerald-400/20 blur-3xl rounded-full scale-110 dark:bg-emerald-500/10"></div>

              <div class="relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-500/20
                          border border-emerald-100 dark:border-emerald-900">
                <!-- Phone bar -->
                <div class="bg-emerald-600 px-4 py-3 flex items-center gap-3">
                  <div class="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                    <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    </svg>
                  </div>
                  <div>
                    <div class="text-white font-bold text-sm">{{ t('vision.demo.business') }}</div>
                    <div class="text-emerald-200 text-xs flex items-center gap-1">
                      <span class="w-1.5 h-1.5 rounded-full bg-emerald-300"></span>
                      {{ t('vision.demo.status') }}
                    </div>
                  </div>
                </div>

                <!-- Messages -->
                <div class="bg-[#E5DDD5] dark:bg-slate-800 p-4 space-y-3 min-h-[340px]"
                  style="background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAIklEQVQoU2NkYGD4z8BQDwAFgAF/QualIQAAAABJRU5ErkJggg=='); background-size: 100px;">
                  <!-- customer -->
                  <div class="flex justify-end">
                    <div class="bg-[#DCF8C6] dark:bg-emerald-800 px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[82%] shadow-sm">
                      <p class="text-slate-800 dark:text-emerald-100 text-sm">{{ t('vision.demo.msg1') }}</p>
                      <div class="text-right text-[10px] text-slate-500 dark:text-emerald-300 mt-1">12:01</div>
                    </div>
                  </div>
                  <!-- bot -->
                  <div class="flex justify-start">
                    <div class="bg-white dark:bg-slate-700 px-4 py-2.5 rounded-2xl rounded-tl-sm max-w-[85%] shadow-sm">
                      <p class="text-slate-700 dark:text-slate-200 text-sm">{{ t('vision.demo.msg2') }}</p>
                      <div class="text-right text-[10px] text-slate-400 mt-1">12:01</div>
                    </div>
                  </div>
                  <!-- customer -->
                  <div class="flex justify-end">
                    <div class="bg-[#DCF8C6] dark:bg-emerald-800 px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[80%] shadow-sm">
                      <p class="text-slate-800 dark:text-emerald-100 text-sm">{{ t('vision.demo.msg3') }}</p>
                      <div class="text-right text-[10px] text-slate-500 dark:text-emerald-300 mt-1">12:02</div>
                    </div>
                  </div>
                  <!-- bot with options -->
                  <div class="flex justify-start">
                    <div class="max-w-[88%]">
                      <div class="bg-white dark:bg-slate-700 px-4 py-2.5 rounded-2xl rounded-tl-sm shadow-sm mb-2">
                        <p class="text-slate-700 dark:text-slate-200 text-sm">{{ t('vision.demo.msg4') }}</p>
                        <div class="text-right text-[10px] text-slate-400 mt-1">12:02</div>
                      </div>
                      <div class="space-y-1.5">
                        <div v-for="opt in demoOptions" :key="opt"
                          class="px-4 py-2 rounded-xl text-xs font-semibold text-center
                                 bg-white dark:bg-slate-700
                                 border border-emerald-300 dark:border-emerald-700
                                 text-emerald-700 dark:text-emerald-300 shadow-sm">
                          {{ opt }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Footer -->
                <div class="bg-white dark:bg-slate-800 px-4 py-2.5 flex items-center gap-2 border-t border-slate-100 dark:border-slate-700">
                  <div class="flex-1 bg-slate-100 dark:bg-slate-700 rounded-full px-4 py-2 text-xs text-slate-400">
                    {{ t('vision.demo.note') }}
                  </div>
                </div>
              </div>

              <!-- Floating chips -->
              <div class="absolute -top-3 -right-3 bg-white dark:bg-dark-900 rounded-xl px-3 py-2
                          shadow-lg border border-emerald-100 dark:border-emerald-900 float text-xs font-bold text-emerald-600 dark:text-emerald-400">
                ✓ 24/7
              </div>
              <div class="absolute -bottom-3 -left-3 bg-white dark:bg-dark-900 rounded-xl px-3 py-2
                          shadow-lg border border-emerald-100 dark:border-emerald-900 float-slow text-xs font-bold text-emerald-600 dark:text-emerald-400">
                ⚡ &lt; 1s
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ PROBLEM / SOLUTION ═══════════════════════════════════ -->
    <section id="demo" class="py-24 sm:py-32 bg-white dark:bg-dark-900">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="grid md:grid-cols-2 gap-8">

          <!-- Problem -->
          <div class="gradient-card p-8 reveal">
            <div class="w-12 h-12 rounded-2xl bg-red-50 dark:bg-red-500/10 flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
              </svg>
            </div>
            <span class="inline-block text-xs font-bold uppercase tracking-widest text-red-500 mb-3">
              {{ t('vision.problem.title') }}
            </span>
            <h2 class="text-2xl font-display font-bold text-slate-900 dark:text-white mb-2">
              {{ t('vision.problem.subtitle') }}
            </h2>
            <p class="text-slate-500 dark:text-slate-400 text-sm mb-8">{{ t('vision.problem.subtitle') }}</p>
            <ul class="space-y-4">
              <li v-for="(item, idx) in problemItems" :key="idx" class="flex items-start gap-3">
                <span class="w-6 h-6 rounded-full bg-red-100 dark:bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg class="w-3.5 h-3.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                    <path d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </span>
                <span class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{{ item }}</span>
              </li>
            </ul>
          </div>

          <!-- Solution -->
          <div class="gradient-card p-8 reveal reveal-delay-1" style="border-color: rgba(16, 185, 129, 0.2);">
            <div class="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <span class="inline-block text-xs font-bold uppercase tracking-widest text-emerald-500 mb-3">
              {{ t('vision.solution.title') }}
            </span>
            <h2 class="text-2xl font-display font-bold text-slate-900 dark:text-white mb-2">
              {{ t('vision.solution.subtitle') }}
            </h2>
            <p class="text-slate-500 dark:text-slate-400 text-sm mb-8">{{ t('vision.solution.subtitle') }}</p>
            <ul class="space-y-4">
              <li v-for="(item, idx) in solutionItems" :key="idx" class="flex items-start gap-3">
                <span class="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg class="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </span>
                <span class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ CHAT DEMO FULL ══════════════════════════════════════ -->
    <section class="py-24 sm:py-32 bg-slate-50 dark:bg-dark-950">
      <div class="max-w-5xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-16 reveal">
          <span class="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest
                       bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-5">
            Demo
          </span>
          <h2 class="section-title mb-4">{{ t('vision.demo.title') }}</h2>
        </div>

        <div class="grid lg:grid-cols-2 gap-12 items-start">
          <!-- Full chat mockup -->
          <div class="gradient-card overflow-hidden reveal" style="border-color: rgba(16, 185, 129, 0.15);">
            <div class="px-5 py-4 bg-emerald-600 flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
              </div>
              <div>
                <div class="text-white font-bold">{{ t('vision.demo.business') }}</div>
                <div class="text-emerald-200 text-xs flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
                  {{ t('vision.demo.status') }}
                </div>
              </div>
            </div>
            <div class="p-5 space-y-3 bg-slate-50 dark:bg-slate-900/50 min-h-[360px]">
              <div class="flex justify-end">
                <div class="bg-emerald-100 dark:bg-emerald-900/40 text-slate-800 dark:text-emerald-100
                            px-4 py-3 rounded-2xl rounded-tr-sm max-w-[80%] text-sm shadow-sm">
                  {{ t('vision.demo.msg1') }}
                </div>
              </div>
              <div class="flex justify-start">
                <div class="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300
                            px-4 py-3 rounded-2xl rounded-tl-sm max-w-[85%] text-sm shadow-sm
                            border border-slate-100 dark:border-slate-700">
                  {{ t('vision.demo.msg2') }}
                </div>
              </div>
              <div class="flex justify-end">
                <div class="bg-emerald-100 dark:bg-emerald-900/40 text-slate-800 dark:text-emerald-100
                            px-4 py-3 rounded-2xl rounded-tr-sm max-w-[80%] text-sm shadow-sm">
                  {{ t('vision.demo.msg3') }}
                </div>
              </div>
              <div class="flex justify-start">
                <div class="max-w-[88%]">
                  <div class="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300
                              px-4 py-3 rounded-2xl rounded-tl-sm text-sm shadow-sm
                              border border-slate-100 dark:border-slate-700 mb-2">
                    {{ t('vision.demo.msg4') }}
                  </div>
                  <div class="space-y-1.5">
                    <div v-for="opt in demoOptions" :key="opt"
                      class="px-4 py-2.5 rounded-xl text-xs font-semibold text-center
                             border border-emerald-200 dark:border-emerald-800
                             text-emerald-700 dark:text-emerald-400
                             bg-white dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-900/20
                             cursor-pointer transition-colors shadow-sm">
                      {{ opt }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-5 py-3 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 text-center">
              <span class="text-xs text-slate-400">🔒 {{ t('vision.demo.note') }}</span>
            </div>
          </div>

          <!-- Features -->
          <div class="space-y-5 reveal reveal-delay-1">
            <div v-for="(feature, idx) in demoFeatures" :key="idx"
              class="gradient-card card-hover p-5 flex items-start gap-4">
              <span class="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center shrink-0">
                <svg class="w-4 h-4 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </span>
              <span class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{{ feature }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ USE CASES ════════════════════════════════════════════ -->
    <section class="py-24 sm:py-32 bg-white dark:bg-dark-900">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-16 reveal">
          <span class="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest
                       bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-5">
            {{ t('vision.usecases.title') }}
          </span>
          <h2 class="section-title mb-4">{{ t('vision.usecases.subtitle') }}</h2>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div v-for="(uc, idx) in useCases" :key="idx"
            class="gradient-card card-hover p-6 reveal"
            :class="`reveal-delay-${idx + 1}`">
            <div class="text-3xl mb-4">{{ uc.emoji }}</div>
            <h3 class="font-display font-bold text-slate-900 dark:text-white mb-2">{{ uc.title }}</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{{ uc.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ PROCESS ══════════════════════════════════════════════ -->
    <section class="py-24 sm:py-32 bg-slate-50 dark:bg-dark-950">
      <div class="max-w-5xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-16 reveal">
          <span class="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest
                       bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-5">
            Proceso
          </span>
          <h2 class="section-title">{{ t('vision.how.title') }}</h2>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(step, idx) in processSteps" :key="idx"
            class="text-center reveal" :class="`reveal-delay-${idx + 1}`">
            <!-- Number -->
            <div class="relative inline-flex mb-6">
              <div class="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-500/10
                          flex items-center justify-center text-emerald-700 dark:text-emerald-400 font-display font-bold text-xl">
                {{ idx + 1 }}
              </div>
              <!-- Connector line -->
              <div v-if="idx < 3"
                class="hidden lg:block absolute top-1/2 left-full w-full h-px -translate-y-1/2
                       bg-gradient-to-r from-emerald-200 to-transparent dark:from-emerald-800"></div>
            </div>
            <h3 class="font-display font-bold text-slate-900 dark:text-white mb-2">{{ step.title }}</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ CTA ══════════════════════════════════════════════════ -->
    <section class="py-24 sm:py-32 relative overflow-hidden bg-emerald-600">
      <div class="absolute inset-0">
        <div class="absolute top-0 right-0 w-96 h-96 bg-emerald-500/50 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-80 h-80 bg-teal-600/40 rounded-full blur-3xl"></div>
      </div>
      <div class="relative max-w-3xl mx-auto px-4 sm:px-6 text-center reveal">
        <h2 class="text-4xl sm:text-5xl font-display font-bold text-white leading-tight mb-6">
          {{ t('vision.cta.title') }}
        </h2>
        <p class="text-emerald-100 text-lg mb-12 max-w-xl mx-auto">{{ t('vision.cta.subtitle') }}</p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="mailto:info@withjp.ai"
            class="w-full sm:w-auto px-10 py-4 rounded-2xl font-semibold
                   bg-white text-emerald-700 hover:bg-emerald-50
                   shadow-2xl shadow-emerald-900/20 transition-all duration-300 text-center">
            {{ t('vision.cta.button') }}
          </a>
          <a href="https://www.linkedin.com/in/desertbarret/" target="_blank" rel="noopener"
            class="w-full sm:w-auto px-10 py-4 rounded-2xl font-semibold
                   text-white border-2 border-white/30 hover:bg-white/10
                   transition-all duration-300 text-center">
            {{ t('vision.cta.button_secondary') }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useHead } from '@unhead/vue';
import { useReveal } from '@/composables/useReveal';

const { t } = useI18n();
useReveal();

useHead({
  title: () => t('vision.meta.title'),
  meta: [
    { name: 'description', content: () => t('vision.meta.description') },
    { name: 'keywords', content: 'WhatsApp Business API, automatización WhatsApp, Juan Pablo Guaman, Juan Pablo Guaman Rodriguez, Juan Pablo Guamán, Juan Pablo Guamán Rodríguez, withjp.ai, chatbot, Meta API, Ecuador' },
    { name: 'author', content: 'Juan Pablo Guamán Rodríguez' },
    { property: 'og:title', content: () => t('vision.meta.title') },
    { property: 'og:description', content: () => t('vision.meta.description') },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://withjp.ai/whatsapp' },
    { property: 'og:image', content: 'https://withjp.ai/og-image.jpg' },
    { property: 'og:site_name', content: 'withjp.ai' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@jp_desertbarret' },
    { name: 'twitter:title', content: () => t('vision.meta.title') },
    { name: 'twitter:description', content: () => t('vision.meta.description') },
    { name: 'twitter:image', content: 'https://withjp.ai/og-image.jpg' },
  ],
});

const heroMetrics = computed(() => [
  { value: t('vision.metrics.m1_value'), label: t('vision.metrics.m1_label') },
  { value: t('vision.metrics.m2_value'), label: t('vision.metrics.m2_label') },
  { value: t('vision.metrics.m3_value'), label: t('vision.metrics.m3_label') },
]);

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

const useCases = computed(() => [
  { emoji: '🛍️', title: t('vision.usecases.uc1.title'), desc: t('vision.usecases.uc1.desc') },
  { emoji: '🏥', title: t('vision.usecases.uc2.title'), desc: t('vision.usecases.uc2.desc') },
  { emoji: '💼', title: t('vision.usecases.uc3.title'), desc: t('vision.usecases.uc3.desc') },
  { emoji: '🎓', title: t('vision.usecases.uc4.title'), desc: t('vision.usecases.uc4.desc') },
]);

const processSteps = computed(() => [
  { title: t('vision.how.s1.title'), description: t('vision.how.s1.desc') },
  { title: t('vision.how.s2.title'), description: t('vision.how.s2.desc') },
  { title: t('vision.how.s3.title'), description: t('vision.how.s3.desc') },
  { title: t('vision.how.s4.title'), description: t('vision.how.s4.desc') },
]);
</script>
