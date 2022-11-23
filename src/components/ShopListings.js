import React from "react";
import { useGlobalContext } from "./GlobalContext";
import { Link } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";
import { formatNumber } from "../utils";
import { theme } from "../theme";
const Listing = ({
  img,
  name,
  price,
  id,
  description,
  dispatch,
  currencyPrefix,
}) => {
  const { isNightMode } = useGlobalContext();
  return (
    <div
      style={{
        backgroundColor: isNightMode
          ? theme.night.card
          : theme.day.card,
      }}
      className="listing"
    >
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={`product/${id}`}
      >
        <div className="img-wrap">
          <img src={img} alt={name} />
        </div>
      </Link>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <p>{name}</p>
          <p>
            {currencyPrefix}
            {formatNumber(price)}
          </p>
        </div>
        <AddToCartButton
          addToCart={() =>
            dispatch({ type: "add-item-to-cart", payload: id })
          }
        />
      </div>
    </div>
  );
};

const ShopListings = () => {
  const { state, dispatch } = useGlobalContext();
  return (
    <div className="listings-wrap">
      {state.cars.map((car) => {
        return (
          <Listing
            currencyPrefix={state.currencyPrefix}
            dispatch={dispatch}
            key={car.id}
            {...car}
          />
        );
      })}
    </div>
  );
};

export default ShopListings;
