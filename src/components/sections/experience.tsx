
import { Calendar } from "lucide-react";
import { useState } from "react";

const experiences = [
  {
    title: "Embedded Systems Trainee",
    company: "Infineon Technologies",
    period: "2024",
    description: "Contributed to microcontroller firmware development and hardware testing procedures.",
    logo: "/src/images/infineon.jpg",
    companyUrl: "https://www.infineon.com",
    details: [
      "Selected as 1 of 25 for Infineon’s embedded systems program in Bangalore.",
      "Hands-on experience with PSoC microcontrollers, bare-metal programming, linker scripts, Makefiles, UART/SPI/I2C comms.",
      "Key skills: firmware debugging, device drivers, ARM Cortex-M programming."
    ],
    images: ["/src/images/infineon.jpg"],
    longDescription: `During the summer of 2024... (add full description as required)`
  },
  {
    title: "Avionics Intern",
    company: "Space Technology and Aeronautical Rocketry",
    period: "2023",
    description: "Developed embedded systems and flight control software for experimental rockets.",
    logo: "/src/images/starlab.jpg",
    companyUrl: "https://in.linkedin.com/company/starlabsurat1",
    details: [
      "Led flight control algorithms & telemetry systems.",
      "Conducted extensive hardware testing for avionics."
    ],
    images: ["/src/images/starlab.jpg"],
    longDescription: `Led the development of flight control algorithms... (add full description as required)`
  }
];

export function Experience() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="experience" className="py-20 px-4 bg-accent/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={exp.title} className="relative">
              {/* Closed Card */}
              {openIdx !== idx && (
                <div
                  className="group p-6 rounded-lg border bg-card hover:border-purple-500/50 transition-all transform hover:scale-105 cursor-pointer"
                  onClick={() => setOpenIdx(idx)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-4">
                      <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer"
                        className="block w-12 h-12 rounded-full overflow-hidden hover:scale-110 transition-transform"
                        onClick={e => e.stopPropagation()}>
                        <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
                      </a>
                      <div>
                        <h3 className="text-lg font-semibold">{exp.title}</h3>
                        <p className="text-purple-500">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{exp.description}</p>
                  <button className="text-purple-600 font-semibold mt-3 underline" tabIndex={-1}>
                    View More
                  </button>
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
                      aria-label="Back to Experience"
                    >✕</button>
                    {/* Images */}
                    <div className="flex gap-2 p-4 pb-2 overflow-x-auto max-h-36">
                      {exp.images.map((img, i) => (
                        <img key={i} src={img} alt={exp.company} className="h-32 w-auto rounded-lg object-cover border" />
                      ))}
                    </div>
                    {/* Details */}
                    <div className="p-6 pt-2 overflow-y-auto flex-1">
                      <h3 className="text-2xl font-bold mb-1">{exp.title} <span className="text-purple-600">@ {exp.company}</span></h3>
                      <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                      <ul className="list-disc pl-5 mb-4 space-y-2">
                        {exp.details.map((point, j) => (
                          <li key={j}>{point}</li>
                        ))}
                      </ul>
                      <p>{exp.longDescription}</p>
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
