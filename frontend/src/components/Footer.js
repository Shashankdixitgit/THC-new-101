import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Instagram } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const FOOTER_NAV = [
  { label: 'Home', path: '/' },
  { label: "Who It's For", path: '/who-its-for' },
  { label: 'Events', path: '/events' },
  { label: 'Community', path: '/community' },
  { label: 'About Us', path: '/about' },
];

const FOOTER_JOIN = [
  { label: 'THC Open (Free)', path: '/join' },
  { label: 'Starter', path: '/join' },
  { label: 'ASCENT', path: '/join' },
  { label: 'Catalyst Circle', path: '/join' },
];

const FOOTER_CONNECT = [
  { label: 'Partner with Us', path: '/partner' },
  { label: 'Contact', path: '/partner' },
  { label: 'Newsletter', path: '/join' },
];

export const Footer = () => {
  return (
    <footer data-testid="site-footer" className="bg-[#0D1B3E] text-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E8541A]" />
              <span className="font-display text-lg font-semibold">The Healthtech Collective</span>
            </div>
            <p className="text-sm text-[#F5F0E8]/60 leading-relaxed mb-6 max-w-xs">
              Building India's largest healthtech community — where innovation meets real-world adoption.
            </p>
            <div className="flex gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-[rgba(255,255,255,0.06)] flex items-center justify-center hover:bg-[rgba(255,255,255,0.12)] transition-colors duration-200" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-[rgba(255,255,255,0.06)] flex items-center justify-center hover:bg-[rgba(255,255,255,0.12)] transition-colors duration-200" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-[rgba(255,255,255,0.06)] flex items-center justify-center hover:bg-[rgba(255,255,255,0.12)] transition-colors duration-200" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-[11px] tracking-[0.12em] uppercase text-[#F5F0E8]/40 mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {FOOTER_NAV.map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="text-sm text-[#F5F0E8]/70 hover:text-white transition-colors duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Join */}
          <div>
            <h4 className="font-mono text-[11px] tracking-[0.12em] uppercase text-[#F5F0E8]/40 mb-4">Join</h4>
            <ul className="space-y-2.5">
              {FOOTER_JOIN.map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="text-sm text-[#F5F0E8]/70 hover:text-white transition-colors duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-mono text-[11px] tracking-[0.12em] uppercase text-[#F5F0E8]/40 mb-4">Connect</h4>
            <ul className="space-y-2.5">
              {FOOTER_CONNECT.map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="text-sm text-[#F5F0E8]/70 hover:text-white transition-colors duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-[rgba(255,255,255,0.08)]" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[11px] text-[#F5F0E8]/40">
            &copy; {new Date().getFullYear()} The Healthtech Collective. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-[#F5F0E8]/40 hover:text-[#F5F0E8]/70 transition-colors duration-200 cursor-pointer">Privacy Policy</span>
            <span className="text-xs text-[#F5F0E8]/40 hover:text-[#F5F0E8]/70 transition-colors duration-200 cursor-pointer">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
