import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LogoMarquee } from '@/components/LogoMarquee';
import { FlywheelDiagram } from '@/components/FlywheelDiagram';
import { StakeholderCard } from '@/components/StakeholderCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { SectionTag } from '@/components/SectionTag';
import { ArrowRight, Stethoscope, Rocket, Building2, Pill, TrendingUp, ChevronDown } from 'lucide-react';

const STAKEHOLDERS = [
  { icon: Rocket, title: 'Founders & Startups', description: 'Build for real healthcare problems and meet the right partners', testId: 'stakeholder-card-founders' },
  { icon: Stethoscope, title: 'Clinicians', description: 'Shape solutions that fit clinical reality', testId: 'stakeholder-card-clinicians' },
  { icon: Building2, title: 'Operators & Hospitals', description: 'Explore vetted solutions for real needs', testId: 'stakeholder-card-operators' },
  { icon: Pill, title: 'Pharma & Medtech', description: 'Identify high potential innovation across your value chain', testId: 'stakeholder-card-pharma' },
  { icon: TrendingUp, title: 'Investors & Partners', description: 'Invest in solutions with validated signals', testId: 'stakeholder-card-investors' },
];

const ROW1_IMAGES = [
  { src: 'https://customer-assets.emergentagent.com/job_website-maker-219/artifacts/jz8ox25e_Event%20Picture%20Feb%202%202026%20%281%29.jpeg', alt: 'Whiteboard session' },
  { src: 'https://customer-assets.emergentagent.com/job_website-maker-219/artifacts/631cps19_Event%20Picture%20Feb%202%202026%20%282%29.jpeg', alt: 'Community meetup' },
  { src: 'https://customer-assets.emergentagent.com/job_website-maker-219/artifacts/4vtxcyw7_Event%20Picture%20Feb%202%202026%20%283%29.jpeg', alt: 'Networking evening' },
  { src: 'https://customer-assets.emergentagent.com/job_website-maker-219/artifacts/a4zdv9ij_Event%20Picture%20Feb%202%202026.jpeg', alt: 'Group photo' },
  { src: 'https://customer-assets.emergentagent.com/job_website-maker-219/artifacts/7f6wyd4l_Event%20Pictures%20Feb%202%202026.jpeg', alt: 'Digital Transformation talk' },
  { src: 'https://customer-assets.emergentagent.com/job_website-maker-219/artifacts/7qrfhn27_LinkedIn%20Image.jpeg', alt: 'THC community gathering' },
];

const ROW2_IMAGES = [
  { src: 'https://customer-assets.emergentagent.com/job_website-maker-219/artifacts/7f6wyd4l_Event%20Pictures%20Feb%202%202026.jpeg', alt: 'Digital Transformation talk' },
  { src: 'https://customer-assets.emergentagent.com/job_website-maker-219/artifacts/a4zdv9ij_Event%20Picture%20Feb%202%202026.jpeg', alt: 'Group photo' },
  { src: 'https://customer-assets.emergentagent.com/job_website-maker-219/artifacts/jz8ox25e_Event%20Picture%20Feb%202%202026%20%281%29.jpeg', alt: 'Whiteboard session' },
  { src: 'https://customer-assets.emergentagent.com/job_website-maker-219/artifacts/4vtxcyw7_Event%20Picture%20Feb%202%202026%20%283%29.jpeg', alt: 'Networking evening' },
  { src: 'https://customer-assets.emergentagent.com/job_website-maker-219/artifacts/631cps19_Event%20Picture%20Feb%202%202026%20%282%29.jpeg', alt: 'Community meetup' },
  { src: 'https://customer-assets.emergentagent.com/job_website-maker-219/artifacts/7qrfhn27_LinkedIn%20Image.jpeg', alt: 'THC community gathering' },
];

