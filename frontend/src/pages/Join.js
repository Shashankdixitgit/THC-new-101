import { SectionTag } from '@/components/SectionTag';
import { PricingTierCard } from '@/components/PricingTierCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Check, Minus } from 'lucide-react';

const TIERS = [
  {
    tier: 'Tier 1',
    name: 'THC Open',
    price: 'Free',
    tagline: 'For anyone curious about healthcare innovation and the THC ecosystem.',
    features: [
      'Public THC updates & newsletter',
      'Select open events & webinars',
      'Monthly ecosystem highlights',
      'Invitations to apply for higher tiers',
    ],
    cta: 'Get Started',
    testId: 'membership-tier-free',
  },
  {
    tier: 'Tier 2',
    name: 'Starter',
    price: '\u20B99,999 / year',
    tagline: 'For professionals and early founders exploring healthcare innovation.',
    features: [
      'THC Community (Slack / WhatsApp)',
      'Weekly AMAs with clinicians & founders',
      '50% discounts to open events',
      'Curated resources & workshops',
      'Warm intros & clinician matchmaking',
      'Community dashboard access',
    ],
    cta: 'Apply Now',
    testId: 'membership-tier-starter',
  },
  {
    tier: 'Tier 3',
    name: 'ASCENT',
    price: '\u20B949,999 / cohort',
    tagline: 'For founders building serious healthcare businesses.',
    features: [
      'Everything in Starter',
      'ASCENT program (clinical, GTM & funding)',
      'Curated intros to clinicians & operators',
      'Problem-solution fit feedback',
      'Priority access to pilot programs',
      'Founder-only closed sessions',
    ],
    cta: 'Apply for ASCENT',
    popular: true,
    testId: 'membership-tier-ascent',
  },
  {
    tier: 'Tier 4',
    name: 'Catalyst Circle',
    price: 'Custom / invite only',
    tagline: 'A private circle for CXOs, hospital leaders, pharma & investors.',
    features: [
      'Everything in Starter',
      'Closed CXO & investor forums',
      'Early access to vetted champions',
      'Co-creation & pilot opportunities',
      'White glove & concierge support',
      'Strategic visibility across ecosystem',
    ],
    cta: 'Request Consideration',
    testId: 'membership-tier-catalyst',
  },
];

const COMPARISON_FEATURES = [
  { name: 'Newsletter & Updates', open: true, starter: true, ascent: true, catalyst: true },
  { name: 'Community Access (Slack/WhatsApp)', open: false, starter: true, ascent: true, catalyst: true },
  { name: 'Event Discounts (50%)', open: false, starter: true, ascent: true, catalyst: true },
  { name: 'Weekly AMAs', open: false, starter: true, ascent: true, catalyst: true },
  { name: 'ASCENT Program', open: false, starter: false, ascent: true, catalyst: false },
  { name: 'Curated Intros & Matchmaking', open: false, starter: true, ascent: true, catalyst: true },
  { name: 'Closed CXO/Investor Forums', open: false, starter: false, ascent: false, catalyst: true },
  { name: 'Co-creation & Pilots', open: false, starter: false, ascent: true, catalyst: true },
  { name: 'Concierge Support', open: false, starter: false, ascent: false, catalyst: true },
];

const FAQS = [
  {
    q: 'What is the difference between Starter and ASCENT?',
    a: 'Starter gives you access to the THC community, events, and resources. ASCENT is a structured program for founders that includes clinical feedback, GTM support, and investor-ready preparation over a cohort period. ASCENT builds on Starter with intensive mentorship and demo day opportunities.',
  },
  {
    q: 'Can I upgrade my membership mid-year?',
    a: 'Yes! You can upgrade your membership at any time. We\'ll prorate the remaining period of your current plan toward the new tier. Contact our team for a seamless transition.',
  },
  {
    q: 'How does the Catalyst Circle application work?',
    a: 'Catalyst Circle is invite-only, designed for senior healthcare leaders, CXOs, and strategic investors. You can express interest through our application form, and our team will review and reach out if there\'s a fit.',
  },
  {
    q: 'Who is THC Open for?',
    a: 'THC Open is for anyone curious about healthcare innovation — students, researchers, early-career professionals, or anyone wanting to stay connected to the ecosystem through our newsletter and select public events.',
  },
  {
    q: 'What happens after I join — how does onboarding work?',
    a: 'After joining, you\'ll receive a welcome email with your login credentials, community access links, and a scheduled onboarding call. We\'ll help you get set up, connect with relevant members, and find the right events and programs for your goals.',
  },
];

