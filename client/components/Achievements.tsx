import Section from "./Section";
import { motion } from "framer-motion";
import { Award, Presentation, Heart } from "lucide-react";
import { useMounted } from "@/hooks/use-mounted";

const achievements = [
  {
    title: "BMJ Article Presentation",
    desc: "Presented 'Standard deviation and Standard Errors' by DG Altman and JM Bland.",
    icon: Award
  },
  {
    title: "RNN Seminar",
    desc: "Delivered a comprehensive technical seminar on Recurrent Neural Networks.",
    icon: Presentation
  },
  {
    title: "VSO Volunteer",
    desc: "Active volunteer at Volunteer Service Organization (MAHE).",
    icon: Heart
  }
];

export default function Achievements() {
  const mounted = useMounted();

  return (
    <Section id="achievements" title="Achievements">
      <div className="grid md:grid-cols-3 gap-6">
        {achievements.map((item, i) => (
          mounted ? (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-accent/50 border border-border text-center group"
            >
              <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ) : (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-accent/50 border border-border text-center"
            >
              <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          )
        ))}
      </div>
    </Section>
  );
}
