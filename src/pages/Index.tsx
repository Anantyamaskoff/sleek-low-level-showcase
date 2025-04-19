
import { Hero } from "@/components/sections/hero";
import { SkillsRibbon } from "@/components/sections/skills-ribbon";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { YoutubeSection } from "@/components/sections/youtube";
import { Certifications } from "@/components/sections/certifications";
import { Hobbies } from "@/components/sections/hobbies";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <SkillsRibbon />
        <Experience />
        <Projects />
        <Certifications />
        <YoutubeSection />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
