/**
 * ICONS.JS — Set mínimo de iconos de línea (SVG inline, sin dependencias).
 * Se usan en varios componentes. Mantener aquí evita repetir markup SVG
 * en cada archivo de sección.
 */
const ICONS = {
  check: `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 10.5l4 4 8-9" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8z" stroke-linejoin="round"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.6 1.4 5.1L2 22l5.1-1.3c1.5.8 3.1 1.2 4.9 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.6 0-3.1-.4-4.5-1.2l-.3-.2-3.1.8.8-3-.2-.3C4 14.9 3.6 13.5 3.6 12 3.6 7.4 7.4 3.6 12 3.6S20.4 7.4 20.4 12 16.6 20.2 12 20.2zm5-6.2c-.3-.1-1.6-.8-1.8-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-1.4-.7-2.4-1.3-3.3-2.9-.3-.4.3-.4.8-1.4.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.9-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.1.2-1.3-.1-.1-.3-.2-.6-.3z"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="M4 6.5l8 6.5 8-6.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s7-6.3 7-11.5A7 7 0 105 9.5C5 14.7 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.3"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M3 6h18M3 12h18M3 18h18" stroke-linecap="round"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M5 5l14 14M19 5L5 19" stroke-linecap="round"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1"/></svg>`,
  // Iconos genéricos por servicio (líneas simples, no clipart náutico)
  service: {
    cabin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="4" y="9" width="16" height="10" rx="1"/><path d="M4 9l8-5 8 5" stroke-linejoin="round"/><path d="M10 19v-5h4v5"/></svg>`,
    master: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M4 19V9l8-5 8 5v10" stroke-linejoin="round"/><path d="M9 19v-6h6v6"/><path d="M4 19h16"/><circle cx="12" cy="4" r="1"/></svg>`,
    head: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="6" y="10" width="12" height="9" rx="1"/><path d="M9 10V7a3 3 0 016 0" /><path d="M6 19h12"/></svg>`,
    salon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="12" width="18" height="6" rx="1"/><path d="M5 12V9a2 2 0 012-2h10a2 2 0 012 2v3"/><path d="M3 18v2M21 18v2"/></svg>`,
    galley: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="4" y="4" width="16" height="16" rx="1"/><path d="M4 14h16"/><circle cx="8" cy="9" r="1.3"/><circle cx="13" cy="9" r="1.3"/></svg>`,
    bridge: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M3 17c3-2 6-3 9-3s6 1 9 3"/><circle cx="12" cy="9" r="3"/><path d="M12 12v2"/></svg>`,
    carpet: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="4" y="5" width="16" height="14" rx="1"/><path d="M4 9h16M4 13h16M8 5v14M16 5v14"/></svg>`,
    full: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M4 12a8 8 0 1116 0 8 8 0 01-16 0z"/><path d="M12 8v4l3 2"/></svg>`,
    turnaround: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M4 4v5h5M20 20v-5h-5"/><path d="M4.6 15A8 8 0 0019 9M19.4 9A8 8 0 005 15" stroke-linecap="round"/></svg>`,
  },
};

/** Devuelve el bloque de precio de un paquete según CONFIG.pricingMode. */
function formatPackagePrice(pkg) {
  if (CONFIG.pricingMode === "visible" && pkg.price) {
    return `<div class="package-price">${pkg.priceUnit || "starting at"}
      <span class="price-number">$${pkg.price.toLocaleString("en-US")}</span></div>`;
  }
  if (CONFIG.pricingMode === "hidden") {
    return `<div class="package-price"><span class="price-number">Custom Quote</span></div>`;
  }
  // "request_quote" (default)
  return `<div class="package-price">Pricing<span class="price-number">Request a Quote</span></div>`;
}
