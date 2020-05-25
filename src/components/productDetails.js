import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const selectPhones = (reduxState) => {
  return reduxState.phones;
};

export default function ProductDetails() {
  //const [phone, setPhone] = useState([]);
  const phonesDetails = useSelector(selectPhones);
  //  console.log("Phone details", phonesDetails);
  const dispatch = useDispatch();
  const getParams = useParams();
  console.log("Params", getParams);

  function add_to_cart(product) {
    const action = { type: "ADD_TO_CART", payload: product };
    dispatch(action);
  }

  const prodDetails = phonesDetails.find((phoneValue) => {
    //console.log(" pahoen value", phoneValue.id, " prams ", getParams);
    if (parseInt(phoneValue.id) === parseInt(getParams.id)) {
      console.log("CONDITON MET ==");
      return phoneValue;
    }
  });

  return (
    <div>
      Welcome to products Page
      <div>
        <div>
          <p>{prodDetails.name}</p>
          <img src={prodDetails.image} height="200px" />
          <p>
            Description:<span className="span">{prodDetails.description}</span>
          </p>
          <p>Price ${prodDetails.price}</p>
          <button onClick={() => add_to_cart(prodDetails)}>add to cart</button>
        </div>
      </div>
    </div>
  );
}
