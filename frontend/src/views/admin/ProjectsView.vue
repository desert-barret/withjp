<template>
  <div>
    <!-- Header -->
    <div class="flex items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
      <div>
        <h1 class="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">{{ t('admin.projects') }}</h1>
        <p class="text-slate-500 dark:text-slate-400 mt-1 text-sm sm:text-base">{{ projects.length }} cursos registrados</p>
      </div>
      <button @click="openModal()" class="btn-primary flex-shrink-0 text-sm">+ {{ t('admin.new_project') }}</button>
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
            <tr class="border-b border-slate-200 dark:border-slate-800">
              <th class="text-left px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Curso</th>
              <th class="text-left px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider hidden md:table-cell">Tech</th>
              <th class="text-left px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider hidden lg:table-cell">Estado</th>
              <th class="px-6 py-4 w-24"></th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
            <tr v-for="project in projects" :key="project.id"
              class="hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors">
              <td class="px-6 py-4">
                <div class="flex items-center gap-3">
                  <div class="w-9 h-9 rounded-xl flex-shrink-0 flex items-center justify-center text-base
                              bg-gradient-to-br from-primary-500/20 to-violet-500/20">
                    {{ { web:'🌐', automation:'🤖', ai:'🧠', mobile:'📱' }[project.category] || '🚀' }}
                  </div>
                  <div>
                    <p class="font-medium text-slate-900 dark:text-white text-sm leading-tight">
                      {{ getTitle(project, 'es') }}
                    </p>
                    <p class="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                      {{ getTitle(project, 'en') }}
                    </p>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 hidden md:table-cell">
                <div class="flex flex-wrap gap-1">
                  <span v-for="tech in (project.technologies || []).slice(0, 2)" :key="tech"
                    class="tag text-[11px]">{{ tech }}</span>
                  <span v-if="(project.technologies || []).length > 2" class="tag text-[11px] opacity-60">
                    +{{ project.technologies.length - 2 }}
                  </span>
                </div>
              </td>
              <td class="px-6 py-4 hidden lg:table-cell">
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="px-2 py-0.5 text-xs font-medium rounded-full"
                    :class="project.active
                      ? 'bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-500'">
                    {{ project.active ? 'Activo' : 'Inactivo' }}
                  </span>
                  <span v-if="project.featured"
                    class="px-2 py-0.5 text-xs font-medium rounded-full bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400">
                    ⭐
                  </span>
                </div>
              </td>
              <td class="px-6 py-4">
                <div class="flex gap-1 justify-end">
                  <button @click="openModal(project)"
                    class="w-8 h-8 flex items-center justify-center rounded-lg
                           text-slate-400 hover:text-primary-600 dark:hover:text-primary-400
                           hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors text-sm">✏️</button>
                  <button @click="confirmDelete(project)"
                    class="w-8 h-8 flex items-center justify-center rounded-lg
                           text-slate-400 hover:text-red-600 dark:hover:text-red-400
                           hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors text-sm">🗑️</button>
                </div>
              </td>
            </tr>
            <tr v-if="projects.length === 0">
              <td colspan="4" class="px-6 py-12 text-center text-slate-400 text-sm">
                Sin proyectos.
                <button @click="openModal()" class="text-primary-600 dark:text-primary-400 hover:underline ml-1">Crear uno</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- ─── MODAL ─────────────────────────────────────────────────────── -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="closeModal" />

          <div class="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto
                      bg-white dark:bg-[#0d1322] rounded-2xl shadow-2xl
                      border border-slate-200 dark:border-white/[0.08]">

            <!-- Modal header -->
            <div class="sticky top-0 z-10 flex items-center justify-between px-4 sm:px-6 py-4
                        bg-white dark:bg-[#0d1322]
                        border-b border-slate-200 dark:border-white/[0.08]">
              <h2 class="font-display font-bold text-lg text-slate-900 dark:text-white">
                {{ form.id ? 'Editar curso' : 'Nuevo curso' }}
              </h2>
              <button @click="closeModal"
                class="w-8 h-8 flex items-center justify-center rounded-xl
                       text-slate-400 hover:text-slate-600 dark:hover:text-slate-200
                       hover:bg-slate-100 dark:hover:bg-white/[0.08] transition-colors text-sm">✕</button>
            </div>

            <form @submit.prevent="handleSave" class="p-4 sm:p-6 space-y-6">

              <!-- ── Translations tabs ── -->
              <div>
                <div class="flex gap-1 mb-4 bg-slate-100 dark:bg-white/[0.05] p-1 rounded-xl w-fit">
                  <button v-for="loc in ['es','en']" :key="loc" type="button"
                    @click="activeLocale = loc"
                    class="px-5 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200"
                    :class="activeLocale === loc
                      ? 'bg-white dark:bg-white/10 text-slate-900 dark:text-white shadow-sm'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'">
                    {{ loc === 'es' ? '🇪🇸 Español' : '🇺🇸 English' }}
                  </button>
                </div>

                <div v-for="loc in ['es','en']" :key="loc" v-show="activeLocale === loc" class="space-y-4">
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
                    <textarea v-model="form.translations[loc].description" rows="4"
                      class="input resize-none" required />
                  </div>
                </div>
              </div>

              <!-- ── Base fields ── -->
              <div class="pt-4 border-t border-slate-200 dark:border-white/[0.06] space-y-4">
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label class="label">URL Udemy</label>
                    <input v-model="form.demo_url" type="text" class="input" placeholder="https://www.udemy.com/course/..." />
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
              <div v-if="saveError" class="px-4 py-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800
                                           rounded-xl text-red-700 dark:text-red-400 text-sm">{{ saveError }}</div>
              <div v-if="saveSuccess" class="px-4 py-3 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800
                                             rounded-xl text-emerald-700 dark:text-emerald-400 text-sm">Guardado correctamente ✓</div>

              <!-- Actions -->
              <div class="flex gap-3 pt-2">
                <button type="submit" :disabled="saving" class="btn-primary flex-1 justify-center">
                  <span v-if="saving" class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  {{ saving ? 'Guardando...' : t('admin.save') }}
                </button>
                <button type="button" @click="closeModal" class="btn-secondary px-6">{{ t('admin.cancel') }}</button>
              </div>
            </form>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- Delete confirm -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="deleteTarget" class="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="deleteTarget = null" />
          <div class="relative w-full max-w-sm card p-8 shadow-2xl text-center">
            <p class="text-4xl mb-4">🗑️</p>
            <h3 class="font-display font-bold text-lg text-slate-900 dark:text-white mb-2">¿Eliminar este curso?</h3>
            <p class="text-sm text-slate-500 dark:text-slate-400 mb-6">{{ getTitle(deleteTarget, 'es') }}</p>
            <div class="flex gap-3">
              <button @click="handleDelete" :disabled="saving"
                class="flex-1 px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-colors text-sm">
                Eliminar
              </button>
              <button @click="deleteTarget = null" class="flex-1 btn-secondary text-sm py-2.5">Cancelar</button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { projectsApi } from '@/services/api';

const { t } = useI18n();

const projects = ref<any[]>([]);
const loading = ref(true);
const showModal = ref(false);
const saving = ref(false);
const saveError = ref('');
const saveSuccess = ref(false);
const deleteTarget = ref<any>(null);
const activeLocale = ref<'es' | 'en'>('es');

function getTitle(project: any, locale: string) {
  return project?.translations?.find((t: any) => t.locale === locale)?.title || '—';
}

function emptyForm() {
  return {
    id: null as number | null,
    image_url: '',
    demo_url: '',
    github_url: '',
    technologies: [] as string[],
    category: '',
    featured: false,
    active: true,
    sort_order: 0,
    translations: {
      es: { locale: 'es', title: '', description: '', short_description: '' },
      en: { locale: 'en', title: '', description: '', short_description: '' },
    },
  };
}

const form = ref(emptyForm());

function openModal(project?: any) {
  activeLocale.value = 'es';
  saveError.value = '';
  saveSuccess.value = false;
  if (project) {
    const tEs = project.translations?.find((t: any) => t.locale === 'es') || {};
    const tEn = project.translations?.find((t: any) => t.locale === 'en') || {};
    form.value = {
      id: project.id,
      image_url: project.image_url || '',
      demo_url: project.demo_url || '',
      github_url: project.github_url || '',
      technologies: project.technologies || [],
      category: project.category || '',
      featured: project.featured || false,
      active: project.active !== false,
      sort_order: project.sort_order || 0,
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

function closeModal() {
  showModal.value = false;
}

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
      translations: [
        form.value.translations.es,
        form.value.translations.en,
      ].filter(t => t.title.trim()),
    };
    if (form.value.id) {
      await projectsApi.update(form.value.id, payload);
    } else {
      await projectsApi.create(payload);
    }
    saveSuccess.value = true;
    await loadProjects();
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
    await projectsApi.remove(deleteTarget.value.id);
    await loadProjects();
    deleteTarget.value = null;
  } finally {
    saving.value = false;
  }
}

async function loadProjects() {
  loading.value = true;
  try {
    const { data } = await projectsApi.getAll(true);
    projects.value = data;
  } finally {
    loading.value = false;
  }
}

onMounted(loadProjects);
</script>

<style scoped>
.modal-enter-active, .modal-leave-active { transition: opacity 0.2s ease; }
.modal-enter-from, .modal-leave-to { opacity: 0; }
</style>
