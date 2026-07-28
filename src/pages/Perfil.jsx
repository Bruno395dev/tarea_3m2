import { Link } from 'react-router-dom'

function Perfil({ usuario }) {
  return (
    <section className="pagina">
      <h1 className="titulo">Hola, {usuario}</h1>
      <p className="aviso aviso-ok">Tu cuenta está al día. No hay pagos pendientes.</p>

      <h2 className="subtitulo">Mis datos</h2>
      <ul className="lista-datos">
        <li>
          <span className="dato-etiqueta">Cuenta</span>
          <span>{usuario}</span>
        </li>
        <li>
          <span className="dato-etiqueta">Categoría</span>
          <span>Cliente frecuente</span>
        </li>
        <li>
          <span className="dato-etiqueta">Dirección de envío</span>
          <span>Av. Corrientes 4500, Bs. As.</span>
        </li>
      </ul>

      <h2 className="subtitulo">Últimos pedidos</h2>
      <ul className="lista-datos">
        <li>
          <span className="dato-etiqueta">#1042 · AirPods Max</span>
          <span className="estado estado-ok">Entregado</span>
        </li>
        <li>
          <span className="dato-etiqueta">#1038 · iPad Mini 2021</span>
          <span className="estado estado-ok">Entregado</span>
        </li>
        <li>
          <span className="dato-etiqueta">#1051 · Dell XPS 13</span>
          <span className="estado estado-pendiente">En camino</span>
        </li>
      </ul>

      <Link className="btn btn-lleno" to="/productos">
        Seguir comprando
      </Link>
    </section>
  )
}

export default Perfil
