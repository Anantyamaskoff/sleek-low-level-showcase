
import { useRef, useEffect } from "react";
import { Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

export function YoutubeSection() {
  const videos = [
    { id: "9KHLTZaJcR8", title: "Embedded Systems Tutorial" },
    { id: "lxTgsbPLBvI", title: "Linux Kernel Development" },
    { id: "86dqFixtFUM", title: "Firmware Programming" },
  ];

  const videoRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            entry.target.classList.add("video-pop");
          }
        }
      },
      {
        threshold: 0.2,
      }
    );
    videoRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="youtube" className="py-20 px-4 bg-accent/30">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-center items-center mb-12 gap-4">
          <h2 className="text-3xl font-bold">Latest Videos</h2>
          <a href="https://www.youtube.com/channel/" target="_blank" rel="noopener noreferrer">
            <Button 
              variant="ghost"
              size="icon"
              className="bg-red-600 hover:bg-red-700 text-white p-2"
            >
              <Youtube className="w-5 h-5" />
            </Button>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <div
              key={video.id}
              ref={el => videoRefs.current[i] = el}
              className="aspect-video max-w-sm mx-auto w-full opacity-0 scale-95 transition-all duration-1000"
            >
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                className="w-full h-full rounded-lg shadow-md"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
        <style>
          {`
          .video-pop {
            opacity: 1 !important;
            transform: scale(1) !important;
            transition: opacity 1s, transform 0.9s;
          }
          `}
        </style>
      </div>
    </section>
  );
}
