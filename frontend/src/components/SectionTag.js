export const SectionTag = ({ children, className = '' }) => {
  return (
    <span className={`inline-flex items-center px-4 py-1.5 rounded-full bg-[rgba(26,123,110,0.08)] border border-[rgba(26,123,110,0.15)] font-mono text-[11px] tracking-[0.12em] uppercase text-[#1A7B6E] mb-4 ${className}`}>
      {children}
    </span>
  );
};
