/**
 * HERO — lee CONFIG.hero. Cambiar headline/subheadline/CTAs solo en config.js.
 */
var Components = window.Components || {};

Components.renderHero = function (config) {
  const h = config.hero;
  return `
  <section class="hero">
    <div class="container">
      <div class="hero-copy">
        <p class="eyebrow">${h.eyebrow}</p>
        <h1 class="hero-headline">${h.headline}</h1>
        <p class="hero-sub">${h.subheadline}</p>
        <div class="btn-row">
          <a class="btn btn-primary" href="${h.primaryCta.href}">${h.primaryCta.label}</a>
          <a class="btn btn-secondary" href="${h.secondaryCta.href}">${h.secondaryCta.label}</a>
        </div>

        <div class="hero-meta">
          <div><strong>${config.serviceAreas.length}+</strong>PR Service Areas</div>
          <div><strong>${config.services.length}</strong>Interior Services</div>
          <div><strong>Interior</strong>Exclusively Yacht</div>
        </div>
      </div>

      <div class="hero-visual">
        <div class="img-placeholder ph-hero" data-image-slot="${h.imageSlot}">
          <span class="ph-label">Photo — Yacht Interior (replace: ${h.imageSlot})</span>
        </div>
      </div>
    </div>
  </section>
  `;
};

window.Components = Components;
