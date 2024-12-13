"use client";

import { ImpactChart } from './impact-chart';

export function Impact() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Environmental Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track our contribution to reducing carbon emissions and creating a sustainable future
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-lg">
          <ImpactChart />
          <div className="mt-8 text-center">
            <p className="text-2xl font-bold text-primary">21,500+ Metric Tons</p>
            <p className="text-muted-foreground">CO₂ Emissions Prevented so Far</p>
          </div>
        </div>
      </div>
    </section>
  );
}