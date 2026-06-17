const products = [
  {
    id: 1,
    name: 'Reactive Tee',
    price: 29,
    category: 'Apparel',
    description: 'Remera gráfica de algodón suave con print frontal de alto contraste y calce relajado.',
    images: ['img/1.jpg', 'img/2.jpg', 'img/grafico1.jpg'],
    colors: ['Bone', 'Black', 'Graphite'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 2,
    name: 'Component Tee',
    price: 31,
    category: 'Apparel',
    description: 'Una pieza seca, simple y visual para usar debajo de camisa abierta o como statement solo.',
    images: ['img/2.jpg', 'img/3.jpg'],
    colors: ['White', 'Ink'],
    sizes: ['S', 'M', 'L']
  },
  {
    id: 3,
    name: 'State Hoodie',
    price: 58,
    category: 'Layer',
    description: 'Capa liviana con energía de estudio: cómoda, gráfica y lista para jornadas largas.',
    images: ['img/3.jpg', 'img/4.jpg', 'img/nosotros.jpg'],
    colors: ['Black', 'Ash'],
    sizes: ['M', 'L', 'XL']
  },
  {
    id: 4,
    name: 'Reducer Tee',
    price: 28,
    category: 'Apparel',
    description: 'Tipografía compacta, base neutra y presencia precisa. Una remera para rotación diaria.',
    images: ['img/4.jpg', 'img/5.jpg'],
    colors: ['Black', 'Signal'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 5,
    name: 'Runtime Tee',
    price: 34,
    category: 'Apparel',
    description: 'Gráfica limpia y color fuerte sobre una silueta clásica, pensada para mezclar sin esfuerzo.',
    images: ['img/5.jpg', 'img/6.jpg', 'img/grafico2.jpg'],
    colors: ['Cream', 'Black'],
    sizes: ['S', 'M', 'L']
  },
  {
    id: 6,
    name: 'Cascade Tee',
    price: 32,
    category: 'Apparel',
    description: 'Print técnico con acabado editorial. Corte cómodo, cuello firme y tacto seco.',
    images: ['img/6.jpg', 'img/7.jpg'],
    colors: ['Bone', 'Carbon'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 7,
    name: 'Markup Tee',
    price: 30,
    category: 'Apparel',
    description: 'La base blanca que ordena todo: gráfica directa, contraste alto y calce cotidiano.',
    images: ['img/7.jpg', 'img/8.jpg'],
    colors: ['White', 'Black'],
    sizes: ['S', 'M', 'L']
  },
  {
    id: 8,
    name: 'Github Grid',
    price: 36,
    category: 'Limited',
    description: 'Una pieza de colección con lectura gráfica instantánea y presencia fuerte en la grilla.',
    images: ['img/8.jpg', 'img/9.jpg', 'img/grafico1.jpg'],
    colors: ['Black', 'White'],
    sizes: ['M', 'L', 'XL']
  },
  {
    id: 9,
    name: 'Framework Tee',
    price: 29,
    category: 'Apparel',
    description: 'Diseño simple, textura visual y ritmo de catálogo. Ideal para capas o uso directo.',
    images: ['img/9.jpg', 'img/10.jpg'],
    colors: ['Ink', 'Clay'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 10,
    name: 'Typed Tee',
    price: 33,
    category: 'Apparel',
    description: 'Una remera gráfica con carácter técnico y silueta tranquila para vestir todos los días.',
    images: ['img/10.jpg', 'img/11.jpg'],
    colors: ['Blue', 'Bone'],
    sizes: ['S', 'M', 'L']
  },
  {
    id: 11,
    name: 'Archive Tee',
    price: 35,
    category: 'Archive',
    description: 'Inspirada en catálogos viejos y sistemas nuevos: gráfica de archivo, construcción actual.',
    images: ['img/11.jpg', 'img/12.jpg', 'img/nosotros.jpg'],
    colors: ['Black', 'Stone'],
    sizes: ['M', 'L', 'XL']
  },
  {
    id: 12,
    name: 'Script Layer',
    price: 39,
    category: 'Limited',
    description: 'La pieza más visual del drop, con print expresivo y una lectura directa desde lejos.',
    images: ['img/12.jpg', 'img/13.jpg', 'img/grafico2.jpg'],
    colors: ['White', 'Signal'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 13,
    name: 'Query Tee',
    price: 31,
    category: 'Apparel',
    description: 'Diseño de línea clara, pensado para combinar con denim, sastrería informal o capas livianas.',
    images: ['img/13.jpg', 'img/14.jpg'],
    colors: ['Cream', 'Black'],
    sizes: ['S', 'M', 'L']
  },
  {
    id: 14,
    name: 'Press Tee',
    price: 30,
    category: 'Apparel',
    description: 'Cierre de colección con gráfica limpia y actitud seca: fácil de usar, difícil de ignorar.',
    images: ['img/14.jpg', 'img/1.jpg'],
    colors: ['White', 'Ink'],
    sizes: ['S', 'M', 'L', 'XL']
  }
];

const money = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

const productLayouts = [
  'is-large is-wide',
  '',
  'is-small is-offset',
  'is-medium',
  'is-small',
  'is-large',
  '',
  'is-small is-offset',
  'is-medium is-offset',
  'is-small',
  'is-large is-wide',
  '',
  'is-small',
  'is-medium'
];

function getBag() {
  try {
    return JSON.parse(localStorage.getItem('bag') || '[]');
  } catch (error) {
    return [];
  }
}

function setBag(bag) {
  localStorage.setItem('bag', JSON.stringify(bag));
  updateBagCount();
}

function updateBagCount() {
  const count = getBag().reduce((total, item) => total + item.quantity, 0);
  document.querySelectorAll('[data-bag-count]').forEach((el) => {
    el.textContent = `Bag (${count})`;
  });
}

function addToBag(product, options = {}) {
  const bag = getBag();
  const size = options.size || product.sizes?.[0] || '';
  const color = options.color || product.colors?.[0] || '';
  const quantity = options.quantity || 1;
  const key = `${product.id}-${size}-${color}`;
  const existing = bag.find((item) => item.key === key);

  if (existing) {
    existing.quantity += quantity;
  } else {
    bag.push({
      key,
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size,
      color,
      quantity
    });
  }

  setBag(bag);
  showToast('Added to bag');
}

function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('is-visible');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove('is-visible');
  }, 1800);
}

function productCard(product, index = 0) {
  const layoutClass = productLayouts[index % productLayouts.length];
  return `
    <article class="product-card ${layoutClass}" data-reveal>
      <a href="product.html?id=${product.id}" class="product-card__media">
        <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
        <span class="product-card__badge">${product.category}</span>
        <span class="product-card__quick">View</span>
      </a>
      <div class="product-card__info">
        <h3 data-category="${product.category}">${product.name}</h3>
        <p>${money.format(product.price)}</p>
      </div>
    </article>
  `;
}

function renderProductGrid() {
  const grid = document.querySelector('[data-product-grid]');
  if (!grid) return;
  grid.innerHTML = products.map((product, index) => productCard(product, index)).join('');
}

function getProductFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get('id') || 1);
  return products.find((product) => product.id === id) || products[0];
}

