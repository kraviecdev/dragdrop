import React from "react";
import "./form.css";
import Button from "./Button";
import FormInput from "./FormInput";
import { InputI, Data, Validatable } from "../../_utils/types.ts";
import { validate } from "../../_utils/validate.ts";

interface FormProps {
  onFormSubmit: (data: Data) => void;
  formInputs: InputI[];
  buttonName: string;
}

const Form = ({ onFormSubmit, formInputs, buttonName }: FormProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData);

    const title = (formValues.title as string) || undefined;
    const description = (formValues.description as string) || undefined;
    const people = Number(formValues.people as string) || undefined;

    if (title !== undefined) {
      const titleValidation: Validatable = {
        value: title,
        required: true,
        minLength: 3,
        maxLength: 16,
      };

      if (!validate(titleValidation)) {
        alert(`Title must have at least 3 characters, max 16 characters`);
        return;
      }
    }

    if (description !== undefined) {
      const descriptionValidation: Validatable = {
        value: description,
        required: true,
        minLength: 5,
        maxLength: 256,
      };

      if (!validate(descriptionValidation)) {
        alert("Description must have at least 5 characters");
        return;
      }
    }

    if (people !== undefined) {
      const peopleValidation: Validatable = {
        value: people,
        required: true,
        min: 1,
        max: 10,
      };

      if (!validate(peopleValidation)) {
        alert("You have to assign at least 1 person per project");
        return;
      }
    }

    const formDataObject = {
      title: title,
      description: description ? description : undefined,
      people: people ? people : undefined,
    };

    onFormSubmit(formDataObject);
    form.reset();
  };

  return (
    <form id="user-input" onSubmit={handleSubmit}>
      {formInputs.length > 0 &&
        formInputs.map((input, index) => (
          <FormInput
            key={index}
            name={input.name}
            textarea={input.textarea}
            value={input.value}
            params={input.params}
          />
        ))}
      <Button name={buttonName} />
    </form>
  );
};

export default Form;
