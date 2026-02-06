Around Japan - React
Descripción
Aplicación web interactiva que permite a los usuarios compartir recuerdos de viajes por Japón. Los usuarios pueden ver tarjetas con imágenes, dar "likes", agregar nuevas tarjetas y editar su perfil.
Tecnologías utilizadas

React 18.3
Vite 6.0
JavaScript ES6+
CSS3 (BEM Methodology)
API REST

Instalación
bashnpm install
Ejecutar el proyecto
bashnpm run dev
El proyecto se abrirá automáticamente en http://localhost:5173
Scripts disponibles

npm run dev - Inicia el servidor de desarrollo
npm run build - Crea el build de producción
npm run preview - Previsualiza el build de producción
npm run lint - Ejecuta el linter

Estructura del proyecto
web_project_around_react/
├── blocks/ # Archivos CSS por componente (BEM)
│ ├── footer.css
│ ├── header.css
│ ├── memories.css
│ ├── modal.css
│ ├── page.css
│ └── profile.css
├── public/ # Archivos estáticos públicos
│ ├── images/ # Todas las imágenes del proyecto
│ │ ├── Around_Japan.svg
│ │ ├── Close Icon.svg
│ │ ├── Trash.svg
│ │ ├── Vector.svg
│ │ ├── corazoncito.svg
│ │ ├── corazoncito-activo.svg
│ │ ├── upload.svg
│ │ ├── Line.jpg
│ │ └── Foto_1.jpeg - Foto_6.jpg
│ └── index.html
├── src/ # Código fuente de la aplicación
│ ├── components/ # Componentes React
│ │ ├── App.jsx # Componente principal
│ │ ├── Header/
│ │ │ └── Header.jsx
│ │ ├── Footer/
│ │ │ └── Footer.jsx
│ │ └── Main/
│ │ ├── Main.jsx
│ │ └── components/
│ │ ├── Card/
│ │ │ └── Card.jsx
│ │ ├── Popup/
│ │ │ └── Popup.jsx
│ │ ├── ImagePopup/
│ │ │ └── ImagePopup.jsx
│ │ └── forms/
│ │ ├── EditAvatar/
│ │ │ └── EditAvatar.jsx
│ │ ├── EditProfile/
│ │ │ └── EditProfile.jsx
│ │ └── NewCard/
│ │ └── NewCard.jsx
│ ├── contexts/ # Context API
│ │ └── CurrentUserContext.js
│ ├── utils/ # Utilidades
│ │ └── api.js # Configuración de API
│ ├── index.css # Estilos globales
│ └── main.jsx # Punto de entrada de React
├── vendor/ # Bibliotecas de terceros
│ ├── fonts/
│ │ ├── Inter_18pt-Bold.ttf
│ │ ├── Inter_18pt-Medium.ttf
│ │ └── Inter_18pt-Regular.ttf
│ └── normalize.css
├── .gitignore
├── eslint.config.js
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
Funcionalidades
Implementadas

✅ Visualización de tarjetas con imágenes de Japón
✅ Sistema de "likes" en tarjetas
✅ Edición de perfil de usuario (nombre y descripción)
✅ Edición de avatar de usuario
✅ Agregar nuevas tarjetas con título y URL de imagen
✅ Eliminar tarjetas propias
✅ Vista ampliada de imágenes (popup)
✅ Diseño responsive (móvil, tablet, desktop)
✅ Validación de formularios
✅ Manejo de estados con React Context API

Características técnicas

Context API: Manejo del estado del usuario actual (CurrentUserContext)
Lifting State: Estado compartido entre componentes
Componentes controlados: Formularios con validación
Hooks utilizados:

useState - Manejo de estado local
useEffect - Efectos secundarios y llamadas API
useContext - Consumo de contexto
useRef - Referencias a elementos DOM

Estructura de componentes
App
├── CurrentUserContext.Provider
│ ├── Header
│ ├── Main
│ │ ├── Profile (avatar, nombre, descripción)
│ │ ├── Cards (lista de tarjetas)
│ │ │ └── Card (componente individual)
│ │ └── Popups
│ │ ├── EditProfile
│ │ ├── EditAvatar
│ │ ├── NewCard
│ │ └── ImagePopup
│ └── Footer
API
El proyecto se conecta a una API REST para:

Obtener información del usuario
Obtener lista de tarjetas
Actualizar perfil
Actualizar avatar
Crear nuevas tarjetas
Eliminar tarjetas
Dar/quitar likes

Configuración de la API en src/utils/api.js
Responsive Design
El proyecto incluye tres breakpoints:

Móvil: < 758px (diseño vertical, 1 columna)
Tablet: 758px - 1279px (3 columnas de tarjetas)
Desktop: ≥ 1280px (diseño centrado, máximo 880px)

Autor
Elizabeth Corona
Enlace al proyecto
GitHub: https://github.com/esthercorona/web_project_around_react

Notas de desarrollo
Instalación de dependencias
bashnpm install
Variables de entorno
No se requieren variables de entorno para este proyecto.
Problemas conocidos
Ninguno reportado actualmente.
Próximas mejoras

Implementar autenticación de usuarios
Agregar perfil de usuario persistente
Optimización de imágenes
Implementar lazy loading para imágenes
