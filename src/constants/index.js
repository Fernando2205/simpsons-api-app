export const SEARCH_TYPES = {
  characters: {
    label: 'Personajes',
    endpoint: '/characters',
    searchField: 'name'
  },
  locations: {
    label: 'Locaciones',
    endpoint: '/locations',
    searchField: 'name'
  },
  episodes: {
    label: 'Episodios',
    endpoint: '/episodes',
    searchField: 'name'
  }
}

export const API_PAGE_SIZE = 20
export const ITEMS_OPTIONS = [10, 20, 30, 60, 90]
