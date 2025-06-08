
import { useState, useEffect } from "react";
import { Twitter, Github, FileText, MessageCircle } from "lucide-react";
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
    <section className="pt-32 pb-16 px-4 flex items-center min-h-[70vh] overflow-x-hidden">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row gap-8 md:gap-20 items-center md:items-start justify-center">
        <div className="flex-1 flex flex-col items-center md:items-end justify-center w-full max-w-sm md:max-w-none relative">
          <div className="relative mb-4 flex flex-col items-center w-full">
            <div className="relative">
              <img
                src="/src/images/image.jpg"
                alt="Profile"
                className="w-40 h-40 md:w-44 md:h-44 object-cover rounded-full border-4 border-white dark:border-card shadow-xl bg-white"
                style={{ marginBottom: "24px" }}
              />
              <div className="absolute -top-8 -right-8 md:-top-10 md:-right-10">
                <Button
                  asChild
                  size="sm"
                  className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 shadow-lg"
                >
                  <a href="mailto:your.email@example.com" className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4" />
                    <span className="text-xs whitespace-nowrap">send me a mail</span>
                  </a>
                </Button>
              </div>
            </div>
            <div className="w-[280px] md:w-[320px] bg-background/95 shadow-lg border rounded-2xl flex items-center px-4 py-2.5 gap-3 mb-3 hover:shadow-xl transition-shadow">
              <img
                src="/src/images/infineon.jpg"
                alt="University Logo"
                className="h-8 w-8 rounded-full border object-cover"
              />
              <div className="flex flex-col min-w-0 flex-1">
                <div className="font-bold truncate text-sm md:text-base">
                  yadayada school of engineering
                </div>
                <div className="text-xs text-muted-foreground truncate">
                  computer science engineering
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-2 w-[280px] md:w-[320px] mx-auto justify-center">
              <Button asChild variant="outline" size="sm" className="flex-1 min-w-0 bg-blue-500 hover:bg-blue-600 text-white border-blue-500">
                <a href="https://twitter.com" target="_blank" rel="noopener" className="flex items-center gap-1 px-0 w-full justify-center">
                  <Twitter className="h-4 w-4" /> X
                </a>
              </Button>
              <Button asChild variant="outline" size="sm" className="flex-1 min-w-0 bg-purple-500 hover:bg-purple-600 text-white border-purple-500">
                <a href="/resume.pdf" target="_blank" rel="noopener" className="flex items-center gap-1 px-0 w-full justify-center">
                  <FileText className="h-4 w-4" /> Resume
                </a>
              </Button>
              <Button asChild variant="outline" size="sm" className="flex-1 min-w-0 bg-[#2EA44F] hover:bg-[#2EA44F]/90 text-white border-[#2EA44F]">
                <a href="https://github.com" target="_blank" rel="noopener" className="flex items-center gap-1 px-0 w-full justify-center">
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center md:items-start justify-center w-full mt-4 md:mt-16 min-w-0">
          <h1 className="text-3xl sm:text-4xl font-bold flex items-center gap-2 mb-5 whitespace-nowrap">
            Hi, I'm yadayada{" "}
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
            I'm passionate about building robust and efficient systems from the ground up, with deep expertise in embedded systems, firmware, and kernel programming.
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
