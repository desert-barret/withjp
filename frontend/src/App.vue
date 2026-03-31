<template>
  <RouterView />
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useThemeStore } from '@/stores/theme';

useThemeStore();

// Reload the page if it returns from background after 30+ minutes.
// This prevents stale Vue state on mobile when the browser suspends the tab.
const STALE_MS = 30 * 60 * 1000;
let hiddenAt = 0;

function onVisibilityChange() {
  if (document.hidden) {
    hiddenAt = Date.now();
  } else if (hiddenAt && Date.now() - hiddenAt > STALE_MS) {
    window.location.reload();
  }
}

onMounted(() => document.addEventListener('visibilitychange', onVisibilityChange));
onUnmounted(() => document.removeEventListener('visibilitychange', onVisibilityChange));
</script>
