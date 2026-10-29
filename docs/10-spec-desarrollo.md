# Spec de desarrollo — Peques & Lazos

> Guía: [Spec de desarrollo](../evaluacion/guias/fase-2-specs/07-spec-de-desarrollo.md)

## Insumos y prompt para el asistente

```text
Lee atentamente DESIGN.md, docs/09-spec-diseno.md y docs/10-spec-desarrollo.md.
En la carpeta stitch/ se encuentra el código y assets exportados de Google Stitch de cada una de las 6 pantallas.
Construye el sitio web de Peques & Lazos siguiendo exactamente las especificaciones de docs/10-spec-desarrollo.md:
1. Exclusivamente HTML5 semántico y CSS3 puro (sin frameworks de CSS externos ni Tailwind, salvo confirmación explícita).
2. Sigue la estructura modular de archivos y las rutas de navegación definidas en la tabla de enlaces.
3. Declara todas las variables de :root en CSS basándote al 100% en los tokens de DESIGN.md.
4. Respeta la estructura semántica obligatoria de cada pantalla (header, nav, main, section, article, aside, footer).
5. Usa el prototipo de Stitch como guía visual de referencia de fidelidad y layout.
Al terminar, evalúa cada uno de los criterios de aceptación de la lista de verificación e indica cuáles se cumplen satisfactoriamente.
```

---

## 1. Estructura de archivos

```text
mi-emprendimiento/
├── index.html                   ← Landing page principal de la marca
├── tienda.html                  ← Catálogo general de productos y filtros
├── producto.html                ← Ficha detallada de producto individual
├── carrito.html                 ← Resumen de carrito de compras y cotizador de envíos
├── blog.html                    ← Listado de artículos y categorías del blog
├── articulo.html                ← Vista de lectura individual de un artículo
├── contacto.html                ← Formulario de contacto y asesoría WhatsApp
├── faq.html                     ← Preguntas frecuentes (despachos, cambios, cuidados)
├── 404.html                     ← Página de error personalizada
├── css/
│   ├── variables.css            ← Tokens de color, tipografía y espaciados (:root)
│   ├── base.css                 ← Reset, estilos generales de tipografía y layout
│   ├── components.css           ← Botones, tarjetas, inputs, chips y badges
│   ├── layout.css               ← Navbar, grid de productos, drawer y footer
│   └── responsive.css           ← Media queries para tablet (768px) y mobile (375px)
├── js/
│   ├── main.js                  ← Lógica de interacción de navbar, drawer y filtros
│   └── cart.js                  ← Simulador de cálculo de despacho y sumatoria de carrito
├── img/                         ← Fotografías de accesorios, baberos, cintillos y logos
├── DESIGN.md                    ← Mini design system del proyecto
└── docs/                        ← Documentación de evaluación (Fases 1, 2 y 3)
```

---

## 2. Páginas y navegación

| Desde (Página origen) | Elemento interactivo | Lleva a (Destino) |
|---|---|---|
| **Todas las páginas** | Logo de cabecera "Peques & Lazos" | `index.html` (Landing) |
| **Todas las páginas** | Enlace "Tienda" en la barra de navegación | `tienda.html` (Catálogo) |
| **Todas las páginas** | Enlace "Blog" en la barra de navegación | `blog.html` (Artículos) |
| **Todas las páginas** | Ícono de bolsa / Carrito | Abre Drawer lateral o redirige a `carrito.html` |
| **index.html** | Botón Hero: "Ver Colección Baberos y Moños" | `tienda.html` |
| **index.html** | Card de producto destacado en "Favoritos de Mamá" | `producto.html` |
| **index.html** | Card de artículo en sección blog de la landing | `articulo.html` |
| **tienda.html** | Clic en tarjeta de producto o en "Ver detalle" | `producto.html` |
| **producto.html** | Botón "Añadir al Carrito" | Abre Drawer de carrito con producto sumado |
| **producto.html** | Botón "Ver Guía de Medidas y Suavidad" | Abre ventana modal accesible con tabla de tallas |
| **carrito.html** | Botón "Seguir comprando" | `tienda.html` |
| **carrito.html** | Botón "Ir a Pagar Seguro" | Simula pantalla de checkout/resumen final |
| **blog.html** | Clic en título o imagen de un artículo | `articulo.html` |
| **articulo.html** | Bloque incrustado de producto recomendado | `producto.html` |
| **Todas las páginas** | Botón flotante inferior de WhatsApp | Enlace externo a `https://wa.me/569XXXXXXXX` |

---

## 3. Estructura semántica

Cada página HTML del proyecto implementará la jerarquía estructural de HTML5 para garantizar la accesibilidad y optimización para motores de búsqueda (SEO):

