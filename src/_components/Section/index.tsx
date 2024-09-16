import React from "react";
import "./section.css";

interface SectionProps {
  children: React.ReactNode;
  name: string;
}

const Section = ({ children, name }: SectionProps) => {
  return (
    <section className="section">
      <header>
        <h2>{name}</h2>
      </header>
      {children}
    </section>
  );
};

export default Section;
