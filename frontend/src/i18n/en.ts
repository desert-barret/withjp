export default {
  nav: {
    home: 'Home',
    about: 'About',
    whatsapp: 'Product',
    academia: 'Academy',
    courses: 'Courses',
    blog: 'Blog',
    contact: 'Contact',
    admin: 'Admin',
  },

  // ── HOME ──────────────────────────────────────────────────
  home: {
    meta: {
      title: 'JP Guaman | Backend Engineer & AI — Scalable systems that work',
      description: 'Backend Engineer with 10+ years of experience. I design scalable backends, integrate AI into real products and teach 25,000+ developers. NestJS, Python, Flutter.',
    },
    hero: {
      available: 'Available for projects',
      headline: 'I build backends that scale and AI products that work in production',
      description: 'Backend Engineer with 10+ years building distributed systems, high-performance APIs and products with integrated artificial intelligence. I also teach what I build: 25,000+ students on Udemy.',
      cta_primary: "Let's talk about your project",
      cta_secondary: 'See my work',
    },
    stats: {
      years: 'Years building software',
      students: 'Students trained',
      courses: 'Published courses',
    },
    what: {
      tag: 'What I do',
      title: 'Problems I solve',
      subtitle: "I specialize in the kind of work that's invisible but holds everything together: architecture, scalability and complex system integration.",
      backend: {
        title: 'Backend Architecture',
        description: 'I design and implement REST APIs, microservices and event-driven systems. I focus on code that is maintainable, testable and supports real growth without rewrites.',
      },
      ai: {
        title: 'AI applied to products',
        description: 'I integrate language models into real products: conversational flows, autonomous agents, RAG and intelligent automation. Not demos — production software.',
      },
      mobile: {
        title: 'Full-stack mobile apps',
        description: 'I build complete apps end to end: mobile client, backend, database, real-time, deployment. Projects that go from zero to production.',
      },
    },
    work: {
      tag: 'Selected work',
      title: 'Projects that show how I think',
      p1: {
        title: 'International delivery platform',
        type: 'Product',
        description: 'Complete architecture for a real production delivery app: NestJS backend, Flutter mobile app, real-time geolocation system, payment gateway and admin panel. Self-hosted with Docker.',
        m1: 'Purchases processed', m2: 'Registered users',
      },
      p2: {
        title: 'WhatsApp Business automation',
        type: 'Service',
        description: "Automated customer service system using Meta's official API. Structured flows for FAQs, order tracking and appointment scheduling. Full WhatsApp Business policy compliance.",
        m1: 'Availability', m2: 'Queries resolved without agent',
      },
      p3: {
        title: 'Ride-sharing app ecosystem',
        type: 'Courses + Code',
        description: 'Five implementations of the same problem (Uber/InDriver-style app) with different stacks: Flutter+NestJS, Kotlin+NestJS, Kotlin+Django, Flutter+Django, React Native+Spring Boot. Each with clean architecture and real-time communication.',
        m1: 'Different stacks', m2: 'Distinct backends',
      },
    },
    teaching: {
      tag: 'Teaching',
      title: 'Courses that build real software',
      subtitle: 'Not TODO app tutorials. Complete projects with production architecture, deployment and clean code.',
      see_all: 'View all courses',
    },
    cta: {
      title: 'Need a backend engineer who understands your problem?',
      subtitle: "If you're looking for someone who designs the architecture, implements it and ships it to production, let's talk.",
      button_primary: 'Send email',
      button_secondary: 'Connect on LinkedIn',
    },
  },

  // ── ABOUT ─────────────────────────────────────────────────
  about: {
    meta: {
      title: 'About Me | JP Guaman — Backend Engineer & AI',
      description: 'Backend Engineer with 10+ years of experience. Distributed systems, applied AI, Udemy instructor with 25K+ students.',
    },
    role: 'Backend Engineer & AI — Loja, Ecuador',
    bio: {
      p1: "I've been building software for over 10 years. I started with simple web apps and scaled up to more complex systems: distributed backends, high-traffic mobile apps, third-party API integrations and, in recent years, products with integrated artificial intelligence.",
      p2: "My approach isn't to use the newest technology, but the one that solves the problem. I've worked with NestJS, Python, Flutter, Kotlin, Django, Spring Boot, and various databases on real production projects. What I care about is that the system works, is maintainable and supports growth.",
      p3: "I also teach. I have 17 published courses on Udemy with over 25,000 students. All project-based, not demos. If you want to see how I think, check my courses. If you want to work with me, get in touch.",
    },
    stats: {
      years: 'Years of experience',
      students: 'Students',
      courses: 'Courses',
      rating: 'Udemy Rating',
    },
    strengths: {
      title: 'What I bring to a team',
      s1: { title: 'Architecture that scales', desc: "I design systems thinking about growth. I don't just solve today's problem — I leave the code prepared for what's coming, without over-engineering." },
      s2: { title: 'From idea to production', desc: "I don't need someone else to deploy my code. I handle the full cycle: from schema design to the Docker compose in production." },
      s3: { title: 'AI as a tool, not a buzzword', desc: "I integrate LLMs where they make sense. Conversational flows, agents, RAG. But I don't put AI where it's not needed." },
      s4: { title: 'Clear communication', desc: 'I can explain technical decisions to non-technical people. 25,000 students confirm it.' },
    },
    stack: { title: 'Tech stack' },
    cta: {
      title: 'Interested in working together?',
      subtitle: 'Consulting, freelance project or full-time position. Open to the conversation.',
      email: 'Send email',
    },
  },

  // ── VISION / PRODUCT (WhatsApp) ───────────────────────────
  vision: {
    meta: {
      title: 'WhatsApp Business Automation | withjp.ai',
      description: "Customer service automation with WhatsApp Business API. Structured flows, Meta's official API, full compliance.",
    },
    badge: 'Product · WhatsApp Business API',
    hero: {
      headline: 'Automated customer service with WhatsApp Business API',
      description: "I build automated support systems using Meta's official API. Structured flows for FAQs, orders, appointments and support. Not generic chatbots — automation with real business logic.",
      cta: 'Check availability',
    },
    problem: {
      title: 'The problem',
      p1: 'Your team answers the same questions 200 times a day',
      p2: 'Customers wait hours for answers that could be instant',
      p3: 'After business hours, nobody responds',
      p4: 'No conversation traceability or service metrics',
    },
    solution: {
      title: 'What I build',
      s1: '80% of queries resolved automatically without human intervention',
      s2: 'Smart escalation: only what truly needs attention reaches your team',
      s3: 'Integration with your internal systems (CRM, ERP, database) for real-time responses',
      s4: "Full Meta policy compliance: opt-in, approved templates, opt-out always available",
    },
    how: {
      title: 'How I work',
      s1: { title: 'Diagnostic', desc: 'I understand your current operation and where automation has real impact.' },
      s2: { title: 'Design', desc: 'I propose concrete flows with conversation examples and business logic.' },
      s3: { title: 'Implementation', desc: "I build the backend, connect your systems and configure Meta's API." },
      s4: { title: 'Go live', desc: 'Joint testing, launch and post-launch support.' },
    },
    stack: {
      title: 'Tech stack',
      description: "Everything built on Meta's official API. No unauthorized third-party tools.",
    },
    cta: {
      title: 'Want to automate your customer service?',
      subtitle: 'Tell me your case. I respond within 24 hours.',
      button: 'Get in touch',
    },
  },

  // ── ACADEMIA PAGE ─────────────────────────────────────────
  academia_page: {
    meta: {
      title: 'Academy | Real development courses | withjp.ai',
      description: 'Hands-on courses: Flutter, NestJS, React, Kotlin, AI. 25,000+ students. Real projects, not demos.',
    },
    badge: 'Technical education',
    hero: {
      title: 'Courses that build real software',
      subtitle: 'Not basic tutorials. Complete projects with production architecture, deployment and clean code. 25,000+ students across 4 continents.',
    },
    stats: { students: 'Students', courses: 'Courses', rating: 'Average rating' },
    udemy: { title: 'On Udemy', subtitle: 'Complete courses with real projects.', see_all: 'View all' },
    private: {
      title: 'JP Academy',
      subtitle: "Exclusive courses you won't find on any other platform. AI, Claude Code, advanced development.",
      access: 'Access', coming_soon: 'Coming Soon',
    },
  },

  // ── COURSES PAGE ──────────────────────────────────────────
  courses_page: {
    meta: {
      title: 'Courses | Flutter, NestJS, React, Kotlin, AI | withjp.ai',
      description: 'Full course catalog. Real production projects with clean architecture.',
    },
    title: 'All courses',
    subtitle: '17 courses. Each one is a complete project, not a tutorial.',
    featured: 'Featured',
    no_courses: 'No courses in this category.',
    view_on_udemy: 'View on Udemy',
    related: 'Related courses',
    back_to_courses: 'Back to courses',
  },

  // ── BLOG PAGE ─────────────────────────────────────────────
  blog_page: {
    meta: {
      title: 'Blog | Architecture, AI and development | withjp.ai',
      description: 'Technical articles on backend architecture, applied AI, Flutter, NestJS and software development.',
    },
    title: 'Blog',
    subtitle: 'Technical articles about what I build, how I build it and why I make those decisions.',
    no_posts: 'No articles published yet.',
    read: 'min read',
    back: 'Back to blog',
  },

  // ── LEGAL ─────────────────────────────────────────────────
  legal: {
    privacy: { title: 'Privacy Policy', content: '' },
    terms: { title: 'Terms & Conditions', content: '' },
    cookies: { title: 'Cookie Policy', content: '' },
    whatsapp_policy: { title: 'WhatsApp Business Policy', content: '' },
  },

  // ── FOOTER ────────────────────────────────────────────────
  footer: {
    pages: 'Pages',
    resources: 'Resources',
    privacy: 'Privacy',
    terms: 'Terms',
    whatsapp_policy: 'WhatsApp Policy',
  },

  courses: {
    category: { all: 'All', web: 'Web', mobile: 'Mobile', automation: 'Automation', ai: 'AI' },
  },

  // ── ADMIN ─────────────────────────────────────────────────
  admin: {
    login: 'Login', logout: 'Logout', dashboard: 'Dashboard',
    courses: 'Courses', profile: 'Profile', email: 'Email', password: 'Password',
    save: 'Save', cancel: 'Cancel', delete: 'Delete', edit: 'Edit', create: 'Create',
    new_course: 'New Course', confirm_delete: 'Delete this course?',
    saved: 'Saved', error: 'Error', loading: 'Loading...',
    title_es: 'Title (ES)', title_en: 'Title (EN)',
    description_es: 'Description (ES)', description_en: 'Description (EN)',
    short_desc_es: 'Short desc (ES)', short_desc_en: 'Short desc (EN)',
    image_url: 'Image URL', demo_url: 'Demo URL', github_url: 'GitHub URL',
    technologies: 'Technologies', category: 'Category',
    featured: 'Featured', active: 'Active', sort_order: 'Order',
  },

  common: {
    loading: 'Loading...', error: 'Error', not_found: 'Not found',
    back: 'Back', language: 'Language', theme_dark: 'Dark', theme_light: 'Light',
  },
};
