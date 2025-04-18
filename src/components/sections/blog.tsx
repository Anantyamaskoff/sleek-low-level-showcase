
import { Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Blog() {
  const posts = [
    {
      title: "Building a Bootloader from Scratch",
      date: "April 15, 2024",
      excerpt: "Exploring the intricacies of x86 architecture and BIOS interrupts...",
    },
    {
      title: "Deep Dive into Linux Device Drivers",
      date: "April 10, 2024",
      excerpt: "Understanding character devices and kernel module development...",
    },
    {
      title: "GPU Programming Adventures",
      date: "April 5, 2024",
      excerpt: "First steps into parallel computing and shader programming...",
    },
  ];

  return (
    <section id="blog" className="py-20 px-4 bg-accent/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">Latest Blog Posts</h2>
        <div className="space-y-6">
          {posts.map((post) => (
            <Card key={post.title} className="hover:border-purple-500/50 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <CardTitle className="text-xl">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.excerpt}</p>
                <a href="#" className="inline-flex items-center gap-2 mt-4 text-purple-500 hover:text-purple-600 transition-colors">
                  Read more
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
