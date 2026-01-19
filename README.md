# 🧪 Rick & Morty Multiverse Explorer

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

Una aplicación web moderna y responsiva (SPA) que permite explorar el universo de Rick and Morty. Este proyecto consume la API oficial para mostrar personajes, ubicaciones y episodios, ofreciendo una experiencia inmersiva con diseño Glassmorphism y persistencia de datos.

🔗 **[VER DEMO EN VIVO](https://rickandmorty-api-react-iota.vercel.app/)**

---

## 📸 Screenshots

##### 🏠 HOME
![App Screenshot](/public/rick-and-morty-img.jpg)

#### ⭐ FAVORITES
![App Screenshot](/public/rick-and-morty-img2.jpg)

---

## 🚀 Características Principales

* **Exploración Completa:** Navegación fluida entre Personajes, Ubicaciones y Episodios.
* **Buscador y Filtros Inteligentes:** Filtrado en tiempo real por nombre, estado (Vivo/Muerto) y especie.
* **Sistema de Favoritos:** Guarda tus personajes preferidos utilizando **LocalStorage** (los datos persisten aunque cierres el navegador).
* **Diseño UI/UX Moderno:**
    * Estilo **Glassmorphism** (efecto vidrio) con Tailwind CSS.
    * Diseño totalmente **Responsivo** (Móvil, Tablet, Desktop).
    * **Feedback de Usuario:** Indicadores de carga (Spinners) y manejo de errores amigable.
    * **Experiencia Sonora:** Efectos de sonido inmersivos al navegar e iniciar la aplicación.
* **Navegación SPA:** Uso de React Router DOM para una experiencia sin recargas.

---

## 🛠️ Tecnologías Utilizadas

* **Frontend Library:** React.js (Hooks: `useState`, `useEffect`, `useContext`, `useRef`).
* **Build Tool:** Vite (para un entorno de desarrollo ultra rápido).
* **Estilos:** Tailwind CSS (Utility-first framework).
* **Enrutamiento:** React Router DOM v6.
* **Consumo de API:** Fetch API + Async/Await.
* **Iconografía:** Emojis nativos y SVGs.
* **Despliegue:** Vercel.

---

## ⚙️ Instalación y Configuración Local

Si deseas correr este proyecto en tu máquina local, sigue estos pasos:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/TU_USUARIO/rickandmorty-api-react.git](https://github.com/TU_USUARIO/rickandmorty-api-react.git)
    ```

2.  **Entrar a la carpeta del proyecto:**
    ```bash
    cd rickandmorty-api-react
    ```

3.  **Instalar dependencias:**
    ```bash
    npm install
    ```

4.  **Correr el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

5.  Abre tu navegador en `http://localhost:5173` (o el puerto que te indique la terminal).

---

## 🧠 Aprendizajes del Proyecto

Este proyecto fue clave para consolidar conocimientos en:
* El ciclo de vida de los componentes en React.
* Creación de **Custom Hooks** (`useFetch`) para abstraer la lógica de consumo de datos.
* Manejo de rutas dinámicas (`/personaje/:id`).
* Implementación de lógica de paginación manual.
* Solución de problemas de despliegue en Vercel (configuración de rewrites).

---

## ✒️ Autor

**Jaicker Lozano**

* 💼 [LinkedIn](https://www.linkedin.com/in/jaicker-rafael-lozano-flores-dev/)
* 🐙 [GitHub](https://github.com/jaickerlozano)

---

Hecho con 💚 y mucho código.