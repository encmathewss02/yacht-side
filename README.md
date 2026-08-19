# [COLOCAR NOMBRE] — Sitio Web (Interior Yacht Cleaning, Puerto Rico)

Sitio estático (HTML + CSS + JS puro, sin build ni frameworks) diseñado para
ser fácil de editar y mantener. **Toda la información editable vive en
`js/config.js`.**

## Cómo verlo

Opción simple: abre `index.html` directamente en el navegador.

Opción recomendada (evita cualquier restricción de navegador con archivos
locales): sirve la carpeta con un servidor estático simple:

```bash
cd yacht-site
python3 -m http.server 8000
# abre http://localhost:8000
```

## Estructura del proyecto

```
yacht-site/
├── index.html                 → Estructura de la página (contenedores vacíos)
├── css/
│   └── styles.css             → Todo el diseño visual (tokens al inicio del archivo)
├── js/
│   ├── config.js              → ★ EDITA AQUÍ: textos, precios, contacto, servicios
│   ├── icons.js                → Iconos SVG + lógica de formato de precios
│   ├── main.js                 → Orquestador: renderiza las secciones en orden
│   └── components/
│       ├── header.js
│       ├── hero.js
│       ├── services.js
│       ├── packages.js
│       ├── whyChooseUs.js
│       ├── howItWorks.js
│       ├── serviceArea.js
│       ├── about.js
│       ├── gallery.js
│       ├── quoteForm.js
│       └── footer.js
└── README.md
```

Cada sección de la página es un componente independiente en su propio
archivo. Puedes editar, reordenar o incluso desactivar una sección sin
afectar a las demás (ver "Reordenar o quitar secciones" abajo).

## Editar contenido (lo más común)

Abre `js/config.js`. Está dividido en bloques numerados y comentados:

| Quiero cambiar...                          | Bloque en config.js         |
|---------------------------------------------|------------------------------|
| Nombre del negocio, tagline                  | `1. INFORMACIÓN DEL NEGOCIO` |
| Teléfono, WhatsApp, email, Instagram         | `2. CONTACTO`                |
| Horario                                      | `3. HORARIO`                 |
| Título y subtítulo del Hero                  | `4. HERO`                    |
| Servicios (agregar/quitar/editar)            | `5. SERVICIOS`               |
| Paquetes y precios                           | `6. PAQUETES / PACKAGES`     |
| Bullets de "Why Choose Us"                   | `7. WHY CHOOSE US`           |
| Pasos de "How It Works"                      | `8. HOW IT WORKS`            |
| Zonas de servicio (marinas, ciudades)        | `9. ZONAS DE SERVICIO`       |
| Texto de "About / Founder"                   | `10. ABOUT / FOUNDER`        |
| Slots de galería                             | `11. GALERÍA`                |
| Opciones del formulario de cotización        | `12. FORMULARIO`             |
| Prender funcionalidades futuras              | `13. FEATURE FLAGS`          |
| Título/descripción para buscadores (SEO)     | `14. SEO`                    |

Un cambio en `config.js` se refleja automáticamente en **todas** las
secciones donde aparece ese dato (ej. el teléfono aparece en el header, el
botón flotante, el formulario y el footer — cámbialo una sola vez).

### Ejemplo: cambiar el nombre de la marca

```js
business: {
  name: "Bright Hull Interior Care",
  shortName: "Bright Hull",
  ...
}
```

Esto actualiza el header, el hero, el about, el footer y el `<title>` de la
pestaña del navegador, sin tocar ningún otro archivo.

### Ejemplo: agregar un nuevo servicio

En el arreglo `services` de `config.js`, agrega un objeto nuevo:

```js
{
  id: "exterior-glass",
  name: "Exterior Glass Cleaning",
  shortDesc: "Streak-free exterior glass and windows.",
  longDesc: "...",
  icon: "full", // reutiliza un ícono existente en js/icons.js, o agrega uno nuevo
},
```

Aparecerá automáticamente en la sección Services **y** como casilla nueva
en el formulario de cotización — no hay que tocar nada más.

### Ejemplo: agregar una nueva zona de servicio

En `serviceAreas`:

```js
{ name: "Palmas del Mar", coords: "18.08° N, 65.78° W" },
```

## Precios (importante)

Los precios **no están fijados todavía**, tal como se pidió. El control
está en `config.js`:

```js
pricingMode: "request_quote", // "hidden" | "request_quote" | "visible"
```

- `"request_quote"` (por defecto): cada paquete muestra "Request a Quote"
  en vez de un número. Así puedes validar tu modelo de costos sin mostrar
  precios en el sitio.
