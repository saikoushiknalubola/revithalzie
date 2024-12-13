"use client";

import Link from 'next/link';
import { Zap } from 'lucide-react';
import { NewsletterForm } from './newsletter-form';
import { ImpactMetrics } from './impact-metrics';
import { SocialLinks } from './social-links';
import { ScrollToTop } from './scroll-to-top';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Solutions', href: '/solutions' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'FAQs', href: '/faqs' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookies' },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <Zap className="w-8 h-8" />
              <span className="font-poppins font-bold text-xl">ReVitalize</span>
            </Link>
            <p className="text-sm text-primary-foreground/80">
              Empowering Green Mobility with Innovative EV Conversion Solutions
            </p>
            <SocialLinks />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic space-y-3 text-primary-foreground/80">
              <p>Warangal</p>
              <p>Telangana, India</p>
              <p>Phone: +91 7671030069</p>
              <p>Email: revitalizeelectric@gmail.com</p>
            </address>
          </div>

          {/* Newsletter */}
          <div>
            <NewsletterForm />
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="mt-12 pt-12 border-t border-primary-foreground/20">
          <h3 className="text-lg font-semibold text-center mb-4">Our Impact</h3>
          <ImpactMetrics />
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/80">
            © {new Date().getFullYear()} ReVitalize. All rights reserved.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <ScrollToTop />
    </footer>
  );
}