# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**withjp.ai** — Personal portfolio for Juan Pablo Guamán Rodríguez (Arquitecto de Software & Full Stack Developer, 25k+ Udemy students). Monorepo with a NestJS backend and Vue 3 frontend.

```
WithJp/
├── backend/        # NestJS API (port 3000)
├── frontend/       # Vue 3 SPA (port 5173)
└── docker-compose.yml
```

## Development Commands

### Backend
```bash
cd backend
npm run start:dev      # Watch mode
npm run seed           # Seed DB with 17 Udemy courses (runs ts-node src/database/seed.ts)
npm run build          # Compile to dist/
```

### Frontend
```bash
cd frontend
npm run dev            # Vite dev server on :5173
npm run build          # vite build only — do NOT use vue-tsc (incompatible with Node 18)
```

### Kill stale processes
```bash
pkill -f "nest start"
lsof -ti:3000 | xargs kill -9
```

### Create admin user (first-time setup)
```bash
cd backend
node -e "
const bcrypt = require('bcrypt');
const mysql = require('mysql2/promise');
(async () => {
  const conn = await mysql.createConnection(require('fs').readFileSync('.env','utf8').split('\n').reduce((a,l)=>{const[k,v]=l.split('=');if(k)a[k.trim()]=v?.trim();return a},{}));
  const hash = await bcrypt.hash('YOUR_PASSWORD', 10);
  await conn.execute('INSERT INTO users (email,password) VALUES (?,?)',['admin@withjp.ai', hash]);
  conn.end();
})();
"
```

## Architecture

### Backend (NestJS + TypeORM + MySQL)

- **Global prefix**: all routes are under `/api`
- **CORS**: only allows `FRONTEND_URL` (default `http://localhost:5173`)
- **DB sync**: `synchronize: true` in development, `false` in production (controlled by `NODE_ENV`)
- **Modules**: `AuthModule`, `UsersModule`, `ProjectsModule`, `ProfileModule`

#### Critical: JWT Setup
`JwtModule` **must** use `registerAsync` with `ConfigService` injection — using `register({ secret: process.env.JWT_SECRET })` will fail because `.env` is not loaded yet at module evaluation time:

```typescript
JwtModule.registerAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (config: ConfigService) => ({
    secret: config.get<string>('JWT_SECRET'),
    signOptions: { expiresIn: '7d' },
  }),
})
```

Same applies to `JwtStrategy` — inject `ConfigService` and call `config.get('JWT_SECRET')` in the constructor.

#### Translations Pattern
Projects use a **separate translations table** (`project_translations`) instead of bilingual columns. The relation is `eager: true` on the entity so translations are always loaded automatically:

```typescript
// project.entity.ts
@OneToMany(() => ProjectTranslation, t => t.project, { cascade: true, eager: true })
translations: ProjectTranslation[];
```

Update strategy: delete all existing translations then recreate (no upsert):
```typescript
await this.translationRepo.delete({ project: { id } });
project.translations = translations.map(t => this.translationRepo.create({ ...t, project }));
```

#### Profile Singleton
`ProfileService` always operates on id=1; creates the record on first GET if it doesn't exist.

### Frontend (Vue 3 + Vite + Tailwind + Pinia)

- **`@` alias** points to `src/`
- **Vite proxy**: `/api/*` → `http://localhost:3000` (no `VITE_API_URL` needed in dev)
- **Auth token**: stored as `withjp_token` in `localStorage`; automatically attached by axios interceptor in `src/services/api.ts`
- **Dark mode**: `class`-based via Tailwind, toggled by `src/stores/theme.ts`
- **i18n**: ES/EN via `vue-i18n`, locale persisted in `localStorage` as `withjp_locale`

#### Key Composables
- `useTranslation(item)` — resolves the correct locale translation from a `translations[]` array. Falls back to `es` then `[0]`.
- `useReveal()` — `IntersectionObserver` that adds `.visible` to elements with `.reveal` class once they scroll into view; disconnects after first trigger.

#### Router Guards
- `requiresAuth: true` → redirects to `/admin/login` if not authenticated
- `guestOnly: true` → redirects to `/admin` if already authenticated

#### Admin Panel
Located at `/admin/*`. The Projects form (`ProjectsView.vue`) uses an ES/EN tab switcher; internally stores `form.translations = { es: {...}, en: {...} }` and converts to array on save.

## Environment Variables (backend/.env)

```
DB_HOST=
DB_PORT=3306
DB_USER=
DB_PASSWORD=
DB_NAME=withjp
JWT_SECRET=
APP_PORT=3000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

## Docker

```bash
docker-compose up --build   # Backend on :3000, frontend on :80
```
Docker compose does **not** include a DB container — MySQL must be provisioned externally (currently hosted on GCP Cloud SQL).
