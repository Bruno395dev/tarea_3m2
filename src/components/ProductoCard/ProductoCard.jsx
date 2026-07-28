import { Link } from 'react-router-dom'
import { etiquetaCategoria, formatearPrecio } from '../../data/productos.js'
import './ProductoCard.css'

// Tarjeta de producto, se usa en el inicio y en el catálogo
function ProductoCard({ producto }) {
  return (
    <li className="producto-card">
      <div className="producto-foto">
        <img src={producto.imagen} alt={producto.nombre} loading="lazy" />
      </div>

      <span className="producto-categoria">{etiquetaCategoria(producto.categoria)}</span>
      <h3 className="producto-nombre">{producto.nombre}</h3>
      <span className="producto-precio">{formatearPrecio(producto.precio)}</span>

      {/* Enlace a la ruta dinámica /producto/:id */}
      <Link className="btn btn-lleno" to={`/producto/${producto.id}`}>
        Ver detalle
      </Link>
    </li>
  )
}

export default ProductoCard
