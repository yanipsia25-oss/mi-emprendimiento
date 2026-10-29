---
version: alpha
name: "Peques & Lazos"
description: "Design system de accesorios artesanales e hipoalergénicos para bebés y recién nacidos"
colors:
  primary: "#B85D67"
  primary-hover: "#96424C"
  on-primary: "#FFFFFF"
  secondary: "#F4ECE1"
  on-secondary: "#2D2926"
  tertiary: "#4D775D"
  on-tertiary: "#FFFFFF"
  neutral: "#FBF9F5"
  surface: "#FFFFFF"
  on-surface: "#2D2926"
  on-surface-variant: "#6E6660"
  disabled: "#E5DFD7"
  on-disabled: "#8C857E"
  error: "#B3261E"
typography:
  headline-display:
    fontFamily: Outfit
    fontSize: 42px
    fontWeight: 600
    lineHeight: 1.15
  headline-lg:
    fontFamily: Outfit
    fontSize: 30px
    fontWeight: 600
    lineHeight: 1.25
  headline-md:
    fontFamily: Outfit
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.3
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.0
rounded:
  sm: 4px
  md: 10px
  lg: 16px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 12px 24px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
  button-primary-disabled:
    backgroundColor: "{colors.disabled}"
    textColor: "{colors.on-disabled}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 12px 24px
  card-product:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  tag-offer:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    rounded: "{rounded.full}"
  input-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 12px 14px
  message-error:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.error}"
  page:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
  text-secondary:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface-variant}"
---

# Peques & Lazos — Design system

## Overview

**Peques & Lazos** es una marca de accesorios infantiles y textiles delicados para recién nacidos y niñas pequeñas, enfocada en resolver las necesidades de madres primerizas y familias que buscan calidad, diseño tierno y seguridad médica dermatológica. 

La interfaz debe sentirse como una extensión del hogar y del cuidado maternal: un entorno visualmente sereno, limpio, cálido y sin fricciones. Se aleja deliberadamente de los colores plásticos saturados y las interfaces saturadas de banners invasivos, optando por tonalidades lino, avena, rosa blush empolvado y verde salvia, con bordes redondeados y microinteracciones suaves que invitan a una navegación relajada desde el teléfono móvil.

## Colors

- **Primary (`#B85D67` — Blush Terracotta):** Se utiliza exclusivamente para elementos de interacción de máxima jerarquía: botones principales de compra (`button-primary`), llamadas a la acción en el Hero, enlaces activos en el menú y badges numéricos del carrito. *No se utiliza como color de fondo en bloques grandes de texto.*
- **Primary Hover (`#96424C`):** Estado de activación y cursor en botones y enlaces interactivos primarios.
- **On-Primary (`#FFFFFF`):** Color del texto y los íconos situados sobre el fondo primario.
- **Secondary (`#F4ECE1` — Avena Crema):** Fondos de componentes secundarios, chips de categorías inactivas, cards de testimonios y cajas de aviso en la ficha de producto.
- **On-Secondary (`#2D2926`):** Color del texto situado sobre el fondo secundario.
- **Tertiary (`#4D775D` — Verde Salvia Botánico):** Color de acento para certificar características saludables: sellos de *"100% Algodón Orgánico"*, insignias de *"Nuevo"*, etiquetas de *"Descuento"* y beneficios de despacho gratuito.
- **Neutral (`#FBF9F5` — Blanco Lino Suave):** Color de fondo global del sitio (`body`), proporcionando calidez y descansando la vista durante la navegación nocturna de las madres.
- **Surface (`#FFFFFF` — Blanco Puro):** Fondo para tarjetas de producto, ventanas modales, menús desplegables y el Drawer lateral del carrito.
- **On-Surface (`#2D2926` — Carbón Cálido):** Color de títulos, nombres de producto y texto general de lectura, ofreciendo un contraste superior a 14:1.
- **On-Surface-Variant (`#6E6660` — Gris Topo):** Información de segundo nivel: textos de ayuda, leyendas de precios antiguos tachados, fechas de artículos del blog y migas de pan.
- **Disabled (`#E5DFD7`) y On-Disabled (`#8C857E`):** Botones y controles inactivos cuando no hay stock o no se han completado los campos requeridos.
- **Error (`#B3261E`):** Alertas de campos de formulario incompletos o errores en la selección de variantes.

