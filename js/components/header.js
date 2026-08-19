/**
 * HEADER — lee CONFIG.business y CONFIG.contact. No contiene texto fijo.
 */
const Components = window.Components || {};

Components.renderHeader = function (config) {
  const navLinks = [
    ["Services", "#services"],
    ["Packages", "#packages"],
    ["How It Works", "#how-it-works"],
    ["Service Area", "#service-area"],
    ["About", "#about"],
    ["Contact", "#quote"],
  ];

  const navHtml = navLinks.map(([label, href]) => `<a href="${href}">${label}</a>`).join("");

  return `
  <header class="site-header">
    <div class="container">
      <a href="#" class="brand">
        ${config.business.shortName}
        <span>${config.business.tagline}</span>
      </a>

      <nav class="nav-desktop">${navHtml}</nav>

      <div class="header-actions">
        <a class="icon-btn" href="tel:${config.contact.phoneDial}" aria-label="Call ${config.business.name}">${ICONS.phone}</a>
        <a class="btn btn-primary btn-sm" href="#quote">Request a Quote</a>
        <button class="icon-btn mobile-nav-toggle" id="mobile-nav-open" aria-label="Open menu">${ICONS.menu}</button>
      </div>
    </div>
  </header>

  <div class="mobile-drawer" id="mobile-drawer">
    <div class="mobile-drawer-top">
      <button class="icon-btn" id="mobile-nav-close" aria-label="Close menu" style="border-color:rgba(247,245,240,0.3);color:var(--canvas)">${ICONS.close}</button>
    </div>
    <nav>${navLinks.map(([label, href]) => `<a href="${href}" class="mobile-nav-link">${label}</a>`).join("")}</nav>
    <a href="#quote" class="btn btn-teak mobile-nav-link">Request a Quote</a>
  </div>

  <div class="float-actions">
    <a class="float-btn float-btn--whatsapp" href="https://wa.me/${config.contact.whatsappNumber}?text=${encodeURIComponent(config.contact.whatsappDefaultMessage)}" target="_blank" rel="noopener" aria-label="WhatsApp us">${ICONS.whatsapp}</a>
    <a class="float-btn float-btn--call" href="tel:${config.contact.phoneDial}" aria-label="Call us">${ICONS.phone}</a>
  </div>
  `;
};

/** Comportamiento del menú móvil — se llama una vez tras el render inicial. */
Components.initHeaderBehavior = function () {
  const drawer = document.getElementById("mobile-drawer");
  const openBtn = document.getElementById("mobile-nav-open");
  const closeBtn = document.getElementById("mobile-nav-close");
  if (!drawer || !openBtn || !closeBtn) return;

  const open = () => drawer.classList.add("is-open");
  const close = () => drawer.classList.remove("is-open");

  openBtn.addEventListener("click", open);
  closeBtn.addEventListener("click", close);
  drawer.querySelectorAll(".mobile-nav-link").forEach((link) => link.addEventListener("click", close));
};

window.Components = Components;
