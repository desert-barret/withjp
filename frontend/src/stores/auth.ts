import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { authApi } from '@/services/api';

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(localStorage.getItem('withjp_token'));
  const user = ref<{ id: number; email: string; role: string } | null>(null);

  const isAuthenticated = computed(() => !!token.value);

  async function login(email: string, password: string) {
    const { data } = await authApi.login(email, password);
    token.value = data.access_token;
    user.value = data.user;
    localStorage.setItem('withjp_token', data.access_token);
  }

  async function fetchMe() {
    if (!token.value) return;
    try {
      const { data } = await authApi.me();
      user.value = data;
    } catch {
      logout();
    }
  }

  function logout() {
    token.value = null;
    user.value = null;
    localStorage.removeItem('withjp_token');
  }

  return { token, user, isAuthenticated, login, fetchMe, logout };
});
