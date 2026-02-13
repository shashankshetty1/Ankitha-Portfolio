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
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          ease: "easeOut",
          delay: 0.1
        }}
        className="relative mb-8"
      >
        {/* Floating Animation Wrapper */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative z-10"
        >
          {/* Glowing Background Ring */}
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl animate-pulse" />

          {/* Image Container */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-tr from-primary/50 via-white/10 to-primary/50 backdrop-blur-sm border border-white/10 overflow-hidden shadow-2xl shadow-primary/20">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F8f8c427692d64d0eb6a4791a13c7e91d%2Fd0490fc3ba904f2caf92e0d34956de1f?format=webp&width=800&height=1200"
              alt="Ankitha Professional Photo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </motion.div>

        {/* Decorative Tech Orbitals */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-48 md:h-48 border border-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 md:w-44 md:h-44 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
      </motion.div>

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
          <a href="mailto:ankitharadhakrishna9@gmail.com" className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white">
            <Mail className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/ankitha-32693223a/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://github.com/ankithaaa10" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white">
            <Github className="w-5 h-5" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
