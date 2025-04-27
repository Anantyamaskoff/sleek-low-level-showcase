
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="text-muted-foreground mb-8">
          I'm always open to new opportunities and collaborations.
        </p>
        <Button asChild size="lg" className="px-8">
          <a href="mailto:your@email.com?subject=Opportunity%20Discussion">
            Send me an email
          </a>
        </Button>
      </div>
    </section>
  );
}
