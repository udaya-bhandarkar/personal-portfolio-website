import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Certifications } from "./components/Certifications";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";
import { Toaster } from "sonner@2.0.3";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Toaster position="bottom-center" richColors />
    </div>
  );
}