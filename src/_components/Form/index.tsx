import FormInput from "./FormInput";
import Button from "./Button";

const Form = () => {
  return (
    <form>
      <FormInput
        htmlFor="title"
        label="Title"
        textarea={false}
        params={{
          type: "text",
          id: "title",
        }}
      />

      <FormInput
        htmlFor="description"
        label="Description"
        textarea={true}
        params={{
          id: "description",
          rows: 3,
        }}
      />

      <FormInput
        htmlFor="people"
        label="People"
        textarea={false}
        params={{
          id: "people",
          type: "number",
          step: 1,
          min: 0,
          max: 10,
        }}
      />

      <Button name="ADD PROJECT" />
    </form>
  );
};

export default Form;
