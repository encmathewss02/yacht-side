/**
 * WHY CHOOSE US — lee CONFIG.whyChooseUs.
 */
var Components = window.Components || {};

Components.renderWhyChooseUs = function (config) {
  const items = config.whyChooseUs
    .map(
      (item, i) => `
      <div class="why-item">
        <span class="num">${String(i + 1).padStart(2, "0")}</span>
        <div>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </div>
      </div>`
    )
    .join("");

  return `
  <section class="section" id="why-us">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">Why Choose Us</p>
        <h2>Yacht interiors are the only thing we do.</h2>
      </div>
      <div class="why-grid">${items}</div>
    </div>
  </section>
  `;
};

window.Components = Components;
