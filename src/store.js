export const initialStore = () => {
  return {
    people: [
      {
        name: "Mario",
        gender: "hombre",
        hair_color: "castaño",
        eye_color: "marron"
      }, {
        name: "Raúl",
        gender: "afeminado",
        hair_color: "blonde",
        eye_color: "caca"
      }, {
        name: "Trasto",
        gender: "Perro",
        hair_color: "Marron",
        eye_color: "negro"
      }, {
        name: "Mama",
        gender: "Mujer",
        hair_color: "Negro",
        eye_color: "Marron"
      }, {
        name: "Papa",
        gender: "Hombre",
        hair_color: "Negro",
        eye_color: "Marron"
      }
    ],
    planets: [
      {
        name: "Tatooine",
        population: "200.000",
        terrain: "Desert"
      },{
        name: "Alderaan",
        population: "2.000.000.000",
        terrain: "Grasslands, mountains"
      },{
        name: "Yavin IV",
        population: "1.000",
        terrain: "Jungle, rainforest"
      },{
        name: "Hoth",
        population: "Unknown",
        terrain: "Tundra, ice  caves, mountain ranges"
      }
    ],
    favorites: [
      "fav1", "fav2", "fav3"
    ]
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    default:
      throw Error('Unknown action.');
  }
}
