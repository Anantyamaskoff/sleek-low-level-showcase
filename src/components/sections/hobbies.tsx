import { useEffect, useRef } from "react";

const hobbies = [
  {
    title: "Photography",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300"
  },
  // ... (rest of your hobbies array remains the same)
];

export function Hobbies() {
  const upperRef = useRef<HTMLDivElement>(null);
  const lowerRef = useRef<HTMLDivElement>(null);
  const hobbiesDoubled = [...hobbies, ...hobbies];

  useEffect(() => {
    const setupAnimation = (container: HTMLDivElement, direction: 'left' | 'right') => {
      const scrollSpeed = 0.5; // Adjust this value to make it slower (lower number) or faster
      let animationFrame: number;
      let isPaused = false;

      const scroll = () => {
        if (isPaused) {
          animationFrame = requestAnimationFrame(scroll);
          return;
        }

        if (direction === 'left') {
          container.scrollLeft += scrollSpeed;
          if (container.scrollLeft >= container.scrollWidth / 2) {
            container.scrollLeft = 0;
          }
        } else {
          container.scrollLeft -= scrollSpeed;
          if (container.scrollLeft <= 0) {
            container.scrollLeft = container.scrollWidth / 2;
          }
        }

        animationFrame = requestAnimationFrame(scroll);
      };

      const handleMouseEnter = () => {
        isPaused = true;
      };

      const handleMouseLeave = () => {
        isPaused = false;
      };

      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      scroll();

      return () => {
        cancelAnimationFrame(animationFrame);
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    };

    if (upperRef.current) setupAnimation(upperRef.current, 'left');
    if (lowerRef.current) setupAnimation(lowerRef.current, 'right');
  }, []);

  return (
    <section id="hobbies" className="py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-8">Hobbies & Interests</h2>
        <div className="relative overflow-hidden">
          <div className="space-y-4">
            {/* Upper row - scrolls left */}
            <div 
              ref={upperRef} 
              className="flex flex-nowrap gap-4 overflow-hidden py-1"
              style={{ minHeight: "200px" }}
            >
              {hobbiesDoubled.map((hobby, index) => (
                <div 
                  key={`row1-${hobby.title}-${index}`} 
                  className="hobby-card relative w-[240px] aspect-[4/3] flex-shrink-0 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:z-10"
                >
                  <img 
                    src={hobby.image} 
                    alt={hobby.title} 
                    className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:brightness-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-2 rounded-lg">
                    <span className="text-white font-medium text-sm">{hobby.title}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Lower row - scrolls right */}
            <div 
              ref={lowerRef} 
              className="flex flex-nowrap gap-4 overflow-hidden py-1" 
              style={{ minHeight: "200px" }}
            >
              {hobbiesDoubled.map((hobby, index) => (
                <div 
                  key={`row2-${hobby.title}-${index}`} 
                  className="hobby-card relative w-[240px] aspect-[4/3] flex-shrink-0 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:z-10"
                >
                  <img 
                    src={hobby.image} 
                    alt={hobby.title} 
                    className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:brightness-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-2 rounded-lg">
                    <span className="text-white font-medium text-sm">{hobby.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}