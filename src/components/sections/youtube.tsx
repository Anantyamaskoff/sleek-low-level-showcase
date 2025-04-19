
import { useEffect, useRef } from "react";

export function YoutubeSection() {
  const videos = [
    { id: "video1", title: "Embedded Systems Tutorial" },
    { id: "video2", title: "Linux Kernel Development" },
    { id: "video3", title: "Firmware Programming" },
  ];

  // Animation on scroll in
  const videoRefs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-video-pop");
          }
        });
      },
      { threshold: 0.3 }
    );
    videoRefs.current.forEach((el) => {
      if (el) observer.observe(el);
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
              ref={el => videoRefs.current[i] = el}
              key={video.id}
              className="aspect-video max-w-sm mx-auto w-full opacity-0"
              style={{ animationFillMode: "forwards" }}
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
          @keyframes video-pop {
            0% { opacity: 0; transform: scale(0.85); }
            80% { opacity: 1; transform: scale(1.05);}
            100% { opacity: 1; transform: scale(1);}
          }
          .animate-video-pop {
            animation: video-pop 0.8s cubic-bezier(.2,1.2,.4,1) forwards;
            opacity: 1 !important;
          }
          `}
        </style>
      </div>
    </section>
  );
}
