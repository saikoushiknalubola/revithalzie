"use client";

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 hero-gradient" />
      </div>

      <div className="container relative z-10 text-white pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transforming Mobility: Affordable. Sustainable. Electric.
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            We convert traditional vehicles into electric ones at 1/3rd the cost of a new EV. 
            Powered by AI, making sustainable mobility accessible for everyone.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              Start Your EV Journey
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;