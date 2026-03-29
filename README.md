# withjp.ai — Plataforma Personal

Full Stack portfolio platform built with Vue 3 + NestJS.

## Stack

| Layer | Tech |
|-------|------|
| Frontend | Vue 3, Vite, TypeScript, Tailwind CSS, Pinia, vue-i18n |
| Backend | NestJS, TypeORM, MySQL, JWT, bcrypt |
| Deploy | Docker, nginx |

## Inicio rápido

### Backend

```bash
cd backend
npm install
npm run start:dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Seed inicial (crea usuario admin)

```bash
cd backend
npm run seed
# Admin: admin@withjp.ai / withjp2024!
```

## URLs

| URL | Descripción |
|-----|-------------|
| `http://localhost:5173` | Landing page |
| `http://localhost:5173/admin` | Panel admin |
| `http://localhost:3000/api` | API REST |

## API Endpoints

```
POST /api/auth/login       — Login
GET  /api/auth/me          — Usuario actual (JWT)

GET  /api/projects         — Proyectos activos
GET  /api/projects/featured — Proyectos destacados
POST /api/projects         — Crear proyecto (JWT)
PUT  /api/projects/:id     — Actualizar (JWT)
DELETE /api/projects/:id   — Eliminar (JWT)

GET  /api/profile          — Perfil público
PUT  /api/profile          — Actualizar perfil (JWT)
```

## Docker

```bash
docker-compose up -d
```

## Estructura

```
/
├── backend/          NestJS API
│   └── src/
│       ├── auth/     JWT auth
│       ├── users/    Usuarios
│       ├── projects/ CRUD proyectos
│       └── profile/  Perfil público
└── frontend/         Vue 3
    └── src/
        ├── components/sections/   Secciones landing
        ├── views/admin/           Panel admin
        ├── stores/                Pinia stores
        ├── i18n/                  ES + EN
        └── services/              API client
```
