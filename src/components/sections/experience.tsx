
import { Calendar } from "lucide-react";
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
      title: "Engineering Trainee",
      company: "Infineon Technologies",
      period: "2023 - 2024",
      description: "Contributed to microcontroller firmware development and hardware testing procedures.",
      logo: "/src/images/infineon.jpg",
      companyUrl: "https://www.infineon.com",
      detailedDescription: "Developed and optimized firmware for automotive microcontrollers, implemented test automation frameworks, and collaborated with cross-functional teams.",
      image: "/src/images/infineon.jpg",
    },
    {
      title: "Avionics Intern",
      company: "Space Technology and Aeronautical Rocketry",
      period: "2024 - Present",
      description: "Working on embedded systems and flight control software for experimental rockets. Developing and testing avionics systems.",
      logo: "/src/images/starlab.jpg",
      companyUrl: "https://in.linkedin.com/company/starlabsurat1",
      detailedDescription: "Led the development of flight control algorithms, implemented real-time telemetry systems, and conducted extensive hardware testing procedures.",
      image: "/src/images/starlab.jpg",
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-accent/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={exp.title} 
                 className="p-6 rounded-lg border bg-card hover:border-purple-500/50 transition-all transform hover:scale-102 cursor-pointer"
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
            </div>
          ))}
        </div>
      </div>

      <Dialog open={selectedExp !== null} onOpenChange={() => setSelectedExp(null)}>
        {selectedExp !== null && (
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{experiences[selectedExp].title} at {experiences[selectedExp].company}</DialogTitle>
            </DialogHeader>
            <div className="mt-4">
              <img 
                src={experiences[selectedExp].image} 
                alt={experiences[selectedExp].company}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-muted-foreground">{experiences[selectedExp].detailedDescription}</p>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
