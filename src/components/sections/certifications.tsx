import { ExternalLink } from "lucide-react";
import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    title: "Advanced C Programming for Beginners with Extensive Practical Applications",
    issuer: "Programming Hub",
    date: "2024",
    logo: "/src/images/infineon.jpg",
    certificateUrl: "#",
  },
  {
    title: "Operating Systems Architecture and Design Principles",
    issuer: "University Course",
    date: "2023",
    logo: "/src/images/infineon.jpg",
    certificateUrl: "#",
  },
  {
    title: "Computer Networks Fundamentals and Advanced Protocols",
    issuer: "University Course",
    date: "2023",
    logo: "/src/images/infineon.jpg",
    certificateUrl: "#",
  },
  {
    title: "RTOS and Real-Time Firmware Development",
    issuer: "Embedded Systems Org",
    date: "2023",
    logo: "/src/images/starlab.jpg",
    certificateUrl: "#",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-16 px-4 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-8">
          Certifications & Coursework
        </h2>
        <div className="w-full relative overflow-hidden">
          <div
            className="flex flex-row gap-6 animate-scroll py-4"
            style={{
              whiteSpace: "nowrap",
              animationDuration: "30s",
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
              animationDirection: "normal",
            }}
          >
            {[...certifications, ...certifications].map((cert, idx) => (
              <div
                key={cert.title + idx}
                className="group flex flex-col bg-card shadow-md border border-accent w-[280px] aspect-[3/4] shrink-0 p-4 justify-between mx-[20px] my-[5px] rounded-md transition-transform duration-300 ease-out hover:scale-105 hover:shadow-lg"
              >
                <h3 className="font-bold mb-auto px-4 text-lg text-center break-words whitespace-normal overflow-hidden">
                  {cert.title}
                </h3>
                <div className="text-sm text-muted-foreground mb-1 text-center">
                  {cert.issuer}
                </div>
                <div className="text-sm text-muted-foreground text-center">
                  {cert.date}
                </div>
                <div className="flex justify-center mt-3">
                  <a
                    href={cert.certificateUrl}
                    className="inline-flex items-center justify-center rounded-full px-4 py-1.5 text-sm font-medium text-purple-600 bg-purple-100 hover:bg-purple-200 transition-colors duration-200"
                    target="_blank"
                    rel="noopener"
                  >
                    <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
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