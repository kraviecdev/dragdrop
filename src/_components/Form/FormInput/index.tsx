import React from "react";
import "./formInput.css";

type InputHTMLParams = React.InputHTMLAttributes<HTMLInputElement>;
type TextareaHTMLParams = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

interface BaseInputProps {
  htmlFor: string;
  label: string;
}

interface TextareaProps extends BaseInputProps {
  textarea: true;
  params: TextareaHTMLParams;
}

interface InputProps extends BaseInputProps {
  textarea: false;
  params: InputHTMLParams;
}

type FormInputProps = TextareaProps | InputProps;

const FormInput = ({ htmlFor, label, textarea, params }: FormInputProps) => {
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
