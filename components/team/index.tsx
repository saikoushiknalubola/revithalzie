"use client";

import { TeamMember } from './team-member';

export function Team() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate professionals dedicated to revolutionizing sustainable transportation
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <TeamMember
            name="Saikoushik Nalubola"
            role="Founder & CEO"
            image="https://i.postimg.cc/hj6cMbSj/koushik-photo.jpg"
            delay={0.1}
          />
          <TeamMember
            name="Pagidi Siddhartha"
            role="Co-Founder"
            image="https://i.postimg.cc/XqLx4xpN/chifuyu.jpg"
            delay={0.2}
          />
          <TeamMember
            name="Gullapelli Phaneendra"
            role="Co-Founder & Director"
            image="https://i.postimg.cc/5NtS8BXv/lallu-1.jpg"
            delay={0.3}
          />
          <TeamMember
            name="Ashrad Mohammad"
            role="Operations Manager"
            image="https://i.postimg.cc/x1MJm83M/ashard.jpg"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}
