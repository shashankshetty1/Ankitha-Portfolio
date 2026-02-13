import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMounted } from "@/hooks/use-mounted";

export default function Hero() {
  const mounted = useMounted();

  if (!mounted) return <div className="h-screen" />;

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-6 inline-block py-1 px-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
      >
        <span className="text-sm font-medium text-white/80">Data Scientist & AI Researcher</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl md:text-8xl font-black text-white tracking-tight mb-6"
      >
        ANKITHA
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-lg md:text-xl text-white/60 max-w-2xl mb-10"
      >
        Transforming complex data into actionable insights through Machine Learning, 
        Deep Learning, and Statistical Modeling.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <Button size="lg" className="rounded-full gap-2 group" asChild>
          <a href="#projects">
            View My Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
        <div className="flex items-center gap-3 ml-2">
          <a href="#" className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white">
            <Mail className="w-5 h-5" />
          </a>
          <a href="#" className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white">
            <Github className="w-5 h-5" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
