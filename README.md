# BMP Store — Enrutamiento en React con React Router

Tienda de tecnología hecha con **React** y **Vite**, con **React Router** para el
enrutamiento del lado del cliente. La app tiene páginas estáticas, un catálogo con
filtros guardados en la URL, una ficha de producto dinámica y una sección de
cuenta protegida por login.

Toda la app está envuelta con `BrowserRouter` y las rutas se declaran con `Routes`
y `Route` dentro de un layout con navegación fija.

## Funcionalidades

- Enrutamiento configurado con `BrowserRouter`, `Routes` y `Route`.
- Páginas estáticas: **Inicio**, **Nosotros** y **Contacto**.
- Navegación declarativa con `Link` y `NavLink` (el enlace de la sección actual
  queda marcado como activo).
- Navegación imperativa con `useNavigate` (botones *Ver catálogo*, *Sorprendeme*,
  *Comprar ahora* y *Volver*).
- Ficha de producto en la ruta dinámica `/producto/:id`: el parámetro se lee con
  `useParams` y se muestra como código de producto.
- Filtros del catálogo guardados en la URL con `useSearchParams`
  (`/productos?categoria=audio&buscar=beats`), así el enlace se puede compartir.
- Rutas anidadas con `<Outlet />` dentro de un layout de navegación fija.
- Sección de cuenta protegida con `Navigate` y `useLocation`: sin sesión redirige
  al login, avisa por qué, y al entrar vuelve a la página que se había pedido.
- Página 404 con `path="*"` para las URLs que no existen.
- Tema oscuro propio con variables CSS, tipografía Montserrat e íconos SVG.

## Capturas de pantalla

### Inicio

![Portada de la tienda](media/inicio.png)

### Catálogo con query params (`/productos?categoria=audio`)

![Catálogo filtrado por categoría](media/productos-query.png)

### Ficha de producto en ruta dinámica (`/producto/1`)

![Detalle del producto con el código recibido por la URL](media/producto-dinamico.png)

### Ruta protegida sin sesión (`/perfil` redirige al login)

![Login con el aviso de sesión requerida](media/ruta-protegida.png)

### Ruta protegida con la sesión iniciada

![Perfil del usuario logueado](media/perfil-logueado.png)

### Nosotros y Contacto

![Página Nosotros](media/nosotros.png)

![Página de contacto](media/contacto.png)

---

## Rutas de la aplicación

| Ruta | Página | Qué muestra |
|------|--------|-------------|
| `/` | `Inicio.jsx` | Portada con destacados y navegación imperativa. |
| `/productos` | `Productos.jsx` | Catálogo con filtros por categoría y búsqueda en la URL. |
| `/producto/:id` | `Producto.jsx` | Ficha del producto según el `id` de la URL. |
| `/nosotros` | `Nosotros.jsx` | Página estática con información de la tienda. |
| `/contacto` | `Contacto.jsx` | Página estática con los datos de contacto. |
| `/login` | `Login.jsx` | Ingreso a la cuenta con redirección post-login. |
| `/perfil` | `Perfil.jsx` | Sección privada, protegida por `RutaProtegida`. |
| `*` | `NoEncontrada.jsx` | Página 404 para cualquier URL inexistente. |

---

## Hooks y componentes de React Router utilizados

| Hook / componente | Dónde se usa | Para qué |
|-------------------|--------------|----------|
| `BrowserRouter` | `main.jsx` | Envuelve toda la app para habilitar el enrutamiento. |
| `Routes` y `Route` | `App.jsx` | Declaran qué página se muestra en cada URL. |
| `Link` | `Layout.jsx`, páginas | Navegación declarativa entre páginas. |
| `NavLink` | `Layout.jsx` | Igual que `Link`, pero marca el enlace activo. |
| `Outlet` | `Layout.jsx` | Lugar donde se dibujan las rutas anidadas. |
| `useNavigate` | `Inicio.jsx`, `Producto.jsx`, `Login.jsx` | Navegación imperativa desde el código. |
| `useParams` | `Producto.jsx` | Lee el parámetro `:id` de la URL. |
| `useSearchParams` | `Productos.jsx` | Lee y escribe los query params de los filtros. |
| `useLocation` | `RutaProtegida.jsx`, `Login.jsx`, `NoEncontrada.jsx` | Sabe en qué ruta está el usuario y de dónde viene. |
| `Navigate` | `RutaProtegida.jsx` | Redirige al login cuando no hay sesión. |

---

## Cómo funciona la ruta protegida

1. Alguien entra a `/perfil` sin haber iniciado sesión.
2. `RutaProtegida` no encuentra usuario y devuelve
   `<Navigate to="/login" state={{ desde: location.pathname }} replace />`.
3. `Login.jsx` lee ese `state` con `useLocation` y muestra el aviso
   *«Necesitás iniciar sesión para ver la página que querías visitar»*.
