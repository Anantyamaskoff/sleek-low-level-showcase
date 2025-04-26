
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import { useState } from "react";

export function Projects() {
  const [selectedProj, setSelectedProj] = useState<number | null>(null);

  const projects = [
    {
      title: "Linux Device Drivers",
      description: "Custom device drivers for Raspberry Pi, demonstrating kernel module development and hardware interaction.",
      tech: ["C", "Linux Kernel", "GPIO", "I2C"],
      image: "/placeholder.svg",
      github: "#",
      demo: "#",
      photos: [
        "/placeholder.svg",
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300",
      ],
      details: "Created custom Linux kernel modules for the Raspberry Pi, including real hardware testing, DMA, and interrupt service routines. Used GPIO/I2C/SPI peripherals and debugged driver lifecycles for edge cases."
    },
    {
      title: "16-bit x86 Bootloader",
      description: "A minimal bootloader implementation in QEMU, exploring low-level system initialization.",
      tech: ["Assembly", "QEMU", "x86"],
      image: "/placeholder.svg",
      github: "#",
      photos: [
        "/placeholder.svg"
      ],
      details: "Built a custom bootloader entirely in x86 assembly, with BIOS interrupts, FAT filesystem mounting, and direct VGA output, running in QEMU virtualized hardware."
    },
    {
      title: "Virtual Machine",
      description: "Work in progress: Building a simple VM and compiler in C for educational purposes.",
      tech: ["C", "Compiler Design", "VM"],
      image: "/placeholder.svg",
      github: "#",
      photos: [
        "/placeholder.svg"
      ],
      details: "Simple bytecode-VM implemented in C with basic instruction set: mov, add, jmp, print. Compiler pipeline parses arithmetic to VM bytecode."
    },
    {
      title: "Compiler",
      description: "Work in progress: Building a simple VM and compiler in C for educational purposes.",
      tech: ["C", "Compiler Design", "VM"],
      image: "/placeholder.svg",
      github: "#",
      photos: [
        "/placeholder.svg"
      ],
      details: "Coded a mini compiler for arithmetic expressions, supporting codegen to bytecode, with symbol table and lexer/parser stack."
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="group bg-card border rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 shadow-lg relative cursor-pointer"
              onClick={() => setSelectedProj(idx)}
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
                <div className="absolute bottom-4 right-6 z-10">
                  <span className="text-purple-600 font-bold underline group-hover:opacity-90 cursor-pointer">View more</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Pop-up/overlay for expanded project card */}
      {selectedProj !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="bg-card p-8 rounded-2xl max-w-3xl w-full shadow-lg relative flex flex-col max-h-[90vh]">
            <button
              className="flex items-center mb-4 text-purple-600 hover:text-purple-800 transition-colors bg-accent px-3 rounded-full py-1 self-start gap-2"
              aria-label="Back to projects"
              onClick={() => setSelectedProj(null)}
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col gap-2 min-w-[150px]">
                <img 
                  src={projects[selectedProj].image} 
                  alt="project cover"
                  className="rounded-lg w-32 h-32 object-cover mb-1 border"
                />
                <div className="flex flex-wrap gap-2">
                  {projects[selectedProj].photos?.map((src, idx) => (
                    <img key={idx} src={src} alt="Project extra" className="rounded-lg w-24 h-16 object-cover" />
                  ))}
                </div>
              </div>
              <div className="flex-1 max-h-[260px] overflow-y-auto pr-2">
                <h4 className="text-xl font-bold mb-2">{projects[selectedProj].title}</h4>
                <p className="text-muted-foreground mb-3">{projects[selectedProj].details}</p>
                <div className="flex flex-wrap gap-3 mb-5">
                  {projects[selectedProj].tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-sm rounded-full bg-accent text-accent-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={projects[selectedProj].github} className="flex items-center gap-2 text-purple-600 hover:text-purple-800">
                    <Github className="w-5 h-5" />
                    View Code
                  </a>
                  {projects[selectedProj].demo && (
                    <a href={projects[selectedProj].demo} className="flex items-center gap-2 text-purple-600 hover:text-purple-800">
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
