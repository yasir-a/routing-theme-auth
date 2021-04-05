import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
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

const NavBar = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const { isLightTheme, setIsLightTheme } = useContext(ThemeContext);
  return (
    <nav className="nav" style={isLightTheme ? themes.dark : themes.light}>
      <NavLink className="logo" to="/">
        Logo
      </NavLink>
      <div className="nav-links">
        <NavLink
          className="nav-links-text"
          activeClassName="active-page"
          to="/services"
        >
          Services
        </NavLink>
        <NavLink
          className="nav-links-text"
          activeClassName="active-page"
          to="/blog"
        >
          Blog
        </NavLink>
        <NavLink
          className="nav-links-text"
          activeClassName="active-page"
          to="/contact"
        >
          Contact
        </NavLink>
        <NavLink
          className="nav-links-text"
          activeClassName="active-page"
          to="/admin"
        >
          Admin
        </NavLink>
        <NavLink
          className="nav-links-text"
          style={{ backgroundColor: "grey", color: "#000" }}
          to="/login"
        >
          Authenticate
        </NavLink>

        {isLoggedIn && (
          <label onClick={() => setIsLoggedIn(false)} style={{ color: "grey" }}>
            Logout
          </label>
        )}

        {/*  <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? "logout" : "login"}
        </button> */}
        <button onClick={() => setIsLightTheme(!isLightTheme)}>
          {isLightTheme ? "Dark" : "Light"}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
