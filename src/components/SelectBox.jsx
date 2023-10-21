import { useState } from "react";

export default function SelectBox({ options, label, id }) {
  const [open, setOpen] = useState(false);

  const toggleSelect = () => {
    setOpen((prev) => !prev);
  };

  const removeShowClass = () => {
    setOpen(false);
  };

  return (
    <div className="field">
      <label htmlFor={id} className="field__label">
        {label}
      </label>
      <input
        onClick={toggleSelect}
        onBlur={removeShowClass}
        readOnly
        type="text"
        name={id}
        id={id}
        className="field__input"
      />

      <ul className={`field__options ${open ? "show" : ""}`}>
        {options?.map((option) => {
          return (
            <li key={option.id} className="field__options--single">
              {option.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
