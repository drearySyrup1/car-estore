import "./App.css";
import TopBar from "./components/TopBar";
import Cart from "./components/Cart";
import Nav from "./components/Nav";
import { theme } from "./theme";

import { useGlobalContext } from "./components/GlobalContext";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
function App() {
  const { isCartOpen, isNavOpen, isNightMode } = useGlobalContext();

  useEffect(() => {
    document.body.style.backgroundColor = isNightMode
      ? theme.night.bg
      : theme.day.bg;
    document.body.style.setProperty(
      "--text-color",
      isNightMode ? theme.night.text : theme.day.text
    );
    document.body.style.setProperty(
      "--btn-hover-color",
      isNightMode ? "#444" : "rgb(216, 216, 216)"
    );
  }, [isNightMode]);

  console.log(isNavOpen);
  return (
    <>
      <TopBar />
      <div className="wrapper">
        <Outlet />
        <Nav
          className={
            isNavOpen ? "mobile-nav show-nav" : "mobile-nav"
          }
        />
        <Cart className={isCartOpen ? "show-cart" : ""} />
      </div>
    </>
  );
}

export default App;
