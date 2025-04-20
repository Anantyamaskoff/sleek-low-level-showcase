
import { ExternalLink } from "lucide-react";
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
    logo: "/src/images/starlab.jpg",
    certificateUrl: "#",
  },
  {
    title: "Computer Networks Fundamentals",
    issuer: "University Course",
    date: "2023",
    logo: "/src/images/infineon.jpg",
    certificateUrl: "#",
  },
];

export function Certifications() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!scrollRef.current) return;
    let trans = 0;
    let raf: number;
    const animate = () => {
      if (!isHovering && scrollRef.current) {
        trans -= 1;
        if (trans <= -scrollRef.current.scrollWidth / 2) trans = 0;
        scrollRef.current.style.transform = `translateX(${trans}px)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [isHovering]);

  const repeated = [...certifications, ...certifications];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-12">Certifications & Coursework</h2>
        <div
          className="overflow-x-hidden relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="flex gap-8 min-h-[110px]" ref={scrollRef} style={{transition: "transform 0.1s linear"}}>
            {repeated.map((cert, i) => (
              <div
                key={cert.title + i}
                className="flex items-center bg-card/95 shadow-lg rounded-2xl border px-6 py-4 min-w-[370px] gap-5 hover:scale-105 transition-transform duration-200"
                style={{height: "92px"}}
              >
                <img src={cert.logo} alt={cert.issuer} className="w-14 min-w-14 h-14 object-cover rounded-full shadow border" />
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-base mb-1">{cert.title}</div>
                  <div className="text-sm text-muted-foreground">{cert.issuer} – {cert.date}</div>
                </div>
                <a
                  href={cert.certificateUrl}
                  className="flex items-center gap-1 text-purple-500 hover:text-purple-700 transition-colors whitespace-nowrap text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5" />
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
