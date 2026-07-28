import { Link } from 'react-router-dom'
import Icono from '../components/Icono/Icono.jsx'

function Nosotros() {
  return (
    <section className="pagina">
      <h1 className="titulo">Nosotros</h1>
      <p className="texto">
        BMP Store nació en 2019 como un local chico en el CABA.
        Hoy seguimos con el mismo criterio: vender pocas cosas, pero probadas una
        por una antes de subirlas al catálogo.
      </p>

      <div className="tarjetas">
        <article className="tarjeta">
          <span className="tarjeta-icono">
            <Icono nombre="seleccion" />
          </span>
          <h3>Selección propia</h3>
          <p>Cada producto pasa por nuestro banco de pruebas antes de publicarse.</p>
        </article>
        <article className="tarjeta">
          <span className="tarjeta-icono">
            <Icono nombre="soporte" />
          </span>
          <h3>Soporte real</h3>
          <p>Taller propio: si algo falla, lo revisamos nosotros, no un tercero.</p>
        </article>
        <article className="tarjeta">
          <span className="tarjeta-icono">
            <Icono nombre="local" />
          </span>
          <h3>Retiro en el local</h3>
          <p>Av. Corrientes 4500, Bs. As. También enviamos a todo el país.</p>
        </article>
      </div>

      <h2 className="subtitulo">En números</h2>
      <ul className="lista-datos">
        <li>
          <span className="dato-etiqueta">Clientes</span>
          <span>+1000 compras entregadas</span>
        </li>
        <li>
          <span className="dato-etiqueta">Puntuación</span>
          <span>5 de 5 en reseñas verificadas</span>
        </li>
        <li>
          <span className="dato-etiqueta">Equipo</span>
          <span>9 personas entre local, depósito y taller</span>
        </li>
      </ul>

      <p className="texto">
        ¿Querés escribirnos? Pasá por la <Link to="/contacto">página de contacto</Link>.
      </p>
    </section>
  )
}

export default Nosotros
