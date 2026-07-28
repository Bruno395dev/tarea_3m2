import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import Icono from '../Icono/Icono.jsx'
import './Layout.css'

// Marca la clase "activo" en el enlace de la ruta que se está viendo
const claseEnlace = ({ isActive }) => (isActive ? 'enlace activo' : 'enlace')

function Layout({ usuario, onCerrarSesion }) {
  // En pantallas chicas el menú se abre y se cierra con el botón
  const [menuAbierto, setMenuAbierto] = useState(false)

  const cerrarMenu = () => setMenuAbierto(false)

  return (
    <div className="layout">
      {/* Navegación fija*/}
      <header className="barra">
        <Link to="/" className="marca" onClick={cerrarMenu}>
          <img src="/logo.png" alt="Logo de BMP Store" />
          BMP <span>Store</span>
        </Link>

        {/* Botón hamburguesa: solo se ve en mobile */}
        <button
          className="menu-boton"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-expanded={menuAbierto}
          aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
        >
          <Icono nombre={menuAbierto ? 'cerrar' : 'menu'} />
        </button>

        <div className={menuAbierto ? 'panel panel-abierto' : 'panel'}>
          <nav className="menu">
            <NavLink to="/" end className={claseEnlace} onClick={cerrarMenu}>
              Inicio
            </NavLink>
            <NavLink to="/productos" className={claseEnlace} onClick={cerrarMenu}>
              Productos
            </NavLink>
            <NavLink to="/nosotros" className={claseEnlace} onClick={cerrarMenu}>
              Nosotros
            </NavLink>
            <NavLink to="/contacto" className={claseEnlace} onClick={cerrarMenu}>
              Contacto
            </NavLink>
            <NavLink to="/perfil" className={claseEnlace} onClick={cerrarMenu}>
              Mi perfil
            </NavLink>
          </nav>

          <div className="sesion">
            {usuario ? (
              <>
                <span className="sesion-nombre">Hola, {usuario}</span>
                <button
                  className="btn btn-borde"
                  onClick={() => {
                    onCerrarSesion()
                    cerrarMenu()
                  }}
                >
                  Salir
                </button>
              </>
            ) : (
              <Link to="/login" className="btn btn-borde" onClick={cerrarMenu}>
                Iniciar sesión
              </Link>
            )}
          </div>
        </div>
      </header>

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
