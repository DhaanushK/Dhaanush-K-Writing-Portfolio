import { useEffect, useState } from "react";

import { contact } from "@/content/portfolio";

const links = [
  { href: "#work", label: "WORK" },
  { href: "#screenplay", label: "SCREENPLAY" },
  { href: "#poetry", label: "POETRY" },
  { href: "#about", label: "ABOUT" },
  { href: "#contact", label: "CONTACT" },
  { href: contact.cv, label: "CV", external: true },
];

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-px bg-transparent">
      <div
        className="h-px bg-primary transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-sm">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10"
      >
        <a href="#top" className="label-xs text-foreground hover:text-lilac">
          Dhaanush K
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="label-xs text-muted-foreground hover:text-lilac"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="label-xs text-muted-foreground hover:text-lilac md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <ul id="mobile-menu" className="border-t border-border/60 px-6 py-4 md:hidden">
          {links.map((link) => (
            <li key={link.href} className="py-2">
              <a
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
                onClick={() => setOpen(false)}
                className="label-xs text-muted-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export function ChapterHeading({
  chapter,
  title,
  intro,
}: {
  chapter: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="label-xs text-primary">{chapter}</p>
      <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground md:text-5xl">
        {title}
      </h2>
      <div className="mt-6 h-px w-24 bg-primary/60" />
      {intro && (
        <p className="mt-6 font-serif text-xl italic leading-relaxed text-lilac md:text-2xl">
          “{intro}”
        </p>
      )}
    </div>
  );
}
