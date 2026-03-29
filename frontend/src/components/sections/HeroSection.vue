<template>
  <section class="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-[#080B14]">

    <!-- ── Background ─────────────────────────────────────────── -->
    <div class="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
      <!-- Dot grid -->
      <div class="absolute inset-0 opacity-[0.35] dark:opacity-[0.18]"
        style="background-image: radial-gradient(circle, #6366f1 1px, transparent 1px); background-size: 36px 36px;" />

      <!-- Orbs -->
      <div class="orb w-[600px] h-[600px] top-[-10%] right-[-5%]
                  bg-violet-500/20 dark:bg-violet-600/15 float" />
      <div class="orb w-[500px] h-[500px] bottom-[-5%] left-[-8%]
                  bg-indigo-500/15 dark:bg-indigo-600/10 float-slow" />
      <div class="orb w-[300px] h-[300px] top-[40%] left-[40%]
                  bg-cyan-400/10 dark:bg-cyan-500/8 float" style="animation-delay:-3s" />

      <!-- Radial vignette (dark mode) -->
      <div class="absolute inset-0 hidden dark:block"
        style="background: radial-gradient(ellipse 80% 60% at 50% 0%, transparent 40%, #080B14 100%)" />
    </div>

    <!-- ── Content ────────────────────────────────────────────── -->
    <div class="relative z-10 w-full max-w-6xl mx-auto px-6 pt-28 pb-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <!-- Left: text -->
        <div>
          <!-- Availability pill -->
          <div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8
                      bg-emerald-50 dark:bg-emerald-950/60
                      border border-emerald-200 dark:border-emerald-800/60
                      text-emerald-700 dark:text-emerald-400 text-sm font-medium
                      reveal" :class="{ visible: show }">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {{ t('hero.available') }}
          </div>

          <!-- Name -->
          <div class="reveal reveal-delay-1" :class="{ visible: show }">
            <p class="text-base font-medium text-slate-500 dark:text-slate-400 mb-1">
              {{ t('hero.greeting') }}
            </p>
            <h1 class="font-display font-extrabold leading-[1.05] tracking-tight mb-3">
              <span class="block text-5xl md:text-6xl lg:text-7xl text-slate-900 dark:text-white">
                Juan Pablo
              </span>
              <span class="block text-5xl md:text-6xl lg:text-7xl text-shine">
                Guamán
              </span>
            </h1>
          </div>

          <!-- Animated role -->
          <div class="flex items-center gap-3 mb-8 h-8 reveal reveal-delay-2" :class="{ visible: show }">
            <div class="h-px w-8 bg-gradient-to-r from-primary-500 to-transparent flex-shrink-0" />
            <Transition name="role" mode="out-in">
              <span :key="roleIndex" class="text-lg md:text-xl font-medium text-slate-600 dark:text-slate-300">
                {{ roles[roleIndex] }}
              </span>
            </Transition>
          </div>

          <!-- Bio -->
          <p class="text-base md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg mb-10
                     reveal reveal-delay-3" :class="{ visible: show }">
            {{ profile ? (locale === 'es' ? profile.bio_es : profile.bio_en) : t('hero.description') }}
          </p>

          <!-- CTAs -->
          <div class="flex flex-wrap gap-4 mb-12 reveal reveal-delay-4" :class="{ visible: show }">
            <a href="#projects" class="btn-primary text-base px-7 py-3.5">
              <span>🚀</span> {{ t('hero.cta_projects') }}
            </a>
            <a href="#contact" class="btn-secondary text-base px-7 py-3.5">
              {{ t('hero.cta_contact') }}
            </a>
          </div>

          <!-- Stats -->
          <div class="flex flex-wrap gap-8 pt-8 border-t border-slate-200 dark:border-white/[0.07]
                       reveal reveal-delay-5" :class="{ visible: show }">
            <div v-for="s in stats" :key="s.label">
              <p class="font-display font-bold text-2xl text-slate-900 dark:text-white">{{ s.value }}</p>
              <p class="text-xs text-slate-400 dark:text-slate-500 mt-0.5 tracking-wide">{{ s.label }}</p>
            </div>
          </div>
        </div>

        <!-- Right: avatar card -->
        <div class="hidden lg:flex justify-center items-center">
          <div class="relative float" style="animation-duration:7s">

            <!-- Card -->
            <div class="relative w-72 rounded-3xl overflow-hidden shadow-2xl
                        bg-gradient-to-br from-indigo-600 via-violet-700 to-[#0d0a2e]"
                 style="box-shadow: 0 0 80px rgba(99,102,241,0.3)">

              <!-- Grid lines inside card -->
              <div class="absolute inset-0 opacity-10"
                style="background-image: linear-gradient(rgba(255,255,255,.15) 1px,transparent 1px),
                       linear-gradient(90deg,rgba(255,255,255,.15) 1px,transparent 1px);
                       background-size: 28px 28px" />

              <div class="relative px-8 pt-10 pb-8 flex flex-col items-center text-center">
                <!-- Avatar -->
                <div class="relative mb-5">
                  <div class="w-24 h-24 rounded-2xl overflow-hidden ring-2 ring-white/20 shadow-xl">
                    <img v-if="profile?.avatar_url" :src="profile.avatar_url"
                         alt="JP" class="w-full h-full object-cover" />
                    <div v-else class="w-full h-full bg-white/20 flex items-center justify-center">
                      <span class="text-4xl font-display font-bold text-white">JP</span>
                    </div>
                  </div>
                  <!-- Online dot -->
                  <span class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-400
                               ring-2 ring-white/20 flex items-center justify-center">
                    <span class="w-2 h-2 rounded-full bg-white" />
                  </span>
                </div>

                <h3 class="font-display font-bold text-white text-lg leading-tight mb-1">
                  Juan Pablo Guamán
                </h3>
                <p class="text-indigo-200 text-sm mb-1">@jp.desertbarret</p>
                <p class="text-indigo-300/70 text-xs mb-6">Ecuador 🇪🇨</p>

                <!-- Tech stack -->
                <div class="flex flex-wrap justify-center gap-1.5 mb-6">
                  <span v-for="t in stack" :key="t"
                    class="px-2.5 py-1 rounded-full text-[11px] font-medium
                           bg-white/10 border border-white/15 text-white/80">
                    {{ t }}
                  </span>
                </div>

                <!-- Links -->
                <div class="flex gap-3 w-full">
                  <a href="https://www.youtube.com/@jp.desertbarret" target="_blank"
                     class="flex-1 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15
                            text-white text-xs font-medium flex items-center justify-center gap-1.5
                            transition-colors">
                    ▶️ YouTube
                  </a>
                  <a href="https://www.udemy.com/user/juan-pablo-guaman-rodriguez/" target="_blank"
                     class="flex-1 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15
                            text-white text-xs font-medium flex items-center justify-center gap-1.5
                            transition-colors">
                    🎓 Udemy
                  </a>
                </div>
              </div>
            </div>

            <!-- Floating badges -->
            <div class="absolute -top-5 -left-10 glass rounded-2xl px-4 py-2.5 float shadow-xl"
                 style="animation-delay:-2s; animation-duration:8s">
              <div class="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
                <span class="text-base">⭐</span> 10+ años
              </div>
            </div>
            <div class="absolute -bottom-4 -right-10 glass rounded-2xl px-4 py-2.5 float shadow-xl"
                 style="animation-delay:-4.5s; animation-duration:8s">
              <div class="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
                <span class="text-base">🎓</span> 25K+ alumnos
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Scroll hint -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
      <span class="text-[10px] tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400">scroll</span>
      <div class="w-[1px] h-10 bg-gradient-to-b from-primary-500 to-transparent" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useProfileStore } from '@/stores/profile';

