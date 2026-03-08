import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, ArrowRight } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', path: '/', testId: 'nav-home-link' },
  { label: "Who It's For", path: '/who-its-for', testId: 'nav-who-link' },
  { label: 'Events', path: '/events', testId: 'nav-events-link' },
  { label: 'Community', path: '/community', testId: 'nav-community-link' },
  { label: 'About Us', path: '/about', testId: 'nav-about-link' },
];

export const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      data-testid="main-nav"
      className={`sticky top-0 z-50 w-full border-b transition-all duration-200 ${
        scrolled
          ? 'bg-[#F5F0E8]/95 backdrop-blur-md shadow-sm py-2'
          : 'bg-[#F5F0E8] py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group" data-testid="nav-logo">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E8541A] group-hover:scale-110 transition-transform duration-200" />
          <span className="font-display text-lg sm:text-xl font-semibold text-[#0D1B3E] tracking-tight">
            The Healthtech Collective
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              data-testid={link.testId}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                location.pathname === link.path
                  ? 'text-[#1A7B6E] bg-[rgba(26,123,110,0.08)] font-semibold'
                  : 'text-[#0D1B3E]/75 hover:text-[#0D1B3E] hover:bg-[rgba(13,27,62,0.04)]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/partner">
            <Button
              variant="outline"
              data-testid="nav-partner-button"
              className="border-[rgba(13,27,62,0.18)] text-[#0D1B3E] hover:bg-[rgba(245,240,232,0.65)] text-sm"
            >
              Partner with Us
            </Button>
          </Link>
          <Link to="/join">
            <Button
              data-testid="nav-join-button"
              className="bg-[#E8541A] text-white hover:bg-[#D84B17] text-sm gap-1.5"
            >
              Join Community <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-[#0D1B3E]" data-testid="nav-mobile-toggle">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#F5F0E8] w-[300px] p-0">
              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-[rgba(13,27,62,0.1)]">
                  <span className="font-display text-lg font-semibold text-[#0D1B3E]">Menu</span>
                </div>
                <div className="flex-1 p-6 space-y-1">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors duration-200 ${
                        location.pathname === link.path
                          ? 'text-[#1A7B6E] bg-[rgba(26,123,110,0.08)]'
                          : 'text-[#0D1B3E]/75 hover:text-[#0D1B3E] hover:bg-[rgba(13,27,62,0.04)]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="p-6 space-y-3 border-t border-[rgba(13,27,62,0.1)]">
                  <Link to="/partner" onClick={() => setMobileOpen(false)}>
                    <Button variant="outline" className="w-full border-[rgba(13,27,62,0.18)] text-[#0D1B3E]">
                      Partner with Us
                    </Button>
                  </Link>
                  <Link to="/join" onClick={() => setMobileOpen(false)}>
                    <Button className="w-full bg-[#E8541A] text-white hover:bg-[#D84B17] gap-1.5">
                      Join Community <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
