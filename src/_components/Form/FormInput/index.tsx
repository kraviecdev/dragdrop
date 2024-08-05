import React from "react";
import "./formInput.css";

type InputTextareaHTMLParams = React.HTMLAttributes<HTMLInputElement> &
  React.HTMLAttributes<HTMLTextAreaElement>;

interface InputProps {
  htmlFor: string;
  label: string;
  textarea: boolean;
  params: InputTextareaHTMLParams;
}

const FormInput = ({ htmlFor, label, textarea, params }: InputProps) => {
  return (
    <div className="form-controll">
      <label htmlFor={htmlFor} className="form-label">
        {label}
      </label>
      {textarea ? (
        <textarea id={htmlFor} {...params} />
      ) : (
        <input id={htmlFor} {...params} />
      )}
    </div>
  );
};

export default FormInput;
