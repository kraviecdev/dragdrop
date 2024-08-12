export interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

export interface ProjectInput {
  title: string;
  description: string;
  people: number;
}
