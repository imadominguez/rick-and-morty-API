import { ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITES:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
      };
    case FILTER:
      return {
        ...state.allCharacters,
        myFavorites: state.allCharacters.filter(
          (e) => e.genere == action.payload
        ),
      };
    case ORDER:
      return {
        ...state.allCharacters,
        myFavorites: state.allCharacters.sort(function (a, b) {
          if (action.payload === "Ascendente") {
            return a - b;
          } else if (action.payload === "Descendente") {
            return b - a;
          }
        }),
      };
    case DELETE_FAVORITES:
      return {
        ...state,
        myfavorites: state.myFavorites.filter((e) => e.id !== action.payload),
      };
    default:
      return { ...state };
  }
};

export default reducer;
