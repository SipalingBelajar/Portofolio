import { m } from "motion/react";
import { skills } from "../data/portfolioData";
import { getIcon } from "../lib/icons";
import { fadeUp, inView, stagger } from "../lib/motion";
import SectionHeading from "../components/ui/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section-pad border-y border-line bg-surface/50">
      <div className="container-page">
        <SectionHeading
          id="skills-title"
          title="Skills & stack"
          intro="The tools I use to build interfaces, connect them to data, and keep the machines underneath running."
        />

        <m.ul variants={stagger(0.07)} {...inView} className="divide-y divide-line border-y border-line">
          {skills.map((group) => {
            const Icon = getIcon(group.icon);
            return (
              <m.li
                key={group.category}
                variants={fadeUp}
                className="grid gap-4 py-6 md:grid-cols-[14rem_1fr] md:items-center md:gap-8"
              >
                <h3 className="flex items-center gap-3 font-semibold">
                  <span className="grid size-10 place-items-center rounded-xl bg-accent-soft text-accent">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  {group.category}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line bg-surface px-4 py-1.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </m.li>
            );
          })}
        </m.ul>
      </div>
    </section>
  );
}
