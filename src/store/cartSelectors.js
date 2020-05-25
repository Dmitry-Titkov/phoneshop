export const amountOfItemsInCartSelector = (state) => {
  return state.cart.reduce((acc, item) => acc + item.bought, 0);
};

export const uniqueItemsInCart = (state) => {
  return state.cart.length;
};
