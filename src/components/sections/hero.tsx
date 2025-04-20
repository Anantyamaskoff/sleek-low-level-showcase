
import { useState, useEffect, useRef } from "react";
import { Linkedin, Github, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      // Typing
      if (text.length < currentWord.length) {
        timer = setTimeout(() => setText(currentWord.slice(0, text.length + 1)), speed);
      } else {
        timer = setTimeout(() => setIsDeleting(true), pause);
      }
    } else {
      // Deleting
      if (text.length > 0) {
        timer = setTimeout(() => setText(text.slice(0, text.length - 1)), speed / 2);
      } else {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [text, isDeleting, index, words]);

  return text || " ";
}

export function Hero() {
  const typing = useTypingAnimation(roles, 40, 1300);
  // Emoji wiggling effect
  const [wiggle, setWiggle] = useState(true);
  useEffect(() => {
    const wiggleTimer = setInterval(() => setWiggle(w => !w), 700);
    return () => clearInterval(wiggleTimer);
  }, []);

  return (
    <section className="py-20 px-4 flex items-center min-h-screen">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row gap-12 md:gap-24 items-center md:items-stretch">
        {/* LEFT COLUMN */}
        <div className="flex-1 flex flex-col items-center md:items-start justify-center relative w-full max-w-md md:max-w-none">
          <div className="relative w-64 h-64 md:w-80 md:h-80 mb-7">
            {/* Profile Photo */}
            <img
              src="/src/images/image.jpg"
              alt="Profile"
              className="w-full h-full object-cover rounded-3xl border-4 border-white dark:border-card shadow-xl transition-transform duration-300"
            />
            {/* Thin Card - overlay at bottom */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[90%] py-2 px-4 flex items-center rounded-xl bg-background/90 shadow-lg border gap-3"
                 style={{backdropFilter: "blur(4px)"}}>
              {/* University logo left */}
              <img
                src="/src/images/infineon.jpg"
                alt="University Logo"
                className="h-10 w-10 rounded-full border mr-3 object-cover"
              />
              <div className="flex flex-col flex-1 min-w-0">
                <div className="font-bold truncate">yadayada school of engineering</div>
                <div className="text-sm text-muted-foreground truncate">computer science engineering</div>
              </div>
            </div>
          </div>
          {/* Links */}
          <div className="flex flex-row w-full justify-center md:justify-start gap-3 mt-7">
            <Button asChild className="w-36" variant="outline">
              <a href="https://linkedin.com" target="_blank" rel="noopener" className="flex items-center gap-2">
                <Linkedin />
                LinkedIn
              </a>
            </Button>
            <Button asChild className="w-36" variant="outline">
              <a href="/resume.pdf" target="_blank" rel="noopener" className="flex items-center gap-2">
                <FileText />
                Resume
              </a>
            </Button>
            <Button asChild className="w-36" variant="outline">
              <a href="https://github.com" target="_blank" rel="noopener" className="flex items-center gap-2">
                <Github />
                GitHub
              </a>
            </Button>
          </div>
        </div>
        {/* RIGHT COLUMN */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start mt-12 md:mt-0">
          <h1 className="text-3xl sm:text-4xl font-bold flex items-center gap-2 mb-5">
            Hi, I’m yadayada{" "}
            <span
              className={`inline-block text-4xl origin-[70%_70%] transition-transform ${
                wiggle ? "rotate-[12deg]" : "-rotate-[8deg]"
              }`}
              aria-label="waving hand"
              role="img"
            >👋</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold h-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-400 mb-2 min-h-[2.5rem]">
            {typing}
            <span className="blinking-cursor ml-1 text-purple-600">|</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg mt-5">
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
