<template>
  <section class="hero-section relative min-h-screen flex items-center overflow-hidden">

    <!-- Background -->
    <div class="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
      <div class="mesh-blob mesh-blob-1" />
      <div class="mesh-blob mesh-blob-2" />
      <div class="mesh-blob mesh-blob-3" />
      <div class="absolute inset-0 dot-grid" style="opacity: 0.55;" />
      <div class="absolute inset-0 dark:hidden"
           style="background: radial-gradient(ellipse 100% 80% at 50% 0%, rgba(255,255,255,0) 30%, #f8f9ff 100%)" />
      <div class="absolute inset-0 hidden dark:block"
        style="background: radial-gradient(ellipse 80% 60% at 50% 0%, transparent 40%, #080B14 100%)" />
    </div>

    <!-- Content -->
    <div class="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-16 sm:pt-28 sm:pb-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        <!-- Left: text -->
        <div>
          <!-- Mobile profile card -->
          <div class="lg:hidden hero-enter-1 flex items-center gap-4 mb-8
                      px-4 py-3.5 rounded-2xl
                      bg-gradient-to-r from-emerald-50 to-teal-50
                      dark:from-emerald-950/40 dark:to-teal-950/40
                      border border-emerald-100 dark:border-emerald-900/40">
            <div class="relative flex-shrink-0">
              <div class="w-14 h-14 rounded-xl overflow-hidden shadow-lg ring-2 ring-emerald-400/30
                          bg-gradient-to-br from-emerald-600 via-teal-700 to-indigo-900">
                <div v-if="avatarLoading" class="absolute inset-0 bg-white/20 animate-pulse" />
                <img v-if="profile?.avatar_url && !avatarError"
                     :src="profile.avatar_url" alt="JP"
                     class="w-full h-full object-cover transition-opacity duration-500"
                     :class="avatarLoading ? 'opacity-0' : 'opacity-100'"
                     @load="avatarLoading = false"
                     @error="avatarError = true; avatarLoading = false" />
                <div v-if="!profile?.avatar_url || avatarError"
                     class="w-full h-full flex items-center justify-center">
                  <span class="text-lg font-display font-bold text-white">JP</span>
                </div>
              </div>
              <span class="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400
                           ring-2 ring-white dark:ring-dark-950" />
            </div>
            <div class="min-w-0 flex-1">
              <p class="font-display font-bold text-slate-900 dark:text-white text-sm leading-tight truncate">
                Juan Pablo Guamán Rodríguez
              </p>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                WhatsApp Business Developer · Ecuador 🇪🇨
              </p>
              <div class="flex gap-1.5 mt-1.5">
                <span class="px-2 py-0.5 rounded-full text-[10px] font-semibold
                             bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300">Meta API</span>
                <span class="px-2 py-0.5 rounded-full text-[10px] font-semibold
                             bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300">NestJS</span>
                <span class="px-2 py-0.5 rounded-full text-[10px] font-semibold
                             bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300">Python</span>
              </div>
            </div>
          </div>

          <!-- Badge: Meta API -->
          <div class="hero-enter-1 inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5
                      bg-emerald-50 dark:bg-emerald-950/60
                      border border-emerald-200 dark:border-emerald-800/60
                      text-emerald-700 dark:text-emerald-400 text-xs font-semibold tracking-wide">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
            </svg>
            {{ t('hero.badge') }}
          </div>

          <!-- Available pill -->
          <div class="hero-enter-1 flex items-center gap-2 mb-5">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span class="text-emerald-700 dark:text-emerald-400 text-sm font-medium">{{ t('hero.available') }}</span>
          </div>

          <!-- Headline -->
          <div class="hero-enter-2">
            <h1 class="font-display font-extrabold leading-[1.08] tracking-tight mb-5">
              <span class="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 dark:text-white">
                {{ t('hero.headline') }}
              </span>
            </h1>
          </div>

          <!-- Description -->
          <p class="hero-enter-3 text-base md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl mb-8">
            {{ t('hero.description') }}
          </p>

          <!-- CTAs -->
          <div class="hero-enter-4 flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10">
            <a href="#contact"
               class="btn-primary btn-glow text-base px-7 py-3.5 inline-flex items-center justify-center gap-2">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              {{ t('hero.cta_primary') }}
            </a>
            <a href="#how-it-works"
               class="btn-secondary text-base px-7 py-3.5 inline-flex items-center justify-center gap-2">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
              {{ t('hero.cta_secondary') }}
            </a>
          </div>

          <!-- Trust proof pills -->
          <div class="hero-enter-5 flex flex-wrap gap-2">
            <span v-for="proof in proofs" :key="proof"
              class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium
                     bg-slate-100 dark:bg-white/[0.05]
                     border border-slate-200 dark:border-white/[0.08]
                     text-slate-600 dark:text-slate-400">
              <svg class="w-3 h-3 text-emerald-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              {{ proof }}
            </span>
          </div>
        </div>

        <!-- Right: avatar card -->
        <div class="hidden lg:flex justify-center items-center hero-enter-card">
          <div class="relative float" style="animation-duration:7s">

            <div class="absolute inset-0 rounded-3xl blur-2xl opacity-30 dark:opacity-20
                        bg-gradient-to-br from-emerald-500 via-teal-600 to-indigo-500 scale-105" />

            <div class="relative w-72 rounded-3xl overflow-hidden
                        bg-gradient-to-br from-emerald-700 via-teal-800 to-indigo-900"
                 style="box-shadow: 0 0 80px rgba(16,185,129,0.3), 0 32px 64px rgba(0,0,0,0.2)">

              <div class="absolute inset-0 opacity-10"
                style="background-image: linear-gradient(rgba(255,255,255,.15) 1px,transparent 1px),
                       linear-gradient(90deg,rgba(255,255,255,.15) 1px,transparent 1px);
                       background-size: 28px 28px" />

              <div class="relative px-8 pt-10 pb-8 flex flex-col items-center text-center">
                <!-- Avatar -->
                <div class="relative mb-5">
                  <div class="relative w-24 h-24 rounded-2xl overflow-hidden ring-2 ring-white/20 shadow-xl">
                    <div v-if="avatarLoading" class="absolute inset-0 bg-white/15 animate-pulse" />
                    <img v-if="profile?.avatar_url && !avatarError"
                         :src="profile.avatar_url" alt="Juan Pablo Guamán Rodríguez"
                         class="w-full h-full object-cover transition-opacity duration-500"
                         :class="avatarLoading ? 'opacity-0' : 'opacity-100'"
                         @load="avatarLoading = false"
                         @error="avatarError = true; avatarLoading = false" />
                    <div v-if="!profile?.avatar_url || avatarError"
                         class="absolute inset-0 bg-gradient-to-br from-emerald-500/40 to-teal-600/40
                                flex items-center justify-center">
                      <span class="text-3xl font-display font-bold text-white select-none">JP</span>
                    </div>
                  </div>
                  <span class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-400
                               ring-2 ring-white/20 flex items-center justify-center">
                    <span class="w-2 h-2 rounded-full bg-white" />
                  </span>
                </div>

                <h3 class="font-display font-bold text-white text-lg leading-tight mb-1">Juan Pablo Guamán Rodríguez</h3>
                <p class="text-emerald-200 text-sm mb-1">WhatsApp Business Developer</p>
                <p class="text-emerald-300/70 text-xs mb-5">Ecuador 🇪🇨 · API oficial de Meta</p>

                <!-- Role cycling -->
                <div class="flex items-center gap-2 mb-5 h-6">
                  <div class="h-px w-6 bg-gradient-to-r from-emerald-400 to-transparent flex-shrink-0" />
                  <Transition name="role" mode="out-in">
                    <span :key="roleIndex" class="text-xs font-medium text-emerald-200/80">
                      {{ roles[roleIndex] }}
                    </span>
                  </Transition>
                </div>

                <!-- Stack pills -->
                <div class="flex flex-wrap justify-center gap-1.5 mb-6">
                  <span v-for="tech in stack" :key="tech"
                    class="px-2.5 py-1 rounded-full text-[11px] font-medium
                           bg-white/10 border border-white/15 text-white/80
                           hover:bg-white/20 transition-colors cursor-default">
                    {{ tech }}
                  </span>
                </div>

                <!-- Links -->
                <div class="flex gap-3 w-full">
                  <a href="#contact"
                     class="flex-1 py-2 rounded-xl bg-emerald-500/80 hover:bg-emerald-500
                            text-white text-xs font-bold flex items-center justify-center gap-1.5
                            transition-all duration-200 hover:scale-105">
                    {{ locale === 'es' ? 'Solicitar demo' : 'Request demo' }}
                  </a>
                  <a href="https://www.linkedin.com/in/desertbarret/" target="_blank"
                     class="flex-1 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15
                            text-white text-xs font-medium flex items-center justify-center gap-1.5
                            transition-all duration-200 hover:scale-105">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <!-- Floating badges -->
            <div class="absolute -top-5 -left-10 glass rounded-2xl px-4 py-2.5 float shadow-lg"
                 style="animation-delay:-2s; animation-duration:8s">
              <div class="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                <svg class="w-4 h-4 text-emerald-500" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967c-.273-.099-.471-.148-.67.15c-.197.297-.767.966-.94 1.164c-.173.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.018-.458.13-.606c.134-.133.298-.347.446-.52c.149-.174.198-.298.298-.497c.099-.198.05-.371-.025-.52c-.075-.149-.669-1.612-.916-2.207c-.242-.579-.487-.5-.669-.51c-.173-.008-.371-.01-.57-.01c-.198 0-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074c.149.198 2.096 3.2 5.077 4.487c.709.306 1.262.489 1.694.625c.712.227 1.36.195 1.871.118c.571-.085 1.758-.719 2.006-1.413c.248-.694.248-1.289.173-1.413c-.074-.124-.272-.198-.57-.347M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12s12-5.373 12-12S18.627 0 12 0"/></svg>
                API Meta Oficial
              </div>
            </div>
            <div class="absolute -bottom-4 -right-10 glass rounded-2xl px-4 py-2.5 float shadow-lg"
                 style="animation-delay:-4.5s; animation-duration:8s">
              <div class="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                <svg class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12l2 2 4-4"/><path d="M21 12c0 1.2-.504 2.285-1.31 3.065L12 22l-7.69-6.935A4.5 4.5 0 0 1 3 12V5l9-3 9 3v7z"/></svg>
                Flujos estructurados
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Scroll hint -->
    <div class="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-30 dark:opacity-40">
      <span class="text-[10px] tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400">scroll</span>
      <div class="scroll-line w-[1px] h-10 bg-gradient-to-b from-primary-500 to-transparent" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useProfileStore } from '@/stores/profile';
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();
const profileStore = useProfileStore();
const profile = computed(() => profileStore.profile);

