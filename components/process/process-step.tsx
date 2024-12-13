"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  delay?: number;
}

export function ProcessStep({ step, title, description, delay = 0 }: ProcessStepProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.6, delay }}
      className="flex gap-6"
    >
      <div className="flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
          {step}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}