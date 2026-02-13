import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useMounted } from "@/hooks/use-mounted";

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export default function Section({ id, title, children, className, containerClassName }: SectionProps) {
  const mounted = useMounted();

  return (
    <section id={id} className={cn("py-20 px-6", className)}>
      <div className={cn("max-w-6xl mx-auto", containerClassName)}>
        {title && (
          <div className="text-center mb-12">
            {mounted ? (
              <>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl md:text-4xl font-bold text-white mb-4"
                >
                  {title}
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  whileInView={{ opacity: 1, width: 80 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="h-1 bg-primary mx-auto rounded-full"
                />
              </>
            ) : (
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
