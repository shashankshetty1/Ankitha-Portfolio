import Section from "./Section";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { useMounted } from "@/hooks/use-mounted";

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
  const mounted = useMounted();

  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          mounted ? (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col p-6 rounded-3xl bg-accent/50 border border-border hover:border-primary/50 transition-all duration-300 backdrop-blur-sm overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  {project.category}
                </span>
                <a href={project.link} className="p-2 rounded-full bg-accent/50 hover:bg-primary hover:text-foreground transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-accent/50 border border-border text-[10px] font-semibold text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ) : (
            <div
              key={project.title}
              className="group relative flex flex-col p-6 rounded-3xl bg-accent/50 border border-border backdrop-blur-sm overflow-hidden"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  {project.category}
                </span>
                <a href={project.link} className="p-2 rounded-full bg-accent/50 transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-accent/50 border border-border text-[10px] font-semibold text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )
        ))}
      </div>
    </Section>
  );
}
