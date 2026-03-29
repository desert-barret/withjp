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

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem('withjp_token');
      window.location.href = '/admin/login';
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

export const profileApi = {
  get:    () => api.get('/profile'),
  update: (data: any) => api.put('/profile', data),
};

export default api;
