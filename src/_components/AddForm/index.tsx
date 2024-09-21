import React from "react";
import Form from "../../_assets/Form";
import FormInput from "../../_assets/Form/FormInput";
import Button from "../../_assets/Button";
import { validate } from "../../_utils/validate.ts";
import { Validatable, Data } from "../../_utils/types.ts";

interface AddFormProps {
  onFormSubmit: (data: Data) => void;
  project: boolean;
}

const AddForm = ({ onFormSubmit, project }: AddFormProps) => {
  const initialState = {
    value: "",
    errorMessage: "",
  };

  const [isOpen, setIsOpen] = React.useState(false);
  const [titleValue, setTitleValue] = React.useState<{
    value: string;
    errorMessage: string;
  }>(initialState);
  const [descValue, setDescValue] = React.useState<{
    value: string;
    errorMessage: string;
  }>(initialState);

  const handleTitleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const titleValidation: Validatable = {
      required: true,
      minLength: 3,
      maxLength: 16,
      value: e.target.value,
    };

    if (!validate(titleValidation)) {
      setTitleValue({
        value: e.target.value,
        errorMessage:
          "Title must have at least 3 characters, max 16 characters",
      });
    } else {
      setTitleValue({ value: e.target.value, errorMessage: "" });
    }
  };

  const handleDescChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const descValidation: Validatable = {
      required: true,
      minLength: 5,
      maxLength: 256,
      value: e.target.value,
    };

    if (!validate(descValidation)) {
      setDescValue({
        value: e.target.value,
        errorMessage: "Description must have at least 5 characters, max 256.",
      });
    } else {
      setDescValue({ value: e.target.value, errorMessage: "" });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const data: Data = {
      description: descValue?.value,
      title: titleValue?.value,
    };

    onFormSubmit(data);
    setIsOpen(false);
    setDescValue(initialState);
    setTitleValue(initialState);
  };

  return (
    <Form
      isOpen={isOpen}
      handleClick={() => setIsOpen(!isOpen)}
      handleSubmit={handleSubmit}
      buttonAddNew={`+ add new ${project ? "project" : "section"}`}
    >
      <FormInput
        name="title"
        value={titleValue?.value}
        params={{
          placeholder: "Enter your title",
          required: true,
          minLength: 3,
          maxLength: 16,
        }}
        textarea={false}
        handleChange={handleTitleChange}
        errorMessage={titleValue?.errorMessage}
      />
      {project && (
        <FormInput
          name="description"
          value={descValue?.value}
          params={{
            placeholder: "Enter your description",
            required: true,
            rows: 3,
            minLength: 5,
            maxLength: 256,
          }}
          textarea={true}
          handleChange={handleDescChange}
          errorMessage={descValue?.errorMessage}
        />
      )}
      <Button
        name={`submit ${project ? "project" : "section"}`}
        type="submit"
      />
    </Form>
  );
};

export default AddForm;
