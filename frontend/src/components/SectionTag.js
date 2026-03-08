export const SectionTag = ({ children, className = '' }) => {
  return (
    <span className={`font-mono text-[11px] tracking-[0.12em] uppercase text-[#1A7B6E] block mb-3 ${className}`}>
      {children}
    </span>
  );
};
