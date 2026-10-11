import { useMemo, useState } from "react";
import { AnimatePresence, m } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { projectCategories, projects } from "../data/portfolioData";
import { getIcon } from "../lib/icons";
import { ease } from "../lib/motion";
import { cn } from "../lib/utils";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import Badge from "../components/ui/Badge";
import { GithubIcon } from "../components/ui/BrandIcons";

/** Screenshot if one is set; otherwise a drawn browser window with the project's icon. */
function ProjectCover({ project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`Screenshot of ${project.title}`}
        loading="lazy"
        decoding="async"
        className="aspect-[16/10] w-full object-cover object-top"
      />
    );
  }

  const Icon = getIcon(project.icon);
  return (
    <div className="aspect-[16/10] w-full bg-surface-2 p-4 sm:p-5" aria-hidden="true">
      <div className="flex h-full flex-col overflow-hidden rounded-lg border border-line bg-surface">
        <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
          <span className="size-2 rounded-full bg-line" />
          <span className="size-2 rounded-full bg-line" />
          <span className="size-2 rounded-full bg-line" />
          <span className="ml-2 h-2 w-1/3 rounded-full bg-surface-2" />
        </div>
        <div className="flex flex-1 items-center gap-4 px-5">
          <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent transition-transform duration-300 group-hover:scale-110">
            <Icon size={24} />
          </span>
          <div className="w-full space-y-2">
            <span className="block h-2.5 w-3/4 rounded-full bg-line" />
            <span className="block h-2 w-1/2 rounded-full bg-surface-2" />
            <span className="block h-2 w-2/3 rounded-full bg-surface-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  const { demo, github } = project.links;
  return (
    <m.article
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.3, ease }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-accent/50"
    >
      <ProjectCover project={project} />

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-baseline justify-between gap-3 text-sm">
          <p className="text-muted">{project.client}</p>
          <p className="shrink-0 text-xs font-medium text-accent">{project.category}</p>
        </div>
        <h3 className="mt-2 text-lg font-bold leading-snug">{project.title}</h3>
        {project.originalTitle && <p className="mt-0.5 text-sm italic text-muted">{project.originalTitle}</p>}
        <p className="mt-3 flex-1 leading-relaxed text-muted">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Built with">
          {project.tech.map((t) => (
            <li key={t}>
              <Badge>{t}</Badge>
            </li>
          ))}
        </ul>

        {(demo || github) && (
          <div className="mt-5 flex gap-4 border-t border-line pt-4 text-sm font-semibold">
            {demo && (
              <a href={demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-accent">
                Live demo <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-accent">
                <GithubIcon size={15} /> Source code
              </a>
            )}
          </div>
        )}
      </div>
    </m.article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");

  // Only show filter buttons for categories that actually have projects.
  const categories = useMemo(
    () => projectCategories.filter((c) => c === "All" || projects.some((p) => p.category === c)),
    []
  );
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" aria-labelledby="projects-title" className="section-pad border-y border-line bg-surface/50">
      <div className="container-page">
        <SectionHeading
          id="projects-title"
          title="Projects"
          intro="Systems built for real offices and businesses, from attendance tracking to asset inventory."
        />

        <Reveal className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              aria-pressed={filter === c}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                filter === c
                  ? "border-accent bg-accent text-accent-fg"
                  : "border-line bg-surface text-muted hover:text-fg"
              )}
            >
              {c}
            </button>
          ))}
        </Reveal>

        <m.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </m.div>
      </div>
    </section>
  );
}
