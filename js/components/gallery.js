/**
 * GALLERY — lee CONFIG.gallery. Placeholder listo para reemplazar por
 * fotos reales y, en el futuro, por un formato Before/After
 * (ver CONFIG.featureFlags.beforeAfterGallery).
 */
var Components = window.Components || {};

Components.renderGallery = function (config) {
  const g = config.gallery;
  const slots = g.imageSlots
    .map(
      (slot) => `
      <div class="img-placeholder ph-square" data-image-slot="${slot}">
        <span class="ph-label">${slot}</span>
      </div>`
    )
    .join("");

  return `
  <section class="section" id="gallery">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">Gallery</p>
        <h2>${g.heading}</h2>
      </div>
      <div class="gallery-grid">${slots}</div>
      <p class="gallery-note">${g.note}</p>
    </div>
  </section>
  `;
};

window.Components = Components;
