
import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Linux Device Drivers",
    description: "Custom device drivers for Raspberry Pi, demonstrating kernel module development and hardware interaction.",
    tech: ["C", "Linux Kernel", "GPIO", "I2C"],
    image: "/placeholder.svg",
    github: "#",
    demo: "#",
    longDesc: "This project covers the implementation of custom Linux device drivers for sensors on the Raspberry Pi platform. It covers module programming, hardware protocols, and real-world deployment. (Add more details here if available.)",
    images: ["/placeholder.svg"]
  },
  {
    title: "16-bit x86 Bootloader",
    description: "A minimal bootloader implementation in QEMU, exploring low-level system initialization.",
    tech: ["Assembly", "QEMU", "x86"],
    image: "/placeholder.svg",
    github: "#",
    demo: undefined,
    longDesc: "Wrote a custom bootloader for x86 systems emulated using QEMU. Explored the boot process, BIOS interrupts, and real-mode to protected-mode transitions.",
    images: ["/placeholder.svg"]
  },
  {
    title: "Virtual Machine",
    description: "Work in progress: Building a simple VM and compiler in C for educational purposes.",
    tech: ["C", "Compiler Design", "VM"],
    image: "/placeholder.svg",
    github: "#",
    demo: undefined,
    longDesc: "Developing a simple virtual machine architecture and a custom compiler for an educational language.",
    images: ["/placeholder.svg"]
  }
];

export function Projects() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {projects.map((project, idx) => (
            <div key={project.title} className="relative">
              {/* Regular Card */}
              {openIdx !== idx && (
                <div className="group bg-card border rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 shadow-lg cursor-pointer"
                  onClick={() => setOpenIdx(idx)}
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
                    <button className="mt-7 text-purple-600 font-semibold underline" tabIndex={-1}>
                      View More
                    </button>
                  </div>
                </div>
              )}
              {/* Expanded Card */}
              {openIdx === idx && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
                  <div className="relative bg-card w-[95vw] max-w-2xl h-[90vh] rounded-xl shadow-xl overflow-hidden flex flex-col animate-fade-in">
                    {/* Close button */}
                    <button
                      className="absolute top-2 right-3 text-xl text-muted-foreground hover:text-foreground focus:outline-none z-20"
                      onClick={() => setOpenIdx(null)}
                      aria-label="Close Project"
                    >✕</button>
                    {/* Images */}
                    <div className="flex gap-2 p-4 pb-2 overflow-x-auto max-h-36">
                      {project.images.map((img, i) => (
                        <img key={i} src={img} alt={project.title} className="h-32 w-auto rounded-lg object-cover border" />
                      ))}
                    </div>
                    {/* Details */}
                    <div className="p-6 pt-2 overflow-y-auto flex-1">
                      <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                      <ul className="list-disc pl-5 mb-4 space-y-2">
                        <li>{project.description}</li>
                        <li>
                          {project.tech.join(", ")}
                        </li>
                      </ul>
                      <p className="mb-6">{project.longDesc}</p>
                      <div className="flex gap-6 mt-auto">
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
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
