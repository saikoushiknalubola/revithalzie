"use client";

import { ProcessStep } from './process-step';

export function Process() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Conversion Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A streamlined approach to transforming your vehicle into an electric powerhouse
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-12">
          <ProcessStep
            step={1}
            title="Initial Assessment"
            description="We evaluate your vehicle's compatibility and discuss your specific needs and requirements"
            delay={0.1}
          />
          <ProcessStep
            step={2}
            title="Custom Design"
            description="Our engineers create a tailored conversion plan optimized for your vehicle"
            delay={0.2}
          />
          <ProcessStep
            step={3}
            title="Conversion"
            description="Expert technicians perform the conversion using state-of-the-art components"
            delay={0.3}
          />
          <ProcessStep
            step={4}
            title="Quality Assurance"
            description="Rigorous testing and certification to ensure safety and performance"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}