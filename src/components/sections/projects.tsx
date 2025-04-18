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
    <section id="projects" className="py-20 px-4 bg-accent/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group rounded-lg overflow-hidden bg-card border hover:border-purple-500/50 transition-all transform hover:-translate-y-2 duration-300 perspective-1000"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 text-sm rounded-full bg-accent text-accent-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} className="flex items-center gap-2 text-sm hover:text-purple-500">
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  {project.demo && (
                    <a href={project.demo} className="flex items-center gap-2 text-sm hover:text-purple-500">
                      <ExternalLink className="w-4 h-4" />
                      Demo
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
