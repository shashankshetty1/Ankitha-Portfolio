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
          whileHover={{
            rotateX: 10,
            rotateY: 10,
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            y: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="relative z-10 perspective-1000"
        >
          {/* Glowing Background Ring / Soft Pulse */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 rounded-full bg-primary/30 blur-3xl"
          />

          {/* Image Container */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full p-1.5 bg-gradient-to-tr from-primary via-white/20 to-primary/60 backdrop-blur-md border border-white/20 overflow-hidden shadow-[0_0_50px_rgba(var(--primary),0.3)] transition-shadow duration-500 hover:shadow-[0_0_70px_rgba(var(--primary),0.5)]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F8f8c427692d64d0eb6a4791a13c7e91d%2Fd0490fc3ba904f2caf92e0d34956de1f?format=webp&width=800&height=1200"
              alt="Ankitha Professional Photo"
              className="w-full h-full object-cover rounded-full transition-transform duration-500 hover:scale-110"
            />
          </div>
        </motion.div>

        {/* Decorative Tech Orbitals */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-72 md:h-72 border border-primary/20 rounded-full animate-[spin_12s_linear_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 md:w-68 md:h-68 border border-white/10 rounded-full animate-[spin_18s_linear_infinite_reverse]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-6 inline-block py-1 px-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
      >
        <span className="text-sm font-medium text-white/80">Aspairing Data Scientist</span>
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
