import { useState, useEffect } from "react";
import { Linkedin, Github, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const roles = [
  "Low-Level Software Engineer",
  "Embedded Systems Engineer",
  "Kernel Developer"
];

function useTypingAnimation(words: string[], speed = 60, pause = 1400) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentWord = words[index];
    if (!isDeleting) {
      if (text.length < currentWord.length) {
        timer = setTimeout(() => setText(currentWord.slice(0, text.length + 1)), speed);
      } else {
        timer = setTimeout(() => setIsDeleting(true), pause);
      }
    } else {
      if (text.length > 0) {
        timer = setTimeout(() => setText(text.slice(0, text.length - 1)), speed / 2);
      } else {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }
    return () => clearTimeout(timer);
  }, [text, isDeleting, index, words]);
  return text || " ";
}

export function Hero() {
  const typing = useTypingAnimation(roles, 44, 1300);
  const [wiggle, setWiggle] = useState(true);
  
  useEffect(() => {
    const wiggleTimer = setInterval(() => setWiggle(w => !w), 700);
    return () => clearInterval(wiggleTimer);
  }, []);

  const maxRoleLen = roles.reduce((a, b) => a.length > b.length ? a : b, "");

  return (
    <section className="min-h-[70vh] flex items-center py-16 px-4">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col items-center md:items-end space-y-8 max-w-[45%] mx-auto">
          <img
            src="/src/images/image.jpg"
            alt="Profile"
            className="w-60 h-60 md:w-72 md:h-72 object-contain rounded-full border-4 border-white shadow-xl"
          />
          <div className="bg-background/95 shadow-lg border rounded-2xl w-full p-6">
            <div className="flex items-center gap-4">
              <img
                src="/src/images/infineon.jpg"
                alt="University Logo"
                className="h-12 w-12 rounded-full border object-cover"
              />
              <div>
                <div className="font-bold text-lg md:text-xl truncate">
                  YadaYada School of Engineering
                </div>
                <div className="text-sm text-muted-foreground truncate">
                  Computer Science Engineering
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <Button asChild variant="outline" className="w-full">
              <a href="https://linkedin.com" target="_blank" rel="noopener" className="flex items-center justify-center gap-2">
                <Linkedin /> LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <a href="/resume.pdf" target="_blank" rel="noopener" className="flex items-center justify-center gap-2">
                <FileText /> Resume
              </a>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <a href="https://github.com" target="_blank" rel="noopener" className="flex items-center justify-center gap-2">
                <Github /> GitHub
              </a>
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-6">
          <h1 className="text-3xl sm:text-4xl font-bold flex items-center gap-2">
            Hi, I'm YadaYada{" "}
            <span className={`inline-block text-4xl transition-transform ${wiggle ? "rotate-[12deg]" : "-rotate-[8deg]"}`}>
              👋
            </span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-400"
              style={{
                minWidth: `${maxRoleLen.length}ch`,
                whiteSpace: "nowrap",
              }}>
            {typing}
            <span className="blinking-cursor ml-1 text-purple-600">|</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg text-center md:text-left">
            I'm passionate about building robust and efficient systems from the ground up, with deep expertise in embedded systems, firmware, and kernel programming.
          </p>
        </div>
      </div>
    </section>
  );
}
