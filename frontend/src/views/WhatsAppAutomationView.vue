<template>
  <div class="min-h-screen bg-white dark:bg-[#080B14]">

    <!-- Hero -->
    <section class="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-emerald-700 via-teal-800 to-indigo-900">
      <div class="absolute inset-0 opacity-10"
        style="background-image: radial-gradient(circle, rgba(255,255,255,.5) 1px, transparent 1px);
               background-size: 24px 24px" />
      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">

        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8
                    bg-white/15 border border-white/25 text-white/90 text-sm font-semibold">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
          {{ locale === 'es' ? 'API oficial de WhatsApp Business · Meta' : 'Official WhatsApp Business API · Meta' }}
        </div>

        <h1 class="font-display font-extrabold text-white text-4xl sm:text-5xl md:text-6xl leading-tight mb-6">
          {{ locale === 'es'
            ? 'Política de uso de WhatsApp Business'
            : 'WhatsApp Business Usage Policy' }}
        </h1>
        <p class="text-emerald-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          {{ locale === 'es'
            ? 'Cómo integro WhatsApp Business, qué tipo de mensajes se envían, quién los recibe y cómo cumplo con las políticas de Meta.'
            : 'How I integrate WhatsApp Business, what types of messages are sent, who receives them, and how I comply with Meta\'s policies.' }}
        </p>

        <!-- Key compliance badges -->
        <div class="flex flex-wrap justify-center gap-3 mt-8">
          <span v-for="badge in complianceBadges" :key="badge"
            class="inline-flex items-center gap-1.5 px-4 py-2 rounded-full
                   bg-white/15 border border-white/20 text-white text-xs font-semibold">
            <svg class="w-3.5 h-3.5 text-emerald-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            {{ badge }}
          </span>
        </div>
      </div>
    </section>

    <div class="max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-24 space-y-16">

      <!-- Section 1: What this service is -->
      <section>
        <SectionHeading
          :icon="ICON_INFO"
          :title="locale === 'es' ? 'Qué es este servicio' : 'What this service is'"
          color="indigo"
        />
        <div class="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
          <p>
            {{ locale === 'es'
              ? 'withjp.ai ofrece servicios de automatización de atención al cliente para empresas a través de la API oficial de WhatsApp Business de Meta. No es un chatbot de propósito general ni una plataforma de conversación abierta.'
              : 'withjp.ai provides customer service automation services for businesses through Meta\'s official WhatsApp Business API. It is not a general-purpose chatbot or open-ended conversation platform.' }}
          </p>
          <p>
            {{ locale === 'es'
              ? 'Los flujos que se desarrollan son específicos para cada negocio: atención de preguntas frecuentes, seguimiento de pedidos, agendamiento de citas, soporte post-venta y notificaciones transaccionales. Cada flujo tiene un objetivo definido y respuestas estructuradas.'
              : 'The flows developed are specific to each business: FAQ handling, order tracking, appointment scheduling, after-sales support, and transactional notifications. Each flow has a defined objective and structured responses.' }}
          </p>

          <!-- What it is NOT -->
          <div class="mt-6 p-5 rounded-xl border border-rose-200 dark:border-rose-800/40 bg-rose-50 dark:bg-rose-950/20">
            <p class="font-semibold text-rose-700 dark:text-rose-400 text-sm mb-3">
              {{ locale === 'es' ? 'Lo que este servicio NO hace:' : 'What this service does NOT do:' }}
            </p>
            <ul class="space-y-1.5">
              <li v-for="item in notAllowed" :key="item"
                class="flex items-center gap-2 text-sm text-rose-600 dark:text-rose-400">
                <svg class="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Section 2: Opt-in (consent) -->
      <section>
        <SectionHeading
          :icon="ICON_CHECK"
          :title="locale === 'es' ? 'Consentimiento del usuario (opt-in)' : 'User consent (opt-in)'"
          color="emerald"
        />
        <div class="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
          <p class="font-medium text-slate-800 dark:text-slate-100">
            {{ locale === 'es'
              ? 'Solo se envían mensajes a personas que han dado su consentimiento explícito. No se envían mensajes no solicitados.'
              : 'Messages are only sent to people who have given explicit consent. No unsolicited messages are sent.' }}
          </p>
          <p>
            {{ locale === 'es'
              ? 'El consentimiento (opt-in) se obtiene mediante uno de los siguientes métodos antes de enviar cualquier mensaje:'
              : 'Consent (opt-in) is obtained through one of the following methods before sending any message:' }}
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
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

      <!-- Section 3: Types of flows (NOT "message types" as a generic list) -->
      <section>
        <SectionHeading
          :icon="ICON_FLOWS"
          :title="locale === 'es' ? 'Tipos de flujos permitidos' : 'Permitted flow types'"
          color="cyan"
        />
        <p class="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
          {{ locale === 'es'
            ? 'Todos los flujos desarrollados se encuadran en las categorías de uso empresarial aprobadas por WhatsApp Business:'
            : 'All developed flows fall within the business use categories approved by WhatsApp Business:' }}
        </p>
        <div class="space-y-4">
          <div v-for="flow in allowedFlows" :key="flow.title"
            class="flex items-start gap-4 p-5 rounded-xl
                   border border-slate-200 dark:border-white/[0.08]
                   bg-white dark:bg-white/[0.02]">
            <div class="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                 :class="flow.bgClass">
              <span :class="flow.iconColor" v-html="flow.icon" />
            </div>
            <div>
              <div class="flex items-center gap-2 mb-1">
                <p class="font-semibold text-slate-900 dark:text-white text-sm">{{ flow.title }}</p>
                <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400">
                  {{ locale === 'es' ? 'Permitido por Meta' : 'Allowed by Meta' }}
                </span>
              </div>
              <p class="text-slate-500 dark:text-slate-400 text-sm">{{ flow.description }}</p>
              <p class="text-slate-400 dark:text-slate-500 text-xs mt-1 italic">{{ locale === 'es' ? 'Ejemplo: ' : 'Example: ' }}{{ flow.example }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 4: Opt-out -->
      <section>
        <SectionHeading
          :icon="ICON_EXIT"
          :title="locale === 'es' ? 'Cancelación de suscripción (opt-out)' : 'Subscription cancellation (opt-out)'"
          color="amber"
        />
        <div class="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
          <p>
            {{ locale === 'es'
              ? 'Cualquier usuario puede cancelar la recepción de mensajes en cualquier momento enviando palabras como "STOP", "CANCELAR" o "NO QUIERO MENSAJES". El sistema procesa esta solicitud de forma inmediata y no vuelve a enviar mensajes a ese número.'
              : 'Any user can cancel message reception at any time by sending words like "STOP", "CANCEL", or "UNSUBSCRIBE". The system processes this request immediately and no further messages are sent to that number.' }}
          </p>
          <p>
            {{ locale === 'es'
              ? 'Cada proyecto incluye un flujo de opt-out configurado antes del lanzamiento. El cumplimiento de esta política es obligatorio y no negociable.'
              : 'Each project includes an opt-out flow configured before launch. Compliance with this policy is mandatory and non-negotiable.' }}
          </p>
        </div>
      </section>

      <!-- Section 5: Policy compliance -->
      <section>
        <SectionHeading
          :icon="ICON_SHIELD"
          :title="locale === 'es' ? 'Cumplimiento de políticas de Meta' : 'Meta policy compliance'"
          color="violet"
        />
        <div class="text-slate-600 dark:text-slate-300 space-y-4">
          <p>
            {{ locale === 'es'
              ? 'Todas las implementaciones cumplen con las Políticas de WhatsApp Business, los Términos de Servicio de Meta y las normativas de protección de datos aplicables.'
              : "All implementations comply with WhatsApp Business Policies, Meta's Terms of Service, and applicable data protection regulations." }}
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
        style="background: linear-gradient(135deg, #059669 0%, #0d9488 50%, #4f46e5 100%)">
        <div class="absolute inset-0 opacity-10"
          style="background-image: radial-gradient(circle, rgba(255,255,255,.5) 1px, transparent 1px);
                 background-size: 24px 24px" />
        <div class="relative px-8 sm:px-16 py-14 text-center">
          <h3 class="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
            {{ locale === 'es' ? '¿Quieres automatizar tu atención al cliente por WhatsApp?' : 'Want to automate your customer service on WhatsApp?' }}
          </h3>
          <p class="text-emerald-100 mb-8 text-lg max-w-md mx-auto">
            {{ locale === 'es'
              ? 'Desarrollamos flujos estructurados, no chatbots genéricos. Cumplimiento total de políticas Meta.'
              : 'We develop structured flows, not generic chatbots. Full Meta policy compliance.' }}
          </p>
          <router-link to="/#contact"
            class="inline-flex items-center gap-3 px-8 py-4 rounded-2xl
                   bg-white text-emerald-700 font-bold text-base
                   hover:bg-emerald-50 hover:scale-105
                   transition-all duration-200 shadow-xl shadow-black/20">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            {{ locale === 'es' ? 'Solicitar información' : 'Request information' }}
          </router-link>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineComponent, h } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

