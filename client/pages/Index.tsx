import VideoBackground from "@/components/VideoBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

export default function Index() {
  return (
    <div className="relative min-h-screen text-foreground font-sans selection:bg-primary selection:text-foreground">
      <VideoBackground />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>

      <footer className="py-8 px-6 text-center border-t border-border bg-background/40 backdrop-blur-md">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} ANKITHA. Built with passion & data.
        </p>
      </footer>
    </div>
  );
}
