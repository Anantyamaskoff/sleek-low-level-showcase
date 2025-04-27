
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
        <Button
          asChild
          size="lg"
          className="transform hover:scale-105 transition-transform"
        >
          <a
            href="mailto:your@email.com"
            className="flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Send me an email
          </a>
        </Button>
      </div>
    </section>
  );
}
