export default {
  nav: {
    home: 'Home',
    about: 'About',
    whatsapp: 'WhatsApp',
    academia: 'Academy',
    courses: 'Courses',
    blog: 'Blog',
    contact: 'Contact',
    admin: 'Admin',
  },

  // ── HOME PAGE ─────────────────────────────────────────────
  home: {
    meta: {
      title: 'withjp.ai | Juan Pablo Guaman - Software Architect & Developer',
      description: 'Software Architect, WhatsApp Business Automation, 25,000+ Udemy students. Courses, academy and consulting services.',
    },
    hero: {
      available: 'Available for new projects',
      headline: 'Software, automation and education that drive real impact',
      description: 'Software Architect with 10+ years of experience. I automate customer service with WhatsApp Business API and train developers with hands-on courses.',
      cta_primary: 'Automate your WhatsApp',
      cta_secondary: 'View courses',
    },
    stats: {
      experience: 'Years of experience',
      students: 'Students',
      courses: 'Published courses',
      meta_api: 'Official Meta API',
    },
    services: {
      tag: 'What I offer',
      title: 'Three pillars, one goal: results',
      whatsapp: {
        title: 'WhatsApp Automation',
        description: 'Automated support flows with the official Meta API. FAQs, orders, appointments and 24/7 support without agents.',
      },
      courses: {
        title: 'Courses & Training',
        description: '17 courses on Udemy + JP Academy. Flutter, NestJS, React, Kotlin, AI. 25,000+ students across 4 continents.',
      },
      dev: {
        title: 'Custom Development',
        description: 'Software architecture, mobile apps, scalable backends. Real projects with clean code and production-ready quality.',
      },
    },
    how: {
      tag: 'How it works',
      title: 'Automate your support in 3 steps',
      step1: { title: 'Connect your WhatsApp Business', description: 'We link your official number with the Meta API. Everything within the official ecosystem.' },
      step2: { title: 'We define your flows', description: 'I design custom flows: FAQs, orders, appointments, support. Whatever your business needs.' },
      step3: { title: 'Your team serves better', description: 'The system responds 24/7. Your team only receives conversations that truly need human intervention.' },
    },
    courses: {
      tag: 'Featured courses',
      title: 'Learn with me',
      see_all: 'View all courses',
    },
    faq: {
      title: 'Frequently asked questions',
      q1: { question: 'Is this an AI chatbot or an automated flow?', answer: "It's automation with structured flows, not an open-ended AI chatbot. The system follows paths defined by your business. AI is used internally to understand user intent within those flows." },
      q2: { question: "Does it comply with Meta's WhatsApp Business policies?", answer: "Yes. I work exclusively with the official API. Only messages with consent (opt-in), Meta-approved templates and opt-out always available." },
      q3: { question: 'How long does it take to go live?', answer: 'A basic flow can be live in 1 to 2 weeks. Projects with internal system integrations take between 3 and 6 weeks.' },
      q4: { question: 'Can I see a demo before deciding?', answer: "Yes. If your case allows it, I build a working demo so you can see exactly how your flows would look before committing." },
      q5: { question: 'What happens when a customer needs a human?', answer: "The system detects when it can't resolve the query and automatically escalates to a human agent. The customer is never left without a response." },
    },
    cta: {
      title: 'Ready to get started?',
      subtitle: 'Automate your customer service or learn to build real software.',
      button_primary: 'Automate my WhatsApp',
      button_secondary: 'Explore courses',
    },
  },

  // ── ABOUT PAGE ────────────────────────────────────────────
  about: {
    meta: {
      title: 'About Me | Juan Pablo Guaman Rodriguez | withjp.ai',
      description: 'Software Architect with 10+ years of experience. Udemy instructor with 25,000+ students. Specialist in Flutter, NestJS and WhatsApp Business API.',
    },
    stats: {
      experience: 'Years of experience',
      students: 'Students',
      courses: 'Published courses',
      rating: 'Udemy Rating',
    },
    journey: {
      title: 'My journey',
      m1: { title: 'Started in development', description: 'Began my career as a software developer, building web and mobile systems for local businesses.' },
      m2: { title: 'First Udemy course', description: 'Published my first mobile development course. The response was incredible and motivated me to keep creating educational content.' },
      m3: { title: '25,000 students', description: 'Reached 25,000+ students on Udemy with 17 published courses. Active community on YouTube.' },
      m4: { title: 'WhatsApp Business API', description: 'Specialized in customer service automation with the official WhatsApp Business API from Meta.' },
      m5: { title: 'JP Academy', description: 'Launched my own educational platform with exclusive courses on AI, Claude Code and advanced development.' },
    },
    tech: { title: 'Tech stack' },
    cta: { title: "Let's work together", button: 'Contact via WhatsApp' },
  },

  // ── WHATSAPP PAGE ─────────────────────────────────────────
  whatsapp: {
    meta: {
      title: 'WhatsApp Business API Automation | withjp.ai',
      description: 'Automate your customer service on WhatsApp with structured flows. Official Meta API. FAQs, orders, appointments and 24/7 support.',
    },
    hero: {
      headline: 'Your customers message you on WhatsApp. How many go unanswered?',
      description: 'Automate 80% of queries with intelligent flows. Official Meta API. No spam. No risk.',
      cta: 'Book a free diagnostic call',
    },
    problem: {
      title: 'The problem',
      p1: 'You manually respond to 200+ messages daily',
      p2: 'Your customers wait hours for a simple answer',
      p3: 'Your team wastes time on repetitive questions',
      p4: 'After hours, nobody responds',
    },
    solution: {
      title: 'The solution',
      s1: 'Automatic responses in seconds, 24/7',
      s2: 'Only escalate what truly needs human attention',
      s3: 'Custom flows designed for your business',
      s4: "Full compliance with Meta's policies",
    },
    cases: {
      title: 'Real use cases',
      faq: { title: 'Automated FAQs', desc: 'Instantly answer hours, prices and policies.', result: '80% queries resolved without an agent' },
      orders: { title: 'Order tracking', desc: 'Customer checks their status in seconds.', result: '-60% manual tracking queries' },
      appointments: { title: 'Appointment scheduling', desc: 'Direct booking via WhatsApp.', result: '+40% appointments booked automatically' },
      support: { title: 'After-sales support', desc: 'Classify and escalate issues to the right team.', result: '80% FAQs resolved without human' },
      leads: { title: 'Lead qualification', desc: 'Filter prospects and pass only qualified ones.', result: '+35% qualified leads for sales' },
      notifications: { title: 'Notifications', desc: 'Confirmations, reminders and alerts.', result: '99.5% message delivery rate' },
    },
    process: {
      title: 'How the process works',
      s1: { title: 'Discovery call', desc: '15 minutes to understand your business and goals.' },
      s2: { title: 'Flow design', desc: 'I present custom flows with real conversation examples.' },
      s3: { title: 'Implementation', desc: 'I build, connect your systems and configure the API.' },
      s4: { title: 'Go live', desc: 'We test together and I support you through launch.' },
    },
    trust: {
      title: 'Why trust this',
      t1: { title: 'Official Meta API', desc: 'Zero risk of being blocked. Only official tools.' },
      t2: { title: 'Full compliance', desc: 'Mandatory opt-in, approved templates, opt-out always.' },
      t3: { title: 'Custom, not template', desc: 'Each flow is designed for your specific business.' },
      t4: { title: 'Post-launch support', desc: "I'm there after go-live. I don't disappear." },
    },
    faq: {
      title: 'Questions about WhatsApp Automation',
      q1: { q: 'How much does it cost?', a: "It depends on the number of flows and integrations. Tell me your case and I'll give you a quote at no cost." },
      q2: { q: 'Does it work with regular WhatsApp?', a: "No. It exclusively uses the official WhatsApp Business API from Meta. You need a verified Business account." },
      q3: { q: 'What if I need changes later?', a: "Flows are 100% modifiable. I can add new flows or adjust existing ones at any time." },
      q4: { q: 'How long until it goes live?', a: 'A basic flow takes 1-2 weeks. Projects with complex integrations take 3-6 weeks.' },
    },
    cta: {
      title: 'I only take 3 new projects per month',
      subtitle: 'Will yours be one of them?',
      button: 'Reserve my spot',
    },
  },

  // ── ACADEMIA PAGE ─────────────────────────────────────────
  academia_page: {
    meta: {
      title: 'Academy | Programming Courses | withjp.ai',
      description: 'Learn to build real software. 25,000+ students, 17 courses on Udemy. Flutter, NestJS, React, Kotlin, AI.',
    },
    badge: 'Learning Platform',
    hero: {
      title: 'Learn to build real software',
      subtitle: 'Hands-on courses, real projects, production architecture. 25,000+ students across 4 continents.',
    },
    stats: {
      students: 'Students',
      courses: 'Published courses',
      rating: 'Average rating',
    },
    udemy: {
      title: 'Udemy Courses',
      subtitle: 'Complete courses with real production projects.',
      see_all: 'View all',
    },
    private: {
      title: 'JP Academy',
      subtitle: "Exclusive courses with direct access. Content you won't find on any other platform.",
      access: 'Access Course',
      coming_soon: 'Coming Soon',
    },
  },

  // ── COURSES PAGE ──────────────────────────────────────────
  courses_page: {
    meta: {
      title: 'Programming Courses | Flutter, NestJS, React, Kotlin | withjp.ai',
      description: 'Complete course catalog. Flutter, NestJS, React, TypeScript, Kotlin, Android. Real production projects.',
    },
    title: 'All Courses',
    subtitle: '17 courses with real projects. From beginner to professional.',
    featured: 'Featured',
    no_courses: 'No courses available in this category.',
    view_on_udemy: 'View on Udemy',
    related: 'Related courses',
    back_to_courses: 'Back to courses',
  },

  // ── BLOG PAGE ─────────────────────────────────────────────
  blog_page: {
    meta: {
      title: 'Blog | Articles on development and automation | withjp.ai',
      description: 'Articles on WhatsApp Business, Flutter, NestJS, React and more. Practical guides and comparisons.',
    },
    title: 'Blog',
    subtitle: 'Articles on software development, automation and artificial intelligence.',
    no_posts: 'No articles published yet.',
    read: 'min read',
    back: 'Back to blog',
  },

  // ── LEGAL PAGES ───────────────────────────────────────────
  legal: {
    privacy: {
      title: 'Privacy Policy',
      content: '<h2>1. Data Controller</h2><p>Juan Pablo Guaman Rodriguez, Loja, Ecuador. Email: info@withjp.ai</p><h2>2. Data We Collect</h2><p>We only collect data you voluntarily provide through contact forms (name, email, message) and technical data necessary for the site to function (technical cookies).</p><h2>3. Purpose</h2><p>Data is used exclusively to respond to your inquiry and improve our services. We do not sell or share data with third parties.</p><h2>4. WhatsApp Business API</h2><p>For the automation service, Meta Platforms, Inc. acts as data processor. We only contact users with explicit consent (opt-in). You can cancel at any time by replying STOP.</p><h2>5. Your Rights</h2><p>You have the right to Access, Rectification, Cancellation and Opposition. Exercise them by writing to info@withjp.ai</p><h2>6. Applicable Law</h2><p>Ecuador\'s Organic Law on Personal Data Protection.</p><p><em>Last updated: April 2026</em></p>',
    },
    terms: {
      title: 'Terms & Conditions',
      content: '<h2>1. Identity</h2><p>Juan Pablo Guaman Rodriguez, Loja, Ecuador. Email: info@withjp.ai</p><h2>2. Services Offered</h2><p>withjp.ai offers: (a) software consulting and development services, (b) online courses through Udemy and JP Academy, (c) customer service automation via WhatsApp Business API.</p><h2>3. Intellectual Property</h2><p>All site content (text, images, code, courses) is property of Juan Pablo Guaman Rodriguez unless otherwise indicated.</p><h2>4. Limitation of Liability</h2><p>Services are provided "as is". We do not guarantee specific automation results, as they depend on factors external to the service.</p><h2>5. Third-Party Data Processors</h2><p>Meta Platforms, Inc. acts as data processor for WhatsApp Business API communications.</p><h2>6. Jurisdiction</h2><p>These terms are governed by the laws of the Republic of Ecuador.</p><p><em>Last updated: April 2026</em></p>',
    },
    cookies: {
      title: 'Cookie Policy',
      content: '<h2>Cookies We Use</h2><p>withjp.ai only uses technical and functional cookies necessary for the site to work properly:</p><ul><li><strong>withjp_theme</strong> — Theme preference (dark/light)</li><li><strong>withjp_lang</strong> — Language preference (es/en)</li><li><strong>withjp_token</strong> — Admin panel authentication token</li></ul><h2>No Tracking Cookies</h2><p>We do not use advertising, behavioral tracking or third-party cookies. We do not use Google Analytics or similar tracking tools.</p><h2>Cookie Control</h2><p>You can delete cookies at any time from your browser settings.</p><p><em>Last updated: April 2026</em></p>',
    },
    whatsapp_policy: {
      title: 'WhatsApp Business Policy',
      content: '<h2>WhatsApp Business API Usage</h2><p>withjp.ai uses the official WhatsApp Business API from Meta to automate customer service for businesses.</p><h2>Messaging Policy</h2><ul><li>We only contact users who have given explicit consent (opt-in)</li><li>We exclusively use Meta-approved message templates</li><li>Opt-out is always available: reply STOP at any time</li><li>We do not send spam or unsolicited mass messages</li></ul><h2>Data & Privacy</h2><p>Meta Platforms, Inc. acts as data processor for WhatsApp communications. Conversation data is stored in accordance with Meta\'s policies and Ecuadorian data protection legislation.</p><h2>Compliance</h2><p>We comply with the WhatsApp Business Policy, WhatsApp Commerce Policy and Meta Business Platform terms of service.</p><h2>Contact</h2><p>For questions about this policy: info@withjp.ai</p><p><em>Last updated: April 2026</em></p>',
    },
  },

  // ── FOOTER ────────────────────────────────────────────────
  footer: {
    pages: 'Pages',
    resources: 'Resources',
    rights: 'All rights reserved',
    privacy: 'Privacy',
    terms: 'Terms',
    whatsapp_policy: 'WhatsApp Policy',
  },

  // ── COURSES (shared) ──────────────────────────────────────
  courses: {
    category: {
      all: 'All',
      web: 'Web',
      mobile: 'Mobile',
      automation: 'Automation',
      ai: 'AI',
    },
  },

  // ── ADMIN ─────────────────────────────────────────────────
  admin: {
    login: 'Login',
    logout: 'Logout',
    dashboard: 'Dashboard',
    courses: 'Courses',
    profile: 'Profile',
    email: 'Email',
    password: 'Password',
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    edit: 'Edit',
    create: 'Create',
    new_course: 'New Course',
    confirm_delete: 'Delete this course?',
    saved: 'Saved successfully',
    error: 'Error saving',
    loading: 'Loading...',
    title_es: 'Title (ES)',
    title_en: 'Title (EN)',
    description_es: 'Description (ES)',
    description_en: 'Description (EN)',
    short_desc_es: 'Short description (ES)',
    short_desc_en: 'Short description (EN)',
    image_url: 'Image URL',
    demo_url: 'Demo URL',
    github_url: 'GitHub URL',
    technologies: 'Technologies (comma separated)',
    category: 'Category',
    featured: 'Featured',
    active: 'Active',
    sort_order: 'Order',
  },

  // ── COMMON ────────────────────────────────────────────────
  common: {
    loading: 'Loading...',
    error: 'An error occurred',
    not_found: 'Not found',
    back: 'Back',
    language: 'Language',
    theme_dark: 'Dark mode',
    theme_light: 'Light mode',
  },
};