// Inline sub-component for section headings
const SectionHeading = defineComponent({
  props: { icon: String, title: String, color: String },
  setup(props) {
    const colorMap: Record<string, string> = {
      indigo: 'bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400',
      emerald:'bg-emerald-100 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400',
      cyan:   'bg-cyan-100 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400',
      amber:  'bg-amber-100 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400',
      violet: 'bg-violet-100 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400',
    };
    return () => h('div', { class: 'flex items-center gap-3 mb-6' }, [
      h('div', { class: `w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${colorMap[props.color || 'indigo']}`, innerHTML: props.icon }),
      h('h2', { class: 'font-display font-bold text-slate-900 dark:text-white text-2xl' }, props.title),
    ]);
  },
});

const ICON_INFO   = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;
const ICON_CHECK  = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M9 12l2 2 4-4"/><path d="M21 12c0 1.2-.504 2.285-1.31 3.065L12 22l-7.69-6.935A4.5 4.5 0 0 1 3 12V5l9-3 9 3v7z"/></svg>`;
const ICON_FLOWS  = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>`;
const ICON_EXIT   = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`;
const ICON_SHIELD = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`;
const ICON_NOTIF  = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`;
const ICON_SUPPORT= `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`;
const ICON_AUTO   = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;

const complianceBadges = computed(() => locale.value === 'es'
  ? ['API oficial de Meta', 'Opt-in obligatorio', 'Plantillas aprobadas', 'Opt-out siempre disponible']
  : ['Official Meta API', 'Mandatory opt-in', 'Approved templates', 'Opt-out always available']
);

