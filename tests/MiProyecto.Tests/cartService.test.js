import test from 'node:test';
import assert from 'node:assert/strict';

import {
  agregarAlCarrito,
  calcularEnvio,
  crearCarrito,
  formatearPrecio,
  vaciarCarrito,
} from '../../src/MiProyecto.Application/cartService.js';

const pizza = {
  id: 'p1',
  nombre: 'Nebulosa de Queso',
  precio: 18900,
};

test('agrega un producto al carrito y calcula el total', () => {
  const carrito = crearCarrito();

  agregarAlCarrito(carrito, pizza, 2);

  assert.equal(carrito.items.length, 1);
  assert.equal(carrito.items[0].cantidad, 2);
  assert.equal(carrito.total, 37800);
});

test('aplica envío gratis por compras mayores a 50.000', () => {
  const carrito = crearCarrito();

  agregarAlCarrito(carrito, pizza, 3);

  assert.equal(calcularEnvio(carrito.total), 0);
});

test('formatea precio en pesos chilenos', () => {
  assert.equal(formatearPrecio(18900), '$18.900');
});

test('vacía el carrito correctamente', () => {
  const carrito = crearCarrito();
  agregarAlCarrito(carrito, pizza, 1);

  vaciarCarrito(carrito);

  assert.deepEqual(carrito.items, []);
  assert.equal(carrito.total, 0);
});
