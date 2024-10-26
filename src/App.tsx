import { Login } from "./components/pages/Login";

export default function App() {
  return (
    <main className="flex items-center justify-center flex-col h-screen">
      <div className="border p-5 rounded-md shadow-md w-[400px]">
        <h1 className="font-semibold text-xl">Example Form</h1>

        <Login />
      </div>
    </main>
  );
}