## Typography

- **Títulos (Headlines):** Familia tipográfica **Outfit** (Google Fonts). Transmite modernidad, delicadeza geométrica y amabilidad gracias a sus curvaturas orgánicas.
  - `headline-display`: 42px (desktop) / 32px (mobile), weight 600, line-height 1.15. Título del Hero en Landing.
  - `headline-lg`: 30px (desktop) / 24px (mobile), weight 600, line-height 1.25. Títulos de sección en Tienda y Blog.
  - `headline-md`: 22px (desktop) / 18px (mobile), weight 600, line-height 1.3. Nombres de producto en ficha y subtítulos de artículos.
- **Cuerpo y lectura (Body & UI):** Familia tipográfica **Plus Jakarta Sans** (Google Fonts). Elegida por su excelente legibilidad en pantallas de smartphone con escala de pesos equilibrada.
  - `body-md`: 16px (desktop) / 15px (mobile), weight 400, line-height 1.6. Párrafos descriptivos, artículos y fichas técnicas.
  - `label-md`: 15px (desktop) / 14px (mobile), weight 600, line-height 1.0. Botones interactivos, tags, badges y enlaces del navbar.

## Layout

- **Ancho máximo contenedor:** 1200px centrado horizontalmente en desktop con márgenes laterales mínimos de 24px.
- **Escala de espaciados:** Sistema modular basado en múltiplos de 8px: `xs: 4px`, `sm: 8px`, `md: 16px`, `lg: 24px`, `xl: 32px`, `2xl: 48px`, `3xl: 64px`.
- **Breakpoints y comportamiento responsive:**
  - **Mobile (< 768px):** Enfoque prioritario. Grilla de productos a 2 columnas con espacio de 12px entre tarjetas. Barra de filtros mediante chips horizontales con scroll horizontal suave. Menú de navegación condensado en ícono hamburguesa con drawer lateral. Botón flotante de WhatsApp siempre visible en la esquina inferior derecha. Botones táctiles con altura mínima de 44px.
  - **Tablet (768px a 1023px):** Grilla de productos a 3 columnas. Navegación superior con barra de búsqueda visible. Drawer de carrito de 380px de ancho.
  - **Desktop (>= 1024px):** Grilla de tienda a 4 columnas con barra lateral de filtros fija a la izquierda. Hero a dos columnas (propuesta de valor a la izquierda, composición fotográfica a la derecha). Navegación superior completa con buscador predictivo y enlaces rápidos a categorías.

## Elevation & Depth

La jerarquía visual se resuelve a través de planos limpios y capas sutiles de color y sombras difusas, evitando sombras oscuras y pesadas:
- **Nivel 0 (Base):** Fondo lino suave `#FBF9F5`.
- **Nivel 1 (Superficies de contenido):** Tarjetas de producto sobre blanco `#FFFFFF` con borde fino de 1px en `#EFE9DF` y sombra sutil `0 2px 8px rgba(45, 41, 38, 0.04)`.
- **Nivel 2 (Hover interactivo):** Tarjetas al interactuar elevan su sombra a `0 8px 24px rgba(184, 93, 103, 0.12)` con traslación suave hacia arriba de -3px.
- **Nivel 3 (Modales y Drawers):** Drawer de carrito y modales emergentes utilizan sombra profunda `0 16px 40px rgba(45, 41, 38, 0.15)` sobre un telón de fondo semitransparente (*backdrop*) con desenfoque de cristal (*backdrop-filter: blur(4px)*).

## Shapes

- **Bordes totalmente redondeados (`rounded-full: 9999px`):** Aplicados a todos los botones principales y secundarios (`button-primary`, `button-secondary`), chips de filtrado, badges de novedades y burbujas de selección de color. Refuerzan visualmente la idea de suavidad y ausencia de filos cortantes en el mundo del bebé.
- **Bordes medios (`rounded-md: 10px`):** Aplicados a contenedores de tarjetas de producto (`card-product`), cards del blog, campos de texto de formulario (`input-field`) y cajas de aviso.
- **Bordes grandes (`rounded-lg: 16px`):** Aplicados a contenedores del Hero, banner de captación de leads y modales de guía de medidas.

## Components

