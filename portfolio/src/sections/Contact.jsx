import { useState } from "react";
import { AnimatePresence, m } from "motion/react";
import { CircleAlert, CircleCheck, LoaderCircle, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { contactConfig, profile } from "../data/portfolioData";
import { cn, whatsappLink } from "../lib/utils";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import Button from "../components/ui/Button";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const EMPTY = { name: "", email: "", message: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Enter your name.";
  if (!values.email.trim()) errors.email = "Enter your email address.";
  else if (!EMAIL_PATTERN.test(values.email)) errors.email = "Enter an email address like name@example.com.";
  if (values.message.trim().length < 10) errors.message = "Write a message of at least 10 characters.";
  return errors;
}

function ContactChannel({ icon: Icon, label, value, href, external }) {
  const content = (
    <>
      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
        <Icon size={20} aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="block text-sm text-muted">{label}</span>
        <span className="block truncate font-semibold">{value}</span>
      </span>
    </>
  );
  const classes = "flex items-center gap-4 rounded-2xl border border-line bg-surface p-4";
  if (!href) return <div className={classes}>{content}</div>;
  return (
    <a
      href={href}
      className={cn(classes, "transition-colors hover:border-accent")}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {content}
    </a>
  );
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-500 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

const inputClasses = (hasError) =>
  cn(
    "w-full rounded-xl border bg-bg px-4 py-3 text-fg placeholder:text-muted/70",
    "transition-colors focus:outline-none focus:ring-2 focus:ring-accent/40",
    hasError ? "border-red-500" : "border-line focus:border-accent"
  );

export default function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  // idle | sending | sent | opened | error
  const [status, setStatus] = useState("idle");

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      document.getElementById(Object.keys(found)[0])?.focus();
      return;
    }

    // No form service configured: hand the message to the visitor's email app.
    if (!contactConfig.formspreeId) {
      const subject = encodeURIComponent(`Portfolio inquiry from ${values.name}`);
      const body = encodeURIComponent(`${values.message}\n\n${values.name}\n${values.email}`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus("opened");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${contactConfig.formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("sent");
      setValues(EMPTY);
    } catch {
      setStatus("error");
    }
  };

  const feedback = {
    sent: { tone: "ok", text: "Message sent. I'll reply to your email soon." },
    opened: { tone: "ok", text: "Your email app should open with the message ready to send." },
    error: {
      tone: "error",
      text: `The message didn't send. Check your connection and try again, or email ${profile.email} directly.`,
    },
  }[status];

  return (
    <section id="contact" aria-labelledby="contact-title" className="section-pad border-t border-line bg-surface/50">
      <div className="container-page">
        <SectionHeading
          id="contact-title"
          title="Let's work together"
          intro="Have a role, a project or a stubborn IT problem? Send a message and I'll get back to you."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal className="space-y-3">
            <ContactChannel icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
            <ContactChannel
              icon={MessageCircle}
              label="WhatsApp"
              value={profile.showPhone ? profile.phone : "Chat with me"}
              href={whatsappLink(profile.whatsapp, "Hi Arif, I saw your portfolio and would like to talk.")}
              external
            />
            {profile.showPhone && (
              <ContactChannel icon={Phone} label="Phone" value={profile.phone} href={`tel:+${profile.whatsapp}`} />
            )}
            <ContactChannel icon={MapPin} label="Location" value={profile.location} />
          </Reveal>

          <Reveal>
            <form
              onSubmit={onSubmit}
              noValidate
              className="space-y-5 rounded-3xl border border-line bg-surface p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Name" error={errors.name}>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={values.name}
                    onChange={onChange}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={inputClasses(errors.name)}
                    placeholder="Your name"
                  />
                </Field>
                <Field id="email" label="Email" error={errors.email}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={onChange}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={inputClasses(errors.email)}
                    placeholder="you@example.com"
                  />
                </Field>
              </div>

              <Field id="message" label="Message" error={errors.message}>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={onChange}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={cn(inputClasses(errors.message), "resize-y")}
                  placeholder="Tell me about the role or project"
                />
              </Field>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <Button type="submit" size="lg" disabled={status === "sending"} className="sm:w-auto">
                  {status === "sending" ? (
                    <LoaderCircle size={18} className="animate-spin" aria-hidden="true" />
                  ) : (
                    <Send size={18} aria-hidden="true" />
                  )}
                  {status === "sending" ? "Sending…" : "Send message"}
                </Button>

                <div aria-live="polite" className="min-h-6">
                  <AnimatePresence mode="wait">
                    {feedback && (
                      <m.p
                        key={status}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className={cn(
                          "flex items-start gap-2 text-sm",
                          feedback.tone === "ok" ? "text-emerald-600 dark:text-emerald-400" : "text-red-500 dark:text-red-400"
                        )}
                      >
                        {feedback.tone === "ok" ? (
                          <CircleCheck size={18} className="shrink-0" aria-hidden="true" />
                        ) : (
                          <CircleAlert size={18} className="shrink-0" aria-hidden="true" />
                        )}
                        {feedback.text}
                      </m.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
