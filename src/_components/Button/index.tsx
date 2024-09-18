import "./button.css";

interface ButtonProps {
  name: string;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
}

const Button = ({ name, type, onClick }: ButtonProps) => {
  return (
    <button type={type} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
