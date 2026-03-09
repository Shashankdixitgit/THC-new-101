import { SectionTag } from '@/components/SectionTag';
import { TestimonialCard } from '@/components/TestimonialCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Calendar, Users, MessageSquare, Presentation, FlaskConical, Code,
  MapPin
} from 'lucide-react';

const EVENT_FORMATS = [
  { icon: Calendar, title: 'Events & Meetups', description: 'In-person and virtual gatherings bringing together founders, clinicians, and operators.' },
  { icon: MessageSquare, title: 'Panel Discussions', description: 'Expert-led conversations on topics shaping the future of healthcare delivery.' },
  { icon: Users, title: 'Closed-Door Roundtables', description: 'Intimate, invite-only sessions for deeper discussions and strategic conversations.' },
  { icon: Presentation, title: 'Demo Days & Showcases', description: 'Curated platforms for startups to present to relevant stakeholders and investors.' },
  { icon: FlaskConical, title: 'Clinical Feedback Sessions', description: 'Structured sessions for founders to receive validation from practicing clinicians.' },
  { icon: Code, title: 'Bootcamps & Buildathons', description: 'Intensive formats focused on specific healthcare challenges — from discovery to solution sprints.' },
];

const CHAPTERS = ['Bengaluru', 'Mumbai', 'Delhi / NCR', 'Hyderabad', 'Chennai', 'Pune'];

const TESTIMONIALS = [
  { quote: 'THC helped me connect with oncologists and understand their diagnostics workflow better', author: 'Healthtech Founder', role: 'Diagnostics Startup', company: 'Bengaluru' },
  { quote: 'One of the rare communities where everyone truly understands the complexities and long-game nature of healthcare.', author: 'Healthcare Investor', role: 'Partner', company: 'Mumbai' },
  { quote: 'Great experience with THC. Parul and her team bring great energy to connect health tech startups with mentors and investors.', author: 'MedTech CEO', role: 'Founder', company: 'Delhi' },
];

export default function Events() {

  return (
    <div data-testid="events-page">
      {/* Hero */}
      <section className="py-16 sm:py-20 lg:py-24" style={{ background: 'linear-gradient(180deg, rgba(13,27,62,0.04) 0%, rgba(245,240,232,1) 60%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[#0D1B3E] tracking-tight leading-tight mb-4">
            Where Healthcare<br /><span className="text-[#E8541A]">Innovation Happens</span> in the Room
          </h1>
          <p className="text-lg text-[#6B7280] max-w-2xl leading-relaxed mb-6">
            Curated, high-signal engagements designed for real conversations — not mass networking.
          </p>
          <Link to="/partner">
            <Button data-testid="events-cohost-button" className="bg-[#E8541A] text-white hover:bg-[#D84B17] gap-1.5">
              Attend or Co-Host an Event <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Event Formats */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag>Formats</SectionTag>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#0D1B3E] tracking-tight mb-8">
            How We Bring People Together
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {EVENT_FORMATS.map((fmt) => {
              const Icon = fmt.icon;
              return (
                <div key={fmt.title} className="bg-white rounded-2xl border border-[rgba(13,27,62,0.10)] p-6 shadow-[0_1px_0_rgba(13,27,62,0.06),0_14px_30px_rgba(13,27,62,0.08)] hover:-translate-y-0.5 transition-transform duration-200">
                  <div className="w-11 h-11 rounded-xl bg-[rgba(26,123,110,0.08)] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#1A7B6E]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0D1B3E] mb-2">{fmt.title}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{fmt.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Luma Events Calendar */}
      <section className="py-16 sm:py-20 bg-white/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <SectionTag>Live Calendar</SectionTag>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#0D1B3E] tracking-tight">
              Upcoming & Past Events
            </h2>
            <p className="text-[#6B7280] mt-2">Browse our full event calendar — register directly from here.</p>
          </div>
          <div className="bg-white rounded-2xl border border-[rgba(13,27,62,0.10)] overflow-hidden shadow-[0_1px_0_rgba(13,27,62,0.06),0_14px_30px_rgba(13,27,62,0.08)]">
            <iframe
              src="https://lu.ma/embed/calendar/cal-El9ui64zmnueE73/events?lt=light"
              title="THC Events Calendar"
              className="w-full border-0"
              style={{ height: '600px' }}
              allowFullScreen
              aria-hidden="false"
              tabIndex="0"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag>Heard at THC Events</SectionTag>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* Chapters */}
      <section className="py-16 sm:py-20 bg-white/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTag className="text-center">Chapters</SectionTag>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#0D1B3E] tracking-tight mb-3">
            THC is Growing City by City
          </h2>
          <p className="text-[#6B7280] mb-8">Active chapters across India — with more launching soon.</p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {CHAPTERS.map((city) => (
              <div key={city} className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-full border border-[rgba(13,27,62,0.10)] text-sm font-medium text-[#0D1B3E]">
                <MapPin className="w-3.5 h-3.5 text-[#1A7B6E]" />
                {city}
              </div>
            ))}
            <div className="px-4 py-2.5 bg-[rgba(232,84,26,0.04)] rounded-full border border-[rgba(232,84,26,0.12)] text-sm font-medium text-[#E8541A]">
              + More Coming
            </div>
          </div>
          <Link to="/partner">
            <Button className="bg-[#0D1B3E] text-[#F5F0E8] hover:bg-[rgba(13,27,62,0.92)] gap-1.5">
              Start a Chapter <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
