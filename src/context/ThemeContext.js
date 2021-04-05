import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

//Provider for
export const ThemeContextProvider = (props) => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  return (
    <ThemeContext.Provider value={{ isLightTheme, setIsLightTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
