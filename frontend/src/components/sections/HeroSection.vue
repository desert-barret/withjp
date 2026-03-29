<template>
  <section class="hero-section relative min-h-screen flex items-center overflow-hidden">

    <!-- ── Background ─────────────────────────────────────────── -->
    <div class="absolute inset-0 pointer-events-none select-none" aria-hidden="true">

      <!-- Mesh gradient blobs — light mode visible, dark mode subtle -->
      <div class="mesh-blob mesh-blob-1" />
      <div class="mesh-blob mesh-blob-2" />
      <div class="mesh-blob mesh-blob-3" />

      <!-- Dot grid -->
      <div class="absolute inset-0 dot-grid" style="opacity: 0.55;" />
      <div class="absolute inset-0 dark:hidden"
           style="background: radial-gradient(ellipse 100% 80% at 50% 0%, rgba(255,255,255,0) 30%, #f8f9ff 100%)" />

      <!-- Radial vignette (dark mode) -->
      <div class="absolute inset-0 hidden dark:block"
        style="background: radial-gradient(ellipse 80% 60% at 50% 0%, transparent 40%, #080B14 100%)" />
    </div>

    <!-- ── Content ────────────────────────────────────────────── -->
    <div class="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-16 sm:pt-28 sm:pb-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        <!-- Left: text -->
        <div>
          <!-- Availability pill -->
          <div class="hero-enter-1 inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-6 sm:mb-8
                      bg-emerald-50 dark:bg-emerald-950/60
                      border border-emerald-200 dark:border-emerald-800/60
                      text-emerald-700 dark:text-emerald-400 text-sm font-medium">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {{ t('hero.available') }}
          </div>

          <!-- Name -->
          <div class="hero-enter-2">
            <p class="text-base font-medium text-slate-500 dark:text-slate-400 mb-1">
              {{ t('hero.greeting') }}
            </p>
            <h1 class="font-display font-extrabold leading-[1.05] tracking-tight mb-3">
              <span class="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-slate-900 dark:text-white">
                Juan Pablo
              </span>
              <span class="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-shine">
                Guamán
              </span>
            </h1>
          </div>

          <!-- Animated role -->
          <div class="hero-enter-3 flex items-center gap-3 mb-8 h-8">
            <div class="h-px w-8 bg-gradient-to-r from-primary-500 to-transparent flex-shrink-0" />
            <Transition name="role" mode="out-in">
              <span :key="roleIndex" class="text-lg md:text-xl font-medium text-slate-600 dark:text-slate-300">
                {{ roles[roleIndex] }}
              </span>
            </Transition>
          </div>

          <!-- Tagline -->
          <p class="hero-enter-3 text-base md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg mb-10">
            {{ t('hero.description') }}
          </p>

          <!-- CTAs -->
          <div class="hero-enter-4 flex flex-wrap gap-4 mb-12">
            <a href="#projects" class="btn-primary btn-glow text-base px-7 py-3.5 inline-flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3l14 9-14 9V3z"/></svg>
              {{ t('hero.cta_projects') }}
            </a>
            <a href="#contact" class="btn-secondary text-base px-7 py-3.5 inline-flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              {{ t('hero.cta_contact') }}
            </a>
          </div>

          <!-- Stats -->
          <div class="hero-enter-5 flex flex-wrap gap-6 sm:gap-8 pt-6 sm:pt-8 border-t border-slate-200 dark:border-white/[0.07]">
            <div v-for="s in stats" :key="s.label" class="group cursor-default">
              <p class="font-display font-bold text-2xl text-slate-900 dark:text-white
                         group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {{ s.value }}
              </p>
              <p class="text-xs text-slate-400 dark:text-slate-500 mt-0.5 tracking-wide">{{ s.label }}</p>
            </div>
          </div>
        </div>

        <!-- Right: avatar card -->
        <div class="hidden lg:flex justify-center items-center hero-enter-card">
          <div class="relative float" style="animation-duration:7s">

            <!-- Glow ring behind card -->
            <div class="absolute inset-0 rounded-3xl blur-2xl opacity-30 dark:opacity-20
                        bg-gradient-to-br from-indigo-500 via-violet-600 to-cyan-500 scale-105" />

            <!-- Card -->
            <div class="relative w-72 rounded-3xl overflow-hidden
                        bg-gradient-to-br from-indigo-600 via-violet-700 to-[#0d0a2e]"
                 style="box-shadow: 0 0 80px rgba(99,102,241,0.35), 0 32px 64px rgba(0,0,0,0.2)">

              <!-- Grid lines inside card -->
              <div class="absolute inset-0 opacity-10"
                style="background-image: linear-gradient(rgba(255,255,255,.15) 1px,transparent 1px),
                       linear-gradient(90deg,rgba(255,255,255,.15) 1px,transparent 1px);
                       background-size: 28px 28px" />

              <div class="relative px-8 pt-10 pb-8 flex flex-col items-center text-center">
                <!-- Avatar -->
                <div class="relative mb-5">
                  <div class="relative w-24 h-24 rounded-2xl overflow-hidden ring-2 ring-white/20 shadow-xl">

                    <!-- Loading skeleton -->
                    <div v-if="avatarLoading"
                         class="absolute inset-0 bg-white/15 animate-pulse" />

                    <!-- Image — rendered early so browser starts fetch; hidden while loading -->
                    <img
                      v-if="profile?.avatar_url && !avatarError"
                      :src="profile.avatar_url"
                      alt="Juan Pablo Guamán"
                      class="w-full h-full object-cover transition-opacity duration-500"
                      :class="avatarLoading ? 'opacity-0' : 'opacity-100'"
                      @load="avatarLoading = false"
                      @error="avatarError = true; avatarLoading = false"
                    />

                    <!-- Fallback: no URL or load error -->
                    <div v-if="!profile?.avatar_url || avatarError"
                         class="absolute inset-0 bg-gradient-to-br from-indigo-500/40 to-violet-600/40
                                flex items-center justify-center">
                      <span class="text-3xl font-display font-bold text-white select-none">JP</span>
                    </div>
                  </div>

                  <span class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-400
                               ring-2 ring-white/20 flex items-center justify-center">
                    <span class="w-2 h-2 rounded-full bg-white" />
                  </span>
                </div>

                <h3 class="font-display font-bold text-white text-lg leading-tight mb-1">Juan Pablo Guamán</h3>
                <p class="text-indigo-200 text-sm mb-1">@jp.desertbarret</p>
                <p class="text-indigo-300/70 text-xs mb-6">Ecuador 🇪🇨</p>

                <!-- Tech stack pills -->
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
                  <a href="https://www.youtube.com/@jp.desertbarret" target="_blank"
                     class="flex-1 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15
                            text-white text-xs font-medium flex items-center justify-center gap-1.5
                            transition-all duration-200 hover:scale-105">
                    <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                    YouTube
                  </a>
                  <a href="https://www.udemy.com/user/juan-pablo-guaman-rodriguez/" target="_blank"
                     class="flex-1 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15
                            text-white text-xs font-medium flex items-center justify-center gap-1.5
                            transition-all duration-200 hover:scale-105">
                    <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                    Udemy
                  </a>
                </div>
              </div>
            </div>

            <!-- Floating badges -->
            <div class="absolute -top-5 -left-10 glass rounded-2xl px-4 py-2.5 float shadow-lg"
                 style="animation-delay:-2s; animation-duration:8s">
              <div class="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                <svg class="w-4 h-4 text-amber-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                10+ años
              </div>
            </div>
            <div class="absolute -bottom-4 -right-10 glass rounded-2xl px-4 py-2.5 float shadow-lg"
                 style="animation-delay:-4.5s; animation-duration:8s">
              <div class="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                <svg class="w-4 h-4 text-violet-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                25K+ alumnos
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Scroll hint -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 dark:opacity-40">
      <span class="text-[10px] tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400">scroll</span>
      <div class="scroll-line w-[1px] h-10 bg-gradient-to-b from-primary-500 to-transparent" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useProfileStore } from '@/stores/profile';

