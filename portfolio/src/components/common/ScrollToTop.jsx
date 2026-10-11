import { AnimatePresence, m } from "motion/react";
import { ArrowUp } from "lucide-react";
import { useScrolled } from "../../hooks/useScrolled";

export default function ScrollToTop() {
  const visible = useScrolled(700);

  return (
    <AnimatePresence>
      {visible && (
        <m.a
          href="#top"
          aria-label="Back to top"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          className="fixed bottom-5 right-5 z-40 grid size-11 place-items-center rounded-full border border-line bg-surface text-fg shadow-lg transition-colors hover:text-accent"
        >
          <ArrowUp size={18} />
        </m.a>
      )}
    </AnimatePresence>
  );
}
