export default function Input() {
  return (
    <div className="field">
      <label htmlFor="name" className="field__label">
        Full Name
      </label>
      <input type="text" name="name" id="name" className="field__input" />
    </div>
  );
}
