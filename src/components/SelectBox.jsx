import { useState } from "react";

export default function SelectBox({ options, label, id, fields, setFields }) {
  const [open, setOpen] = useState(false);

  const toggleSelect = () => {
    setOpen((prev) => !prev);
  };

  // const removeShowClass = () => {
  //   setOpen(false);
  // };

  const changeQuizSettings = (value) => {
    setFields((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="field">
      <label htmlFor={id} className="field__label">
        {label}
      </label>
      <input
        onClick={toggleSelect}
        // onBlur={removeShowClass}
        readOnly
        type="text"
        name={id}
        id={id}
        className="field__input"
        defaultValue={fields[id] === "any" ? "Any Type" : fields[id]}
      />

      <ul className={`field__options ${open ? "show" : ""}`}>
        {options?.map((option) => {
          return (
            <li
              key={option.id}
              className="field__options--single"
              onClick={() =>
                changeQuizSettings(
                  option.value != undefined ? option.value : option.id
                )
              }
            >
              {option.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
