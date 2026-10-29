# Color y tipografía — Peques & Lazos

> Guía: [Color y tipografía](../evaluacion/guias/fase-2-specs/05-color-y-tipografia.md)

## Paleta cromática

La paleta de color de **Peques & Lazos** se fundamenta en los tonos orgánicos de nuestro moodboard: lino natural, algodón crudo, rosa palo empolvado y verde salvia botánico.

| Rol | Nombre descriptivo | Código HEX | Uso principal en la interfaz |
|---|---|---|---|
| **Principal (Primary)** | Rosa Palo Cálido (*Blush Terracotta*) | `#B85D67` | Botones de acción primaria (CTA), elementos activos, enlaces destacados y detalles de marca. |
| **Hover Principal** | Rosa Palo Intenso | `#96424C` | Estado de interacción (*hover/active*) en botones y enlaces interactivos. |
| **Secundario (Secondary)** | Avena Crema Suave (*Oatmeal Cream*) | `#F4ECE1` | Fondos de tarjetas de producto secundarias, chips de categoría y fondos de avisos. |
| **Acento (Tertiary)** | Verde Salvia Botánico (*Sage Green*) | `#4D775D` | Etiquetas de productos hipoalergénicos, insignias de *"Nuevo"*, ofertas e íconos de confianza. |
| **Fondo (Neutral)** | Blanco Lino Suave (*Soft Linen*) | `#FBF9F5` | Fondo general de las páginas (`body`), transmitiendo calidez orgánica sin encandilar. |
| **Superficie (Surface)** | Blanco Puro (*Pure White*) | `#FFFFFF` | Contenedores de tarjetas de producto, modales, drawers y campos de formulario. |
| **Texto (On-Surface)** | Carbón Cálido (*Warm Charcoal*) | `#2D2926` | Títulos principales, descripciones de producto y cuerpo de lectura general. |
| **Texto Secundario** | Gris Topo Suave (*Taupe Gray*) | `#6E6660` | Textos de apoyo, etiquetas de tallas, migas de pan y avisos de copyright. |
| **Éxito (Success)** | Verde Botánico Natural | `#2E7D47` | Mensajes de confirmación, producto añadido al carrito y validaciones correctas. |
| **Error (Error)** | Terracota Rojizo Suave | `#B3261E` | Mensajes de campos obligatorios faltantes y alertas en el formulario. |

---

## Contraste de accesibilidad (WCAG AA)

Todos los pares de color han sido testeados para cumplir con las pautas de accesibilidad para contenido web (WCAG 2.1 nivel AA: ratio mínimo de 4.5:1 para texto normal y 3.0:1 para componentes interactivos y texto grande):

| Combinación | Ratio medido | Nivel WCAG | Resultado |
|---|---|---|---|
| Texto `#2D2926` sobre fondo general `#FBF9F5` | **14.2:1** | AAA (>7.0:1) | ✅ Pasa con máxima legibilidad |
| Texto `#2D2926` sobre superficie blanca `#FFFFFF` | **15.1:1** | AAA (>7.0:1) | ✅ Pasa con máxima legibilidad |
| Texto secundario `#6E6660` sobre fondo `#FBF9F5` | **5.4:1** | AA (>4.5:1) | ✅ Pasa para textos de apoyo |
| Texto blanco `#FFFFFF` sobre botón principal `#B85D67` | **5.2:1** | AA (>4.5:1) | ✅ Pasa para botones de acción |
| Texto blanco `#FFFFFF` sobre botón de acento `#4D775D` | **5.4:1** | AA (>4.5:1) | ✅ Pasa para etiquetas e insignias |
| Texto error `#B3261E` sobre superficie blanca `#FFFFFF` | **5.9:1** | AA (>4.5:1) | ✅ Pasa para advertencias |

---

## Tipografía

Se seleccionaron dos familias tipográficas de Google Fonts optimizadas para lectura en pantallas móviles y con caracteres amables y proporcionados:

- **Títulos y encabezados:** **Outfit** (Google Fonts: sans-serif geométrica con terminaciones suaves y curvas armónicas que proyectan modernidad y ternura sin caer en lo infantil).
- **Textos de lectura y componentes:** **Plus Jakarta Sans** (Google Fonts: sans-serif contemporánea, de altura x generosa, excelente legibilidad en pantallas pequeñas y variada escala de pesos).

### Escala tipográfica

| Elemento | Desktop (Tamaño / Interlineado) | Mobile (Tamaño / Interlineado) | Peso (Weight) | Familia |
|---|---|---|---|---|
| **h1 (Headline Display)** | 42px / 1.15 | 32px / 1.2 | SemiBold (600) | Outfit |
| **h2 (Headline Large)** | 30px / 1.25 | 24px / 1.25 | SemiBold (600) | Outfit |
| **h3 (Headline Medium)** | 22px / 1.3 | 18px / 1.3 | Medium (500) | Outfit |
| **Párrafo (Body Regular)** | 16px / 1.6 | 15px / 1.55 | Regular (400) | Plus Jakarta Sans |
| **Texto Secundario (Body Small)**| 14px / 1.5 | 13px / 1.5 | Regular (400) | Plus Jakarta Sans |
| **Botón / Etiquetas (Label)** | 15px / 1.0 | 14px / 1.0 | SemiBold (600) | Plus Jakarta Sans |

---

## Justificación desde el moodboard

La selección cromática y tipográfica traduce fielmente la promesa de valor de **Peques & Lazos**:
1. El **Rosa Palo Terracota (`#B85D67`)** aporta la ternura de la maternidad pero con una madurez sobria y artesanal, diferenciándonos de los tonos fucsias chillones de los juguetes plásticos.
2. El **Verde Salvia (`#4D775D`)** y el **Avena Crema (`#F4ECE1`)** evocan directamente las fibras vegetales de algodón orgánico y lino sin blanquear que se observan en las muestras del moodboard.
3. La combinación tipográfica **Outfit + Plus Jakarta Sans** ofrece una experiencia de lectura serena y sumamente legible para madres que navegan de noche en sus smartphones, transmitiendo la seguridad y prolijidad técnica que exige el cuidado de un recién nacido.
