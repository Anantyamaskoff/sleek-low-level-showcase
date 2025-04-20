
export function YoutubeSection() {
  const videos = [
    { id: "video1", title: "Embedded Systems Tutorial" },
    { id: "video2", title: "Linux Kernel Development" },
    { id: "video3", title: "Firmware Programming" },
  ];

  return (
    <section id="youtube" className="py-20 px-4 bg-accent/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Latest Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="aspect-video max-w-sm mx-auto w-full">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                className="w-full h-full rounded-lg shadow-md"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
