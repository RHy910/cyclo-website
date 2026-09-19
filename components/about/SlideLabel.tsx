export default function SlideLabel({
  index,
  total,
  title,
  dark = false,
}: {
  index: number;
  total: number;
  title: string;
  dark?: boolean;
}) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span
        className={`text-xs font-semibold tracking-wider ${
          dark ? "text-secondary" : "text-primary"
        }`}
      >
        {String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>
      <span
        className={`h-px flex-1 ${dark ? "bg-white/20" : "bg-tint"}`}
      />
      <span
        className={`text-xs font-semibold uppercase tracking-wider ${
          dark ? "text-white/60" : "text-navy/50"
        }`}
      >
        {title}
      </span>
    </div>
  );
}
