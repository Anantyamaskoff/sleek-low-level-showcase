
import { Camera, Book, Gamepad, Bike } from "lucide-react";

export function Hobbies() {
  const hobbies = [
    {
      icon: Camera,
      title: "Photography",
      description: "Capturing circuits and hardware builds",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300",
    },
    {
      icon: Book,
      title: "Technical Reading",
      description: "Deep diving into computer architecture",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=300",
    },
    {
      icon: Gamepad,
      title: "Game Development",
      description: "Exploring low-level graphics programming",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300",
    },
    {
      icon: Bike,
      title: "Cycling",
      description: "Balancing mind and body",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=300",
    },
  ];

  return (
    <section id="hobbies" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Hobbies & Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hobbies.map((hobby) => (
            <div key={hobby.title} className="group relative overflow-hidden rounded-lg aspect-square">
              <img
                src={hobby.image}
                alt={hobby.title}
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 flex flex-col justify-end text-white">
                <div className="flex items-center gap-2 mb-2">
                  <hobby.icon className="w-5 h-5" />
                  <h3 className="font-semibold">{hobby.title}</h3>
                </div>
                <p className="text-sm text-gray-200">{hobby.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
