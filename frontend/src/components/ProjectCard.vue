<template>
  <button @click="$emit('open', project)" type="button"
    class="gradient-card card-hover group w-full text-left cursor-pointer flex flex-col overflow-hidden">

    <!-- Thumbnail -->
    <div class="relative h-44 overflow-hidden
                bg-gradient-to-br from-indigo-900/80 via-violet-900/60 to-slate-900">
      <div class="absolute inset-0 opacity-20"
        style="background-image: linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),
               linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px);
               background-size: 24px 24px" />

      <!-- Icon -->
      <div class="absolute inset-0 flex items-center justify-center">
        <span class="text-5xl opacity-25 group-hover:opacity-40 group-hover:scale-110
                     transition-all duration-300 select-none">{{ categoryIcon }}</span>
      </div>

      <!-- Category badge -->
      <div class="absolute top-3 left-3">
        <span class="px-2.5 py-1 rounded-lg text-[11px] font-semibold uppercase tracking-wide
                     bg-black/50 backdrop-blur-sm text-white/90 border border-white/10">
          {{ project.category || 'curso' }}
        </span>
      </div>

      <div v-if="project.featured" class="absolute top-3 right-3">
        <div class="w-7 h-7 rounded-full bg-amber-400/90 flex items-center justify-center text-xs shadow-lg">⭐</div>
      </div>

      <!-- Hover overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-transparent to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  flex items-end justify-center pb-4">
        <span class="text-white text-sm font-semibold flex items-center gap-1.5">
          Ver detalle
          <span class="group-hover:translate-x-1 transition-transform inline-block">→</span>
        </span>
      </div>
    </div>

    <!-- Body -->
    <div class="flex flex-col flex-1 p-5">
      <h3 class="font-display font-semibold text-slate-900 dark:text-white text-sm leading-snug mb-2
                 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
        {{ tr.title }}
      </h3>

      <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 flex-1 line-clamp-2">
        {{ tr.short_description || tr.description }}
      </p>

      <!-- Tech tags -->
      <div v-if="project.technologies?.length" class="flex flex-wrap gap-1.5">
        <span v-for="tech in project.technologies.slice(0, 3)" :key="tech" class="tag text-[11px]">
          {{ tech }}
        </span>
        <span v-if="project.technologies.length > 3" class="tag text-[11px] opacity-60">
          +{{ project.technologies.length - 3 }}
        </span>
      </div>
    </div>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useTranslation } from '@/composables/useTranslation';

const props = defineProps<{ project: any }>();
defineEmits<{ open: [project: any] }>();

const { t: tr } = useTranslation(props.project);

const categoryIcon = computed(() => ({
  web: '🌐', automation: '🤖', ai: '🧠', mobile: '📱',
}[props.project.category] || '🚀'));
</script>
