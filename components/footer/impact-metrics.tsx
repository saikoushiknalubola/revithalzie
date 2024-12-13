"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const metrics = [
  { label: 'Vehicles Retrofitted', value: '10+' },
  { label: 'CO₂ Emissions Saved', value: '21K tons' },
  { label: 'Components Recycled', value: '5K+' },
];

export function ImpactMetrics() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6"
    >
      {metrics.map((metric, index) => (
        <div key={index} className="text-center">
          <div className="text-xl font-bold text-secondary">{metric.value}</div>
          <div className="text-sm text-muted-foreground">{metric.label}</div>
        </div>
      ))}
    </motion.div>
  );
}