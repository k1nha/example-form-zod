import { Controller, useForm } from "react-hook-form";
import { InputMask } from "./components/input-mask";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const formSchema = z.object({
  currency: z
    .string()
    .min(1, "Obrigatorio")
    .refine((value) => /^R\$ \d+\,\d{2}$/.test(value)),
});

type FormSchema = z.infer<typeof formSchema>;

function App() {
  const [result, setResult] = useState({});
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  function SubmitForm(data: FormSchema) {
    setResult({
      currency: +data.currency.replace("R$ ", "").replace(",", ""),
    });
  }

  return (
    <main className="flex items-center justify-center flex-col h-screen bg-slate-950 text-white">
      <form onSubmit={handleSubmit(SubmitForm)}>
        <Controller
          control={control}
          name="currency"
          render={({ field }) => (
            <InputMask
              change={(value) => field.onChange(value)}
              placeholder="R$ 99"
              className="text-black"
              value={field.value}
            />
          )}
        />

        <button type="submit" className="border rounded-md p-1">
          Enviar
        </button>

        {errors.currency && <p>{errors.currency.message}</p>}

        <pre>{JSON.stringify(result, null, 2)}</pre>
      </form>
    </main>
  );
}

export default App;
