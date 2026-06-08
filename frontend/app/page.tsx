import Hero from "./components/Hero";
import Pipeline from "./components/Pipeline";
import AIAgents from "./components/AIAgents";
import Features from "./components/Features";
import TechStack from "./components/TechStack";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Pipeline />
      <AIAgents />
      <Features />
      <TechStack />
      <CTA />
      <Footer />
    </main>
  );
}
