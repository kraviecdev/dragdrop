import FormInput from "./FormInput";
import Button from "./Button";
import React, { useRef } from "react";

interface FormProps {
  onFormSubmit: (data: FormData) => void;
}

interface FormData {
  title: string;
  description: string;
  people: number;
}

const Form: React.FC<FormProps> = ({ onFormSubmit }) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const peopleRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.target as HTMLFormElement;
    const titleVal: string = titleRef.current!.value;
    const descriptionVal: string = descriptionRef.current!.value;
    const peopleVal: number = parseInt(peopleRef.current!.value, 10);

    const newTask: FormData = {
      title: titleVal.trim(),
      description: descriptionVal.trim(),
      people: peopleVal,
    };

    onFormSubmit(newTask);

    form.reset();
  };

  return (
    <form id="user-input" onSubmit={handleSubmit}>
      <FormInput
        htmlFor="title"
        label="Title"
        ref={titleRef}
        params={{
          type: "text",
          id: "title",
          placeholder: "Name your task",
          required: true,
        }}
      />

      <FormInput
        htmlFor="description"
        label="Description"
        textarea={true}
        ref={descriptionRef}
        params={{
          id: "description",
          rows: 3,
          placeholder: "Enter description",
          required: true,
        }}
      />

      <FormInput
        htmlFor="people"
        label="People"
        ref={peopleRef}
        params={{
          id: "people",
          type: "number",
          step: 1,
          min: 0,
          max: 10,
          defaultValue: 0,
          required: true,
        }}
      />

      <Button name="ADD PROJECT" />
    </form>
  );
};

export default Form;
