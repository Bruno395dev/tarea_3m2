import { Link, useNavigate } from 'react-router-dom'
import Icono from '../components/Icono/Icono.jsx'
import ProductoCard from '../components/ProductoCard/ProductoCard.jsx'
import { productos } from '../data/productos.js'

function Inicio() {
  // useNavigate permite cambiar de página desde el código
  const navigate = useNavigate()

  const destacados = productos.filter((producto) => producto.destacado)

  const verCatalogo = () => {
    navigate('/productos')
  }

  const sorprendeme = () => {
    const alAzar = productos[Math.floor(Math.random() * productos.length)]
    navigate(`/producto/${alAzar.id}`)
  }

  return (
    <section className="pagina">
      <div className="hero">
        <span className="etiqueta">Envío gratis en Argentina</span>
        <h1 className="titulo-grande">Tecnología que rinde</h1>
        <p className="texto">
          Notebooks, celulares, tablets y audio elegidos uno por uno. Garantía de
          un año y cambios sin vueltas durante los primeros 30 días.
        </p>

        <div className="botonera">
          <button className="btn btn-lleno" onClick={verCatalogo}>
            Ver catálogo
          </button>
          <button className="btn btn-borde" onClick={sorprendeme}>
            Sorprendeme
          </button>
        </div>
      </div>

      <h2 className="subtitulo">Destacados de la semana</h2>
      <ul className="grilla">
        {destacados.map((producto) => (
          <ProductoCard key={producto.id} producto={producto} />
        ))}
      </ul>

      <div className="tarjetas">
        <article className="tarjeta">
          <span className="tarjeta-icono">
            <Icono nombre="envio" />
          </span>
          <h3>Entrega en 24 h</h3>
          <p>Despachamos el mismo día si comprás antes de las 16:00.</p>
        </article>
        <article className="tarjeta">
          <span className="tarjeta-icono">
            <Icono nombre="garantia" />
          </span>
          <h3>Garantía de 12 meses</h3>
          <p>Servicio técnico propio y repuestos originales.</p>
        </article>
        <article className="tarjeta">
          <span className="tarjeta-icono">
            <Icono nombre="pago" />
          </span>
          <h3>Hasta 12 cuotas</h3>
          <p>Con todas las tarjetas, sin recargo en compras mayores a $ 20.000.</p>
        </article>
      </div>

      <p className="texto">
        ¿Dudas con tu compra? Escribinos desde la{' '}
        <Link to="/contacto">página de contacto</Link>.
      </p>
    </section>
  )
}

export default Inicio
