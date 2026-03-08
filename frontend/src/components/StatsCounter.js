export const StatsCounter = ({ items }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
      {items.map((item, i) => (
        <div
          key={i}
          data-testid={`stat-${i}`}
          className="text-center p-6 rounded-2xl bg-white border border-[rgba(13,27,62,0.08)]"
        >
          <div className="text-3xl sm:text-4xl font-bold text-[#0D1B3E] mb-1">{item.value}</div>
          <div className="text-sm text-[#6B7280] leading-snug">{item.label}</div>
        </div>
      ))}
    </div>
  );
};
