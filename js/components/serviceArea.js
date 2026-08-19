/**
 * SERVICE AREA — lee CONFIG.serviceAreas (arreglo extensible).
 * Para agregar una nueva zona, solo añade un objeto {name, coords}
 * en config.js — esta sección lo reflejará automáticamente.
 */
const Components = window.Components || {};

Components.renderServiceArea = function (config) {
  const items = config.serviceAreas
    .map(
      (area) => `
      <div class="area-item">
        <div class="area-name">${area.name}</div>
        <div class="area-coords">${area.coords || ""}</div>
      </div>`
    )
    .join("");

  return `
  <section class="section section--fog" id="service-area">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">Service Area</p>
        <h2>Currently serving ${config.contact.address.region}.</h2>
      </div>
      <div class="area-list">${items}</div>
      <p class="area-note">${config.serviceAreaNote}</p>
    </div>
  </section>
  `;
};

window.Components = Components;
