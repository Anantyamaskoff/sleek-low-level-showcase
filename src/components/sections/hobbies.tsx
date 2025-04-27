import { useEffect, useRef } from "react";

// 10 hobbies max, split into two rows
const hobbies = [
  { title: "Photography", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300" },
  { title: "Technical Reading", image: "https://images.unsplash.com/photo-1461749280684-dccba630e475?auto=format&fit=crop&w=300" },
  { title: "Game Development", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300" },
  { title: "Cycling", image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=300" },
  { title: "Cooking", image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=300" },
  { title: "Music", image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=300" },
  { title: "3D Printing", image: "https://images.unsplash.com/photo-1615871155262-6d728101f77c?auto=format&fit=crop&w=300" },
  { title: "Electronics", image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=300" },
  { title: "Robotics", image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=300" },
  { title: "Travel", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300" },
];

export function Hobbies() {
  return (
    <section id="hobbies" className="py-12 px-4 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-8">Hobbies & Interests</h2>
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hobbies.slice(0, 6).map((hobby, index) => (
              <div
                key={`row1-${hobby.title}-${index}`}
                className="relative w-full aspect-[4/3] overflow-hidden rounded-lg group"
              >
                <img
                  src={hobby.image}
                  alt={hobby.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <span className="text-white font-medium">{hobby.title}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hobbies.slice(6).map((hobby, index) => (
              <div
                key={`row2-${hobby.title}-${index}`}
                className="relative w-full aspect-[4/3] overflow-hidden rounded-lg group"
              >
                <img
                  src={hobby.image}
                  alt={hobby.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
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
