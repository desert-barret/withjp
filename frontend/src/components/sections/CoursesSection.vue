<template>
  <section id="courses" ref="sectionEl" class="section-mesh pt-16 pb-6 md:pt-24 md:pb-8 bg-[#f8f9ff] dark:bg-[#080B14]">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">

      <!-- Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4 md:gap-6
                  reveal" :class="{ visible: visible }">
        <div>
          <span class="tag text-xs mb-3 md:mb-4 inline-flex">{{ t('courses.subtitle') }}</span>
          <h2 class="section-title">{{ t('courses.title') }}</h2>
        </div>

        <!-- Category filter — horizontal scroll on mobile -->
        <div class="-mx-4 sm:mx-0 px-4 sm:px-0 overflow-x-auto pb-1 sm:pb-0">
          <div class="flex gap-2 w-max sm:w-auto sm:flex-wrap">
            <button v-for="cat in categories" :key="cat.value"
              @click="activeCategory = cat.value"
              class="px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 whitespace-nowrap"
              :class="activeCategory === cat.value
                ? 'bg-gradient-to-r from-primary-600 to-violet-600 text-white shadow-lg shadow-primary-500/20'
                : 'border border-slate-200 dark:border-white/[0.08] text-slate-600 dark:text-slate-400 hover:border-primary-400 dark:hover:border-primary-500/50 bg-white dark:bg-white/[0.03]'">
              {{ cat.label }}
            </button>
          </div>
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
        {{ t('courses.no_courses') }}
      </div>

      <!-- Grid -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div v-for="(course, i) in filtered" :key="course.id"
          class="reveal" :class="[{ visible: visible }, `reveal-delay-${Math.min(i + 1, 5)}`]">
          <CourseCard :course="course" @open="openModal" class="h-full" />
        </div>
      </div>
    </div>

    <!-- Modal -->
    <CourseModal :course="selected" @close="selected = null" />
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { coursesApi } from '@/services/api';
import { useReveal } from '@/composables/useReveal';
import CourseCard from '@/components/CourseCard.vue';
import CourseModal from '@/components/CourseModal.vue';

const { t } = useI18n();
const { el: sectionEl, visible } = useReveal(0.05);

const courses = ref<any[]>([]);
const loading = ref(true);
const activeCategory = ref('all');
const selected = ref<any | null>(null);

const categories = computed(() => [
  { value: 'all',        label: t('courses.category.all') },
  { value: 'web',        label: t('courses.category.web') },
  { value: 'automation', label: t('courses.category.automation') },
  { value: 'ai',         label: t('courses.category.ai') },
]);

const filtered = computed(() =>
  activeCategory.value === 'all'
    ? courses.value
    : courses.value.filter(c => c.category === activeCategory.value)
);

function openModal(course: any) {
  selected.value = course;
}

onMounted(async () => {
  try {
    const { data } = await coursesApi.getAll();
    courses.value = data;
  } finally {
    loading.value = false;
  }
});
</script>
