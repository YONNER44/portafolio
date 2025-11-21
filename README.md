# 🚀 Portafolio Personal - Yonner

Portafolio web profesional desarrollado con tecnologías modernas de frontend, diseñado para mostrar proyectos, habilidades y experiencia como Desarrollador Frontend.

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías](#️-tecnologías)
- [Prerequisitos](#-prerequisitos)
- [Instalación](#-instalación)
- [Scripts Disponibles](#-scripts-disponibles)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Componentes Principales](#-componentes-principales)
- [Rutas](#-rutas)
- [Desarrollo](#️-desarrollo)
- [Construcción y Despliegue](#-construcción-y-despliegue)
- [Personalización](#-personalización)
- [Contacto](#-contacto)

## ✨ Características

- **Diseño Responsivo**: Adaptable a todos los dispositivos (móvil, tablet, escritorio)
- **Navegación Intuitiva**: Sistema de navegación con menú móvil tipo sidebar
- **Animaciones**: Integración de Lottie para animaciones interactivas
- **Tema Oscuro**: Interfaz moderna con paleta de colores oscuros
- **Carga Optimizada**: Loader inicial para mejorar la experiencia de usuario
- **Rutas Dinámicas**: Navegación mediante React Router
- **Rendimiento**: Optimizado con Vite para tiempos de carga rápidos

## 🛠️ Tecnologías

### Frontend
- **React 19.1.1** - Biblioteca de JavaScript para construir interfaces de usuario
- **Vite 7.1.7** - Build tool de última generación
- **React Router DOM 7.9.4** - Manejo de rutas y navegación
- **Tailwind CSS 4.1.14** - Framework de CSS utility-first

### Componentes UI
- **Headless UI 2.2.9** - Componentes accesibles sin estilos predeterminados
- **Heroicons 2.2.0** - Iconos SVG de alta calidad
- **Lottie React 2.4.1** - Animaciones JSON

### Herramientas de Desarrollo
- **ESLint 9.36.0** - Linter para mantener código limpio
- **PostCSS 8.5.6** - Procesador de CSS
- **Autoprefixer 10.4.21** - Añade prefijos de vendors automáticamente

## 📦 Prerequisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 16 o superior)
- **npm** (normalmente viene con Node.js) o **yarn**

Puedes verificar las versiones instaladas con:

```bash
node --version
npm --version
```

## 🔧 Instalación

1. **Clonar el repositorio**

```bash
git clone https://github.com/YONNER44/portafolio.git
cd portafolio
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Iniciar el servidor de desarrollo**

```bash
npm run dev
```

El proyecto estará disponible en `http://localhost:5173`

## 📜 Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm run dev`
Inicia el servidor de desarrollo con hot-reload.
- Abre [http://localhost:5173](http://localhost:5173) en el navegador
- Los cambios se reflejan automáticamente

### `npm run build`
Construye la aplicación para producción en la carpeta `dist`.
- Optimiza el código para mejor rendimiento
- Minimiza archivos CSS y JavaScript
- Prepara los assets para despliegue

### `npm run preview`
Previsualiza la build de producción localmente.
- Sirve la carpeta `dist` en un servidor local
- Útil para verificar la build antes de desplegar

### `npm run lint`
Ejecuta ESLint para verificar el código.
- Identifica errores y problemas de estilo
- Ayuda a mantener código consistente

## 📁 Estructura del Proyecto

```
portafolio/
├── public/                 # Archivos públicos estáticos
│   └── vite.svg           # Logo de Vite
├── src/                   # Código fuente de la aplicación
│   ├── assets/           # Recursos (imágenes, iconos, JSON)
│   │   ├── img/         # Imágenes (perfil, logo)
│   │   ├── IconJson/    # Animaciones Lottie JSON
│   │   └── react.svg    # Logo de React
│   ├── components/       # Componentes reutilizables
│   │   ├── Navbar.jsx   # Barra de navegación
│   │   ├── Footer.jsx   # Pie de página
│   │   └── Loader.jsx   # Loader de carga inicial
│   ├── views/           # Vistas/Páginas
│   │   ├── viewHome.jsx      # Página principal
│   │   └── viewProjects.jsx  # Página de proyectos
│   ├── App.jsx          # Componente principal
│   ├── main.jsx         # Punto de entrada
│   └── global.css       # Estilos globales
├── index.html            # HTML principal
├── package.json          # Dependencias y scripts
├── vite.config.js       # Configuración de Vite
├── tailwind.config.js   # Configuración de Tailwind
├── postcss.config.js    # Configuración de PostCSS
├── eslint.config.js     # Configuración de ESLint
└── README.md            # Documentación del proyecto
```

## 🧩 Componentes Principales

### App.jsx
Componente raíz que:
- Maneja el estado de carga inicial (2 segundos)
- Muestra el `Loader` durante la carga
- Configura el layout general con `Navbar`, rutas y `Footer`

### Navbar.jsx
Navegación principal que incluye:
- **Desktop**: Menú horizontal con iconos y enlaces
- **Mobile**: Sidebar desplegable desde la izquierda
- Logo y perfil con dropdown
- Bloqueo de scroll cuando el menú móvil está abierto
- Indicador visual de ruta activa

### ViewHome.jsx
Página de inicio que muestra:
- Foto de perfil
- Presentación personal
- Tecnologías frontend (React, Vue.js, TypeScript, JavaScript, Tailwind CSS, Material UI)
- Desarrollo móvil (Flutter/Dart)
- Botones de navegación
- Animación Lottie interactiva (saludo)

### ViewProjects.jsx
Página de proyectos (en desarrollo):
- Logos de Vite y React
- Contador de ejemplo
- Placeholder para futuros proyectos

### Loader.jsx
Componente de carga inicial que se muestra mientras la aplicación inicializa.

### Footer.jsx
Pie de página con información adicional y enlaces.

## 🗺️ Rutas

| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/` | `ViewHome` | Página principal con presentación |
| `/proyectos` | `ViewProjects` | Galería de proyectos |
| `/curriculum` | (Pendiente) | Curriculum Vitae |
| `/contacto` | (Pendiente) | Formulario de contacto |

## 🖥️ Desarrollo

### Agregar una Nueva Página

1. Crear el componente en `src/views/`:
```jsx
// src/views/viewContact.jsx
function ViewContact() {
  return (
    <main className="min-h-screen">
      {/* Tu contenido aquí */}
    </main>
  );
}
export default ViewContact;
```

2. Agregar la ruta en `App.jsx`:
```jsx
import ViewContact from "./views/viewContact";

// En el componente Routes:
<Route path="/contacto" element={<ViewContact />} />
```

3. Agregar al menú en `Navbar.jsx`:
```jsx
const navigation = [
  // ...existentes
  { name: "Contacto", href: "/contacto", icon: EnvelopeIcon },
];
```

### Personalizar Estilos

Este proyecto usa **Tailwind CSS**. Los estilos se aplican mediante clases utility:

- Edita `tailwind.config.js` para personalizar colores, fuentes, etc.
- Los estilos globales están en `src/global.css`
- Colores principales del tema:
  - Fondo: `#0a0a0a` (negro profundo)
  - Tarjetas: `#1f1f1f` (gris oscuro)
  - Acento: `#b91b1c` (rojo)
  - Texto: `#e5e5e5` (gris claro)

### Hot Module Replacement (HMR)

Vite proporciona HMR automático. Los cambios en el código se reflejan instantáneamente sin recargar la página completa.

## 🚀 Construcción y Despliegue

### Build de Producción

```bash
npm run build
```

Esto genera una carpeta `dist/` con los archivos optimizados.

### Previsualizar Build

```bash
npm run preview
```

### Despliegue

#### Vercel (Recomendado)
1. Instala Vercel CLI: `npm i -g vercel`
2. Ejecuta: `vercel`
3. Sigue las instrucciones

#### Netlify
1. Conecta tu repositorio en [netlify.com](https://netlify.com)
2. Configuración:
   - Build command: `npm run build`
   - Publish directory: `dist`

#### GitHub Pages
```bash
npm install --save-dev gh-pages
```

Agrega en `package.json`:
```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

Configura `base` en `vite.config.js`:
```js
base: '/portafolio/'
```

Luego ejecuta:
```bash
npm run build
npm run deploy
```

## 🎨 Personalización

### Cambiar Información Personal

1. **Foto y Logo**: Reemplaza las imágenes en `src/assets/img/`
   - `perfil.jpg` - Tu foto de perfil
   - `logo.jpg` - Tu logo personal

2. **Información en ViewHome**: Edita `src/views/viewHome.jsx`
   - Nombre
   - Descripción
   - Tecnologías
   - Textos

3. **Marca Personal**: Edita el nombre en `Navbar.jsx`
   - Cambiar "Arca Software" por tu marca

4. **Título del Sitio**: Edita `index.html`
   - Cambiar `<title>Portafolio</title>`

### Agregar Animaciones Lottie

1. Descarga animaciones de [LottieFiles](https://lottiefiles.com/)
2. Guarda el JSON en `src/assets/IconJson/`
3. Importa y usa en tus componentes:

```jsx
import Lottie from "lottie-react";
import animationData from "../assets/IconJson/tu-animacion.json";

<Lottie animationData={animationData} loop={true} />
```

### Agregar Iconos

Este proyecto usa **Heroicons**. Para usar más iconos:

```jsx
import { TuIconoIcon } from "@heroicons/react/24/outline";

<TuIconoIcon className="h-5 w-5" />
```

## 📧 Contacto

**Yonner** - Desarrollador Frontend

- Portfolio: [Este sitio web]
- GitHub: [@YONNER44](https://github.com/YONNER44)

---

## 📝 Notas Adicionales

### Compatibilidad de Navegadores

Este proyecto está optimizado para navegadores modernos:
- Chrome/Edge (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)

### Rendimiento

- **Lazy Loading**: Considera implementar carga diferida para imágenes
- **Code Splitting**: React Router ya proporciona splitting automático
- **Lighthouse Score**: Apunta a 90+ en todas las categorías

### Mejoras Futuras

- [ ] Implementar página de Curriculum
- [ ] Agregar formulario de contacto funcional
- [ ] Integrar CMS para gestión de proyectos
- [ ] Agregar modo claro/oscuro toggle
- [ ] Implementar i18n para múltiples idiomas
- [ ] Agregar animaciones de transición entre páginas
- [ ] Implementar blog personal
- [ ] Agregar sistema de comentarios

---

**Desarrollado con ❤️ usando React + Vite + Tailwind CSS**
