import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export default function Section({ id, title, children, className, containerClassName }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 px-6", className)}>
      <div className={cn("max-w-6xl mx-auto", containerClassName)}>
        {title && (
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
          >
            {title}
            <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full" />
          </motion.h2>
        )}
        {children}
      </div>
    </section>
  );
}
