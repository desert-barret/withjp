<template>
  <footer class="bg-white dark:bg-dark-900 border-t border-slate-200 dark:border-slate-800">
    <div class="max-w-6xl mx-auto px-6 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <!-- Brand -->
        <div>
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
              <span class="text-white font-bold text-sm">JP</span>
            </div>
            <span class="font-display font-bold text-slate-900 dark:text-white">withjp<span class="text-primary-500">.ai</span></span>
          </div>
          <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {{ profile?.bio_es || 'Full Stack Developer & Content Creator' }}
          </p>
        </div>

        <!-- Links -->
        <div>
          <h4 class="font-semibold text-slate-900 dark:text-white mb-4">Links</h4>
          <div class="space-y-2">
            <a href="#about" class="block text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">{{ t('nav.about') }}</a>
            <a href="#projects" class="block text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">{{ t('nav.projects') }}</a>
            <a href="#courses" class="block text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">{{ t('nav.courses') }}</a>
            <a href="#contact" class="block text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">{{ t('nav.contact') }}</a>
          </div>
        </div>

        <!-- Social -->
        <div>
          <h4 class="font-semibold text-slate-900 dark:text-white mb-4">Social</h4>
          <div class="flex flex-wrap gap-3">
            <a
              v-for="link in socialLinks"
              :key="link.label"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 px-3 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg text-sm font-medium transition-colors"
            >
              <span>{{ link.icon }}</span>
              {{ link.label }}
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-sm text-slate-500 dark:text-slate-500">
          © {{ new Date().getFullYear() }} Juan Pablo Guaman. {{ t('footer.rights') }}.
        </p>
        <p class="text-sm text-slate-500 dark:text-slate-500">
          {{ t('footer.made_with') }} ❤️ {{ t('footer.by') }} JP
        </p>
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

const profile = computed(() => profileStore.profile);

const socialLinks = computed(() => {
  const p = profileStore.profile;
  const links = [];
  if (p?.linkedin_url) links.push({ label: 'LinkedIn', icon: '💼', url: p.linkedin_url });
  if (p?.github_url) links.push({ label: 'GitHub', icon: '🐙', url: p.github_url });
  if (p?.youtube_url) links.push({ label: 'YouTube', icon: '▶️', url: p.youtube_url });
  if (p?.udemy_url) links.push({ label: 'Udemy', icon: '🎓', url: p.udemy_url });
  return links.length ? links : [
    { label: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/desertbarret/' },
    { label: 'YouTube', icon: '▶️', url: 'https://www.youtube.com/@jp.desertbarret' },
    { label: 'Udemy', icon: '🎓', url: 'https://www.udemy.com/user/juan-pablo-guaman-rodriguez/' },
  ];
});

onMounted(() => {
  if (!profileStore.profile) profileStore.fetch();
});
</script>
