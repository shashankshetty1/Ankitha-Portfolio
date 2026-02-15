import { useState } from "react";
import Section from "./Section";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useMounted } from "@/hooks/use-mounted";
import { toast } from "sonner";

export default function Contact() {
  const mounted = useMounted();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast.success(data.message);
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(data.message || "Failed to send message.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Section id="contact" title="Get In Touch" className="bg-accent/50 pb-32">
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {mounted ? (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
            <p className="text-muted-foreground mb-8">
              I am always open to discussing new projects, creative ideas or
              opportunities to be part of your visions.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/20 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Email</p>
                  <p className="text-foreground">ankitharadhakrishna9@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/20 text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Phone</p>
                  <p className="text-foreground">+91 8970141625</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/20 text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Location</p>
                  <p className="text-foreground">Manipal, Karnataka, India</p>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
            <p className="text-muted-foreground mb-8">
              I am always open to discussing new projects, creative ideas or
              opportunities to be part of your visions.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/20 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Email</p>
                  <p className="text-foreground">ankitharadhakrishna9@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/20 text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Phone</p>
                  <p className="text-foreground">+91 8970141625</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/20 text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Location</p>
                  <p className="text-foreground">Manipal, Karnataka, India</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {mounted ? (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl bg-black/40 border border-border backdrop-blur-md"
          >
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">Name</label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="bg-accent/50 border-border text-foreground placeholder:text-muted-foreground/30"
                  disabled={isSubmitting}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">Email</label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="bg-accent/50 border-border text-foreground placeholder:text-muted-foreground/30"
                  disabled={isSubmitting}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="min-h-[120px] bg-accent/50 border-border text-foreground placeholder:text-muted-foreground/30"
                  disabled={isSubmitting}
                />
              </div>
              <Button
                type="submit"
                className="w-full gap-2 py-6 text-lg font-bold"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    Sending <Loader2 className="w-4 h-4 animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message <Send className="w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        ) : (
          <div className="p-8 rounded-3xl bg-black/40 border border-border backdrop-blur-md">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">Name</label>
                <Input placeholder="Your Name" className="bg-accent/50 border-border text-foreground placeholder:text-muted-foreground/30" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">Email</label>
                <Input type="email" placeholder="Your Email" className="bg-accent/50 border-border text-foreground placeholder:text-muted-foreground/30" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">Message</label>
                <Textarea placeholder="Your Message" className="min-h-[120px] bg-accent/50 border-border text-foreground placeholder:text-muted-foreground/30" />
              </div>
              <Button className="w-full gap-2 py-6 text-lg font-bold">
                Send Message <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        )}
      </div>
    </Section>
  );
}