function optionButton(value, selected) {
  return `<button type="button" class="${selected ? 'is-selected' : ''}" data-option-value="${value}">${value}</button>`;
}

function bindOptionGroup(group, onChange) {
  group.querySelectorAll('[data-option-value]').forEach((button) => {
    button.addEventListener('click', () => {
      group.querySelectorAll('button').forEach((item) => item.classList.remove('is-selected'));
      button.classList.add('is-selected');
      onChange(button.dataset.optionValue);
    });
  });
}

function renderProductPage() {
  const page = document.querySelector('[data-product-page]');
  if (!page) return;

  const product = getProductFromUrl();
  let selectedSize = product.sizes?.[0] || '';
  let selectedColor = product.colors?.[0] || '';
  let quantity = 1;

  const gallery = page.querySelector('[data-product-gallery]');
  const colorOptions = page.querySelector('[data-color-options]');
  const sizeOptions = page.querySelector('[data-size-options]');
  const qty = page.querySelector('[data-qty]');

  document.title = `${product.name} | FrontEnd Store`;
  gallery.innerHTML = product.images.map((image) => `
    <img src="${image}" alt="${product.name}" data-reveal>
  `).join('');

  page.querySelector('[data-product-title]').textContent = product.name;
  page.querySelector('[data-product-price]').textContent = money.format(product.price);
  page.querySelector('[data-product-description]').textContent = product.description;
  page.querySelector('[data-product-category]').textContent = product.category;

  colorOptions.insertAdjacentHTML('beforeend', product.colors.map((color) => optionButton(color, color === selectedColor)).join(''));
  sizeOptions.insertAdjacentHTML('beforeend', product.sizes.map((size) => optionButton(size, size === selectedSize)).join(''));

  bindOptionGroup(colorOptions, (value) => { selectedColor = value; });
  bindOptionGroup(sizeOptions, (value) => { selectedSize = value; });

  page.querySelector('[data-qty-minus]').addEventListener('click', () => {
    quantity = Math.max(1, quantity - 1);
    qty.textContent = quantity;
  });

  page.querySelector('[data-qty-plus]').addEventListener('click', () => {
    quantity += 1;
    qty.textContent = quantity;
  });

  page.querySelector('[data-add-to-bag]').addEventListener('click', () => {
    addToBag(product, { size: selectedSize, color: selectedColor, quantity });
  });

  const related = document.querySelector('[data-related-products]');
  if (related) {
    related.innerHTML = products
      .filter((item) => item.id !== product.id)
      .slice(0, 4)
      .map((item, index) => productCard(item, index))
      .join('');
  }
}