const avatarError   = ref(false);
const avatarLoading = ref(false);

watch(
  () => profile.value?.avatar_url,
  (url) => { avatarError.value = false; avatarLoading.value = !!url; },
  { immediate: true },
);

const stack = ['WhatsApp API', 'NestJS', 'Python', 'FastAPI', 'Docker'];

const roles = computed(() => locale.value === 'es'
  ? ['Atención al cliente 24/7', 'Flujos de WhatsApp Business', 'Integración con tu sistema', 'Sin agentes permanentes']
  : ['Customer service 24/7', 'WhatsApp Business flows', 'Integration with your system', 'No permanent agents']
);
const roleIndex = ref(0);
let roleTimer: ReturnType<typeof setInterval>;

const proofs = computed(() => locale.value === 'es'
  ? [t('hero.proof_1'), t('hero.proof_2'), t('hero.proof_3')]
  : [t('hero.proof_1'), t('hero.proof_2'), t('hero.proof_3')]
);

onMounted(() => {
  roleTimer = setInterval(() => {
    roleIndex.value = (roleIndex.value + 1) % roles.value.length;
  }, 2800);
  if (!profileStore.profile) profileStore.fetch();
});
onUnmounted(() => clearInterval(roleTimer));
</script>

<style scoped>
.hero-section { background-color: var(--bg-base); }
.role-enter-active { transition: all 0.4s cubic-bezier(.22,1,.36,1); }
.role-leave-active { transition: all 0.22s ease-in; }
.role-enter-from   { opacity: 0; transform: translateY(10px); }
.role-leave-to     { opacity: 0; transform: translateY(-8px); }
@keyframes scrollBounce {
  0%, 100% { transform: scaleY(1); opacity: 0.3; }
  50%       { transform: scaleY(1.3); opacity: 0.6; }
}
.scroll-line { animation: scrollBounce 2.5s ease-in-out infinite; }
</style>
