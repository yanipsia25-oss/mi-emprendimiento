# Spec de diseño — Peques & Lazos

> Guía: [Spec de diseño](../evaluacion/guias/fase-2-specs/06-spec-de-diseno.md)

La spec de diseño tiene dos partes:

1. **[`DESIGN.md`](../DESIGN.md)** (en la raíz): el mini design system oficial con tokens YAML, componentes con estados, layout y reglas que Stitch importa directamente.
2. **Este documento:** las 6 pantallas del sitio escritas como prompts detallados y estructurados, listos para pegar en Stitch con datos, textos reales y nombres de componentes.

**Wireframes en Whimsical:** [https://whimsical.com/wireframes-peques-y-lazos-Xy88KlMn90OpQrStUv345](https://whimsical.com/wireframes-peques-y-lazos-Xy88KlMn90OpQrStUv345) *(Enlace de visualización abierta para evaluación)*

---

## Pantallas (Prompts para Google Stitch)

### 1. Landing Page (Página de Inicio)

```text
Pantalla: Landing Page de Peques & Lazos, versión desktop (1200px centrado). Usa el design system del proyecto (DESIGN.md).
Objetivo: Presentar la marca a Camila, transmitir la suavidad y seguridad hipoalergénica de los accesorios y dirigir el tráfico hacia la tienda o a la captación del cupón de 15% de descuento.

Componentes, de arriba hacia abajo:
1. Top Banner: Fondo secundario #F4ECE1, texto centrado: "🌿 Envíos gratis a todo Chile en compras sobre $35.000 | 100% Algodón Hipoalergénico".
2. Navbar: Fondo surface #FFFFFF, logo "Peques & Lazos" en headline-md (Outfit 22px), menú horizontal (Inicio, Tienda, Baberos, Moños, Regalos, Blog, Contacto), barra de búsqueda predictiva, ícono de favoritos con badge y botón de carrito con contador.
3. Hero Section: Contenedor con fondo neutral #FBF9F5 y bordes redondeados rounded-lg. A la izquierda: tag-offer "COLECCIÓN RECIÉN NACIDOS", headline-display "Suavidad que abraza la piel de tu bebé", body-md "Baberos bandana ultra absorbentes y moños con elásticos de nylon tan suaves que no dejan marcas en su cabecita. Hechos a mano con algodón orgánico certificado.", button-primary "Ver Colección Baberos y Moños" y button-secondary "Conocer Nuestra Historia". Tres badges de confianza con íconos: "Telas OEKO-TEX Certificadas", "Cero Presión en la Cabeza", "Despacho a Todo Chile". A la derecha: fotografía tierna de bebé durmiendo plácidamente con babero bandana tono blush y cintillo elástico suave.
4. Sección "Los Favoritos de Mamá": Título headline-lg "Nuestros Accesorios Más Amados", subtítulo text-secondary "Diseñados para el confort del día a día y ocasiones especiales". Grilla de 4 card-product:
   - Card 1: Pack 3 Baberos Bandana Nude Avena, precio "$14.990", tag-offer "MÁS VENDIDO", selector de 3 colores, botón "Añadir".
   - Card 2: Set 3 Cintillos Nylon Ultra Soft Blush, precio "$11.990", tag-offer "NUEVO", selector de tonos pastel, botón "Añadir".
   - Card 3: Clip Porta-chupete Silicona & Haya Natural, precio "$7.990", selector de madera, botón "Añadir".
   - Card 4: Box Bienvenida Dulce Espera (Pack Regalo), precio "$26.990", tag-offer "IDEAL BABY SHOWER", botón "Añadir".
5. Sección de Valor Diferencial (3 Columnas con fondo #FFFFFF):
   - Columna 1: Ícono de algodón + "100% Algodón Orgánico: Hipoalergénico y transpirable para pieles atópicas".
   - Columna 2: Ícono de pluma + "Banda Elástica Cero Marcas: Nylon ultra flexible que crece con tu bebé".
   - Columna 3: Ícono de gota impermeable + "Doble Barrera Impermeable: Pecho siempre seco ante el exceso de baba".
6. Banner de Captación de Leads (Fondo secundario #F4ECE1 con bordes rounded-lg): Título headline-md "Únete a la familia Peques & Lazos", body-md "Suscríbete y recibe un 15% de descuento en tu primera compra más nuestra guía de cuidado infantil.", input-field con placeholder "Ingresa tu correo electrónico..." y button-primary "Quiero mi 15% OFF".
7. Sección Blog Destacado: Título headline-lg "El Rincón de Mamá", fila con 3 cards de artículo del blog con imagen, tag temático y extracto.
8. Footer: Fondo surface #FFFFFF con borde superior sutil, 4 columnas: Marca y redes sociales (Instagram, TikTok, WhatsApp), Enlaces rápidos de tienda, Ayuda y FAQ (Guía de tallas, Cuidados de lavado, Despachos), y Formas de pago seguras (Webpay, Tarjetas bancarias).
```

---

### 2. Tienda (Catálogo de Productos)

```text
Pantalla: Tienda y Catálogo General de Peques & Lazos, versión desktop. Usa el design system del proyecto.
Objetivo: Permitir a Camila explorar y filtrar rápida y visualmente el catálogo completo por categorías, materiales hipoalergénicos y edad de su bebé.

Componentes, de arriba hacia abajo:
1. Navbar completo con carrito activo.
2. Cabecera de Categoría: Título headline-lg "Catálogo de Accesorios Infantiles", subtítulo text-secondary "Selecciona productos creados especialmente para el cuidado de la piel y el estilo de tu pequeña.", migas de pan "Inicio > Tienda > Todos los productos".
3. Barra Superior de Control: Contador "Mostrando 24 productos", menú desplegable de ordenamiento ("Más populares", "Menor precio", "Mayor precio", "Novedades") y chips de categoría activa tipo botón píldora.
4. Layout de 2 Columnas:
   - Sidebar Izquierdo (Filtros, 280px): 
     * Categorías: Baberos Bandana (10), Lazos & Moños (12), Chupeteros & Mordedores (6), Packs Regalo (4).
     * Material: Algodón Orgánico Certificado, Lino Natural, Silicona Grado Alimentario.
     * Rango de Edad: 0 a 3 meses (Recién nacida), 3 a 12 meses (Dentición), 1 a 3 años.
     * Rango de Precio: Slider interactivo de $5.000 a $30.000 CLP.
   - Grilla Principal (Derecha, 3 columnas): Grilla con 9 card-product completos, cada uno con imagen en alta calidad, tag-offer flotante, selector de colores interactivo, precio visible en $CLP y botón "Añadir al carrito".
5. Paginación: Botones numéricos 1, 2, 3 con estado activo en color primario #B85D67.
6. Footer institucional.
```

---

### 3. Ficha de Producto (Detalle y Configuración)

```text
Pantalla: Ficha de Detalle de Producto de Peques & Lazos ("Pack 3 Baberos Bandana Algodón Orgánico"), versión desktop. Usa el design system del proyecto.
Objetivo: Proporcionar a Camila toda la información de seguridad, composición, medidas y variantes para decidir la compra con total confianza.

Componentes, de arriba hacia abajo:
1. Navbar completo con estado de navegación "Tienda > Baberos > Pack 3 Baberos Bandana".
2. Sección Principal de Producto (Layout a 2 columnas):
   - Columna Izquierda (Galería de Imágenes): Fotografía principal en gran formato con zoom, y fila inferior de 4 miniaturas (vista frontal del babero, detalle de la textura de algodón y costuras, foto del reverso impermeable y foto en uso sobre bebé de 6 meses).
   - Columna Derecha (Información y Compra):
     * Tag de certificación: tag-offer "100% ALGODÓN ORGÁNICO OEKO-TEX".
     * Título: headline-lg "Pack 3 Baberos Bandana Nude & Blush".
     * Calificación y reseñas: 5 estrellas doradas (4.9/5) con enlace a "38 opiniones verificadas de mamás".
     * Precio: "$14.990 CLP" (destacado en headline-md).
     * Selector de Combinación de Color: Texto "Combinación: Colección Rosas y Neutros", 3 opciones con selector circular (Opción 1: Blush / Avena / Salvia; Opción 2: Mostaza / Nude / Crema; Opción 3: Gris Perla / Blanco / Arena).
     * Selector de Cantidad: Control interactivo [-] 1 [+] en input-field.
     * Botones de Acción: button-primary ancho completo "Añadir al Carrito" y botón secundario "Comprar Ahora con 1 Clic".
     * Botón emergente: Enlace con ícono de regla: "Ver Guía de Suavidad, Tallas y Medidas".
     * Caja de Beneficios Rápidos (Fondo #F4ECE1, rounded-md): "✓ Envío en 24-48 hrs hábiles en Santiago", "✓ Broches plásticos libres de níquel con 2 posiciones ajustables", "✓ Garantía de suavidad o devolución gratuita".
3. Pestañas Informativas Inferiores (Tabs):
   - Tab 1 (Descripción y Capas): Explicación técnica de la doble capa de algodón orgánico frontal y microfibra absorbente con barrera impermeable oculta transpirable.
   - Tab 2 (Consejos de Lavado): Lavado en agua fría, secado a la sombra, no requiere planchado agresivo.
   - Tab 3 (Opiniones Verificadas): 3 reseñas completas con fotos subidas por usuarias reales elogiando la suavidad en el cuello del bebé.
4. Sección "Combina Perfecto Con": Fila de 3 card-product recomendados (ej. Cintillo a tono y Clip para chupete).
5. Footer institucional.
```

---

### 4. Carrito de Compras (Drawer Lateral y Página Resumen)

```text
Pantalla: Carrito de Compras de Peques & Lazos, versión desktop con vista de panel lateral deslizable (Drawer) y página de resumen. Usa el design system del proyecto.
Objetivo: Permitir a Camila revisar los productos elegidos, simular el costo exacto de despacho a su comuna y avanzar al pago sin costos ocultos.

Componentes, de arriba hacia abajo:
1. Cabecera del Carrito: Título headline-md "Tu Carrito de Compras (2 productos)" y barra de progreso: "¡Te faltan $8.020 para obtener Envío Gratis!".
2. Lista de Items en el Carrito:
   - Item 1: Foto miniatura, título "Pack 3 Baberos Bandana Nude", variante "Colores Blush / Avena", selector de cantidad [-] 1 [+], precio unitario "$14.990", subtotal "$14.990", ícono de papelera para eliminar.
   - Item 2: Foto miniatura, título "Set 3 Cintillos Nylon Ultra Soft", variante "Tono Blush y Arena", selector de cantidad [-] 1 [+], precio "$11.990", subtotal "$11.990", ícono de papelera.
3. Opción de Empaque de Regalo: Checkbox interactivo "🎁 ¿Es para regalo? (+ $2.500)", campo de texto para dedicatoria: "Escribe tu dedicatoria para la tarjeta escrita a mano...".
4. Calculadora de Despacho Transparente:
   - Desplegable de Región: "Región Metropolitana".
   - Desplegable de Comuna: "Providencia".
   - Botón: button-secondary "Calcular Despacho". Muestra: "Envío Estándar a Domicilio (24 a 48 hrs): $3.200 CLP".
5. Cupón de Descuento: Campo input-field con botón "Aplicar" (ingreso del cupón de bienvenida "HOLA15").
6. Resumen de Totales:
   - Subtotal productos: "$26.980 CLP"
   - Descuento cupón (15%): "- $4.047 CLP"
   - Costo de Despacho: "$3.200 CLP"
   - Total Final a Pagar: "$26.133 CLP"
7. Botón Principal de Conversión: button-primary ancho completo "Ir a Pagar Seguro" con íconos de Webpay Plus, Redcompra, Visa y Mastercard.
8. Aviso de Seguridad: Ícono de candado + "Pago 100% cifrado y seguro. Despachos con seguimiento en línea."
```

---

### 5. Blog ("El Rincón de Mamá")

```text
Pantalla: Blog temático de Peques & Lazos ("El Rincón de Mamá"), versión desktop. Usa el design system del proyecto.
Objetivo: Educar a las madres primerizas sobre el cuidado de la piel y accesorios, posicionar la marca orgánicamente y generar confianza.

Componentes, de arriba hacia abajo:
1. Navbar completo.
2. Encabezado del Blog: Fondo suave #F4ECE1, título headline-lg "El Rincón de Mamá", subtítulo body-md "Consejos médicos, guías de accesorios y vivencias de maternidad consciente para cuidar a quien más amas.", barra de búsqueda temática.
3. Menú de Categorías del Blog (Filtros en chips): "Todos", "Cuidados & Piel Sensible", "Guía de Accesorios & Tallas", "Maternidad Real & Consejos".
4. Artículo Destacado Principal (Hero Blog): Tarjeta horizontal en dos columnas. Imagen grande de mamá secando la barbilla de su bebé con babero bandana suave. A la derecha: tag-offer "CUIDADOS & PIEL", headline-md "¿Babeo excesivo o dentición? Cómo proteger el cuello y pecho de tu bebé de la dermatitis", body-md "El exceso de saliva en los primeros meses puede causar sarpullido doloroso si la humedad queda atrapada en la ropa. Te enseñamos cómo evitarlo con telas respirables.", text-secondary "Por Dra. Andrea Gómez, Pediatra colaboradora · Lectura de 4 min", botón button-secondary "Leer Guía Completa".
5. Grilla de Artículos Recientes (3 columnas): 6 cards de artículo, cada una con fotografía de cabecera, tag de categoría en verde salvia o blush, título en Outfit 18px, extracto de 2 líneas y enlace "Continuar leyendo →".
6. Módulo Lateral de Suscripción: Banner con fondo blanco y bordes redondeados para recibir la newsletter semanal de maternidad con 15% de regalo.
7. Footer institucional.
```

---

### 6. Artículo del Blog (Lectura individual y conversión)

```text
Pantalla: Artículo individual del blog de Peques & Lazos ("¿Por qué los cintillos de nylon son los únicos recomendados para recién nacidas?"), versión desktop. Usa el design system del proyecto.
Objetivo: Explicar las razones médicas por las que un cintillo no debe apretar las fontanelas del bebé y vincular la solución directa con el Set de Cintillos de la tienda.

Componentes, de arriba hacia abajo:
1. Navbar completo.
2. Cabecera del Artículo: Migas de pan "Blog > Guía de Accesorios > Cintillos para recién nacida", tag-offer "GUÍA DE SEGURIDAD", título headline-display "Por qué los cintillos tradicionales de elástico rígido pueden dañar la cabecita de tu recién nacida", fecha y autor text-secondary "Publicado el 12 de Octubre por Equipo de Diseño Peques & Lazos · Tiempo de lectura: 3 minutos".
3. Botones de Compartir Flotantes / Superiores: Botones circulares con íconos para compartir en WhatsApp, Facebook, Pinterest y copiar enlace directo.
4. Imagen Principal del Artículo: Fotografía macro de la suavidad del tejido de nylon estirándose sin ejercer presión sobre la mano.
5. Cuerpo del Artículo (Columna central de lectura legible, max-width 780px):
   - Tipografía body-md con espaciado generoso.
   - Párrafo 1: Anatomía de la cabecita del bebé y cuidado de las fontanelas abiertas.
   - Párrafo 2: Los peligros de los elásticos con costuras interiores duras y marcas rojas.
   - Caja de Cita Destacada (Blockquote con borde izquierdo en #B85D67): "La piel del recién nacido es hasta un 30% más delgada que la de un adulto. Cualquier accesorio debe ceder con absoluta facilidad ante el crecimiento diario."
   - Párrafo 3: Cómo identificar un tejido de nylon de grado médico extra suave.
6. Módulo de Recomendación de Producto Incrustado (Call to Action en caja #FBF9F5): Tarjeta horizontal que muestra el "Set 3 Cintillos Nylon Ultra Soft Talla Única", precio "$11.990 CLP" y botón button-primary "Ver Cintillos en la Tienda".
7. Sección de Comentarios de la Comunidad:
   - Formulario para dejar comentario: Nombre, correo y área de texto.
   - Lista de 3 comentarios de otras mamás compartiendo su experiencia.
8. Artículos Relacionados (Fila de 3 cards).
9. Footer institucional.
```

---

### Versión Mobile (Prompt universal para adaptar las 6 pantallas)

```text
Genera la versión mobile (ancho de pantalla de 375px) de esta pantalla de Peques & Lazos siguiendo rigurosamente la sección Layout de DESIGN.md:
- Navbar: Reducir a barra fija de 60px de altura con ícono hamburguesa a la izquierda para desplegar el menú, logo centrado en tamaño headline-md (20px), y accesos rápidos a buscador y carrito en la esquina derecha.
- Grilla de productos: Cambiar la grilla a 2 columnas con espacio intermedio de 12px. Las imágenes de las tarjetas mantienen proporción cuadrada 1:1, el precio permanece siempre visible y los botones táctiles tienen una altura mínima de 44px para facilitar la interacción con el pulgar.
- Filtros de tienda: Reemplazar el sidebar lateral por una fila superior de chips horizontales deslizables con scroll lateral fluido y un botón modal "Filtrar por".
- Drawer de carrito: Ocupar el 100% del ancho de la pantalla móvil facilitando la visualización del calculador de despacho por comuna y el botón de pago a pantalla completa.
- Tipografía: Aplicar los tamaños mobile definidos en DESIGN.md (headline-display a 32px, headline-lg a 24px, body-md a 15px con interlineado 1.55).
- Botón flotante: Mantener fijo en la esquina inferior derecha el botón circular verde de contacto directo a WhatsApp con badge de disponibilidad.
```
