
export function SkillsRibbon() {
  const skills = [
    "C", "C++", "Assembly", "Python", "Verilog",
    "Embedded Systems", "RTOS", "Linux Kernel", "Device Drivers",
    "GDB", "QEMU", "Oscilloscope", "Logic Analyzer"
  ];

  return (
    <div className="w-full overflow-hidden py-4 my-8 rotate-[-2deg] bg-accent/30">
      <div className="animate-scroll flex whitespace-nowrap">
        {[...skills, ...skills].map((skill, index) => (
          <span
            key={index}
            className="mx-4 text-lg font-medium text-purple-600 dark:text-purple-400 hover:scale-110 transition-transform"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
