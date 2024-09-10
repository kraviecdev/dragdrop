import React from "react";
import { InputI } from "../../../_utils/interfaces.ts";
import "./formInput.css";

const FormInput = <T extends HTMLInputElement & HTMLTextAreaElement>({
  htmlFor,
  label,
  value,
  params,
  textarea,
  onValueChange,
}: InputI) => {
  const [inputVal, setInputVal] = React.useState(value);

  const handleChange = (e: React.ChangeEvent<T>) => {
    const value = e.target.value;
    setInputVal(value);
    onValueChange(value);
  };

  return (
    <div className="form-control">
      <label htmlFor={htmlFor} className="form-label">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={htmlFor}
          value={inputVal}
          onChange={handleChange}
          {...params}
        />
      ) : (
        <input
          id={htmlFor}
          value={inputVal}
          onChange={handleChange}
          {...params}
        />
      )}
    </div>
  );
};

export default FormInput;
