export default function Input({ label, id, type, placeholder }) {
  return (
    <div className="field">
      <label htmlFor={id} className="field__label">
        {label}
      </label>
      <input
        placeholder={placeholder}
        type={type}
        name={id}
        id={id}
        className="field__input"
      />
    </div>
  );
}
