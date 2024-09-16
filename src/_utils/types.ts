import { nanoid } from "nanoid";

export interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

export interface InputI {
  name: string;
  value: string | number | undefined;
  params: {
    [key: string]: number | string | boolean;
  };
  textarea: boolean;
}

export interface Data {
  title?: string;
  description?: string;
  people?: number;
  sectionName?: string;
}

export class ProjectInput {
  id: string;
  title: string;
  description: string;
  people: number;
  section: string;

  constructor(data: Data) {
    this.id = nanoid();
    this.title = data.title || "";
    this.description = data.description || "";
    this.people = data.people || 0;
    this.section = data.sectionName || "";
  }
}

export class SectionInput {
  id: string;
  title: string;
  projects: [];

  constructor(data: Data) {
    this.id = nanoid();
    this.title = data.title || "";
    this.projects = [];
  }
}
