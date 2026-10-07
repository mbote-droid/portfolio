import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Focus } from "@/components/Focus";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Credentials } from "@/components/Credentials";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Focus />
        <Skills />
        <Projects />
        <Credentials />
      </main>
      <Footer />
    </>
  );
}
