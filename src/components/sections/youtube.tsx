
import { useRef, useEffect } from "react";

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
        <h2 className="text-3xl font-bold text-center mb-12">Latest Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <div
              key={video.id}
              ref={el => videoRefs.current[i] = el}
              className="aspect-video max-w-sm mx-auto w-full opacity-0 scale-95 transition-all duration-700"
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
            transition: opacity 0.7s, transform 0.7s;
          }
          `}
        </style>
      </div>
    </section>
  );
}
