import { Suspense } from 'react';
import { Hero } from '@/components/hero';
import { Stats } from '@/components/stats';
import { Features } from '@/components/features';
import { Process } from '@/components/process';
import { Team } from '@/components/team';
import { Impact } from '@/components/impact';
import { CTA } from '@/components/cta';

export default function Home() {
  return (
    <>
      <Suspense fallback={<div className="min-h-screen" />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<div className="py-20" />}>
        <Stats />
      </Suspense>
      <Suspense fallback={<div className="py-20" />}>
        <Features />
      </Suspense>
      <Suspense fallback={<div className="py-20" />}>
        <Process />
      </Suspense>
      <Suspense fallback={<div className="py-20" />}>
        <Team />
      </Suspense>
      <Suspense fallback={<div className="py-20" />}>
        <Impact />
      </Suspense>
      <Suspense fallback={<div className="py-20" />}>
        <CTA />
      </Suspense>
    </>
  );
}