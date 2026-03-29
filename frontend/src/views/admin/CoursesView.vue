<template>
  <div>
    <!-- Header -->
    <div class="flex items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
      <div>
        <h1 class="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">Cursos</h1>
        <p class="text-slate-500 dark:text-slate-400 mt-0.5 text-sm">
          {{ courses.length }} curso{{ courses.length !== 1 ? 's' : '' }} registrado{{ courses.length !== 1 ? 's' : '' }}
        </p>
      </div>
      <button @click="openModal()"
        class="btn-primary flex-shrink-0 text-sm py-2.5 gap-2">
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        Nuevo curso
      </button>
    </div>

    <!-- Loading -->
    <div v-if="loading" class="flex justify-center py-20">
      <div class="w-8 h-8 border-2 border-primary-500/20 border-t-primary-500 rounded-full animate-spin" />
    </div>

    <!-- Table -->
    <div v-else class="card overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="border-b border-slate-200/80 dark:border-white/[0.06] bg-slate-50/50 dark:bg-white/[0.01]">
              <th class="text-left px-5 py-3.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Curso
              </th>
              <th class="text-left px-5 py-3.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider hidden md:table-cell">
                Tecnologías
              </th>
              <th class="text-left px-5 py-3.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider hidden lg:table-cell">
                Estado
              </th>
              <th class="px-5 py-3.5 w-20" />
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 dark:divide-white/[0.04]">
            <tr v-for="course in courses" :key="course.id"
              class="group hover:bg-slate-50/80 dark:hover:bg-white/[0.025] transition-colors duration-150">

              <!-- Course name -->
              <td class="px-5 py-4">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center text-lg
                              bg-gradient-to-br from-primary-500/15 to-violet-500/15
                              ring-1 ring-inset ring-primary-500/10">
                    {{ catIcon(course.category) }}
                  </div>
                  <div class="min-w-0">
                    <p class="font-medium text-slate-900 dark:text-white text-sm leading-tight truncate max-w-[200px] sm:max-w-xs">
                      {{ getTitle(course, 'es') }}
                    </p>
                    <p class="text-xs text-slate-400 dark:text-slate-500 mt-0.5 truncate max-w-[200px] sm:max-w-xs">
                      {{ getTitle(course, 'en') }}
                    </p>
                  </div>
                </div>
              </td>

              <!-- Tech -->
              <td class="px-5 py-4 hidden md:table-cell">
                <div class="flex flex-wrap gap-1">
                  <span v-for="tech in (course.technologies || []).slice(0, 2)" :key="tech" class="tag text-[10px]">
                    {{ tech }}
                  </span>
                  <span v-if="(course.technologies || []).length > 2" class="tag text-[10px] opacity-50">
                    +{{ course.technologies.length - 2 }}
                  </span>
                </div>
              </td>

              <!-- Status -->
              <td class="px-5 py-4 hidden lg:table-cell">
                <div class="flex items-center gap-2">
                  <span class="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full"
                    :class="course.active
                      ? 'bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400'
                      : 'bg-slate-100 dark:bg-white/[0.05] text-slate-500 dark:text-slate-400'">
                    <span class="w-1.5 h-1.5 rounded-full"
                          :class="course.active ? 'bg-emerald-500' : 'bg-slate-400'" />
                    {{ course.active ? 'Activo' : 'Inactivo' }}
                  </span>
                  <span v-if="course.featured"
                    class="flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded-full
                           bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400">
                    <svg class="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    Top
                  </span>
                </div>
              </td>

              <!-- Actions -->
              <td class="px-5 py-4">
                <div class="flex items-center gap-1 justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                  <button @click="openModal(course)"
                    class="w-8 h-8 flex items-center justify-center rounded-lg
                           text-slate-400 hover:text-primary-600 dark:hover:text-primary-400
                           hover:bg-primary-50 dark:hover:bg-primary-500/10 transition-colors">
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                  </button>
                  <button @click="confirmDelete(course)"
                    class="w-8 h-8 flex items-center justify-center rounded-lg
                           text-slate-400 hover:text-red-600 dark:hover:text-red-400
                           hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors">
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
                  </button>
                </div>
              </td>
            </tr>

            <tr v-if="projects.length === 0">
              <td colspan="4" class="px-6 py-16 text-center">
                <div class="flex flex-col items-center gap-3">
                  <div class="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/[0.05] flex items-center justify-center">
                    <svg class="w-6 h-6 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                  </div>
                  <p class="text-sm text-slate-400 dark:text-slate-500">Sin cursos todavía.</p>
                  <button @click="openModal()" class="text-sm text-primary-600 dark:text-primary-400 hover:underline font-medium">
                    Crear el primero →
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- ── Edit / Create Modal ──────────────────────────────── -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="showModal" class="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="closeModal" />

          <div class="relative w-full sm:max-w-2xl max-h-[92vh] overflow-y-auto
                      bg-white dark:bg-[#0d1117]
                      rounded-t-3xl sm:rounded-2xl
                      shadow-2xl shadow-black/20
                      border-t sm:border border-slate-200/80 dark:border-white/[0.07]">

            <!-- Modal header -->
            <div class="sticky top-0 z-10 flex items-center justify-between px-5 sm:px-6 py-4
                        bg-white dark:bg-[#0d1117]
                        border-b border-slate-200/80 dark:border-white/[0.07]">
              <!-- Drag handle (mobile) -->
              <div class="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-slate-300 dark:bg-slate-600 sm:hidden" />
              <h2 class="font-display font-bold text-base text-slate-900 dark:text-white">
                {{ form.id ? 'Editar curso' : 'Nuevo curso' }}
              </h2>
              <button @click="closeModal"
                class="w-8 h-8 flex items-center justify-center rounded-xl
                       text-slate-400 hover:text-slate-600 dark:hover:text-slate-200
                       hover:bg-slate-100 dark:hover:bg-white/[0.08] transition-colors">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>

            <form @submit.prevent="handleSave" class="p-5 sm:p-6 space-y-6">

              <!-- Language tabs -->
              <div>
                <div class="flex gap-1 p-1 bg-slate-100 dark:bg-white/[0.05] rounded-xl w-fit mb-5 border border-slate-200/60 dark:border-white/[0.05]">
                  <button v-for="loc in ['es', 'en']" :key="loc" type="button"
                    @click="activeLocale = loc"
                    class="px-5 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200"
                    :class="activeLocale === loc
                      ? 'bg-white dark:bg-white/10 text-slate-900 dark:text-white shadow-sm'
                      : 'text-slate-500 dark:text-slate-400'">
                    {{ loc === 'es' ? '🇪🇸 Español' : '🇺🇸 English' }}
                  </button>
                </div>

                <div v-for="loc in ['es', 'en']" :key="loc" v-show="activeLocale === loc" class="space-y-4">
                  <div>
                    <label class="label">Título ({{ loc.toUpperCase() }})</label>
                    <input v-model="form.translations[loc].title" type="text" class="input" required />
                  </div>
                  <div>
                    <label class="label">Descripción corta ({{ loc.toUpperCase() }})</label>
                    <input v-model="form.translations[loc].short_description" type="text" class="input" />
                  </div>
                  <div>
                    <label class="label">Descripción completa ({{ loc.toUpperCase() }})</label>
                    <textarea v-model="form.translations[loc].description" rows="3" class="input resize-none" required />
                  </div>
                </div>
              </div>

              <!-- Base fields -->
              <div class="pt-4 border-t border-slate-200/80 dark:border-white/[0.07] space-y-4">
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label class="label">URL Udemy / Demo</label>
                    <input v-model="form.demo_url" type="text" class="input" placeholder="https://..." />
                  </div>
                  <div>
                    <label class="label">GitHub URL</label>
                    <input v-model="form.github_url" type="text" class="input" placeholder="https://github.com/..." />
                  </div>
                  <div>
                    <label class="label">Imagen URL</label>
                    <input v-model="form.image_url" type="text" class="input" placeholder="https://..." />
                  </div>
                </div>

                <div>
                  <label class="label">Tecnologías (coma separadas)</label>
                  <input
                    :value="form.technologies?.join(', ')"
                    @input="(e: any) => form.technologies = e.target.value.split(',').map((s:string)=>s.trim()).filter(Boolean)"
                    type="text" class="input" placeholder="Flutter, NestJS, MySQL..." />
                </div>

                <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div>
                    <label class="label">Categoría</label>
                    <select v-model="form.category" class="input">
                      <option value="">— Ninguna —</option>
                      <option value="web">Web</option>
                      <option value="mobile">Mobile</option>
                      <option value="automation">Automation</option>
                      <option value="ai">AI</option>
                    </select>
                  </div>
                  <div>
                    <label class="label">Orden</label>
                    <input v-model.number="form.sort_order" type="number" min="0" class="input" />
                  </div>
                  <div class="flex items-end pb-1">
                    <label class="flex items-center gap-2 cursor-pointer select-none">
                      <input v-model="form.featured" type="checkbox" class="w-4 h-4 accent-primary-600 rounded" />
                      <span class="text-sm text-slate-700 dark:text-slate-300">Destacado</span>
                    </label>
                  </div>
                  <div class="flex items-end pb-1">
                    <label class="flex items-center gap-2 cursor-pointer select-none">
                      <input v-model="form.active" type="checkbox" class="w-4 h-4 accent-primary-600 rounded" />
                      <span class="text-sm text-slate-700 dark:text-slate-300">Activo</span>
                    </label>
                  </div>
                </div>
              </div>

              <!-- Feedback -->
              <div v-if="saveError" class="flex items-center gap-2 px-4 py-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/60 rounded-xl text-red-700 dark:text-red-400 text-sm">
                <svg class="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                {{ saveError }}
              </div>
              <div v-if="saveSuccess" class="flex items-center gap-2 px-4 py-3 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/60 rounded-xl text-emerald-700 dark:text-emerald-400 text-sm">
                <svg class="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                Guardado correctamente
              </div>

              <!-- Actions -->
              <div class="flex gap-3 pt-1">
                <button type="submit" :disabled="saving" class="btn-primary flex-1 justify-center py-2.5">
                  <span v-if="saving" class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  {{ saving ? 'Guardando...' : 'Guardar' }}
                </button>
                <button type="button" @click="closeModal" class="btn-secondary px-5 py-2.5 text-sm">
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- ── Delete confirm ────────────────────────────────────── -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="deleteTarget" class="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="deleteTarget = null" />
          <div class="relative w-full max-w-sm card p-8 shadow-2xl text-center">
            <div class="w-12 h-12 rounded-2xl bg-red-100 dark:bg-red-900/20 flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6 text-red-600 dark:text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
            </div>
            <h3 class="font-display font-bold text-lg text-slate-900 dark:text-white mb-2">¿Eliminar curso?</h3>
            <p class="text-sm text-slate-500 dark:text-slate-400 mb-6">{{ getTitle(deleteTarget, 'es') }}</p>
            <div class="flex gap-3">
              <button @click="handleDelete" :disabled="saving"
                class="flex-1 px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-colors text-sm">
                Eliminar
              </button>
              <button @click="deleteTarget = null" class="flex-1 btn-secondary text-sm py-2.5">
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { coursesApi } from '@/services/api';

const courses     = ref<any[]>([]);
const loading     = ref(true);
const showModal   = ref(false);
const saving      = ref(false);
const saveError   = ref('');
const saveSuccess = ref(false);
const deleteTarget = ref<any>(null);
const activeLocale = ref<'es' | 'en'>('es');

const catIcon = (cat: string) => ({ web:'🌐', automation:'🤖', ai:'🧠', mobile:'📱' }[cat] || '🚀');

function getTitle(project: any, locale: string) {
  return project?.translations?.find((t: any) => t.locale === locale)?.title || '—';
}

function emptyForm() {
  return {
    id: null as number | null,
    image_url: '', demo_url: '', github_url: '',
    technologies: [] as string[],
    category: '', featured: false, active: true, sort_order: 0,
    translations: {
      es: { locale: 'es', title: '', description: '', short_description: '' },
      en: { locale: 'en', title: '', description: '', short_description: '' },
    },
  };
}
const form = ref(emptyForm());

function openModal(course?: any) {
  activeLocale.value = 'es';
  saveError.value = '';
  saveSuccess.value = false;
  if (course) {
    const tEs = course.translations?.find((t: any) => t.locale === 'es') || {};
    const tEn = course.translations?.find((t: any) => t.locale === 'en') || {};
    form.value = {
      id: course.id,
      image_url: course.image_url || '', demo_url: course.demo_url || '',
      github_url: course.github_url || '', technologies: course.technologies || [],
      category: course.category || '', featured: course.featured || false,
      active: course.active !== false, sort_order: course.sort_order || 0,
      translations: {
        es: { locale: 'es', title: tEs.title || '', description: tEs.description || '', short_description: tEs.short_description || '' },
        en: { locale: 'en', title: tEn.title || '', description: tEn.description || '', short_description: tEn.short_description || '' },
      },
    };
  } else {
    form.value = emptyForm();
  }
  showModal.value = true;
}

function closeModal() { showModal.value = false; }

async function handleSave() {
  saving.value = true;
  saveError.value = '';
  saveSuccess.value = false;
  try {
    const payload = {
      image_url: form.value.image_url || undefined,
      demo_url: form.value.demo_url || undefined,
      github_url: form.value.github_url || undefined,
      technologies: form.value.technologies,
      category: form.value.category || undefined,
      featured: form.value.featured,
      active: form.value.active,
      sort_order: form.value.sort_order,
      translations: [form.value.translations.es, form.value.translations.en].filter(t => t.title.trim()),
    };
    if (form.value.id) {
      await coursesApi.update(form.value.id, payload);
    } else {
      await coursesApi.create(payload);
    }
    saveSuccess.value = true;
    await loadCourses();
    setTimeout(closeModal, 900);
  } catch (e: any) {
    saveError.value = e.response?.data?.message || 'Error al guardar';
  } finally {
    saving.value = false;
  }
}

function confirmDelete(project: any) { deleteTarget.value = project; }

async function handleDelete() {
  if (!deleteTarget.value) return;
  saving.value = true;
  try {
    await coursesApi.remove(deleteTarget.value.id);
    await loadCourses();
    deleteTarget.value = null;
  } finally {
    saving.value = false;
  }
}

async function loadCourses() {
  loading.value = true;
  try {
    const { data } = await coursesApi.getAll(true);
    courses.value = data;
  } finally {
    loading.value = false;
  }
}

onMounted(loadCourses);
</script>

<style scoped>
.modal-enter-active, .modal-leave-active { transition: opacity 0.2s ease; }
.modal-enter-from, .modal-leave-to       { opacity: 0; }
</style>
