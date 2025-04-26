
import { Calendar, ArrowLeft } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

export function Experience() {
  const [selectedExp, setSelectedExp] = useState<number | null>(null);

  const experiences = [
    {
      title: "Embedded Systems Trainee",
      company: "Infineon Technologies",
      period: "2024 - 2024",
      description: "Contributed to microcontroller firmware development and hardware testing procedures.",
      logo: "/src/images/infineon.jpg",
      companyUrl: "https://www.infineon.com",
      detailedDescription: "During the summer of 2024, I had the privilege of being selected as one of 25 participants for Infineon Technologies’ intensive embedded systems training program in Bangalore. Over 14 weekends, we delved into the fundamentals of embedded development using PSoC microcontrollers, gaining hands-on experience in bare-metal programming, hardware interfacing, and debugging. This immersive program provided a strong foundation in low-level system design, from memory management to real-time peripheral control. Through practical labs and projects, I developed key embedded systems skills, including writing linker scripts, startup code, and Makefiles for bare-metal environments. I also implemented UART, SPI, and I2C communication protocols, debugged firmware using on-chip debuggers, and built simple device drivers. This experience deepened my understanding of computer architecture, ARM Cortex-M internals, and efficient embedded programming—preparing me for real-world firmware and low-level software challenges.",
      image: "/src/images/infineon.jpg",
      photos: [
        "/src/images/infineon.jpg",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=300",
      ]
    },
    {
      title: "Avionics Intern",
      company: "Space Technology and Aeronautical Rocketry",
      period: "2023 - 2023",
      description: "Working on embedded systems and flight control software for experimental rockets. Developing and testing avionics systems.",
      logo: "/src/images/starlab.jpg",
      companyUrl: "https://in.linkedin.com/company/starlabsurat1",
      detailedDescription: "Led the development of flight control algorithms, implemented real-time telemetry systems, and conducted extensive hardware testing procedures.",
      image: "/src/images/starlab.jpg",
      photos: [
        "/src/images/starlab.jpg",
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300",
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-accent/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={exp.title} 
                 className="relative p-6 rounded-lg border bg-card hover:border-purple-500/50 transition-all cursor-pointer group"
                 onClick={() => setSelectedExp(index)}>
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                  <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" 
                     className="block w-12 h-12 rounded-full overflow-hidden hover:scale-110 transition-transform"
                     onClick={(e) => e.stopPropagation()}>
                    <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
                  </a>
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-purple-500">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{exp.period}</span>
                </div>
              </div>
              <p className="text-muted-foreground">{exp.description}</p>
              <div className="absolute bottom-3 right-6">
                <span className="text-purple-500 text-sm underline group-hover:opacity-90 cursor-pointer">View more</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Dialog for expanded experience card */}
      <Dialog open={selectedExp !== null} onOpenChange={() => setSelectedExp(null)}>
        {selectedExp !== null && (
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-auto">
            <DialogHeader className="flex flex-row items-center gap-3 mb-2">
              <button
                className="inline-flex items-center gap-2 px-3 py-1 bg-accent hover:bg-accent/80 rounded-full transition-colors text-purple-600"
                aria-label="Back to experience list"
                onClick={() => setSelectedExp(null)}
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
              <DialogTitle>
                {experiences[selectedExp].title} at {experiences[selectedExp].company}
              </DialogTitle>
            </DialogHeader>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 min-w-[160px]">
                <div className="flex flex-wrap gap-2 mb-3">
                  {experiences[selectedExp].photos?.map((src, idx) => (
                    <img key={idx} src={src} alt="exp-photo" className="rounded-lg w-28 h-20 object-cover" />
                  ))}
                </div>
                <img 
                  src={experiences[selectedExp].logo}
                  alt="company-logo"
                  className="w-14 h-14 object-cover rounded-full border border-purple-200 mx-auto"
                />
              </div>
              <div className="flex-[2] max-h-[260px] overflow-y-auto pr-2">
                <p className="text-muted-foreground">{experiences[selectedExp].detailedDescription}</p>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
