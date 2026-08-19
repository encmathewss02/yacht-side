/**
 * SERVICES — genera una tarjeta por cada objeto en CONFIG.services.
 * Para agregar/quitar un servicio, edita solo el arreglo en config.js.
 */
var Components = window.Components || {};

function serviceCard(service) {
  const icon = ICONS.service[service.icon] || ICONS.service.full;
  return `
    <article class="service-card">
      <span class="service-icon">${icon}</span>
      <h3>${service.name}</h3>
      <p>${service.shortDesc}</p>
    </article>
  `;
}

Components.renderServices = function (config) {
  const cards = config.services.map(serviceCard).join("");
  return `
  <section class="section" id="services">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">What We Clean</p>
        <h2>Interior services built around every space on board.</h2>
        <p>Each service follows a documented process — no shortcuts, no generic checklist.</p>
      </div>
      <div class="services-grid">${cards}</div>
    </div>
  </section>
  `;
};

window.Components = Components;