const notAllowed = computed(() => locale.value === 'es'
  ? [
      'Chatbots de propósito general tipo "pregunta lo que quieras"',
      'Conversaciones abiertas sin flujo definido',
      'Envío de mensajes sin consentimiento previo (spam)',
      'Uso de aplicaciones o APIs no autorizadas por Meta',
      'Mensajes de marketing masivo sin opt-in explícito',
    ]
  : [
      'General-purpose chatbots like "ask me anything"',
      'Open-ended conversations without a defined flow',
      'Sending messages without prior consent (spam)',
      'Use of unauthorized apps or APIs not approved by Meta',
      'Mass marketing messages without explicit opt-in',
    ]
);

const optInMethods = computed(() => locale.value === 'es'
  ? [
      { title: 'Formulario web', description: 'El usuario marca una casilla aceptando recibir mensajes de WhatsApp del negocio.' },
      { title: 'Inicio de conversación', description: 'El usuario escribe primero al número de WhatsApp Business del negocio.' },
      { title: 'Proceso de compra o registro', description: 'El cliente acepta notificaciones al completar una compra o crear una cuenta.' },
      { title: 'Flujo guiado de suscripción', description: 'El usuario responde afirmativamente a una solicitud de suscripción dentro del chat.' },
    ]
  : [
      { title: 'Web form', description: 'The user checks a box agreeing to receive WhatsApp messages from the business.' },
      { title: 'Conversation initiation', description: "The user writes first to the business's WhatsApp Business number." },
      { title: 'Purchase or registration process', description: 'The customer agrees to notifications when completing a purchase or creating an account.' },
      { title: 'Guided subscription flow', description: 'The user responds affirmatively to a subscription request inside the chat.' },
    ]
);

