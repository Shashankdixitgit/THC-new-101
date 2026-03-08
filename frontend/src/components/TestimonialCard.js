import { Quote } from 'lucide-react';

export const TestimonialCard = ({ quote, author, role, company }) => {
  return (
    <div className="bg-white rounded-2xl border border-[rgba(13,27,62,0.10)] p-6 shadow-[0_1px_0_rgba(13,27,62,0.06),0_14px_30px_rgba(13,27,62,0.08)] hover:-translate-y-0.5 transition-transform duration-200">
      <Quote className="w-8 h-8 text-[#E8541A]/20 mb-3" />
      <p className="text-[#0D1B3E] text-sm leading-relaxed mb-4 italic">"{quote}"</p>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-[#0D1B3E] flex items-center justify-center">
          <span className="text-white text-xs font-semibold">{author?.[0] || 'T'}</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#0D1B3E]">{author || 'THC Member'}</p>
          {(role || company) && (
            <p className="text-xs text-[#6B7280]">{[role, company].filter(Boolean).join(', ')}</p>
          )}
        </div>
      </div>
    </div>
  );
};
