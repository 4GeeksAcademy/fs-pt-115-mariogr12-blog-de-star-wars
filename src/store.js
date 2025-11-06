export const initialStore = () => {
  return {
    characters: [],
    actualCharacter: {
      properties: {
        name: "",
        description: "",
        gender: "",
        eye_color: "",
        hair_color: "",
        height: "",
        mass: "",
        skin_color: "",
        birth_year: "", 
        gender: ""

      }
    },
    planets: [
      {
        name: "Tatooine",
        population: "200.000",
        terrain: "Desert"
      }, {
        name: "Alderaan",
        population: "2.000.000.000",
        terrain: "Grasslands, mountains"
      }, {
        name: "Yavin IV",
        population: "1.000",
        terrain: "Jungle, rainforest"
      }, {
        name: "Hoth",
        population: "Unknown",
        terrain: "Tundra, ice  caves, mountain ranges"
      }
    ],
    favorites: [
      "fav1", "fav2", "fav3"
    ],
    characterImages: {
      "Luke Skywalker": "https://img.asmedia.epimg.net/resizer/v2/TVLRIW6H75EYPNO3KBHXFTISDA.jpg?auth=1d2278160753689784a2193684678b480f9df18a8fcb8bfe628520b78f5d0547&width=1472&height=828&smart=true",
      "R2-D2": "https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=273%2C0%2C951%2C536",
      "C-3PO": "https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/6/65/C3p0_bio_pic.jpeg",
      "Darth Vader": "https://f.rpp-noticias.io/2022/05/26/432343_1264055.jpg?width=1020&quality=80",
      "Leia Organa": "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2017/04/Leia.jpg?fit=888%2C456&quality=70&strip=all&ssl=1",
      "Owen Lars": "https://lumiere-a.akamaihd.net/v1/images/owen-lars-main_08c717c8.jpeg?region=0%2C0%2C940%2C706",
      "Obi-Wan Kenobi": "https://i.blogs.es/bc2775/obiwankenobi/450_1000.jpeg",
      "Beru Whitesun lars": "https://static.wikia.nocookie.net/esstarwars/images/8/87/Beru_at_the_dinner_table.png/revision/latest?cb=20211127172623",
      "R5-D4": "https://p.turbosquid.com/ts-thumb/R5/3pEuP5/PmTDbTYb/product1/jpg/1604712681/600x600/fit_q87/2743523bb909a8a9051ff602f21076980d7dd4f8/product1.jpg",
      "Biggs Darklighter": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj8om-Zr0cX4-E2AYGXfgMzdKVfFLF_zbvLw&s"
    }
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'set_characters':
      return {
        ...store,
        characters: action.payload
      }
    case 'set_actual_character':
      return {
        ...store,
        actualCharacter: action.payload
      }
    default:
      throw Error('Unknown action.');
  }
}
