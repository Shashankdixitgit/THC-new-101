import { useState } from 'react';
import { Users, AlertCircle, CheckCircle, Lightbulb, Rocket } from 'lucide-react';

const SEGMENTS = [
  {
    id: 'community',
    label: 'Community',
    icon: Users,
    color: '#1A7B6E',
    description: 'We bring together clinicians, hospital leaders, pharma, startups, and investors to surface real signals from the ground.',
  },
  {
    id: 'problems',
    label: 'Problems',
    icon: AlertCircle,
    color: '#E8541A',
    description: 'We identify high-impact healthcare problem statements that stakeholders care about and are willing to invest in.',
  },
  {
    id: 'validation',
    label: 'Validation',
    icon: CheckCircle,
    color: '#0D1B3E',
    description: 'We validate problems for clinical relevance, enterprise urgency, and commercial feasibility.',
  },
  {
    id: 'solutions',
    label: 'Solutions',
    icon: Lightbulb,
    color: '#1A7B6E',
    description: 'We identify and vet startups ("champions") best positioned to solve these problems.',
  },
  {
    id: 'adoption',
    label: 'Adoption',
    icon: Rocket,
    color: '#E8541A',
    description: 'We enable pilots, partnerships, GTM access, and funding readiness — turning solutions into real-world outcomes.',
  },
];

export const FlywheelDiagram = () => {
  const [active, setActive] = useState(null);
  const activeSegment = SEGMENTS.find((s) => s.id === active);

  return (
    <section data-testid="flywheel-section" className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[rgba(26,123,110,0.08)] border border-[rgba(26,123,110,0.15)] font-mono text-[11px] tracking-[0.12em] uppercase text-[#1A7B6E] mb-4">What THC Does</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0D1B3E] tracking-tight leading-tight">
            We Run a Healthcare <span className="text-[#E8541A]">Innovation Flywheel</span>
          </h2>
          <p className="mt-4 text-[#6B7280] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            THC operates a flywheel that converts real healthcare challenges into adopted solutions — by systematically connecting the right problems, partners, and solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Flywheel Visual */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px]">
              {/* Center circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-[#0D1B3E] flex items-center justify-center shadow-lg">
                  <span className="text-white font-display text-sm font-semibold text-center leading-tight px-2">THC<br/>Flywheel</span>
                </div>
              </div>
              {/* Segments around the circle */}
              {SEGMENTS.map((seg, i) => {
                const angle = (i * 72 - 90) * (Math.PI / 180);
                const radius = 130;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                const Icon = seg.icon;
                const isActive = active === seg.id;

                return (
                  <button
                    key={seg.id}
                    data-testid={`flywheel-segment-${seg.id}`}
                    onClick={() => setActive(isActive ? null : seg.id)}
                    onMouseEnter={() => setActive(seg.id)}
                    className={`absolute flex flex-col items-center gap-1.5 p-3 rounded-2xl transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-white shadow-lg scale-110 z-10'
                        : 'hover:bg-white/80 hover:shadow-md'
                    }`}
                    style={{
                      left: `calc(50% + ${x}px - 40px)`,
                      top: `calc(50% + ${y}px - 35px)`,
                      width: '80px',
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${seg.color}15` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: seg.color }} />
                    </div>
                    <span className="text-[11px] font-semibold text-[#0D1B3E] text-center leading-tight">{seg.label}</span>
                  </button>
                );
              })}
              {/* Connecting arcs */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 380">
                <circle cx="190" cy="190" r="130" fill="none" stroke="rgba(13,27,62,0.08)" strokeWidth="2" strokeDasharray="8 8" />
              </svg>
            </div>
          </div>

          {/* Detail Panel */}
          <div className="space-y-4">
            {activeSegment ? (
              <div className="bg-white rounded-2xl border border-[rgba(13,27,62,0.10)] p-6 sm:p-8 shadow-[0_1px_0_rgba(13,27,62,0.06),0_14px_30px_rgba(13,27,62,0.08)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${activeSegment.color}15` }}>
                    <activeSegment.icon className="w-5 h-5" style={{ color: activeSegment.color }} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0D1B3E]">{activeSegment.label}</h3>
                </div>
                <p className="text-[#6B7280] leading-relaxed">{activeSegment.description}</p>
              </div>
            ) : (
              <div className="space-y-3">
                {SEGMENTS.map((seg) => {
                  const Icon = seg.icon;
                  return (
                    <button
                      key={seg.id}
                      onClick={() => setActive(seg.id)}
                      className="w-full text-left flex items-start gap-4 p-4 rounded-xl border border-[rgba(13,27,62,0.08)] hover:bg-white hover:shadow-sm transition-all duration-200"
                    >
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: `${seg.color}12` }}>
                        <Icon className="w-4 h-4" style={{ color: seg.color }} />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#0D1B3E]">{seg.label}</h4>
                        <p className="text-sm text-[#6B7280] mt-0.5 leading-relaxed">{seg.description}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
            <div className="mt-6 p-4 rounded-xl bg-[rgba(232,84,26,0.04)] border border-[rgba(232,84,26,0.12)]">
              <p className="text-sm text-[#0D1B3E] leading-relaxed">
                Each loop strengthens the next. With a <span className="text-[#E8541A] font-bold">5,000+</span> curated network and <span className="text-[#E8541A] font-bold">30+</span> ecosystem engagements, THC enables <span className="text-[#E8541A] font-bold">high-signal collaboration</span> grounded in clinical and operational reality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
