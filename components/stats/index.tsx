"use client";

import { StatCard } from './stat-card';

export function Stats() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Driving the Future of Sustainable Transportation
        </h2>
        <div className="stats-grid">
          <StatCard
            title="CO₂ Reduction"
            value="5,000+"
            description="Metric tons of CO₂ emissions prevented annually"
            delay={0.1}
          />
          <StatCard
            title="Vehicles Converted"
            value="10+"
            description="Successful EV conversions completed"
            delay={0.2}
          />
          <StatCard
            title="Cost Savings"
            value="65%"
            description="Average savings compared to new EV purchase"
            delay={0.3}
          />
          <StatCard
            title="Customer Satisfaction"
            value="98%"
            description="Of our clients recommend our services"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}

export default Stats;