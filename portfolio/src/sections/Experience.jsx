import { m } from "motion/react";
import { experience } from "../data/portfolioData";
import { fadeUp, inView } from "../lib/motion";
import { formatDuration, formatPeriod, monthsBetween } from "../lib/utils";
import SectionHeading from "../components/ui/SectionHeading";
import Badge from "../components/ui/Badge";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="section-pad">
      <div className="container-page">
        <SectionHeading
          id="experience-title"
          title="Experience"
          intro="Most recent first. Each role shaped how I work in the other."
        />

        {/* Timeline: dates on a left rail (desktop), a single column on mobile */}
        <ol className="relative">
          {experience.map((job, i) => {
            const isLast = i === experience.length - 1;
            return (
              <m.li
                key={job.id}
                variants={fadeUp}
                {...inView}
                className="relative grid gap-3 pb-14 pl-10 last:pb-0 md:grid-cols-[12rem_1fr] md:gap-10 md:pl-0"
              >
                {/* Date column */}
                <div className="md:pt-1 md:text-right">
                  <p className="font-mono text-sm text-fg">{formatPeriod(job.period)}</p>
                  <p className="mt-1 text-sm text-muted">
                    {formatDuration(monthsBetween(job.period.start, job.period.end))}
                  </p>
                </div>

                {/* Rail: line + node. On desktop it sits between the two columns. */}
                <span
                  aria-hidden="true"
                  className="absolute left-[7px] top-2 size-[15px] rounded-full border-[3px] border-bg bg-accent ring-1 ring-accent md:left-[calc(12rem+1.25rem-7px)]"
                />
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-[14px] top-7 w-px bg-line md:left-[calc(12rem+1.25rem)]"
                  />
                )}

                {/* Content column */}
                <div className="md:pl-10">
                  <h3 className="text-xl font-bold">{job.role}</h3>
                  {job.company && <p className="mt-1 font-medium text-accent">{job.company}</p>}
                  <ul className="mt-4 space-y-2.5 text-muted">
                    {job.highlights.map((point) => (
                      <li key={point} className="flex gap-3 leading-relaxed">
                        <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-muted/60" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  {job.tech.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {job.tech.map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>
                  )}
                </div>
              </m.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