export default function Home() {
  return (
    <div data-testid="home-page">
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ background: 'radial-gradient(900px circle at 15% 15%, rgba(26,123,110,0.10), transparent 60%), radial-gradient(700px circle at 85% 20%, rgba(232,84,26,0.10), transparent 55%), linear-gradient(180deg, rgba(13,27,62,0.06) 0%, rgba(245,240,232,1) 55%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/80 rounded-full border border-[rgba(13,27,62,0.08)] text-sm font-medium text-[#0D1B3E]/70 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#1A7B6E] animate-pulse" />
                Building India's Largest Healthtech Community
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#0D1B3E] tracking-tight leading-[1.05] mb-6">
                Where Healthcare<br />
                <em className="not-italic text-[#E8541A]">Innovation</em> Meets<br />
                Real-World Adoption
              </h1>
              <p className="text-lg text-[#6B7280] max-w-xl leading-relaxed mb-8">
                A community-led platform helping healthtech founders and healthcare stakeholders build, validate, and adopt meaningful innovation.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/join">
                  <Button data-testid="home-hero-join-button" className="bg-[#E8541A] text-white hover:bg-[#D84B17] gap-2 h-11 px-6 text-sm">
                    Join the Community <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/who-its-for">
                  <Button data-testid="home-hero-events-button" variant="outline" className="border-[rgba(13,27,62,0.18)] text-[#0D1B3E] hover:bg-[rgba(245,240,232,0.65)] h-11 px-6 text-sm">
                    Explore Who It's For
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <div className="bg-white rounded-2xl border border-[rgba(13,27,62,0.10)] p-5 shadow-[0_1px_0_rgba(13,27,62,0.06),0_20px_45px_rgba(13,27,62,0.12)]">
                  <img
                    src="https://customer-assets.emergentagent.com/job_website-maker-219/artifacts/7qrfhn27_LinkedIn%20Image.jpeg"
                    alt="THC Community Event"
                    className="w-full h-48 sm:h-56 object-cover rounded-xl mb-4"
                    loading="eager"
                  />
                  <div className="bg-[rgba(245,240,232,0.7)] rounded-xl p-4 border border-[rgba(13,27,62,0.06)]">
                    <p className="text-sm text-[#0D1B3E] italic leading-relaxed">
                      "THC helped me connect with oncologists and understand their diagnostics workflow better"
                    </p>
                    <p className="text-xs text-[#6B7280] mt-2 font-medium">- Healthtech Founder, Bengaluru</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mt-12 text-[#6B7280] gap-2">
            <ChevronDown className="w-4 h-4 animate-bounce" />
            <span className="text-xs font-mono tracking-wider uppercase">Scroll to explore</span>
          </div>
        </div>
      </section>

      {/* Logo Marquee */}
      <LogoMarquee />

      {/* Flywheel */}
      <FlywheelDiagram />

      {/* Stakeholders */}
      <section className="py-16 sm:py-20 bg-white/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionTag>Who It's For</SectionTag>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#0D1B3E] tracking-tight">
              Built for Every Healthcare Stakeholder
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {STAKEHOLDERS.map((s) => (
              <StakeholderCard key={s.testId} {...s} />
            ))}
            <div className="bg-[#0D1B3E] rounded-2xl p-6 flex flex-col justify-center items-center text-center">
              <h3 className="text-lg font-semibold text-white mb-3">Explore in detail</h3>
              <Link to="/who-its-for">
                <Button className="bg-[#E8541A] text-white hover:bg-[#D84B17] gap-1.5">
                  Explore All Stakeholders <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work in Action — Sliding Gallery */}
      <section className="py-16 sm:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#0D1B3E] tracking-tight">
              Our Work <span className="text-[#E8541A]">in Action</span>
            </h2>
            <p className="mt-3 text-[#6B7280] text-base">Snapshots from our engagements across organizations and communities</p>
          </div>
        </div>

        {/* Row 1 — slides left */}
        <div className="relative mb-4">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-[#F5F0E8] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-[#F5F0E8] to-transparent z-10" />
          <div className="flex gap-4 animate-marquee hover:[animation-play-state:paused]" style={{ width: 'max-content' }}>
            {[...ROW1_IMAGES, ...ROW1_IMAGES].map((img, i) => (
              <div key={`r1-${i}`} className="flex-shrink-0 w-[300px] sm:w-[360px] h-[200px] sm:h-[230px] rounded-2xl overflow-hidden group relative">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,27,62,0.45)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-4">
                  <span className="text-white text-sm font-medium">{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — slides right */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-[#F5F0E8] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-[#F5F0E8] to-transparent z-10" />
          <div className="flex gap-4 animate-marquee-reverse hover:[animation-play-state:paused]" style={{ width: 'max-content' }}>
            {[...ROW2_IMAGES, ...ROW2_IMAGES].map((img, i) => (
              <div key={`r2-${i}`} className="flex-shrink-0 w-[300px] sm:w-[360px] h-[200px] sm:h-[230px] rounded-2xl overflow-hidden group relative">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,27,62,0.45)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-4">
                  <span className="text-white text-sm font-medium">{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Speakers */}
      <section className="py-16 sm:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0D1B3E] tracking-tight leading-tight">
            Past events & sessions have featured some of{' '}
            <em className="not-italic text-[#E8541A]">the most respected</em> funds and operators globally.
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-[#F5F0E8] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-[#F5F0E8] to-transparent z-10" />
          <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused]" style={{ width: 'max-content', animationDuration: '40s' }}>
            {[...[
              { name: 'Dr. Saarthak Bakshi, PhD', role: 'CEO, Rissa IVF', img: 'https://customer-assets.emergentagent.com/job_website-maker-219/artifacts/1i5ftic7_Screenshot%202026-03-09%20at%202.24.16%E2%80%AFPM.png' },
              { name: 'Garvita Baldua', role: 'Founder, SupertubosAI', img: 'https://customer-assets.emergentagent.com/job_website-maker-219/artifacts/ubp0v6wt_Screenshot%202026-03-09%20at%202.26.21%E2%80%AFPM.png' },
              { name: 'Dr. Pranav Agrawal', role: 'Physician-Researcher', img: 'https://customer-assets.emergentagent.com/job_website-maker-219/artifacts/hwad9y2u_WhatsApp%20Image%202026-03-09%20at%2014.29.18.jpeg' },
              { name: 'Vibhor Mathur', role: 'CxO Advisory, Dubai', img: 'https://customer-assets.emergentagent.com/job_website-maker-219/artifacts/yxiflacl_Screenshot%202026-03-09%20at%202.31.13%E2%80%AFPM.png' },
              { name: 'Shaurya Verma', role: 'Founder, CEO @ iksa.ai', img: 'https://customer-assets.emergentagent.com/job_d9e19b5b-64db-49f0-9cd0-f0472eeb287e/artifacts/b2b97qvh_Screenshot%202026-03-09%20at%202.42.03%E2%80%AFPM.png' },
              { name: 'Dr. Vishal Gandhi', role: 'Founder & CEO, BIORx Ventures', img: 'https://customer-assets.emergentagent.com/job_d9e19b5b-64db-49f0-9cd0-f0472eeb287e/artifacts/8rp0naya_Screenshot%202026-03-09%20at%202.42.25%E2%80%AFPM.png' },
              { name: 'Gaurav Soni', role: 'Co-Founder, Lean Apps', img: 'https://customer-assets.emergentagent.com/job_d9e19b5b-64db-49f0-9cd0-f0472eeb287e/artifacts/h6kx8bn9_Screenshot%202026-03-09%20at%202.42.46%E2%80%AFPM.png' },
              { name: 'Dr. Amitesh Khare, MD', role: 'Chief Medical Innovation Officer', img: 'https://customer-assets.emergentagent.com/job_d9e19b5b-64db-49f0-9cd0-f0472eeb287e/artifacts/981vs2vc_Screenshot%202026-03-09%20at%202.43.04%E2%80%AFPM.png' },
            ], ...[
              { name: 'Dr. Saarthak Bakshi, PhD', role: 'CEO, Rissa IVF', img: 'https://customer-assets.emergentagent.com/job_website-maker-219/artifacts/1i5ftic7_Screenshot%202026-03-09%20at%202.24.16%E2%80%AFPM.png' },
              { name: 'Garvita Baldua', role: 'Founder, SupertubosAI', img: 'https://customer-assets.emergentagent.com/job_website-maker-219/artifacts/ubp0v6wt_Screenshot%202026-03-09%20at%202.26.21%E2%80%AFPM.png' },
              { name: 'Dr. Pranav Agrawal', role: 'Physician-Researcher', img: 'https://customer-assets.emergentagent.com/job_website-maker-219/artifacts/hwad9y2u_WhatsApp%20Image%202026-03-09%20at%2014.29.18.jpeg' },
              { name: 'Vibhor Mathur', role: 'CxO Advisory, Dubai', img: 'https://customer-assets.emergentagent.com/job_website-maker-219/artifacts/yxiflacl_Screenshot%202026-03-09%20at%202.31.13%E2%80%AFPM.png' },
              { name: 'Shaurya Verma', role: 'Founder, CEO @ iksa.ai', img: 'https://customer-assets.emergentagent.com/job_d9e19b5b-64db-49f0-9cd0-f0472eeb287e/artifacts/b2b97qvh_Screenshot%202026-03-09%20at%202.42.03%E2%80%AFPM.png' },
              { name: 'Dr. Vishal Gandhi', role: 'Founder & CEO, BIORx Ventures', img: 'https://customer-assets.emergentagent.com/job_d9e19b5b-64db-49f0-9cd0-f0472eeb287e/artifacts/8rp0naya_Screenshot%202026-03-09%20at%202.42.25%E2%80%AFPM.png' },
              { name: 'Gaurav Soni', role: 'Co-Founder, Lean Apps', img: 'https://customer-assets.emergentagent.com/job_d9e19b5b-64db-49f0-9cd0-f0472eeb287e/artifacts/h6kx8bn9_Screenshot%202026-03-09%20at%202.42.46%E2%80%AFPM.png' },
              { name: 'Dr. Amitesh Khare, MD', role: 'Chief Medical Innovation Officer', img: 'https://customer-assets.emergentagent.com/job_d9e19b5b-64db-49f0-9cd0-f0472eeb287e/artifacts/981vs2vc_Screenshot%202026-03-09%20at%202.43.04%E2%80%AFPM.png' },
            ]].map((speaker, i) => (
              <div key={`speaker-${i}`} className="flex-shrink-0 w-[220px] group">
                <div className="relative mb-4">
                  <div className="w-[220px] h-[280px] rounded-2xl overflow-hidden bg-[#0D1B3E] relative">
                    <img
                      src={speaker.img}
                      alt={speaker.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 rounded-2xl" style={{ boxShadow: 'inset 0 0 0 3px rgba(232,84,26,0.4)' }} />
                  </div>
                </div>
                <h4 className="text-base font-semibold text-[#0D1B3E]">{speaker.name}</h4>
                <p className="text-sm text-[#6B7280] mt-0.5">{speaker.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 sm:py-20" style={{ background: 'linear-gradient(90deg, rgba(26,123,110,0.10), rgba(232,84,26,0.10))' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[rgba(26,123,110,0.08)] border border-[rgba(26,123,110,0.15)] font-mono text-[11px] tracking-[0.12em] uppercase text-[#1A7B6E] mb-4">Join 5,000+ Healthcare Professionals</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0D1B3E] tracking-tight mb-4 leading-tight">
            Ready to Shape the<br />Future of Healthcare?
          </h2>
          <p className="text-[#6B7280] text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Be part of a community that ensures healthcare innovation is not built in silos, but co-created with those who deliver and experience care every day.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/join">
              <Button className="bg-[#E8541A] text-white hover:bg-[#D84B17] gap-2 h-11 px-6">
                Join the Community <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/partner">
              <Button variant="outline" className="border-[rgba(13,27,62,0.18)] text-[#0D1B3E] hover:bg-white/60 h-11 px-6">
                Partner with Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
