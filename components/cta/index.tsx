"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="bg-primary text-primary-foreground rounded-lg p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Vehicle?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join the sustainable mobility revolution today and convert your vehicle to electric with ReVitalize
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="group"
          >
            Start Your Journey
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}