4. Al enviar el formulario se guarda el usuario y `useNavigate` devuelve a la ruta
   pedida originalmente (`navigate(desde, { replace: true })`).

La sesión se guarda en un `useState` de `App.jsx`: es una simulación de front-end,
no hay backend ni validación de contraseña.

---

## Estructura del proyecto

```text
tarea_3m2/
├── media/                              # Capturas de pantalla para el README
├── public/
│   ├── img/                            # Fotos de los productos
│   ├── favicon.png
│   └── logo.png
├── src/
│   ├── components/
│   │   ├── Icono/
│   │   │   ├── Icono.jsx               # Íconos SVG de Material Symbols
│   │   │   └── Icono.css
│   │   ├── Layout/
│   │   │   ├── Layout.jsx              # Navegación fija + <Outlet />
│   │   │   └── Layout.css
│   │   ├── ProductoCard/
│   │   │   ├── ProductoCard.jsx        # Tarjeta de producto reutilizable
│   │   │   └── ProductoCard.css
│   │   └── RutaProtegida/
│   │       └── RutaProtegida.jsx       # Redirige al login si no hay sesión
│   ├── data/
│   │   └── productos.js                # Catálogo y helpers de categoría/precio
│   ├── pages/
│   │   ├── Inicio.jsx                  # Portada + useNavigate
│   │   ├── Nosotros.jsx                # Página estática
│   │   ├── Contacto.jsx                # Página estática
│   │   ├── Productos.jsx               # Catálogo + useSearchParams
│   │   ├── Producto.jsx                # Ruta dinámica + useParams
│   │   ├── Login.jsx                   # Ingreso + redirección post-login
│   │   ├── Perfil.jsx                  # Sección privada
│   │   ├── NoEncontrada.jsx            # Página 404
│   │   └── index.js                    # Exporta todas las páginas juntas
│   ├── shared/
│   │   └── shared.css                  # Estilos compartidos por las páginas
│   ├── App.jsx                         # Configuración de las rutas
│   ├── index.css                       # Estilos globales y paleta del tema
│   └── main.jsx                        # Punto de entrada con BrowserRouter
├── .gitignore
├── .oxlintrc.json
├── index.html
├── vite.config.js
└── package.json
```

---

## Cómo ejecutar el proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/Bruno395dev/tarea_3m2.git
cd tarea_3m2
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Levantar el servidor de desarrollo

```bash
npm run dev
```

Abrir en el navegador la URL que muestra la consola (por defecto
`http://localhost:5173`).

### Otros comandos

```bash
npm run build     # Genera la versión de producción en la carpeta dist/
npm run preview   # Sirve la versión de producción para probarla
npm run lint      # Revisa el código con oxlint
```

---

## Tecnologías utilizadas

- React 19
- React Router 7
- Vite
- CSS con variables (tema oscuro)
- Tipografía Montserrat (Google Fonts)

---

## Créditos del autor

| Campo      | Detalle                                  |
|------------|------------------------------------------|
| **Nombre** | Bruno Martinez                           |
| **Curso**  | 181751                                   |
| **Módulo** | 2 — Unidad 3                             |
| **Tema**   | Enrutamiento en React con React Router   |

---

## Bibliografía y fuentes consultadas

- Documentación oficial de React: <https://es.react.dev/>
- Documentación oficial de React Router: <https://reactrouter.com/>
- `BrowserRouter`: <https://reactrouter.com/api/declarative-routers/BrowserRouter>
- `Route` y `Routes`: <https://reactrouter.com/start/declarative/routing>
- `Link` y `NavLink`: <https://reactrouter.com/start/declarative/navigating>
- `useParams`: <https://reactrouter.com/api/hooks/useParams>
- `useNavigate`: <https://reactrouter.com/api/hooks/useNavigate>
- `useSearchParams`: <https://reactrouter.com/api/hooks/useSearchParams>
- `useLocation`: <https://reactrouter.com/api/hooks/useLocation>
- `Outlet` y rutas anidadas: <https://reactrouter.com/start/declarative/routing#nested-routes>
- Documentación oficial de Vite: <https://vite.dev/>
- Variables CSS (MDN): <https://developer.mozilla.org/es/docs/Web/CSS/Using_CSS_custom_properties>

## Créditos de recursos

- **Logo BMP**: diseño propio.
- **Fotos de los productos**: imágenes de demostración de DummyJSON
  (<https://dummyjson.com/>), de uso libre para proyectos de prueba. Están
  guardadas en `public/img/` para que el sitio funcione sin depender de un
  servidor externo.
- **Íconos**: trazados SVG de Material Symbols de Google
  (<https://fonts.google.com/icons>), licencia Apache 2.0.
- **Tipografía**: Montserrat, de Google Fonts
  (<https://fonts.google.com/specimen/Montserrat>), licencia SIL Open Font.
- Las marcas y modelos que aparecen en el catálogo se usan solo con fines de
  demostración.

---
