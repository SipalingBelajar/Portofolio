import { cn } from "../../lib/utils";

const variants = {
  primary:
    "bg-accent text-accent-fg hover:brightness-110 shadow-[0_8px_24px_-12px_var(--accent)]",
  secondary: "border border-line bg-surface text-fg hover:border-accent hover:text-accent",
  ghost: "text-muted hover:text-fg hover:bg-surface-2",
};

const sizes = {
  sm: "h-9 px-3.5 text-sm gap-1.5",
  md: "h-11 px-5 text-sm gap-2",
  lg: "h-12 px-6 text-base gap-2",
};

/**
 * Renders an <a> when `href` is given, otherwise a <button>.
 */
export default function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  external,
  ...props
}) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full font-semibold whitespace-nowrap",
    "transition-[background-color,color,border-color,filter] duration-200",
    "disabled:pointer-events-none disabled:opacity-60",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    const externalProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
    return (
      <a href={href} className={classes} {...externalProps} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
