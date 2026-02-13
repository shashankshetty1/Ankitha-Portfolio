import Section from "./Section";
import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  BarChart3, 
  Cpu, 
  Layers, 
  LineChart, 
  MessageSquare,
  Binary
} from "lucide-react";

const skillGroups = [
  {
    title: "Programming & Data",
    skills: [
      { name: "Python", icon: Code2 },
      { name: "R Programming", icon: LineChart },
      { name: "SQL (MySQL)", icon: Database },
      { name: "SAS Programming", icon: Binary },
    ],
  },
  {
    title: "Machine Learning & AI",
    skills: [
      { name: "Deep Learning", icon: Cpu },
      { name: "NLP", icon: MessageSquare },
      { name: "Machine Learning", icon: Layers },
      { name: "Statistical Inference", icon: BarChart3 },
    ],
  },
  {
    title: "Libraries & Tools",
    skills: [
      { name: "TensorFlow & Keras", icon: Cpu },
      { name: "Scikit-learn", icon: Layers },
      { name: "Pandas & NumPy", icon: Database },
      { name: "Power BI & Excel", icon: BarChart3 },
    ],
  },
];

export default function Skills() {
  return (
    <Section id="skills" title="Technical Skills" className="bg-white/5">
      <div className="grid md:grid-cols-3 gap-8">
        {skillGroups.map((group, groupIdx) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
            className="p-8 rounded-3xl bg-black/40 border border-white/5 backdrop-blur-md"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              {group.title}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {group.skills.map((skill) => (
                <div key={skill.name} className="flex flex-col gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                  <skill.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-white/80">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
