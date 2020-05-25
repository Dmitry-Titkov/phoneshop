import React from "react";
import HomePage from "./components/HomePage";
import Checkout from "./components/checkOut";
import ProductDetails from "./components/productDetails";
import { amountOfItemsInCartSelector } from "./store/cartSelectors";
import { useSelector } from "react-redux";

import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";

function App() {
  const amountItemsInCart = useSelector(amountOfItemsInCartSelector);
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <nav>
            <NavLink
              activeStyle={{
                fontWeight: "bold",
                color: "blue",
              }}
              to="/"
              exact
            >
              Home
            </NavLink>
            {"   "}
            <NavLink
              activeStyle={{
                fontWeight: "bold",
                color: "blue",
              }}
              to="/checkout"
            >
              Shopping Cart
            </NavLink>
          </nav>
          <h3>My Cart: {amountItemsInCart}</h3>
          <header className="App-header">
            <Switch>
              <Route exact path="/checkout">
                <Checkout />
              </Route>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/product/:id">
                <ProductDetails />
              </Route>
            </Switch>
          </header>
        </Router>
      </header>
    </div>
  );
}

export default App;
