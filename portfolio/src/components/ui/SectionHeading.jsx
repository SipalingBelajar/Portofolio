import Reveal from "./Reveal";
import { cn } from "../../lib/utils";

export default function SectionHeading({ id, title, intro, className }) {
  return (
    <Reveal className={cn("mb-12 max-w-2xl md:mb-16", className)}>
      <h2
        id={id}
        className="text-3xl font-bold tracking-tight text-balance md:text-4xl"
      >
        {title}
      </h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-muted text-pretty">{intro}</p>}
    </Reveal>
  );
}
