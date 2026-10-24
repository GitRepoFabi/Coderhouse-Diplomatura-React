# Entregable: Instrucciones para la Pre-entrega 1

Para completar este checkpoint, deberás entregar el **enlace directo a un repositorio público de GitHub** que contenga la estructura inicial de tu proyecto e-commerce desarrollado con React.

> ⚠️ **Importante:** No se debe entregar un PDF, un documento ni capturas de pantalla. El entregable será únicamente el código completo del proyecto correctamente publicado en GitHub.

---

## 1. Creación del proyecto

El proyecto debe estar creado con **Vite** utilizando las siguientes opciones:

- **Framework:** React
- **Variant:** JavaScript

El nombre del proyecto debe ser descriptivo y estar relacionado con la temática del e-commerce que vas a desarrollar. Evitá utilizar nombres genéricos como:

- `react`
- `vite`
- `proyecto`
- `trabajo-final`

## 2. Limpieza del proyecto

La aplicación debe estar limpia del contenido de ejemplo que incluye Vite por defecto. No deben quedar elementos innecesarios como:

- Logos de Vite o React.
- Contador inicial.
- Botones o tarjetas de ejemplo.
- Imágenes que no se utilizarán.
- Estilos predeterminados que no formen parte del proyecto.

El componente `App.jsx` debe renderizar una estructura simple y propia, por ejemplo, un título con el nombre del e-commerce. En esta etapa todavía no es necesario implementar productos, rutas, carrito ni otras funcionalidades avanzadas.

## 3. Estructura inicial

Dentro de la carpeta `src` debe existir una carpeta llamada `components`. La estructura inicial debe incluir, como mínimo:

```text
src/
└── components/
App.jsx
main.jsx
```

La carpeta `components` se utilizará en las próximas entregas para organizar los componentes de la aplicación.

## 4. Repositorio público de GitHub

El proyecto debe estar publicado en un repositorio público de GitHub. Al abrir el repositorio, deben visualizarse directamente los archivos y carpetas principales del proyecto:

- `package.json`
- `vite.config.js`
- `index.html`
- `.gitignore`
- `src/`
- `public/`

El proyecto debe subirse desde su carpeta raíz. **No debe estar contenido dentro de una carpeta adicional innecesaria.** Por ejemplo, no debería ser necesario ingresar a otra carpeta para encontrar `package.json` o `src`.

## 5. Buenas prácticas

- **Exclusión de dependencias:** La carpeta `node_modules` no debe estar incluida en el repositorio. Esta carpeta debe quedar excluida mediante el archivo `.gitignore`, ya que puede reconstruirse instalando las dependencias del proyecto.
- **Archivos innecesarios:** Tampoco deben subirse archivos temporales, configuraciones locales o información sensible.
- **Scripts y estilos:** No agregues librerías, scripts externos ni fuentes directamente en `index.html`. Las dependencias deben instalarse mediante npm e importarse dentro del proyecto cuando sean necesarias.

## 6. Historial de commits

El repositorio debe incluir **al menos tres commits** que representen avances concretos del proyecto. Los mensajes deben ser claros y describir los cambios realizados. Por ejemplo:

1. `Creación inicial del proyecto con Vite.`
2. `Limpieza del contenido predeterminado.`
3. `Creación de la estructura de componentes.`

_Evitá subir todo el proyecto mediante un único commit._

## 7. Archivo README

El repositorio debe incluir un archivo `README.md` con la siguiente información básica:

- Nombre del e-commerce.
- Breve descripción del proyecto.
- Tecnologías utilizadas.
- Instrucciones para instalar y ejecutar la aplicación.

## 8. Ejecución del proyecto

El proyecto debe poder descargarse, instalarse y ejecutarse localmente sin errores mediante los siguientes comandos:

```bash
npm install
npm run dev
```

Antes de entregar, comprobá que la aplicación se abra correctamente en el navegador.

---

## Entrega

Deberás entregar únicamente el enlace directo al repositorio público de GitHub.

**Ejemplo:** `https://github.com/usuario/nombre-del-proyecto`

### Checklist antes de enviar:

- [x] El enlace funciona correctamente.
- [x] El repositorio esté configurado como público.
- [x] El proyecto esté subido desde su carpeta raíz.
- [x] Se visualicen directamente `package.json`, `vite.config.js`, `index.html`, `.gitignore` y `src/`.
- [x] No esté incluida la carpeta `node_modules`.
- [x] La aplicación esté limpia del contenido predeterminado de Vite.
- [x] Exista la carpeta `src/components`.
- [x] El repositorio tenga al menos tres commits claros.
- [x] Se incluya un archivo `README.md`.
- [x] El proyecto pueda ejecutarse con `npm install` y `npm run dev`.

_No se aceptarán archivos PDF, capturas de pantalla ni repositorios privados como reemplazo del enlace solicitado._

# Entregable: Instrucciones para la Pre-Entrega 2

## Ejercicio: Checkpoint de estructura y layout inicial

Este ejercicio es una pre-entrega de tu proyecto final. Debes consolidar lo aprendido sobre componentes, JSX y props.

### 🎯 Objetivo

