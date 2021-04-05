import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

const Home = () => {
  const { isLightTheme } = useContext(ThemeContext);
  return (
    <div
      className="home-container"
      style={isLightTheme ? themes.dark : themes.light}
    >
      <h1 className="home-heading">Home</h1>
      <p
        className="home-para"
        style={isLightTheme ? themes.dark : themes.light}
      >
        Lorem ipsum dolor sit amet, consectetur adip.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  );
};

export default Home;
