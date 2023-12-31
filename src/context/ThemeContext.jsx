import { createContext, useEffect, useReducer } from "react";
import { themeReducer, themeState, actionTypes } from "./reducer";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [{ theme }, dispatch] = useReducer(themeReducer, themeState);

  const toggleTheme = () => {
    dispatch({ type: actionTypes.toggleTheme });
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
