
import { ExternalLink } from "lucide-react";
import { useRef, useEffect } from "react";

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
  // Add more to test scroll
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
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let running = true;
    let raf: number;
    const doScroll = () => {
      if (!el || !running) return;
      el.scrollLeft += 1;
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
        el.scrollLeft = 0;
      }
      raf = requestAnimationFrame(doScroll);
    };
    el.addEventListener("mouseenter", () => { running = false; });
    el.addEventListener("mouseleave", () => {
      running = true;
      raf = requestAnimationFrame(doScroll);
    });
    raf = requestAnimationFrame(doScroll);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-10">Certifications & Coursework</h2>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-7 pb-2 scrollbar-hide group"
          style={{
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
            // for pausable animation effect
          }}
        >
          {certifications.map((cert, idx) => (
            <div
              key={cert.title + idx}
              className="flex items-center min-w-[380px] max-w-[420px] w-full bg-card rounded-2xl shadow-lg border border-accent px-7 py-5 mr-3 hover:scale-105 transition-transform duration-300"
              style={{
                flex: "0 0 420px"
              }}
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full mr-4 bg-accent/70 border">
                <img src={cert.logo} alt={cert.issuer} className="h-10 w-10 object-contain" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-lg truncate mb-1">{cert.title}</h3>
                <div className="text-sm text-muted-foreground truncate mb-2">{cert.issuer}</div>
                <div className="text-xs text-muted-foreground">{cert.date}</div>
              </div>
              <a
                href={cert.certificateUrl}
                className="ml-6 shrink-0 flex items-center text-sm text-purple-500 hover:text-purple-600 font-medium px-3 py-1 bg-accent rounded-full"
                target="_blank"
                rel="noopener"
                tabIndex={-1}
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                View Credential
              </a>
            </div>
          ))}
        </div>
        {/* Hide scrollbar for Chrome/Safari */}
        <style>
          {`.scrollbar-hide::-webkit-scrollbar { display: none; }`}
        </style>
      </div>
    </section>
  );
}
