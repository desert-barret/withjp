<template>
  <component
    :is="item.subdomain_url ? 'a' : 'div'"
    v-bind="item.subdomain_url
      ? { href: item.subdomain_url, target: '_blank', rel: 'noopener noreferrer' }
      : {}"
    class="academia-card group relative flex flex-col w-full h-[320px] rounded-2xl overflow-hidden
           select-none outline-none cursor-pointer"
    :style="`--accent: ${c.mid}`">

    <!-- Gradient border (1 px) -->
    <div class="absolute inset-0 rounded-2xl transition-opacity duration-400"
      :class="item.subdomain_url ? 'opacity-50 group-hover:opacity-100' : 'opacity-25 group-hover:opacity-40'"
      :style="`background:linear-gradient(145deg,${c.from},${c.mid},${c.to})`">
      <div class="absolute inset-[1px] rounded-[15px] bg-white dark:bg-[#0d1025]" />
    </div>

    <!-- Banner -->
    <div class="relative z-10 h-[140px] flex-shrink-0 flex items-center justify-center overflow-hidden"
      :style="`background:linear-gradient(145deg,${c.bg1},${c.bg2})`">

      <!-- Dot texture -->
      <div class="absolute inset-0 opacity-[0.07]"
        style="background-image:radial-gradient(circle,rgba(255,255,255,0.9)_1px,transparent_1px);background-size:16px_16px" />

      <!-- Glow -->
      <div class="absolute inset-0 opacity-30 group-hover:opacity-55 transition-opacity duration-400"
        :style="`background:radial-gradient(circle at 50% 70%,${c.glow},transparent 60%)`" />

      <!-- Academy image (when provided) -->
      <img v-if="item.image_url"
        :src="item.image_url"
        :alt="tr.title"
        class="absolute inset-0 w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
      />

      <!-- Icon (fallback when no image) -->
      <span v-else class="relative text-[56px] z-10 transition-transform duration-400 ease-out
                   group-hover:scale-110 group-hover:-translate-y-1"
        :style="`filter:drop-shadow(0 0 16px ${c.glow})`">
        {{ icon }}
      </span>

      <!-- Badge -->
      <span v-if="item.badge"
        class="absolute top-3 right-3 px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-widest border"
        :style="`background:${c.badgeBg};border-color:${c.badgeBorder};color:${c.badgeText}`">
        {{ item.badge }}
      </span>

      <!-- Coming soon overlay -->
      <div v-if="!item.subdomain_url"
        class="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center">
        <span class="text-[10px] font-bold uppercase tracking-widest text-white/60
                     border border-white/20 px-3 py-1 rounded-lg bg-black/20">
          {{ t('academia.coming_soon') }}
        </span>
      </div>
    </div>

    <!-- Body -->
    <div class="relative z-10 flex flex-col flex-1 px-4 pt-3.5 pb-4
                bg-white dark:bg-[#0d1025]">

      <h3 class="academia-card__title font-display font-bold text-[13px] leading-snug
                 text-slate-900 dark:text-white mb-1.5 line-clamp-2
                 transition-colors duration-300">
        {{ tr.title }}
      </h3>

      <p class="text-slate-500 dark:text-slate-500 text-[11px] leading-relaxed flex-1 line-clamp-2 mb-3">
        {{ tr.short_description || tr.description }}
      </p>

      <!-- Tech pills -->
      <div v-if="item.technologies?.length" class="flex flex-wrap gap-1 mb-3">
        <span v-for="tech in item.technologies.slice(0, 3)" :key="tech"
          class="px-1.5 py-0.5 rounded text-[9px] font-medium
                 border border-slate-200 dark:border-white/[0.07]
                 text-slate-500 dark:text-white/40
                 bg-slate-50 dark:bg-white/[0.03]">
          {{ tech }}
        </span>
        <span v-if="item.technologies.length > 3"
          class="text-[9px] text-slate-400 dark:text-white/25 self-center">
          +{{ item.technologies.length - 3 }}
        </span>
      </div>

      <!-- CTA -->
      <div class="flex items-center justify-between">
        <span v-if="item.subdomain_url"
          class="flex items-center gap-1.5 text-[11px] font-semibold transition-all duration-300
                 group-hover:gap-2"
          :style="`color:${c.mid}`">
          {{ t('academia.access') }}
          <svg class="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
            stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </span>
        <span v-else class="text-[10px] text-slate-400 dark:text-white/25 italic">
          {{ t('academia.coming_soon') }}
        </span>

        <div v-if="item.featured"
          class="w-5 h-5 rounded-full flex items-center justify-center
                 bg-amber-100 dark:bg-amber-400/10
                 border border-amber-200 dark:border-amber-400/20">
          <svg class="w-2.5 h-2.5 text-amber-500 dark:text-amber-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
      </div>
    </div>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useTranslation } from '@/composables/useTranslation';

const props = defineProps<{ item: any }>();
const { t } = useI18n();
const { t: tr } = useTranslation(props.item);

const icon = computed(() => ({
  ai: '🧠', web: '🌐', mobile: '📱', automation: '🤖',
}[props.item.category] || '🎓'));

const PALETTES: Record<string, any> = {
  ai: {
    from: '#7c3aed', mid: '#a78bfa', to: '#4f46e5',
    bg1: '#12083a', bg2: '#1a0d50',
    glow: 'rgba(139,92,246,0.55)',
    badgeBg: 'rgba(139,92,246,0.18)', badgeBorder: 'rgba(167,139,250,0.3)', badgeText: '#c4b5fd',
  },
  web: {
    from: '#0284c7', mid: '#38bdf8', to: '#0891b2',
    bg1: '#041828', bg2: '#062540',
    glow: 'rgba(56,189,248,0.5)',
    badgeBg: 'rgba(56,189,248,0.15)', badgeBorder: 'rgba(125,211,252,0.25)', badgeText: '#7dd3fc',
  },
  mobile: {
    from: '#059669', mid: '#34d399', to: '#0d9488',
    bg1: '#041a12', bg2: '#062a1c',
    glow: 'rgba(52,211,153,0.5)',
    badgeBg: 'rgba(52,211,153,0.15)', badgeBorder: 'rgba(110,231,183,0.25)', badgeText: '#6ee7b7',
  },
  automation: {
    from: '#d97706', mid: '#fb923c', to: '#dc2626',
    bg1: '#200d00', bg2: '#311200',
    glow: 'rgba(251,146,60,0.5)',
    badgeBg: 'rgba(251,146,60,0.15)', badgeBorder: 'rgba(253,186,116,0.25)', badgeText: '#fdba74',
  },
};

const c = computed(() => PALETTES[props.item.category] ?? PALETTES.ai);
</script>

<style scoped>
.academia-card {
  transition:
    transform 0.35s cubic-bezier(0.22,1,0.36,1),
    box-shadow 0.35s cubic-bezier(0.22,1,0.36,1);
}
.academia-card:hover {
  transform: translateY(-6px);
  box-shadow:
    0 20px 40px -12px rgba(0,0,0,0.12),
    0 0 0 1px rgba(var(--accent-rgb, 139,92,246), 0.06);
}
:global(.dark) .academia-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 24px 48px -12px rgba(0,0,0,0.55);
}

/* Title accent on hover */
.academia-card:hover .academia-card__title {
  color: var(--accent);
}
</style>
