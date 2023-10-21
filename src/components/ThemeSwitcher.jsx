import { useState } from "react";

export default function ThemeSwitcher() {
  const [toggle, setToggle] = useState(true);

  const toggleTheme = () => {
    setToggle((prev) => !prev);
  };

  return (
    <button
      onClick={toggleTheme}
      className={`navbar__theme ${toggle ? "darkmode" : ""}`}
    >
      <span className="navbar__theme--switcher"></span>
    </button>
  );
}
