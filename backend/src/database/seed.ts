import { DataSource } from 'typeorm';
import * as bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';
dotenv.config();

const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10) || 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
  charset: 'utf8mb4',
});

interface CourseData {
  slug: string;
  image_url?: string;
  demo_url: string;
  technologies: string[];
  category: string;
  featured: boolean;
  sort_order: number;
  active: boolean;
  translations: { locale: string; title: string; description: string; short_description: string }[];
}

const courses: CourseData[] = [
  // ─── MOBILE ───────────────────────────────────────────────────────────────
  {
    slug: 'app-delivery-flutter-nestjs',
    demo_url: 'https://www.udemy.com/course/app-delivery-flutter-nestjs/',
    technologies: ['Flutter 3', 'NestJS', 'PostgreSQL', 'Docker', 'Firebase', 'Google Maps', 'Nginx'],
    category: 'mobile',
    featured: true,
    sort_order: 1,
    active: true,
    translations: [
      {
        locale: 'es',
        title: 'TU propia APP de DELIVERY Internacional | Flutter 3 y NestJS',
        description: 'Crea tu propia app de delivery internacional con arquitectura lista para producción, basada en una app real que ha procesado más de 700,000 compras exitosas con 80,000+ clientes registrados. Aprende Flutter 3, NestJS, PostgreSQL, Docker, Firebase, Google Maps, Nginx y despliegue en Ubuntu Server.',
        short_description: 'App de delivery real con Flutter 3 y NestJS. +700K compras procesadas en producción.',
      },
      {
        locale: 'en',
        title: 'YOUR OWN International DELIVERY APP | Flutter 3 & NestJS',
        description: 'Create your own international delivery app with production-ready architecture based on a real app that has processed over 700,000 successful purchases with 80,000+ registered customers. Learn Flutter 3, NestJS, PostgreSQL, Docker, Firebase, Google Maps, Nginx and Ubuntu Server deployment.',
        short_description: 'Real delivery app with Flutter 3 & NestJS. 700K+ purchases processed in production.',
      },
    ],
  },
  {
    slug: 'app-delivery-flutter-nestjs-plus',
    demo_url: 'https://www.udemy.com/course/app-delivery-flutter-nestjs-plus/',
    technologies: ['Flutter', 'NestJS', 'PostgreSQL', 'Firebase'],
    category: 'mobile',
    featured: false,
    sort_order: 2,
    active: true,
    translations: [
      {
        locale: 'es',
        title: 'Plus | Módulos EXTRA | APP DELIVERY Multi Servicio | UBER',
        description: 'Extensión avanzada del curso principal de delivery. Incluye categorías de productos, búsqueda avanzada, autorización de administradores y módulo de taxi estilo Uber. Requiere haber completado el curso base.',
        short_description: 'Módulos extra para la APP Delivery: categorías, búsqueda, admin y módulo taxi UBER.',
      },
      {
        locale: 'en',
        title: 'Plus | EXTRA Modules | Multi-Service DELIVERY APP | UBER',
        description: 'Advanced extension of the main delivery course. Includes product categories, advanced search, admin authorization, and an Uber-like taxi module. Requires completion of the base course.',
        short_description: 'Extra modules for the Delivery APP: categories, search, admin and UBER taxi module.',
      },
    ],
  },
  {
    slug: 'flutter-nestjs-chatgpt-ia',
    demo_url: 'https://www.udemy.com/course/flutter-nestjs-chatgpt/',
    technologies: ['Flutter', 'NestJS', 'ChatGPT API', 'OpenAI', 'TypeScript'],
    category: 'ai',
    featured: true,
    sort_order: 3,
    active: true,
    translations: [
      {
        locale: 'es',
        title: 'Crea tu APP de cuentos con IA y ChatGPT | Flutter y NestJS',
        description: 'Crea una app multilenguaje de generación de cuentos con IA similar a Twitter usando Flutter y NestJS con integración de ChatGPT. Aprende a integrar la API de OpenAI en apps móviles reales con arquitectura profesional.',
        short_description: 'App de cuentos con IA: Flutter + NestJS + ChatGPT API. Arquitectura profesional.',
      },
      {
        locale: 'en',
        title: 'Create your AI Story App with ChatGPT | Flutter & NestJS',
        description: 'Create a multi-language AI-powered story generation app similar to Twitter using Flutter and NestJS with ChatGPT integration. Learn to integrate the OpenAI API in real mobile apps with professional architecture.',
        short_description: 'AI story app: Flutter + NestJS + ChatGPT API. Professional architecture.',
      },
    ],
  },
  {
    slug: 'flutter-nestjs-ecommerce-pasarelas-pago',
    demo_url: 'https://www.udemy.com/course/flutter-nestjs-y-mysql-e-commerce-app-con-pasarelas-de-pago/',
    technologies: ['Flutter', 'NestJS', 'MySQL', 'Clean Architecture', 'BloC', 'MVVM', 'Mercado Pago', 'Stripe'],
    category: 'mobile',
    featured: true,
    sort_order: 4,
    active: true,
    translations: [
      {
        locale: 'es',
        title: 'Flutter NestJS y MySQL: E-Commerce App con Pasarelas de pago',
        description: 'Construye una aplicación de e-commerce completa para Android e iOS con integración de pasarelas de pago (Mercado Pago y Stripe). Aplica Clean Architecture, patrón BloC, MVVM e inyección de dependencias en un proyecto real de producción.',
        short_description: 'E-Commerce completo Android & iOS: Flutter + NestJS + Mercado Pago + Stripe.',
      },
      {
        locale: 'en',
        title: 'Flutter NestJS & MySQL: E-Commerce App with Payment Gateways',
        description: 'Build a complete e-commerce application for Android and iOS with payment gateway integration (Mercado Pago and Stripe). Apply Clean Architecture, BloC pattern, MVVM and dependency injection in a real production project.',
        short_description: 'Complete E-Commerce Android & iOS: Flutter + NestJS + Mercado Pago + Stripe.',
      },
    ],
  },
  {
    slug: 'app-indriver-uber-flutter-nestjs',
    demo_url: 'https://www.udemy.com/course/crea-una-app-clone-de-indriver-uber-didi-con-flutter-nestjs-mysql/',
    technologies: ['Flutter', 'NestJS', 'MySQL', 'Socket IO', 'Clean Architecture'],
    category: 'mobile',
    featured: true,
    sort_order: 5,
    active: true,
    translations: [
      {
        locale: 'es',
        title: 'Crea una APP clone de InDriver UBER con Flutter NestJS MySQL',
        description: 'Construye un clon de app de transporte estilo InDriver/Uber usando Flutter para el frontend y NestJS para el backend. Implementa comunicación en tiempo real con Socket IO, Clean Architecture y soporte multiplataforma completo.',
        short_description: 'Clon de InDriver/Uber con Flutter + NestJS + Socket IO en tiempo real.',
      },
      {
        locale: 'en',
        title: 'Create an InDriver UBER Clone APP with Flutter NestJS MySQL',
        description: 'Build a ride-sharing app clone like InDriver/Uber using Flutter for the frontend and NestJS for the backend. Implement real-time communication with Socket IO, Clean Architecture, and full cross-platform support.',
        short_description: 'InDriver/Uber clone with Flutter + NestJS + Socket IO real-time.',
      },
    ],
  },
  {
    slug: 'app-indriver-uber-kotlin-nestjs',
    demo_url: 'https://www.udemy.com/course/crea-una-app-clone-de-indriver-uber-con-kotlin-nestjs-mysql/',
    technologies: ['Kotlin', 'NestJS', 'MySQL', 'Socket IO', 'Android nativo'],
    category: 'mobile',
    featured: false,
    sort_order: 6,
    active: true,
    translations: [
      {
        locale: 'es',
        title: 'Crea una APP clone de InDriver UBER con Kotlin NestJS MySQL',
        description: 'Construye una app de transporte estilo InDriver/Uber usando Kotlin nativo para Android y NestJS para el backend. Aprende desarrollo Android nativo profesional con arquitectura limpia y comunicación en tiempo real.',
        short_description: 'Clon InDriver/Uber con Kotlin nativo + NestJS + MySQL.',
      },
      {
        locale: 'en',
        title: 'Create an InDriver UBER Clone APP with Kotlin NestJS MySQL',
        description: 'Build a ride-sharing app like InDriver/Uber using native Kotlin for Android and NestJS for the backend. Learn professional native Android development with clean architecture and real-time communication.',
        short_description: 'InDriver/Uber clone with native Kotlin + NestJS + MySQL.',
      },
    ],
  },
  {
    slug: 'app-indriver-uber-kotlin-django',
    demo_url: 'https://www.udemy.com/course/crea-una-app-clone-de-indriver-uber-con-kotlin-django-mysql/',
    technologies: ['Kotlin', 'Django', 'MySQL', 'Socket IO', 'Python'],
    category: 'mobile',
    featured: false,
    sort_order: 7,
    active: true,
    translations: [
      {
        locale: 'es',
        title: 'Crea una APP clone de InDriver UBER con Kotlin Django MySQL',
        description: 'Construye un clon de app de transporte usando Kotlin para Android nativo y Django (Python) para el backend. Aprende a combinar desarrollo Android con un backend Python robusto.',
        short_description: 'Clon InDriver/Uber: Kotlin Android + Django Python + MySQL.',
      },
      {
        locale: 'en',
        title: 'Create an InDriver UBER Clone APP with Kotlin Django MySQL',
        description: 'Build a ride-sharing app clone using Kotlin for native Android and Django (Python) for the backend. Learn to combine Android development with a robust Python backend.',
        short_description: 'InDriver/Uber clone: Kotlin Android + Django Python + MySQL.',
      },
    ],
  },
  {
    slug: 'app-indriver-uber-flutter-django',
    demo_url: 'https://www.udemy.com/course/crea-una-app-clone-de-indriver-uber-con-flutter-django-mysql/',
    technologies: ['Flutter', 'Django', 'MySQL', 'Socket IO', 'Python'],
    category: 'mobile',
    featured: false,
    sort_order: 8,
    active: true,
    translations: [
      {
        locale: 'es',
        title: 'Crea una APP clone de InDriver UBER con Flutter Django MySQL',
        description: 'Construye un clon de app de transporte usando Flutter para multiplataforma y Django (Python) para el backend. Combina el poder de Flutter con la productividad de Django.',
        short_description: 'Clon InDriver/Uber: Flutter + Django Python + MySQL.',
      },
      {
        locale: 'en',
        title: 'Create an InDriver UBER Clone APP with Flutter Django MySQL',
        description: 'Build a ride-sharing app clone using Flutter for cross-platform and Django (Python) for the backend. Combine the power of Flutter with Django productivity.',
        short_description: 'InDriver/Uber clone: Flutter + Django Python + MySQL.',
      },
    ],
  },
  {
    slug: 'app-indriver-uber-react-native-spring-boot',
    demo_url: 'https://www.udemy.com/course/crea-una-app-clone-indriver-uber-react-native-y-spring-boot/',
    technologies: ['React Native', 'Spring Boot', 'MySQL', 'Clean Architecture', 'MVVM', 'Java'],
    category: 'mobile',
    featured: false,
    sort_order: 9,
    active: true,
    translations: [
      {
        locale: 'es',
        title: 'Crea una APP clone InDriver UBER con React Native y Spring Boot',
        description: 'Construye una app de transporte usando React Native para multiplataforma y Spring Boot (Java) para el backend. Implementa Clean Architecture y patrón MVVM en un proyecto real.',
        short_description: 'Clon InDriver/Uber: React Native + Spring Boot Java + MySQL.',
      },
      {
        locale: 'en',
        title: 'Create an InDriver UBER Clone APP with React Native & Spring Boot',
        description: 'Build a ride-sharing app using React Native for cross-platform and Spring Boot (Java) for the backend. Implement Clean Architecture and MVVM pattern in a real project.',
        short_description: 'InDriver/Uber clone: React Native + Spring Boot Java + MySQL.',
      },
    ],
  },
  {
    slug: 'chatbot-whatsapp-flutter-nodejs',
    demo_url: 'https://www.udemy.com/course/whatsapp-flutter-nodejs-mysql/',
    technologies: ['Flutter', 'Node.js', 'MySQL', 'WhatsApp Web', 'Socket IO', 'EJS'],
    category: 'automation',
    featured: true,
    sort_order: 10,
    active: true,
    translations: [
      {
        locale: 'es',
        title: 'APP ChatBot WhatsApp | Flutter | NodeJS | MySQL',
        description: 'Crea una aplicación de chatbot para WhatsApp usando Flutter para el cliente y Node.js para el servidor con base de datos MySQL. Aprende a integrar WhatsApp Web Library, configurar respuestas automáticas y construir un sistema completo de automatización de mensajes.',
        short_description: 'Chatbot WhatsApp completo: Flutter + Node.js + MySQL + respuestas automáticas.',
      },
      {
        locale: 'en',
        title: 'WhatsApp ChatBot APP | Flutter | NodeJS | MySQL',
        description: 'Create a WhatsApp chatbot application using Flutter for the client and Node.js for the server with MySQL database. Learn to integrate WhatsApp Web Library, configure automatic responses, and build a complete message automation system.',
        short_description: 'Complete WhatsApp chatbot: Flutter + Node.js + MySQL + automatic responses.',
      },
    ],
  },
  // ─── WEB / FULL STACK ─────────────────────────────────────────────────────
  {
    slug: 'fullstack-nodejs-react-nestjs-nextjs',
    demo_url: 'https://www.udemy.com/course/curso-full-stack-nodejs-react-typescript-nestjs-nextjs/',
    technologies: ['Node.js', 'TypeScript', 'React', 'Next.js', 'NestJS', 'TypeORM', 'Express', 'Vite'],
    category: 'web',
    featured: true,
    sort_order: 11,
    active: true,
    translations: [
      {
        locale: 'es',
        title: 'Full Stack Node.js React TS NestJS Next.js Creando Proyectos',
        description: 'Aprende a crear aplicaciones full stack de cero a despliegue usando Node.js y TypeScript con Express, React, Next.js y NestJS. Construye proyectos reales: DevTree (clon de LinkTree), CashTrackr (gestor de gastos) y un sistema POS completo.',
        short_description: 'Full Stack completo: Node.js + React + Next.js + NestJS. 3 proyectos reales.',
      },
      {
        locale: 'en',
        title: 'Full Stack Node.js React TS NestJS Next.js Building Projects',
        description: 'Learn to create full-stack applications from zero to deployment using Node.js and TypeScript with Express, React, Next.js, and NestJS. Build real projects: DevTree (LinkTree clone), CashTrackr (expense manager), and a complete POS system.',
        short_description: 'Complete Full Stack: Node.js + React + Next.js + NestJS. 3 real projects.',
      },
    ],
  },
  {
    slug: 'react-typescript-guia-completa',
    demo_url: 'https://www.udemy.com/course/react-de-principiante-a-experto-creando-mas-de-10-aplicaciones/',
    technologies: ['React', 'TypeScript', 'Hooks', 'State Management', 'REST APIs'],
    category: 'web',
    featured: true,
    sort_order: 12,
    active: true,
    translations: [
      {
        locale: 'es',
        title: 'React y TypeScript - La Guía Completa Creando +10 Proyectos',
        description: 'Curso completo de React y TypeScript construyendo más de 10 proyectos reales. Cubre hooks, estado global, componentes, APIs externas, custom hooks y todas las técnicas modernas de desarrollo frontend con React.',
        short_description: 'React + TypeScript completo: +10 proyectos reales, hooks, estado global y APIs.',
      },
      {
        locale: 'en',
        title: 'React & TypeScript - The Complete Guide Building 10+ Projects',
        description: 'Complete React and TypeScript course building 10+ real-world projects. Covers hooks, global state, components, external APIs, custom hooks, and all modern frontend development techniques with React.',
        short_description: 'Complete React + TypeScript: 10+ real projects, hooks, global state and APIs.',
      },
    ],
  },
  {
    slug: 'javascript-moderno-guia-definitiva',
    demo_url: 'https://www.udemy.com/course/javascript-moderno-guia-definitiva-construye-10-proyectos/',
    technologies: ['JavaScript', 'ES6+', 'Node.js', 'Vue.js', 'React', 'MongoDB', 'REST APIs'],
    category: 'web',
    featured: false,
    sort_order: 13,
    active: true,
    translations: [
      {
        locale: 'es',
        title: 'JavaScript Moderno Guía Definitiva Construye +20 Proyectos',
        description: 'Guía definitiva de JavaScript moderno desde ES6 hasta ES12 construyendo +20 proyectos reales. Cubre fundamentos, programación asíncrona, APIs nativas, prototipos, clases, y una introducción a Node.js, Vue.js, Express y MongoDB.',
        short_description: 'JavaScript moderno ES6-ES12: +20 proyectos, async/await, APIs, Node.js, Vue.js.',
      },
      {
        locale: 'en',
        title: 'Modern JavaScript Definitive Guide Building 20+ Projects',
        description: 'Definitive guide to modern JavaScript from ES6 to ES12 building 20+ real projects. Covers fundamentals, async programming, native APIs, prototypes, classes, and an introduction to Node.js, Vue.js, Express and MongoDB.',
        short_description: 'Modern JavaScript ES6-ES12: 20+ projects, async/await, APIs, Node.js, Vue.js.',
      },
    ],
  },
  {
    slug: 'nodejs-bootcamp-mvc-rest-apis',
    demo_url: 'https://www.udemy.com/course/nodejs-bootcamp-desarrollo-web-mvc-y-rest-apis/',
    technologies: ['Node.js', 'Express', 'MVC', 'REST APIs', 'MySQL', 'PostgreSQL', 'MongoDB', 'EJS', 'Pug'],
    category: 'web',
    featured: false,
    sort_order: 14,
    active: true,
    translations: [
      {
        locale: 'es',
        title: 'Node.js - Bootcamp Desarrollo Web inc. MVC y REST APIs',
        description: 'Bootcamp completo de Node.js para desarrollo web. Aprende el patrón MVC, creación de REST APIs, ORMs, autenticación, envío de emails, subida de archivos y trabajo con múltiples bases de datos (MySQL, PostgreSQL, MongoDB) usando Express.',
        short_description: 'Bootcamp Node.js completo: MVC, REST APIs, MySQL, PostgreSQL, MongoDB, Express.',
      },
      {
        locale: 'en',
        title: 'Node.js - Web Development Bootcamp inc. MVC & REST APIs',
        description: 'Complete Node.js bootcamp for web development. Learn MVC pattern, REST API creation, ORMs, authentication, email sending, file uploads, and working with multiple databases (MySQL, PostgreSQL, MongoDB) using Express.',
        short_description: 'Complete Node.js bootcamp: MVC, REST APIs, MySQL, PostgreSQL, MongoDB, Express.',
      },
    ],
  },
  // ─── ANDROID / KOTLIN ─────────────────────────────────────────────────────
  {
    slug: 'android-14-kotlin-intensivo',
    demo_url: 'https://www.udemy.com/course/kotlin-intensivo/',
    technologies: ['Kotlin', 'Android 14', 'Firebase', 'MVVM', 'Jetpack Compose', 'Coroutines', 'Room'],
    category: 'mobile',
    featured: true,
    sort_order: 15,
    active: true,
    translations: [
      {
        locale: 'es',
        title: 'Curso de Android 14 con Kotlin: Intensivo y práctico',
        description: 'Curso intensivo y práctico de Android 14 con Kotlin. Aprende MVVM, Firebase, REST APIs, Room Database, Coroutines, LiveData, Jetpack Compose y publica tu app en Google Play Store. El camino más rápido a convertirte en desarrollador Android profesional.',
        short_description: 'Android 14 + Kotlin intensivo: MVVM, Firebase, Jetpack Compose, Play Store.',
      },
      {
        locale: 'en',
        title: 'Android 14 with Kotlin Course: Intensive and Practical',
        description: 'Intensive and practical Android 14 course with Kotlin. Learn MVVM, Firebase, REST APIs, Room Database, Coroutines, LiveData, Jetpack Compose, and publish your app to Google Play Store. The fastest path to becoming a professional Android developer.',
        short_description: 'Android 14 + Kotlin intensive: MVVM, Firebase, Jetpack Compose, Play Store.',
      },
    ],
  },
  {
    slug: 'android-kotlin-desde-cero',
    demo_url: 'https://www.udemy.com/course/curso-android-kotlin/',
    technologies: ['Kotlin', 'Android', 'Views', 'UI', 'Basics'],
    category: 'mobile',
    featured: false,
    sort_order: 16,
    active: true,
    translations: [
      {
        locale: 'es',
        title: 'Android y Kotlin Desde Cero',
        description: 'Empieza desde cero en el desarrollo de apps Android con Kotlin. Aprende los fundamentos de la programación móvil, vistas, componentes UI, listas y los conceptos esenciales para crear tus primeras aplicaciones Android.',
        short_description: 'Fundamentos de Android con Kotlin para principiantes absolutos.',
      },
      {
        locale: 'en',
        title: 'Android and Kotlin From Zero',
        description: 'Start from zero in Android app development with Kotlin. Learn the fundamentals of mobile programming, views, UI components, lists and the essential concepts to create your first Android applications.',
        short_description: 'Android fundamentals with Kotlin for absolute beginners.',
      },
    ],
  },
  {
    slug: 'android-kotlin-profesional-completo',
    demo_url: 'https://www.udemy.com/course/android_kotlin/',
    technologies: ['Kotlin', 'Android', 'Views', 'UI', 'Lists', 'Architecture'],
    category: 'mobile',
    featured: false,
    sort_order: 17,
    active: true,
    translations: [
      {
        locale: 'es',
        title: 'Android y Kotlin Desde Cero a Profesional Completo +45 horas',
        description: 'El curso más completo de Android con Kotlin: +45 horas de video. Desde principiante absoluto hasta desarrollador profesional. Cubre toda la gama de componentes, arquitecturas y patrones de diseño necesarios para trabajar en la industria.',
        short_description: '+45 horas de Android con Kotlin: de principiante a desarrollador profesional.',
      },
      {
        locale: 'en',
        title: 'Android and Kotlin From Zero to Professional Complete +45 hours',
        description: 'The most complete Android course with Kotlin: 45+ hours of video. From absolute beginner to professional developer. Covers the full range of components, architectures, and design patterns needed to work in the industry.',
        short_description: '45+ hours of Android with Kotlin: from beginner to professional developer.',
      },
    ],
  },
];

