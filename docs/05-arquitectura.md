# Arquitectura de la información — Peques & Lazos

> Guía: [Arquitectura de la información](../evaluacion/guias/fase-1-requerimientos/05-arquitectura.md)

## Mapa de sitio

A continuación se presenta el árbol de navegación completo del sitio web, integrando la Landing page, la Tienda online, el Blog temático y las páginas informativas y legales obligatorias:

```text
Inicio (Landing Page)
├── Tienda (Catálogo General)
│   ├── Categoría: Baberos Bandana & Impermeables
│   │   └── Ficha de Producto (ej. Pack 3 Baberos Bandana Algodón Orgánico)
│   ├── Categoría: Lazos, Moños & Cintillos
│   │   └── Ficha de Producto (ej. Set 3 Moños Nylon Ultra Suaves)
│   ├── Categoría: Porta-chupetes & Mordedores
│   │   └── Ficha de Producto (ej. Clip Chupetero Madera Haya y Silicona)
│   ├── Categoría: Packs de Regalo & Baby Shower
│   │   └── Ficha de Producto (ej. Box Bienvenida Dulce Espera)
│   ├── Carrito de Compras (Drawer lateral y Página de resumen)
│   └── Checkout (Pantalla de confirmación y datos de despacho prototipo)
├── Blog (El Rincón de Mamá)
│   ├── Categoría: Cuidados & Piel Sensible
│   │   └── Artículo: Cómo prevenir la dermatitis por exceso de saliva en la dentición
│   ├── Categoría: Guía de Accesorios & Tallas
│   │   └── Artículo: Por qué elegir cintillos de nylon que no marcan la cabeza del recién nacido
│   └── Categoría: Maternidad Real & Consejos
│       └── Artículo: Qué llevar en la maleta del parto: accesorios esenciales para las primeras 48 horas
├── Sobre Nosotras (Nuestra Historia & Compromiso Hipoalergénico)
├── Contacto & Asesoría Personalizada (Formulario y enlace directo a WhatsApp)
├── Preguntas Frecuentes (FAQ: despachos, cuidados de lavado, cambios)
├── Términos y Condiciones
├── Política de Privacidad
└── Página de Error 404 (Personalizada con búsqueda y recomendados)
```

---

## User flows

> Guía: [User flow](../evaluacion/guias/fase-1-requerimientos/06-user-flow.md)

### Flujo 1: Flujo de compra (Camila Morales — Búsqueda de solución para dentición)

Camila está amamantando a Sofía en la noche, ve un anuncio en Instagram sobre baberos bandana hipoalergénicos y entra al sitio web desde su celular.

```text
[Instagram Ad / Story]
       ↓ (Clic en enlace promocional)
[Landing Page — Hero]
       ↓ (Ve propuesta de valor "100% Algodón hipoalergénico sin tintes tóxicos")
[Botón CTA: "Ver Colección Baberos Bandana"]
       ↓
[Tienda / Catálogo filtrado por "Baberos"]
       ↓ (Aplica filtro: "Algodón Orgánico" + edad "3-12 meses")
[Grid de Productos] → Selecciona "Pack 3 Baberos Bandana Nude Avena"
       ↓
[Ficha de Producto]
       ├── Revisa fotos de la textura y capas impermeables ocultas
       ├── Abre modal "Guía de Suavidad y Medidas" (verifica que no roza el cuello)
       ├── Selecciona variante de colores ("Tonalidades Neutras y Rosa")
       └── Clic en botón: [Añadir al Carrito]
       ↓
[Drawer lateral del Carrito]
       ├── Revisa productos añadidos y subtotal
       ├── Ingresa comuna ("Providencia") en el calculador de envíos preliminar
       └── Clic en botón: [Finalizar Compra / Ver Resumen]
       ↓
[Pantalla de Resumen de Compra]
```

---

### Flujo 2: Flujo de contenido a conversión (Ignacio Valenzuela — Asesoría de regalo)

Ignacio busca en Google cómo elegir un regalo útil para una sobrina recién nacida y aterriza en un artículo del blog de Peques & Lazos.

