"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  delay?: number;
}

export function StatCard({ title, value, description, delay = 0 }: StatCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className="bg-card p-6 rounded-lg shadow-lg"
    >
      <h3 className="text-lg font-medium text-muted-foreground mb-2">{title}</h3>
      <p className="text-4xl font-bold text-primary mb-2">{value}</p>
      <p className="text-sm text-muted-foreground">{description}</p>
    </motion.div>
  );
}