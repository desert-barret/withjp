import { onMounted, onUnmounted, nextTick } from 'vue';

export function useReveal(threshold = 0.15) {
  let intersectionObserver: IntersectionObserver;
  let mutationObserver: MutationObserver;
  const observed = new WeakSet<Element>();

  function observe(el: Element) {
    if (!observed.has(el)) {
      observed.add(el);
      intersectionObserver.observe(el);
    }
  }

  function scanAll() {
    document.querySelectorAll<Element>('.reveal').forEach(observe);
  }

  onMounted(async () => {
    intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            intersectionObserver.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    await nextTick();
    scanAll();

    mutationObserver = new MutationObserver(scanAll);
    mutationObserver.observe(document.body, { childList: true, subtree: true });
  });

  onUnmounted(() => {
    intersectionObserver?.disconnect();
    mutationObserver?.disconnect();
  });
}
