import About from "@/components/home/About";
import Features from "@/components/home/features";
import Hero from "@/components/home/hero";
import Projects from "@/components/home/projects";
import Services from "@/components/home/services";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Features />
      <Projects />
      <About />
    </div>
  );
}
