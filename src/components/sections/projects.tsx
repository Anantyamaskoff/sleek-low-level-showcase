
import { Github, ExternalLink, X } from "lucide-react";
import { useState, useEffect } from "react";

const projects = [
  {
    title: "Linux Device Drivers",
    description: "Custom device drivers for Raspberry Pi, demonstrating kernel module development and hardware interaction.",
    tech: ["C", "Linux Kernel", "GPIO", "I2C"],
    image: "/placeholder.svg",
    github: "#",
    demo: "#",
    longDesc: "This project covers the implementation of custom Linux device drivers for sensors on the Raspberry Pi platform. It covers module programming, hardware protocols, and real-world deployment. (Add more details here if available.)",
    images: ["/placeholder.svg", "/src/images/infineon.jpg"]
  },
  {
    title: "16-bit x86 Bootloader",
    description: "A minimal bootloader implementation in QEMU, exploring low-level system initialization.",
    tech: ["Assembly", "QEMU", "x86"],
    image: "/placeholder.svg",
    github: "#",
    demo: undefined,
    longDesc: "Wrote a custom bootloader for x86 systems emulated using QEMU. Explored the boot process, BIOS interrupts, and real-mode to protected-mode transitions.",
    images: ["/placeholder.svg", "/src/images/starlab.jpg"]
  },
  {
    title: "Virtual Machine",
    description: "Work in progress: Building a simple VM and compiler in C for educational purposes.",
    tech: ["C", "Compiler Design", "VM"],
    image: "/placeholder.svg",
    github: "#",
    demo: undefined,
    longDesc: "Developing a simple virtual machine architecture and a custom compiler for an educational language.",
    images: ["/placeholder.svg", "/src/images/infineon.jpg"]
  }
];

export function Projects() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  // Prevent background scrolling on modal open
  useEffect(() => {
    if (openIdx !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [openIdx]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).classList.contains("proj-modal-overlay")) {
      setOpenIdx(null);
    }
  };

  return (
    <section id="projects" className="py-20 px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <div key={project.title} className="relative">
              {openIdx !== idx && (
                <div 
                  className="group bg-card border rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 cursor-pointer hover:scale-[1.02]"
                  onClick={() => setOpenIdx(idx)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                    style={{ aspectRatio: '4/3' }}
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
            </div>
          ))}
        </div>
        {openIdx !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 proj-modal-overlay"
            onClick={handleOverlayClick}
          >
            <div className="relative bg-card w-[96vw] max-w-2xl rounded-xl shadow-xl flex flex-col animate-fade-in overflow-hidden">
              <button
                className="absolute top-2 right-3 text-muted-foreground hover:text-foreground focus:outline-none z-20 flex items-center gap-1"
                onClick={() => setOpenIdx(null)}
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
              {/* Top 4:3 Image */}
              <img
                src={projects[openIdx].images[0]}
                alt="Project Main"
                className="w-full h-56 sm:h-72 object-cover border-b"
                style={{ aspectRatio: '4/3' }}
              />
              <div className="p-6 pt-4 flex-1 max-h-[56vh] overflow-y-auto scroll-smooth">
                <h3 className="text-2xl font-bold mb-1">{projects[openIdx].title}</h3>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                  <li>{projects[openIdx].description}</li>
                  <li>
                    {projects[openIdx].tech.join(", ")}
                  </li>
                </ul>
                <div className="flex gap-2 mb-3 flex-wrap">
                  {projects[openIdx].images.slice(1).map((img, i) => (
                    <img key={i} src={img} alt="Project Media" className="h-24 w-auto rounded-lg object-cover border" />
                  ))}
                </div>
                <p className="mb-6">{projects[openIdx].longDesc}</p>
                <div className="flex gap-6 mt-auto">
                  <a href={projects[openIdx].github} className="flex items-center gap-2 hover:text-purple-500 transition-colors">
                    <Github className="w-5 h-5" />
                    View Code
                  </a>
                  {projects[openIdx].demo && (
                    <a href={projects[openIdx].demo} className="flex items-center gap-2 hover:text-purple-500 transition-colors">
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
    </section>
  );
}
