
import { Camera, Book, Gamepad, Bike } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    <section id="hobbies" className="py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-8">Hobbies & Interests</h2>
        <Carousel className="w-full max-w-xs mx-auto">
          <CarouselContent>
            {hobbies.map((hobby) => (
              <CarouselItem key={hobby.title}>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <img
                    src={hobby.image}
                    alt={hobby.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 flex flex-col justify-end">
                    <div className="flex items-center gap-2 text-white">
                      <hobby.icon className="w-4 h-4" />
                      <h3 className="font-medium text-sm">{hobby.title}</h3>
                    </div>
                    <p className="text-xs text-gray-200">{hobby.description}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
