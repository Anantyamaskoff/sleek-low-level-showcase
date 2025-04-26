
import { Github, ExternalLink, X } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Linux Device Drivers",
    description: "Custom device drivers for Raspberry Pi, demonstrating kernel module development and hardware interaction.",
    tech: ["C", "Linux Kernel", "GPIO", "I2C"],
    image: "/placeholder.svg",
    github: "#",
    demo: "#",
    details: "This project involved writing kernel modules in C for the Raspberry Pi, working directly with hardware interfaces.",
    images: ["/placeholder.svg"],
  },
  {
    title: "16-bit x86 Bootloader",
    description: "A minimal bootloader implementation in QEMU, exploring low-level system initialization.",
    tech: ["Assembly", "QEMU", "x86"],
    image: "/placeholder.svg",
    github: "#",
    details: "Wrote x86 assembly to build a bootloader, which is emulated on QEMU for easy testing of system startup.",
    images: ["/placeholder.svg"],
  },
  {
    title: "Virtual Machine",
    description: "Work in progress: Building a simple VM and compiler in C for educational purposes.",
    tech: ["C", "Compiler Design", "VM"],
    image: "/placeholder.svg",
    github: "#",
    details: "Writing a virtual machine and minimal compiler as a playground for low-level language implementation concepts.",
    images: ["/placeholder.svg"],
  },
];

export function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {projects.map((project, idx) => (
            <div key={project.title} className="relative">
              <div className="group bg-card border rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 shadow-lg">
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
                  <div className="flex gap-6 flex-wrap">
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
                  <button
                    onClick={() => setExpanded(idx)}
                    className="mt-5 text-purple-600 underline text-sm hover:text-purple-800 transition"
                  >
                    View More
                  </button>
                </div>
              </div>
              {/* Expanded Card */}
              {expanded === idx && (
                <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/30">
                  <div className="relative bg-card rounded-xl max-w-lg w-full p-8 shadow-2xl animate-fade-in overflow-y-auto max-h-[80vh]">
                    <button
                      className="absolute right-5 top-5 text-2xl p-1 rounded-full text-purple-500 hover:bg-accent transition"
                      aria-label="Close"
                      onClick={() => setExpanded(null)}
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                    {project.images && project.images.length > 0 && (
                      <div className="flex flex-wrap gap-3 mb-4">
                        {project.images.map((img, i) => (
                          <img
                            src={img}
                            alt={`Project detail ${i + 1}`}
                            key={i}
                            className="rounded-lg shadow h-36 object-cover"
                            style={{maxWidth: '50%'}}
                          />
                        ))}
                      </div>
                    )}
                    <div className="mb-4 text-muted-foreground whitespace-pre-line" style={{overflowY: "auto"}}>
                      {project.details}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
