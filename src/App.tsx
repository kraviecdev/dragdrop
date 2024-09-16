import React from "react";
import { ProjectInput, Data, SectionInput } from "./_utils/types.ts";
import { projectInputs, sectionInputs } from "./_utils/inputs.ts";
import Form from "./_components/Form";
import Section from "./_components/Section";
import List from "./_components/List";
import "./App.css";

const App: React.FC = () => {
  const [sections, setSections] = React.useState<SectionInput[]>([]);
  const [projects, setProjects] = React.useState<ProjectInput[]>([]);

  const handleFormSubmit = (data: Data) => {
    if (data) {
      if (data.description) {
        const newProject = new ProjectInput(data);
        setProjects((prev) => [...prev, newProject]);
      } else {
        const newSection = new SectionInput(data);
        setSections((prev) => [...prev, newSection]);
      }
    }
  };

  const handleItemDrop = (item: ProjectInput, targetSection: string) => {
    if (item.section === targetSection) {
      return;
    }

    //Find project index
    const projectIndex = projects.findIndex(
      (project) => project.id === item.id,
    );

    if (projectIndex !== -1) {
      //copy projects
      const updatedProjects = [...projects];

      //select project with found index, copy it and change isActive
      updatedProjects[projectIndex] = {
        ...updatedProjects[projectIndex],
        section: targetSection,
      };

      //state update
      setProjects(updatedProjects);
    }
  };

  return (
    <main>
      {sections.length > 0 &&
        sections.map((section, index) => (
          <Section key={index} name={section.title}>
            <Form
              onFormSubmit={handleFormSubmit}
              formInputs={projectInputs}
              buttonAddNew="+ add new project"
              buttonSubmit="submit new project"
            />
            <List
              onItemDrop={handleItemDrop}
              targetList={section.title}
              items={projects.filter(
                (project: ProjectInput) => project.section === section.title,
              )}
            />
          </Section>
        ))}
      <Form
        onFormSubmit={handleFormSubmit}
        formInputs={sectionInputs}
        buttonAddNew="+ Add New Section"
        buttonSubmit="submit section"
      />
    </main>
  );
};

export default App;
