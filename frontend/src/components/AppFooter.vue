<template>
  <footer class="bg-white dark:bg-dark-900 border-t border-slate-200 dark:border-slate-800">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 mb-8">
        <!-- Brand -->
        <div class="md:col-span-1">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
              <span class="text-white font-bold text-sm">JP</span>
            </div>
            <span class="font-display font-bold text-slate-900 dark:text-white">withjp<span class="text-primary-500">.ai</span></span>
          </div>
          <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Software Architecture, WhatsApp Automation & Developer Education. Ecuador.
          </p>
        </div>

        <!-- Pages -->
        <div>
          <h4 class="font-semibold text-slate-900 dark:text-white mb-4">{{ t('footer.pages') }}</h4>
          <div class="space-y-2">
            <router-link v-for="link in pageLinks" :key="link.to" :to="link.to"
              class="block text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              {{ t(link.key) }}
            </router-link>
          </div>
        </div>

        <!-- Resources -->
        <div>
          <h4 class="font-semibold text-slate-900 dark:text-white mb-4">{{ t('footer.resources') }}</h4>
          <div class="space-y-2">
            <router-link to="/blog" class="block text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Blog</router-link>
            <router-link to="/cursos" class="block text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">{{ t('nav.courses') }}</router-link>
            <router-link to="/academia" class="block text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">{{ t('nav.academia') }}</router-link>
          </div>
        </div>

        <!-- Social -->
        <div>
          <h4 class="font-semibold text-slate-900 dark:text-white mb-4">Social</h4>
          <div class="flex flex-wrap gap-3">
            <a v-for="link in socialLinks" :key="link.label" :href="link.url"
              target="_blank" rel="noopener noreferrer"
              class="flex items-center gap-2 px-3 py-2 bg-slate-100 dark:bg-slate-800
                     text-slate-600 dark:text-slate-400
                     hover:text-primary-600 dark:hover:text-primary-400
                     hover:bg-primary-50 dark:hover:bg-primary-900/20
                     rounded-lg text-sm font-medium transition-colors">
              <span class="w-4 h-4 flex items-center justify-center" v-html="link.icon" />
              {{ link.label }}
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-sm text-slate-500 dark:text-slate-400 font-medium">
          &copy; 2026 Juan Pablo Guaman Rodriguez | Loja, Ecuador |
          <a href="mailto:info@withjp.ai" class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">info@withjp.ai</a>
        </p>
        <div class="flex items-center gap-3 flex-wrap">
          <a href="/privacidad.html" class="text-sm text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors underline underline-offset-2">
            {{ t('footer.privacy') }}
          </a>
          <span class="text-slate-300 dark:text-slate-700">&middot;</span>
          <a href="/terminos.html" class="text-sm text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors underline underline-offset-2">
            {{ t('footer.terms') }}
          </a>
          <span class="text-slate-300 dark:text-slate-700">&middot;</span>
          <a href="/cookies.html" class="text-sm text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors underline underline-offset-2">
            Cookies
          </a>
          <span class="text-slate-300 dark:text-slate-700">&middot;</span>
          <a href="/whatsapp-policy.html" class="text-sm text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors underline underline-offset-2">
            {{ t('footer.whatsapp_policy') }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useProfileStore } from '@/stores/profile';

const { t } = useI18n();
const profileStore = useProfileStore();

const pageLinks = [
  { to: '/', key: 'nav.home' },
  { to: '/whatsapp', key: 'nav.whatsapp' },
  { to: '/about', key: 'nav.about' },
];

const ICON_LINKEDIN = `<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`;
const ICON_GITHUB   = `<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`;
const ICON_YOUTUBE  = `<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`;
const ICON_UDEMY    = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`;

const socialLinks = computed(() => {
  const p = profileStore.profile;
  const links = [];
  if (p?.linkedin_url) links.push({ label: 'LinkedIn', icon: ICON_LINKEDIN, url: p.linkedin_url });
  if (p?.github_url)   links.push({ label: 'GitHub',   icon: ICON_GITHUB,   url: p.github_url });
  if (p?.youtube_url)  links.push({ label: 'YouTube',  icon: ICON_YOUTUBE,  url: p.youtube_url });
  if (p?.udemy_url)    links.push({ label: 'Udemy',    icon: ICON_UDEMY,    url: p.udemy_url });
  return links.length ? links : [
    { label: 'LinkedIn', icon: ICON_LINKEDIN, url: 'https://www.linkedin.com/in/desertbarret/' },
    { label: 'YouTube',  icon: ICON_YOUTUBE,  url: 'https://www.youtube.com/@jp.desertbarret' },
    { label: 'Udemy',    icon: ICON_UDEMY,    url: 'https://www.udemy.com/user/juan-pablo-guaman-rodriguez/' },
  ];
});

onMounted(() => {
  if (!profileStore.profile) profileStore.fetch();
});
</script>
