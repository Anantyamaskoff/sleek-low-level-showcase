
import { useEffect, useRef, useState } from "react";

export function Hobbies() {
  const hobbies = [
    { title: "Photography", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300" },
    { title: "Technical Reading", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=300" },
    { title: "Game Development", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300" },
    { title: "Cycling", image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=300" },
    { title: "Cooking", image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=300" },
    { title: "Music", image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=300" },
    { title: "3D Printing", image: "https://images.unsplash.com/photo-1615871155262-6d728101f77c?auto=format&fit=crop&w=300" },
    { title: "Electronics", image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=300" },
    { title: "Travel", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300" },
    { title: "Woodworking", image: "https://images.unsplash.com/photo-1451471016736-9820d8770c06?auto=format&fit=crop&w=300" },
    { title: "Open Source", image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=300" },
    { title: "Retro Tech", image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=300" },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let raf: number;
    let progress = 0;
    const animate = () => {
      if (!isHovering) {
        progress -= 1.2;
        if (Math.abs(progress) >= container.scrollWidth / 2) {
          progress = 0;
        }
        container.style.transform = `translateX(${progress}px)`;
      }
      raf = window.requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [isHovering]);

  return (
    <section id="hobbies" className="py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-8">Hobbies & Interests</h2>
        <div className="relative overflow-hidden" 
          onMouseEnter={() => setIsHovering(true)} 
          onMouseLeave={() => setIsHovering(false)}>
          <div
            ref={containerRef}
            className="flex gap-4"
            style={{ transition: "transform 0.1s linear" }}
          >
            {[...hobbies, ...hobbies].map((hobby, idx) => (
              <div
                key={`${hobby.title}-${idx}`}
                className="hobby-card group relative w-[210px] aspect-square flex-shrink-0 mx-2"
              >
                <img
                  src={hobby.image}
                  alt={hobby.title}
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 rounded-xl">
                  <span className="text-white font-medium">{hobby.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
