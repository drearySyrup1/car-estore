import React from "react";
import { NavLink } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { navLinks } from "../navlinks";
import { useGlobalContext } from "./GlobalContext";
import { theme } from "../theme";
import ThemeSwitchButton from "./ThemeSwitchButton";
const Nav = ({ className }) => {
  const { closeNav, isNightMode } = useGlobalContext();
  return (
    <div
      style={{
        backgroundColor: isNightMode
          ? theme.night.nav
          : theme.day.nav,
      }}
      className={className}
    >
      <div className="navbar-top">
        <h1>Navigation</h1>
        <GrClose
          style={{
            backgroundColor: isNightMode ? theme.night.text : "",
          }}
          onClick={closeNav}
          className="nav-close-btn cart-close-btn"
        />
      </div>
      <ul>
        {navLinks.map(({ name, url }, index) => {
          return (
            <li key={index}>
              <NavLink
                onClick={closeNav}
                style={{
                  textDecoration: "none",
                  color: "var(--text-color)",
                }}
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
      <ThemeSwitchButton
        style={{
          display: "grid",
        }}
      />
    </div>
  );
};

export default Nav;
