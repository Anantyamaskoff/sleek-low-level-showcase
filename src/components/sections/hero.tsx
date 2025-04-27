import { useState, useEffect, useRef } from "react";
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
    <section className="pt-32 pb-16 px-4 flex items-center min-h-[70vh]">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row gap-8 md:gap-20 items-center md:items-start justify-center">
        <div className="flex-1 flex flex-col items-center md:items-end justify-center w-full max-w-sm md:max-w-none">
          <div className="relative mb-4 flex flex-col items-center w-full">
            <img
              src="/src/images/image.jpg"
              alt="Profile"
              className="w-44 h-44 md:w-48 md:h-48 object-cover rounded-full border-4 border-white dark:border-card shadow-xl bg-white"
              style={{ marginBottom: "24px" }}
            />
            <div className="w-[300px] md:w-[340px] bg-background/95 shadow-lg border rounded-2xl flex items-center px-5 py-3 gap-3 mb-4">
              <img
                src="/src/images/infineon.jpg"
                alt="University Logo"
                className="h-10 w-10 rounded-full border object-cover"
              />
              <div className="flex flex-col min-w-0 flex-1">
                <div className="font-bold truncate text-base md:text-lg">
                  yadayada school of engineering
                </div>
                <div className="text-xs text-muted-foreground truncate">
                  computer science engineering
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-3 w-[300px] md:w-[340px] mx-auto justify-center">
              <Button asChild className="flex-1 min-w-0" variant="outline" size="sm">
                <a href="https://linkedin.com" target="_blank" rel="noopener" className="flex items-center gap-2 px-0 w-full justify-center">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </Button>
              <Button asChild className="flex-1 min-w-0" variant="outline" size="sm">
                <a href="/resume.pdf" target="_blank" rel="noopener" className="flex items-center gap-2 px-0 w-full justify-center">
                  <FileText className="h-4 w-4" /> Resume
                </a>
              </Button>
              <Button asChild className="flex-1 min-w-0" variant="outline" size="sm">
                <a href="https://github.com" target="_blank" rel="noopener" className="flex items-center gap-2 px-0 w-full justify-center">
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center md:items-start justify-center w-full mt-16 md:mt-0 min-w-0">
          <h1 className="text-3xl sm:text-4xl font-bold flex items-center gap-2 mb-5 whitespace-nowrap">
            Hi, I’m yadayada{" "}
            <span
              className={`inline-block text-4xl origin-[70%_70%] transition-transform ${wiggle ? "rotate-[12deg]" : "-rotate-[8deg]"}`}
              aria-label="waving hand"
              role="img"
            >👋</span>
          </h1>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold h-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-400 mb-2 min-h-[2.5rem] transition-all duration-300"
            style={{
              minWidth: `${maxRoleLen.length + 2}ch`,
              maxWidth: `${maxRoleLen.length + 6}ch`,
              whiteSpace: "nowrap",
              overflow: "hidden",
              display: "inline-block",
            }}
          >
            <span>
              {typing}
              <span className="blinking-cursor ml-1 text-purple-600">|</span>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg mt-5 text-center md:text-left">
            I’m passionate about building robust and efficient systems from the ground up, with deep expertise in embedded systems, firmware, and kernel programming.
          </p>
        </div>
      </div>
      <style>
      {`
      .blinking-cursor {
        animation: blink 1s steps(2, start) infinite;
      }
      @keyframes blink {
        to { opacity: 0; }
      }
      `}
      </style>
    </section>
  );
}
