import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const StakeholderCard = ({ icon: Icon, title, description, testId }) => {
  return (
    <div
      data-testid={testId}
      className="bg-white rounded-2xl border border-[rgba(13,27,62,0.10)] p-6 shadow-[0_1px_0_rgba(13,27,62,0.06),0_14px_30px_rgba(13,27,62,0.08)] hover:-translate-y-0.5 transition-transform duration-200 group"
    >
      <div className="w-11 h-11 rounded-xl bg-[rgba(26,123,110,0.08)] flex items-center justify-center mb-4">
        <Icon className="w-5 h-5 text-[#1A7B6E]" />
      </div>
      <h3 className="text-lg font-semibold text-[#0D1B3E] mb-2">{title}</h3>
      <p className="text-sm text-[#6B7280] leading-relaxed mb-4">{description}</p>
      <Link
        to="/who-its-for"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-[#E8541A] group-hover:gap-2.5 transition-all duration-200"
      >
        Learn more <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  );
};
