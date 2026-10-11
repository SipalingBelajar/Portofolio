import { m } from "motion/react";
import { facts, profile } from "../data/portfolioData";
import { fadeUp, inView, stagger } from "../lib/motion";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section-pad">
      <div className="container-page">
        <SectionHeading id="about-title" title="About me" />

        <div
          className={
            profile.portrait
              ? "grid gap-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16"
              : "grid gap-10"
          }
        >
          {profile.portrait && (
            <Reveal className="mx-auto w-full max-w-sm md:mx-0 md:max-w-none md:self-start">
              <img
                src={profile.portrait}
                alt={`Portrait of ${profile.name}`}
                width="800"
                height="1000"
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full rounded-3xl border border-line object-cover"
              />
            </Reveal>
          )}

          <div className="space-y-10">
            <Reveal className="space-y-5 text-lg leading-relaxed text-muted text-pretty">
              {profile.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </Reveal>

            {/* A spec sheet: label on the left, value on the right */}
            <m.dl
              variants={stagger(0.08)}
              {...inView}
              className="divide-y divide-line rounded-3xl border border-line bg-surface"
            >
              {facts.map((fact) => (
                <m.div
                  key={fact.label}
                  variants={fadeUp}
                  className="grid grid-cols-[7rem_1fr] gap-4 px-6 py-4 sm:grid-cols-[8.5rem_1fr]"
                >
                  <dt className="text-sm text-muted">{fact.label}</dt>
                  <dd className="font-medium">{fact.value}</dd>
                </m.div>
              ))}
            </m.dl>
          </div>
        </div>
      </div>
    </section>
  );
}
