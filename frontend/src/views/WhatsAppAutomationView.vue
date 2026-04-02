<template>
  <div class="min-h-screen bg-white dark:bg-[#080B14]">

    <!-- Hero -->
    <section class="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-emerald-600 via-green-700 to-teal-800">
      <div class="absolute inset-0 opacity-10"
        style="background-image: radial-gradient(circle, rgba(255,255,255,.5) 1px, transparent 1px);
               background-size: 24px 24px" />
      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8
                    bg-white/15 border border-white/25 text-white/90 text-sm font-medium">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
          {{ locale === 'es' ? 'Automatización de WhatsApp Business' : 'WhatsApp Business Automation' }}
        </div>

        <h1 class="font-display font-extrabold text-white text-4xl sm:text-5xl md:text-6xl leading-tight mb-6">
          {{ locale === 'es'
            ? 'Automatización de WhatsApp: cómo trabajo'
            : 'WhatsApp Automation: how I work' }}
        </h1>
        <p class="text-emerald-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          {{ locale === 'es'
            ? 'Información sobre cómo integro WhatsApp Business en mis proyectos, qué tipos de mensajes envío y cómo cumplo con las políticas de Meta.'
            : 'Information about how I integrate WhatsApp Business into projects, what types of messages are sent, and how I comply with Meta\'s policies.' }}
        </p>
      </div>
    </section>

    <div class="max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-24 space-y-16">

      <!-- Section 1: How I use WhatsApp Business -->
      <section>
        <div class="flex items-center gap-3 mb-6">
          <div class="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/20 flex items-center justify-center">
            <svg class="w-5 h-5 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </div>
          <h2 class="font-display font-bold text-slate-900 dark:text-white text-2xl">
            {{ locale === 'es' ? 'Cómo uso WhatsApp Business' : 'How I use WhatsApp Business' }}
          </h2>
        </div>
        <div class="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed space-y-4">
          <p>
            {{ locale === 'es'
              ? 'Integro la API oficial de WhatsApp Business (Meta) para desarrollar soluciones de automatización para mis clientes. Esto incluye bots de atención al cliente, sistemas de notificaciones y flujos de conversación automatizados.'
              : 'I integrate the official WhatsApp Business API (Meta) to develop automation solutions for my clients. This includes customer service bots, notification systems, and automated conversation flows.' }}
          </p>
          <p>
            {{ locale === 'es'
              ? 'Toda integración que desarrollo se hace a través de proveedores de soluciones de negocio (BSP) oficialmente certificados por Meta, o directamente mediante la Cloud API de Meta, garantizando el cumplimiento de los Términos de Servicio de WhatsApp.'
              : 'Every integration I develop is done through Meta-certified Business Solution Providers (BSPs) or directly through Meta\'s Cloud API, ensuring compliance with WhatsApp\'s Terms of Service.' }}
          </p>
        </div>
      </section>

      <!-- Section 2: Opt-in (consent) -->
      <section>
        <div class="flex items-center gap-3 mb-6">
          <div class="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/20 flex items-center justify-center">
            <svg class="w-5 h-5 text-indigo-600 dark:text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 12l2 2 4-4"/><path d="M21 12c0 1.2-.504 2.285-1.31 3.065L12 22l-7.69-6.935A4.5 4.5 0 0 1 3 12V5l9-3 9 3v7z"/>
            </svg>
          </div>
          <h2 class="font-display font-bold text-slate-900 dark:text-white text-2xl">
            {{ locale === 'es' ? 'Consentimiento (opt-in)' : 'Consent (opt-in)' }}
          </h2>
        </div>
        <div class="text-slate-600 dark:text-slate-300 leading-relaxed space-y-4">
          <p>
            {{ locale === 'es'
              ? 'Solo se envían mensajes a usuarios que han dado su consentimiento explícito (opt-in). Nunca se envían mensajes no solicitados.'
              : 'Messages are only sent to users who have given explicit consent (opt-in). Unsolicited messages are never sent.' }}
          </p>

          <!-- Opt-in methods -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div v-for="method in optInMethods" :key="method.title"
              class="flex items-start gap-3 p-4 rounded-xl
                     bg-slate-50 dark:bg-white/[0.03]
                     border border-slate-200 dark:border-white/[0.08]">
              <svg class="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              <div>
                <p class="font-semibold text-slate-900 dark:text-white text-sm">{{ method.title }}</p>
                <p class="text-slate-500 dark:text-slate-400 text-xs mt-0.5">{{ method.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 3: Message types -->
      <section>
        <div class="flex items-center gap-3 mb-6">
          <div class="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-900/20 flex items-center justify-center">
            <svg class="w-5 h-5 text-cyan-600 dark:text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
            </svg>
          </div>
          <h2 class="font-display font-bold text-slate-900 dark:text-white text-2xl">
            {{ locale === 'es' ? 'Tipos de mensajes' : 'Message types' }}
          </h2>
        </div>
        <p class="text-slate-600 dark:text-slate-300 mb-6">
          {{ locale === 'es'
            ? 'Los proyectos que desarrollo utilizan los siguientes tipos de mensajes, todos dentro de las categorías permitidas por WhatsApp Business:'
            : 'The projects I develop use the following message types, all within WhatsApp Business approved categories:' }}
        </p>
        <div class="space-y-4">
          <div v-for="msgType in messageTypes" :key="msgType.title"
            class="flex items-start gap-4 p-5 rounded-xl
                   border border-slate-200 dark:border-white/[0.08]
                   bg-white dark:bg-white/[0.02]">
            <div class="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                 :class="msgType.bgClass">
              <span :class="msgType.iconColor" v-html="msgType.icon" />
            </div>
            <div>
              <div class="flex items-center gap-2 mb-1">
                <p class="font-semibold text-slate-900 dark:text-white text-sm">{{ msgType.title }}</p>
                <span class="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">
                  {{ locale === 'es' ? 'Permitido' : 'Allowed' }}
                </span>
              </div>
              <p class="text-slate-500 dark:text-slate-400 text-sm">{{ msgType.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 4: Policy compliance -->
      <section>
        <div class="flex items-center gap-3 mb-6">
          <div class="w-10 h-10 rounded-xl bg-violet-100 dark:bg-violet-900/20 flex items-center justify-center">
            <svg class="w-5 h-5 text-violet-600 dark:text-violet-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
          </div>
          <h2 class="font-display font-bold text-slate-900 dark:text-white text-2xl">
            {{ locale === 'es' ? 'Cumplimiento de políticas' : 'Policy compliance' }}
          </h2>
        </div>
        <div class="text-slate-600 dark:text-slate-300 space-y-4">
          <p>
            {{ locale === 'es'
              ? 'Todas las integraciones que desarrollo cumplen con las Políticas de WhatsApp Business, los Términos de Servicio de Meta y las regulaciones de privacidad aplicables.'
              : 'All integrations I develop comply with WhatsApp Business Policies, Meta\'s Terms of Service, and applicable privacy regulations.' }}
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            <div v-for="item in complianceItems" :key="item"
              class="flex items-center gap-2.5 p-3.5 rounded-xl
                     bg-slate-50 dark:bg-white/[0.03]
                     border border-slate-200 dark:border-white/[0.08]">
              <svg class="w-4 h-4 text-emerald-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              <span class="text-sm text-slate-700 dark:text-slate-300">{{ item }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact CTA -->
      <section class="relative overflow-hidden rounded-3xl"
        style="background: linear-gradient(135deg, #059669 0%, #0d9488 50%, #0891b2 100%)">
        <div class="absolute inset-0 opacity-10"
          style="background-image: radial-gradient(circle, rgba(255,255,255,.5) 1px, transparent 1px);
                 background-size: 24px 24px" />
        <div class="relative px-8 sm:px-16 py-14 text-center">
          <h3 class="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
            {{ locale === 'es' ? '¿Quieres automatizar tu WhatsApp?' : 'Want to automate your WhatsApp?' }}
          </h3>
          <p class="text-emerald-100 mb-8 text-lg max-w-md mx-auto">
            {{ locale === 'es'
              ? 'Hablemos de tu caso. Sin compromiso.'
              : 'Let\'s talk about your case. No commitment.' }}
          </p>
          <router-link to="/#contact"
            class="inline-flex items-center gap-3 px-8 py-4 rounded-2xl
                   bg-white text-emerald-700 font-bold text-base
                   hover:bg-emerald-50 hover:scale-105
                   transition-all duration-200 shadow-xl shadow-black/20">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            {{ locale === 'es' ? 'Contáctame' : 'Contact Me' }}
          </router-link>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const ICON_NOTIF   = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`;
const ICON_SUPPORT = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`;
const ICON_AUTO    = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;

const optInMethods = computed(() => locale.value === 'es'
  ? [
      { title: 'Formulario web', description: 'El usuario marca una casilla aceptando recibir mensajes de WhatsApp.' },
      { title: 'Flujo de conversación', description: 'El usuario inicia el chat y acepta comunicarse por WhatsApp.' },
      { title: 'Proceso de compra', description: 'El cliente acepta notificaciones al completar una compra.' },
      { title: 'Registro en plataforma', description: 'El usuario activa la opción al crear su cuenta.' },
    ]
  : [
      { title: 'Web form', description: 'The user checks a box agreeing to receive WhatsApp messages.' },
      { title: 'Conversation flow', description: 'The user initiates the chat and agrees to communicate via WhatsApp.' },
      { title: 'Purchase process', description: 'The customer accepts notifications when completing a purchase.' },
      { title: 'Platform registration', description: 'The user activates the option when creating their account.' },
    ]
);

const messageTypes = computed(() => locale.value === 'es'
  ? [
      {
        title: 'Notificaciones de servicio',
        description: 'Confirmaciones de pedido, recordatorios de cita, alertas de pago, actualizaciones de estado.',
        icon: ICON_NOTIF,
        bgClass: 'bg-amber-100 dark:bg-amber-900/20',
        iconColor: 'text-amber-600 dark:text-amber-400',
      },
      {
        title: 'Atención al cliente',
        description: 'Respuestas automáticas a preguntas frecuentes, resolución de dudas, escalado a agente humano.',
        icon: ICON_SUPPORT,
        bgClass: 'bg-cyan-100 dark:bg-cyan-900/20',
        iconColor: 'text-cyan-600 dark:text-cyan-400',
      },
      {
        title: 'Automatización de procesos',
        description: 'Calificación de leads, seguimiento de solicitudes, recordatorios de tareas pendientes.',
        icon: ICON_AUTO,
        bgClass: 'bg-violet-100 dark:bg-violet-900/20',
        iconColor: 'text-violet-600 dark:text-violet-400',
      },
    ]
  : [
      {
        title: 'Service notifications',
        description: 'Order confirmations, appointment reminders, payment alerts, status updates.',
        icon: ICON_NOTIF,
        bgClass: 'bg-amber-100 dark:bg-amber-900/20',
        iconColor: 'text-amber-600 dark:text-amber-400',
      },
      {
        title: 'Customer support',
        description: 'Automated responses to FAQs, issue resolution, escalation to a human agent.',
        icon: ICON_SUPPORT,
        bgClass: 'bg-cyan-100 dark:bg-cyan-900/20',
        iconColor: 'text-cyan-600 dark:text-cyan-400',
      },
      {
        title: 'Process automation',
        description: 'Lead qualification, request tracking, pending task reminders.',
        icon: ICON_AUTO,
        bgClass: 'bg-violet-100 dark:bg-violet-900/20',
        iconColor: 'text-violet-600 dark:text-violet-400',
      },
    ]
);

const complianceItems = computed(() => locale.value === 'es'
  ? [
      'API oficial de WhatsApp Business (Meta)',
      'Solo mensajes con consentimiento previo (opt-in)',
      'Sin spam ni mensajes masivos no solicitados',
      'Opción de cancelar suscripción (opt-out) siempre disponible',
      'Plantillas de mensajes aprobadas por Meta',
      'Protección de datos del usuario',
    ]
  : [
      'Official WhatsApp Business API (Meta)',
      'Messages only with prior consent (opt-in)',
      'No spam or unsolicited bulk messaging',
      'Opt-out option always available',
      'Meta-approved message templates',
      'User data protection',
    ]
);
</script>
