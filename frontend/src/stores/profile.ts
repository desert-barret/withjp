import { defineStore } from 'pinia';
import { ref } from 'vue';
import { profileApi } from '@/services/api';

export interface Profile {
  id: number;
  name: string;
  title_es: string;
  title_en: string;
  bio_es: string;
  bio_en: string;
  avatar_url: string;
  location_es: string;
  location_en: string;
  email: string;
  linkedin_url: string;
  github_url: string;
  youtube_url: string;
  udemy_url: string;
  skills: string[];
  technologies: string[];
}

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<Profile | null>(null);
  const loading = ref(false);

  async function fetch() {
    loading.value = true;
    try {
      const { data } = await profileApi.get();
      profile.value = data;
    } finally {
      loading.value = false;
    }
  }

  async function update(data: Partial<Profile>) {
    const { data: updated } = await profileApi.update(data);
    profile.value = updated;
  }

  return { profile, loading, fetch, update };
});
