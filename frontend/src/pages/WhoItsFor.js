import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { SectionTag } from '@/components/SectionTag';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Rocket, Stethoscope, Building2, Pill, TrendingUp, Target, Users, Zap, BarChart3, Handshake } from 'lucide-react';

const STAKEHOLDER_DATA = [
  {
    id: 'founders',
    label: 'Founders & Startups',
    icon: Rocket,
    headline: 'Build for Real Healthcare Problems',
    description: 'As a healthtech founder, you need more than funding — you need clinical signal, enterprise access, and a community that understands the long game of healthcare innovation.',
    challenges: [
      'Finding real clinical problems worth solving',
      'Getting honest feedback from practicing clinicians',
      'Navigating hospital procurement and pilot programs',
      'Building credibility with enterprise healthcare buyers',
    ],
    solutions: [
      { icon: Target, text: 'Access validated problem statements from clinicians and hospital operators' },
      { icon: Users, text: 'Get matched with relevant clinicians for product feedback sessions' },
      { icon: Zap, text: 'Join ASCENT — our structured program for clinical, GTM, and funding readiness' },
      { icon: Handshake, text: 'Showcase at Demo Days to curated investor and enterprise audiences' },
    ],
  },
  {
    id: 'clinicians',
    label: 'Clinicians',
    icon: Stethoscope,
    headline: 'Shape Innovation Without Compromising Care',
    description: 'Your clinical expertise is the missing link in healthtech. THC gives you a structured way to influence the solutions being built for your workflows and patients.',
    challenges: [
      'Lack of structured channels to share clinical pain points',
      'Solutions that don\'t understand real workflows',
      'No visibility into early-stage innovation pipeline',
      'Limited time for advisory and feedback',
    ],
    solutions: [
      { icon: Target, text: 'Participate in Clinical Feedback Sessions with vetted startups' },
      { icon: Users, text: 'Join roundtables with peers across specialties' },
      { icon: Zap, text: 'Influence solutions before they reach your hospital' },
      { icon: Handshake, text: 'Contribute to validation frameworks that shape product roadmaps' },
    ],
  },
  {
    id: 'operators',
    label: 'Operators & Hospitals',
    icon: Building2,
    headline: 'Explore Vetted Solutions for Real Needs',
    description: 'Hospital operations teams are overwhelmed with vendor pitches. THC curates the signal so you can focus on solutions that have been validated by your peers.',
    challenges: [
      'Too many vendor pitches, too little signal',
      'Difficulty assessing which startups are enterprise-ready',
      'Integrating innovation without disrupting operations',
      'Measuring ROI of healthtech implementations',
    ],
    solutions: [
      { icon: Target, text: 'Access pre-vetted "champion" startups matched to your challenges' },
      { icon: Users, text: 'Join closed-door roundtables with hospital peers' },
      { icon: Zap, text: 'Pilot programs with structured evaluation frameworks' },
      { icon: Handshake, text: 'Co-create solutions with startups who understand your constraints' },
    ],
  },
  {
    id: 'pharma',
    label: 'Pharma & Medtech',
    icon: Pill,
    headline: 'Identify High-Potential Innovation',
    description: 'Stay ahead by discovering startups and solutions that align with your strategic priorities — from digital therapeutics to companion diagnostics.',
    challenges: [
      'Identifying relevant startups across therapeutic areas',
      'Building partnership models with early-stage companies',
      'Understanding clinical workflows and adoption barriers',
      'Staying current on healthtech innovation trends',
    ],
    solutions: [
      { icon: Target, text: 'Early access to vetted champions across your value chain' },
      { icon: Users, text: 'Co-host research roundtables on specific therapeutic areas' },
      { icon: Zap, text: 'Pilot opportunities with startups solving validated problems' },
      { icon: Handshake, text: 'Strategic visibility across the healthtech ecosystem' },
    ],
  },
  {
    id: 'investors',
    label: 'Investors & Partners',
    icon: TrendingUp,
    headline: 'Invest in Solutions with Validated Signals',
    description: 'THC\'s flywheel generates the strongest deal-flow signals in healthtech. Access startups that have been validated by clinicians, operators, and the market.',
    challenges: [
      'Distinguishing real traction from vanity metrics',
      'Understanding clinical and regulatory nuances',
      'Building conviction in healthcare-specific startups',
      'Access to quality deal flow beyond traditional networks',
    ],
    solutions: [
      { icon: Target, text: 'Access to ASCENT Demo Days with curated founder showcases' },
      { icon: BarChart3, text: 'Validated problem-solution fit signals from the community' },
      { icon: Zap, text: 'Closed-door sessions with CXOs and hospital decision-makers' },
      { icon: Handshake, text: 'Early access to high-potential startups before major raises' },
    ],
  },
];

