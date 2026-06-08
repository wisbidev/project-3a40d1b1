import Hero from "./components/Hero";
import Pipeline from "./components/Pipeline";
import AIAgents from "./components/AIAgents";
import Features from "./components/Features";
import TechStack from "./components/TechStack";

export default function Home() {
  return (
    <main>
      <Hero />
      <Pipeline />
      <AIAgents />
      <Features />
      <TechStack />
    </main>
  );
}
