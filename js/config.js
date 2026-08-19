/**
 * ============================================================================
 *  CONFIG.JS — FUENTE ÚNICA DE VERDAD DEL SITIO
 * ============================================================================
 *  Edita SOLO este archivo para cambiar textos, precios, contacto, servicios,
 *  paquetes, zonas de servicio, horarios, etc. Todo el sitio lee de aquí,
 *  así que un cambio en este archivo se refleja automáticamente en TODAS
 *  las secciones (Hero, Services, Packages, Footer, Formulario, etc).
 *
 *  No es necesario tocar ningún otro archivo .js ni el HTML para:
 *   - Cambiar nombre del negocio, teléfono, WhatsApp, email, Instagram
 *   - Agregar/editar/eliminar servicios
 *   - Agregar/editar/eliminar paquetes y precios
 *   - Agregar/editar zonas de servicio (marinas, ciudades)
 *   - Cambiar horario de atención
 *   - Editar el texto "About / Founder"
 * ============================================================================
 */

const CONFIG = {

  // ==========================================================================
  // 1. INFORMACIÓN DEL NEGOCIO
  // ==========================================================================
  business: {
    name: "[COLOCAR NOMBRE]",              // Nombre de la marca
    shortName: "[NOMBRE]",                 // Versión corta para logo/header móvil
    tagline: "Interior Yacht Care",        // Línea debajo del nombre
    legalNote: "",                         // Ej: "A subsidiary of ___ LLC" (opcional)
    foundedYear: 2025,                     // Usado para "Serving Puerto Rico since ___" (opcional)
  },

  // ==========================================================================
  // 2. CONTACTO — se usa en Header, Contact, Footer, botones flotantes, form
  // ==========================================================================
  contact: {
    phoneDisplay: "(787) 000-0000",        // Cómo se muestra visualmente
    phoneDial: "+17870000000",             // Formato E.164 para tel:
    whatsappNumber: "17870000000",         // Solo dígitos, con código de país, sin +
    whatsappDefaultMessage: "Hello! I'd like to request a quote for interior yacht cleaning.",
    email: "info@replacewithdomain.com",
    instagramHandle: "@yourbrand",
    instagramUrl: "https://instagram.com/yourbrand",
    address: {
      region: "Puerto Rico",
      note: "Serving marinas across the island", // texto libre, editable
    },
  },

  // ==========================================================================
  // 3. HORARIO DE ATENCIÓN
  // ==========================================================================
  hours: [
    { days: "Monday – Friday", time: "8:00 AM – 5:00 PM" },
    { days: "Saturday", time: "9:00 AM – 2:00 PM" },
    { days: "Sunday", time: "By appointment" },
  ],

  // ==========================================================================
  // 4. HERO
  // ==========================================================================
  hero: {
    eyebrow: "Interior Yacht Care — Puerto Rico",
    headline: "Interior detailing built for the standards of yacht ownership.",
    subheadline:
      "Specialized interior cleaning and detailing for yachts and vessels across Puerto Rico — from cabin to galley, prepared with the discretion and precision your vessel deserves.",
    primaryCta: { label: "Request a Quote", href: "#quote" },
    secondaryCta: { label: "View Services", href: "#services" },
    imageSlot: "hero-main", // ver README.md → sección "Imágenes"
  },

  // ==========================================================================
  // 5. SERVICIOS
  //    Agrega, elimina o edita objetos libremente. El id debe ser único
  //    (se usa también para las casillas del formulario de cotización).
  // ==========================================================================
  services: [
    {
      id: "cabins",
      name: "Cabin Cleaning",
      shortDesc: "Deep interior cleaning for guest and crew cabins.",
      longDesc:
        "Detailed cleaning of every surface, fabric, and fixture inside guest and crew cabins — dusted, wiped, sanitized, and finished to inspection standard.",
      icon: "cabin",
    },
    {
      id: "master-cabin",
      name: "Master Cabin Detailing",
      shortDesc: "Elevated care for the owner's suite.",
      longDesc:
        "The owner's suite receives extended attention — upholstery, woodwork, fixtures, and linens are treated with the same care as the rest of the vessel, at a premium standard.",
      icon: "master",
    },
    {
      id: "heads",
      name: "Head & Bathroom Cleaning",
      shortDesc: "Sanitized, streak-free, and fully deodorized.",
      longDesc:
        "Full sanitation of heads and bathrooms — fixtures, mirrors, tile, and hardware cleaned and disinfected with marine-safe products.",
      icon: "head",
    },
    {
      id: "salon",
      name: "Salon & Lobby Cleaning",
      shortDesc: "The main gathering space, presentation-ready.",
      longDesc:
        "Upholstery, flooring, glass, and surfaces throughout the salon and lobby are cleaned to a presentation-ready standard for guests and charters.",
      icon: "salon",
    },
    {
      id: "galley",
      name: "Galley Cleaning",
      shortDesc: "Kitchen surfaces, appliances, and storage — sanitized.",
      longDesc:
        "Full sanitation of galley surfaces, appliances, cabinetry, and storage areas, following food-safe cleaning protocols.",
      icon: "galley",
    },
    {
      id: "bridge",
      name: "Bridge & Helm Cleaning",
      shortDesc: "Electronics-safe cleaning for the command center.",
      longDesc:
        "Careful, electronics-safe cleaning of the bridge and helm area — panels, glass, and controls cleaned without risk to sensitive equipment.",
      icon: "bridge",
    },
    {
      id: "carpet-odor",
      name: "Carpet & Odor Treatment",
      shortDesc: "Deep carpet care and odor neutralization.",
      longDesc:
        "Deep carpet cleaning paired with odor treatment to neutralize moisture, mildew, and lingering odors common to marine interiors.",
      icon: "carpet",
    },
    {
      id: "full-interior",
      name: "Full Interior Deep Cleaning",
      shortDesc: "A complete, top-to-bottom interior reset.",
      longDesc:
        "A comprehensive interior service covering every space on board — ideal for seasonal resets, pre-sale preparation, or extended maintenance intervals.",
      icon: "full",
    },
    {
      id: "charter-turnaround",
      name: "Charter Turnaround Cleaning",
      shortDesc: "Fast, reliable resets between charters.",
      longDesc:
        "A structured turnaround service designed for charter schedules — the interior is reset to guest-ready standard between bookings, on time, every time.",
      icon: "turnaround",
    },
  ],

  // ==========================================================================
  // 6. PAQUETES / PACKAGES
  //    PRICING_MODE controla cómo se muestra el precio en TODO el sitio:
  //      "hidden"        -> No se muestra ningún número, solo "Custom Quote"
  //      "request_quote" -> Se muestra un texto en vez de precio (recomendado
  //                         mientras se valida el modelo de costos)
  //      "visible"       -> Se muestran los números definidos en cada paquete
  //    Cuando definas precios reales, solo cambia esto a "visible" y llena
  //    el campo "price" de cada paquete — se actualizará en todo el sitio.
  // ==========================================================================
  pricingMode: "request_quote",

  packages: [
    {
      id: "essential",
      name: "Essential Interior",
      tagline: "A focused clean for regular upkeep.",
      price: null,        // ej: 350  → se usará automáticamente cuando pricingMode = "visible"
      priceUnit: "starting at",
      popular: false,
      features: [
        "Salon & lobby cleaning",
        "Galley cleaning",
        "Head & bathroom cleaning",
        "Light cabin touch-up",
      ],
    },
    {
      id: "signature",
      name: "Signature Interior",
      tagline: "Our most requested full-interior service.",
      price: null,
      priceUnit: "starting at",
      popular: true,
      features: [
        "All Essential Interior services",
        "Master cabin detailing",
        "All guest & crew cabins",
        "Carpet cleaning",
        "Bridge & helm cleaning",
      ],
    },
    {
      id: "full-deep-clean",
      name: "Full Interior Deep Clean",
      tagline: "A complete, top-to-bottom reset.",
      price: null,
      priceUnit: "starting at",
      popular: false,
      features: [
        "All Signature Interior services",
        "Odor treatment",
        "Full carpet & upholstery care",
        "Detailed inspection report",
      ],
    },
    {
      id: "charter-turnaround-pkg",
      name: "Charter Turnaround",
      tagline: "Reliable resets between charter bookings.",
      price: null,
      priceUnit: "per turnaround",
      popular: false,
      features: [
        "Full guest-area reset",
        "Galley & head sanitation",
        "Linen-ready cabins",
        "Priority scheduling",
      ],
    },
  ],

  packageSavingsNote:
    "Bundled interior packages offer Package Savings compared to booking services individually. Final pricing is confirmed after a brief yacht assessment.",

  // ==========================================================================
  // 7. WHY CHOOSE US
  // ==========================================================================
  whyChooseUs: [
    {
      title: "Specialized Yacht Interior Care",
      description:
        "We work exclusively inside yacht and vessel interiors — this is our sole focus, not a side offering.",
    },
    {
      title: "Attention to Detail",
      description:
        "Every surface, seam, and fixture is treated with the same level of care the vessel itself was built with.",
    },
    {
      title: "Professional Cleaning Process",
      description:
        "A consistent, documented process for every job — not an improvised routine.",
    },
    {
      title: "Reliable Scheduling",
      description:
        "On time, every time — because charter schedules and owner time are non-negotiable.",
    },
    {
      title: "Customized Service",
      description:
        "Every vessel is different. Scope and approach are tailored to your yacht, not a generic checklist.",
    },
  ],

  // ==========================================================================
  // 8. HOW IT WORKS
  // ==========================================================================
  howItWorks: [
    {
      step: "01",
      title: "Request a Quote",
      description: "Share your vessel details through our form, WhatsApp, or a phone call.",
    },
    {
      step: "02",
      title: "Yacht Assessment",
      description: "We review the scope of the vessel to confirm the right service and schedule.",
    },
    {
      step: "03",
      title: "Cleaning",
      description: "Our team completes the interior service following a structured, documented process.",
    },
    {
      step: "04",
      title: "Final Inspection",
      description: "A final walkthrough confirms every space meets our standard before we sign off.",
    },
  ],

  // ==========================================================================
  // 9. ZONAS DE SERVICIO
  //    Agrega más objetos a este arreglo cuando se expanda la cobertura.
  //    coords es opcional (formato libre, solo decorativo).
  // ==========================================================================
  serviceAreas: [
    { name: "San Juan Bay", coords: "18.46° N, 66.10° W" },
    { name: "Fajardo", coords: "18.33° N, 65.65° W" },
    { name: "Ponce", coords: "17.97° N, 66.62° W" },
    // { name: "Palmas del Mar", coords: "18.08° N, 65.78° W" },  // ejemplo: descomenta para agregar
  ],
  serviceAreaNote:
    "Currently serving the areas above, with coverage expanding across Puerto Rico. Don't see your marina? Ask us — we may still be able to help.",

  // ==========================================================================
  // 10. ABOUT / FOUNDER
  // ==========================================================================
  about: {
    heading: "Built around the standards of the industry, not a cleaning checklist.",
    paragraphs: [
      "[COLOCAR NOMBRE] was founded to bring a level of care to yacht interiors that matched the standards already expected on deck and in the engine room.",
      "After years spent around the marine industry in Puerto Rico, our founder saw a consistent gap: interior care that was treated as an afterthought, rather than a specialized discipline of its own.",
      "That observation became the basis for this company — a service built exclusively around yacht and vessel interiors, with a process designed for owners, captains, and charter operators who expect consistency every time.",
    ],
    imageSlot: "founder-photo",
  },

  // ==========================================================================
  // 11. GALERÍA (placeholder — listo para Before/After en el futuro)
  // ==========================================================================
  gallery: {
    heading: "Interior Work",
    note: "Gallery coming soon — before & after documentation of recent projects.",
    imageSlots: ["gallery-1", "gallery-2", "gallery-3", "gallery-4"],
  },

  // ==========================================================================
  // 12. FORMULARIO DE COTIZACIÓN
  // ==========================================================================
  quoteForm: {
    heading: "Request a Quote",
    subheading:
      "Tell us about your vessel and the service you need. We'll follow up to confirm scope and scheduling.",
    yachtTypeOptions: [
      "Motor Yacht",
      "Sailing Yacht",
      "Catamaran",
      "Sport Fisher",
      "Center Console",
      "Other",
    ],
    // TODO (futuro): conectar a un backend real (Formspree, EmailJS, Netlify
    // Forms, etc.). Por ahora el formulario arma un mensaje de WhatsApp
    // pre-llenado y un enlace de email como respaldo. Ver js/components/quoteForm.js
  },

  // ==========================================================================
  // 13. BANDERAS PARA FUNCIONALIDAD FUTURA
  //     No construyen nada todavía — solo mantienen el sitio preparado.
  // ==========================================================================
  featureFlags: {
    onlineBooking: false,
    paymentProcessing: false,
    customerReviews: false,
    beforeAfterGallery: false,
    recurringPlans: false,
    charterTurnaroundPlans: false,
    pricingCalculator: false,
    customerPortal: false,
  },

  // ==========================================================================
  // 14. SEO / METADATA BÁSICA
  // ==========================================================================
  seo: {
    title: "[COLOCAR NOMBRE] — Interior Yacht Cleaning | Puerto Rico",
    description:
      "Specialized interior cleaning and detailing for yachts and vessels across Puerto Rico. Cabins, salon, galley, carpet & odor treatment, and full interior deep cleaning.",
  },
};
