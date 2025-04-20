
import { ExternalLink, ArrowRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const certifications = [
  {
    title: "Advanced C Programming for Beginners",
    issuer: "Programming Hub",
    date: "2024",
    logo: "/src/images/infineon.jpg",
    certificateUrl: "#",
  },
  {
    title: "Operating Systems Architecture",
    issuer: "University Course",
    date: "2023",
    logo: "/src/images/infineon.jpg",
    certificateUrl: "#",
  },
  {
    title: "Computer Networks Fundamentals",
    issuer: "University Course",
    date: "2023",
    logo: "/src/images/infineon.jpg",
    certificateUrl: "#",
  },
  {
    title: "RTOS and Real-Time Firmware",
    issuer: "Embedded Systems Org",
    date: "2023",
    logo: "/src/images/starlab.jpg",
    certificateUrl: "#",
  },
  {
    title: "Digital Logic Design",
    issuer: "YadaYada School",
    date: "2022",
    logo: "/src/images/infineon.jpg",
    certificateUrl: "#",
  },
];

export function Certifications() {
  // Horizontal scroll for desktop, slower
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollAmount, setScrollAmount] = useState(0);

  // Animation: smooth horizontal auto-scroll + stops on hover + Arrow for manual scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let running = true;
    let raf: number;
    const doScroll = () => {
      if (!running) {
        raf = requestAnimationFrame(doScroll);
        return;
      }
      el.scrollLeft += 0.18; // slower
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
        el.scrollLeft = 0;
      }
      raf = requestAnimationFrame(doScroll);
    };
    el.addEventListener("mouseenter", () => { running = false; });
    el.addEventListener("mouseleave", () => { running = true; raf = requestAnimationFrame(doScroll); });
    raf = requestAnimationFrame(doScroll);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
    };
  }, []);

  // Manual scroll arrow
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 310; // almost one card
    }
  };

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-10">Certifications & Coursework</h2>
        <div className="w-full relative">
          <div
            ref={scrollRef}
            className="flex flex-row overflow-x-auto gap-7 pb-2 scrollbar-hide group items-center"
            style={{
              scrollBehavior: "smooth",
              WebkitOverflowScrolling: "touch",
              minHeight: "420px",
              height: "420px"
            }}
          >
            {certifications.map((cert, idx) => (
              <div
                key={cert.title + idx}
                className="flex flex-col items-center bg-card rounded-2xl shadow-lg border border-accent w-[230px] md:w-[270px] h-[380px] md:h-[400px] mx-2 relative pt-7 px-6 pb-4 transition-transform duration-300 hover:scale-105"
                style={{
                  aspectRatio: "3/4",
                  minWidth: 230,
                  maxWidth: 290
                }}
              >
                <div className="flex items-center justify-center h-14 w-14 rounded-full mb-4 bg-accent/70 border">
                  <img src={cert.logo} alt={cert.issuer} className="h-8 w-8 object-contain" />
                </div>
                <h3 className="font-bold text-base text-center mb-2">{cert.title}</h3>
                <div className="text-xs text-muted-foreground text-center mb-1">{cert.issuer}</div>
                <div className="text-xs text-muted-foreground mb-3">{cert.date}</div>
                <a
                  href={cert.certificateUrl}
                  className="mt-auto flex items-center justify-center text-xs text-purple-500 hover:text-purple-600 font-medium px-3 py-1 bg-accent rounded-full w-full transition-colors"
                  target="_blank"
                  rel="noopener"
                  tabIndex={-1}
                >
                  <ExternalLink className="w-3 h-3 mr-1" />
                  View Credential
                </a>
              </div>
            ))}
          </div>
          {/* Right Arrow */}
          <button
            aria-label="Scroll right"
            className="absolute top-1/2 -translate-y-1/2 right-0 bg-white/90 hover:bg-accent transition-colors shadow-md rounded-full p-1 z-10 border border-accent"
            style={{ display: "block" }}
            onClick={scrollRight}
          >
            <ArrowRight className="w-7 h-7 text-purple-500" />
          </button>
        </div>
        <style>
          {`.scrollbar-hide::-webkit-scrollbar { display: none; }`}
        </style>
      </div>
    </section>
  );
}