function updateBagItem(key, quantity) {
  const nextBag = getBag()
    .map((item) => item.key === key ? { ...item, quantity } : item)
    .filter((item) => item.quantity > 0);
  setBag(nextBag);
  renderBagPage();
}

function renderBagPage() {
  const list = document.querySelector('[data-bag-list]');
  const subtotalEl = document.querySelector('[data-bag-subtotal]');
  if (!list) return;

  const bag = getBag();

  if (!bag.length) {
    list.innerHTML = `
      <div class="empty-bag">
        <h2>Not even one thing?</h2>
        <p>Tu carrito está vacío. Volvé al shop y agregá algo con actitud.</p>
        <a href="index.html#shop">Return to shop</a>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = money.format(0);
    return;
  }

  list.innerHTML = bag.map((item) => `
    <article class="bag-item">
      <img src="${item.image}" alt="${item.name}">
      <div>
        <h3>${item.name}</h3>
        <p>${item.color} / ${item.size}</p>
        <p>${money.format(item.price)}</p>
      </div>
      <div class="bag-item__actions">
        <div class="bag-item__qty" aria-label="Cantidad de ${item.name}">
          <button type="button" data-qty-dec="${item.key}" aria-label="Restar">-</button>
          <strong>${item.quantity}</strong>
          <button type="button" data-qty-inc="${item.key}" aria-label="Sumar">+</button>
        </div>
        <button type="button" data-remove-item="${item.key}">Remove</button>
      </div>
    </article>
  `).join('');

  const subtotal = bag.reduce((total, item) => total + item.price * item.quantity, 0);
  if (subtotalEl) subtotalEl.textContent = money.format(subtotal);

  list.querySelectorAll('[data-remove-item]').forEach((button) => {
    button.addEventListener('click', () => updateBagItem(button.dataset.removeItem, 0));
  });

  list.querySelectorAll('[data-qty-dec]').forEach((button) => {
    button.addEventListener('click', () => {
      const item = getBag().find((bagItem) => bagItem.key === button.dataset.qtyDec);
      if (item) updateBagItem(item.key, item.quantity - 1);
    });
  });

  list.querySelectorAll('[data-qty-inc]').forEach((button) => {
    button.addEventListener('click', () => {
      const item = getBag().find((bagItem) => bagItem.key === button.dataset.qtyInc);
      if (item) updateBagItem(item.key, item.quantity + 1);
    });
  });
}

function renderCheckoutPage() {
  const page = document.querySelector('[data-checkout-page]');
  if (!page) return;

  const itemsEl = page.querySelector('[data-checkout-items]');
  const subtotalEl = page.querySelector('[data-checkout-subtotal]');
  const shippingEl = page.querySelector('[data-checkout-shipping]');
  const totalEl = page.querySelector('[data-checkout-total]');
  const form = page.querySelector('[data-checkout-form]');
  const bag = getBag();

  if (!bag.length) {
    itemsEl.innerHTML = `
      <div class="empty-bag">
        <h2>Bag first.</h2>
        <p>Tu checkout esta listo, pero el carrito todavia esta vacio.</p>
        <a href="index.html#shop">Return to shop</a>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = money.format(0);
    if (shippingEl) shippingEl.textContent = money.format(0);
    if (totalEl) totalEl.textContent = money.format(0);
    if (form) form.querySelector('button[type="submit"]').disabled = true;
    return;
  }

  itemsEl.innerHTML = bag.map((item) => `
    <article class="checkout-summary-item">
      <img src="${item.image}" alt="${item.name}">
      <div>
        <h3>${item.name}</h3>
        <p>${item.color} / ${item.size} / Qty ${item.quantity}</p>
      </div>
      <strong>${money.format(item.price * item.quantity)}</strong>
    </article>
  `).join('');

  const subtotal = bag.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = subtotal >= 120 ? 0 : 12;
  const total = subtotal + shipping;

  if (subtotalEl) subtotalEl.textContent = money.format(subtotal);
  if (shippingEl) shippingEl.textContent = shipping ? money.format(shipping) : 'Free';
  if (totalEl) totalEl.textContent = money.format(total);

  if (!form) return;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const orderId = `FS-${Date.now().toString().slice(-6)}`;
    setBag([]);
    page.innerHTML = `
      <section class="checkout-confirmation" data-reveal>
        <p class="eyebrow">Order ${orderId}</p>
        <h2>Confirmed.</h2>
        <p>Pedido demo generado correctamente. No se envio informacion de pago; el carrito local fue vaciado.</p>
        <a class="text-button" href="index.html#shop">Back to shop</a>
      </section>
    `;
    updateBagCount();
    showToast('Order placed');
    initReveal();
  }, { once: true });
}

