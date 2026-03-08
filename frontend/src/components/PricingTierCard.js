import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const PricingTierCard = ({ tier, name, price, tagline, features, cta, popular, testId }) => {
  return (
    <div
      data-testid={testId}
      className={`relative rounded-2xl p-6 sm:p-7 flex flex-col transition-transform duration-200 hover:-translate-y-0.5 ${
        popular
          ? 'bg-white border-2 border-[#1A7B6E] shadow-[0_1px_0_rgba(13,27,62,0.06),0_20px_45px_rgba(13,27,62,0.12)]'
          : 'bg-white border border-[rgba(13,27,62,0.10)] shadow-[0_1px_0_rgba(13,27,62,0.06),0_14px_30px_rgba(13,27,62,0.08)]'
      }`}
    >
      {popular && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1A7B6E] text-white border-0 font-mono text-[10px] tracking-wider uppercase px-3">
          Most Popular
        </Badge>
      )}
      <div className="mb-4">
        <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-[#6B7280]">{tier}</span>
        <h3 className="text-xl font-semibold text-[#0D1B3E] mt-1">{name}</h3>
      </div>
      <div className="mb-4">
        <span data-testid={`${testId}-price`} className="text-2xl sm:text-3xl font-bold text-[#0D1B3E]">{price}</span>
      </div>
      <p className="text-sm text-[#6B7280] mb-6 leading-relaxed">{tagline}</p>
      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <Check className="w-4 h-4 text-[#1A7B6E] mt-0.5 flex-shrink-0" />
            <span className="text-sm text-[#0D1B3E]/80">{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        data-testid={`${testId}-cta`}
        className={`w-full ${
          popular
            ? 'bg-[#E8541A] text-white hover:bg-[#D84B17]'
            : 'bg-[#0D1B3E] text-[#F5F0E8] hover:bg-[rgba(13,27,62,0.92)]'
        }`}
      >
        {cta}
      </Button>
    </div>
  );
};
