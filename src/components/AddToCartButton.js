import React, { useState, useRef, useEffect } from "react";
import { BsCartPlusFill } from "react-icons/bs";

const AddToCartButton = ({ addToCart }) => {
  const [isClicked, setIsClicked] = useState(false);
  const element = useRef();
  const handleClick = () => {
    console.log(isClicked);
    if (isClicked) return;
    setIsClicked(true);
  };

  useEffect(() => {
    const handleRemoveRotateEnd = () => {
      console.log("called");
      addToCart();
      setIsClicked(false);
    };

    const handleRotateEnd = () => {
      cartIcon.classList.remove("rotate-btn");
      cartIcon.addEventListener(
        "transitionend",
        handleRemoveRotateEnd
      );
    };
    const cartIcon = element.current.querySelector("svg");
    cartIcon.addEventListener("transitionend", handleRotateEnd);

    return () => {
      cartIcon.removeEventListener(
        "transitionend",
        handleRotateEnd
      );
      cartIcon.removeEventListener(
        "transitionend",
        handleRemoveRotateEnd
      );
    };
  }, [isClicked]);

  return (
    <div ref={element} className="add-to-cart-btn-bg">
      <BsCartPlusFill
        onClick={handleClick}
        className={`add-to-cart-btn ${isClicked && "rotate-btn"}`}
      />
    </div>
  );
};

export default AddToCartButton;
