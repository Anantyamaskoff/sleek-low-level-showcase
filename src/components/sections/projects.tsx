
import { Github, ExternalLink } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Linux Device Drivers",
      description: "Custom device drivers for Raspberry Pi, demonstrating kernel module development and hardware interaction.",
      tech: ["C", "Linux Kernel", "GPIO", "I2C"],
      image: "/placeholder.svg",
      github: "#",
      demo: "#"
    },
    {
      title: "16-bit x86 Bootloader",
      description: "A minimal bootloader implementation in QEMU, exploring low-level system initialization.",
      tech: ["Assembly", "QEMU", "x86"],
      image: "/placeholder.svg",
      github: "#"
    },
    {
      title: "Virtual Machine",
      description: "Work in progress: Building a simple VM and compiler in C for educational purposes.",
      tech: ["C", "Compiler Design", "VM"],
      image: "/placeholder.svg",
      github: "#"
    },
    {
      title: "Compiler",
      description: "Work in progress: Building a simple VM and compiler in C for educational purposes.",
      tech: ["C", "Compiler Design", "VM"],
      image: "/placeholder.svg",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 min-h-screen relative">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="space-y-[25vh]"> {/* Increased spacing between cards */}
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group sticky top-24 bg-card border rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 max-w-5xl mx-auto shadow-lg" /* Widened cards */
              style={{
                zIndex: projects.length - index,
              }}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-sm rounded-full bg-accent text-accent-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-6">
                  <a href={project.github} className="flex items-center gap-2 hover:text-purple-500 transition-colors">
                    <Github className="w-5 h-5" />
                    View Code
                  </a>
                  {project.demo && (
                    <a href={project.demo} className="flex items-center gap-2 hover:text-purple-500 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
