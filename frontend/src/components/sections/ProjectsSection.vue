<template>
  <section id="projects" ref="sectionEl" class="py-24 bg-slate-50/50 dark:bg-[#080B14]">
    <div class="max-w-6xl mx-auto px-6">

      <!-- Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6
                  reveal" :class="{ visible: visible }">
        <div>
          <span class="tag text-xs mb-4 inline-flex">{{ t('projects.subtitle') }}</span>
          <h2 class="section-title">{{ t('projects.title') }}</h2>
        </div>

        <!-- Category filter -->
        <div class="flex flex-wrap gap-2">
          <button v-for="cat in categories" :key="cat.value"
            @click="activeCategory = cat.value"
            class="px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200"
            :class="activeCategory === cat.value
              ? 'bg-gradient-to-r from-primary-600 to-violet-600 text-white shadow-lg shadow-primary-500/20'
              : 'border border-slate-200 dark:border-white/[0.08] text-slate-600 dark:text-slate-400 hover:border-primary-400 dark:hover:border-primary-500/50 bg-white dark:bg-white/[0.03]'">
            {{ cat.label }}
          </button>
        </div>
      </div>

      <!-- Loading skeleton -->
      <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div v-for="i in 3" :key="i"
          class="rounded-2xl bg-slate-200 dark:bg-white/5 animate-pulse h-72" />
      </div>

      <!-- Empty -->
      <div v-else-if="filtered.length === 0"
        class="text-center py-20 text-slate-400 dark:text-slate-500 text-lg">
        {{ t('projects.no_projects') }}
      </div>

      <!-- Grid -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div v-for="(project, i) in filtered" :key="project.id"
          class="reveal" :class="[{ visible: visible }, `reveal-delay-${Math.min(i + 1, 5)}`]">
          <ProjectCard :project="project" @open="openModal" class="h-full" />
        </div>
      </div>
    </div>

    <!-- Modal -->
    <ProjectModal :project="selected" @close="selected = null" />
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { projectsApi } from '@/services/api';
import { useReveal } from '@/composables/useReveal';
import ProjectCard from '@/components/ProjectCard.vue';
import ProjectModal from '@/components/ProjectModal.vue';

const { t } = useI18n();
const { el: sectionEl, visible } = useReveal(0.05);

const projects = ref<any[]>([]);
const loading = ref(true);
const activeCategory = ref('all');
const selected = ref<any | null>(null);

const categories = computed(() => [
  { value: 'all',        label: t('projects.category.all') },
  { value: 'web',        label: t('projects.category.web') },
  { value: 'automation', label: t('projects.category.automation') },
  { value: 'ai',         label: t('projects.category.ai') },
]);

const filtered = computed(() =>
  activeCategory.value === 'all'
    ? projects.value
    : projects.value.filter(p => p.category === activeCategory.value)
);

function openModal(project: any) {
  selected.value = project;
}

onMounted(async () => {
  try {
    const { data } = await projectsApi.getAll();
    projects.value = data;
  } finally {
    loading.value = false;
  }
});
</script>
