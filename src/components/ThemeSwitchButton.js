import React from "react";
import { BsFillSunFill } from "react-icons/bs";
import { MdModeNight } from "react-icons/md";
import { theme } from "../theme";

import { useGlobalContext } from "./GlobalContext";

const ThemeSwitchButton = ({ style }) => {
  const { isNightMode, toggleNightMode } = useGlobalContext();
  return (
    <div
      style={{
        backgroundColor: isNightMode ? "transparent" : "",
        ...style,
      }}
      onClick={toggleNightMode}
      className="theme-switch"
    >
      {isNightMode ? <BsFillSunFill /> : <MdModeNight />}
    </div>
  );
};

export default ThemeSwitchButton;
