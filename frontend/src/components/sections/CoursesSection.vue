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

        <!-- Category filters -->
        <div class="-mx-4 sm:mx-0 px-4 sm:px-0 overflow-x-auto pb-1 sm:pb-0">
          <div class="flex gap-2 w-max sm:w-auto sm:flex-wrap">
            <button v-for="cat in categories" :key="cat.value"
              @click="setCategory(cat.value)"
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
      <div v-if="loading" class="flex gap-5 overflow-hidden -mx-4 px-4 md:mx-0 md:px-0">
        <div v-for="i in 3" :key="i"
          class="flex-shrink-0 w-[300px] rounded-2xl bg-slate-200 dark:bg-white/5 animate-pulse h-72" />
      </div>

      <!-- Empty -->
      <div v-else-if="filtered.length === 0"
        class="text-center py-20 text-slate-400 dark:text-slate-500 text-lg">
        {{ t('courses.no_courses') }}
      </div>

      <!-- ===== CAROUSEL ===== -->
      <div v-else class="relative">

        <!-- Prev button -->
        <button v-show="canScrollLeft" @click="scroll(-1)"
          class="hidden md:flex absolute -left-5 top-[calc(50%-28px)] z-10
                 w-11 h-11 items-center justify-center rounded-full
                 bg-white dark:bg-[#0d1322]
                 border border-slate-200 dark:border-white/10
                 text-slate-500 dark:text-white/60 shadow-lg
                 hover:bg-primary-50 hover:border-primary-400/50 hover:text-primary-600
                 dark:hover:bg-white/[0.1] dark:hover:border-white/20 dark:hover:text-white
                 hover:scale-110 active:scale-95
                 transition-all duration-200">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>

        <!-- Track -->
        <div ref="trackEl"
          class="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-3 -mx-4 px-4 md:mx-0 md:px-0"
          :class="isCentered ? 'md:justify-center' : ''"
          style="scrollbar-width:none;-ms-overflow-style:none"
          @scroll="onScroll">
          <div v-for="course in filtered" :key="course.id"
            class="flex-shrink-0 w-[288px] sm:w-[310px] snap-start">
            <CourseCard :course="course" @open="openModal" class="h-full" />
          </div>
        </div>

        <!-- Next button -->
        <button v-show="canScrollRight" @click="scroll(1)"
          class="hidden md:flex absolute -right-5 top-[calc(50%-28px)] z-10
                 w-11 h-11 items-center justify-center rounded-full
                 bg-white dark:bg-[#0d1322]
                 border border-slate-200 dark:border-white/10
                 text-slate-500 dark:text-white/60 shadow-lg
                 hover:bg-primary-50 hover:border-primary-400/50 hover:text-primary-600
                 dark:hover:bg-white/[0.1] dark:hover:border-white/20 dark:hover:text-white
                 hover:scale-110 active:scale-95
                 transition-all duration-200">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>

        <!-- Dots -->
        <div class="flex justify-center gap-1.5 mt-5">
          <button v-for="(_, i) in filtered" :key="i" @click="scrollTo(i)"
            class="h-1.5 rounded-full transition-all duration-300"
            :class="activeIndex === i
              ? 'w-6 bg-primary-500 dark:bg-primary-400'
              : 'w-1.5 bg-slate-300 dark:bg-white/20 hover:bg-slate-400 dark:hover:bg-white/40'" />
        </div>
      </div>

    </div>

    <!-- Modal -->
    <CourseModal :course="selected" @close="selected = null" />
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue';
import { useI18n } from 'vue-i18n';
import { coursesApi } from '@/services/api';
import { useReveal } from '@/composables/useReveal';
import CourseCard from '@/components/CourseCard.vue';
import CourseModal from '@/components/CourseModal.vue';

const { t } = useI18n();
const { el: sectionEl, visible } = useReveal(0.05);

const courses        = ref<any[]>([]);
const loading        = ref(true);
const activeCategory = ref('all');
const selected       = ref<any | null>(null);

const trackEl        = ref<HTMLElement | null>(null);
const activeIndex    = ref(0);
const canScrollLeft  = ref(false);
const canScrollRight = ref(false);
const CARD_W         = 310 + 20; // card width + gap

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

const isCentered = computed(() => filtered.value.length <= 3);

function onScroll() {
  const el = trackEl.value;
  if (!el) return;
  canScrollLeft.value  = el.scrollLeft > 8;
  canScrollRight.value = el.scrollLeft < el.scrollWidth - el.clientWidth - 8;
  activeIndex.value    = Math.round(el.scrollLeft / CARD_W);
}

function scroll(dir: -1 | 1) {
  trackEl.value?.scrollBy({ left: dir * CARD_W, behavior: 'smooth' });
}

function scrollTo(idx: number) {
  trackEl.value?.scrollTo({ left: idx * CARD_W, behavior: 'smooth' });
}

function setCategory(val: string) {
  activeCategory.value = val;
  nextTick(() => {
    trackEl.value?.scrollTo({ left: 0, behavior: 'instant' });
    setTimeout(onScroll, 80);
  });
}

function openModal(course: any) {
  selected.value = course;
}

onMounted(async () => {
  try {
    const { data } = await coursesApi.getAll();
    courses.value = data;
  } finally {
    loading.value = false;
    setTimeout(onScroll, 80);
  }
});
</script>
