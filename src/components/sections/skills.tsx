
import { Code2, Database, Cpu, Terminal, Server, Wrench } from "lucide-react";

export function Skills() {
  const skills = [
    {
      category: "Languages",
      icon: Code2,
      items: ["C", "C++", "Assembly", "Python", "Verilog"],
    },
    {
      category: "Systems",
      icon: Cpu,
      items: ["Embedded Systems", "RTOS", "Linux Kernel", "Device Drivers"],
    },
    {
      category: "Tools",
      icon: Wrench,
      items: ["GDB", "QEMU", "Oscilloscope", "Logic Analyzer"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div key={skill.category} className="p-6 rounded-lg border bg-card hover:border-purple-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <skill.icon className="w-6 h-6 text-purple-500" />
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-muted-foreground">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
