import { useForm } from "react-hook-form";
import { FormType } from "../../types/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { loginFormSchema } from "../pages/Login";
import { Input } from "../ui/input";

type LoginFormProps = FormType<z.infer<typeof loginFormSchema>>;

export function LoginForm({
  validationSchema,
  id,
  onSubmit,
  data,
}: LoginFormProps) {
  const form = useForm({
    resolver: zodResolver(validationSchema),
    defaultValues: data,
  });

  return (
    <form id={id} onSubmit={form.handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        <Input {...form.register("name")} placeholder="Name" />
        {form.formState.errors.name && (
          <p className="text-red-500 text-sm">
            {form.formState.errors.name.message}
          </p>
        )}

        <Input
          {...form.register("password")}
          placeholder="password"
          type="password"
        />
        {form.formState.errors.password && (
          <p className="text-red-500 text-sm">
            {form.formState.errors.password.message}
          </p>
        )}
      </div>
    </form>
  );
}
