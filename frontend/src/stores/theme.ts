import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useThemeStore = defineStore('theme', () => {
  const saved = localStorage.getItem('withjp_theme') as 'dark' | 'light' | null;
  const isDark = ref(saved !== 'light');

  function apply() {
    if (isDark.value) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('withjp_theme', isDark.value ? 'dark' : 'light');
  }

  function toggle() {
    isDark.value = !isDark.value;
    apply();
  }

  apply();

  return { isDark, toggle };
});
