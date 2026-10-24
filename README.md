## Nombre del e-commerce:

E-commerce - Tecnología

## Descripción:

E-commerce donde se mostrarán artículos relacionados a la tecnología

## Tecnologías utilizadas:

- React
- Javascript

## Pasos para ejecutar el proyecto localmente

1 - Clonar el repositorio

```bash
  git clone https://github.com/GitRepoFabi/Coderhouse-Diplomatura-React
```

2 - Ir al directorio del proyecto

```bash
  cd Coderhouse-Diplomatura-React
```

3 - Instala las dependencias

```bash
  npm install
```

4 - Iniciar el servidor

```bash
  npm run dev
```

## Componentes agregados en Pre-Entrega 2:

- Navbar: Contiene el logo, las categorìas y la incorporación del elemento CardWidget (muestra el carrito de compras con el número de elementos)
- CardWidget: Muestra el ícono del carrito junto con el valor de los elementos del mismo.
- ItemListContainter: Despliega el mensaje enviado por props.

## Componentes y archivos agregados en Pre-entrega 3:

- **ItemListContainer:** Componente contenedor que maneja el ciclo de vida y los estados (`useState`, `useEffect`) para la carga de productos y el estado de espera (`loading`).
- **ItemList:** Componente de presentación encargado de iterar y mapear el array de productos renderizando cada `ProductCard` con su correspondiente `key`.
- **ProductCard:** Componente de presentación individual que muestra la información de cada producto (imagen, nombre, descripción, precio y stock).
- **Spinner:** Componente visual para mostrar el estado de carga mientras se resuelve la petición asíncrona.
- **mock/asyncMock.js:** Módulo que contiene el mock de datos (array de productos) y exporta la función `getProducts`, la cual retorna una `Promise` que resuelve los datos con un retraso de 2 segundos mediante `setTimeout`.

## Mapa del sitio:

```
├── public/
│   └── requerimientos.md
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── ItemList/
│   │   │   ├── ItemList.jsx
│   │   │   └── ItemList.module.css
│   │   ├── ItemListContainer/
│   │   │   ├── ItemListContainer.jsx
│   │   │   └── ItemListContainer.module.css
│   │   ├── Navbar/
│   │   │   ├── NavBar.jsx
│   │   │   └── Navbar.module.css
│   │   ├── ProductCard/
│   │   │   └── ProductCard.jsx
│   │   └── Spinner/
│   │       └── Spinner.jsx
│   ├── mock/
│   │   └── asyncMock.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```
