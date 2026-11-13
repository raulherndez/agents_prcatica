export function crearCarrito() {
  return {
    items: [],
    total: 0,
  };
}

export function agregarAlCarrito(carrito, pizza, cantidad = 1) {
  const itemExistente = carrito.items.find((item) => item.id === pizza.id);

  if (itemExistente) {
    itemExistente.cantidad += cantidad;
    itemExistente.total = itemExistente.cantidad * pizza.precio;
  } else {
    carrito.items.push({
      id: pizza.id,
      nombre: pizza.nombre,
      precio: pizza.precio,
      cantidad,
      total: pizza.precio * cantidad,
    });
  }

  carrito.total = carrito.items.reduce((sum, item) => sum + item.total, 0);
  return carrito;
}

export function formatearPrecio(valor) {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0,
  }).format(valor);
}

export function calcularEnvio(total) {
  if (total === 0) {
    return 0;
  }

  return total >= 50000 ? 0 : 3000;
}

export function vaciarCarrito(carrito) {
  carrito.items = [];
  carrito.total = 0;
  return carrito;
}
