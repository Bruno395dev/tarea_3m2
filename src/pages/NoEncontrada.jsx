import { Link, useLocation } from 'react-router-dom'
import Gatito from '../components/Gatito/Gatito.jsx'

function NoEncontrada() {
  const location = useLocation()

  return (
    <section className="pagina pagina-centrada">
      <Gatito />

      <h1 className="titulo-grande">404</h1>
      <h2 className="subtitulo">Alguien desconectó el cable…</h2>
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
