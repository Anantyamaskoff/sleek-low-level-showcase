import { ExternalLink } from "lucide-react";
import { useRef, useEffect } from "react";
const certifications = [{
  title: "Advanced C Programming for Beginners",
  issuer: "Programming Hub",
  date: "2024",
  logo: "/src/images/infineon.jpg",
  certificateUrl: "#"
}, {
  title: "Operating Systems Architecture",
  issuer: "University Course",
  date: "2023",
  logo: "/src/images/infineon.jpg",
  certificateUrl: "#"
}, {
  title: "Computer Networks Fundamentals",
  issuer: "University Course",
  date: "2023",
  logo: "/src/images/infineon.jpg",
  certificateUrl: "#"
}, {
  title: "RTOS and Real-Time Firmware",
  issuer: "Embedded Systems Org",
  date: "2023",
  logo: "/src/images/starlab.jpg",
  certificateUrl: "#"
}, {
  title: "Digital Logic Design",
  issuer: "YadaYada School",
  date: "2022",
  logo: "/src/images/infineon.jpg",
  certificateUrl: "#"
}];
export function Certifications() {
  return <section id="certifications" className="py-16 px-4 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-8">
          Certifications &amp; Coursework
        </h2>
        <div className="w-full relative overflow-hidden">
          <div className="flex flex-row gap-6 animate-scroll py-4 hover:pause" style={{
          whiteSpace: "nowrap",
          animationDuration: "30s",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationDirection: "normal"
        }}>
            {[...certifications, ...certifications].map((cert, idx) => <div key={cert.title + idx} className="flex flex-col bg-card rounded-xl shadow-md border border-accent w-[280px] aspect-[4/3] shrink-0 p-4 justify-between">
                <h3 className="text-lg font-bold mb-auto text-center break-words line-clamp-2">{cert.title}</h3>
                <div className="text-sm text-muted-foreground mb-1 text-center">{cert.issuer}</div>
                <div className="text-sm text-muted-foreground text-center">{cert.date}</div>
                <a href={cert.certificateUrl} className="flex items-center justify-center text-sm text-purple-500 hover:text-purple-600 font-medium mt-3" target="_blank" rel="noopener">
                  View Credential
                </a>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
}