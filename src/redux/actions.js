export const ADD_FAVORITES = "ADD_FAVORITES";
export const DELETE_FAVORITES = "DELETE_FAVORITES";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export const addFavorites = (product) => {
  return { type: ADD_FAVORITES, payload: product };
};

export const deleteFavorites = (id) => {
  return { type: DELETE_FAVORITES, payload: id };
};

export const filterCards = (status) => {
  return {
    type: FILTER,
    payload: status.genere,
  };
};

export const orderCards = (id) => {
  return {
    type: ORDER,
    payload: id,
  };
};
