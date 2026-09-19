type Status = "In progress" | "Live" | "In build" | "Not started";

const styles: Record<Status, string> = {
  "In progress": "bg-tint/60 text-navy border-tint",
  Live: "bg-primary text-white border-primary",
  "In build": "bg-secondary/20 text-navy border-secondary/40",
  "Not started": "bg-white text-navy/40 border-tint",
};

export default function StatusBadge({ status }: { status: Status }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold whitespace-nowrap ${styles[status]}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}
