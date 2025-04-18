
import { Calendar } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Avionics Intern",
      company: "Space Technology and Aeronautical Rocketry",
      period: "2024 - Present",
      description: "Working on embedded systems and flight control software for experimental rockets. Developing and testing avionics systems.",
    },
    {
      title: "Engineering Trainee",
      company: "Infineon Technologies",
      period: "2023 - 2024",
      description: "Contributed to microcontroller firmware development and hardware testing procedures. Worked with embedded systems and low-level programming.",
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-accent/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.title} className="p-6 rounded-lg border bg-card hover:border-purple-500/50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-purple-500">{exp.company}</p>
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
    </section>
  );
}
