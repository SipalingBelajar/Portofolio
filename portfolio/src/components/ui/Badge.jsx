import { cn } from "../../lib/utils";

export default function Badge({ children, className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-line bg-surface-2 px-2 py-0.5",
        "font-mono text-xs text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
