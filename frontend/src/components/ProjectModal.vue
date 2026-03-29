<template>
  <Teleport to="body">
    <Transition name="backdrop">
      <div v-if="project" class="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6">
        <div class="absolute inset-0 bg-black/60 dark:bg-black/75 backdrop-blur-md" @click="$emit('close')" />

        <Transition name="modal-slide">
          <div v-if="project"
            class="relative z-10 w-full sm:max-w-2xl max-h-[92vh] sm:max-h-[85vh] overflow-y-auto
                   bg-white dark:bg-[#0d1322]
                   rounded-t-3xl sm:rounded-3xl
                   border border-slate-200/80 dark:border-white/[0.07]
                   shadow-2xl shadow-black/40">

            <!-- Mobile drag handle -->
            <div class="flex justify-center pt-3 pb-1 sm:hidden">
              <div class="w-10 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
            </div>

            <!-- Banner -->
            <div class="relative h-52 sm:h-60 overflow-hidden
                        bg-gradient-to-br from-indigo-700 via-violet-800 to-[#0d0a2e]
                        sm:rounded-t-3xl">
              <div class="absolute inset-0 opacity-15"
                style="background-image: linear-gradient(rgba(255,255,255,.12) 1px,transparent 1px),
                       linear-gradient(90deg,rgba(255,255,255,.12) 1px,transparent 1px);
                       background-size: 28px 28px" />
              <div class="absolute -top-10 -right-10 w-52 h-52 rounded-full bg-violet-500/25 blur-3xl" />
              <div class="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-cyan-500/20 blur-3xl" />

              <div class="absolute inset-0 flex items-center justify-center">
                <span class="text-9xl opacity-15 select-none">{{ categoryIcon }}</span>
              </div>

              <div class="absolute top-4 left-4 flex gap-2">
                <span class="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide
                             bg-black/40 backdrop-blur-sm text-white/90 border border-white/15">
                  {{ project.category || 'curso' }}
                </span>
                <span v-if="project.featured"
                  class="px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/90 text-amber-900">
                  ⭐ Destacado
                </span>
              </div>

              <button @click="$emit('close')"
                class="absolute top-4 right-4 w-9 h-9 rounded-full
                       bg-black/30 backdrop-blur-sm border border-white/15
                       flex items-center justify-center text-white/80
                       hover:bg-black/50 hover:text-white transition-colors text-sm">
                ✕
              </button>
            </div>

            <!-- Content -->
            <div class="px-6 sm:px-8 py-6">
              <h2 class="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white leading-snug mb-3">
                {{ tr.title }}
              </h2>

              <p class="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                {{ tr.description }}
              </p>

              <!-- Technologies -->
              <div v-if="project.technologies?.length" class="mb-6">
                <h4 class="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
                  {{ locale === 'es' ? 'Tecnologías' : 'Technologies' }}
                </h4>
                <div class="flex flex-wrap gap-2">
                  <span v-for="tech in project.technologies" :key="tech"
                    class="px-3 py-1.5 rounded-xl text-sm font-medium
                           bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300
                           border border-primary-100 dark:border-primary-800/30">
                    {{ tech }}
                  </span>
                </div>
              </div>

              <!-- What you'll learn -->
              <div class="mb-8">
                <h4 class="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
                  {{ locale === 'es' ? 'Lo que aprenderás' : "What you'll learn" }}
                </h4>
                <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <li v-for="item in learnings" :key="item"
                    class="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                    <span class="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full
                                 bg-emerald-100 dark:bg-emerald-900/30
                                 text-emerald-600 dark:text-emerald-400
                                 flex items-center justify-center text-xs font-bold">✓</span>
                    {{ item }}
                  </li>
                </ul>
              </div>

              <!-- CTAs -->
              <div class="flex flex-col sm:flex-row gap-3">
                <a v-if="project.demo_url" :href="project.demo_url"
                   target="_blank" rel="noopener noreferrer"
                   class="btn-primary flex-1 justify-center py-3.5 text-base"
                   @click="$emit('close')">
                  🎓 {{ locale === 'es' ? 'Ver en Udemy' : 'View on Udemy' }}
                  <span class="text-xs opacity-70">↗</span>
                </a>
                <button @click="$emit('close')"
                  class="btn-secondary px-6 py-3.5 sm:w-auto w-full justify-center">
                  {{ locale === 'es' ? 'Cerrar' : 'Close' }}
                </button>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useTranslation } from '@/composables/useTranslation';

const props = defineProps<{ project: any | null }>();
defineEmits<{ close: [] }>();

const { locale } = useI18n();
const { t: tr } = useTranslation(computed(() => props.project));

const categoryIcon = computed(() => ({
  web: '🌐', automation: '🤖', ai: '🧠', mobile: '📱',
}[props.project?.category] || '🚀'));

const learnings = computed(() => {
  if (!props.project) return [];
  const techs = props.project.technologies || [];
  return locale.value === 'es'
    ? [
        `Dominar ${techs.slice(0, 2).join(' y ')}`,
        'Construir proyectos reales desde cero',
        'Arquitectura profesional y escalable',
        'Desplegar en producción',
        props.project.category === 'mobile' ? 'Publicar en Google Play / App Store' : 'APIs REST y seguridad',
        techs.length > 3 ? `Integrar ${techs[3]}` : 'Testing y buenas prácticas',
      ]
    : [
        `Master ${techs.slice(0, 2).join(' and ')}`,
        'Build real projects from scratch',
        'Professional and scalable architecture',
        'Deploy to production',
        props.project.category === 'mobile' ? 'Publish to Google Play / App Store' : 'REST APIs and security',
        techs.length > 3 ? `Integrate ${techs[3]}` : 'Testing and best practices',
      ];
});
</script>

<style scoped>
.backdrop-enter-active, .backdrop-leave-active { transition: opacity 0.3s ease; }
.backdrop-enter-from, .backdrop-leave-to       { opacity: 0; }

.modal-slide-enter-active { transition: all 0.42s cubic-bezier(0.34, 1.3, 0.64, 1); }
.modal-slide-leave-active { transition: all 0.22s cubic-bezier(0.4, 0, 1, 1); }
.modal-slide-enter-from   { opacity: 0; transform: translateY(48px) scale(0.97); }
.modal-slide-leave-to     { opacity: 0; transform: translateY(24px) scale(0.98); }

@media (max-width: 640px) {
  .modal-slide-enter-from,
  .modal-slide-leave-to   { transform: translateY(100%); }
}
</style>
