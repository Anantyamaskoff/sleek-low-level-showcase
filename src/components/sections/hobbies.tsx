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

function useAutoScroll(isReverse: boolean, rowRef: React.RefObject<HTMLDivElement>, cardWidth = 144) {
  // Animate scrollLeft or scrollRight, much slower speed for smoother/continuous effect
  useEffect(() => {
    const container = rowRef.current;
    if (!container) return;
    let raf: number;
    let running = true;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const scrollStep = isReverse ? -0.14 : 0.14; // slower (in px/frame)
    const handle = () => {
      if (!running) {
        raf = requestAnimationFrame(handle);
        return;
      }
      container.scrollLeft += scrollStep;
      // Scroll cycling: left->right, right->left
      if (!isReverse && container.scrollLeft >= maxScroll - 1) { container.scrollLeft = 0; }
      if (isReverse && container.scrollLeft <= 0) { container.scrollLeft = maxScroll; }
      raf = requestAnimationFrame(handle);
    };
    raf = requestAnimationFrame(handle);
    const pause = () => { running = false; };
    const resume = () => { running = true; };
    container.addEventListener("mouseenter", pause);
    container.addEventListener("mouseleave", resume);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      container.removeEventListener("mouseenter", pause);
      container.removeEventListener("mouseleave", resume);
    };
  }, [isReverse, rowRef]);
}

export function Hobbies() {
  const upperRef = useRef<HTMLDivElement>(null);
  const lowerRef = useRef<HTMLDivElement>(null);
  useAutoScroll(false, upperRef);
  useAutoScroll(true, lowerRef);

  // Show 2x hobbies in each row to create a "loop" effect
  const hobbiesDoubled = [...hobbies, ...hobbies];

  return (
    <section id="hobbies" className="py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-8">Hobbies & Interests</h2>
        <div className="relative overflow-hidden">
          <div className="space-y-4">
            {/* Row 1: -> */}
            <div
              ref={upperRef}
              className="flex flex-nowrap gap-3 overflow-x-auto py-1 scrollbar-hide group"
              style={{ scrollBehavior: "smooth" }}
            >
              {hobbiesDoubled.map((hobby, index) => (
                <div
                  key={`row1-${hobby.title}-${index}`}
                  className="hobby-card group relative w-[112px] md:w-[138px] aspect-[4/3] flex-shrink-0"
                  tabIndex={-1}
                >
                  <img
                    src={hobby.image}
                    alt={hobby.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-2 rounded-lg">
                    <span className="text-white font-medium text-xs md:text-sm">{hobby.title}</span>
                  </div>
                </div>
              ))}
            </div>
            {/* Row 2: <- (reverse direction) */}
            <div
              ref={lowerRef}
              className="flex flex-nowrap gap-3 overflow-x-auto py-1 scrollbar-hide group"
              style={{ scrollBehavior: "smooth" }}
            >
              {hobbiesDoubled.slice().reverse().map((hobby, index) => (
                <div
                  key={`row2-${hobby.title}-${index}`}
                  className="hobby-card group relative w-[112px] md:w-[138px] aspect-[4/3] flex-shrink-0"
                  tabIndex={-1}
                >
                  <img
                    src={hobby.image}
                    alt={hobby.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-2 rounded-lg">
                    <span className="text-white font-medium text-xs md:text-sm">{hobby.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <style>
          {`.scrollbar-hide::-webkit-scrollbar { display: none; }`}
          </style>
        </div>
      </div>
    </section>
  );
}
