const LOGOS = [
  { name: 'Apollo Hospitals', domain: 'apollohospitals.com' },
  { name: 'Manipal Health', domain: 'manipalhospitals.com' },
  { name: 'Fortis Healthcare', domain: 'fortishealthcare.com' },
  { name: 'Narayana Health', domain: 'narayanahealth.org' },
  { name: 'Max Healthcare', domain: 'maxhealthcare.in' },
  { name: 'Cipla', domain: 'cipla.com' },
  { name: "Dr. Reddy's", domain: 'drreddys.com' },
  { name: 'Biocon', domain: 'biocon.com' },
  { name: 'PharmEasy', domain: 'pharmeasy.in' },
  { name: 'Practo', domain: 'practo.com' },
  { name: '1mg', domain: '1mg.com' },
  { name: 'MediBuddy', domain: 'medibuddy.in' },
  { name: 'Pristyn Care', domain: 'pristyncare.com' },
  { name: 'HealthKart', domain: 'healthkart.com' },
  { name: 'Niramai', domain: 'niramai.com' },
  { name: 'Dozee', domain: 'dozee.io' },
  { name: 'SigTuple', domain: 'sigtuple.com' },
  { name: 'Qure.ai', domain: 'qure.ai' },
];

export const LogoMarquee = () => {
  return (
    <section data-testid="logo-marquee-strip" className="py-8 sm:py-10 border-y border-[rgba(13,27,62,0.06)] bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-[#6B7280] text-center">
          Trusted by members from
        </p>
      </div>
      <div className="relative overflow-hidden">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#F5F0E8] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F5F0E8] to-transparent z-10" />
        
        <div className="animate-marquee flex gap-6 hover:[animation-play-state:paused]" style={{ width: 'max-content' }}>
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex-shrink-0 flex items-center gap-2.5 px-5 py-2.5 bg-white rounded-full border border-[rgba(13,27,62,0.08)] text-sm font-medium text-[#0D1B3E]/70 whitespace-nowrap"
            >
              <img
                src={`https://www.google.com/s2/favicons?domain=${logo.domain}&sz=32`}
                alt={logo.name}
                className="w-5 h-5 object-contain rounded-sm"
                loading="lazy"
              />
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
