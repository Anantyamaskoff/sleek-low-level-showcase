
import { Calendar, ArrowLeft, X } from "lucide-react";
import { useState, useEffect } from "react";

const experiences = [
  {
    title: "Embedded Systems Trainee",
    company: "Infineon Technologies",
    period: "2024",
    description: "Contributed to microcontroller firmware development and hardware testing procedures.",
    logo: "/src/images/infineon.jpg",
    companyUrl: "https://www.infineon.com",
    details: [
      "Selected as 1 of 25 for Infineon's embedded systems program in Bangalore.",
      "Hands-on experience with PSoC microcontrollers, bare-metal programming, linker scripts, Makefiles, UART/SPI/I2C comms.",
      "Key skills: firmware debugging, device drivers, ARM Cortex-M programming."
    ],
    images: ["/src/images/infineon.jpg", "/src/images/starlab.jpg"],
    mainImage: "/src/images/infineon.jpg",
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
    images: ["/src/images/starlab.jpg", "/src/images/infineon.jpg"],
    mainImage: "/src/images/starlab.jpg",
    longDescription: `Led the development of flight control algorithms... (add full description as required)`
  }
];

export function Experience() {
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

  // Modal close by overlay click (even if anywhere outside card)
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).classList.contains('exp-modal-overlay')) {
      setOpenIdx(null);
    }
  };

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
                </div>
              )}
            </div>
          ))}
        </div>
        {openIdx !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 exp-modal-overlay"
            onClick={handleOverlayClick}
          >
            <div className="relative bg-card w-[96vw] max-w-4xl rounded-xl shadow-xl flex flex-col animate-fade-in overflow-hidden">
              <button
                className="absolute top-2 right-3 text-muted-foreground hover:text-foreground focus:outline-none z-20 flex items-center gap-1"
                onClick={() => setOpenIdx(null)}
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
              {/* Feature 4:3 Top Image */}
              <img
                src={experiences[openIdx].mainImage || experiences[openIdx].images[0]}
                alt="Main visual"
                className="w-full h-56 sm:h-72 object-cover border-b"
                style={{ aspectRatio: '4/3' }}
              />
              {/* Details (make only this scrollable!) */}
              <div className="p-6 pt-4 flex-1 max-h-[56vh] overflow-y-auto scroll-smooth">
                <h3 className="text-2xl font-bold mb-1">{experiences[openIdx].title} <span className="text-purple-600">@ {experiences[openIdx].company}</span></h3>
                <p className="text-sm text-muted-foreground mb-4">{experiences[openIdx].period}</p>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                  {experiences[openIdx].details.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
                <div className="flex gap-2 mb-3 flex-wrap">
                  {experiences[openIdx].images.slice(1).map((img, i) => (
                    <img key={i} src={img} alt="Project Media" className="h-24 w-auto rounded-lg object-cover border" />
                  ))}
                </div>
                <p>{experiences[openIdx].longDescription}</p>
              </div>
              <div className="h-3" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
