<template>
  <footer class="bg-slate-950 dark:bg-dark-950 text-slate-400">
    <!-- Top section -->
    <div class="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-10">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-10">

        <!-- Brand column -->
        <div class="md:col-span-4">
          <!-- Logo -->
          <div class="flex items-center gap-2.5 mb-5">
            <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-violet-600
                        flex items-center justify-center shadow-md">
              <span class="text-white font-bold text-sm">JP</span>
            </div>
            <span class="font-display font-bold text-white text-lg">
              withjp<span class="text-primary-400">.ai</span>
            </span>
          </div>

          <p class="text-sm leading-relaxed text-slate-400 mb-6 max-w-xs">
            {{ t('footer.tagline') }}
          </p>

          <!-- Location badge -->
          <div class="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            {{ t('footer.location') }}
          </div>

          <!-- Social -->
          <div class="flex flex-wrap gap-2">
            <a v-for="link in socialLinks" :key="link.label" :href="link.url"
              target="_blank" rel="noopener noreferrer"
              class="flex items-center justify-center w-9 h-9 rounded-xl
                     bg-white/5 hover:bg-primary-600 border border-white/10 hover:border-primary-500
                     text-slate-400 hover:text-white
                     transition-all duration-200"
              :aria-label="link.label">
              <span class="w-4 h-4" v-html="link.icon" />
            </a>
          </div>
        </div>

        <!-- Navigation columns -->
        <div class="md:col-span-2">
          <h4 class="text-xs font-bold uppercase tracking-widest text-slate-300 mb-5">
            {{ t('footer.pages') }}
          </h4>
          <div class="space-y-3">
            <router-link v-for="link in pageLinks" :key="link.to" :to="link.to"
              class="block text-sm text-slate-400 hover:text-white transition-colors duration-150 link-underline">
              {{ t(link.key) }}
            </router-link>
          </div>
        </div>

        <div class="md:col-span-2">
          <h4 class="text-xs font-bold uppercase tracking-widest text-slate-300 mb-5">
            {{ t('footer.resources') }}
          </h4>
          <div class="space-y-3">
            <router-link to="/blog"
              class="block text-sm text-slate-400 hover:text-white transition-colors duration-150 link-underline">
              Blog
            </router-link>
            <router-link to="/academia"
              class="block text-sm text-slate-400 hover:text-white transition-colors duration-150 link-underline">
              {{ t('nav.academia') }}
            </router-link>
            <a href="https://www.udemy.com/user/juan-pablo-guaman-rodriguez/" target="_blank" rel="noopener"
              class="block text-sm text-slate-400 hover:text-white transition-colors duration-150 link-underline">
              Udemy
            </a>
          </div>
        </div>

        <!-- Contact / CTA column -->
        <div class="md:col-span-4">
          <h4 class="text-xs font-bold uppercase tracking-widest text-slate-300 mb-5">
            {{ t('nav.contact') }}
          </h4>
          <p class="text-sm text-slate-400 mb-5 leading-relaxed">
            {{ locale === 'es'
              ? '¿Proyecto, consultoría o colaboración? Escríbeme y hablamos.'
              : 'Project, consulting or collaboration? Drop me a message.' }}
          </p>
          <a href="mailto:info@withjp.ai"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold
                   bg-primary-600 hover:bg-primary-500 text-white
                   shadow-lg shadow-primary-500/20 transition-all duration-200">
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            info@withjp.ai
          </a>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-white/5">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-xs text-slate-500 text-center sm:text-left">
          &copy; 2026 Juan Pablo Guaman Rodriguez · Loja, Ecuador
        </p>
        <div class="flex items-center gap-4 flex-wrap justify-center">
          <a href="/privacidad.html" class="text-xs text-slate-500 hover:text-slate-300 transition-colors">
            {{ t('footer.privacy') }}
          </a>
          <span class="text-slate-700">·</span>
          <a href="/terminos.html" class="text-xs text-slate-500 hover:text-slate-300 transition-colors">
            {{ t('footer.terms') }}
          </a>
          <span class="text-slate-700">·</span>
          <a href="/cookies.html" class="text-xs text-slate-500 hover:text-slate-300 transition-colors">
            Cookies
          </a>
          <span class="text-slate-700">·</span>
          <a href="/whatsapp-policy.html" class="text-xs text-slate-500 hover:text-emerald-400 transition-colors">
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

const { t, locale } = useI18n();
const profileStore = useProfileStore();

const pageLinks = [
  { to: '/',          key: 'nav.home' },
  { to: '/about',     key: 'nav.about' },
  { to: '/whatsapp',  key: 'nav.whatsapp' },
  { to: '/academia',  key: 'nav.academia' },
];

const ICON_LINKEDIN = `<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`;
const ICON_GITHUB   = `<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`;
const ICON_YOUTUBE  = `<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`;
const ICON_UDEMY    = `<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 0L5.81 3.573v3.574l6.189-3.574 6.191 3.574V3.573zM5.81 10.148v8.144c0 1.96.983 3.626 2.44 4.648.482.338 1.894.802 3.432.802 1.502 0 2.898-.455 3.882-1.252.218-.18.436-.367.655-.555.436-.383.805-.833 1.094-1.331.578-.994.85-2.16.85-3.312v-8.144l-6.191 3.574-6.162-3.574z"/></svg>`;

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
    { label: 'GitHub',   icon: ICON_GITHUB,   url: 'https://github.com/desertbarret' },
  ];
});

onMounted(() => {
  if (!profileStore.profile) profileStore.fetch();
});
</script>
