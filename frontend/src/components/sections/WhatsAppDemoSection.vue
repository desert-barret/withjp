<template>
  <section id="demo" ref="sectionEl" class="py-16 md:py-24 bg-white dark:bg-[#080B14]">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">

      <!-- Header -->
      <div class="text-center mb-12 md:mb-16 reveal" :class="{ visible: visible }">
        <span class="tag text-xs mb-4 inline-flex">{{ t('demo.tag') }}</span>
        <h2 class="section-title mb-4">{{ t('demo.title') }}</h2>
        <p class="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto">
          {{ t('demo.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        <!-- WhatsApp phone mockup -->
        <div class="flex justify-center reveal reveal-delay-1" :class="{ visible: visible }">
          <div class="relative w-72 sm:w-80">

            <!-- Phone shell -->
            <div class="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-900/20 dark:shadow-black/50
                        border-4 border-slate-800 dark:border-slate-700 bg-slate-800">

              <!-- Status bar -->
              <div class="bg-[#128C7E] flex items-center justify-between px-5 pt-3 pb-2">
                <div class="flex items-center gap-2">
                  <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <span class="text-white font-bold text-xs">{{ businessInitial }}</span>
                  </div>
                  <div>
                    <p class="text-white font-semibold text-sm leading-tight">{{ businessName }}</p>
                    <p class="text-green-200 text-[10px] flex items-center gap-1">
                      <span class="w-1.5 h-1.5 rounded-full bg-green-300 inline-block" />
                      {{ locale === 'es' ? 'Sistema activo' : 'System active' }}
                    </p>
                  </div>
                </div>
                <div class="flex items-center gap-3">
                  <svg class="w-4 h-4 text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.29 6.29l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  <svg class="w-4 h-4 text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
                </div>
              </div>

              <!-- Chat area -->
              <div class="bg-[#ECE5DD] dark:bg-[#0d1117] min-h-[400px] px-3 py-3 space-y-2 relative"
                   style="background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23b2dfdb\' fill-opacity=\'0.15\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')">

                <!-- Date chip -->
                <div class="flex justify-center mb-2">
                  <span class="text-[10px] bg-white/70 dark:bg-white/10 text-slate-500 dark:text-slate-400 px-3 py-0.5 rounded-full">
                    {{ locale === 'es' ? 'Hoy' : 'Today' }}
                  </span>
                </div>

                <!-- Message: client 1 -->
                <div class="flex justify-end animate-msg" style="animation-delay: 0.3s">
                  <div class="max-w-[80%] bg-[#DCF8C6] dark:bg-[#1a3a2a] rounded-2xl rounded-tr-sm px-3 py-2 shadow-sm">
                    <p class="text-slate-800 dark:text-slate-200 text-xs leading-relaxed">{{ t('demo.conversation.msg1_client') }}</p>
                    <p class="text-right text-[9px] text-slate-400 mt-0.5">{{ currentTime }} ✓✓</p>
                  </div>
                </div>

                <!-- Message: bot 1 -->
                <div class="flex justify-start animate-msg" style="animation-delay: 0.8s">
                  <div class="max-w-[85%] bg-white dark:bg-[#1c2230] rounded-2xl rounded-tl-sm px-3 py-2 shadow-sm">
                    <p class="text-[9px] text-[#128C7E] dark:text-emerald-400 font-semibold mb-1">{{ businessName }}</p>
                    <p class="text-slate-800 dark:text-slate-200 text-xs leading-relaxed whitespace-pre-line">{{ msg2 }}</p>
                    <p class="text-[9px] text-slate-400 mt-0.5">{{ addMinutes(0) }}</p>
                  </div>
                </div>

                <!-- Message: client 2 -->
                <div class="flex justify-end animate-msg" style="animation-delay: 1.3s">
                  <div class="max-w-[80%] bg-[#DCF8C6] dark:bg-[#1a3a2a] rounded-2xl rounded-tr-sm px-3 py-2 shadow-sm">
                    <p class="text-slate-800 dark:text-slate-200 text-xs leading-relaxed">{{ t('demo.conversation.msg3_client') }}</p>
                    <p class="text-right text-[9px] text-slate-400 mt-0.5">{{ addMinutes(1) }} ✓✓</p>
                  </div>
                </div>

                <!-- Message: bot 2 with options -->
                <div class="flex justify-start animate-msg" style="animation-delay: 1.8s">
                  <div class="max-w-[90%]">
                    <div class="bg-white dark:bg-[#1c2230] rounded-2xl rounded-tl-sm px-3 py-2 shadow-sm mb-1">
                      <p class="text-[9px] text-[#128C7E] dark:text-emerald-400 font-semibold mb-1">{{ businessName }}</p>
                      <p class="text-slate-800 dark:text-slate-200 text-xs leading-relaxed whitespace-pre-line">{{ msg4 }}</p>
                      <p class="text-[9px] text-slate-400 mt-0.5">{{ addMinutes(1) }}</p>
                    </div>
                    <!-- Option buttons -->
                    <div class="space-y-1">
                      <button v-for="opt in options" :key="opt"
                        class="w-full text-left px-3 py-1.5 rounded-xl
                               bg-white dark:bg-[#1c2230] border border-slate-200 dark:border-white/10
                               text-[#128C7E] dark:text-emerald-400 text-[10px] font-semibold
                               hover:bg-emerald-50 dark:hover:bg-emerald-900/20
                               transition-colors cursor-default shadow-sm">
                        {{ opt }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Input bar -->
              <div class="bg-[#F0F0F0] dark:bg-[#1a1f2e] flex items-center gap-2 px-3 py-2">
                <div class="flex-1 bg-white dark:bg-[#2a2f3e] rounded-full px-4 py-1.5 flex items-center">
                  <span class="text-slate-400 dark:text-slate-500 text-xs">{{ locale === 'es' ? 'Escribe un mensaje...' : 'Type a message...' }}</span>
                </div>
                <div class="w-8 h-8 rounded-full bg-[#128C7E] flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                </div>
              </div>
            </div>

            <!-- Floating note -->
            <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 w-max max-w-[260px]
                        px-3 py-1.5 rounded-full
                        bg-slate-900/80 dark:bg-white/10
                        text-white dark:text-slate-300 text-[10px] text-center backdrop-blur-sm">
              {{ t('demo.conversation.note') }}
            </div>
          </div>
        </div>

        <!-- Features list -->
        <div class="space-y-5 reveal reveal-delay-2" :class="{ visible: visible }">
          <div v-for="(feature, i) in features" :key="i"
            class="flex items-start gap-4 p-5 rounded-2xl
                   bg-slate-50 dark:bg-white/[0.03]
                   border border-slate-200 dark:border-white/[0.08]
                   hover:-translate-y-0.5 transition-transform duration-200">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                 :class="feature.bgClass">
              <span :class="feature.iconColor" v-html="feature.icon" />
            </div>
            <div>
              <p class="font-display font-semibold text-slate-900 dark:text-white text-sm mb-1">
                {{ feature.title }}
              </p>
              <p class="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
                {{ feature.description }}
              </p>
            </div>
          </div>

          <!-- CTA -->
          <div class="pt-2">
            <a href="#contact"
               class="btn-primary btn-glow inline-flex items-center gap-2 px-7 py-3.5">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              {{ locale === 'es' ? 'Quiero algo así para mi empresa' : 'I want this for my business' }}
            </a>
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

const { t, locale } = useI18n();
const { el: sectionEl, visible } = useReveal(0.1);

const businessName = computed(() => locale.value === 'es' ? 'Soporte TuEmpresa' : 'YourCompany Support');
const businessInitial = computed(() => 'S');

const now = new Date();
const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
function addMinutes(m: number) {
  const d = new Date(now.getTime() + m * 60000);
  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
}

const msg2 = computed(() => t('demo.conversation.msg2_bot').replace(/\\n/g, '\n'));
const msg4 = computed(() => t('demo.conversation.msg4_bot').replace(/\\n/g, '\n'));

const options = computed(() => [
  t('demo.conversation.opt1'),
  t('demo.conversation.opt2'),
  t('demo.conversation.opt3'),
]);

const ICON_24  = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`;
const ICON_FLOW= `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;
const ICON_ESC = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`;
const ICON_LOG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`;

const features = computed(() => [
  { title: t('demo.features.f1'), description: locale.value === 'es' ? 'Sin horarios, sin fines de semana. El sistema responde en segundos.' : 'No schedules, no weekends. The system responds in seconds.', icon: ICON_24,  bgClass: 'bg-emerald-100 dark:bg-emerald-900/20', iconColor: 'text-emerald-600 dark:text-emerald-400' },
  { title: t('demo.features.f2'), description: locale.value === 'es' ? 'Cada respuesta sigue un camino definido. Sin respuestas improvisadas ni fuera de contexto.' : 'Every response follows a defined path. No improvised or out-of-context replies.', icon: ICON_FLOW, bgClass: 'bg-indigo-100 dark:bg-indigo-900/20', iconColor: 'text-indigo-600 dark:text-indigo-400' },
  { title: t('demo.features.f3'), description: locale.value === 'es' ? 'Cuando el bot no puede resolver, transfiere la conversación al agente correcto.' : "When the bot can't resolve, it transfers the conversation to the right agent.", icon: ICON_ESC, bgClass: 'bg-amber-100 dark:bg-amber-900/20', iconColor: 'text-amber-600 dark:text-amber-400' },
  { title: t('demo.features.f4'), description: locale.value === 'es' ? 'Cada conversación queda registrada para auditoría y mejora continua de los flujos.' : 'Every conversation is logged for auditing and continuous flow improvement.', icon: ICON_LOG, bgClass: 'bg-violet-100 dark:bg-violet-900/20', iconColor: 'text-violet-600 dark:text-violet-400' },
]);
</script>

<style scoped>
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
}
.animate-msg {
  opacity: 0;
  animation: fadeInUp 0.4s ease forwards;
}
</style>
