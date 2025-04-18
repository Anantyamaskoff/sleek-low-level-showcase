
import { ScrollText } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Certifications() {
  const certifications = [
    {
      title: "Advanced C Programming for Beginners",
      issuer: "Programming Hub",
      date: "2024",
      icon: ScrollText,
    },
    {
      title: "Operating Systems Architecture",
      issuer: "University Course",
      date: "2023",
      icon: ScrollText,
    },
    {
      title: "Computer Networks Fundamentals",
      issuer: "University Course",
      date: "2023",
      icon: ScrollText,
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">Certifications & Coursework</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <Card key={cert.title} className="group hover:border-purple-500/50 transition-all transform hover:scale-105 cursor-pointer">
              <CardHeader className="space-y-1">
                <div className="flex items-center gap-2">
                  <cert.icon className="w-5 h-5 text-purple-500 group-hover:rotate-12 transition-transform" />
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{cert.issuer}</p>
                <p className="text-sm text-muted-foreground">{cert.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