- `"hidden"`: muestra "Custom Quote" en vez de cualquier precio.
- `"visible"`: muestra el número definido en el campo `price` de cada
  paquete (ej. `price: 350`).

Cuando definas tus precios finales, solo tienes que:
1. Escribir el número en el campo `price` de cada paquete en `config.js`.
2. Cambiar `pricingMode` a `"visible"`.

El precio se actualizará automáticamente en la tarjeta de ese paquete — no
hay ningún precio escrito directamente en el HTML o CSS.

## Imágenes

Actualmente el sitio usa **placeholders** (paneles con degradado marino y
una etiqueta de texto) en vez de fotos reales, para no usar imágenes de
stock sin licencia. Cada placeholder indica su nombre de "slot" (ej.
`hero-main`, `founder-photo`, `gallery-1`).

Para reemplazar un placeholder por una foto real:

1. Coloca tu imagen optimizada dentro de una carpeta `assets/images/`.
2. En el componente correspondiente (ej. `js/components/hero.js`),
   reemplaza el `<div class="img-placeholder ...">` por una etiqueta
   `<img src="assets/images/tu-foto.jpg" alt="..." class="ph-hero" />`
   (mantén la clase de tamaño: `ph-hero`, `ph-square` o `ph-wide` para
   conservar las proporciones ya definidas en el CSS).

Slots actuales: `hero-main`, `founder-photo`, `gallery-1` a `gallery-4`.

## Formulario de cotización (estado actual)

El formulario **no tiene backend todavía**, tal como se pidió ("primero
una versión funcional, sin funcionalidades complejas innecesarias"). Al
enviarse:

- Arma un mensaje de WhatsApp pre-llenado con todos los datos del
  formulario y lo abre en una nueva pestaña (`js/components/quoteForm.js`
  → `initQuoteFormBehavior`).
- Las fotos no se envían por WhatsApp automáticamente (limitación técnica
  de wa.me); el formulario le indica al usuario que las adjunte
  directamente en el chat.

### Cómo conectar un backend real más adelante

Cuando quieras recibir las cotizaciones por email/CRM automáticamente,
reemplaza la función `initQuoteFormBehavior` en
`js/components/quoteForm.js` por una llamada a un servicio como
[Formspree](https://formspree.io), [EmailJS](https://www.emailjs.com) o un
endpoint propio. El HTML del formulario (los campos) no necesita cambiar.

## Reordenar o quitar secciones

1. En `index.html`, reordena (o comenta) los `<div id="app-...">`.
2. En `js/main.js`, haz coincidir el mismo orden (o comenta) en las
   llamadas `mount(...)`.

Ninguna sección depende del contenido de otra, así que esto es seguro.

## Funcionalidad futura (ya contemplada en la estructura)

Estas banderas existen en `config.js` → bloque `13. FEATURE FLAGS`. Hoy
están todas en `false` (no construidas), pero el proyecto está organizado
para añadirlas sin rehacer el sitio:

- **Online booking** — agregar un componente `booking.js` que reemplace o
  complemente el formulario de cotización.
- **Payment processing** — se integraría en el flujo de booking.
- **Customer reviews** — nuevo componente `reviews.js` + un arreglo
  `reviews` en `config.js`.
- **Before/After gallery** — el componente `gallery.js` ya tiene la
  estructura de slots lista; solo se necesita agregar pares antes/después.
- **Recurring maintenance plans** / **Charter turnaround plans** — se
  agregarían como paquetes adicionales en `config.js` → `packages`, o como
  una sección nueva si requieren su propio formulario.
- **Pricing calculator** — nuevo componente que lea `config.services` y
  `config.packages` para calcular un estimado dinámico.
- **Customer portal** — quedaría fuera del sitio estático (requiere
  autenticación y backend); se linkearía desde el header/footer cuando
  exista.

## Notas de diseño

- **Tipografía:** Fraunces (títulos), Inter (cuerpo), IBM Plex Mono
  (etiquetas técnicas / datos — usada para el motivo de "bitácora de
  navegación" en "How It Works" y las coordenadas de "Service Area").
- **Paleta:** definida como variables CSS al inicio de `css/styles.css`
  (`--ink`, `--canvas`, `--fog`, `--slate`, `--teak`). Cambiar estos
  valores actualiza el color en todo el sitio.
- **Mobile-first:** todo el CSS parte del layout móvil; los `@media`
  amplían el diseño para tablet/desktop, nunca al revés.
