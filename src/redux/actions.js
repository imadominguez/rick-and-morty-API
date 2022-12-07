export const ADD_FAVORITES = "ADD_FAVORITES";
export const DELETE_FAVORITES = "DELETE_FAVORITES";

export const addProduct = (product) => {
  return { type: ADD_FAVORITES, payload: product };
};

export const deleteProducts = (id) => {
  return { type: DELETE_FAVORITES, payload: product };
};
