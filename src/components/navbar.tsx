
import { ThemeToggle } from "./ui/theme-toggle";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-semibold">
          Portfolio
        </a>
        <div className="flex items-center gap-6">
          <a href="#about" className="hover:text-purple-600 transition-colors">About</a>
          <a href="#experience" className="hover:text-purple-600 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-purple-600 transition-colors">Projects</a>
          <a href="#certifications" className="hover:text-purple-600 transition-colors">Certifications</a>
          <a href="#blog" className="hover:text-purple-600 transition-colors">Blog</a>
          <a href="#hobbies" className="hover:text-purple-600 transition-colors">Hobbies</a>
          <a href="#contact" className="hover:text-purple-600 transition-colors">Contact</a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
