"use client";

import { Battery, Cpu, Gauge, Shield } from 'lucide-react';
import { FeatureCard } from './feature-card';

export function Features() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose ReVitalize?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our cutting-edge technology and expertise make electric vehicle conversion accessible, affordable, and reliable.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={Battery}
            title="Advanced Battery Tech"
            description="State-of-the-art battery systems with industry-leading range and longevity"
            delay={0.1}
          />
          <FeatureCard
            icon={Cpu}
            title="AI-Powered Optimization"
            description="Smart systems that learn and adapt to your driving style for maximum efficiency"
            delay={0.2}
          />
          <FeatureCard
            icon={Gauge}
            title="Enhanced Performance"
            description="Improved torque and acceleration while maintaining vehicle integrity"
            delay={0.3}
          />
          <FeatureCard
            icon={Shield}
            title="Safety Guaranteed"
            description="Rigorous testing and certification processes for peace of mind"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}

export default Features;