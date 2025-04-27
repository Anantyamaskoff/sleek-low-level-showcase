import { ExternalLink } from "lucide-react";
import { useRef, useEffect } from "react";

const certifications = [
  {
    title: "Advanced C Programming for Beginners",
    issuer: "Programming Hub",
    date: "2024",
    logo: "/src/images/infineon.jpg",
    certificateUrl: "#"
  },
  {
    title: "Operating Systems Architecture",
    issuer: "University Course",
    date: "2023",
    logo: "/src/images/infineon.jpg",
    certificateUrl: "#"
  },
  {
    title: "Computer Networks Fundamentals",
    issuer: "University Course",
    date: "2023",
    logo: "/src/images/infineon.jpg",
    certificateUrl: "#"
  },
  {
    title: "RTOS and Real-Time Firmware",
    issuer: "Embedded Systems Org",
    date: "2023",
    logo: "/src/images/starlab.jpg",
    certificateUrl: "#"
  },
  {
    title: "Digital Logic Design",
    issuer: "YadaYada School",
    date: "2022",
    logo: "/src/images/infineon.jpg",
    certificateUrl: "#"
  }
];

export function Certifications() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleMouseEnter = () => {
      container.style.animationPlayState = 'paused';
    };

    const handleMouseLeave = () => {
      container.style.animationPlayState = 'running';
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section id="certifications" className="py-16 px-4 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-8">
          Certifications &amp; Coursework
        </h2>
        <div className="w-full relative overflow-hidden">
          <div 
            ref={scrollContainerRef}
            className="flex flex-row gap-6 animate-scroll py-4" 
            style={{
              whiteSpace: "nowrap",
              animationDuration: "30s",
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
              animationDirection: "normal"
            }}
          >
            {[...certifications, ...certifications].map((cert, idx) => (
              <div 
                key={cert.title + idx} 
                className="flex flex-col bg-card rounded-xl shadow-md border border-accent w-[280px] aspect-[4/3] shrink-0 p-4 justify-between transition-all duration-300 hover:scale-105 hover:shadow-lg hover:z-10 hover:border-purple-500"
              >
                <div className="flex flex-col items-center text-center flex-grow">
                  <h3 className="font-bold text-lg px-2 break-words hyphens-auto">
                    {cert.title}
                  </h3>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-sm text-muted-foreground mb-1">{cert.issuer}</div>
                  <div className="text-sm text-muted-foreground mb-3">{cert.date}</div>
                  <a 
                    href={cert.certificateUrl} 
                    className="flex items-center justify-center text-sm text-purple-500 hover:text-purple-600 font-medium" 
                    target="_blank" 
                    rel="noopener"
                  >
                    View Credential
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}