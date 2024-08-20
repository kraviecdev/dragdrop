import React from "react";
import "./section.css";

interface SectionProps {
  children: React.ReactNode;
  modifier?: string;
}

const Section = ({ children, modifier }: SectionProps) => {
  return (
    <section className={`section ${modifier && "section--" + modifier}`}>
      <header>
        <h2>{`${modifier}  projects`}</h2>
      </header>
      {children}
    </section>
  );
};

export default Section;
