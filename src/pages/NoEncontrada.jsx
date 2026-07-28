import { Link, useLocation } from 'react-router-dom'

// Se muestra cuando la URL no coincide con ninguna ruta (path="*")
function NoEncontrada() {
  const location = useLocation()

  return (
    <section className="pagina">
      <h1 className="titulo-grande">404</h1>
      <h2 className="subtitulo">No encontramos esta página</h2>
      <p className="texto">
        La dirección <code>{location.pathname}</code> no existe o cambió de lugar.
      </p>

      <div className="botonera">
        <Link className="btn btn-lleno" to="/">
          Ir al inicio
        </Link>
        <Link className="btn btn-borde" to="/productos">
          Ver el catálogo
        </Link>
      </div>
    </section>
  )
}

export default NoEncontrada