function initMenu() {
  const menu = document.querySelector('[data-menu]');
  const open = document.querySelector('[data-menu-open]');
  const close = document.querySelector('[data-menu-close]');
  if (!menu || !open || !close) return;

  const closeMenu = () => {
    menu.classList.remove('is-open');
    menu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  open.addEventListener('click', () => {
    menu.classList.add('is-open');
    menu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });

  close.addEventListener('click', closeMenu);
  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}

function initReveal() {
  const revealItems = document.querySelectorAll('[data-reveal], .product-card');
  if (!revealItems.length) return;

  if (!('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const index = [...revealItems].indexOf(entry.target);
      entry.target.style.transitionDelay = `${Math.min(index * 35, 280)}ms`;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  revealItems.forEach((item) => revealObserver.observe(item));
}

function initLoader() {
  const loader = document.querySelector('[data-loader]');
  if (!loader) return;
  const counter = loader.querySelector('span');
  let value = 0;
  const interval = window.setInterval(() => {
    value += Math.floor(Math.random() * 17) + 7;

    if (value >= 100) {
      value = 100;
      window.clearInterval(interval);
      window.setTimeout(() => {
        loader.classList.add('is-hidden');
        document.body.classList.add('is-loaded');
      }, 250);
    }

    if (counter) {
      counter.textContent = String(value).padStart(3, '0');
    }
  }, 45);
}

function initHeaderScroll() {
  const header = document.querySelector('[data-header]');
  if (!header) return;

  const updateHeader = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 24);
  };

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();
}

function initCursor() {
  if (!window.matchMedia('(pointer: fine)').matches) return;

  const cursor = document.createElement('div');
  cursor.className = 'cursor-dot';
  document.body.appendChild(cursor);

  window.addEventListener('mousemove', (event) => {
    cursor.animate({
      transform: `translate(${event.clientX}px, ${event.clientY}px)`
    }, {
      duration: 350,
      fill: 'forwards',
      easing: 'cubic-bezier(.16, 1, .3, 1)'
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderProductGrid();
  renderProductPage();
  renderBagPage();
  renderCheckoutPage();
  initMenu();
  initHeaderScroll();
  updateBagCount();
  initReveal();
  initLoader();
  initCursor();
});
