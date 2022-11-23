import React from "react";
import { GrClose } from "react-icons/gr";
import {
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { formatNumber } from "../utils";
import { theme } from "../theme";
import { useGlobalContext } from "./GlobalContext";

const CartItem = ({ item: { img, name, price, id }, quantity }) => {
  const {
    dispatch,
    state: { currencyPrefix },
    isNightMode,
  } = useGlobalContext();
  const increaseQuantity = () => {
    dispatch({ type: "increase-quantity", payload: id });
  };
  const decreaseQuantity = () => {
    dispatch({
      type: "decrease-quantity",
      payload: {
        id,
        delete() {
          dispatch({ type: "delete-cart-item", payload: id });
        },
      },
    });
  };

  return (
    <div className="cart-item">
      <img
        style={{ width: 100, height: 100, objectFit: "cover" }}
        src={img}
        alt=""
      />
      <div className="info">
        <p>{name}</p>
        <p>
          {currencyPrefix}
          {formatNumber(price)}
        </p>
      </div>
      <div className="amount">
        <AiFillMinusCircle
          style={{
            color: isNightMode ? theme.night.text : theme.day.text,
          }}
          onClick={decreaseQuantity}
          className="minus"
        />
        <p>{quantity}</p>
        <AiFillPlusCircle
          style={{
            color: isNightMode ? theme.night.text : theme.day.text,
          }}
          onClick={increaseQuantity}
          className="plus"
        />
      </div>
    </div>
  );
};

const calculateTotal = (cart) => {
  const total = cart.reduce((acc, current) => {
    return acc + current.item.price * current.quantity;
  }, 0);

  return formatNumber(total);
};

const Cart = ({ img, className }) => {
  const {
    closeCart,
    state: { cart },
    state: { currencyPrefix },
    isNightMode,
  } = useGlobalContext();
  return (
    <div
      style={{
        backgroundColor: isNightMode
          ? theme.night.nav
          : theme.day.nav,
      }}
      className={`shopping-cart ${className}`}
    >
      <div className="top">
        <h3>Shopping Cart</h3>
        <GrClose
          style={{
            backgroundColor: isNightMode ? theme.night.text : "",
          }}
          onClick={closeCart}
          className="cart-close-btn"
        />
      </div>
      <div className="cart-items">
        {cart.map((item) => {
          return <CartItem key={item.item.id} {...item} />;
        })}
      </div>
      <div className="total">
        TOTAL: {currencyPrefix}
        {calculateTotal(cart)}
      </div>
      <button className="checkout-btn">Checkout</button>
    </div>
  );
};

export default Cart;
