
import { useEffect, useRef } from "react";

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
    { title: "Table Tennis", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300" },
    { title: "FPGA Projects", image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=300" },
    { title: "DIY Gadgets", image: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=300" },
    { title: "Arduino", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=300" },
    { title: "Mechanical Keyboards", image: "https://images.unsplash.com/photo-1517430816045-df4b7de170b1?auto=format&fit=crop&w=300" },
    { title: "Flight Sim", image: "https://images.unsplash.com/photo-1517620424848-86cf1403b2c7?auto=format&fit=crop&w=300" },
    { title: "Retro Computing", image: "https://images.unsplash.com/photo-1465101178521-c1a9136a11b5?auto=format&fit=crop&w=300" },
    { title: "Code Golf", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=300" }
    // Add more as needed
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let id: number;
    function step() {
      container.scrollLeft += 1;
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
      id = requestAnimationFrame(step);
    }
    id = requestAnimationFrame(step);

    function pause() { cancelAnimationFrame(id); }
    function resume() { id = requestAnimationFrame(step); }

    container.addEventListener("mouseenter", pause);
    container.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(id);
      container.removeEventListener("mouseenter", pause);
      container.removeEventListener("mouseleave", resume);
    };
  }, []);

  // Loop the hobbies
  const looped = [...hobbies, ...hobbies];

  return (
    <section id="hobbies" className="py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-8">Hobbies & Interests</h2>
        <div className="relative overflow-hidden">
          <div
            ref={containerRef}
            className="flex gap-4 py-4"
            style={{
              width: "100%",
              overflowX: "scroll",
              scrollBehavior: "smooth",
              scrollbarWidth: "none"
            }}
          >
            {looped.map((hobby, idx) => (
              <div
                key={hobby.title + idx}
                className="group relative w-[220px] aspect-square flex-shrink-0 mx-2 transition-transform"
                style={{ flex: '0 0 220px' }}
              >
                <img
                  src={hobby.image}
                  alt={hobby.title}
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4 rounded-xl">
                  <span className="text-white font-medium">{hobby.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>
          {`::-webkit-scrollbar { display: none; }`}
        </style>
      </div>
    </section>
  );
}
