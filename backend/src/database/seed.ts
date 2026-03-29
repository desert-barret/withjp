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

async function seed() {
  await AppDataSource.initialize();
  console.log('📦 Connected to database');

  // Admin user
  const userRepo = AppDataSource.getRepository('users');
  const existing = await userRepo.findOne({ where: { email: 'admin@withjp.ai' } });
  if (!existing) {
    const hashed = await bcrypt.hash('withjp2024!', 10);
    await userRepo.save({ email: 'admin@withjp.ai', password: hashed, role: 'admin' });
    console.log('✅ Admin created: admin@withjp.ai / withjp2024!');
  } else {
    console.log('ℹ️  Admin already exists');
  }

  // Courses — drop all translations first, then courses
  await AppDataSource.query('DELETE FROM course_translations');
  await AppDataSource.query('DELETE FROM courses');

  const courseRepo = AppDataSource.getRepository('courses');
  const translationRepo = AppDataSource.getRepository('course_translations');

  for (const c of courses) {
    const { translations, ...base } = c;
    const course = await courseRepo.save(courseRepo.create(base));
    for (const t of translations) {
      await translationRepo.save(translationRepo.create({ ...t, course }));
    }
  }

  console.log(`✅ ${courses.length} cursos de Udemy sembrados`);

  // Update profile
  await AppDataSource.query('UPDATE profile SET title_es = ?, title_en = ?, bio_es = ?, bio_en = ? WHERE id = 1', [
    'Arquitecto de Software & Full Stack Developer',
    'Software Architect & Full Stack Developer',
    'Arquitecto de Software e Ingeniero en Sistemas con más de 10 años de experiencia. Especialista en apps de movilidad y transporte. Instructor en Udemy con más de 25,000 estudiantes y calificación 4.3.',
    'Software Architect and Systems Engineer with 10+ years of experience. Specialist in mobility and transportation apps. Udemy instructor with 25,000+ students and 4.3 rating.',
  ]).catch(() => console.log('ℹ️  Profile not yet created (will init on first request)'));

  await AppDataSource.destroy();
  console.log('🎉 Seed complete!');
}

seed().catch(console.error);
