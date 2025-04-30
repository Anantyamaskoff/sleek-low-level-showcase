
import { useEffect, useRef } from "react";

const hobbies = [{
  title: "Photography",
  image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300",
  level: "Intermediate"
}, {
  title: "Technical Reading",
  image: "https://images.unsplash.com/photo-1461749280684-dccba630e475?auto=format&fit=crop&w=300",
  level: "Intermediate"
}, {
  title: "Game Development",
  image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300",
  level: "Noob"
}, {
  title: "Cycling",
  image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=300",
  level: "Intermediate"
}, {
  title: "Cooking",
  image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=300",
  level: "Intermediate"
}, {
  title: "Music",
  image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=300",
  level: "Noob"
}, {
  title: "3D Printing",
  image: "https://images.unsplash.com/photo-1615871155262-6d728101f77c?auto=format&fit=crop&w=300",
  level: "Noob"
}, {
  title: "Electronics",
  image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=300",
  level: "Intermediate"
}, {
  title: "Robotics",
  image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=300",
  level: "Noob"
}, {
  title: "Travel",
  image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300",
  level: "Intermediate"
}];

function useAutoScroll(speed = 0.5) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    let scrollPosition = 0;
    let animationFrameId: number;
    let isHovering = false;
    
    const scroll = () => {
      if (container && !isHovering) {
        scrollPosition += speed;
        
        // When we've scrolled the width of the first duplicate set
        if (scrollPosition >= container.scrollWidth / 2) {
          scrollPosition = 0;
        }
        
        container.scrollLeft = scrollPosition;
      }
      
      animationFrameId = requestAnimationFrame(scroll);
    };
    
    const handleMouseEnter = () => {
      isHovering = true;
    };
    
    const handleMouseLeave = () => {
      isHovering = false;
    };
    
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    
    animationFrameId = requestAnimationFrame(scroll);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [speed]);
  
  return containerRef;
}

export function Hobbies() {
  const scrollContainerRef = useAutoScroll(0.5);
  
  // Double the hobbies array to create seamless looping
  const duplicatedHobbies = [...hobbies, ...hobbies];
  
  return (
    <section id="hobbies" className="py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-left mb-8">Hobbies & Interests</h2>
        
        <div className="overflow-hidden">
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-hidden"
            style={{ minHeight: "200px" }}
          >
            {duplicatedHobbies.map((hobby, index) => (
              <div 
                key={`${hobby.title}-${index}`} 
                className="hobby-card relative w-[240px] aspect-[4/3] flex-shrink-0 group border-2 border-accent hover:border-4 hover:border-accent transition-transform duration-300 ease-out hover:scale-105 hover:shadow-lg rounded-md opacity-0 scale-95 animate-fade-in-up"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <img 
                  src={hobby.image} 
                  alt={hobby.title} 
                  className="w-full h-full object-cover rounded-lg" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-2 rounded-lg">
                  <span className="text-white font-medium text-sm">{hobby.title}</span>
                  <span className="absolute bottom-2 right-2 text-xs px-2 py-0.5 bg-accent/50 text-white rounded-full">
                    {hobby.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
