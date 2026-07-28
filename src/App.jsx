import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import RutaProtegida from './components/RutaProtegida/RutaProtegida.jsx'
import {
  Inicio,
  Nosotros,
  Contacto,
  Productos,
  Producto,
  Login,
  Perfil,
  NoEncontrada,
} from './pages'

function App() {
  // Sesión simulada: null = visitante sin loguear, string = nombre del usuario
  const [usuario, setUsuario] = useState(null)

  const cerrarSesion = () => setUsuario(null)

  return (
    <Routes>
      {/* Ruta padre */}
      <Route path="/" element={<Layout usuario={usuario} onCerrarSesion={cerrarSesion} />}>
        {/* Rutas anidadas */}
        <Route index element={<Inicio />} />
        <Route path="nosotros" element={<Nosotros />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="productos" element={<Productos />} />

        {/* Ruta dinámica */}
        <Route path="producto/:id" element={<Producto />} />

        <Route path="login" element={<Login usuario={usuario} onLogin={setUsuario} />} />

        {/* Ruta protegida*/}
        <Route
          path="perfil"
          element={
            <RutaProtegida usuario={usuario}>
              <Perfil usuario={usuario} />
            </RutaProtegida>
          }
        />

        {/* Error pagina no encontrada */}
        <Route path="*" element={<NoEncontrada />} />
      </Route>
    </Routes>
  )
}

export default App
