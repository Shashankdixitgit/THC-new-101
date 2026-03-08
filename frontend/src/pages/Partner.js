import { useState } from 'react';
import { SectionTag } from '@/components/SectionTag';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { submitPartnerInquiry } from '@/lib/api';
import { toast } from 'sonner';
import { Calendar, Heart, FlaskConical, Rocket, Megaphone, ArrowRight, Loader2 } from 'lucide-react';

const PARTNERSHIP_TYPES = [
  { icon: Calendar, title: 'Co-host an Event', description: 'Bring your community into a joint curated engagement' },
  { icon: Heart, title: 'Sponsor a Program', description: 'Fund and co-design clinician, founder, or operator programs' },
  { icon: FlaskConical, title: 'Research Roundtable', description: 'Gather signal on specific healthcare challenges' },
  { icon: Rocket, title: 'Pilot with Startups', description: 'Get introduced to vetted champions solving your problems' },
  { icon: Megaphone, title: 'Ecosystem Visibility', description: 'Newsletter features, speaking slots, community spotlight' },
];

const INTEREST_OPTIONS = [
  'Co-host an Event',
  'Sponsor a Program',
  'Research Roundtable',
  'Pilot with Startups',
  'Ecosystem Visibility',
  'Other',
];

export default function Partner() {
  const [formData, setFormData] = useState({
    name: '', organisation: '', email: '', interest: '', message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.organisation || !formData.email || !formData.interest) {
      toast.error('Please fill in all required fields');
      return;
    }
    try {
      setSubmitting(true);
      await submitPartnerInquiry(formData);
      setSubmitted(true);
      toast.success('Thank you! We\'ll be in touch soon.');
      setFormData({ name: '', organisation: '', email: '', interest: '', message: '' });
    } catch (err) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div data-testid="partner-page">
      {/* Hero */}
      <section className="py-16 sm:py-20 lg:py-24" style={{ background: 'linear-gradient(180deg, rgba(13,27,62,0.04) 0%, rgba(245,240,232,1) 60%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[#0D1B3E] tracking-tight leading-tight mb-4">
            Collaborate on What <span className="text-[#E8541A]">Matters Most</span>
          </h1>
          <p className="text-lg text-[#6B7280] max-w-2xl leading-relaxed">
            Co-host events, run innovation programs, sponsor initiatives, or join us in shaping the future of healthcare adoption in India.
          </p>
        </div>
      </section>

      {/* Partnership Types + Form */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            {/* Left: Partnership Types */}
            <div>
              <h2 className="text-2xl font-semibold text-[#0D1B3E] mb-6">Ways to Partner</h2>
              <div className="space-y-4">
                {PARTNERSHIP_TYPES.map((p) => {
                  const Icon = p.icon;
                  return (
                    <div key={p.title} className="flex items-start gap-4 p-4 rounded-xl border border-[rgba(13,27,62,0.08)] hover:bg-white hover:shadow-sm transition-all duration-200">
                      <div className="w-10 h-10 rounded-xl bg-[rgba(26,123,110,0.08)] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[#1A7B6E]" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-[#0D1B3E]">{p.title}</h3>
                        <p className="text-sm text-[#6B7280] mt-0.5">{p.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <div className="bg-white rounded-2xl border border-[rgba(13,27,62,0.10)] p-6 sm:p-8 shadow-[0_1px_0_rgba(13,27,62,0.06),0_14px_30px_rgba(13,27,62,0.08)]">
                <h2 className="text-xl font-semibold text-[#0D1B3E] mb-6">Get in Touch</h2>
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-[rgba(26,123,110,0.08)] flex items-center justify-center mx-auto mb-4">
                      <ArrowRight className="w-6 h-6 text-[#1A7B6E]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#0D1B3E] mb-2">Thank you!</h3>
                    <p className="text-sm text-[#6B7280]">We've received your inquiry and will be in touch soon.</p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      variant="outline"
                      className="mt-4 border-[rgba(13,27,62,0.18)] text-[#0D1B3E]"
                    >
                      Submit Another
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-[#0D1B3E] mb-1.5 block">Name *</Label>
                      <Input
                        id="name"
                        data-testid="partner-form-name-input"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="bg-[#F5F0E8]/50 border-[rgba(13,27,62,0.12)]"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="organisation" className="text-sm font-medium text-[#0D1B3E] mb-1.5 block">Organisation *</Label>
                      <Input
                        id="organisation"
                        data-testid="partner-form-org-input"
                        value={formData.organisation}
                        onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                        placeholder="Your company or organization"
                        className="bg-[#F5F0E8]/50 border-[rgba(13,27,62,0.12)]"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-[#0D1B3E] mb-1.5 block">Email *</Label>
                      <Input
                        id="email"
                        data-testid="partner-form-email-input"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="bg-[#F5F0E8]/50 border-[rgba(13,27,62,0.12)]"
                        required
                      />
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-[#0D1B3E] mb-1.5 block">Partnership Interest *</Label>
                      <Select
                        value={formData.interest}
                        onValueChange={(val) => setFormData({ ...formData, interest: val })}
                      >
                        <SelectTrigger data-testid="partner-form-interest-select" className="bg-[#F5F0E8]/50 border-[rgba(13,27,62,0.12)]">
                          <SelectValue placeholder="Select your interest" />
                        </SelectTrigger>
                        <SelectContent>
                          {INTEREST_OPTIONS.map((opt) => (
                            <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-[#0D1B3E] mb-1.5 block">Tell us more</Label>
                      <Textarea
                        id="message"
                        data-testid="partner-form-message-input"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Share more about what you have in mind..."
                        className="bg-[#F5F0E8]/50 border-[rgba(13,27,62,0.12)] min-h-[100px]"
                      />
                    </div>
                    <Button
                      type="submit"
                      data-testid="partner-form-submit-button"
                      disabled={submitting}
                      className="w-full bg-[#E8541A] text-white hover:bg-[#D84B17] gap-1.5"
                    >
                      {submitting ? (
                        <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</>
                      ) : (
                        <>Submit <ArrowRight className="w-3.5 h-3.5" /></>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
