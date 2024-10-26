/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FieldValues, SubmitHandler } from "react-hook-form";

// export type FormType<T extends Record<string, any>> = {
//   validationSchema: any;
//   onSubmitForm: SubmitHandler<T>;
//   id: string;
//   disabled?: boolean;
// };

export interface FormType<T extends FieldValues> {
  data?: T;
  onSubmit: SubmitHandler<T>;
  disabled?: boolean;
  id?: string;
  validationSchema?: any;
}
