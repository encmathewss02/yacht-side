/**
 * QUOTE FORM — lee CONFIG.quoteForm y CONFIG.services (para las casillas
 * de "servicios solicitados", que se generan automáticamente).
 *
 * Sin backend todavía: al enviar, se arma un mensaje pre-llenado de
 * WhatsApp con todos los datos del formulario, y se ofrece un enlace
 * mailto de respaldo. Esto es intencional (ver requerimiento "no agregar
 * funcionalidad compleja todavía"). Para conectar un backend real más
 * adelante (Formspree, EmailJS, Netlify Forms, etc.), reemplaza la función
 * handleQuoteFormSubmit() más abajo — el resto del formulario no cambia.
 */
var Components = window.Components || {};

Components.renderQuoteForm = function (config) {
  const qf = config.quoteForm;

  const yachtTypeOptions = qf.yachtTypeOptions
    .map((opt) => `<option value="${opt}">${opt}</option>`)
    .join("");

  const serviceCheckboxes = config.services
    .map(
      (s) => `
      <label class="checkbox-item">
        <input type="checkbox" name="services" value="${s.name}" />
        <span>${s.name}</span>
      </label>`
    )
    .join("");

  const quickLinks = `
    <div class="contact-quicklinks">
      <a class="contact-quicklink" href="tel:${config.contact.phoneDial}">
        ${ICONS.phone}
        <span><span class="cl-label">Call</span><span class="cl-value">${config.contact.phoneDisplay}</span></span>
      </a>
      <a class="contact-quicklink" href="https://wa.me/${config.contact.whatsappNumber}?text=${encodeURIComponent(config.contact.whatsappDefaultMessage)}" target="_blank" rel="noopener">
        ${ICONS.whatsapp}
        <span><span class="cl-label">WhatsApp</span><span class="cl-value">${config.contact.phoneDisplay}</span></span>
      </a>
      <a class="contact-quicklink" href="mailto:${config.contact.email}">
        ${ICONS.mail}
        <span><span class="cl-label">Email</span><span class="cl-value">${config.contact.email}</span></span>
      </a>
    </div>

    <div class="hours-block">
      <h4>Business Hours</h4>
      ${config.hours.map((h) => `<div class="hours-row"><span>${h.days}</span><span>${h.time}</span></div>`).join("")}
    </div>
  `;

  return `
  <section class="section section--fog" id="quote">
    <div class="container quote-layout">
      <div class="quote-side">
        <p class="eyebrow">Get Started</p>
        <h2>${qf.heading}</h2>
        <p>${qf.subheading}</p>
        ${quickLinks}
      </div>

      <div class="form-card">
        <form id="quote-form" novalidate>
          <div class="form-grid form-grid--2">
            <div class="field">
              <label for="qf-name">Name</label>
              <input id="qf-name" name="name" type="text" required autocomplete="name" />
            </div>
            <div class="field">
              <label for="qf-phone">Phone</label>
              <input id="qf-phone" name="phone" type="tel" required autocomplete="tel" />
            </div>
            <div class="field">
              <label for="qf-email">Email</label>
              <input id="qf-email" name="email" type="email" required autocomplete="email" />
            </div>
            <div class="field">
              <label for="qf-yacht-name">Yacht Name</label>
              <input id="qf-yacht-name" name="yachtName" type="text" />
            </div>
            <div class="field">
              <label for="qf-yacht-type">Yacht Type</label>
              <select id="qf-yacht-type" name="yachtType">
                <option value="">Select type</option>
                ${yachtTypeOptions}
              </select>
            </div>
            <div class="field">
              <label for="qf-yacht-length">Yacht Length (ft)</label>
              <input id="qf-yacht-length" name="yachtLength" type="number" min="0" />
            </div>
            <div class="field">
              <label for="qf-cabins">Number of Cabins</label>
              <input id="qf-cabins" name="cabins" type="number" min="0" />
            </div>
            <div class="field">
              <label for="qf-heads">Number of Heads</label>
              <input id="qf-heads" name="heads" type="number" min="0" />
            </div>
          </div>

          <div class="field" style="margin-top:1.75rem;">
            <label>Services Requested</label>
            <div class="checkbox-grid">${serviceCheckboxes}</div>
          </div>

          <div class="form-grid form-grid--2" style="margin-top:1.75rem;">
            <div class="field">
              <label for="qf-date">Preferred Date</label>
              <input id="qf-date" name="preferredDate" type="date" />
            </div>
            <div class="field">
              <label for="qf-photos">Upload Photos</label>
              <div class="file-drop">
                Optional — helps us prepare an accurate quote.
                <input id="qf-photos" name="photos" type="file" accept="image/*" multiple />
              </div>
            </div>
          </div>

          <div class="field" style="margin-top:1.75rem;">
            <label for="qf-notes">Additional Information</label>
            <textarea id="qf-notes" name="notes" placeholder="Anything else we should know about your vessel or schedule?"></textarea>
          </div>

          <button type="submit" class="btn btn-primary btn-block" style="margin-top:1.75rem;">Submit Request</button>
          <p class="form-footnote">Submitting opens WhatsApp with your details pre-filled, so our team can respond directly. You can also reach us by phone or email above.</p>
          <div class="form-status" id="qf-status"></div>
        </form>
      </div>
    </div>
  </section>
  `;
};

/**
 * Arma el mensaje de WhatsApp con los datos del formulario y abre wa.me.
 * TODO (futuro): sustituir/complementar con una llamada a un backend real.
 */
Components.initQuoteFormBehavior = function (config) {
  const form = document.getElementById("quote-form");
  const status = document.getElementById("qf-status");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    const services = data.getAll("services").join(", ") || "Not specified";

    const lines = [
      `New Quote Request — ${config.business.name}`,
      `Name: ${data.get("name") || "-"}`,
      `Phone: ${data.get("phone") || "-"}`,
      `Email: ${data.get("email") || "-"}`,
      `Yacht Name: ${data.get("yachtName") || "-"}`,
      `Yacht Type: ${data.get("yachtType") || "-"}`,
      `Length: ${data.get("yachtLength") || "-"} ft`,
      `Cabins: ${data.get("cabins") || "-"}`,
      `Heads: ${data.get("heads") || "-"}`,
      `Services Requested: ${services}`,
      `Preferred Date: ${data.get("preferredDate") || "-"}`,
      `Additional Info: ${data.get("notes") || "-"}`,
      `(Note: photo uploads are not sent via WhatsApp — please attach them directly in the chat.)`,
    ];

    const message = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${config.contact.whatsappNumber}?text=${message}`;

    if (status) {
      status.textContent = "Opening WhatsApp with your request pre-filled…";
      status.classList.add("is-visible");
    }

    window.open(url, "_blank", "noopener");
  });
};

window.Components = Components;
