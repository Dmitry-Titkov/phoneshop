export function phoneSort(state) {
  return {
    type: "Sort_Phone",
  };
}
export function addToCart(id) {
  return {
    type: ADD_TO_CART,
    id,
  };
}

export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id,
  };
};
