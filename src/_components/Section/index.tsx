import React from "react";
import "./section.css";

interface SectionProps {
  modifier?: string;
  children: React.ReactNode;
}

const Section = ({ modifier, children }: SectionProps) => {
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
