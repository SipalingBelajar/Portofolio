import { m } from "motion/react";
import { services } from "../data/portfolioData";
import { getIcon } from "../lib/icons";
import { fadeUp, inView, stagger } from "../lib/motion";
import SectionHeading from "../components/ui/SectionHeading";

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="section-pad">
      <div className="container-page">
        <SectionHeading
          id="services-title"
          title="IT support"
          intro="Before writing interfaces, I kept an office's computers and network running. I still can."
        />

        <m.ul
          variants={stagger(0.08)}
          {...inView}
          className="grid overflow-hidden rounded-3xl border border-line sm:grid-cols-2"
        >
          {services.map((service, i) => {
            const Icon = getIcon(service.icon);
            return (
              <m.li
                key={service.title}
                variants={fadeUp}
                className={[
                  "flex gap-5 bg-surface p-6 sm:p-8",
                  // Hairline dividers between the 2x2 cells
                  i > 0 && "border-t border-line",
                  i === 1 && "sm:border-t-0",
                  i % 2 === 1 && "sm:border-l sm:border-line",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-bold">{service.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{service.description}</p>
                </div>
              </m.li>
            );
          })}
        </m.ul>
      </div>
    </section>
  );
}
