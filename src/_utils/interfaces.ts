export interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

export interface InputI {
  htmlFor: string;
  label: string;
  value: string | number | undefined;
  params: {
    [key: string]: number | string | boolean;
  };
  textarea: boolean;
  onValueChange: (value: string) => void;
}

export interface ProjectInput {
  id: string;
  title: string;
  description: string;
  people: number;
  section: string;
}
