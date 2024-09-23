import React, { useEffect } from "react";
import { ProjectInput, Data, SectionInput } from "./_utils/types.ts";
import Section from "./_assets/Section";
import ProjectsList from "./_components/ProjectsList";
import AddForm from "./_components/AddForm";
import "./App.css";
import {
  getProjectsFromLocalStorage,
  getSectionsFromLocalStorage,
  saveLocalstorageProjects,
  saveLocalstorageSections,
} from "./_utils/localstorage.ts";

const App: React.FC = () => {
  const [sections, setSections] = React.useState<SectionInput[]>(
    getSectionsFromLocalStorage(),
  );
  const [projects, setProjects] = React.useState<ProjectInput[]>(
    getProjectsFromLocalStorage(),
  );

  const handleFormSubmit = (data: Data) => {
    if (data) {
      if (data.sectionId) {
        const newProject = new ProjectInput(data);

        setProjects((prev) => [...prev, newProject]);
      } else {
        if (
          sections.some(
            (section) =>
              section.title.toUpperCase() === data.title!.toUpperCase(),
          )
        ) {
          alert("This section already exists");
          return;
        }

        const newSection = new SectionInput(data);
        setSections((prev) => [...prev, newSection]);
      }
    }
  };

  const deleteSection = (id: string) => {
    const sectionIndex = sections.findIndex((section) => section.id === id);

    const sectionsAfterDel = [
      ...sections.slice(0, sectionIndex),
      ...sections.slice(sectionIndex + 1),
    ];

    setSections(sectionsAfterDel);
    setProjects((prev) => prev.filter((project) => project.sectionId !== id));
  };

  const deleteItem = (id: string) => {
    const projectIndex = projects.findIndex((project) => project.id === id);

    const projectsAfterDel = [
      ...projects.slice(0, projectIndex),
      ...projects.slice(projectIndex + 1),
    ];

    setProjects(projectsAfterDel);
  };

  const handleItemDrop = (item: ProjectInput, sectionId: string) => {
    if (item.sectionId === sectionId) {
      return;
    }

    //Find project index
    const projectIndex = projects.findIndex(
      (project) => project.id === item.id,
    );

    if (projectIndex !== -1) {
      //state update
      setProjects((prev) => [
        ...prev.slice(0, projectIndex),
        {
          ...projects[projectIndex],
          sectionId: sectionId,
        },
        ...prev.slice(projectIndex + 1),
      ]);
    }
  };

  useEffect(() => {
    saveLocalstorageProjects(projects);
    saveLocalstorageSections(sections);
  }, [sections, projects]);

  return (
    <>
      <h1>Drag & Drop Task Organizer</h1>

      <main>
        {sections.length > 0 &&
          sections.map((section, index) => (
            <Section
              onClickHandler={() => deleteSection(section.id)}
              key={index}
              name={section.title}
            >
              <AddForm
                onFormSubmit={handleFormSubmit}
                project={true}
                sectionId={section.id}
              />
              <ProjectsList
                onItemDrop={handleItemDrop}
                sectionId={section.id}
                items={projects.filter(
                  (project: ProjectInput) => project.sectionId === section.id,
                )}
                deleteProject={deleteItem}
              />
            </Section>
          ))}
        <AddForm onFormSubmit={handleFormSubmit} project={false} />
      </main>
    </>
  );
};

export default App;
