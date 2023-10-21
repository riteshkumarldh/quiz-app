import { useState } from "react";

export default function SelectBox() {
  const [open, setOpen] = useState(false);

  const toggleSelect = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="field">
      <label htmlFor="type" className="field__label">
        Select type
      </label>
      <input
        onClick={toggleSelect}
        readOnly
        type="text"
        name="type"
        id="type"
        className="field__input"
      />

      <ul className={`field__options ${open ? "show" : ""}`}>
        <li className="field__options--single">First</li>
        <li className="field__options--single">First</li>
        <li className="field__options--single">First</li>
        <li className="field__options--single">First</li>
        <li className="field__options--single">First</li>
      </ul>
    </div>
  );
}
