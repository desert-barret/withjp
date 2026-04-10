<template>
  <header
    class="fixed top-0 left-0 right-0 z-[70] transition-all duration-300"
    :class="scrolled
      ? 'bg-white/90 dark:bg-[#080B14] backdrop-blur-xl border-b border-slate-200/60 dark:border-white/[0.08] shadow-sm dark:shadow-black/40'
      : 'bg-white/75 dark:bg-[#080B14]/95 backdrop-blur-md border-b border-slate-100/60 dark:border-white/[0.06]'">

    <div class="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">

      <!-- Logo -->
      <router-link to="/" class="flex items-center gap-2.5 group">
        <div class="w-8 h-8 rounded-xl bg-gradient-to-br from-primary-600 to-violet-600
                    flex items-center justify-center shadow-md shadow-primary-500/25
                    group-hover:shadow-primary-500/40 group-hover:scale-105 transition-all">
          <span class="text-white font-bold text-xs tracking-tight">JP</span>
        </div>
        <span class="font-display font-bold text-[1.1rem] text-slate-900 dark:text-white">
          withjp<span class="text-primary-500">.ai</span>
        </span>
      </router-link>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-0.5">
        <router-link v-for="item in navItems" :key="item.to" :to="item.to"
          class="px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200
                 text-slate-600 dark:text-slate-400
                 hover:text-slate-900 dark:hover:text-white
                 hover:bg-slate-100/80 dark:hover:bg-white/[0.06]"
          active-class="!text-primary-600 dark:!text-primary-400 !bg-primary-50 dark:!bg-primary-500/10">
          {{ t(item.key) }}
        </router-link>
      </nav>

      <!-- Actions -->
      <div class="flex items-center gap-1.5">

        <!-- Lang toggle -->
        <button @click="toggleLang"
          class="h-9 px-3 flex items-center gap-1.5 text-xs font-semibold rounded-xl
                 border border-slate-200/80 dark:border-white/[0.08]
                 text-slate-600 dark:text-slate-400
                 hover:border-primary-400 dark:hover:border-primary-500/50
                 hover:text-primary-600 dark:hover:text-primary-400
                 bg-white/70 dark:bg-white/[0.04]
                 transition-all duration-200">
          {{ locale === 'es' ? 'EN' : 'ES' }}
        </button>

        <!-- Theme toggle -->
        <button @click="theme.toggle()"
          class="w-9 h-9 flex items-center justify-center rounded-xl
                 border border-slate-200/80 dark:border-white/[0.08]
                 text-slate-500 dark:text-slate-400
                 hover:border-primary-400 dark:hover:border-primary-500/50
                 hover:text-primary-600 dark:hover:text-primary-400
                 bg-white/70 dark:bg-white/[0.04]
                 transition-all duration-200">
          <svg v-if="theme.isDark" class="w-4 h-4" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
          <svg v-else class="w-4 h-4" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </button>

        <!-- Mobile hamburger -->
        <button @click="mobileOpen = !mobileOpen"
          class="md:hidden w-9 h-9 flex items-center justify-center rounded-xl
                 border border-slate-200/80 dark:border-white/[0.08]
                 text-slate-500 dark:text-slate-400
                 bg-white/70 dark:bg-white/[0.04]
                 transition-all duration-200"
          :aria-label="mobileOpen ? 'Close menu' : 'Open menu'"
          :aria-expanded="mobileOpen">
          <svg v-if="mobileOpen" class="w-4 h-4" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
          <svg v-else class="w-4 h-4" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu dropdown -->
    <Transition name="slide-down">
      <nav v-if="mobileOpen"
        class="md:hidden border-t border-slate-200/60 dark:border-white/[0.06]
               bg-white/95 dark:bg-[#080B14]/95 backdrop-blur-xl
               px-4 py-2 pb-3">
        <router-link v-for="item in navItems" :key="item.to" :to="item.to"
          @click="mobileOpen = false"
          class="flex items-center px-4 py-3 text-sm font-medium rounded-xl
                 text-slate-600 dark:text-slate-300
                 hover:text-slate-900 dark:hover:text-white
                 hover:bg-slate-100/80 dark:hover:bg-white/[0.06]
                 transition-colors duration-150"
          active-class="!text-primary-600 dark:!text-primary-400 !bg-primary-50 dark:!bg-primary-500/10">
          {{ t(item.key) }}
        </router-link>
      </nav>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useThemeStore } from '@/stores/theme';

const { t, locale } = useI18n();
const theme = useThemeStore();

const scrolled    = ref(false);
const mobileOpen  = ref(false);

const navItems = [
  { to: '/',          key: 'nav.home' },
  { to: '/whatsapp',  key: 'nav.whatsapp' },
  { to: '/academia',  key: 'nav.academia' },
  { to: '/cursos',    key: 'nav.courses' },
  { to: '/blog',      key: 'nav.blog' },
  { to: '/about',     key: 'nav.about' },
];

function toggleLang() {
  locale.value = locale.value === 'es' ? 'en' : 'es';
  localStorage.setItem('withjp_lang', locale.value as string);
}

function onScroll() {
  scrolled.value = window.scrollY > 8;
  if (window.scrollY > 60 && mobileOpen.value) {
    mobileOpen.value = false;
  }
}

onMounted(() => {
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
});
</script>

<style scoped>
.slide-down-enter-active {
  transition: opacity 0.18s ease, transform 0.22s cubic-bezier(0.22, 1, 0.36, 1);
}
.slide-down-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
