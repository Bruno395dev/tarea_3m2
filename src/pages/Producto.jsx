import { Link, useNavigate, useParams } from 'react-router-dom'
import { productos, etiquetaCategoria, formatearPrecio } from '../data/productos.js'

function Producto() {
  // useParams lee el :id que viene en la URL (siempre llega como texto)
  const { id } = useParams()
  const navigate = useNavigate()

  const producto = productos.find((item) => item.id === Number(id))

  if (!producto) {
    return (
      <section className="pagina">
        <h1 className="titulo">Producto no disponible</h1>
        <p className="texto">
          No encontramos el producto <strong>#{id}</strong>. Puede que lo hayamos
          dado de baja del catálogo.
        </p>
        <Link className="btn btn-lleno" to="/productos">
          Volver al catálogo
        </Link>
      </section>
    )
  }

  return (
    <section className="pagina">
      <article className="detalle">
        <div className="detalle-foto">
          <img src={producto.imagen} alt={producto.nombre} />
        </div>

        <div className="detalle-info">
          <span className="producto-categoria">{etiquetaCategoria(producto.categoria)}</span>
          <h1 className="titulo">{producto.nombre}</h1>
          {/* El id que llegó por la URL se muestra como código de producto */}
          <p className="codigo">Código: PROD-{id}</p>
          <p className="texto">{producto.descripcion}</p>
          <p className="detalle-precio">{formatearPrecio(producto.precio)}</p>
          <p className="stock">
            {producto.stock > 0
              ? `${producto.stock} unidades disponibles`
              : 'Sin stock por el momento'}
          </p>

          <div className="botonera">
            {/* Navegación imperativa: lleva al perfil, que es una ruta protegida */}
            <button className="btn btn-lleno" onClick={() => navigate('/perfil')}>
              Comprar ahora
            </button>
            {/* -1 vuelve a la página anterior del historial */}
            <button className="btn btn-borde" onClick={() => navigate(-1)}>
              Volver
            </button>
          </div>
        </div>
      </article>

      <ul className="lista-datos">
        <li>
          <span className="dato-etiqueta">Envío</span>
          <span>Gratis en 24/48 h a todo el país</span>
        </li>
        <li>
          <span className="dato-etiqueta">Garantía</span>
          <span>12 meses con servicio técnico propio</span>
        </li>
        <li>
          <span className="dato-etiqueta">Cuotas</span>
          <span>Hasta 12 sin recargo con tarjetas seleccionadas</span>
        </li>
      </ul>
    </section>
  )
}

export default Producto
