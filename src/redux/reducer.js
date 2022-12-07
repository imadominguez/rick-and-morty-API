import { ADD_FAVORITES, DELETE_FAVORITES } from "./actions";

const initialState = {
  myFavorites: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITES:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
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
