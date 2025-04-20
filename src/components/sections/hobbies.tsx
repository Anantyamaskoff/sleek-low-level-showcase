
import { useEffect, useRef } from "react";

export function Hobbies() {
  const hobbies = [
    {
      title: "Photography",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300",
    },
    {
      title: "Technical Reading",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=300",
    },
    {
      title: "Game Development",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300",
    },
    {
      title: "Cycling",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=300",
    },
    {
      title: "Cooking",
      image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=300",
    },
    {
      title: "Music",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=300",
    },
    {
      title: "3D Printing",
      image: "https://images.unsplash.com/photo-1615871155262-6d728101f77c?auto=format&fit=crop&w=300",
    },
    {
      title: "Electronics",
      image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=300",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="hobbies" className="py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-8">Hobbies & Interests</h2>
        <div className="relative overflow-hidden">
          <div 
            ref={containerRef}
            className="flex animate-scroll"
          >
            {/* Double the hobbies for seamless loop */}
            {[...hobbies, ...hobbies].map((hobby, index) => (
              <div
                key={`${hobby.title}-${index}`}
                className="hobby-card group relative w-[250px] aspect-square flex-shrink-0 mx-2"
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
      </div>
    </section>
  );
}
