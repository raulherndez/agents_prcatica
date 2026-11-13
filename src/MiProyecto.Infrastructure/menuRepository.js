import { crearPizza } from '../MiProyecto.Domain/pizza.js';

const menuBase = [
  {
    id: 'p1',
    nombre: 'Nebulosa de Queso',
    descripcion: 'Masa fina, mozzarella premium y salsa de tomate de huerto lunar.',
    precio: 18900,
    ingredientes: ['mozzarella', 'albahaca', 'salsa de tomate'],
    categoria: 'Clásica',
  },
  {
    id: 'p2',
    nombre: 'Vía Láctea Pepperoni',
    descripcion: 'Pepperoni curado, chile y aceitunas negras con intensidad cósmica.',
    precio: 21900,
    ingredientes: ['pepperoni', 'aceitunas', 'chile'],
    categoria: 'Especial',
  },
  {
    id: 'p3',
    nombre: 'Marte Veggie',
    descripcion: 'Vegetales estelares con queso vegano y toque de romero.',
    precio: 20800,
    ingredientes: ['pimiento', 'cebolla', 'tomate', 'romero'],
    categoria: 'Vegetariana',
  },
  {
    id: 'p4',
    nombre: 'Supernova Carnívora',
    descripcion: 'Pollo, tocino ahumado, salami y queso fundido en cada porción.',
    precio: 24900,
    ingredientes: ['pollo', 'tocino', 'salami', 'queso'],
    categoria: 'Rica',
  },
];

export function obtenerMenu() {
  return menuBase.map((pizza) => crearPizza(pizza));
}
