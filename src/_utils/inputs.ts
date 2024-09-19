import { InputI } from "./types.ts";

export const projectInputs: InputI[] = [
  {
    name: "title",
    value: "",
    params: {
      placeholder: "Enter your title",
      required: true,
      minLength: 3,
      maxLength: 16,
    },
    textarea: false,
  },
  {
    name: "description",
    value: "",
    params: {
      placeholder: "Enter your description",
      required: true,
      rows: 3,
      minLength: 5,
      maxLength: 256,
    },
    textarea: true,
  },
];

export const sectionInputs: InputI[] = [
  {
    name: "title",
    value: "",
    params: {
      placeholder: "Enter your title",
      required: true,
      minLength: 3,
      maxLength: 16,
    },
    textarea: false,
  },
];
