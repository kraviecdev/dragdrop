import React, { useRef } from "react";
import "./form.css";
import FormInput from "./FormInput";
import Button from "./Button";
import { ProjectInput, Validatable } from "../../_utils/interfaces.ts";
import { validate } from "../../_utils/validate.ts";

interface FormProps {
  onFormSubmit: (data: ProjectInput) => void;
}

const Form: React.FC<FormProps> = ({ onFormSubmit }) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const peopleRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.target as HTMLFormElement;

    const titleVal = titleRef.current!.value;
    const descriptionVal = descriptionRef.current!.value;
    const peopleVal = parseInt(peopleRef.current!.value, 10);

    const titleValidatable: Validatable = {
      value: titleVal,
      required: true,
    };

    const descriptionValidatable: Validatable = {
      value: descriptionVal,
      required: true,
      minLength: 5,
    };

    const peopleValidatable: Validatable = {
      value: peopleVal,
      required: true,
      min: 0,
      max: 10,
    };

    if (
      !validate(titleValidatable) ||
      !validate(descriptionValidatable) ||
      !validate(peopleValidatable)
    ) {
      alert("Please enter Valid input");
      return;
    } else {
      const newProject: ProjectInput = {
        title: titleVal.trim(),
        description: descriptionVal.trim(),
        people: peopleVal,
      };

      onFormSubmit(newProject);
    }

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
        }}
      />

      <Button name="ADD PROJECT" />
    </form>
  );
};

export default Form;
