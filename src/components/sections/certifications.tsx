
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
    // Slow down speed to 0.25px/present
    const doScroll = () => {
      if (!el || !running) return;
      el.scrollTop += 0.25;
      if (el.scrollTop >= el.scrollHeight - el.clientHeight) {
        el.scrollTop = 0;
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
          className="flex flex-col overflow-y-auto gap-7 max-h-[530px] md:max-h-[680px] pb-2 scrollbar-hide group items-center"
          style={{
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
            height: "430px",
            minHeight: "340px"
          }}
        >
          {certifications.map((cert, idx) => (
            <div
              key={cert.title + idx}
              className="flex flex-col items-center bg-card rounded-2xl shadow-lg border border-accent w-[225px] md:w-[280px] h-[340px] md:h-[420px] mx-2 relative pt-6 px-6 pb-5 transition-transform duration-300 hover:scale-105"
              style={{
                aspectRatio: "3/4"
              }}
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full mb-4 bg-accent/70 border">
                <img src={cert.logo} alt={cert.issuer} className="h-10 w-10 object-contain" />
              </div>
              <h3 className="font-bold text-md text-center mb-2">{cert.title}</h3>
              <div className="text-xs text-muted-foreground text-center mb-1">{cert.issuer}</div>
              <div className="text-xs text-muted-foreground mb-4">{cert.date}</div>
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
        <style>
          {`.scrollbar-hide::-webkit-scrollbar { display: none; }`}
        </style>
      </div>
    </section>
  );
}
