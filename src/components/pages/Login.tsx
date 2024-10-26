import { z } from "zod";
import { LoginForm } from "../forms/login.form";
import { SubmitHandler } from "react-hook-form";

export const loginFormSchema = z.object({
  name: z.string().min(4),
  password: z.string().min(4),
});

export type LoginFormData = z.infer<typeof loginFormSchema>;

export function Login() {
  const handleSubmit: SubmitHandler<LoginFormData> = () => {
    alert("Workss!");
  };

  return (
    <div className="space-y-2 mt-2">
      <LoginForm
        onSubmit={handleSubmit}
        validationSchema={loginFormSchema}
        id="login-form"
      />

      <button
        type="submit"
        form="login-form"
        className="w-full p-2 rounded-md bg-yellow-100 hover:bg-yellow-200 duration-300 transition-all"
      >
        Submit form
      </button>
    </div>
  );
}
