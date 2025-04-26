
import { useEffect, useRef, useState } from "react";

function useInView<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35 }
    );
    observer.observe(node);
    return () => observer.unobserve(node);
  }, []);
  return [ref, inView] as const;
}

export function YoutubeSection() {
  const videos = [
    { id: "hTXy7TNUIfg", title: "Embedded Systems Tutorial" },
    { id: "wylENvwybEo", title: "Linux Kernel Development" },
    { id: "WbDAm6HdoBM", title: "Firmware Programming" },
  ];
  return (
    <section id="youtube" className="py-20 px-4 bg-accent/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Latest Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video) => {
            const [ref, inView] = useInView<HTMLDivElement>();
            return (
              <div
                key={video.id}
                ref={ref}
                className={`aspect-video max-w-sm mx-auto w-full transition-all duration-500 ${
                  inView
                    ? "opacity-100 scale-105"
                    : "opacity-0 scale-90"
                }`}
                style={{ transition: "all 0.56s cubic-bezier(.39,.57,.56,1.01)" }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  className="w-full h-full rounded-lg shadow-md"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
