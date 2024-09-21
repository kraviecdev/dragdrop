import { InputI } from "../../../_utils/types.ts";
import "./formInput.css";

const FormInput = ({
  name,
  value,
  params,
  textarea,
  handleChange,
  errorMessage,
}: InputI) => {
  return (
    <div className={`form-control ${errorMessage && "form-control--error"}`}>
      <label htmlFor={name} className="form-label">
        {name}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          {...params}
        />
      ) : (
        <input
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          {...params}
        />
      )}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default FormInput;
