import React, { forwardRef, Ref } from "react";
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
  textarea?: false;
  params: InputHTMLParams;
}

type FormInputProps = TextareaProps | InputProps;

const FormInput = forwardRef<
  HTMLTextAreaElement | HTMLInputElement,
  FormInputProps
>(({ htmlFor, label, textarea, params }, ref) => {
  return (
    <div className="form-control">
      <label htmlFor={htmlFor} className="form-label">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={htmlFor}
          ref={ref as Ref<HTMLTextAreaElement>}
          {...params}
        />
      ) : (
        <input id={htmlFor} ref={ref as Ref<HTMLInputElement>} {...params} />
      )}
    </div>
  );
});

export default FormInput;
