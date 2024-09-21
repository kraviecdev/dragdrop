import "./button.css";
import React from "react";

interface ButtonProps {
  name: string;
  className?: string;
  type?: "submit" | "reset" | "button";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ name, className, type, onClick }: ButtonProps) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
