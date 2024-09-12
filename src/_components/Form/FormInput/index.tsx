import React from "react";
import { InputI } from "../../../_utils/types.ts";
import "./formInput.css";

const FormInput = <T extends HTMLInputElement & HTMLTextAreaElement>({
  name,
  value,
  params,
  textarea,
}: InputI) => {
  const [inputVal, setInputVal] = React.useState(value);

  const handleChange = (e: React.ChangeEvent<T>) => {
    const value = e.target.value;
    setInputVal(value);
  };

  return (
    <div className="form-control">
      <label htmlFor={name} className="form-label">
        {name}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          value={inputVal}
          onChange={handleChange}
          {...params}
        />
      ) : (
        <input
          id={name}
          name={name}
          value={inputVal}
          onChange={handleChange}
          {...params}
        />
      )}
    </div>
  );
};

export default FormInput;
