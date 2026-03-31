<template>
  <Teleport to="body">
    <Transition name="backdrop">
      <div v-if="course" class="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6">
        <div class="absolute inset-0 bg-black/70 backdrop-blur-lg" @click="$emit('close')" />

        <Transition name="modal">
          <div v-if="course"
            class="relative z-10 w-full sm:max-w-2xl max-h-[94vh] sm:max-h-[88vh] overflow-hidden
                   bg-white dark:bg-[#0c1020]
                   rounded-t-[28px] sm:rounded-[28px]
                   border border-white/[0.08]
                   shadow-2xl shadow-black/60 flex flex-col">

            <!-- Mobile drag handle -->
            <div class="flex justify-center pt-3 pb-0 sm:hidden flex-shrink-0">
              <div class="w-10 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
            </div>

            <!-- ===== BANNER ===== -->
            <div class="relative flex-shrink-0 h-56 sm:h-64 overflow-hidden"
                 :style="`background: linear-gradient(145deg, ${c.bg1}, ${c.bg2})`">

              <!-- Grid texture (always) -->
              <div class="absolute inset-0 opacity-10"
                style="background-image: linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
                       linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px);
                       background-size: 28px 28px" />

              <!-- Ambient orbs (below image) -->
              <div class="absolute -top-12 -right-12 w-52 h-52 rounded-full blur-3xl opacity-50 pointer-events-none"
                   :style="`background: ${c.glow}`" />
              <div class="absolute -bottom-16 -left-8 w-56 h-56 rounded-full blur-3xl opacity-30 pointer-events-none"
                   :style="`background: ${c.glow2}`" />

              <!-- Course image -->
              <img v-if="course.image_url"
                :src="course.image_url"
                :alt="tr.title"
                class="absolute inset-0 w-full h-full object-cover transition-all duration-700"
                :class="imgLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'"
                @load="imgLoaded = true"
              />

              <!-- Gradient overlays on image -->
              <template v-if="course.image_url">
                <div class="absolute inset-0"
                  style="background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, transparent 35%, rgba(0,0,0,0.65) 100%)" />
                <div class="absolute inset-0 opacity-50"
                  :style="`background: linear-gradient(145deg, ${c.bg1}cc, transparent 55%)`" />
              </template>

              <!-- Emoji fallback -->
              <div v-if="!course.image_url" class="absolute inset-0 flex items-center justify-center">
                <span class="text-[120px] opacity-10 select-none">{{ categoryIcon }}</span>
              </div>

              <!-- Shimmer while image loads -->
              <div v-if="course.image_url && !imgLoaded"
                class="absolute inset-0 animate-pulse"
                :style="`background: linear-gradient(145deg, ${c.bg1}, ${c.bg2})`" />

              <!-- Top accent line -->
              <div class="absolute top-0 left-0 right-0 h-px"
                   :style="`background: linear-gradient(90deg, transparent, ${c.mid}88, transparent)`" />

              <!-- Badges -->
              <div class="absolute top-4 left-4 flex gap-2">
                <span class="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider
                             bg-black/40 backdrop-blur-md text-white/90 border border-white/15">
                  {{ course.category || 'curso' }}
                </span>
                <span v-if="course.featured"
                  class="px-3 py-1 rounded-full text-[11px] font-bold bg-amber-400/95 text-amber-900 border border-amber-300/30 shadow-lg">
                  ★ Destacado
                </span>
              </div>

              <!-- Close button -->
              <button @click="$emit('close')"
                class="absolute top-4 right-4 w-9 h-9 rounded-full
                       bg-black/35 backdrop-blur-md border border-white/15
                       flex items-center justify-center text-white/80
                       hover:bg-black/55 hover:text-white hover:scale-110
                       active:scale-95 transition-all duration-200 text-sm font-bold">
                ✕
              </button>
            </div>

            <!-- ===== SCROLLABLE CONTENT ===== -->
            <div class="overflow-y-auto flex-1">
              <div class="px-6 sm:px-8 py-6">

                <!-- Title with accent bar -->
                <div class="mb-5">
                  <div class="w-10 h-[3px] rounded-full mb-3"
                       :style="`background: linear-gradient(90deg, ${c.from}, ${c.to})`" />
                  <h2 class="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white leading-snug">
                    {{ tr.title }}
                  </h2>
                </div>

                <p class="text-slate-500 dark:text-slate-400 text-sm sm:text-[15px] leading-relaxed mb-6">
                  {{ tr.description }}
                </p>

                <!-- Technologies -->
                <div v-if="course.technologies?.length" class="mb-6">
                  <h4 class="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500 mb-3">
                    {{ locale === 'es' ? 'Tecnologías' : 'Technologies' }}
                  </h4>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="tech in course.technologies" :key="tech"
                      class="px-3 py-1.5 rounded-xl text-[12px] font-semibold border"
                      :style="`background:${c.tagBg}; color:${c.mid}; border-color:${c.tagBorder}`">
                      {{ tech }}
                    </span>
                  </div>
                </div>

                <!-- What you'll learn -->
                <div class="mb-8">
                  <h4 class="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500 mb-3">
                    {{ locale === 'es' ? 'Lo que aprenderás' : "What you'll learn" }}
                  </h4>
                  <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <li v-for="item in learnings" :key="item"
                      class="flex items-start gap-2.5 text-[13px] text-slate-600 dark:text-slate-300">
                      <span class="flex-shrink-0 mt-0.5 w-[18px] h-[18px] rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                            :style="`background: linear-gradient(135deg, ${c.from}, ${c.to})`">✓</span>
                      {{ item }}
                    </li>
                  </ul>
                </div>

                <!-- CTAs -->
                <div class="flex flex-col sm:flex-row gap-3">
                  <a v-if="course.demo_url" :href="course.demo_url"
                     target="_blank" rel="noopener noreferrer"
                     class="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl
                            text-[13px] font-bold text-white
                            hover:scale-[1.02] hover:brightness-110 active:scale-[0.98]
                            transition-all duration-200"
                     :style="`background: linear-gradient(135deg, ${c.from}, ${c.to});
                              box-shadow: 0 8px 24px -6px ${c.glow}`"
                     @click="$emit('close')">
                    🎓 {{ locale === 'es' ? 'Ver en Udemy' : 'View on Udemy' }}
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                         stroke-linecap="round" stroke-linejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                  <button @click="$emit('close')"
                    class="sm:w-auto w-full px-6 py-3.5 rounded-2xl text-[13px] font-semibold
                           border border-slate-200 dark:border-white/10
                           text-slate-600 dark:text-slate-300
                           bg-white dark:bg-white/[0.04]
                           hover:bg-slate-50 dark:hover:bg-white/[0.07]
                           hover:border-slate-300 dark:hover:border-white/20
                           transition-all duration-200">
                    {{ locale === 'es' ? 'Cerrar' : 'Close' }}
                  </button>
                </div>

              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useTranslation } from '@/composables/useTranslation';

const props = defineProps<{ course: any | null }>();
defineEmits<{ close: [] }>();

const { locale } = useI18n();
const { t: tr } = useTranslation(computed(() => props.course));
const imgLoaded = ref(false);

watch(() => props.course, () => { imgLoaded.value = false; });

const categoryIcon = computed(() => ({
  web: '🌐', automation: '🤖', ai: '🧠', mobile: '📱',
} as Record<string, string>)[props.course?.category] || '🚀');

const PALETTES: Record<string, any> = {
  ai: {
    from: '#7c3aed', mid: '#a78bfa', to: '#4f46e5',
    bg1: '#12083a', bg2: '#1a0d50',
    glow: 'rgba(139,92,246,0.6)', glow2: 'rgba(79,70,229,0.4)',
    tagBg: 'rgba(139,92,246,0.08)', tagBorder: 'rgba(167,139,250,0.25)',
  },
  web: {
    from: '#0284c7', mid: '#38bdf8', to: '#0891b2',
    bg1: '#041828', bg2: '#062540',
    glow: 'rgba(56,189,248,0.6)', glow2: 'rgba(8,145,178,0.4)',
    tagBg: 'rgba(56,189,248,0.08)', tagBorder: 'rgba(125,211,252,0.25)',
  },
  mobile: {
    from: '#059669', mid: '#34d399', to: '#0d9488',
    bg1: '#041a12', bg2: '#062a1c',
    glow: 'rgba(52,211,153,0.6)', glow2: 'rgba(13,148,136,0.4)',
    tagBg: 'rgba(52,211,153,0.08)', tagBorder: 'rgba(110,231,183,0.25)',
  },
  automation: {
    from: '#d97706', mid: '#fb923c', to: '#dc2626',
    bg1: '#200d00', bg2: '#311200',
    glow: 'rgba(251,146,60,0.6)', glow2: 'rgba(220,38,38,0.4)',
    tagBg: 'rgba(251,146,60,0.08)', tagBorder: 'rgba(253,186,116,0.25)',
  },
};
const DEFAULT_PALETTE = {
  from: '#6366f1', mid: '#818cf8', to: '#4f46e5',
  bg1: '#0d0a2e', bg2: '#120d3a',
  glow: 'rgba(99,102,241,0.6)', glow2: 'rgba(79,70,229,0.4)',
  tagBg: 'rgba(99,102,241,0.08)', tagBorder: 'rgba(129,140,248,0.25)',
};

const c = computed(() => PALETTES[props.course?.category] ?? DEFAULT_PALETTE);

const learnings = computed(() => {
  if (!props.course) return [];
  const techs = props.course.technologies || [];
  return locale.value === 'es'
    ? [
        `Dominar ${techs.slice(0, 2).join(' y ')}`,
        'Construir proyectos reales desde cero',
        'Arquitectura profesional y escalable',
        'Desplegar en producción',
        props.course.category === 'mobile' ? 'Publicar en Google Play / App Store' : 'APIs REST y seguridad',
        techs.length > 3 ? `Integrar ${techs[3]}` : 'Testing y buenas prácticas',
      ]
    : [
        `Master ${techs.slice(0, 2).join(' and ')}`,
        'Build real courses from scratch',
        'Professional and scalable architecture',
        'Deploy to production',
        props.course.category === 'mobile' ? 'Publish to Google Play / App Store' : 'REST APIs and security',
        techs.length > 3 ? `Integrate ${techs[3]}` : 'Testing and best practices',
      ];
});
</script>

<style scoped>
.backdrop-enter-active, .backdrop-leave-active { transition: opacity 0.3s ease; }
.backdrop-enter-from, .backdrop-leave-to       { opacity: 0; }

.modal-enter-active { transition: all 0.45s cubic-bezier(0.34, 1.4, 0.64, 1); }
.modal-leave-active { transition: all 0.22s cubic-bezier(0.4, 0, 1, 1); }
.modal-enter-from   { opacity: 0; transform: translateY(48px) scale(0.96); }
.modal-leave-to     { opacity: 0; transform: translateY(24px) scale(0.98); }

@media (max-width: 640px) {
  .modal-enter-from,
  .modal-leave-to { transform: translateY(100%); }
}
</style>
