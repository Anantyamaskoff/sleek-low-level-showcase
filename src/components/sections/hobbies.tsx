
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
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = containerRef.current?.querySelectorAll('.hobby-card');
            cards?.forEach((card) => {
              card.classList.add('animate-slide');
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section id="hobbies" className="py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-8">Hobbies & Interests</h2>
        <div 
          ref={containerRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 overflow-hidden"
        >
          {hobbies.map((hobby, index) => (
            <div
              key={hobby.title}
              className="hobby-card group relative aspect-square overflow-hidden rounded-xl transition-transform hover:scale-105 opacity-0"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <img
                src={hobby.image}
                alt={hobby.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                <span className="text-white font-medium text-sm">{hobby.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
