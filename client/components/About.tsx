import Section from "./Section";
import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { useMounted } from "@/hooks/use-mounted";

export default function About() {
  const mounted = useMounted();

  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {mounted ? (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I am a passionate Data Scientist currently pursuing my Masters in Data Science
              at MAHE Manipal University. With a strong foundation in Computer Science and Statistics,
              I specialize in building predictive models and analyzing healthcare datasets to solve
              real-world problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My work spans from Lung Cancer analysis using statistical modeling to benchmarking
              Large Language Models for Kannada text classification. I am dedicated to continuous
              learning and leveraging technology for social good.
            </p>
          </motion.div>
        ) : (
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I am a passionate Data Scientist currently pursuing my Masters in Data Science
              at MAHE Manipal University. With a strong foundation in Computer Science and Statistics,
              I specialize in building predictive models and analyzing healthcare datasets to solve
              real-world problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My work spans from Lung Cancer analysis using statistical modeling to benchmarking
              Large Language Models for Kannada text classification. I am dedicated to continuous
              learning and leveraging technology for social good.
            </p>
          </div>
        )}

        {mounted ? (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-2xl bg-accent/50 border border-border backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/20 text-primary">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Masters in Data Science</h3>
                  <p className="text-sm text-muted-foreground">Prasanna School of Public Health, MAHE</p>
                  <p className="text-xs text-primary mt-1">Aug 2024 – June 2026</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-accent/50 border border-border backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/20 text-primary">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">BSc in Computer Science & Statistics</h3>
                  <p className="text-sm text-muted-foreground">Mahatma Gandhi Memorial College</p>
                  <p className="text-xs text-primary mt-1">Aug 2021 – July 2024</p>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-accent/50 border border-border backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/20 text-primary">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Masters in Data Science</h3>
                  <p className="text-sm text-muted-foreground">Prasanna School of Public Health, MAHE</p>
                  <p className="text-xs text-primary mt-1">Aug 2024 – June 2026</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-accent/50 border border-border backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/20 text-primary">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">BSc in Computer Science & Statistics</h3>
                  <p className="text-sm text-muted-foreground">Mahatma Gandhi Memorial College</p>
                  <p className="text-xs text-primary mt-1">Aug 2021 – July 2024</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}
