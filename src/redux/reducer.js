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
        allCharacters: [...state.allCharacters, action.payload],
      };
    case FILTER:
      return action.payload === "all"
        ? { ...state, myFavorites: [...state.allCharacters] }
        : {
            ...state,
            myFavorites: [...state.allCharacters].filter(
              (e) => e.gender === action.payload
            ),
          };
    case ORDER:
      return {
        ...state,
        myFavorites: [...state.myFavorites].sort((a, b) => {
          console.log(state.myFavorites);
          return action.payload === "Ascendente" ? a.id - b.id : b.id - a.id;
        }),
      };
    case DELETE_FAVORITES:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((e) => e.id !== action.payload),
        allCharacters: state.allCharacters.filter(
          (e) => e.id !== action.payload
        ),
      };
    default:
      return { ...state };
  }
};

export default reducer;
