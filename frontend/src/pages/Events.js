import { useState, useEffect } from 'react';
import { SectionTag } from '@/components/SectionTag';
import { TestimonialCard } from '@/components/TestimonialCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Link } from 'react-router-dom';
import { fetchEvents } from '@/lib/api';
import {
  ArrowRight, Calendar, Users, MessageSquare, Presentation, FlaskConical, Code,
  MapPin, Tag, ChevronRight
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
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('upcoming');

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const data = await fetchEvents();
        setEvents(data);
      } catch (err) {
        setError('Failed to load events. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const filteredEvents = events.filter(e =>
    filter === 'upcoming' ? e.is_upcoming : !e.is_upcoming
  );

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

      {/* Upcoming & Past Events */}
      <section className="py-16 sm:py-20 bg-white/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <SectionTag>{filter === 'upcoming' ? 'Upcoming' : 'Past Events'}</SectionTag>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#0D1B3E] tracking-tight">
                {filter === 'upcoming' ? 'Upcoming Events' : '30+ Events. Real Impact.'}
              </h2>
            </div>
            <div className="flex gap-2">
              <Button
                variant={filter === 'upcoming' ? 'default' : 'outline'}
                onClick={() => setFilter('upcoming')}
                className={filter === 'upcoming' ? 'bg-[#0D1B3E] text-white' : 'border-[rgba(13,27,62,0.18)] text-[#0D1B3E]'}
                size="sm"
              >
                Upcoming
              </Button>
              <Button
                variant={filter === 'past' ? 'default' : 'outline'}
                onClick={() => setFilter('past')}
                className={filter === 'past' ? 'bg-[#0D1B3E] text-white' : 'border-[rgba(13,27,62,0.18)] text-[#0D1B3E]'}
                size="sm"
              >
                Past
              </Button>
            </div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-2xl border border-[rgba(13,27,62,0.10)] p-6">
                  <Skeleton className="h-4 w-20 mb-3" />
                  <Skeleton className="h-6 w-full mb-3" />
                  <Skeleton className="h-4 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-[#6B7280] mb-4">{error}</p>
              <Button onClick={() => window.location.reload()} variant="outline" className="border-[rgba(13,27,62,0.18)]">
                Retry
              </Button>
            </div>
          ) : filteredEvents.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[#6B7280]">No {filter} events at the moment. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredEvents.map((event) => (
                <div key={event.id} data-testid={`event-card-${event.id}`} className="bg-white rounded-2xl border border-[rgba(13,27,62,0.10)] p-6 shadow-[0_1px_0_rgba(13,27,62,0.06),0_14px_30px_rgba(13,27,62,0.08)] hover:-translate-y-0.5 transition-transform duration-200">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="font-mono text-[10px] tracking-wider border-[rgba(13,27,62,0.15)] text-[#6B7280]">
                      {event.date}
                    </Badge>
                    <Badge variant="outline" className="font-mono text-[10px] tracking-wider border-[rgba(26,123,110,0.25)] text-[#1A7B6E]">
                      {event.location}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-[#0D1B3E] mb-2">{event.title}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed mb-3">{event.description}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="flex items-center gap-1 text-xs text-[#6B7280]">
                      <Tag className="w-3 h-3" /> {event.format}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-[#6B7280]">
                      <Users className="w-3 h-3" /> {event.audience}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
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
