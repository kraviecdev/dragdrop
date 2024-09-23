import { nanoid } from "nanoid";
import React from "react";

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
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  errorMessage?: string;
}

export interface Data {
  title?: string;
  description?: string;
  people?: number;
  sectionId?: string;
}

export class ProjectInput {
  id: string;
  title: string;
  description: string;
  sectionId: string;

  constructor(data: Data) {
    this.id = nanoid();
    this.title = data.title!;
    this.description = data.description!;
    this.sectionId = data.sectionId!;
  }
}

export class SectionInput {
  id: string;
  title: string;

  constructor(data: Data) {
    this.id = nanoid();
    this.title = data.title!;
  }
}
