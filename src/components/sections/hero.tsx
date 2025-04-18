
export function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center py-20 px-4">
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-400 animate-fade-in">
          Low-Level Engineering Enthusiast
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground animate-fade-in delay-200">
          Specializing in embedded systems, avionics, and software engineering
        </p>
        <div className="flex justify-center gap-4 animate-fade-in delay-300">
          <a
            href="#contact"
            className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="px-6 py-2 border border-purple-600 text-purple-600 dark:text-purple-400 rounded-full hover:bg-purple-600/10 transition-colors"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}
