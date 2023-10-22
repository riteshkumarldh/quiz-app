import { Link } from "react-router-dom";

export default function Button({ children, type, onClick, as, to }) {
  if (as === "link") {
    return (
      <Link to={to} className="custom__button">
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className="custom__button">
      {children}
    </button>
  );
}
