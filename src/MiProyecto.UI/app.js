import { obtenerMenu } from '../MiProyecto.Infrastructure/menuRepository.js';
import {
  agregarAlCarrito,
  calcularEnvio,
  crearCarrito,
  formatearPrecio,
  vaciarCarrito,
} from '../MiProyecto.Application/cartService.js';

export function inicializarAplicacion() {
  const menu = obtenerMenu();
  const carrito = crearCarrito();

  const menuContainer = document.querySelector('#menu-container');
  const carritoItems = document.querySelector('#carrito-items');
  const subtotalElement = document.querySelector('#subtotal');
  const envioElement = document.querySelector('#envio');
  const totalElement = document.querySelector('#total');
  const vaciarButton = document.querySelector('#vaciar-carrito');

  function renderMenu() {
    menuContainer.innerHTML = menu
      .map(
        (pizza) => `
          <article class="menu-card">
            <div class="card-top">
              <span class="tag">${pizza.categoria}</span>
              <span class="price">${formatearPrecio(pizza.precio)}</span>
            </div>
            <h3>${pizza.nombre}</h3>
            <p>${pizza.descripcion}</p>
            <ul class="ingredient-list">
              ${pizza.ingredientes.map((ingrediente) => `<li>${ingrediente}</li>`).join('')}
            </ul>
            <button class="button primary wide" type="button" data-id="${pizza.id}">
              Añadir al carrito
            </button>
          </article>
        `,
      )
      .join('');

    menuContainer.querySelectorAll('button[data-id]').forEach((button) => {
      button.addEventListener('click', () => {
        const pizza = menu.find((item) => item.id === button.dataset.id);
        if (!pizza) {
          return;
        }

        agregarAlCarrito(carrito, pizza);
        renderCarrito();
      });
    });
  }

  function renderCarrito() {
    if (carrito.items.length === 0) {
      carritoItems.innerHTML = `<p class="empty-state">Tu carrito está vacío. Elige una pizza del menú.</p>`;
    } else {
      carritoItems.innerHTML = carrito.items
        .map(
          (item) => `
            <div class="cart-item">
              <div>
                <strong>${item.nombre}</strong>
                <span>${item.cantidad} x ${formatearPrecio(item.precio)}</span>
              </div>
              <strong>${formatearPrecio(item.total)}</strong>
            </div>
          `,
        )
        .join('');
    }

    const envio = calcularEnvio(carrito.total);
    const total = carrito.total + envio;

    subtotalElement.textContent = formatearPrecio(carrito.total);
    envioElement.textContent = formatearPrecio(envio);
    totalElement.textContent = formatearPrecio(total);
  }

  vaciarButton.addEventListener('click', () => {
    vaciarCarrito(carrito);
    renderCarrito();
  });

  renderMenu();
  renderCarrito();
}
