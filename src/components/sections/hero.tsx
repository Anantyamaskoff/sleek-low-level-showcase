
import { Linkedin, Github, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

// Typing animation hook
const typingRoles = [
  "Low-Level Software Engineer",
  "Embedded Systems Engineer",
  "Kernel Developer",
];
function useTypingAnimation(words: string[], typingSpeed = 48, pause = 1100) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    if (forward && subIndex === words[index].length) {
      setTimeout(() => setForward(false), pause);
      return;
    }
    if (!forward && subIndex === 0) {
      setIndex((i) => (i + 1) % words.length);
      setForward(true);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((s) => s + (forward ? 1 : -1));
    }, typingSpeed);
    return () => clearTimeout(timeout);
  }, [subIndex, index, forward, words, typingSpeed, pause]);

  return words[index].slice(0, subIndex);
}

export function Hero() {
  const typed = useTypingAnimation(typingRoles, 42, 1200);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-[90vh] py-8 px-4 gap-10 md:gap-24">
      {/* Left Column */}
      <div className="flex flex-col items-center gap-6 max-w-xs md:max-w-none w-full relative">
        <div className="relative w-44 h-44 md:w-56 md:h-56 mb-3 group">
          <img
            src="/src/images/image.jpg"
            alt="Profile"
            className="w-full h-full object-cover rounded-xl shadow-lg border-4 border-white"
          />
          {/* Overlay Card */}
          <div className="absolute left-2 bottom-2 flex items-center bg-white/90 px-2 py-1 rounded-lg shadow-md min-w-[170px] backdrop-blur-sm">
            <img
              src="/src/images/infineon.jpg"
              alt="University"
              className="w-9 h-9 object-contain rounded-full mr-2 border"
            />
            <div>
              <p className="font-semibold text-gray-900 text-sm leading-tight">Yada yada</p>
              <span className="block text-xs text-muted-foreground">B.Tech in Electronics Engineering</span>
            </div>
          </div>
        </div>
        {/* Links */}
        <div className="flex flex-row gap-4">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-muted hover:bg-purple-100 rounded-full p-2 shadow-md transition-all"
            title="LinkedIn"
          >
            <Linkedin className="h-6 w-6 text-purple-700" />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-muted hover:bg-purple-100 rounded-full p-2 shadow-md transition-all"
            title="Resume"
          >
            <ArrowDown className="h-6 w-6 text-purple-700" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-muted hover:bg-purple-100 rounded-full p-2 shadow-md transition-all"
            title="GitHub"
          >
            <Github className="h-6 w-6 text-purple-700" />
          </a>
        </div>
      </div>
      {/* Right Column */}
      <div className="flex flex-col items-start justify-center text-left w-full md:w-[420px] max-w-xl">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 flex flex-wrap items-center gap-2">
          Hi, I’m <span className="pl-1 text-purple-600">Yada yada</span>
          <span
            className="inline-block origin-bottom hover:animate-none animate-wiggle ml-2"
            style={{animation: "wiggle 1.4s infinite alternate"}}
            role="img"
            aria-label="waving hand"
          >
            👋
          </span>
        </h1>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 mt-2 bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent min-h-[38px]">
          {typed}
          <span className="border-r-2 border-purple-500 animate-blink inline-block w-2 h-6 align-middle ml-0.5" />
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-2">
          I'm passionate about building robust and efficient systems from the ground up.<br />
          With expertise in embedded systems and low-level programming, I love tackling complex challenges in firmware development and system architecture.
        </p>
      </div>
      <style>{`
        @keyframes wiggle {
          0% { transform: rotate(-5deg);}
          60% { transform: rotate(20deg);}
          100% { transform: rotate(-5deg);}
        }
        .animate-wiggle { animation: wiggle 1.4s infinite alternate }
        @keyframes blink { 0%, 49% {opacity:1;} 50%, 100%{opacity:0;} }
        .animate-blink { animation: blink 1s step-end infinite; }
      `}
      </style>
    </section>
  );
}
