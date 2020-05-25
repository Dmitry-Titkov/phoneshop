import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const selectPhones = (reduxState) => {
  return [...reduxState.phones];
};

const selectBrand = (reduxState) => {
  return reduxState.phones.map((brands) => {
    return brands.brand;
  });
};

export default function HomePage() {
  const [brand, setBrand] = useState(""); // for filtering
  const [sortByPrice, setSortByPrice] = useState(false); //for sorting

  const dispatch = useDispatch();
  const brands = useSelector(selectBrand);
  let phones = useSelector(selectPhones);

  const handlerEvent = (event) => {
    return setBrand(event.target.value);
  };
  function add_to_cart(product) {
    const action = { type: "ADD_TO_CART", payload: product };
    dispatch(action);
  }

  const distinctBrands = [...new Set(brands)];

  let filteredPhones =
    brand === "" ? phones : phones.filter((p) => p.brand === brand);

  let sortedPhones = sortByPrice
    ? [...filteredPhones].sort((a, b) => a.price - b.price)
    : filteredPhones;

  return (
    <div>
      <button onClick={() => setSortByPrice(!sortByPrice)}>
        {" "}
        sort by Price{" "}
      </button>{" "}
      <p>
        filter by brand{" "}
        <select onChange={handlerEvent}>
          {" "}
          {distinctBrands.map((brand) => {
            return <option> {brand} </option>;
          })}{" "}
        </select>{" "}
      </p>{" "}
      <h1> Welcome to home page </h1>{" "}
      <div>
        {" "}
        {sortedPhones.map((phoneDetails) => {
          return (
            <div className="grid">
              <div>
                <p> {phoneDetails.brand} </p> <h3> {phoneDetails.name} </h3>{" "}
                <img src={phoneDetails.image} height="200px" />
                <p> Price $ {phoneDetails.price} </p>{" "}
                <Link to={`/product/${phoneDetails.id}`}>
                  <p>see more >></p>
                </Link>
                <button onClick={() => add_to_cart(phoneDetails)}>
                  add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
