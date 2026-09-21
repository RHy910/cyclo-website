import { ExternalLink } from "lucide-react";

type Status = "In progress" | "Live" | "In build" | "Not started";

const styles: Record<Status, string> = {
  "In progress": "bg-tint/60 text-navy border-tint",
  Live: "bg-primary text-white border-primary",
  "In build": "bg-secondary/20 text-navy border-secondary/40",
  "Not started": "bg-white text-navy/40 border-tint",
};

const linkHoverStyles: Record<Status, string> = {
  "In progress": "hover:bg-navy hover:text-white hover:border-navy",
  Live: "hover:bg-white hover:text-primary",
  "In build": "hover:bg-navy hover:text-white hover:border-navy",
  "Not started": "hover:bg-navy hover:text-white hover:border-navy",
};

export default function StatusBadge({
  status,
  href,
}: {
  status: Status;
  href?: string;
}) {
  const content = (
    <>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
      {href && <ExternalLink size={12} />}
    </>
  );

  const className = `inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold whitespace-nowrap transition-all duration-200 ${styles[status]} ${
    href ? `-translate-y-0 hover:-translate-y-0.5 ${linkHoverStyles[status]}` : ""
  }`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }

  return <span className={className}>{content}</span>;
}
