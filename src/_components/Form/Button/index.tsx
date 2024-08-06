import "./button.css";

interface ButtonProps {
  name: string;
  disabled?: boolean;
}

const Button = ({ disabled, name }: ButtonProps) => {
  return (
    <button type="submit" disabled={disabled}>
      {name}
    </button>
  );
};

export default Button;
