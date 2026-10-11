import { Mail } from "lucide-react";
import { profile } from "../../data/portfolioData";
import { brandIcons } from "../ui/BrandIcons";

export default function Footer() {
  const socials = profile.socials.filter((s) => s.url);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted sm:flex-row">
        <p>
          © {year} {profile.name}. Built with React and Tailwind CSS.
        </p>
        <ul className="flex items-center gap-1">
          <li>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="grid size-9 place-items-center rounded-full transition-colors hover:bg-surface-2 hover:text-fg"
            >
              <Mail size={18} />
            </a>
          </li>
          {socials.map((s) => {
            const Icon = brandIcons[s.icon];
            return (
              <li key={s.label}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid size-9 place-items-center rounded-full transition-colors hover:bg-surface-2 hover:text-fg"
                >
                  {Icon && <Icon size={17} />}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
