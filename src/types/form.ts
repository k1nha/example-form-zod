import type { SubmitHandler } from "react-hook-form";

export type FormType<T extends Record<string, any>> = {
  validationSchema: any;
  onSubmitForm: SubmitHandler<T>;
  id: string;
  disabled?: boolean;
};