const { t, locale } = useI18n();
const profileStore = useProfileStore();
const profile = computed(() => profileStore.profile);

// ── Avatar state ──────────────────────────────────────────────
const avatarError   = ref(false);
const avatarLoading = ref(false);

watch(
  () => profile.value?.avatar_url,
  (url) => {
    avatarError.value   = false;
    avatarLoading.value = !!url; // skeleton only when there's a URL to load
  },
  { immediate: true },
);

const stack = ['Vue 3', 'NestJS', 'TypeScript', 'Python', 'Docker'];

const roles = computed(() => locale.value === 'es'
  ? ['Full Stack Developer', 'Ingeniero en Sistemas', 'Creador de Contenido', 'Automation Engineer']
  : ['Full Stack Developer', 'Systems Engineer', 'Content Creator', 'Automation Engineer']
);
const roleIndex = ref(0);
let roleTimer: ReturnType<typeof setInterval>;

onMounted(() => {
  roleTimer = setInterval(() => {
    roleIndex.value = (roleIndex.value + 1) % roles.value.length;
  }, 2800);
  if (!profileStore.profile) profileStore.fetch();
});
onUnmounted(() => clearInterval(roleTimer));

const stats = computed(() => [
  { value: '10+',  label: locale.value === 'es' ? 'Años de experiencia' : 'Years experience' },
  { value: '5+',   label: locale.value === 'es' ? 'Cursos publicados' : 'Published courses' },
  { value: '25K+', label: locale.value === 'es' ? 'Estudiantes' : 'Students' },
]);
</script>

<style scoped>
.hero-section {
  background-color: var(--bg-base);
}

/* Role transition */
.role-enter-active { transition: all 0.4s cubic-bezier(.22,1,.36,1); }
.role-leave-active { transition: all 0.22s ease-in; }
.role-enter-from   { opacity: 0; transform: translateY(10px); }
.role-leave-to     { opacity: 0; transform: translateY(-8px); }

/* Scroll line bounce */
@keyframes scrollBounce {
  0%, 100% { transform: scaleY(1); opacity: 0.3; }
  50%       { transform: scaleY(1.3); opacity: 0.6; }
}
.scroll-line { animation: scrollBounce 2.5s ease-in-out infinite; }
</style>
