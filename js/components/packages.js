/**
 * PACKAGES — genera una tarjeta por cada objeto en CONFIG.packages.
 * El precio se resuelve con formatPackagePrice() (ver js/icons.js), que
 * respeta CONFIG.pricingMode. No hay ningún número de precio escrito
 * directamente en este archivo.
 */
var Components = window.Components || {};

function packageCard(pkg) {
  const features = pkg.features
    .map((f) => `<li>${ICONS.check}<span>${f}</span></li>`)
    .join("");

  return `
    <article class="package-card ${pkg.popular ? "package-card--popular" : ""}">
      ${pkg.popular ? `<span class="package-badge">Most Requested</span>` : ""}
      <h3>${pkg.name}</h3>
      <p class="package-tagline">${pkg.tagline}</p>
      ${formatPackagePrice(pkg)}
      <ul class="package-features">${features}</ul>
      <a class="btn btn-secondary btn-block" href="#quote">Request a Quote</a>
    </article>
  `;
}

Components.renderPackages = function (config) {
  const cards = config.packages.map(packageCard).join("");
  return `
  <section class="section section--fog" id="packages">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">Service Packages</p>
        <h2>Bundled interior packages, built around how vessels are actually used.</h2>
      </div>
      <div class="packages-grid">${cards}</div>
      <p class="packages-note">${config.packageSavingsNote}</p>
    </div>
  </section>
  `;
};

window.Components = Components;