Crear la estructura visual base de tu e-commerce, separando las responsabilidades en componentes reutilizables y pasando información a través de props.

---

### 📝 Instrucciones paso a paso

1. **Preparación:**
   - Asegúrate de estar trabajando sobre el repositorio creado en el Módulo 1.
   - Podés crear una rama o no, lo dejamos a tu criterio.

2. **Creación de Componentes:**
   - **Navbar:** Crea un componente que incluya:
     - Un nombre o logo de tu tienda.
     - Una lista de categorías (ej: 'Vinos', 'Aceites', 'Regalería').
     - Un componente hijo llamado `CartWidget`.
   - **CartWidget:** Crea este componente independiente:
     - Debe mostrar un ícono (puedes usar un emoji o la librería `react-icons`).
     - Debe mostrar un número de notificación (ej: un '0' o un '3') que represente la cantidad de productos en el carrito.
   - **ItemListContainer:** Crea este componente contenedor:
     - Debe recibir una prop llamada `greeting`.
     - Debe renderizar ese `greeting` dentro de una etiqueta `<h1>` o `<h2>` centrada en la pantalla.

3. **Ensamblaje en App.jsx:**
   - Limpia el contenido por defecto de `App.jsx`.
   - Importa y renderiza el `Navbar`.
   - Importa y renderiza el `ItemListContainer`, pasándole un mensaje de bienvenida personalizado mediante la prop `greeting`.

4. **Estilización:**
   - Agrega estilos CSS o una librería de estilos a tu gusto para que la `Navbar` sea atractiva y funcional.
   - _Tip:_ Puedes usar Flexbox para alinear el logo a la izquierda y las categorías/carrito a la derecha.

5. **Entrega:**
   - Sube tus cambios a GitHub.
   - Asegúrate de que el `README` de tu proyecto esté actualizado con una breve descripción de los componentes creados.

---

### ⚠️ Qué no hacer

- **No crear categorías en el navbar ajenas a los productos:**
  - Las categorías deben representar tipos de productos reales (por ejemplo: remeras, pantalones, zapatillas, accesorios, etc.).
  - No se aceptarán categorías genéricas o institucionales como _Nosotros_, _Contacto_, _Inicio_ o _Quiénes somos_.
  - Recuerda que las categorías se usarán para filtrar o navegar productos, no para armar secciones informativas.
- **No modificar el archivo `index.html`:**
  - No agregues fuentes, scripts externos, librerías de JavaScript o estilos de forma manual como si fuera una página HTML tradicional.
  - En React, las librerías y dependencias deben instalarse con `npm` e importarse dentro del proyecto.
- **No descuidar el orden de los archivos:**
  - No dejes archivos sueltos o componentes sin organización dentro de `src`.
  - Mantén desde el inicio una estructura clara usando carpetas dedicadas como `components`.

---

### Criterios de Aceptación

- [x] El proyecto debe correr sin errores con `npm run dev`.
- [x] Se evidencia la separación de componentes en archivos distintos.
- [x] El `CartWidget` funciona como un componente independiente dentro de la `Navbar`.
- [x] El `ItemListContainer` muestra correctamente el mensaje pasado por props.
- [x] El código sigue las convenciones de nombres (PascalCase para componentes) y una estructura limpia.

# Entregable: Instrucciones para la Pre-Entrega 3:

## Ejercicio: Checkpoint del listado de productos

En este ejercicio, daremos vida al catálogo de nuestro e-commerce. Dejarás de usar datos estáticos en el JSX y pasarás a un modelo de datos dinámico.

---

## Tareas técnicas

### 1. Simulación de Datos (Mocking)

- Crea un archivo de datos (ej: `src/mock/asyncMock.js`) que exporte una función `getProducts`.
- Esta función debe retornar una `Promise` que se resuelva en 2 segundos con un array de productos.
- Cada producto debe tener las siguientes propiedades:
  - `id`
  - `name`
  - `price`
  - `category`
  - `img`
  - `stock`
  - `description`

### 2. Componente Contenedor (`ItemListContainer`)

- Utiliza `useState` para gestionar los productos obtenidos.
- Implementa `useEffect` para llamar a la promesa al momento del montaje.

### 3. Visualización

- Crea un componente `ItemList` encargado de mapear los productos.
- Crea un componente `Item` (o `ProductCard`) para mostrar la información individual de cada producto (nombre, precio, imagen).
- Asegúrate de pasar la `key={product.id}` en el lugar correcto.

---

## Criterios de Aceptación

- [x] **Control de versiones:** El código debe estar subido a una rama llamada `feature/listado-dinamico` o directamente a `main`.
- [x] **Estabilidad:** No debe haber errores en la consola del navegador.
- [x] **Buenas prácticas de React:** Uso estricto de componentes funcionales y Hooks.
- [x] **Arquitectura:** Separación de responsabilidades entre componentes.
- [x] **Asincronía:** El listado de productos debe venir de una promesa local.
- [x] **Datos completos:** Los productos deben estar completos, con las propiedades mencionadas en el paso 1 y deben renderizarse correctamente.
- [x] **Diseño:** El styling debe estar integrado.
