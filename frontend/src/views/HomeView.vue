<template>
  <div>
    <HeroSection />
    <AboutSection />
    <CoursesSection />

    <!-- ── Courses → Academia bridge ─────────────────────────── -->
    <div class="relative bg-[#f8f9ff] dark:bg-[#080B14] overflow-hidden">

      <!-- Violet glow bloom -->
      <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                  w-[500px] h-[80px] pointer-events-none
                  bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.09),transparent_70%)]
                  dark:bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.12),transparent_70%)]" />

      <div class="relative max-w-6xl mx-auto px-4 sm:px-6 py-4 md:py-5
                  flex items-center gap-5">

        <!-- Left line -->
        <div class="flex-1 h-px
                    bg-gradient-to-r from-transparent
                    via-violet-300/50 dark:via-violet-500/20
                    to-violet-300/30 dark:to-violet-500/10" />

        <!-- Center pill -->
        <div class="flex-shrink-0 flex items-center gap-2.5
                    px-5 py-2 rounded-full
                    bg-white dark:bg-violet-950/30
                    border border-violet-200/80 dark:border-violet-500/25
                    shadow-[0_2px_16px_rgba(139,92,246,0.08)] dark:shadow-[0_0_20px_rgba(139,92,246,0.08)]">
          <span class="w-1.5 h-1.5 rounded-full bg-violet-500 dark:bg-violet-400 animate-pulse" />
          <span class="text-[11px] font-bold uppercase tracking-[0.12em]
                       text-violet-600 dark:text-violet-300">
            Academia JP
          </span>
          <span class="w-1.5 h-1.5 rounded-full bg-violet-500 dark:bg-violet-400 animate-pulse" />
        </div>

        <!-- Right line -->
        <div class="flex-1 h-px
                    bg-gradient-to-l from-transparent
                    via-violet-300/50 dark:via-violet-500/20
                    to-violet-300/30 dark:to-violet-500/10" />

      </div>
    </div>

    <AcademiaSection />
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue';
import AboutSection from '@/components/sections/AboutSection.vue';
import CoursesSection from '@/components/sections/CoursesSection.vue';
import AcademiaSection from '@/components/sections/AcademiaSection.vue';
import ContactSection from '@/components/sections/ContactSection.vue';
</script>
