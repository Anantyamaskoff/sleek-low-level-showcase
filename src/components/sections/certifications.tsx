
import { ScrollText, ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRef, useEffect } from "react";

export function Certifications() {
  // Add sample org logos
  const certifications = [
    {
      title: "Advanced C Programming for Beginners",
      issuer: "Programming Hub",
      date: "2024",
      icon: ScrollText,
      certificateUrl: "#",
      logo: "https://seeklogo.com/images/P/programming-hub-logo-4A7587A772-seeklogo.com.png",
    },
    {
      title: "Operating Systems Architecture",
      issuer: "University Course",
      date: "2023",
      icon: ScrollText,
      certificateUrl: "#",
      logo: "https://upload.wikimedia.org/wikipedia/en/1/18/Indian_Institute_of_Information_Technology%2C_Surat_Logo.png",
    },
    {
      title: "Computer Networks Fundamentals",
      issuer: "University Course",
      date: "2023",
      icon: ScrollText,
      certificateUrl: "#",
      logo: "https://upload.wikimedia.org/wikipedia/en/1/18/Indian_Institute_of_Information_Technology%2C_Surat_Logo.png",
    }
  ];

  // Loop for a smooth swipe
  const sliderRef = useRef<HTMLDivElement>(null);

  // Animation handled via CSS
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let id: number;
    const step = () => {
      slider.scrollLeft += 1;
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      }
      id = requestAnimationFrame(step);
    };
    id = requestAnimationFrame(step);

    // Pause on hover
    const pause = () => cancelAnimationFrame(id);
    const resume = () => { id = requestAnimationFrame(step); };

    slider.addEventListener("mouseenter", pause);
    slider.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(id);
      slider.removeEventListener("mouseenter", pause);
      slider.removeEventListener("mouseleave", resume);
    };
  }, []);

  // Double certifications array for infinite loop
  const certsLoop = [...certifications, ...certifications];

  return (
    <section id="certifications" className="py-20 px-4 bg-accent/10">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-12">Certifications & Coursework</h2>
        <div
          className="relative w-full overflow-x-hidden"
        >
          <div
            ref={sliderRef}
            className="flex gap-8 py-6"
            style={{
              width: "100%",
              overflowX: "scroll",
              scrollBehavior: "smooth",
              scrollbarWidth: "none",
            }}
          >
            {certsLoop.map((cert, idx) => (
              <Card
                key={idx}
                className="min-w-[375px] max-w-sm aspect-[4.5/1] flex flex-row items-center justify-between px-6 py-4 group shadow-lg border-purple-200 hover:border-purple-500 transition-all mx-2"
              >
                <img
                  src={cert.logo}
                  alt={cert.issuer}
                  className="h-14 w-14 rounded-xl object-contain bg-white border mr-4"
                />
                <div className="flex-1">
                  <CardTitle className="text-lg mb-1">{cert.title}</CardTitle>
                  <p className="text-purple-600 text-xs mb-1">{cert.issuer}</p>
                  <a
                    href={cert.certificateUrl}
                    className="inline-flex items-center text-sm text-purple-500 hover:text-purple-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    View Credential
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
