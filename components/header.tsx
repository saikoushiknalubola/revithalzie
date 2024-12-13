"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
    )}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center space-x-2">
            <Zap className="w-8 h-8 text-primary" />
            <span className="font-poppins font-bold text-xl">ReVitalize</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/solutions" className="nav-link">Solutions</Link>
            <Link href="/how-it-works" className="nav-link">How It Works</Link>
            <Link href="/blog" className="nav-link">Blog</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
          </div>

          <Button className="bg-secondary hover:bg-secondary/90">
            Apply Now
          </Button>
        </nav>
      </div>
    </header>
  );
}