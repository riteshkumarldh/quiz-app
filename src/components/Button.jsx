export default function Button({ children, type, onClick }) {
  return (
    <button type={type} onClick={onClick} className="custom__button">
      {children}
    </button>
  );
}
