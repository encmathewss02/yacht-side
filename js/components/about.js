/**
 * ABOUT — lee CONFIG.about.
 */
const Components = window.Components || {};

Components.renderAbout = function (config) {
  const a = config.about;
  const paragraphs = a.paragraphs.map((p) => `<p>${p}</p>`).join("");

  return `
  <section class="section" id="about">
    <div class="container about-grid">
      <div class="img-placeholder ph-square" data-image-slot="${a.imageSlot}">
        <span class="ph-label">Photo — Founder (replace: ${a.imageSlot})</span>
      </div>
      <div class="about-text">
        <p class="eyebrow">About</p>
        <h2>${a.heading}</h2>
        ${paragraphs}
      </div>
    </div>
  </section>
  `;
};

window.Components = Components;
