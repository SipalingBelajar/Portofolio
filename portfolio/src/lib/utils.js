/** Join class names, skipping falsy values. */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "2023-07" -> "Jul 2023"; empty or "present" -> "Present" */
export function formatMonth(value) {
  if (!value || value === "present") return "Present";
  const [year, month] = value.split("-");
  return `${MONTHS[Number(month) - 1]} ${year}`;
}

export function formatPeriod({ start, end }) {
  return `${formatMonth(start)} – ${formatMonth(end)}`;
}

/** Whole months between two "YYYY-MM" values, inclusive of the start month. */
export function monthsBetween(start, end) {
  const [sy, sm] = start.split("-").map(Number);
  const now = new Date();
  const [ey, em] = end && end !== "present" ? end.split("-").map(Number) : [now.getFullYear(), now.getMonth() + 1];
  return (ey - sy) * 12 + (em - sm);
}

export function formatDuration(months) {
  const y = Math.floor(months / 12);
  const m = months % 12;
  const parts = [];
  if (y) parts.push(`${y} yr${y > 1 ? "s" : ""}`);
  if (m) parts.push(`${m} mo${m > 1 ? "s" : ""}`);
  return parts.join(" ") || "1 mo";
}

export function whatsappLink(number, text = "") {
  const query = text ? `?text=${encodeURIComponent(text)}` : "";
  return `https://wa.me/${number}${query}`;
}
