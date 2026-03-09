import { SectionTag } from '@/components/SectionTag';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Linkedin } from 'lucide-react';

const TEAM = [
  {
    name: 'Parul',
    role: 'Founder',
    image: 'https://customer-assets.emergentagent.com/job_website-maker-219/artifacts/d0kx6kdc_Screenshot%202026-03-09%20at%2012.01.13%E2%80%AFPM.png',
    initials: 'P',
  },
  {
    name: 'Dr. Raunaq Pradhan',
    role: 'Founding Member',
    image: 'https://customer-assets.emergentagent.com/job_website-maker-219/artifacts/gzt6vucq_Screenshot%202026-03-09%20at%2012.03.41%E2%80%AFPM.png',
    initials: 'RP',
  },
  {
    name: 'Shashank Dixit',
    role: 'Founder Office',
    image: 'https://customer-assets.emergentagent.com/job_website-maker-219/artifacts/3h24csc4_Screenshot%202026-03-09%20at%2012.04.48%E2%80%AFPM.png',
    initials: 'SD',
  },
];

const VALUES = [
  {
    title: 'Our Mission',
    description: 'THC turns healthcare problems into adopted solutions \u2014 at scale.',
    bg: 'bg-[#0D1B3E]',
    text: 'text-white',
    tagColor: 'text-[#E8541A]',
  },
  {
    title: 'Our Vision',
    description: 'A world where every meaningful healthcare innovation finds its path to real-world adoption.',
    bg: 'bg-[#1A7B6E]',
    text: 'text-white',
    tagColor: 'text-[#F5F0E8]/60',
  },
  {
    title: 'Our Values',
    description: 'Curated over chaotic. Signal over noise. Collaboration over competition.',
    bg: 'bg-white',
    text: 'text-[#0D1B3E]',
    tagColor: 'text-[#1A7B6E]',
  },
];

export default function About() {
  return (
    <div data-testid="about-page">
      {/* Story Hero */}
      <section className="py-16 sm:py-20 lg:py-24" style={{ background: 'linear-gradient(180deg, rgba(13,27,62,0.04) 0%, rgba(245,240,232,1) 60%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
            <div>
              <SectionTag>Our Story</SectionTag>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0D1B3E] tracking-tight leading-tight mb-6">
                Built from the Belief that Healthcare Innovation Fails Without the Right <span className="text-[#E8541A]">Ecosystem</span>
              </h1>
              <div className="space-y-5 text-[#6B7280] leading-relaxed">
                <p>
                  THC was founded to fix the disconnect between innovators and healthcare adopters.
                </p>
                <blockquote className="relative bg-white rounded-2xl border-l-4 border-[#E8541A] p-6 shadow-[0_1px_0_rgba(13,27,62,0.06),0_14px_30px_rgba(13,27,62,0.08)]">
                  <span className="absolute -top-3 -left-1 text-[#E8541A]/15 font-display text-6xl leading-none select-none">"</span>
                  <p className="text-lg sm:text-xl text-[#0D1B3E] font-medium leading-snug mb-5">
                    Too many great solutions fail not because they're bad — but because they never found the
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-[rgba(232,84,26,0.08)] border border-[rgba(232,84,26,0.2)] text-sm font-semibold text-[#E8541A] not-italic">Right Problems</span>
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-[rgba(26,123,110,0.08)] border border-[rgba(26,123,110,0.2)] text-sm font-semibold text-[#1A7B6E] not-italic">Right Partners</span>
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-[rgba(13,27,62,0.06)] border border-[rgba(13,27,62,0.15)] text-sm font-semibold text-[#0D1B3E] not-italic">Right Path to Adoption</span>
                  </div>
                </blockquote>
                <p>
                  We're building the infrastructure for that journey.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <img
                src="https://customer-assets.emergentagent.com/job_website-maker-219/artifacts/9jzuu1or_Screenshot%202026-03-09%20at%2011.56.46%E2%80%AFAM.png"
                alt="The THC Community"
                className="w-full h-full max-h-[500px] object-cover rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#0D1B3E] tracking-tight mb-8">
            Core Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM.map((member, i) => (
              <div
                key={i}
                data-testid={`team-member-${i}`}
                className="bg-white rounded-2xl border border-[rgba(13,27,62,0.10)] p-6 shadow-[0_1px_0_rgba(13,27,62,0.06),0_14px_30px_rgba(13,27,62,0.08)] text-center hover:-translate-y-0.5 transition-transform duration-200"
              >
                <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white bg-white relative" style={{ boxShadow: '0 0 0 1px rgba(13,27,62,0.08)' }}>
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover scale-[0.72] rounded-full" />
                  ) : (
                    <div className="w-full h-full bg-[#0D1B3E] flex items-center justify-center">
                      <span className="text-white text-lg font-semibold">{member.initials}</span>
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-[#0D1B3E]">{member.name}</h3>
                <p className="text-sm text-[#6B7280] mt-1">{member.role}</p>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-[#1A7B6E] mt-3 hover:underline">
                  <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className={`${v.bg} ${v.text} rounded-2xl p-6 sm:p-8 ${
                  v.bg === 'bg-white' ? 'border border-[rgba(13,27,62,0.10)] shadow-[0_1px_0_rgba(13,27,62,0.06),0_14px_30px_rgba(13,27,62,0.08)]' : ''
                }`}
              >
                <span className={`font-mono text-[11px] tracking-[0.12em] uppercase ${v.tagColor} block mb-3`}>
                  {v.title}
                </span>
                <p className="text-lg sm:text-xl font-semibold leading-snug">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
