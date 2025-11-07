export const initialStore = () => {
  return {
    characters: [],
    planets: [],
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
    actualPlanet: {
      properties: {
        name: "",
        gravity: "",
        diameter: "",
        climate: "",
        orbital_period: "",
        population: "",
        rotation_period: "",
        surface_water: "",
        terrain: ""
      }
    },
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
    },
    planetImages: {
      "Tatooine": "https://images.steamusercontent.com/ugc/1856044623175734001/8FBD33833890907928BF69E00233BF5CF0BBA8DE/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
      "Alderaan": "https://static.wikia.nocookie.net/esstarwars/images/e/e9/AlderaanSystem-TCWAssassin.png/revision/latest?cb=20180106235830",
      "Yavin IV": "https://cdna.artstation.com/p/assets/covers/images/082/608/774/large/darth-vader-666-darth-vader-666-1.jpg?1733420874",
      "Hoth": "https://upload.wikimedia.org/wikipedia/en/d/d2/Hothplanetsurface.jpg",
      "Dagobah": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9e941bc7-b311-4974-8c78-3f86c64081bb/dewb5j1-7ad160d4-02e9-42e5-8624-c599a5373cfd.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi85ZTk0MWJjNy1iMzExLTQ5NzQtOGM3OC0zZjg2YzY0MDgxYmIvZGV3YjVqMS03YWQxNjBkNC0wMmU5LTQyZTUtODYyNC1jNTk5YTUzNzNjZmQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.JYh56SzOC3nwQt4wrOlo4r6uv_kXZiIrs8iFLJR9nj8",
      "Bespin": "https://static.wikia.nocookie.net/battlefront/images/c/c5/Bespin.png/revision/latest?cb=20200526163921",
      "Endor": "https://i.redd.it/hscf223wemp41.jpg",
      "Naboo": "https://static.wikia.nocookie.net/esstarwars/images/5/50/Naboo.jpg/revision/latest?cb=20060318190228",
      "Coruscant": "https://i.ytimg.com/vi/80zVsoQxn-A/maxresdefault.jpg",
      "Kamino": "https://static.wikia.nocookie.net/esstarwars/images/3/39/KaminoSystem-CC.png/revision/latest?cb=20180617170606"
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
    case 'set_planets':
      return {
        ...store,
        planets: action.payload
      }
      case 'set_actual_planet':
        return {
          ...store,
          actualPlanet: action.payload
        }
    default:
      throw Error('Unknown action.');
  }
}