const allowedFlows = computed(() => locale.value === 'es'
  ? [
      { title: 'Atención al cliente y soporte', description: 'Respuesta a preguntas frecuentes, resolución de problemas, escalado a agente humano.', example: '"¿Cuál es el horario de atención?" → respuesta automática inmediata.', icon: ICON_SUPPORT, bgClass: 'bg-cyan-100 dark:bg-cyan-900/20', iconColor: 'text-cyan-600 dark:text-cyan-400' },
      { title: 'Notificaciones transaccionales', description: 'Confirmaciones de compra, alertas de pago, actualizaciones de estado de pedido.', example: '"Tu pedido #4521 ha sido despachado."', icon: ICON_NOTIF, bgClass: 'bg-amber-100 dark:bg-amber-900/20', iconColor: 'text-amber-600 dark:text-amber-400' },
      { title: 'Automatización de procesos específicos', description: 'Agendamiento de citas, seguimiento de pedidos, calificación de leads con flujos definidos.', example: '"Para agendar una cita, elige una fecha disponible:"', icon: ICON_AUTO, bgClass: 'bg-violet-100 dark:bg-violet-900/20', iconColor: 'text-violet-600 dark:text-violet-400' },
    ]
  : [
      { title: 'Customer service and support', description: 'Answering FAQs, resolving issues, escalating to human agent.', example: '"What are your business hours?" → immediate automated response.', icon: ICON_SUPPORT, bgClass: 'bg-cyan-100 dark:bg-cyan-900/20', iconColor: 'text-cyan-600 dark:text-cyan-400' },
      { title: 'Transactional notifications', description: 'Purchase confirmations, payment alerts, order status updates.', example: '"Your order #4521 has been dispatched."', icon: ICON_NOTIF, bgClass: 'bg-amber-100 dark:bg-amber-900/20', iconColor: 'text-amber-600 dark:text-amber-400' },
      { title: 'Specific process automation', description: 'Appointment scheduling, order tracking, lead qualification with defined flows.', example: '"To schedule an appointment, choose an available date:"', icon: ICON_AUTO, bgClass: 'bg-violet-100 dark:bg-violet-900/20', iconColor: 'text-violet-600 dark:text-violet-400' },
    ]
);

const complianceItems = computed(() => locale.value === 'es'
  ? [
      'API oficial de WhatsApp Business (Meta)',
      'Mensajes solo con consentimiento previo (opt-in)',
      'Sin mensajes masivos no solicitados (anti-spam)',
      'Opt-out inmediato disponible en todo momento',
      'Solo plantillas de mensajes aprobadas por Meta',
      'Flujos estructurados con objetivos definidos',
      'Sin conversaciones abiertas sin propósito',
      'Protección y privacidad de datos del usuario',
    ]
  : [
      'Official WhatsApp Business API (Meta)',
      'Messages only with prior consent (opt-in)',
      'No unsolicited bulk messages (anti-spam)',
      'Immediate opt-out available at all times',
      'Only Meta-approved message templates',
      'Structured flows with defined objectives',
      'No open-ended purposeless conversations',
      'User data protection and privacy',
    ]
);
</script>
