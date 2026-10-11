import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

/**
 * The hero's signature element: a terminal that types out a mix of
 * front-end and IT-support commands — both halves of the job.
 */
const SCRIPT = [
  { cmd: "whoami", out: "arif: front end developer & IT support", tone: "plain" },
  { cmd: "npm run build", out: "✓ built in 1.84s", tone: "ok" },
  { cmd: "ping -c 1 192.168.1.1", out: "64 bytes from 192.168.1.1: time=0.9 ms", tone: "plain" },
  { cmd: "git push origin main", out: "✓ pushed to origin/main", tone: "ok" },
];

const TYPE_MS = 45;
const PAUSE_MS = 450;

export default function Terminal() {
  const reduce = useReducedMotion();
  // step = index of the line being typed; chars = characters typed so far
  const [step, setStep] = useState(0);
  const [chars, setChars] = useState(0);
  const done = reduce || step >= SCRIPT.length;

  useEffect(() => {
    if (done) return;
    const target = SCRIPT[step].cmd.length;
    const timer =
      chars < target
        ? setTimeout(() => setChars((c) => c + 1), TYPE_MS)
        : setTimeout(() => {
            setStep((s) => s + 1);
            setChars(0);
          }, PAUSE_MS);
    return () => clearTimeout(timer);
  }, [step, chars, done]);

  const visibleLines = done ? SCRIPT.length : step + 1;

  return (
    <div
      className="overflow-hidden rounded-2xl border border-slate-700/60 bg-[#0d1424] text-slate-200 shadow-2xl shadow-black/30"
      role="img"
      aria-label="Terminal showing a build, a network ping and a git push"
    >
      <div className="flex items-center gap-2 border-b border-slate-700/60 px-4 py-3">
        <span className="size-3 rounded-full bg-[#ff5f57]" />
        <span className="size-3 rounded-full bg-[#febc2e]" />
        <span className="size-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-slate-400">arif@jakarta: ~/work</span>
      </div>

      <div className="min-h-[15.5rem] space-y-3 p-5 font-mono text-[13px] leading-relaxed sm:text-sm" aria-hidden="true">
        {SCRIPT.slice(0, visibleLines).map((line, i) => {
          const isTyping = !done && i === step;
          const typed = isTyping ? line.cmd.slice(0, chars) : line.cmd;
          return (
            <div key={line.cmd}>
              <p className="break-all">
                <span className="text-cyan-400">$</span> {typed}
                {isTyping && <span className="cursor-blink ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-cyan-400" />}
              </p>
              {!isTyping && (
                <p className={line.tone === "ok" ? "text-emerald-400" : "text-slate-400"}>{line.out}</p>
              )}
            </div>
          );
        })}
        {done && (
          <p>
            <span className="text-cyan-400">$</span>
            <span className="cursor-blink ml-2 inline-block h-4 w-2 translate-y-0.5 bg-cyan-400" />
          </p>
        )}
      </div>
    </div>
  );
}
