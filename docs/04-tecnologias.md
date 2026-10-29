# Tecnologías del proyecto — Peques & Lazos

> Guía: [Tecnologías del proyecto](../evaluacion/guias/fase-1-requerimientos/04-tecnologias.md)

## Stack

| Área | Herramienta | Para qué la uso |
|---|---|---|
| **Construcción** | HTML5 semántico + CSS3 puro | Creación de la estructura accesible y diseño visual responsivo sin dependencia de frameworks ni librerías pesadas, garantizando una carga ultra rápida en celulares. |
| **Versionado** | Git y GitHub | Control de versiones distribuido del repositorio, respaldo de cambios mediante commits descriptivos y trabajo colaborativo. |
| **Publicación** | GitHub Pages | Despliegue continuo y hosting gratuito del sitio web estático para su visualización y evaluación en vivo en la siguiente etapa. |
| **Diseño y Wireframes** | Whimsical | Creación colaborativa del moodboard visual, calco de componentes UI y prototipado de baja fidelidad (wireframes) de las 6 pantallas del flujo. |
| **Prototipado Referencial** | Google Stitch | Generación rápida de pantallas de alta fidelidad basadas en el design system importado directamente desde el archivo `DESIGN.md`. |
| **Asistente de IA** | Antigravity IDE (Gemini 3.8 Flash) | Asistencia en la estructuración de especificaciones técnicas (Spec-Driven Design), optimización de accesibilidad WCAG y generación de prompts de diseño. |
| **Editor de Código** | Antigravity IDE / VS Code | Edición de archivos Markdown, diseño de arquitectura de información y posterior codificación web. |

## Qué es funcional y qué es prototipo

| Funcionalidad | Estado en esta versión | Justificación |
|---|---|---|
| **Navegación entre páginas y menú responsive** | Funcional | Permite recorrer todo el mapa de sitio (Landing, Tienda, Ficha de Producto, Carrito, Blog, Artículo) tanto en pantallas desktop como móviles. |
| **Filtros visuales y selección de variantes** | Funcional en interfaz | El usuario puede seleccionar colores, packs de baberos y filtrar visualmente las categorías disponibles. |
| **Añadir productos al carrito y Drawer lateral** | Funcional visualmente | Simula la adición del producto, conteo de unidades en el badge del navbar y actualización del subtotal de compra. |
| **Formulario de captación de leads y comentarios** | Prototipo visual | Los campos cuentan con validación HTML5 básica, pero no envían datos a un servidor backend en esta etapa académica. |
| **Pasarela de pago bancaria (Webpay / Tarjetas)** | Prototipo visual | Se muestra la pantalla de resumen y selección de método de pago, pero no procesa transacciones bancarias reales por motivos de seguridad y alcance del curso. |
| **Cálculo de despacho por comuna** | Prototipo interactivo | Presenta un selector de comunas que simula tarifas preconfiguradas para mostrar la experiencia de usuario sin recargos sorpresa. |

## Integraciones para una versión real

En una puesta en producción real para el mercado chileno, el sitio se integraría con los siguientes servicios externos:

1. **Pasarela de Pagos (Webpay Plus / Mercado Pago Chile):** Procesamiento seguro de pagos con tarjetas de débito (Redcompra), crédito en cuotas sin interés y transferencias electrónicas instantáneas.
2. **Plataforma Multicourier (Envíame / Shipit):** Conexión automática con Chilexpress, Starken, Blue Express y CorreosChile para cotización de tarifas en tiempo real y generación de etiquetas de envío.
3. **WhatsApp Business API:** Botón flotante vinculado a un bot de bienvenida que canaliza dudas frecuentes de tallas, cuidados de telas y confirmación de transferencias bancarias.
4. **Email Marketing (Klaviyo / Mailchimp):** Automatización del envío del cupón de bienvenida (15% off) al registrarse en la landing y secuencias de carrito abandonado.
5. **Analítica Web (Google Analytics 4 y Meta Pixel):** Medición de eventos de conversión (visita a landing, clic en agregar al carrito, inicio de checkout) para optimización de campañas en Instagram Ads.

## Restricciones

- **Plazo de entrega:** Entrega estructurada en 3 fases académicas (Fase 1: Requerimientos, Fase 2: Specs, Fase 3: Prototipo en Stitch).
- **Identidad de marca y tono:** Paleta suave y cálida que transmita calma, pureza y ternura (blush pink, crema, salvia y carbón suave), evitando contrastes estridentes que desentonen con el rubro infantil.
- **Dispositivos y accesibilidad:** Diseño enfocado prioritariamente en dispositivos móviles (pantallas desde 375px) con botones táctiles de mínimo 44x44px, tipografías legibles y contraste que cumpla el estándar WCAG AA (>4.5:1).
- **Rendimiento:** Peso optimizado de imágenes para tiempos de carga inferiores a 2 segundos en redes móviles 4G.
