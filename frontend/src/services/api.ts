import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  timeout: 10000,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('withjp_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

let isHandling401 = false;

api.interceptors.response.use(
  (res) => res,
  async (err) => {
    if (err.response?.status === 401 && !isHandling401) {
      isHandling401 = true;
      localStorage.removeItem('withjp_token');
      try {
        const [{ useAuthStore }, { default: router }] = await Promise.all([
          import('@/stores/auth'),
          import('@/router'),
        ]);
        useAuthStore().logout();
        if (router.currentRoute.value.name !== 'AdminLogin') {
          router.push({ name: 'AdminLogin' });
        }
      } finally {
        isHandling401 = false;
      }
    }
    return Promise.reject(err);
  },
);

export const authApi = {
  login:         (email: string, password: string) => api.post('/auth/login', { email, password }),
  me:            () => api.get('/auth/me'),
  sessions:      () => api.get('/auth/sessions'),
  revokeSession: (id: number) => api.delete(`/auth/sessions/${id}`),
  revokeOthers:  () => api.delete('/auth/sessions/others'),
};

export const coursesApi = {
  getAll:      (showAll = false) => api.get(`/courses${showAll ? '?all=true' : ''}`),
  getFeatured: () => api.get('/courses/featured'),
  getOne:      (id: number) => api.get(`/courses/${id}`),
  create:      (data: any) => api.post('/courses', data),
  update:      (id: number, data: any) => api.put(`/courses/${id}`, data),
  remove:      (id: number) => api.delete(`/courses/${id}`),
};

export const academiaApi = {
  getAll:  (showAll = false) => api.get(`/academia${showAll ? '?all=true' : ''}`),
  getOne:  (id: number) => api.get(`/academia/${id}`),
  create:  (data: any) => api.post('/academia', data),
  update:  (id: number, data: any) => api.put(`/academia/${id}`, data),
  remove:  (id: number) => api.delete(`/academia/${id}`),
};

export const profileApi = {
  get:    () => api.get('/profile'),
  update: (data: any) => api.put('/profile', data),
};

export default api;
