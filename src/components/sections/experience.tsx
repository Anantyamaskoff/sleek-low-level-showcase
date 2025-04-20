
import { Calendar, X } from "lucide-react";
import { useState } from "react";

const experiences = [
  {
    title: "Embedded Systems Trainee",
    company: "Infineon Technologies",
    period: "2024",
    description: "Contributed to microcontroller firmware development and hardware testing procedures.",
    logo: "/src/images/infineon.jpg",
    detailedDescription: "Participated in Infineon’s intensive embedded systems training program: gained strong foundations in microcontrollers, real-time programming, linker scripts, UART, SPI & I2C communication, and device drivers.",
    images: ["/src/images/infineon.jpg"],
  },
  {
    title: "Avionics Intern",
    company: "Space Technology and Aeronautical Rocketry",
    period: "2023",
    description: "Worked on embedded systems and flight control software for experimental rockets.",
    logo: "/src/images/starlab.jpg",
    detailedDescription: "Developed flight control algorithms, implemented real-time telemetry, and conducted extensive hardware testing.",
    images: ["/src/images/starlab.jpg"],
  },
];

export function Experience() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="experience" className="py-20 px-4 bg-accent/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={exp.title} className="relative">
              <div
                className="p-6 rounded-lg border bg-card hover:border-purple-500/50 transition-all transform hover:scale-102"
              >
                <div className="flex items-center gap-4 mb-2">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-12 h-12 rounded-full object-cover border mr-2"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-purple-500 text-sm">{exp.company}</p>
                  </div>
                  <div className="flex items-center ml-auto text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
                <button
                  onClick={() => setExpanded(idx)}
                  className="mt-3 text-purple-600 underline text-sm hover:text-purple-800 transition"
                >
                  View More
                </button>
              </div>
              {/* Expanded Overlay */}
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
                    <div className="flex gap-4 items-center mb-4">
                      <img src={exp.logo} alt={exp.company} className="w-14 h-14 rounded-xl object-cover mr-2" />
                      <div>
                        <h3 className="text-2xl font-semibold">{exp.title}</h3>
                        <p className="text-purple-500">{exp.company}</p>
                      </div>
                    </div>
                    {exp.images && exp.images.length > 0 && (
                      <div className="flex flex-wrap gap-3 mb-4">
                        {exp.images.map((img, i) => (
                          <img
                            src={img}
                            alt={`Experience detail ${i + 1}`}
                            key={i}
                            className="rounded-lg shadow h-36 object-cover"
                            style={{maxWidth: '50%'}}
                          />
                        ))}
                      </div>
                    )}
                    <div className="text-muted-foreground whitespace-pre-line" style={{overflowY: "auto"}}>
                      {exp.detailedDescription}
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