```text
<!DOCTYPE html>
<html lang="es">
<head> ... </head>
<body>
  <!-- Banner superior de avisos y despacho gratis -->
  <div class="top-banner" role="region" aria-label="Avisos de despacho"> ... </div>

  <!-- Cabecera principal fija con logotipo y navegación accesible -->
  <header class="site-header">
    <nav class="main-nav" aria-label="Navegación principal">
      <a href="index.html" class="brand-logo">Peques & Lazos</a>
      <ul class="nav-links"> ... </ul>
      <div class="nav-actions"> ... </div>
    </nav>
  </header>

  <!-- Contenido principal único por página -->
  <main id="main-content">
    <!-- Secciones temáticas diferenciadas mediante headings estructurados (h1 -> h2 -> h3) -->
    <section class="hero-section"> ... </section>
    <section class="products-showcase"> ... </section>
    <section class="brand-values"> ... </section>
    <section class="newsletter-lead"> ... </section>
  </main>

  <!-- Pie de página con enlaces institucionales, contacto y seguridad -->
  <footer class="site-footer">
    <div class="footer-columns"> ... </div>
    <div class="footer-bottom"> ... </div>
  </footer>
</body>
</html>
```

---

## 4. Organización del CSS

Las variables maestras se declaran en el selector global `:root`, heredando directamente los valores certificados en `DESIGN.md`:

```css
:root {
  /* Paleta cromática principal */
  --color-primary: #B85D67;
  --color-primary-hover: #96424C;
  --color-on-primary: #FFFFFF;
  --color-secondary: #F4ECE1;
  --color-on-secondary: #2D2926;
  --color-tertiary: #4D775D;
  --color-on-tertiary: #FFFFFF;
  --color-neutral: #FBF9F5;
  --color-surface: #FFFFFF;
  --color-on-surface: #2D2926;
  --color-on-surface-variant: #6E6660;
  --color-disabled: #E5DFD7;
  --color-on-disabled: #8C857E;
  --color-error: #B3261E;

  /* Tipografías de Google Fonts */
  --font-family-display: 'Outfit', sans-serif;
  --font-family-body: 'Plus Jakarta Sans', sans-serif;

  /* Escala modular de espaciados */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;

  /* Radios de redondeo */
  --radius-sm: 4px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-full: 9999px;

  /* Sombras y elevaciones sutiles */
  --shadow-sm: 0 2px 8px rgba(45, 41, 38, 0.05);
  --shadow-md: 0 8px 24px rgba(184, 93, 103, 0.12);
  --shadow-lg: 0 16px 40px rgba(45, 41, 38, 0.15);

  /* Transiciones y microinteracciones */
  --transition-fast: 0.2s ease;
  --transition-normal: 0.3s ease;
}
```

---

## 5. Criterios de aceptación verificables

### Navegación
- [ ] La barra de navegación permanece visible o accesible en la parte superior de todas las páginas del sitio.
- [ ] Todos los enlaces entre páginas (Landing, Tienda, Ficha de Producto, Carrito, Blog, Artículo) funcionan sin generar enlaces rotos.
- [ ] El logotipo de la marca siempre redirige a la página de inicio (`index.html`).
- [ ] Las migas de pan (*breadcrumbs*) en la ficha de producto y en el artículo del blog permiten retroceder fácilmente en la jerarquía.

### Funcionalidades
- [ ] El formulario de captación de leads en la landing valida que el correo contenga un formato válido `@` antes de simular el envío.
- [ ] Los filtros de la tienda por categoría (Baberos, Moños, Chupeteros) y material actualizan visiblemente los productos exhibidos.
- [ ] En la ficha de producto se puede alternar entre las diferentes combinaciones de color y la cantidad de unidades.
- [ ] Al pulsar "Añadir al Carrito", el contador de la bolsa en el navbar incrementa su valor numérico y se abre el panel del carrito.
- [ ] En el carrito de compras es posible calcular el costo de despacho seleccionando la comuna de destino y visualizar el desglose final.
- [ ] En el blog se puede interactuar con los botones para compartir el artículo en redes sociales y WhatsApp.

### Diseño y Fidelidad
- [ ] Los colores, tipografías y bordes redondeados coinciden con los tokens declarados en `DESIGN.md`.
- [ ] No se utilizan imágenes ficticias rotas; cada accesorio cuenta con fotografía representativa con texto alternativo (`alt`).
- [ ] Los botones primarios cuentan con estados interactivos perceptibles (`:hover`, `:focus`, `:active`).
- [ ] Los precios se expresan de manera clara y consistente en pesos chilenos ($CLP).

### Responsive
- [ ] En pantallas móviles (375px a 767px), el menú de navegación se colapsa en un botón de menú hamburguesa accesible.
- [ ] La grilla de productos en móvil se ajusta a 2 columnas bien proporcionadas sin desbordamiento horizontal.
- [ ] Los elementos táctiles (botones, enlaces, selectores) poseen una zona de toque mínima de 44x44px.
- [ ] En desktop (1024px o más), el contenido se centra en un contenedor de 1200px con márgenes equilibrados.

### Accesibilidad y Calidad de Código
- [ ] Todas las etiquetas de encabezado siguen un orden estricto (`h1` único por página, seguido de `h2` y `h3`).
- [ ] El contraste cromático entre texto y fondo cumple con el estándar WCAG AA (>4.5:1).
- [ ] El código HTML y CSS está correctamente indentado, comentado y libre de errores de sintaxis.
