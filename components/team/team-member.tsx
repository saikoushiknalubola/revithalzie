"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  delay?: number;
}

export function TeamMember({ name, role, image, delay = 0 }: TeamMemberProps) {
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
      className="group"
    >
      <div className="relative overflow-hidden rounded-lg aspect-square mb-4">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-muted-foreground">{role}</p>
    </motion.div>
  );
}