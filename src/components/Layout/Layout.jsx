import { Link, NavLink, Outlet } from 'react-router-dom'
import './Layout.css'

// Marca la clase "activo" en el enlace de la ruta que se está viendo
const claseEnlace = ({ isActive }) => (isActive ? 'enlace activo' : 'enlace')

function Layout({ usuario, onCerrarSesion }) {
  return (
    <div className="layout">
      {/* Navegación fija*/}
      <header className="barra">
        <Link to="/" className="marca">
          <img src="/logo.png" alt="Logo de BMP Store" />
          BMP <span>Store</span>
        </Link>

        <nav className="menu">
          <NavLink to="/" end className={claseEnlace}>
            Inicio
          </NavLink>
          <NavLink to="/productos" className={claseEnlace}>
            Productos
          </NavLink>
          <NavLink to="/nosotros" className={claseEnlace}>
            Nosotros
          </NavLink>
          <NavLink to="/contacto" className={claseEnlace}>
            Contacto
          </NavLink>
          <NavLink to="/perfil" className={claseEnlace}>
            Mi perfil
          </NavLink>
        </nav>

        <div className="sesion">
          {usuario ? (
            <>
              <span className="sesion-nombre">Hola, {usuario}</span>
              <button className="btn btn-borde" onClick={onCerrarSesion}>
                Salir
              </button>
            </>
          ) : (
            <Link to="/login" className="btn btn-borde">
              Iniciar sesión
            </Link>
          )}
        </div>
      </header>

      {/* Acá se dibuja la página de la ruta anidada que esté activa */}
      <main className="contenido">
        <Outlet />
      </main>

      <footer className="pie">
        BMP Store - Hecho por Bruno Martinez - 2026. Todos los derechos reservados.
      </footer>
    </div>
  )
}

export default Layout
