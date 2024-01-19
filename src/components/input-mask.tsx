import React from "react";
import { cn } from "../utils/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  change: (value: string) => void;
}

const InputMask = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, change, value, ...props }, ref) => {
    const formatCurrency = (inputValue: string): string => {
      let formattedValue = inputValue.replace(/\D/g, "");
      formattedValue = (Number(formattedValue) / 100)
        .toFixed(2)
        .replace(".", ",");
      return `R$ ${formattedValue}`;
    };

    const handleInputChange = (
      event: React.ChangeEvent<HTMLInputElement>
    ): void => {
      const inputValue = event.target.value;
      const formattedValue = formatCurrency(inputValue);
      change(formattedValue);
    };

    return (
      <input
        className={cn("px-4 py-1 border rounded-md outline-none", className)}
        type={type}
        value={value ?? ""}
        onChange={handleInputChange}
        ref={ref}
        {...props}
      />
    );
  }
);

InputMask.displayName = "InputMask";

export { InputMask };
