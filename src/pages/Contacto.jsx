import { Link } from 'react-router-dom'

function Contacto() {
  return (
    <section className="pagina">
      <h1 className="titulo">Contacto</h1>
      <p className="texto">
        Escribinos por el medio que te quede más cómodo. Respondemos dentro de las
        24 horas hábiles.
      </p>

      <ul className="lista-datos">
        <li>
          <span className="dato-etiqueta">Correo</span>
          <a href="mailto:[EMAIL_ADDRESS]">bmpstore@gmail.com</a>
        </li>
        <li>
          <span className="dato-etiqueta">Teléfono</span>
          <a href="tel:+5491123456789">+54 9 11 2345 6789</a>
        </li>
        <li>
          <span className="dato-etiqueta">Local</span>
          <span>Av. Corrientes 4500, Bs. As.</span>
        </li>
        <li>
          <span className="dato-etiqueta">Horario</span>
          <span>Lunes a viernes de 9:00 a 18:00 · Sábados de 9:00 a 13:00</span>
        </li>
        <li>
          <span className="dato-etiqueta">Posventa</span>
          <span>soporte@bmpstore.com</span>
        </li>
      </ul>

      <p className="texto">
        Mientras tanto podés mirar el <Link to="/productos">catálogo completo</Link>.
      </p>
    </section>
  )
}

export default Contacto
