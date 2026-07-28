import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Login({ usuario, onLogin }) {
  const [nombre, setNombre] = useState('')
  const [clave, setClave] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  // Ruta que se quiso abrir antes de ser redirigido (la manda RutaProtegida)
  const desde = location.state?.desde || '/perfil'

  const entrar = (evento) => {
    evento.preventDefault()

    if (nombre.trim() === '' || clave.trim() === '') {
      return
    }

    onLogin(nombre.trim())
    // Después de entrar, vuelve a la página que se quería ver
    navigate(desde, { replace: true })
  }

  if (usuario) {
    return (
      <section className="pagina">
        <h1 className="titulo">Ya tenés la sesión abierta</h1>
        <p className="texto">
          Estás dentro como <strong>{usuario}</strong>.
        </p>
        <Link className="btn btn-lleno" to="/perfil">
          Ir a mi perfil
        </Link>
      </section>
    )
  }

  return (
    <section className="pagina pagina-angosta">
      <h1 className="titulo">Ingresá a tu cuenta</h1>

      {location.state?.desde && (
        <p className="aviso">
          Necesitás iniciar sesión para ver la pagina que querias visitar.
        </p>
      )}

      <p className="texto">
        Con tu cuenta seguís tus pedidos, guardás direcciones de envío y accedés a
        los precios de cliente frecuente.
      </p>

      <form className="formulario" onSubmit={entrar}>
        <label htmlFor="nombre">Usuario o correo</label>
        <input
          id="nombre"
          type="text"
          className="input-texto"
          placeholder="Ej: bruno@correo.com"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <label htmlFor="clave">Contraseña</label>
        <input
          id="clave"
          type="password"
          className="input-texto"
          placeholder="••••••••"
          value={clave}
          onChange={(e) => setClave(e.target.value)}
        />

        <button className="btn btn-lleno" type="submit">
          Entrar
        </button>
      </form>

      <p className="texto-chico">
        ¿Todavía no tenés cuenta? Creala en el local o escribinos desde la{' '}
        <Link to="/contacto">página de contacto</Link>.
      </p>
    </section>
  )
}

export default Login
