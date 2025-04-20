
import { useState, useEffect, useRef } from "react";
import { Linkedin, Github, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

// Roles for typing animation (longest sets container width)
const roles = [
  "Low-Level Software Engineer",
  "Embedded Systems Engineer",
  "Kernel Developer"
];

function useTypingAnimation(words: string[], speed = 50, pause = 1500) {
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
  const typing = useTypingAnimation(roles, 40, 1300);
  // For emoji wiggle
  const [wiggle, setWiggle] = useState(true);
  useEffect(() => {
    const wiggleTimer = setInterval(() => setWiggle(w => !w), 700);
    return () => clearInterval(wiggleTimer);
  }, []);
  // Reserve width to max role so it never jumps/breaks to new line
  const maxRoleLen = roles.reduce((a, b) => a.length > b.length ? a : b, "");
  
  return (
    <section className="py-12 px-4 flex items-center min-h-[80vh]">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row gap-10 md:gap-24 items-center md:items-start justify-center">
        {/* LEFT COLUMN */}
        <div className="flex-1 flex flex-col items-center md:items-end justify-center w-full max-w-sm md:max-w-none">
          {/* Photo & College Card */}
          <div className="relative w-48 h-48 md:w-56 md:h-56 mb-5">
            <img
              src="/src/images/image.jpg"
              alt="Profile"
              className="w-full h-full object-cover rounded-full border-4 border-white dark:border-card shadow-xl"
            />
            {/* College Card */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[105%] translate-y-2 md:translate-y-4 bg-background/95 shadow-lg border rounded-xl flex flex-col items-stretch px-3 pt-4 pb-2 z-10">
              <div className="flex items-center gap-3 mb-1">
                <img
                  src="/src/images/infineon.jpg"
                  alt="University Logo"
                  className="h-8 w-8 rounded-full border object-cover"
                />
                <div className="flex flex-col min-w-0">
                  <div className="font-bold truncate">yadayada school of engineering</div>
                  <div className="text-xs text-muted-foreground truncate">computer science engineering</div>
                </div>
              </div>
              <div className="flex w-full justify-center gap-2 mt-3 pb-1">
                <Button asChild className="flex-1 min-w-24 justify-center" variant="outline" size="sm">
                  <a href="https://linkedin.com" target="_blank" rel="noopener" className="flex items-center gap-2 px-0">
                    <Linkedin /> LinkedIn
                  </a>
                </Button>
                <Button asChild className="flex-1 min-w-24 justify-center" variant="outline" size="sm">
                  <a href="/resume.pdf" target="_blank" rel="noopener" className="flex items-center gap-2 px-0">
                    <FileText /> Resume
                  </a>
                </Button>
                <Button asChild className="flex-1 min-w-24 justify-center" variant="outline" size="sm">
                  <a href="https://github.com" target="_blank" rel="noopener" className="flex items-center gap-2 px-0">
                    <Github /> GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* RIGHT COLUMN */}
        <div className="flex-1 flex flex-col items-center md:items-start justify-center w-full mt-16 md:mt-0 min-w-0">
          <h1 className="text-3xl sm:text-4xl font-bold flex items-center gap-2 mb-5 whitespace-nowrap">
            Hi, I’m yadayada{" "}
            <span
              className={`inline-block text-4xl origin-[70%_70%] transition-transform ${
                wiggle ? "rotate-[12deg]" : "-rotate-[8deg]"
              }`}
              aria-label="waving hand"
              role="img"
            >👋</span>
          </h1>
          {/* Typing with reserved width to prevent jumping, on one line always */}
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold h-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-400 mb-2 min-h-[2.5rem]"
            style={{ minWidth: `${maxRoleLen.length + 4}ch`, maxWidth: `${maxRoleLen.length + 6}ch`, whiteSpace: 'nowrap', overflow: "hidden" }}
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
      {/* Typing cursor anim CSS */}
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
