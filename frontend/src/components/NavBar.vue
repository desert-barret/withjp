<template>
  <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="scrolled
      ? 'bg-white/80 dark:bg-[#080B14]/80 backdrop-blur-xl border-b border-slate-200/60 dark:border-white/[0.06] shadow-sm'
      : 'bg-transparent'">

    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

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
        <a v-for="item in navItems" :key="item.href" :href="item.href"
          class="px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200
                 text-slate-600 dark:text-slate-400
                 hover:text-slate-900 dark:hover:text-white
                 hover:bg-slate-100 dark:hover:bg-white/[0.06]">
          {{ t(item.key) }}
        </a>
      </nav>

      <!-- Actions -->
      <div class="flex items-center gap-1.5">
        <!-- Lang toggle -->
        <button @click="toggleLang"
          class="h-8 px-3 flex items-center gap-1.5 text-xs font-semibold rounded-xl
                 border border-slate-200 dark:border-white/[0.08]
                 text-slate-600 dark:text-slate-400
                 hover:border-primary-400 dark:hover:border-primary-500/50
                 hover:text-primary-600 dark:hover:text-primary-400
                 bg-white dark:bg-transparent
                 transition-all duration-200">
          {{ locale === 'es' ? '🇺🇸 EN' : '🇪🇸 ES' }}
        </button>

        <!-- Theme toggle -->
        <button @click="theme.toggle()"
          class="w-9 h-9 flex items-center justify-center rounded-xl
                 border border-slate-200 dark:border-white/[0.08]
                 text-slate-500 dark:text-slate-400
                 hover:border-primary-400 dark:hover:border-primary-500/50
                 hover:text-primary-600 dark:hover:text-primary-400
                 bg-white dark:bg-transparent
                 transition-all duration-200">
          <span class="text-sm">{{ theme.isDark ? '☀️' : '🌙' }}</span>
        </button>

        <!-- Mobile menu button -->
        <button @click="mobileOpen = !mobileOpen"
          class="md:hidden w-9 h-9 flex items-center justify-center rounded-xl
                 border border-slate-200 dark:border-white/[0.08]
                 text-slate-500 dark:text-slate-400 bg-white dark:bg-transparent
                 transition-all duration-200">
          <span class="text-sm">{{ mobileOpen ? '✕' : '☰' }}</span>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition name="slide-down">
      <div v-if="mobileOpen"
        class="md:hidden bg-white/95 dark:bg-[#080B14]/95 backdrop-blur-xl
               border-b border-slate-200/60 dark:border-white/[0.06] px-6 py-3 space-y-1">
        <a v-for="item in navItems" :key="item.href" :href="item.href"
          @click="mobileOpen = false"
          class="block px-4 py-3 text-sm font-medium rounded-xl
                 text-slate-600 dark:text-slate-400
                 hover:text-slate-900 dark:hover:text-white
                 hover:bg-slate-100 dark:hover:bg-white/[0.06] transition-colors">
          {{ t(item.key) }}
        </a>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useThemeStore } from '@/stores/theme';

const { t, locale } = useI18n();
const theme = useThemeStore();
const scrolled = ref(false);
const mobileOpen = ref(false);

const navItems = [
  { href: '#about',    key: 'nav.about'    },
  { href: '#projects', key: 'nav.projects' },
  { href: '#courses',  key: 'nav.courses'  },
  { href: '#contact',  key: 'nav.contact'  },
];

function toggleLang() {
  locale.value = locale.value === 'es' ? 'en' : 'es';
  localStorage.setItem('withjp_lang', locale.value as string);
}
function onScroll() { scrolled.value = window.scrollY > 20; }
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }));
onUnmounted(() => window.removeEventListener('scroll', onScroll));
</script>

<style scoped>
.slide-down-enter-active, .slide-down-leave-active { transition: all 0.2s ease; }
.slide-down-enter-from, .slide-down-leave-to { opacity: 0; transform: translateY(-6px); }
</style>
