import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function ShoppingCart() {
  const cartItemsSelector = (reduxState) => {
    return [...reduxState.cart];
  };
  const dispatch = useDispatch();
  function remove_from_cart(product) {
    const action = { type: "REMOVE_FROM_CART", payload: product };
    dispatch(action);
  }

  function add_quantity_cart(product) {
    const action = { type: "ADD_QUANTITY_CART", payload: product };
    dispatch(action);
  }

  function empty() {
    const action = { type: "EMPTY" };
    dispatch(action);
  }
  let cartItems = useSelector(cartItemsSelector);

  return (
    <div>
      <h1>Your shopping cart</h1>
      {cartItems.map((item) => {
        return (
          <div>
            <li>
              {item.name}, {item.price}, {item.bought}
            </li>
            <button onClick={() => remove_from_cart(item)}>-</button>{" "}
            <button onClick={() => add_quantity_cart(item)}>+</button>
          </div>
        );
      })}
      <button onClick={() => empty()}>empty cart</button>
      <button>buy</button>
    </div>
  );
}
