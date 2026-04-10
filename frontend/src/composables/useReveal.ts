import { onMounted, onUnmounted } from 'vue';

export function useReveal(threshold = 0.15) {
  let observer: IntersectionObserver;

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  });

  onUnmounted(() => observer?.disconnect());
}
