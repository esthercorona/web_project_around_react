# Around Japan - React

## Descripción

Aplicación web interactiva que permite a los usuarios compartir recuerdos de viajes por Japón.

## Tecnologías utilizadas

- React 18.3
- Vite 6.0
- JavaScript ES6+
- CSS3
- BEM Methodology

## Instalación
```bash
npm install
```

## Ejecutar el proyecto
```bash
npm run dev
```

El proyecto se abrirá automáticamente en `http://localhost:3000`

## Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Crea el build de producción
- `npm run preview` - Previsualiza el build de producción
- `npm run lint` - Ejecuta el linter

## Estructura del proyecto
```
├── blocks/
│   ├── footer.css
│   ├── header.css
│   ├── memories.css
│   ├── modal.css
│   ├── modal-add-memory.css
│   ├── page.css
│   └── profile.css
├── images
├── vendor/
│   ├── fonts/
│   └── normalize.css
└── src/
    ├── components/
    │   ├── App.jsx
    │   ├── Header/
    │   │   └── Header.jsx
    │   ├── Footer/
    │   │   └── Footer.jsx
    │   └── Main/
    │       ├── Main.jsx
    │       └── components/
    │           ├── Card/
    │           │   └── Card.jsx
    │           ├── Popup/
    │           │   └── Popup.jsx
    │           ├── ImagePopup/
    │           │   └── ImagePopup.jsx
    │           └── forms/
    │               ├── NewCard/
    │               │   └── NewCard.jsx
    │               ├── EditProfile/
    │               │   └── EditProfile.jsx
    │               └── EditAvatar/
    │                   └── EditAvatar.jsx
    ├── index.css
    └── main.jsx
```

## Autor

Elizabeth Corona
