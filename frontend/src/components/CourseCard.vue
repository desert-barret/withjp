<template>
  <button @click="$emit('open', course)" type="button"
    class="project-card gradient-card card-hover group w-full text-left cursor-pointer flex flex-col overflow-hidden">

    <!-- Thumbnail -->
    <div class="relative h-36 sm:h-44 overflow-hidden
                bg-gradient-to-br from-indigo-900/80 via-violet-900/60 to-slate-900">
      <div class="absolute inset-0 opacity-20"
        style="background-image: linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),
               linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px);
               background-size: 24px 24px" />

      <!-- Course image (when provided) -->
      <img v-if="course.image_url"
        :src="course.image_url"
        :alt="tr.title"
        class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <!-- Category icon (fallback when no image) -->
      <div v-else class="absolute inset-0 flex items-center justify-center">
        <span class="text-5xl opacity-25 group-hover:opacity-45 group-hover:scale-110
                     transition-all duration-500 ease-out select-none">{{ categoryIcon }}</span>
      </div>

      <!-- Category badge -->
      <div class="absolute top-3 left-3">
        <span class="px-2.5 py-1 rounded-lg text-[11px] font-semibold uppercase tracking-wide
                     bg-black/50 backdrop-blur-sm text-white/90 border border-white/10">
          {{ course.category || 'curso' }}
        </span>
      </div>

      <!-- Featured star -->
      <div v-if="course.featured" class="absolute top-3 right-3">
        <div class="w-7 h-7 rounded-full bg-amber-400/90 flex items-center justify-center shadow-lg
                    group-hover:scale-110 transition-transform duration-300">
          <svg class="w-3.5 h-3.5 text-amber-900" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        </div>
      </div>

      <!-- Hover overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-transparent to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  flex items-end justify-center pb-4">
        <span class="text-white text-sm font-semibold flex items-center gap-1.5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          Ver detalle
          <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </span>
      </div>
    </div>

    <!-- Body -->
    <div class="flex flex-col flex-1 p-5">
      <h3 class="font-display font-semibold text-slate-900 dark:text-white text-sm leading-snug mb-2
                 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200 line-clamp-2">
        {{ tr.title }}
      </h3>

      <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 flex-1 line-clamp-2">
        {{ tr.short_description || tr.description }}
      </p>

      <!-- Tech tags -->
      <div v-if="course.technologies?.length" class="flex flex-wrap gap-1.5">
        <span v-for="tech in course.technologies.slice(0, 3)" :key="tech" class="tag text-[11px]">
          {{ tech }}
        </span>
        <span v-if="course.technologies.length > 3" class="tag text-[11px] opacity-60">
          +{{ course.technologies.length - 3 }}
        </span>
      </div>
    </div>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useTranslation } from '@/composables/useTranslation';

const props = defineProps<{ course: any }>();
defineEmits<{ open: [course: any] }>();

const { t: tr } = useTranslation(props.course);

const categoryIcon = computed(() => ({
  web: '🌐', automation: '🤖', ai: '🧠', mobile: '📱',
} as Record<string, string>)[props.course.category] || '🚀');
</script>

<style scoped>
.project-card {
  transition:
    box-shadow 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    transform  0.35s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.35s ease;
}
.project-card:hover {
  transform: translateY(-6px);
}
</style>
