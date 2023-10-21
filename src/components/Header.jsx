import { Link } from "react-router-dom";

import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container container">
        <Link to="/" className="header__logo">
          🎖️Quizy🎖️
        </Link>
        <Navbar />
      </div>
    </header>
  );
}
