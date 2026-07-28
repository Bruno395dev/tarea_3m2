import { Navigate, useLocation } from 'react-router-dom'

// Envuelve una página privada: si no hay usuario logueado, redirige al login
function RutaProtegida({ usuario, children }) {
  const location = useLocation()

  if (!usuario) {
    // Se guarda la ruta que se quiso visitar para volver después del login
    return <Navigate to="/login" state={{ desde: location.pathname }} replace />
  }

  return children
}

export default RutaProtegida
