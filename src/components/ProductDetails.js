import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "./GlobalContext";
import { formatNumber } from "../utils";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
const ProductDetails = () => {
  const { id } = useParams();
  const { state, dispatch } = useGlobalContext();
  const navitate = useNavigate();
  const { img, name, price, description } = state.cars.find(
    (item) => item.id === id
  );

  useEffect(() => {
    document.title = `VM Motors - ${name}`;
  }, []);

  return (
    <div className="product-details-wrap">
      <div onClick={() => navitate(-1)} className="goback">
        <IoIosArrowBack />
        Back
      </div>
      <div className="product">
        <img src={img} alt="" />
        <div className="product-stats">
          <p className="bold big">
            {name} - {state.currencyPrefix}
            {formatNumber(price)}
          </p>
          {description &&
            description.map((item, index) => {
              return (
                <p key={index}>
                  <span style={{ fontWeight: "bold" }}>
                    {item.name}:{" "}
                  </span>
                  {item.value}
                </p>
              );
            })}
        </div>
      </div>
      <button
        onClick={() =>
          dispatch({
            type: "add-item-to-cart",
            payload: id,
          })
        }
        className="product-details-btn checkout-btn"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
