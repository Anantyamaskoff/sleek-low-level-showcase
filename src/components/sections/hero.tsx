
import { useState, useEffect, useRef } from "react";
import { Linkedin, Github, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

// Roles for typing animation (longest sets container width)
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
  // For emoji wiggle
  const [wiggle, setWiggle] = useState(true);
  useEffect(() => {
    const wiggleTimer = setInterval(() => setWiggle(w => !w), 700);
    return () => clearInterval(wiggleTimer);
  }, []);
  // Reserve width to max role so it never jumps/breaks to new line
  const maxRoleLen = roles.reduce((a, b) => a.length > b.length ? a : b, "");

  return (
    <section className="pt-16 pb-16 px-4 flex items-center min-h-[80vh]">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row gap-14 md:gap-20 items-center md:items-start justify-center">
        {/* LEFT COLUMN */}
        <div className="flex-1 flex flex-col items-center md:items-end justify-center w-full max-w-sm md:max-w-none">
          {/* Profile Photo */}
          <div className="relative mb-8 flex flex-col items-center w-full">
            <img
              src="/src/images/image.jpg"
              alt="Profile"
              className="w-60 h-60 md:w-72 md:h-72 object-cover rounded-full border-4 border-white dark:border-card shadow-xl bg-white"
              style={{ marginBottom: "38px" }}
            />
            {/* College Card */}
            <div
              className="w-[340px] md:w-[410px] bg-background/95 shadow-lg border rounded-2xl flex items-center px-6 py-4 gap-4 z-10"
              style={{
                minWidth: 280,
                maxWidth: "98vw",
                marginTop: "18px",
                justifyContent: "flex-start"
              }}
            >
              <img
                src="/src/images/infineon.jpg"
                alt="University Logo"
                className="h-12 w-12 rounded-full border object-cover mr-3 ml-1"
              />
              <div className="flex flex-col min-w-0 flex-1 pl-2">
                <div className="font-bold truncate text-lg md:text-xl">
                  yadayada school of engineering
                </div>
                <div className="text-xs md:text-sm text-muted-foreground truncate">
                  computer science engineering
                </div>
              </div>
            </div>
          </div>
          {/* Social Buttons below college card, full width, aligned */}
          <div className="flex flex-row gap-4 w-[340px] md:w-[410px] mx-auto justify-center mt-5 mb-2">
            <Button asChild className="flex-1 min-w-0 justify-center" variant="outline" size="sm">
              <a href="https://linkedin.com" target="_blank" rel="noopener" className="flex items-center gap-2 px-0 w-full justify-center">
                <Linkedin /> LinkedIn
              </a>
            </Button>
            <Button asChild className="flex-1 min-w-0 justify-center" variant="outline" size="sm">
              <a href="/resume.pdf" target="_blank" rel="noopener" className="flex items-center gap-2 px-0 w-full justify-center">
                <FileText /> Resume
              </a>
            </Button>
            <Button asChild className="flex-1 min-w-0 justify-center" variant="outline" size="sm">
              <a href="https://github.com" target="_blank" rel="noopener" className="flex items-center gap-2 px-0 w-full justify-center">
                <Github /> GitHub
              </a>
            </Button>
          </div>
        </div>
        {/* RIGHT COLUMN */}
        <div className="flex-1 flex flex-col items-center md:items-start justify-center w-full mt-24 md:mt-0 min-w-0">
          <h1 className="text-3xl sm:text-4xl font-bold flex items-center gap-2 mb-5 whitespace-nowrap">
            Hi, I’m yadayada{" "}
            <span
              className={`inline-block text-4xl origin-[70%_70%] transition-transform ${wiggle ? "rotate-[12deg]" : "-rotate-[8deg]"}`}
              aria-label="waving hand"
              role="img"
            >👋</span>
          </h1>
          {/* Typing: fixed width block so never wraps (even if longer/shorter text) */}
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
