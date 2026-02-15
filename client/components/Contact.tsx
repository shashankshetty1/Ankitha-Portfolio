import { useState, type FormEvent, type ChangeEvent } from "react";
import Section from "./Section";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const API_URL =
        window.location.hostname === "localhost"
          ? "http://localhost:3000/contact"
          : "/.netlify/functions/api/contact";

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const data: { success: boolean; message?: string } =
        await response.json();

      if (data.success) {
        toast.success(data.message ?? "Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(data.message ?? "Failed to send message.");
      }
    } catch (error) {
      console.error("Contact Error:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Section id="contact" title="Get In Touch" className="bg-accent/50 pb-32">
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* LEFT SIDE */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5" />
              <p>ankitharadhakrishna9@gmail.com</p>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5" />
              <p>+91 8970141625</p>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5" />
              <p>Brahmavar , Karnataka, India</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-3xl bg-black/40 border backdrop-blur-md"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              disabled={isSubmitting}
            />

            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              disabled={isSubmitting}
            />

            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="min-h-[120px]"
              disabled={isSubmitting}
            />

            <Button type="submit" disabled={isSubmitting} className="w-full">
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
      </div>
    </Section>
  );
}
