/**
 * FOOTER — lee CONFIG.business y CONFIG.contact.
 */
var Components = window.Components || {};

Components.renderFooter = function (config) {
  const year = new Date().getFullYear();

  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-top">
        <div>
          <div class="footer-brand">${config.business.name}</div>
          <div class="footer-tagline">${config.business.tagline}</div>
          <p style="max-width:34ch;font-size:0.9rem;">${config.contact.address.note}</p>
        </div>

        <div class="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:${config.contact.phoneDial}">${config.contact.phoneDisplay}</a></li>
            <li><a href="mailto:${config.contact.email}">${config.contact.email}</a></li>
            <li><a href="https://wa.me/${config.contact.whatsappNumber}" target="_blank" rel="noopener">WhatsApp</a></li>
            <li><a href="${config.contact.instagramUrl}" target="_blank" rel="noopener">${config.contact.instagramHandle}</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Explore</h4>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#packages">Packages</a></li>
            <li><a href="#service-area">Service Area</a></li>
            <li><a href="#quote">Request a Quote</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <span>&copy; ${year} ${config.business.name}. ${config.contact.address.region}.</span>
        <span>${config.business.legalNote}</span>
      </div>
    </div>
  </footer>
  `;
};

window.Components = Components;
