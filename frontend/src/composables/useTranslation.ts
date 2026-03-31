import { computed, toValue, type MaybeRefOrGetter } from 'vue';
import { useI18n } from 'vue-i18n';

export interface Translation {
  locale: string;
  title: string;
  description: string;
  short_description?: string;
}

export interface Translatable {
  translations?: Translation[];
}

export function useTranslation(item: MaybeRefOrGetter<Translatable | null | undefined>) {
  const { locale } = useI18n();

  const t = computed<Translation>(() => {
    const list = toValue(item)?.translations ?? [];
    return (
      list.find((t) => t.locale === locale.value) ||
      list.find((t) => t.locale === 'es') ||
      list[0] || { locale: 'es', title: '', description: '', short_description: '' }
    );
  });

  return { t };
}
