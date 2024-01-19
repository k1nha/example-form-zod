import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormType } from "../types/form";
import { z } from "zod";

import { exampleSchema } from "./example-module";

export type FormExampleProps = FormType<typeof exampleSchema>;
export function FormExample({
  onSubmitForm,
  validationSchema,
  disabled,
  id,
}: FormExampleProps) {
  const { register, handleSubmit } = useForm<z.infer<typeof validationSchema>>({
    resolver: zodResolver(validationSchema),
  });

  return (
    <form id={id} onSubmit={handleSubmit(onSubmitForm)}>
      <input
        type="text"
        id=""
        {...register("name")}
        placeholder="Nome"
        disabled={disabled}
        className="border rounded-md px-2 outline-none ring text-black"
      />
    </form>
  );
}
