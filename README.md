# The Simpsons API Explorer

Aplicación web para explorar personajes, locaciones y episodios de Los Simpsons utilizando su API.

## Tecnologías

- React 18
- Vite
- Axios
- Tailwind CSS
- The Simpsons API

## Características

- Búsqueda de personajes, locaciones y episodios
- Filtrado en tiempo real por nombre
- Navegación por páginas
- Interfaz inspirada en Los Simpsons

## Estructura del Proyecto

```
src/
├── api/
│   └── simpson.js          # Funciones para la API
├── components/
│   ├── CharacterCard.jsx   # Tarjeta de personaje
│   ├── LocationCard.jsx    # Tarjeta de locación
│   ├── EpisodeCard.jsx     # Tarjeta de episodio
│   ├── SearchControls.jsx  # Panel de búsqueda
│   ├── NavigationControls.jsx # Controles de navegación
│   ├── LoadingState.jsx    # Estado de carga
│   ├── ErrorState.jsx      # Estado de error
│   ├── ItemsPerPageSelector.jsx # Selector de items mostrados por página
│   ├── EmptyState.jsx      # Estado sin resultados
│   ├── ResultsGrid.jsx     # Grid de resultados
│   └── ScrollToTopButton.jsx # Botón scroll to top
├── hooks/
│   ├── useSimpsonsData.js  # Hook para datos de la API
│   ├── usePagination.js    # Hook para paginación
│   ├── useSearch.js        # Hook para búsqueda
│   └── useScrollTop.js     # Hook scroll to top
├── constants/
│   └── index.js            # Constantes de la aplicación
├── icons/
│   └── index.jsx           # Iconos SVG
├── App.jsx                 # Componente principal
└── main.jsx               # Punto de entrada
```

## API

La aplicación consume [The Simpsons API](https://thesimpsonsapi.com/):

- Base URL: `https://thesimpsonsapi.com/api`
- Endpoints: `/characters`, `/locations`, `/episodes`
