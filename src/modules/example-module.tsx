import { object, z } from "zod";
import { FormExample } from "./example-form";
import { SubmitHandler } from "react-hook-form";

export const exampleSchema = object({
  name: z.string(),
});

export function ExampleModule() {
  const handleSubmitExampleForm: SubmitHandler<typeof exampleSchema> = (
    data: any
  ) => {
    console.log(data);
  };

  return (
    <>
      <FormExample
        id="example-form"
        onSubmitForm={handleSubmitExampleForm}
        validationSchema={exampleSchema}
      />
      <button
        form="example-form"
        type="submit"
        className="p-1 py-2 border rounded-md">
        Enviar
      </button>
    </>
  );
}
