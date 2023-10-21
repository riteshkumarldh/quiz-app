import { Link } from "react-router-dom";

import ThemeSwitcher from "./ThemeSwitcher";

import Avatar from "../assets/avatar.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__profile">
        <Link to="/profile" className="navbar__profile--img">
          <img src={Avatar} alt="profile" />
        </Link>
      </div>
      <ThemeSwitcher />
    </nav>
  );
}
