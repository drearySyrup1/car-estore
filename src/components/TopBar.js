import React from "react";
import { BsCart3 } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./GlobalContext";
import { NavLink } from "react-router-dom";
import { navLinks } from "../navlinks";
import { theme } from "../theme";
import ThemeSwitchButton from "./ThemeSwitchButton";
const TopBar = () => {
  const { toggleCart, state, openNav, isNightMode } =
    useGlobalContext();
  return (
    <div
      style={{
        backgroundColor: isNightMode
          ? theme.night.nav
          : theme.day.nav,
      }}
      className="topbar"
    >
      <div className="topbar-inside">
        <div className="logo">WMMotors</div>
        <div className="links">
          <ul>
            {navLinks.map(({ name, url }, index) => {
              return (
                <li key={index}>
                  <NavLink
                    className={(data) =>
                      data.isActive ? "navlink-active" : ""
                    }
                    to={url}
                  >
                    {name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="control-icons">
          <div className="cart">
            <div className="item-counter">
              {state.cart.reduce((acc, current) => {
                return acc + current.quantity;
              }, 0)}
            </div>
            <BsCart3
              style={{
                color: isNightMode
                  ? theme.night.text
                  : theme.day.text,
              }}
              onClick={toggleCart}
            />
          </div>
          <FaBars onClick={openNav} className="toggle-nav" />
        </div>
        <ThemeSwitchButton />
      </div>
    </div>
  );
};

export default TopBar;