const blogPosts = [
  {
    slug: 'como-automatizar-whatsapp-business-api',
    category: 'whatsapp',
    tags: ['WhatsApp', 'Automatización', 'API', 'Meta', 'Negocios'],
    featured: true,
    published: true,
    published_at: '2026-04-01T10:00:00Z',
    reading_time: 8,
    meta_title: 'Cómo Automatizar WhatsApp Business API en 2026 | Guía Completa',
    meta_description: 'Aprende paso a paso cómo automatizar tu atención al cliente con WhatsApp Business API. Flujos estructurados, API oficial de Meta, cumplimiento de políticas.',
    translations: [
      {
        locale: 'es',
        title: 'Cómo Automatizar WhatsApp Business API: Guía Completa 2026',
        excerpt: 'Guía paso a paso para implementar automatización de atención al cliente con la API oficial de WhatsApp Business de Meta.',
        content: `# Cómo Automatizar WhatsApp Business API: Guía Completa 2026

La automatización de WhatsApp Business no es simplemente "poner un chatbot". Es diseñar flujos de conversación estructurados que resuelven problemas reales de tus clientes.

## ¿Por qué automatizar WhatsApp?

WhatsApp tiene más de 2 mil millones de usuarios activos. En Latinoamérica, es el canal principal de comunicación entre empresas y clientes. Si tu negocio no responde por WhatsApp, estás perdiendo ventas.

### El problema real

- Respondes manualmente 200+ mensajes al día
- Tus clientes esperan minutos (o horas) por una respuesta simple
- Tu equipo pierde tiempo en preguntas repetitivas
- Fuera de horario, nadie responde

### La solución: flujos automatizados

No se trata de reemplazar al humano. Se trata de que el sistema resuelva el 80% de las consultas automáticamente y solo escale al equipo las que realmente necesitan atención humana.

## Los 3 pasos para automatizar

### 1. Conectar con la API oficial de Meta

Lo primero es obtener acceso a la API oficial de WhatsApp Business. Esto requiere:
- Una cuenta de Meta Business Manager verificada
- Un número de teléfono dedicado
- Aprobación de plantillas de mensaje

### 2. Diseñar tus flujos de atención

Cada negocio necesita flujos diferentes. Los más comunes son:
- **FAQ automáticas**: respuestas a preguntas frecuentes
- **Seguimiento de pedidos**: el cliente consulta el estado de su orden
- **Agendamiento de citas**: reserva directa por WhatsApp
- **Soporte post-venta**: reportes de problemas y seguimiento

### 3. Implementar y probar

El desarrollo incluye la conexión con tus sistemas internos (CRM, ERP, base de datos) para dar respuestas en tiempo real.

## Cumplimiento de políticas

Meta tiene reglas estrictas. Tu automatización debe cumplir:
- Solo contactar usuarios con opt-in explícito
- Usar plantillas aprobadas por Meta
- Ofrecer opt-out siempre (STOP/ALTO)
- No enviar spam ni mensajes masivos no solicitados

## Conclusión

Automatizar WhatsApp no es una moda. Es una necesidad operativa. Si quieres saber cómo aplicarlo a tu negocio, [contáctame](/whatsapp) para una consulta gratuita.`,
      },
      {
        locale: 'en',
        title: 'How to Automate WhatsApp Business API: Complete 2026 Guide',
        excerpt: 'Step-by-step guide to implementing customer service automation with the official WhatsApp Business API from Meta.',
        content: `# How to Automate WhatsApp Business API: Complete 2026 Guide

WhatsApp Business automation isn't just "adding a chatbot." It's designing structured conversation flows that solve real customer problems.

## Why automate WhatsApp?

WhatsApp has over 2 billion active users. In Latin America, it's the primary communication channel between businesses and customers. If your business doesn't respond on WhatsApp, you're losing sales.

### The real problem

- You manually respond to 200+ messages daily
- Your customers wait minutes (or hours) for simple answers
- Your team wastes time on repetitive questions
- After hours, nobody responds

### The solution: automated flows

It's not about replacing humans. It's about letting the system resolve 80% of queries automatically and only escalate to your team the ones that truly need human attention.

## The 3 steps to automate

### 1. Connect with Meta's official API

First, get access to the official WhatsApp Business API. This requires:
- A verified Meta Business Manager account
- A dedicated phone number
- Message template approvals

### 2. Design your support flows

Every business needs different flows. The most common are:
- **Automated FAQs**: answers to frequently asked questions
- **Order tracking**: customer checks their order status
- **Appointment scheduling**: direct booking via WhatsApp
- **After-sales support**: problem reports and follow-up

### 3. Implement and test

Development includes connecting to your internal systems (CRM, ERP, database) to provide real-time responses.

## Policy compliance

Meta has strict rules. Your automation must comply:
- Only contact users with explicit opt-in
- Use Meta-approved templates
- Always offer opt-out (STOP)
- No spam or unsolicited mass messages

## Conclusion

Automating WhatsApp isn't a trend. It's an operational necessity. If you want to know how to apply it to your business, [contact me](/whatsapp) for a free consultation.`,
      },
    ],
  },
  {
    slug: 'flutter-vs-react-native-2026',
    category: 'mobile',
    tags: ['Flutter', 'React Native', 'Mobile', 'Comparativa'],
    featured: true,
    published: true,
    published_at: '2026-03-20T10:00:00Z',
    reading_time: 6,
    meta_title: 'Flutter vs React Native 2026: Comparativa Definitiva',
    meta_description: 'Comparativa actualizada Flutter vs React Native. Cuál elegir para tu próximo proyecto móvil, rendimiento, ecosistema y experiencia real.',
    translations: [
      {
        locale: 'es',
        title: 'Flutter vs React Native en 2026: Comparativa Definitiva',
        excerpt: 'Después de 10 años desarrollando apps móviles, esta es mi comparativa honesta entre Flutter y React Native.',
        content: `# Flutter vs React Native en 2026: Comparativa Definitiva

Después de crear más de 15 cursos de desarrollo móvil y construir apps en producción con ambos frameworks, comparto mi experiencia real.

## Rendimiento

**Flutter** compila a código nativo (ARM) usando Dart. No hay puente (bridge) entre tu código y la plataforma. Esto da un rendimiento consistente.

**React Native** usa un bridge para comunicarse con componentes nativos. La nueva arquitectura (Fabric + JSI) mejoró esto significativamente, pero Flutter sigue teniendo ventaja en animaciones complejas.

## Ecosistema

React Native tiene la ventaja de JavaScript — puedes reutilizar conocimiento y bibliotecas del ecosistema web. Flutter requiere aprender Dart, pero su ecosistema de paquetes ha crecido enormemente.

## Mi recomendación

- Si tu equipo ya conoce JavaScript/React: **React Native**
- Si empiezas desde cero o priorizas rendimiento: **Flutter**
- Si necesitas apps de alta complejidad visual: **Flutter**

Ambos son opciones excelentes en 2026. La decisión depende de tu contexto, no de cuál es "mejor".`,
      },
      {
        locale: 'en',
        title: 'Flutter vs React Native in 2026: The Definitive Comparison',
        excerpt: 'After 10 years building mobile apps, here is my honest comparison between Flutter and React Native.',
        content: `# Flutter vs React Native in 2026: The Definitive Comparison

After creating 15+ mobile development courses and building production apps with both frameworks, I share my real experience.

## Performance

**Flutter** compiles to native code (ARM) using Dart. There's no bridge between your code and the platform, giving consistent performance.

**React Native** uses a bridge to communicate with native components. The new architecture (Fabric + JSI) improved this significantly, but Flutter still has the edge in complex animations.

## Ecosystem

React Native has the JavaScript advantage — you can reuse knowledge and libraries from the web ecosystem. Flutter requires learning Dart, but its package ecosystem has grown enormously.

## My recommendation

- If your team already knows JavaScript/React: **React Native**
- If you're starting from scratch or prioritize performance: **Flutter**
- If you need visually complex apps: **Flutter**

Both are excellent choices in 2026. The decision depends on your context, not which one is "better."`,
      },
    ],
  },
];