export default function WhoItsFor() {
  return (
    <div data-testid="who-its-for-page">
      {/* Hero */}
      <section className="py-16 sm:py-20 lg:py-24" style={{ background: 'linear-gradient(180deg, rgba(13,27,62,0.04) 0%, rgba(245,240,232,1) 60%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag>Who It's For</SectionTag>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[#0D1B3E] tracking-tight leading-tight mb-4">
            Built for <span className="text-[#E8541A]">Every Stakeholder</span> in Healthcare
          </h1>
          <p className="text-lg text-[#6B7280] max-w-2xl leading-relaxed">
            Expand each stakeholder to explore what THC does for them specifically.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="founders" className="w-full">
            <TabsList className="flex flex-wrap gap-2 bg-transparent h-auto p-0 mb-8">
              {STAKEHOLDER_DATA.map((s) => {
                const Icon = s.icon;
                return (
                  <TabsTrigger
                    key={s.id}
                    value={s.id}
                    data-testid={`tab-${s.id}`}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[rgba(13,27,62,0.10)] bg-white text-sm font-medium text-[#0D1B3E]/70 data-[state=active]:bg-[#0D1B3E] data-[state=active]:text-white data-[state=active]:border-[#0D1B3E] transition-colors duration-200"
                  >
                    <Icon className="w-4 h-4" />
                    {s.label}
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {STAKEHOLDER_DATA.map((s) => (
              <TabsContent key={s.id} value={s.id} className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left: challenges */}
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-[#0D1B3E] mb-4">{s.headline}</h2>
                    <p className="text-[#6B7280] leading-relaxed mb-6">{s.description}</p>
                    <div className="bg-[rgba(232,84,26,0.04)] rounded-2xl p-6 border border-[rgba(232,84,26,0.12)]">
                      <h4 className="font-mono text-[11px] tracking-[0.12em] uppercase text-[#E8541A] mb-4">Common Challenges</h4>
                      <ul className="space-y-3">
                        {s.challenges.map((c, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-5 h-5 rounded-full bg-[#E8541A]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-[10px] font-bold text-[#E8541A]">{i + 1}</span>
                            </span>
                            <span className="text-sm text-[#0D1B3E]/80">{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/* Right: solutions */}
                  <div className="space-y-4">
                    <h4 className="font-mono text-[11px] tracking-[0.12em] uppercase text-[#1A7B6E] mb-2">How THC Helps</h4>
                    {s.solutions.map((sol, i) => {
                      const SolIcon = sol.icon;
                      return (
                        <div key={i} className="bg-white rounded-2xl border border-[rgba(13,27,62,0.10)] p-5 flex items-start gap-4 shadow-[0_1px_0_rgba(13,27,62,0.06),0_8px_20px_rgba(13,27,62,0.06)]">
                          <div className="w-10 h-10 rounded-xl bg-[rgba(26,123,110,0.08)] flex items-center justify-center flex-shrink-0">
                            <SolIcon className="w-5 h-5 text-[#1A7B6E]" />
                          </div>
                          <p className="text-sm text-[#0D1B3E]/80 leading-relaxed">{sol.text}</p>
                        </div>
                      );
                    })}
                    <Link to="/join">
                      <Button className="mt-4 bg-[#E8541A] text-white hover:bg-[#D84B17] gap-1.5">
                        Join as {s.label.split(' ')[0]} <ArrowRight className="w-3.5 h-3.5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
}
