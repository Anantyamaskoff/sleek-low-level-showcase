
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center py-20 px-4">
      <div className="text-center space-y-6 max-w-4xl mx-auto">
        <div className="relative w-40 h-40 mx-auto mb-8 group">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-purple-700/20 animate-pulse"></div>
          <img 
            src="/src/images/image.jpg" 
            alt="Profile" 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 mix-blend-multiply" 
            style={{
              filter: "saturate(0.9) contrast(1.1)",
              maskImage: "radial-gradient(circle, black 70%, transparent 100%)"
            }}
          />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold animate-fade-in">Hi, I'm Yada yada 👋</h1>
        <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-400 animate-fade-in my-0 py-[10px] md:text-6xl">
          Low-Level Software Engineer
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground animate-fade-in delay-200">
          Embedded Systems • Linux Kernel Development • Firmware • Avionics
        </p>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in delay-300">
          I'm passionate about building robust and efficient systems from the ground up. 
          With expertise in embedded systems and low-level programming, 
          I love tackling complex challenges in firmware development and system architecture.
        </p>
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in delay-300">
          <a href="#contact" className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
            Contact Me
          </a>
          <a href="#projects" className="px-6 py-2 border border-purple-600 text-purple-600 dark:text-purple-400 rounded-full hover:bg-purple-600/10 transition-colors">
            View Projects
          </a>
          <Button variant="outline" className="rounded-full" onClick={() => window.open('/resume.pdf', '_blank')}>
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
}
