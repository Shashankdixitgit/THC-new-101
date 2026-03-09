import { useState, useEffect } from 'react';
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
  const [rotation, setRotation] = useState(0);
  const activeSegment = SEGMENTS.find((s) => s.id === active);

  // Continuous clockwise rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.15) % 360);
    }, 16); // ~60fps
    return () => clearInterval(interval);
  }, []);

  const SIZE = 480; // visual container
  const RADIUS = 170; // orbit radius
  const CENTER = SIZE / 2;

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
          <div
            className="relative w-full flex items-center justify-center"
            style={{ minHeight: SIZE + 60 }}
          >
            <div className="relative mx-auto" style={{ width: SIZE, height: SIZE }}>
              {/* Dashed orbit ring — rotates */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox={`0 0 ${SIZE} ${SIZE}`}
                style={{ transform: `rotate(${rotation}deg)` }}
              >
                <circle
                  cx={CENTER}
                  cy={CENTER}
                  r={RADIUS}
                  fill="none"
                  stroke="rgba(13,27,62,0.10)"
                  strokeWidth="2"
                  strokeDasharray="10 6"
                />
                {/* Small directional arrows on the orbit */}
                {[0, 72, 144, 216, 288].map((a) => {
                  const rad = (a - 15) * (Math.PI / 180);
                  const ax = CENTER + Math.cos(rad) * RADIUS;
                  const ay = CENTER + Math.sin(rad) * RADIUS;
                  return (
                    <circle key={a} cx={ax} cy={ay} r="2.5" fill="rgba(26,123,110,0.25)" />
                  );
                })}
              </svg>

              {/* Center hub — stays static */}
              <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                <div className="w-28 h-28 rounded-full bg-[#0D1B3E] flex items-center justify-center shadow-[0_4px_24px_rgba(13,27,62,0.3)]">
                  <span className="text-white font-display text-base font-semibold text-center leading-tight px-2">
                    THC<br />Flywheel
                  </span>
                </div>
              </div>

              {/* Orbiting segments */}
              {SEGMENTS.map((seg, i) => {
                const baseAngle = i * 72 - 90; // evenly spaced, starting from top
                const totalAngle = baseAngle + rotation;
                const rad = totalAngle * (Math.PI / 180);
                const x = CENTER + Math.cos(rad) * RADIUS;
                const y = CENTER + Math.sin(rad) * RADIUS;
                const Icon = seg.icon;
                const isActive = active === seg.id;

                return (
                  <button
                    key={seg.id}
                    data-testid={`flywheel-segment-${seg.id}`}
                    onClick={() => setActive(isActive ? null : seg.id)}
                    className="absolute flex flex-col items-center gap-1 rounded-2xl transition-shadow duration-200 cursor-pointer z-10 bg-white/90 hover:shadow-md"
                    style={{
                      left: x - 42,
                      top: y - 38,
                      width: 84,
                      padding: '8px 4px',
                    }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${seg.color}15` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: seg.color }} />
                    </div>
                    <span className="text-[11px] font-semibold text-[#0D1B3E] text-center leading-tight mt-0.5">
                      {seg.label}
                    </span>
                  </button>
                );
              })}
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
