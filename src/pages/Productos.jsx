import { useSearchParams } from 'react-router-dom'
import ProductoCard from '../components/ProductoCard/ProductoCard.jsx'
import { productos, categorias } from '../data/productos.js'

function Productos() {
  // Los filtros viven en la URL como query params: /productos?categoria=audio&buscar=beats
  const [searchParams, setSearchParams] = useSearchParams()
  const categoria = searchParams.get('categoria') || 'todas'
  const buscar = searchParams.get('buscar') || ''

  // Arma la nueva URL sin dejar parámetros vacíos
  const actualizarFiltros = (nuevos) => {
    const filtros = { categoria, buscar, ...nuevos }
    const params = {}

    if (filtros.categoria !== 'todas') {
      params.categoria = filtros.categoria
    }
    if (filtros.buscar !== '') {
      params.buscar = filtros.buscar
    }

    // replace: true para no llenar el historial con cada tecla escrita
    setSearchParams(params, { replace: true })
  }

  const visibles = productos.filter((producto) => {
    const coincideCategoria = categoria === 'todas' || producto.categoria === categoria
    const coincideBusqueda = producto.nombre.toLowerCase().includes(buscar.toLowerCase())
    return coincideCategoria && coincideBusqueda
  })

  return (
    <section className="pagina">
      <h1 className="titulo">Catálogo</h1>
      <p className="texto">
        Todos los productos tienen garantía oficial de 12 meses y envío sin costo
        a partir de $ 5.000.
      </p>

      <div className="filtros">
        {categorias.map((item) => (
          <button
            key={item.valor}
            className={item.valor === categoria ? 'chip chip-activo' : 'chip'}
            onClick={() => actualizarFiltros({ categoria: item.valor })}
          >
            {item.etiqueta}
          </button>
        ))}
      </div>

      <div className="barra-busqueda">
        <input
          type="search"
          className="input-busqueda"
          placeholder="Buscar en el catálogo..."
          aria-label="Buscar productos por nombre"
          value={buscar}
          onChange={(e) => actualizarFiltros({ buscar: e.target.value })}
        />
        <span className="resultado-conteo">
          {visibles.length} {visibles.length === 1 ? 'producto' : 'productos'}
        </span>
      </div>

      {visibles.length === 0 ? (
        <p className="aviso">
          No encontramos productos con esa búsqueda. Probá con otro nombre o
          cambiá de categoría.
        </p>
      ) : (
        <ul className="grilla">
          {visibles.map((producto) => (
            <ProductoCard key={producto.id} producto={producto} />
          ))}
        </ul>
      )}
    </section>
  )
}

export default Productos
