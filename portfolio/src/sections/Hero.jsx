import { useEffect, useState } from "react";
import { AnimatePresence, m, useReducedMotion } from "motion/react";
import { Download, MapPin, MessageCircle } from "lucide-react";
import { profile } from "../data/portfolioData";
import { ease, fadeUp, stagger } from "../lib/motion";
import { whatsappLink } from "../lib/utils";
import Button from "../components/ui/Button";
import Terminal from "../components/common/Terminal";

function RotatingRole() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % profile.roles.length), 2800);
    return () => clearInterval(id);
  }, [reduce]);

  if (reduce) return <span>{profile.roles.join(" & ")}</span>;

  return (
    <span className="relative inline-grid">
      {/* Invisible copies reserve the width of the longest role, so nothing jumps */}
      {profile.roles.map((role) => (
        <span key={role} className="invisible col-start-1 row-start-1" aria-hidden="true">
          {role}
        </span>
      ))}
      <AnimatePresence initial={false}>
        <m.span
          key={profile.roles[index]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease }}
          className="col-start-1 row-start-1 text-accent"
        >
          {profile.roles[index]}
        </m.span>
      </AnimatePresence>
    </span>
  );
}

function Avatar() {
  if (profile.photo) {
    return (
      <img
        src={profile.photo}
        alt={profile.name}
        width="64"
        height="64"
        className="size-16 rounded-2xl object-cover ring-1 ring-line"
      />
    );
  }
  return (
    <span className="grid size-14 place-items-center rounded-2xl border border-line bg-surface font-mono text-lg font-semibold text-accent">
      {profile.initials}
    </span>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Faint dot grid, faded out toward the edges */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background-image:radial-gradient(var(--line)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_30%_30%,black,transparent_70%)]"
      />

      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
        <m.div variants={stagger(0.1)} initial="hidden" animate="show">
          <m.div variants={fadeUp} className="flex items-center gap-4">
            <Avatar />
            <p className="flex items-center gap-1.5 text-sm text-muted">
              <MapPin size={15} aria-hidden="true" />
              {profile.location}
            </p>
          </m.div>

          <m.h1
            variants={fadeUp}
            className="mt-8 text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </m.h1>

          <m.p variants={fadeUp} className="mt-4 text-xl font-semibold sm:text-2xl">
            <RotatingRole />
          </m.p>

          <m.p variants={fadeUp} className="mt-6 max-w-xl text-lg leading-relaxed text-muted text-pretty">
            {profile.intro}
          </m.p>

          <m.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
            <Button href="#projects" size="lg">
              View projects
            </Button>
            {profile.cvUrl && (
              <Button href={profile.cvUrl} variant="secondary" size="lg" download>
                <Download size={18} aria-hidden="true" />
                Download CV
              </Button>
            )}
            <Button
              href={whatsappLink(profile.whatsapp, "Hi Arif, I saw your portfolio and would like to talk.")}
              variant="ghost"
              size="lg"
              className="px-4"
              external
            >
              <MessageCircle size={18} aria-hidden="true" />
              Chat on WhatsApp
            </Button>
          </m.div>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease }}
        >
          <Terminal />
        </m.div>
      </div>
    </section>
  );
}