async function seed() {
  await AppDataSource.initialize();
  console.log('Connected to database');

  // Admin user
  const userRepo = AppDataSource.getRepository('users');
  const existing = await userRepo.findOne({ where: { email: 'admin@withjp.ai' } });
  if (!existing) {
    const hashed = await bcrypt.hash('withjp2024!', 10);
    await userRepo.save({ email: 'admin@withjp.ai', password: hashed, role: 'admin' });
    console.log('Admin created: admin@withjp.ai');
  } else {
    console.log('Admin already exists');
  }

  // Courses
  await AppDataSource.query('DELETE FROM course_translations').catch(() => {});
  await AppDataSource.query('DELETE FROM courses').catch(() => {});

  // Fallback for old table names
  await AppDataSource.query('DELETE FROM project_translations').catch(() => {});
  await AppDataSource.query('DELETE FROM projects').catch(() => {});

  const courseRepo = AppDataSource.getRepository('courses');
  const translationRepo = AppDataSource.getRepository('course_translations');

  for (const c of courses) {
    const { translations, ...base } = c;
    const course = await courseRepo.save(courseRepo.create(base));
    for (const t of translations) {
      await translationRepo.save(translationRepo.create({ ...t, course }));
    }
  }

  console.log(`${courses.length} cursos sembrados`);

  // Academia
  await AppDataSource.query('DELETE FROM academia_translations').catch(() => {});
  await AppDataSource.query('DELETE FROM academia').catch(() => {});

  const academiaRepo = AppDataSource.getRepository('academia');
  const acadTransRepo = AppDataSource.getRepository('academia_translations');

  const academiaItems = [
    {
      subdomain_url: 'https://claude.withjp.ai',
      badge: 'NUEVO',
      technologies: ['Claude Code', 'AI', 'Shell', 'CLI', 'Hooks'],
      category: 'ai',
      featured: true,
      sort_order: 1,
      active: true,
      translations: [
        {
          locale: 'es',
          title: 'Domina el Shell de Claude',
          description: 'Aprende a usar Claude Code en la terminal como un profesional. Desde los comandos básicos hasta workflows avanzados con agentes de IA, hooks y automatizaciones que multiplicarán tu productividad.',
          short_description: 'Domina Claude Code CLI: comandos, agentes, hooks y workflows con IA para multiplicar tu productividad.',
        },
        {
          locale: 'en',
          title: 'Master the Claude Shell',
          description: 'Learn to use Claude Code in the terminal like a professional. From basic commands to advanced AI-powered workflows, agents, hooks and automations that will multiply your productivity.',
          short_description: 'Master Claude Code CLI: commands, agents, hooks and AI workflows to multiply your productivity.',
        },
      ],
    },
    {
      subdomain_url: '',
      badge: 'PRONTO',
      technologies: ['Claude API', 'TypeScript', 'NestJS', 'Anthropic SDK'],
      category: 'ai',
      featured: false,
      sort_order: 2,
      active: true,
      translations: [
        {
          locale: 'es',
          title: 'Agentes IA con Claude API',
          description: 'Construye agentes de inteligencia artificial desde cero usando la API de Anthropic y el SDK oficial. Aprende tool use, memory, multi-step reasoning y despliega tu propio agente en producción.',
          short_description: 'Crea agentes de IA reales con Claude API, tool use y razonamiento multi-paso.',
        },
        {
          locale: 'en',
          title: 'AI Agents with Claude API',
          description: 'Build artificial intelligence agents from scratch using the Anthropic API and official SDK. Learn tool use, memory, multi-step reasoning, and deploy your own agent to production.',
          short_description: 'Build real AI agents with Claude API, tool use, and multi-step reasoning.',
        },
      ],
    },
    {
      subdomain_url: '',
      badge: 'PRONTO',
      technologies: ['NestJS', 'Flutter', 'OpenAI', 'Sockets', 'TypeScript'],
      category: 'mobile',
      featured: false,
      sort_order: 3,
      active: true,
      translations: [
        {
          locale: 'es',
          title: 'Apps Móviles con IA Integrada',
          description: 'Integra inteligencia artificial directamente en tus apps Flutter con un backend NestJS potente. Chats en tiempo real con IA, generación de contenido, análisis de imágenes y mucho más.',
          short_description: 'Flutter + NestJS + IA: integra modelos de lenguaje en apps móviles reales.',
        },
        {
          locale: 'en',
          title: 'Mobile Apps with Integrated AI',
          description: 'Integrate artificial intelligence directly into your Flutter apps with a powerful NestJS backend. Real-time AI chats, content generation, image analysis, and much more.',
          short_description: 'Flutter + NestJS + AI: integrate language models into real mobile apps.',
        },
      ],
    },
  ];

  for (const a of academiaItems) {
    const { translations, ...base } = a;
    const item = await academiaRepo.save(academiaRepo.create(base));
    for (const t of translations) {
      await acadTransRepo.save(acadTransRepo.create({ ...t, academia: item }));
    }
  }

  console.log(`${academiaItems.length} item(s) de Academia sembrados`);

  // Blog posts
  await AppDataSource.query('DELETE FROM post_translations').catch(() => {});
  await AppDataSource.query('DELETE FROM posts').catch(() => {});

  const postRepo = AppDataSource.getRepository('posts');
  const postTransRepo = AppDataSource.getRepository('post_translations');

  for (const p of blogPosts) {
    const { translations, ...base } = p;
    const post = await postRepo.save(postRepo.create(base));
    for (const t of translations) {
      await postTransRepo.save(postTransRepo.create({ ...t, post }));
    }
  }

  console.log(`${blogPosts.length} posts de blog sembrados`);

  // Update profile
  await AppDataSource.query('UPDATE profile SET title_es = ?, title_en = ?, bio_es = ?, bio_en = ? WHERE id = 1', [
    'Arquitecto de Software & Full Stack Developer',
    'Software Architect & Full Stack Developer',
    'Arquitecto de Software e Ingeniero en Sistemas con más de 10 años de experiencia. Especialista en apps de movilidad y transporte. Instructor en Udemy con más de 25,000 estudiantes y calificación 4.3.',
    'Software Architect and Systems Engineer with 10+ years of experience. Specialist in mobility and transportation apps. Udemy instructor with 25,000+ students and 4.3 rating.',
  ]).catch(() => console.log('Profile not yet created (will init on first request)'));

  await AppDataSource.destroy();
  console.log('Seed complete!');
}

seed().catch(console.error);