const { t, locale } = useI18n();
const profileStore = useProfileStore();
const profile = computed(() => profileStore.profile);

const show = ref(false);
const stack = ['Vue 3', 'NestJS', 'TypeScript', 'Python', 'Docker'];

const roles = computed(() => locale.value === 'es'
  ? ['Full Stack Developer', 'Ingeniero en Sistemas', 'Creador de Contenido', 'Automation Engineer']
  : ['Full Stack Developer', 'Systems Engineer', 'Content Creator', 'Automation Engineer']
);
const roleIndex = ref(0);

let roleTimer: ReturnType<typeof setInterval>;

onMounted(() => {
  setTimeout(() => (show.value = true), 80);
  roleTimer = setInterval(() => {
    roleIndex.value = (roleIndex.value + 1) % roles.value.length;
  }, 2800);
  if (!profileStore.profile) profileStore.fetch();
});

onUnmounted(() => clearInterval(roleTimer));

const stats = computed(() => [
  { value: '10+', label: locale.value === 'es' ? 'Años de experiencia' : 'Years experience' },
  { value: '5+',  label: locale.value === 'es' ? 'Cursos publicados' : 'Published courses' },
  { value: '25K+', label: locale.value === 'es' ? 'Estudiantes' : 'Students' },
]);
</script>

<style scoped>
/* Role transition */
.role-enter-active { transition: all 0.4s cubic-bezier(.22,1,.36,1); }
.role-leave-active { transition: all 0.25s ease-in; }
.role-enter-from   { opacity: 0; transform: translateY(10px); }
.role-leave-to     { opacity: 0; transform: translateY(-8px); }
</style>
