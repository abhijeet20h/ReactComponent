import React, { createContext, useState } from "react";
import Toolbar from "./Toolbar";

export const ThemeContext = createContext();

const ContextExample = () => {
  const [theme, setTheme] = useState("light");

  const onClickChangeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      return;
    }
    setTheme("light");
  };
  return (
    <>
      <button className="btn btn-secondary" onClick={onClickChangeTheme}>
        {theme === "dark" ? "light" : "dark"}
      </button>
      <ThemeContext.Provider value={theme}>
        <Toolbar />
      </ThemeContext.Provider>
    </>
  );
};

export default ContextExample;
