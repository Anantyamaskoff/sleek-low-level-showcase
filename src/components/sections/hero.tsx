
import { useRef, useEffect, useState } from "react";
import { Download, Github, Linkedin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const typingVariants = [
  "Low Level Software Engineer",
  "Embedded Systems Engineer",
  "Kernel Developer",
];

function useTypingEffect(words: string[], typingSpeed = 60, deletingSpeed = 35, pause = 1200) {
  const [current, setCurrent] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let typingTimeout: ReturnType<typeof setTimeout>;
    const currentWord = words[current];

    if (!deleting && text.length < currentWord.length) {
      typingTimeout = setTimeout(() => setText(currentWord.slice(0, text.length + 1)), typingSpeed);
    } else if (deleting && text.length > 0) {
      typingTimeout = setTimeout(() => setText(currentWord.slice(0, text.length - 1)), deletingSpeed);
    } else if (!deleting && text.length === currentWord.length) {
      typingTimeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setCurrent((prev) => (prev + 1) % words.length);
    }
    return () => clearTimeout(typingTimeout);
  }, [text, deleting, current, words, typingSpeed, deletingSpeed, pause]);

  return text;
}

export function Hero() {
  const typed = useTypingEffect(typingVariants);

  return (
    <section className="flex min-h-screen items-center justify-center py-20 px-4">
      <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left column: photo, profile card, links */}
        <div className="flex flex-col items-center gap-8">
          <div className="relative w-40 h-40 mx-auto mb-2 group">
            <img 
              src="/src/images/image.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-110 border-4 border-purple-100 shadow-lg" 
            />
          </div>
          {/* Thin profile card */}
          <div className="flex items-center w-[260px] h-[70px] bg-white dark:bg-card rounded-2xl shadow-md px-4 py-2 space-x-4 border">
            <img 
              src="https://upload.wikimedia.org/wikipedia/en/thumb/1/18/Indian_Institute_of_Information_Technology%2C_Surat_Logo.png/220px-Indian_Institute_of_Information_Technology%2C_Surat_Logo.png" 
              alt="IIIT Surat"
              className="h-10 w-10 rounded-lg object-contain bg-white border p-1"
            />
            <div className="flex-1 flex flex-col">
              <span className="font-semibold text-gray-800 dark:text-gray-100 text-lg leading-tight">Yada yada</span>
              <span className="text-xs text-purple-600 font-medium">B.Tech. ECE, IIIT Surat</span>
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <Button
              variant="outline"
              className="rounded-full px-3"
              onClick={() => window.open("/resume.pdf", "_blank")}
              aria-label="Resume"
            >
              <FileText className="w-5 h-5 mr-1" />
              Resume
            </Button>
          </div>
        </div>
        {/* Right column: greeting, animated hi, typing animation */}
        <div className="flex flex-col items-start justify-center pl-2">
          <h1 className="text-2xl sm:text-3xl font-bold animate-fade-in flex items-center gap-2 mb-2">
            Hi, I'm Yada yada{" "}
            <span
              className="inline-block"
              style={{
                animation: "wiggle 0.9s infinite",
                transformOrigin: "70% 70%",
                display: "inline-block",
              }}
              role="img"
              aria-label="waving hand"
            >
              👋
            </span>
          </h1>
          <style>
            {`@keyframes wiggle { 0% { transform: rotate(0deg);} 15% {transform:rotate(18deg);} 30%{transform:rotate(-8deg);} 40%{transform:rotate(14deg);} 50%{transform:rotate(-4deg);} 60%{transform:rotate(12deg);} 70%{transform:rotate(0deg);} 100%{transform:rotate(0deg);} }`}
          </style>
          <div className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-400 flex items-center h-[58px]">
            <span>{typed}</span>
            <span className="ml-2 inline-block w-2 h-8 bg-purple-400 animate-blink" />
          </div>
          <style>
            {`
              @keyframes blink { 0%, 50%, 100% { opacity: 1; } 25%, 75% { opacity: 0; } }
              .animate-blink { animation: blink 1.2s step-end infinite;}
            `}
          </style>
          <p className="text-lg sm:text-xl text-muted-foreground animate-fade-in delay-200 mt-5">
            Embedded Systems • Linux Kernel Development • Firmware • Avionics
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl animate-fade-in delay-300 mt-3">
            I'm passionate about building robust and efficient systems from the ground up. 
            With expertise in embedded systems and low-level programming, 
            I love tackling complex challenges in firmware development and system architecture.
          </p>
        </div>
      </div>
    </section>
  );
}
