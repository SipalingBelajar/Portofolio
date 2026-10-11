import { m } from "motion/react";
import { fadeUp, inView } from "../../lib/motion";

/** Fades its children up once, the first time they scroll into view. */
export default function Reveal({ as = "div", variants = fadeUp, className, children, ...props }) {
  const Component = m[as];
  return (
    <Component variants={variants} {...inView} className={className} {...props}>
      {children}
    </Component>
  );
}
