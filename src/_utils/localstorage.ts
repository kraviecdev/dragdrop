import { ProjectInput, SectionInput } from "./types.ts";

const localstorageSectionsKey: string = "sections";
const localstorageProjectsKey: string = "projects";

export const saveLocalstorageProjects = (projects: ProjectInput[]) => {
  localStorage.setItem(localstorageProjectsKey, JSON.stringify(projects));
};

export const saveLocalstorageSections = (sections: SectionInput[]) => {
  localStorage.setItem(localstorageSectionsKey, JSON.stringify(sections));
};

export const getProjectsFromLocalStorage = () => {
  const storedProjects = localStorage.getItem(localstorageProjectsKey);

  if (storedProjects) {
    try {
      const projects: ProjectInput[] = JSON.parse(storedProjects);
      return Array.isArray(projects) ? projects : [];
    } catch (e) {
      console.error(e);
      return [];
    }
  }
  return [];
};

export const getSectionsFromLocalStorage = () => {
  const storedSections = localStorage.getItem(localstorageSectionsKey);

  if (storedSections) {
    try {
      const sections: ProjectInput[] = JSON.parse(storedSections);
      return Array.isArray(sections) ? sections : [];
    } catch (e) {
      console.error(e);
      return [];
    }
  }
  return [];
};
