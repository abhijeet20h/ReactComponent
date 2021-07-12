import { useContext } from "react";
import { ThemeContext } from "./ContextExample";

const ThemedButton = () => {
  const theme = useContext(ThemeContext);
  console.log("theme", theme);
  return (
    <div className={theme === "dark" ? "dark-theme" : "light-theme"}>
      Theme changes
    </div>
  );
};

export default ThemedButton;
