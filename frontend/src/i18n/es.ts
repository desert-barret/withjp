export default {
  nav: {
    home: 'Inicio',
    about: 'Sobre mi',
    whatsapp: 'WhatsApp',
    academia: 'Academia',
    courses: 'Cursos',
    blog: 'Blog',
    contact: 'Contacto',
    admin: 'Admin',
  },

  // ── HOME ──────────────────────────────────────────────────
  home: {
    meta: {
      title: 'JP Guaman | Backend Engineer & AI — Sistemas escalables que funcionan',
      description: 'Backend Engineer con 10+ anos de experiencia. Diseno backends escalables, integro AI en productos reales y enseno a 25,000+ desarrolladores. NestJS, Python, Flutter.',
    },
    hero: {
      available: 'Disponible para proyectos',
      headline: 'Diseno backends que escalan y productos con AI que funcionan en produccion',
      description: 'Backend Engineer con 10+ anos construyendo sistemas distribuidos, APIs de alto rendimiento y productos con inteligencia artificial integrada. Tambien enseno lo que construyo: 25,000+ estudiantes en Udemy.',
      cta_primary: 'Hablemos de tu proyecto',
      cta_secondary: 'Ver mi trabajo',
    },
    stats: {
      years: 'Anos construyendo software',
      students: 'Estudiantes formados',
      courses: 'Cursos publicados',
    },
    what: {
      tag: 'Que hago',
      title: 'Problemas que resuelvo',
      subtitle: 'Me especializo en el tipo de trabajo que no se ve pero que sostiene todo: la arquitectura, la escalabilidad y la integracion de sistemas complejos.',
      backend: {
        title: 'Arquitectura Backend',
        description: 'Diseno e implemento APIs REST, microservicios y sistemas event-driven. Me enfoco en que el codigo sea mantenible, testeable y que soporte crecimiento real sin reescritura.',
      },
      ai: {
        title: 'AI aplicada a productos',
        description: 'Integro modelos de lenguaje en productos reales: flujos conversacionales, agentes autonomos, RAG y automatizacion inteligente. No demos, software en produccion.',
      },
      mobile: {
        title: 'Apps moviles full-stack',
        description: 'Construyo apps completas de extremo a extremo: mobile client, backend, base de datos, real-time, deployment. Proyectos que van de cero a produccion.',
      },
    },
    work: {
      tag: 'Trabajo seleccionado',
      title: 'Proyectos que demuestran como pienso',
      p1: {
        title: 'Plataforma de delivery internacional',
        type: 'Producto',
        description: 'Arquitectura completa de una app de delivery en produccion real: backend con NestJS, app movil con Flutter, sistema de geolocalizacion en tiempo real, pasarela de pagos y panel de administracion. Desplegada en servidores propios con Docker.',
        m1: 'Compras procesadas', m2: 'Usuarios registrados',
      },
      p2: {
        title: 'Automatizacion WhatsApp Business',
        type: 'Servicio',
        description: 'Sistema de atencion al cliente automatizado usando la API oficial de Meta. Flujos estructurados para FAQs, seguimiento de pedidos y agendamiento de citas. Cumplimiento total de politicas de WhatsApp Business.',
        m1: 'Disponibilidad', m2: 'Consultas resueltas sin agente',
      },
      p3: {
        title: 'Ecosistema de apps de transporte',
        type: 'Cursos + Codigo',
        description: 'Cinco implementaciones del mismo problema (app tipo Uber/InDriver) con diferentes stacks: Flutter+NestJS, Kotlin+NestJS, Kotlin+Django, Flutter+Django, React Native+Spring Boot. Cada uno con arquitectura limpia y comunicacion real-time.',
        m1: 'Stacks diferentes', m2: 'Backends distintos',
      },
    },
    teaching: {
      tag: 'Ensenanza',
      title: 'Cursos que construyen software real',
      subtitle: 'No tutoriales de TODO apps. Proyectos completos con arquitectura de produccion, deployment y codigo limpio.',
      see_all: 'Ver todos los cursos',
    },
    cta: {
      title: 'Necesitas un backend engineer que entienda tu problema?',
      subtitle: 'Si buscas alguien que disene la arquitectura, la implemente y la ponga en produccion, hablemos.',
      button_primary: 'Enviar email',
      button_secondary: 'Conectar en LinkedIn',
    },
  },

  // ── ABOUT ─────────────────────────────────────────────────
  about: {
    meta: {
      title: 'Sobre Mi | JP Guaman — Backend Engineer & AI',
      description: 'Backend Engineer con 10+ anos de experiencia. Sistemas distribuidos, AI aplicada, instructor Udemy con 25K+ estudiantes.',
    },
    role: 'Backend Engineer & AI — Loja, Ecuador',
    bio: {
      p1: 'Llevo mas de 10 anos construyendo software. Empece con aplicaciones web simples y fui escalando hacia sistemas mas complejos: backends distribuidos, apps moviles de alto trafico, integraciones con APIs de terceros y, en los ultimos anos, productos con inteligencia artificial integrada.',
      p2: 'Mi enfoque no es usar la tecnologia mas nueva, sino la que resuelve el problema. He trabajado con NestJS, Python, Flutter, Kotlin, Django, Spring Boot, y varias bases de datos en proyectos reales de produccion. Lo que me interesa es que el sistema funcione, sea mantenible y soporte crecimiento.',
      p3: 'Tambien enseno. Tengo 17 cursos publicados en Udemy con mas de 25,000 estudiantes. Todos basados en proyectos reales, no demos. Si quieres ver como pienso, mira mis cursos. Si quieres trabajar conmigo, escribeme.',
    },
    stats: {
      years: 'Anos de experiencia',
      students: 'Estudiantes',
      courses: 'Cursos',
      rating: 'Rating Udemy',
    },
    strengths: {
      title: 'Que aporto a un equipo',
      s1: { title: 'Arquitectura que escala', desc: 'Diseno sistemas pensando en que van a crecer. No solo resuelvo el problema de hoy, sino que dejo el codigo preparado para lo que viene sin sobre-ingenieria.' },
      s2: { title: 'De idea a produccion', desc: 'No necesito que otro deploy mi codigo. Manejo el ciclo completo: desde el diseno del schema hasta el Docker compose en produccion.' },
      s3: { title: 'AI como herramienta, no como buzzword', desc: 'Integro LLMs donde tienen sentido. Flujos conversacionales, agentes, RAG. Pero no meto AI donde no se necesita.' },
      s4: { title: 'Comunicacion clara', desc: 'Se explicar decisiones tecnicas a personas no tecnicas. 25,000 estudiantes lo confirman.' },
    },
    stack: { title: 'Stack tecnico' },
    cta: {
      title: 'Interesado en trabajar juntos?',
      subtitle: 'Consultoria, proyecto freelance o posicion full-time. Estoy abierto a la conversacion.',
      email: 'Enviar email',
    },
  },

  // ── VISION / PRODUCT (WhatsApp) ───────────────────────────
  vision: {
    meta: {
      title: 'Automatizacion WhatsApp Business | withjp.ai',
      description: 'Automatizacion de atencion al cliente con WhatsApp Business API. Flujos estructurados, API oficial de Meta, cumplimiento total.',
    },
    badge: 'Producto · WhatsApp Business API',
    hero: {
      headline: 'Atencion al cliente automatizada con WhatsApp Business API',
      description: 'Construyo sistemas de atencion automatica usando la API oficial de Meta. Flujos estructurados para FAQs, pedidos, citas y soporte. No chatbots genericos — automatizacion con logica de negocio real.',
      cta: 'Consultar disponibilidad',
    },
    demo: {
      title: 'Asi funciona en la practica',
      business: 'Tu Empresa',
      status: 'Flujo automatizado',
      msg1: 'Donde esta mi pedido?',
      msg2: 'Hola! Soy el asistente de atencion. Para consultar tu pedido necesito tu numero de orden.',
      msg3: 'Es el #4521',
      msg4: 'Tu pedido #4521 esta en camino. Fecha estimada de entrega: manana entre 09:00 y 13:00. Que deseas hacer?',
      opt1: 'Ver detalle del pedido',
      opt2: 'Hablar con un agente',
      opt3: 'Solicitar cancelacion',
      note: 'Flujo automatizado - Solo usuarios con opt-in reciben mensajes',
      f1: 'Respuesta inmediata, 24 horas al dia, 7 dias a la semana',
      f2: 'Flujos estructurados con logica de negocio, no conversacion abierta',
      f3: 'Escalado automatico a agente humano cuando el flujo no puede resolver',
      f4: 'Registro completo de cada interaccion para metricas y auditoria',
    },
    problem: {
      title: 'El problema',
      p1: 'Tu equipo responde las mismas preguntas 200 veces al dia',
      p2: 'Los clientes esperan horas por respuestas que podrian ser instantaneas',
      p3: 'Fuera de horario laboral, nadie responde',
      p4: 'No hay trazabilidad de las conversaciones ni metricas de atencion',
    },
    solution: {
      title: 'Lo que construyo',
      s1: 'Flujos automaticos que resuelven el 80% de consultas sin intervencion humana',
      s2: 'Escalado inteligente: solo llega a tu equipo lo que realmente necesita atencion',
      s3: 'Integracion con tus sistemas internos (CRM, ERP, base de datos) para respuestas en tiempo real',
      s4: 'Cumplimiento total de politicas de Meta: opt-in, plantillas aprobadas, opt-out siempre',
    },
    how: {
      title: 'Como trabajo',
      s1: { title: 'Diagnostico', desc: 'Entiendo tu operacion actual y donde la automatizacion tiene impacto real.' },
      s2: { title: 'Diseno', desc: 'Propongo flujos concretos con ejemplos de conversacion y logica de negocio.' },
      s3: { title: 'Implementacion', desc: 'Construyo el backend, conecto tus sistemas y configuro la API de Meta.' },
      s4: { title: 'Go live', desc: 'Testing conjunto, lanzamiento y acompanamiento post-lanzamiento.' },
    },
    stack: {
      title: 'Stack tecnico',
      description: 'Todo construido sobre la API oficial de Meta. Sin herramientas de terceros no autorizadas.',
    },
    cta: {
      title: 'Quieres automatizar tu atencion al cliente?',
      subtitle: 'Cuentame tu caso. Respondo en menos de 24 horas.',
      button: 'Contactar',
    },
  },

  // ── ACADEMIA PAGE ─────────────────────────────────────────
  academia_page: {
    meta: {
      title: 'Academia | Cursos de desarrollo real | withjp.ai',
      description: 'Cursos practicos de Flutter, NestJS, React, Kotlin, AI. 25,000+ estudiantes. Proyectos reales, no demos.',
    },
    badge: 'Educacion tecnica',
    hero: {
      title: 'Cursos que construyen software real',
      subtitle: 'No tutoriales basicos. Proyectos completos con arquitectura de produccion, deployment y codigo limpio. 25,000+ estudiantes en 4 continentes.',
    },
    stats: { students: 'Estudiantes', courses: 'Cursos', rating: 'Rating promedio' },
    udemy: { title: 'En Udemy', subtitle: 'Cursos completos con proyectos reales.', see_all: 'Ver todos' },
    private: {
      title: 'Academia JP',
      subtitle: 'Cursos exclusivos que no estan en ninguna otra plataforma. AI, Claude Code, desarrollo avanzado.',
      access: 'Acceder', coming_soon: 'Proximamente',
    },
  },

  // ── COURSES PAGE ──────────────────────────────────────────
  courses_page: {
    meta: {
      title: 'Cursos | Flutter, NestJS, React, Kotlin, AI | withjp.ai',
      description: 'Catalogo completo de cursos. Proyectos reales de produccion con arquitectura limpia.',
    },
    title: 'Todos los cursos',
    subtitle: '17 cursos. Cada uno es un proyecto completo, no un tutorial.',
    featured: 'Destacado',
    no_courses: 'No hay cursos en esta categoria.',
    view_on_udemy: 'Ver en Udemy',
    related: 'Cursos relacionados',
    back_to_courses: 'Volver a cursos',
  },

  // ── BLOG PAGE ─────────────────────────────────────────────
  blog_page: {
    meta: {
      title: 'Blog | Arquitectura, AI y desarrollo | withjp.ai',
      description: 'Articulos tecnicos sobre arquitectura backend, AI aplicada, Flutter, NestJS y desarrollo de software.',
    },
    title: 'Blog',
    subtitle: 'Articulos tecnicos sobre lo que construyo, como lo construyo y por que tomo esas decisiones.',
    no_posts: 'No hay articulos publicados aun.',
    read: 'min de lectura',
    back: 'Volver al blog',
  },

  // ── LEGAL ─────────────────────────────────────────────────
  legal: {
    privacy: { title: 'Politica de Privacidad', content: '' },
    terms: { title: 'Terminos y Condiciones', content: '' },
    cookies: { title: 'Politica de Cookies', content: '' },
    whatsapp_policy: { title: 'Politica WhatsApp Business', content: '' },
  },

  // ── FOOTER ────────────────────────────────────────────────
  footer: {
    pages: 'Paginas',
    resources: 'Recursos',
    privacy: 'Privacidad',
    terms: 'Terminos',
    whatsapp_policy: 'WhatsApp Policy',
  },

  courses: {
    category: { all: 'Todos', web: 'Web', mobile: 'Mobile', automation: 'Automatizacion', ai: 'IA' },
  },

  // ── ADMIN ─────────────────────────────────────────────────
  admin: {
    login: 'Iniciar Sesion', logout: 'Cerrar Sesion', dashboard: 'Panel',
    courses: 'Cursos', profile: 'Perfil', email: 'Correo', password: 'Contrasena',
    save: 'Guardar', cancel: 'Cancelar', delete: 'Eliminar', edit: 'Editar', create: 'Crear',
    new_course: 'Nuevo Curso', confirm_delete: 'Eliminar este curso?',
    saved: 'Guardado', error: 'Error', loading: 'Cargando...',
    title_es: 'Titulo (ES)', title_en: 'Titulo (EN)',
    description_es: 'Descripcion (ES)', description_en: 'Descripcion (EN)',
    short_desc_es: 'Descripcion corta (ES)', short_desc_en: 'Descripcion corta (EN)',
    image_url: 'URL imagen', demo_url: 'URL demo', github_url: 'URL GitHub',
    technologies: 'Tecnologias', category: 'Categoria',
    featured: 'Destacado', active: 'Activo', sort_order: 'Orden',
  },

  common: {
    loading: 'Cargando...', error: 'Error', not_found: 'No encontrado',
    back: 'Volver', language: 'Idioma', theme_dark: 'Oscuro', theme_light: 'Claro',
  },
};
