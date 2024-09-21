import "./form.css";
import React from "react";
import Button from "../Button";

interface FormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
  buttonAddNew: string;
  isOpen: boolean;
  handleClick: () => void;
}

const Form = ({
  handleSubmit,
  children,
  buttonAddNew,
  isOpen,
  handleClick,
}: FormProps) => {
  return (
    <div
      className={"wrapper " + `${isOpen ? "wrapper--open" : "wrapper--closed"}`}
    >
      <Button
        name={isOpen ? "Close form" : buttonAddNew}
        onClick={handleClick}
      />

      <form className="form" id="user-input" onSubmit={handleSubmit}>
        {children}
      </form>
    </div>
  );
};

export default Form;
