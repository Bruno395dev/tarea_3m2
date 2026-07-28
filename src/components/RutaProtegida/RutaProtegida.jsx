import { Navigate, useLocation } from 'react-router-dom'

function RutaProtegida({ usuario, children }) {
  const location = useLocation()

  if (!usuario) {
    // Se guarda la ruta que se quiso visitar para volver después del login
    return <Navigate to="/login" state={{ desde: location.pathname }} replace />
  }

  return children
}

export default RutaProtegida
