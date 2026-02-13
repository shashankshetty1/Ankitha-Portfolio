import Section from "./Section";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Lung Cancer Analysis and Prediction",
    category: "Machine Learning / Statistics",
    description: "Performed data preprocessing, exploratory data analysis, and visualization for pattern discovery. Applied Logistic Regression and Decision Tree for disease classification.",
    tags: ["Python", "Scikit-learn", "Statistical Modeling"],
    link: "#",
  },
  {
    title: "Benchmarking LLMs in Kannada",
    category: "Deep Learning / NLP",
    description: "Implemented SVM and transformer-based models (IndicBERT, MuRIL) for Kannada news headline classification. Conducted specialized preprocessing for low-resource languages.",
    tags: ["IndicBERT", "MuRIL", "Transformers", "NLP"],
    link: "#",
  },
  {
    title: "Healthcare Data Analysis Dashboard",
    category: "Data Visualization",
    description: "Built an Excel-based analytics dashboard analyzing 5,000 heart failure patient records using Pivot Tables, slicers, and advanced formulas.",
    tags: ["Excel", "Power BI", "Data Visualization"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex flex-col p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 backdrop-blur-sm overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                {project.category}
              </span>
              <a href={project.link} className="p-2 rounded-full bg-white/5 hover:bg-primary hover:text-white transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
              {project.title}
            </h3>

            <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-semibold text-white/40">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
