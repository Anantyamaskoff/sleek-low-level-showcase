
const certifications = [
  {
    title: "Advanced C Programming for Beginners",
    issuer: "Programming Hub",
    date: "2024",
    certificateUrl: "#",
  },
  {
    title: "Operating Systems Architecture",
    issuer: "University Course",
    date: "2023",
    certificateUrl: "#",
  },
  {
    title: "Computer Networks Fundamentals",
    issuer: "University Course",
    date: "2023",
    certificateUrl: "#",
  },
  {
    title: "RTOS and Real-Time Firmware",
    issuer: "Embedded Systems Org",
    date: "2023",
    certificateUrl: "#",
  },
  {
    title: "Digital Logic Design",
    issuer: "YadaYada School",
    date: "2022",
    certificateUrl: "#",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-12 px-4 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-10">
          Certifications &amp; Coursework
        </h2>
        <div className="relative">
          <div className="flex animate-scroll hover:animation-play-state-paused gap-6 py-4">
            {[...certifications, ...certifications].map((cert, idx) => (
              <div
                key={`${cert.title}-${idx}`}
                className="flex-none w-[320px] bg-card rounded-xl shadow-lg border border-accent p-6 flex flex-col gap-4"
              >
                <h3 className="text-2xl font-bold leading-tight">{cert.title}</h3>
                <div className="text-sm text-muted-foreground">{cert.issuer}</div>
                <div className="text-sm text-muted-foreground">{cert.date}</div>
                <div className="flex-grow" />
                <a
                  href={cert.certificateUrl}
                  className="inline-flex items-center justify-center text-sm text-purple-500 hover:text-purple-600 font-medium mt-auto"
                  target="_blank"
                  rel="noopener"
                >
                  View Credential
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