```text
[Búsqueda en Google: "qué regalar en un baby shower que sea útil y lindo"]
       ↓ (Clic en resultado orgánico)
[Blog / Artículo: "Guía de Accesorios Esenciales para Recién Nacidos"]
       ↓
[Lectura del Artículo]
       ├── Aprende que los elásticos comunes aprietan y que los cintillos de nylon son seguros
       ├── Visualiza recomendación incrustada: "Box Bienvenida Dulce Espera (0-3 meses)"
       └── Clic en botón incrustado: [Ver Box de Regalo]
       ↓
[Ficha de Producto: Box Bienvenida]
       ├── Revisa contenido: 1 babero bandana, 2 cintillos de nylon nude y 1 chupetero de madera
       ├── Marca la casilla: [x] "Incluir empaque de regalo y tarjeta de dedicatoria"
       ├── Escribe mensaje: "¡Bienvenida al mundo, Emilia! Con mucho amor de tu tío Ignacio."
       └── Clic en botón: [Agregar al Carrito]
       ↓
[Carrito de Compras con producto y opción de regalo confirmada]
```

---

## Categorías

> Guía: [Categorías de productos y temas del blog](../evaluacion/guias/fase-1-requerimientos/07-categorias.md)

### Categorías de productos de la tienda

| Categoría | Productos incluidos | Por qué se organiza así para la usuaria |
|---|---|---|
| **Baberos Bandana & Impermeables** | - Pack x3 Baberos Bandana Algodón Orgánico Nude<br>- Babero Bandana Impermeable Doble Capa Salvia<br>- Babero Colector de Silicona Grado Alimentario | Responde a la búsqueda urgente de mamás con bebés en etapa de dentición que necesitan mantener seco el pecho de su hijo sin arruinar su atuendo. |
| **Lazos, Moños & Cintillos** | - Set x3 Cintillos Nylon Ultra Soft Recién Nacida<br>- Maxi Moño de Lino con Pinza Cocodrilo Antideslizante<br>- Turbante Elástico Acanalado Dulce Blush | Facilita encontrar accesorios para niñas clasificados por el tipo de sujeción (banda elástica que no aprieta o pinza para más cabello). |
| **Porta-chupetes & Mordedores** | - Clip Porta-chupete Silicona Libre de BPA & Madera de Haya<br>- Mordedor Sensorial Orejitas de Conejo en Algodón<br>- Sujetador de Juguetes Anticaídas para Coche | Agrupa los artículos de seguridad y alivio bucal que complementan el uso diario del chupete evitando caídas al suelo. |
| **Packs de Regalo & Baby Shower** | - Box Bienvenida Recién Nacida (Babero + 2 Cintillos + Clip)<br>- Kit Esencial Dentición Feliz (2 Baberos + Mordedor Madera)<br>- Set Dúo Hermanitas (Cintillo bebé + Moño niña grande) | Diseñada pensando en familiares (como Ignacio) que buscan una solución empaquetada lista para obsequiar sin complicarse. |

---

### Categorías del blog ("El Rincón de Mamá")

| Categoría | Idea de artículo | Necesidad o motivación de la proto-persona | Producto relacionado |
|---|---|---|---|
| **Cuidados & Piel Sensible** | *Cómo prevenir la dermatitis por babeo y mantener seco el pecho del bebé durante la dentición.* | Resolver la angustia de Camila ante las rojeces e irritaciones causadas por la humedad constante en la piel de su bebé. | Pack x3 Baberos Bandana Algodón Orgánico con capa impermeable respirable. |
| **Guía de Accesorios & Tallas** | *¿Por qué los cintillos de nylon son los únicos recomendados para la cabecita de un recién nacido?* | Asegurar a las madres que los moños no ejercerán presión sobre las fontanelas ni dejarán marcas rojas en la frente. | Set x3 Cintillos Nylon Ultra Soft Talla Única ("Crece con ella"). |
| **Maternidad Real & Consejos** | *Qué empacar en la maleta de la clínica: los 5 accesorios que realmente vas a usar las primeras 48 horas.* | Ayudar a mamás primerizas y compradores de regalos a priorizar lo verdaderamente práctico y seguro para los primeros días. | Box Bienvenida Dulce Espera con tarjeta dedicatoria personalizada. |