### button-primary
- **Qué contiene:** Texto del llamado a la acción en tipografía `label-md` mayúscula/minúscula, con ícono opcional a la derecha (ej. flecha o bolsa de compras).
- **Reglas concretas:** Borde redondeado completo (`rounded.full`), fondo `#B85D67`, texto blanco `#FFFFFF`, padding vertical de 12px y horizontal de 24px. La etiqueta debe ser un verbo directo: *"Añadir al carrito"*, *"Comprar ahora"*, *"Ver colección"*.
- **Estados:** Normal (`#B85D67`), Hover (`#96424C`), Active (escala a 0.98), Disabled (`#E5DFD7` con texto `#8C857E` y cursor `not-allowed`).

### button-secondary
- **Qué contiene:** Texto de acción complementaria o de navegación.
- **Reglas concretas:** Fondo blanco `#FFFFFF`, borde de 1.5px sólido en color primario `#B85D67`, texto `#B85D67`. Utilizado para *"Ver detalles"*, *"Seguir comprando"* o *"Leer más"*.
- **Estados:** Normal (borde primario, fondo blanco), Hover (fondo `#F4ECE1`), Disabled (borde `#E5DFD7` y texto `#8C857E`).

### card-product
- **Qué contiene:** Imagen cuadrada de producto (proporción 1:1) con esquinas redondeadas, tag de oferta o novedad flotante arriba a la izquierda, botón de favoritos (corazón) arriba a la derecha, nombre del producto en máximo 2 líneas, precio destacado en `$CLP`, selector de colores en bolitas circulares de 16px y botón *"Añadir"* de acceso rápido.
- **Reglas concretas:** El precio siempre debe ser claramente legible. En estado hover, la tarjeta se eleva ligeramente y la imagen muestra una fotografía secundaria en uso sobre el bebé.

### tag-offer
- **Qué contiene:** Texto corto en mayúsculas: *"100% ALGODÓN"*, *"NUEVO"* o *"-15% OFF"*.
- **Reglas concretas:** Fondo verde salvia `#4D775D` con texto blanco, tipografía tamaño 11px negrita, padding de 4px 10px, bordes totalmente redondeados.

### input-field
- **Qué contiene:** Etiqueta flotante superior, campo de texto con placeholder descriptivo y mensaje de validación inferior.
- **Reglas concretas:** Fondo blanco `#FFFFFF`, borde de 1.5px en color neutro `#E0D8CE`, texto `#2D2926`, esquinas redondeadas de 10px. Al recibir foco (`:focus`), el borde cambia a `#B85D67` con un anillo suave (*ring*) de 3px con opacidad al 20%.

### drawer-cart
- **Qué contiene:** Cabecera con título *"Tu Carrito"* y botón de cierre en X, lista vertical de productos seleccionados con foto, título, selector de cantidad `[-] 1 [+]` y botón eliminar, sección de cálculo de envío por comuna, desglose de subtotal y botón principal *"Finalizar compra"*.
- **Reglas concretas:** Se despliega suavemente desde el lateral derecho ocupando un ancho de 400px en desktop y 100% en mobile.

## Do's and Don'ts

### Do's (Lo que SIEMPRE se debe hacer)
- **Sí** utilizar fotografías luminosas, con luz natural y fondos limpios que muestren la textura real de las telas de algodón y los moños.
- **Sí** destacar en cada producto las características de seguridad e hipoalergenicidad (ej. *"Libre de níquel"*, *"Elástico que no aprieta"*).
- **Sí** garantizar que los botones táctiles en dispositivos móviles tengan un tamaño mínimo de 44px de altura para facilitar el toque con una sola mano.
- **Sí** mantener la coherencia de radios redondeados en botones y tarjetas para conservar la armonía suave de la marca.

### Don'ts (Lo que NUNCA se debe hacer)
- **No** usar colores fluorescentes, fucsias chillones ni gradientes saturados que rompan la tranquilidad visual y la elegancia artesanal.
- **No** ocultar el costo de envío ni obligar a registrarse antes de poder simular el despacho en el carrito de compras.
- **No** utilizar tipografías de fantasía manuscritas o ilegibles en textos de lectura, descripciones o botones de compra.
- **No** colocar popups invasivos de suscripción a pantalla completa que bloqueen la navegación móvil de la usuaria.
