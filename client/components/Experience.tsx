import Section from "./Section";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useMounted } from "@/hooks/use-mounted";

const experiences = [
  {
    role: "Statistical Consultant (Guided by Faculty)",
    company: "Department of Data Science, MAHE",
    period: "Feb 2025 - Dec 2025",
    description: [
      "Provided statistical consultation to postgraduate students on study design and methodology.",
      "Performed data analysis, hypothesis testing, and interpretation of results."
    ],
  },
  {
    role: "AI and ML Intern",
    company: "ELEVATE LABS (Online Internship)",
    period: "July 2025 - Aug 2025",
    description: [
      "Applied data preprocessing, statistical programming, and exploratory analysis using Python and SQL.",
      "Developed proficiency in handling, cleaning, and analyzing large-scale datasets for reporting and insights."
    ],
  },
];

export default function Experience() {
  const mounted = useMounted();

  return (
    <Section id="experience" title="Professional Experience" className="bg-white/5">
      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          mounted ? (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 pb-12 last:pb-0 border-l border-white/10"
            >
              <div className="absolute left-[-9px] top-0 p-1.5 rounded-full bg-primary border-4 border-black">
                <Briefcase className="w-3 h-3 text-white" />
              </div>

              <div className="flex flex-wrap items-baseline justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <span className="text-sm font-semibold text-white/40 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex gap-3 text-white/60 leading-relaxed">
                    <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/40" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ) : (
            <div
              key={exp.role}
              className="relative pl-8 pb-12 last:pb-0 border-l border-white/10"
            >
              <div className="absolute left-[-9px] top-0 p-1.5 rounded-full bg-primary border-4 border-black">
                <Briefcase className="w-3 h-3 text-white" />
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <span className="text-sm font-semibold text-white/40 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex gap-3 text-white/60 leading-relaxed">
                    <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/40" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )
        ))}
      </div>
    </Section>
  );
}
