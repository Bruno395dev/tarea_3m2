// Catálogo de la tienda
export const productos = [
  {
    id: 1,
    nombre: 'MacBook Pro 14"',
    categoria: 'notebooks',
    precio: 89900,
    imagen: '/img/macbook-pro-14.webp',
    destacado: true,
    stock: 5,
    descripcion:
      'Pantalla Liquid Retina XDR de 14 pulgadas, 16 GB de memoria unificada y 512 GB de SSD. Hasta 17 horas de autonomía.',
  },
  {
    id: 2,
    nombre: 'Dell XPS 13',
    categoria: 'notebooks',
    precio: 67500,
    imagen: '/img/dell-xps-13.webp',
    destacado: false,
    stock: 8,
    descripcion:
      'Ultrabook de 13,4 pulgadas con marcos InfinityEdge, procesador Intel Core i7 y 512 GB de SSD.',
  },
  {
    id: 3,
    nombre: 'iPhone 13 Pro',
    categoria: 'celulares',
    precio: 49900,
    imagen: '/img/iphone-13-pro.webp',
    destacado: true,
    stock: 11,
    descripcion:
      'Pantalla Super Retina XDR de 6,1 pulgadas con ProMotion, sistema de tres cámaras y 128 GB de almacenamiento.',
  },
  {
    id: 4,
    nombre: 'Samsung Galaxy S8',
    categoria: 'celulares',
    precio: 18900,
    imagen: '/img/galaxy-s8.webp',
    destacado: false,
    stock: 14,
    descripcion:
      'Pantalla infinita de 5,8 pulgadas, 64 GB de almacenamiento y carga rápida inalámbrica.',
  },
  {
    id: 5,
    nombre: 'iPad Mini 2021',
    categoria: 'tablets',
    precio: 25900,
    imagen: '/img/ipad-mini.webp',
    destacado: false,
    stock: 9,
    descripcion:
      'Pantalla Liquid Retina de 8,3 pulgadas, chip A15 Bionic y compatibilidad con Apple Pencil de segunda generación.',
  },
  {
    id: 6,
    nombre: 'Galaxy Tab S8+',
    categoria: 'tablets',
    precio: 32900,
    imagen: '/img/galaxy-tab-s8.webp',
    destacado: false,
    stock: 6,
    descripcion:
      'Pantalla AMOLED de 12,4 pulgadas a 120 Hz, S Pen incluida y batería de 10.090 mAh.',
  },
  {
    id: 7,
    nombre: 'AirPods Max',
    categoria: 'audio',
    precio: 27500,
    imagen: '/img/airpods-max.webp',
    destacado: true,
    stock: 10,
    descripcion:
      'Auriculares over-ear con cancelación activa de ruido, audio espacial y hasta 20 horas de batería.',
  },
  {
    id: 8,
    nombre: 'Beats Flex',
    categoria: 'audio',
    precio: 3290,
    imagen: '/img/beats-flex.webp',
    destacado: false,
    stock: 22,
    descripcion:
      'Auriculares inalámbricos con chip Apple W1, 12 horas de reproducción y carga por USB-C.',
  },
]

// el valor va en la URL, la etiqueta es lo que se ve
export const categorias = [
  { valor: 'todas', etiqueta: 'Todas' },
  { valor: 'notebooks', etiqueta: 'Notebooks' },
  { valor: 'celulares', etiqueta: 'Celulares' },
  { valor: 'tablets', etiqueta: 'Tablets' },
  { valor: 'audio', etiqueta: 'Audio' },
]

export function etiquetaCategoria(valor) {
  const encontrada = categorias.find((item) => item.valor === valor)
  return encontrada ? encontrada.etiqueta : valor
}

export function formatearPrecio(precio) {
  return '$ ' + precio.toLocaleString('es-AR')
}
