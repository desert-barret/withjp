<template>
  <div class="min-h-screen bg-white dark:bg-dark-950 flex items-center justify-center px-6">
    <div class="text-center">
      <p class="text-8xl font-display font-bold gradient-text mb-6">404</p>
      <h1 class="text-2xl font-display font-bold text-slate-900 dark:text-white mb-3">
        {{ locale === 'es' ? 'Página no encontrada' : 'Page not found' }}
      </h1>
      <p class="text-slate-500 dark:text-slate-400 mb-8">
        {{ locale === 'es' ? 'La página que buscas no existe.' : "The page you're looking for doesn't exist." }}
      </p>
      <router-link to="/" class="btn-primary">
        ← {{ locale === 'es' ? 'Volver al inicio' : 'Back to home' }}
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();
</script>
