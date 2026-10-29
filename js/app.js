/* ==========================================================================
   Peques & Lazos — Interactive Application Logic (js/app.js)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Estado del Carrito
  let cart = [
    {
      id: 1,
      name: 'Pack 3 Baberos Bandana Nude Avena',
      price: 14990,
      qty: 1,
      variant: 'Rosa Palo / Avena / Salvia',
      img: 'img/babero-bandana.jpg'
    },
    {
      id: 2,
      name: 'Set 3 Cintillos Nylon Ultra Soft',
      price: 11990,
      qty: 1,
      variant: 'Blush / Avena / Salvia',
      img: 'img/cintillos-nylon.jpg'
    }
  ];

  let shippingCost = 3200; // Por defecto Providencia

  // Elementos DOM
  const cartDrawerOverlay = document.getElementById('cartDrawerOverlay');
  const cartBtn = document.getElementById('cartBtn');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const cartBadge = document.getElementById('cartBadge');
  const cartItemsList = document.getElementById('cartItemsList');
  const subtotalEl = document.getElementById('subtotalEl');
  const shippingEl = document.getElementById('shippingEl');
  const totalEl = document.getElementById('totalEl');
  const shippingSelect = document.getElementById('shippingSelect');
  const toastNotice = document.getElementById('toastNotice');
  const toastText = document.getElementById('toastText');
  const newsletterForm = document.getElementById('newsletterForm');

  // Notificación Toast
  function showToast(message) {
    if (!toastNotice) return;
    toastText.textContent = message;
    toastNotice.classList.add('show');
    setTimeout(() => {
      toastNotice.classList.remove('show');
    }, 3500);
  }

  // Abrir y Cerrar Carrito
  function openCart() {
    if (cartDrawerOverlay) cartDrawerOverlay.classList.add('open');
    renderCart();
  }

  function closeCart() {
    if (cartDrawerOverlay) cartDrawerOverlay.classList.remove('open');
  }

  if (cartBtn) cartBtn.addEventListener('click', openCart);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeCart);
  if (cartDrawerOverlay) {
    cartDrawerOverlay.addEventListener('click', (e) => {
      if (e.target === cartDrawerOverlay) closeCart();
    });
  }

  // Formateador de moneda CLP
  function formatMoney(amount) {
    return '$' + amount.toLocaleString('es-CL');
  }

  // Renderizar Carrito
  function renderCart() {
    if (!cartItemsList) return;

    if (cart.length === 0) {
      cartItemsList.innerHTML = `
        <div style="text-align: center; padding: 40px 0; color: #6E6660;">
          <p style="font-size: 32px; margin-bottom: 8px;">🛒</p>
          <p style="font-weight: 600;">Tu carrito está vacío</p>
          <p style="font-size: 13px; margin-top: 4px;">Agrega accesorios suaves para tu bebé</p>
        </div>
      `;
    } else {
      cartItemsList.innerHTML = cart.map(item => `
        <div class="cart-item">
          <img src="${item.img}" alt="${item.name}" class="cart-item-img">
          <div class="cart-item-info">
            <h4 class="cart-item-name">${item.name}</h4>
            <div class="cart-item-variant">${item.variant}</div>
            <div class="cart-item-row">
              <div class="qty-control">
                <button class="qty-btn" onclick="updateQty(${item.id}, -1)">-</button>
                <span class="qty-num">${item.qty}</span>
                <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
              </div>
              <span class="cart-item-price">${formatMoney(item.price * item.qty)}</span>
            </div>
          </div>
        </div>
      `).join('');
    }

    // Calcular Subtotal y Total
    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    const finalShipping = subtotal >= 35000 || subtotal === 0 ? 0 : shippingCost;
    const total = subtotal + finalShipping;

    if (subtotalEl) subtotalEl.textContent = formatMoney(subtotal);
    if (shippingEl) shippingEl.textContent = finalShipping === 0 && subtotal > 0 ? '¡GRATIS!' : formatMoney(finalShipping);
    if (totalEl) totalEl.textContent = formatMoney(total);

    // Actualizar badge
    const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);
    if (cartBadge) cartBadge.textContent = totalQty;
  }

  // Modificar cantidad
  window.updateQty = function(id, delta) {
    const item = cart.find(p => p.id === id);
    if (item) {
      item.qty += delta;
      if (item.qty <= 0) {
        cart = cart.filter(p => p.id !== id);
      }
      renderCart();
    }
  };

  // Botones de Añadir al Carrito en productos
  document.querySelectorAll('.btn-add-cart').forEach(button => {
    button.addEventListener('click', (e) => {
      const card = e.target.closest('.product-card');
      const id = parseInt(card.dataset.id, 10);
      const name = card.dataset.name;
      const price = parseInt(card.dataset.price, 10);
      const img = card.dataset.img;
      const variant = card.dataset.variant || 'Color Neutro Suave';

      const existing = cart.find(p => p.id === id);
      if (existing) {
        existing.qty += 1;
      } else {
        cart.push({ id, name, price, qty: 1, variant, img });
      }

      showToast(`✨ ¡Añadido "${name}" al carrito!`);
      openCart();
    });
  });

  // Selector de Envío por comuna
  if (shippingSelect) {
    shippingSelect.addEventListener('change', (e) => {
      shippingCost = parseInt(e.target.value, 10);
      renderCart();
      showToast('📦 Tarifa de despacho actualizada');
    });
  }

  // Formulario de Newsletter (Lead Capture)
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input');
      if (input && input.value) {
        showToast(`🎉 ¡Bienvenida a Peques & Lazos! Tu cupón es: HOLA15 (-15% OFF)`);
        input.value = '';
      }
    });
  }

  // Render inicial
  renderCart();
});
