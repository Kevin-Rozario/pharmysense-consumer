import type { Route } from "./+types/Home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pharmysense | Home" },
    { name: "description", content: "Welcome to Pharmysense" },
  ];
}

export default function Home() {
  return (
    <>
      <h1 className="text-2xl font-bold">Home</h1>
    </>
  );
}
