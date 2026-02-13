import Section from "./Section";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useMounted } from "@/hooks/use-mounted";

export default function Contact() {
  const mounted = useMounted();

  return (
    <Section id="contact" title="Get In Touch" className="bg-white/5 pb-32">
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {mounted ? (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <p className="text-white/60 mb-8">
              I am always open to discussing new projects, creative ideas or
              opportunities to be part of your visions.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/20 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase font-bold tracking-wider">Email</p>
                  <p className="text-white">ankitharadhakrishna9@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/20 text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase font-bold tracking-wider">Phone</p>
                  <p className="text-white">+91 8970141625</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/20 text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase font-bold tracking-wider">Location</p>
                  <p className="text-white">Manipal, Karnataka, India</p>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <p className="text-white/60 mb-8">
              I am always open to discussing new projects, creative ideas or
              opportunities to be part of your visions.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/20 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase font-bold tracking-wider">Email</p>
                  <p className="text-white">ankitharadhakrishna9@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/20 text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase font-bold tracking-wider">Phone</p>
                  <p className="text-white">+91 8970141625</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/20 text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase font-bold tracking-wider">Location</p>
                  <p className="text-white">Manipal, Karnataka, India</p>
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
            className="p-8 rounded-3xl bg-black/40 border border-white/10 backdrop-blur-md"
          >
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Name</label>
                <Input placeholder="Your Name" className="bg-white/5 border-white/10 text-white placeholder:text-white/20" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Email</label>
                <Input type="email" placeholder="Your Email" className="bg-white/5 border-white/10 text-white placeholder:text-white/20" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Message</label>
                <Textarea placeholder="Your Message" className="min-h-[120px] bg-white/5 border-white/10 text-white placeholder:text-white/20" />
              </div>
              <Button className="w-full gap-2 py-6 text-lg font-bold">
                Send Message <Send className="w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        ) : (
          <div className="p-8 rounded-3xl bg-black/40 border border-white/10 backdrop-blur-md">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Name</label>
                <Input placeholder="Your Name" className="bg-white/5 border-white/10 text-white placeholder:text-white/20" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Email</label>
                <Input type="email" placeholder="Your Email" className="bg-white/5 border-white/10 text-white placeholder:text-white/20" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Message</label>
                <Textarea placeholder="Your Message" className="min-h-[120px] bg-white/5 border-white/10 text-white placeholder:text-white/20" />
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
