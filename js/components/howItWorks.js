/**
 * HOW IT WORKS — lee CONFIG.howItWorks. Presentado como entradas de
 * bitácora (log), coherente con el motivo visual del sitio.
 */
const Components = window.Components || {};

Components.renderHowItWorks = function (config) {
  const entries = config.howItWorks
    .map(
      (step) => `
      <div class="log-entry">
        <span class="step-num">ENTRY&nbsp;${step.step}</span>
        <div>
          <h3>${step.title}</h3>
          <p>${step.description}</p>
        </div>
      </div>`
    )
    .join("");

  return `
  <section class="section section--ink" id="how-it-works">
    <div class="container">
      <div class="section-head">
        <p class="eyebrow">How It Works</p>
        <h2>A structured process, from first call to final inspection.</h2>
      </div>
      <div class="log">${entries}</div>
    </div>
  </section>
  `;
};

window.Components = Components;
