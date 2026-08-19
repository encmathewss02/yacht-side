/**
 * MAIN.JS — punto de entrada. Renderiza cada sección dentro de su
 * contenedor en index.html, en orden, usando CONFIG como única fuente
 * de datos. No contiene texto de negocio: solo orquesta.
 *
 * Para reordenar secciones: cambia el orden de los <div id="..."> en
 * index.html Y el orden correspondiente aquí abajo (deben coincidir).
 * Para quitar una sección temporalmente: comenta su línea aquí Y su
 * contenedor en index.html.
 */
document.addEventListener("DOMContentLoaded", function () {
  document.title = CONFIG.seo.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", CONFIG.seo.description);

  const mount = (id, html) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  };

  mount("app-header", Components.renderHeader(CONFIG));
  mount("app-hero", Components.renderHero(CONFIG));
  mount("app-services", Components.renderServices(CONFIG));
  mount("app-packages", Components.renderPackages(CONFIG));
  mount("app-why-us", Components.renderWhyChooseUs(CONFIG));
  mount("app-how-it-works", Components.renderHowItWorks(CONFIG));
  mount("app-service-area", Components.renderServiceArea(CONFIG));
  mount("app-about", Components.renderAbout(CONFIG));
  mount("app-gallery", Components.renderGallery(CONFIG));
  mount("app-quote", Components.renderQuoteForm(CONFIG));
  mount("app-footer", Components.renderFooter(CONFIG));

  // Comportamiento (se inicializa después de insertar el HTML en el DOM)
  Components.initHeaderBehavior();
  Components.initQuoteFormBehavior(CONFIG);
});
