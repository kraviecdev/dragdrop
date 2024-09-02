import React from "react";
import { ProjectInput } from "./_utils/interfaces.ts";
import Form from "./_components/Form";
import Section from "./_components/Section";
import List from "./_components/List";
import "./App.css";

const App: React.FC = () => {
  const [projects, setProjects] = React.useState<ProjectInput[]>([]);

  const handleFormData = (data: ProjectInput) => {
    setProjects((prev) => [...prev, data]);
  };

  const handleItemDrop = (
    item: ProjectInput,
    targetList: "active" | "finished",
  ) => {
    // check in which list project currently is
    const currentList = item.isActive ? "active" : "finished";

    if (currentList === targetList) {
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
        isActive: !updatedProjects[projectIndex].isActive,
      };

      //state update
      setProjects(updatedProjects);
    }
  };

  return (
    <main>
      <Form onFormSubmit={handleFormData} />
      <Section modifier="active">
        <List
          onItemDrop={handleItemDrop}
          targetList="active"
          items={projects.filter((project: ProjectInput) => project.isActive)}
        />
      </Section>
      <Section modifier="finished">
        <List
          onItemDrop={handleItemDrop}
          targetList="finished"
          items={projects.filter((project: ProjectInput) => !project.isActive)}
        />
      </Section>
    </main>
  );
};

export default App;
