import { useTheme } from "../utils/hooks/useTheme";

export default function ThemeSwitcher() {
  const { theme, toggleTheme: changeTheTheme } = useTheme();

  const toggleTheme = () => {
    changeTheTheme();
  };

  return (
    <button
      onClick={toggleTheme}
      className={`navbar__theme ${theme === "dark" ? "darkmode" : ""}`}
    >
      <span className="navbar__theme--switcher"></span>
    </button>
  );
}
