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
    let raf: number;
    let running = true;

    const doScroll = () => {
      if (!running) {
        raf = requestAnimationFrame(doScroll);
        return;
      }
      el.scrollLeft += 0.5; // Slower scroll
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 2) {
        el.scrollLeft = 0;
      }
      raf = requestAnimationFrame(doScroll);
    };

    raf = requestAnimationFrame(doScroll);

    const pause = () => { running = false; };
    const resume = () => { running = true; };
    
    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      el?.removeEventListener("mouseenter", pause);
      el?.removeEventListener("mouseleave", resume);
    };
  }, []);

  return (
    <section id="certifications" className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-8">
          Certifications &amp; Coursework
        </h2>
        <div className="w-full relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex flex-row gap-6 overflow-x-auto scrollbar-hide py-4"
            style={{
              scrollBehavior: "smooth",
              minHeight: "220px"
            }}
          >
            {certifications.map((cert, idx) => (
              <div
                key={cert.title + idx}
                className="flex flex-col bg-card rounded-xl shadow-lg border border-accent w-[300px] aspect-[4/3] shrink-0 p-6"
              >
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <div className="text-sm text-muted-foreground mb-1">{cert.issuer}</div>
                <div className="text-sm text-muted-foreground">{cert.date}</div>
                <div className="flex-1" />
                <a
                  href={cert.certificateUrl}
                  className="flex items-center justify-center text-sm text-purple-500 hover:text-purple-600 font-medium mt-4"
                  target="_blank"
                  rel="noopener"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Credential
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
