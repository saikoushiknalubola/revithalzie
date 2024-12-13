"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', emissions: 1000 },
  { month: 'Feb', emissions: 2200 },
  { month: 'Mar', emissions: 3400 },
  { month: 'Apr', emissions: 4800 },
  { month: 'May', emissions: 6400 },
  { month: 'Jun', emissions: 8200 },
  { month: 'Jul', emissions: 10000 },
  { month: 'Aug', emissions: 12000 },
  { month: 'Sep', emissions: 14200 },
  { month: 'Oct', emissions: 16500 },
  { month: 'Nov', emissions: 19000 },
  { month: 'Dec', emissions: 21500 },
];

export function ImpactChart() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full h-[400px]"
    >
      <ResponsiveContainer>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="emissions"
            stroke="hsl(var(--primary))"
            fill="hsl(var(--primary))"
            fillOpacity={0.2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  );
}