import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { SectionTag } from '@/components/SectionTag';
import { StatsCounter } from '@/components/StatsCounter';
import { TestimonialCard } from '@/components/TestimonialCard';
import {
  ArrowRight, AlertCircle, BarChart3, Handshake, TrendingUp,
  Calendar, Users, Presentation
} from 'lucide-react';

const STATS = [
  { value: '5,000+', label: 'Healthcare professionals in the community' },
  { value: '1,500+', label: 'Startups in healthtech & life sciences' },
  { value: '30+', label: 'Curated events run in 2025' },
  { value: '1,000+', label: 'Stakeholders actively engaged' },
];

const LOGOS = [
  'Apollo Hospitals', 'Manipal Health', 'Fortis Healthcare', 'Narayana Health',
  'Max Healthcare', 'Cipla', 'Dr. Reddy\'s', 'Biocon', 'PharmEasy',
  'Practo', '1mg', 'MediBuddy',
];

const BENEFITS = [
  { icon: AlertCircle, title: 'Real Problems', description: 'Hear what clinicians and healthcare leaders are actually struggling with — first-hand, unfiltered signal.' },
  { icon: BarChart3, title: 'Early Signals', description: 'See which ideas and startups are gaining real traction before they hit mainstream coverage.' },
  { icon: Handshake, title: 'GTM Opportunities', description: 'Connect with hospitals, pharma, medtech, and investors — without the noise of mass networking.' },
  { icon: TrendingUp, title: 'Path to Scalability', description: 'Move from insight to pilots, partnerships, and scale — with the right introductions at every step.' },
];

const ENGAGEMENT = [
  { icon: Calendar, title: 'Events & Meetups', description: 'In-person gatherings for founders, clinicians, and operators.' },
  { icon: Users, title: 'Closed Roundtables', description: 'Intimate strategic conversations, invite-only.' },
  { icon: Presentation, title: 'Demo Days', description: 'Showcase solutions to relevant stakeholders.' },
];

const TESTIMONIALS = [
  { quote: 'Through THC, we found our first hospital pilot within 6 weeks.', author: 'Healthtech Founder', role: 'CEO', company: 'Diagnostics Startup' },
  { quote: 'THC helps me influence innovation without compromising care.', author: 'Senior Clinician', role: 'Cardiologist', company: 'Apollo Hospitals' },
  { quote: 'This community gave us signal we couldn\'t get anywhere else.', author: 'Healthcare Investor', role: 'Partner', company: 'VC Fund' },
];

export default function Community() {
  return (
    <div data-testid="community-page">
      {/* Hero */}
      <section className="py-16 sm:py-20 lg:py-24" style={{ background: 'linear-gradient(180deg, rgba(13,27,62,0.04) 0%, rgba(245,240,232,1) 60%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag>The THC Community</SectionTag>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[#0D1B3E] tracking-tight leading-tight mb-4">
            Where Healthcare Innovators Meet<br />
            <span className="text-[#E8541A]">Clarity, Connection, and Acceleration</span>
          </h1>
          <p className="text-lg text-[#6B7280] max-w-2xl leading-relaxed mb-6">
            Join a community that doesn't just network — <strong className="text-[#0D1B3E]">makes things happen.</strong>
          </p>
          <Link to="/join">
            <Button data-testid="community-join-button" className="bg-[#E8541A] text-white hover:bg-[#D84B17] gap-1.5">
              Join the THC Community <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatsCounter items={STATS} />
        </div>
      </section>

      {/* Network Logos */}
      <section className="py-12 sm:py-16 bg-white/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag>Our Network</SectionTag>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#0D1B3E] tracking-tight mb-3">
            Our community represents the full healthcare landscape
          </h2>
          <p className="text-[#6B7280] mb-8">HealthTech to hospitals, VCs to pharma — we bring the ecosystem together</p>
          <div className="flex flex-wrap gap-3">
            {LOGOS.map((logo) => (
              <div key={logo} className="px-4 py-2.5 bg-white rounded-full border border-[rgba(13,27,62,0.08)] text-sm font-medium text-[#0D1B3E]/70">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag>Member Benefits</SectionTag>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#0D1B3E] tracking-tight mb-8">
            What You Get
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {BENEFITS.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="bg-white rounded-2xl border border-[rgba(13,27,62,0.10)] p-6 shadow-[0_1px_0_rgba(13,27,62,0.06),0_14px_30px_rgba(13,27,62,0.08)] hover:-translate-y-0.5 transition-transform duration-200">
                  <div className="w-11 h-11 rounded-xl bg-[rgba(26,123,110,0.08)] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#1A7B6E]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0D1B3E] mb-2">{b.title}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{b.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engage */}
      <section className="py-16 sm:py-20 bg-white/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag>Where the Magic Happens</SectionTag>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#0D1B3E] tracking-tight mb-8">
            How to Engage in the Community
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
            {ENGAGEMENT.map((e) => {
              const Icon = e.icon;
              return (
                <div key={e.title} className="bg-white rounded-2xl border border-[rgba(13,27,62,0.10)] p-6 shadow-[0_1px_0_rgba(13,27,62,0.06),0_14px_30px_rgba(13,27,62,0.08)]">
                  <div className="w-11 h-11 rounded-xl bg-[rgba(26,123,110,0.08)] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#1A7B6E]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0D1B3E] mb-2">{e.title}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{e.description}</p>
                </div>
              );
            })}
          </div>
          <Link to="/events">
            <Button className="bg-[#0D1B3E] text-[#F5F0E8] hover:bg-[rgba(13,27,62,0.92)] gap-1.5">
              Explore All Events <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag>Real Stories, Real Impact</SectionTag>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20" style={{ background: 'linear-gradient(90deg, rgba(26,123,110,0.10), rgba(232,84,26,0.10))' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#0D1B3E] tracking-tight mb-3">
            Ready to Join?
          </h2>
          <p className="text-[#6B7280] text-lg mb-8">5,000+ healthcare professionals are already inside.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/join">
              <Button className="bg-[#E8541A] text-white hover:bg-[#D84B17] gap-1.5 h-11 px-6">
                Join the Community <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
            <Link to="/join">
              <Button variant="outline" className="border-[rgba(13,27,62,0.18)] text-[#0D1B3E] hover:bg-white/60 h-11 px-6">
                View Membership Tiers
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
