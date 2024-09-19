import React from "react";
import "./section.css";
import Button from "../Button";

interface SectionProps {
  children: React.ReactNode;
  name: string;
  onClickHandler: () => void;
}

const Section = ({ children, name, onClickHandler }: SectionProps) => {
  return (
    <section className="section">
      <header>
        <h2>{name}</h2>
        <Button className="delete" name="&#10006;" onClick={onClickHandler} />
      </header>
      {children}
    </section>
  );
};

export default Section;