const TESTIMONIALS = [
  { quote: 'THC helped me connect with oncologists and understand their diagnostics workflow better.', author: 'Healthtech Founder', role: 'CEO', company: 'Diagnostics Startup' },
  { quote: 'Through THC, we found our first hospital pilot within 6 weeks.', author: 'ASCENT Graduate', role: 'Founder', company: 'Digital Health' },
  { quote: 'This community gave us signal we couldn\'t get anywhere else.', author: 'Healthcare Investor', role: 'Partner', company: 'VC Fund' },
];

const CheckIcon = () => <Check className="w-4 h-4 text-[#1A7B6E]" />;
const DashIcon = () => <Minus className="w-4 h-4 text-[#6B7280]/40" />;

export default function Join() {
  return (
    <div data-testid="join-page">
      {/* Hero */}
      <section className="py-16 sm:py-20 lg:py-24" style={{ background: 'linear-gradient(180deg, rgba(13,27,62,0.04) 0%, rgba(245,240,232,1) 60%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTag className="text-center">THC Memberships</SectionTag>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[#0D1B3E] tracking-tight leading-tight mb-4">
            Membership <span className="text-[#E8541A]">Pathways</span>
          </h1>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
            Find your place in India's largest healthtech community. Memberships are annual.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TIERS.map((t) => (
              <PricingTierCard key={t.testId} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 sm:py-20 bg-white/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag>Compare Plans</SectionTag>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#0D1B3E] tracking-tight mb-8">
            Compare All Tiers
          </h2>
          <div className="bg-white rounded-2xl border border-[rgba(13,27,62,0.10)] overflow-hidden shadow-[0_1px_0_rgba(13,27,62,0.06),0_14px_30px_rgba(13,27,62,0.08)]">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-[rgba(13,27,62,0.08)]">
                    <TableHead className="text-[#0D1B3E] font-semibold min-w-[200px]">Feature</TableHead>
                    <TableHead className="text-center text-[#0D1B3E] font-semibold">Open</TableHead>
                    <TableHead className="text-center text-[#0D1B3E] font-semibold">Starter</TableHead>
                    <TableHead className="text-center text-[#0D1B3E] font-semibold bg-[rgba(26,123,110,0.04)]">ASCENT</TableHead>
                    <TableHead className="text-center text-[#0D1B3E] font-semibold">Catalyst</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {COMPARISON_FEATURES.map((feat) => (
                    <TableRow key={feat.name} className="border-b border-[rgba(13,27,62,0.06)]">
                      <TableCell className="text-sm text-[#0D1B3E]/80">{feat.name}</TableCell>
                      <TableCell className="text-center">{feat.open ? <CheckIcon /> : <DashIcon />}</TableCell>
                      <TableCell className="text-center">{feat.starter ? <CheckIcon /> : <DashIcon />}</TableCell>
                      <TableCell className="text-center bg-[rgba(26,123,110,0.04)]">{feat.ascent ? <CheckIcon /> : <DashIcon />}</TableCell>
                      <TableCell className="text-center">{feat.catalyst ? <CheckIcon /> : <DashIcon />}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag>Hear from Members</SectionTag>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-white/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTag>FAQ</SectionTag>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#0D1B3E] tracking-tight mb-8">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                data-testid={`faq-item-${i}`}
                className="bg-white rounded-xl border border-[rgba(13,27,62,0.10)] px-5 shadow-sm"
              >
                <AccordionTrigger className="text-left text-sm font-semibold text-[#0D1B3E] hover:no-underline py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-[#6B7280] leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
