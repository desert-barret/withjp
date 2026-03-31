<template>
  <section id="academy" class="section-mesh relative pt-4 pb-6 md:pt-5 md:pb-8 bg-[#f8f9ff] dark:bg-[#080B14]">

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">

      <!-- Header — siempre visible (no reveal: el observer no está conectado) -->
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
        <h2 class="section-title">{{ t('academia.title') }}</h2>
        <p class="text-slate-500 dark:text-slate-400 text-sm max-w-xs leading-relaxed hidden sm:block">
          {{ t('academia.subtitle') }}
        </p>
      </div>

      <!-- Loading -->
      <div v-if="loading" class="flex flex-wrap justify-center gap-5">
        <div v-for="i in 3" :key="i"
          class="w-[280px] h-[320px] rounded-2xl
                 bg-slate-200 dark:bg-white/[0.03]
                 border border-slate-100 dark:border-white/[0.05]
                 animate-pulse" />
      </div>

      <!-- Empty -->
      <p v-else-if="items.length === 0"
        class="text-slate-500 dark:text-slate-500 text-sm py-10 text-center">
        {{ t('academia.no_items') }}
      </p>

      <!-- Carousel -->
      <div v-else class="relative">

        <button v-show="canScrollLeft" @click="scroll(-1)"
          class="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10
                 w-9 h-9 items-center justify-center rounded-full
                 bg-slate-900/[0.06] dark:bg-white/[0.07]
                 border border-slate-900/[0.08] dark:border-white/[0.1]
                 text-slate-500 dark:text-white/60
                 hover:bg-violet-500/10 hover:border-violet-400/40 hover:text-violet-600
                 dark:hover:bg-violet-500/15 dark:hover:border-violet-500/30 dark:hover:text-white
                 transition-all duration-200">
          <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>

        <div ref="trackEl"
          class="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-3 -mx-4 px-4 md:mx-0 md:px-0"
          :class="isCentered ? 'justify-center' : ''"
          style="scrollbar-width:none;-ms-overflow-style:none;overscroll-behavior-x:contain"
          @scroll="onScroll">
          <div v-for="item in items" :key="item.id"
            class="flex-shrink-0 w-[280px] snap-start">
            <AcademiaCard :item="item" />
          </div>
        </div>

        <button v-show="canScrollRight" @click="scroll(1)"
          class="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10
                 w-9 h-9 items-center justify-center rounded-full
                 bg-slate-900/[0.06] dark:bg-white/[0.07]
                 border border-slate-900/[0.08] dark:border-white/[0.1]
                 text-slate-500 dark:text-white/60
                 hover:bg-violet-500/10 hover:border-violet-400/40 hover:text-violet-600
                 dark:hover:bg-violet-500/15 dark:hover:border-violet-500/30 dark:hover:text-white
                 transition-all duration-200">
          <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>

        <!-- Dots -->
        <div class="flex justify-center gap-1.5 mt-4">
          <button v-for="(_, i) in items" :key="i" @click="scrollTo(i)"
            class="h-1 rounded-full transition-all duration-300"
            :class="activeIndex === i
              ? 'w-5 bg-violet-500 dark:bg-violet-400'
              : 'w-1 bg-slate-300 dark:bg-white/20 hover:bg-slate-400 dark:hover:bg-white/40'" />
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { academiaApi } from '@/services/api';
import AcademiaCard from '@/components/AcademiaCard.vue';

const { t } = useI18n();

const items          = ref<any[]>([]);
const loading        = ref(true);
const trackEl        = ref<HTMLElement | null>(null);
const activeIndex    = ref(0);
const canScrollLeft  = ref(false);
const canScrollRight = ref(false);

const CARD_W = 280 + 20;

const isCentered = computed(() => items.value.length <= 3);

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

onMounted(async () => {
  try {
    const { data } = await academiaApi.getAll();
    items.value = data;
  } finally {
    loading.value = false;
    setTimeout(onScroll, 80);
  }
});
</script>
