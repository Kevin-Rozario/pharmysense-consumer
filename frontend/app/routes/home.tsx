import type { Route } from "./+types/Home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pharmysense | Home" },
    { name: "description", content: "Welcome to Pharmysense" },
  ];
}

export default function Home() {
  return <div>Pharmysense Home Page</div>;
}
