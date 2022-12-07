export const ADD_FAVORITES = "ADD_FAVORITES";
export const DELETE_FAVORITES = "DELETE_FAVORITES";

export const addFavorites = (id) => {
  return { type: ADD_FAVORITES, payload: id };
};

export const deleteFavorites = (id) => {
  return { type: DELETE_FAVORITES, payload: id };
};
