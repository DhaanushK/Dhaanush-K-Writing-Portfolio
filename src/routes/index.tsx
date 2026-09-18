import "@/styles.css";
import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { ChapterHeading, ScrollProgress, SiteNav } from "@/components/portfolio/Chrome";
import { Reveal } from "@/components/portfolio/Reveal";

import {
  archive,
  archiveIntro,
  bio,
  books,
  booksIntro,
  contact,
  identity,
  journeyLine,
  journeySteps,
  ongoing,
  poems,
  poetryIntro,
  poetSignature,
  portrait,
  process,
  progression,
  scenes,
  screenplayIntro,
  thendralAuthor,
  thendralExcerpt,
  thendralSubtitle,
  thendralTitle,
  vayathirkuAuthor,
  vayathirkuDescription,
  vayathirkuExcerpt,
  vayathirkuSubtitle,
  vayathirkuTitle,
  nknmDescription,
  nknmOpeningExcerpt,
  nknmOpeningLabel,
  nknmOpeningPreview,
  nknmOpeningTitle,
  nknmStatus,
  nknmTitle,
  writingRange,
} from "@/content/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Dhaanush K — Screenwriter & Writer | Kaviyan Sendhan",
      },
      {
        name: "description",
        content:
          "The writing portfolio of Dhaanush K, who writes as Kaviyan Sendhan — screenwriting, fiction, poetry and published psychological crime thrillers.",
      },
      {
        property: "og:title",
        content: "Dhaanush K — Screenwriter & Writer",
      },
      {
        property: "og:description",
        content: "Screenwriting, fiction and poetry by Dhaanush K, writing as Kaviyan Sendhan.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  const [screenplayOpen, setScreenplayOpen] = useState(false);
  const [selectedPoem, setSelectedPoem] = useState(0);
  const [openPoem, setOpenPoem] = useState(false);
  const [thendralOpen, setThendralOpen] = useState(false);
  const [vayathirkuOpen, setVayathirkuOpen] = useState(false);
  const [manuscriptOpen, setManuscriptOpen] = useState(false);

  return (
    <div id="top" className="relative z-10">
      <ScrollProgress />
      <SiteNav />

      <main>
        {/* ========================================================= */}
        {/* PROLOGUE                                                  */}
        {/* ========================================================= */}

        <section className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-36">
          <Reveal>
            <p className="label-xs text-primary">Prologue / 01</p>

            <p className="mt-6 font-mono text-sm tracking-widest text-muted-foreground">FADE IN:</p>

            <h1 className="mt-8 font-serif text-6xl leading-[0.95] tracking-tight text-foreground md:text-8xl">
              {identity.name}
            </h1>

            <p className="mt-4 font-serif text-2xl italic text-lilac md:text-3xl">
              {identity.penName}
            </p>

            <p className="mt-10 max-w-2xl font-serif text-2xl leading-relaxed text-foreground/90 md:text-3xl">
              “{identity.heroQuote}”
            </p>

            <p className="label-xs mt-10 text-muted-foreground">{identity.roles.join(" · ")}</p>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="#work"
                className="label-xs border border-primary px-6 py-3 text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Explore my work
              </a>

              <a
                href="#about"
                className="label-xs border border-border px-6 py-3 text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
              >
                About the writer
              </a>
            </div>
          </Reveal>
        </section>

        {/* ========================================================= */}
        {/* CHAPTER I — THE WRITER                                    */}
        {/* ========================================================= */}

        <section id="about" className="border-t border-border/50">
          <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
            <Reveal>
              <ChapterHeading
                chapter="Chapter I"
                title="THE WRITER"
                intro={identity.literaryIntro}
              />
            </Reveal>

            <Reveal delay={80}>
              <p className="mt-16 max-w-3xl font-serif text-2xl leading-relaxed text-foreground md:text-3xl">
                “{identity.statement}”
              </p>
            </Reveal>

            <div className="mt-16 grid gap-16 md:grid-cols-[1.4fr_1fr]">
              <Reveal delay={120}>
                <div className="max-w-2xl space-y-6 text-[1.0625rem] leading-relaxed text-muted-foreground">
                  {bio.map((paragraph) => (
                    <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={160}>
                <img
                  src={portrait}
                  alt="Dhaanush K, who writes as Kaviyan Sendhan"
                  loading="lazy"
                  className="mb-10 w-full max-w-xs object-contain"
                />

                <div className="border-l border-border/70 pl-6">
                  <p className="label-xs text-primary">Writer progression</p>

                  <ul className="mt-8 space-y-8">
                    {progression.map((step) => (
                      <li key={step.title}>
                        <p className="label-xs text-lilac">
                          {step.year ? `${step.year} — ${step.title}` : step.title}
                        </p>

                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {step.detail}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* THE WRITER'S PROCESS                                      */}
        {/* ========================================================= */}

        <section className="border-t border-border/50 bg-ink/40">
          <div className="mx-auto max-w-3xl px-6 py-24 md:px-10 md:py-32">
            <Reveal>
              <p className="label-xs text-primary">The Writer&apos;s Process</p>

              <div className="mt-10 space-y-6 font-serif text-xl leading-relaxed text-foreground/90 md:text-2xl">
                {process.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ========================================================= */}
        {/* CHAPTER II — STORIES                                      */}
        {/* ========================================================= */}

        <section id="work" className="border-t border-border/50">
          <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
            <Reveal>
              <ChapterHeading chapter="Chapter II" title="STORIES" intro={booksIntro} />
            </Reveal>

            <div className="mt-20 space-y-20">
              {books.map((book, i) => (
                <Reveal key={book.title} delay={i * 80}>
                  <article className="grid gap-10 border-t border-border/60 pt-10 md:grid-cols-[0.8fr_1.4fr]">
                    <div>
                      <p className="label-xs text-primary">{book.index}</p>

                      {book.cover && (
                        <img
                          src={book.cover}
                          alt={`${book.title} — book cover`}
                          loading="lazy"
                          className="mt-6 max-h-[420px] w-full object-contain object-left"
                        />
                      )}

                      <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                        {book.genre}
                        <br />
                        {book.publisher}
                        <br />
                        {book.year}
                      </p>
                    </div>

                    <div>
                      <h3 className="max-w-md font-serif text-3xl leading-tight text-foreground md:text-4xl">
                        {book.title}
                      </h3>

                      {book.subtitle && <p className="label-xs mt-3 text-lilac">{book.subtitle}</p>}

                      <div className="mt-8 space-y-4 leading-relaxed text-muted-foreground">
                        {book.synopsis.map((paragraph) => (
                          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                        ))}
                      </div>

                      <a
                        href={book.link}
                        target="_blank"
                        rel="noreferrer"
                        className="label-xs mt-8 inline-block border-b border-primary pb-1 text-foreground hover:text-lilac"
                      >
                        Read / view book →
                      </a>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* CHAPTER III — STORIES STILL BEING WRITTEN                 */}
        {/* ========================================================= */}

        <section id="stories-still-being-written" className="border-t border-border/50 bg-ink/40">
          <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
            <Reveal>
              <ChapterHeading chapter="Chapter III" title="STORIES STILL BEING WRITTEN" />
            </Reveal>

            {/* ===================================================== */}
            {/* NEE KAATRU NAAN MARAM                                 */}
            {/* ===================================================== */}

            <Reveal delay={80}>
              <article id="manuscript" className="mt-20 border-t border-border/60 pt-10">
                <div className="max-w-3xl">
                  <p className="label-xs text-primary">SELECTED MANUSCRIPT</p>

                  <h2 className="tamil mt-5 text-4xl leading-snug text-foreground md:text-5xl">
                    {nknmTitle}
                  </h2>

                  <p className="label-xs mt-4 text-lilac">{nknmStatus}</p>

                  <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {nknmDescription}
                  </p>

                  <div className="mt-8 h-px w-20 bg-primary/60" />

                  <h3 className="tamil mt-10 text-2xl leading-snug text-foreground md:text-3xl">
                    {nknmOpeningTitle}
                  </h3>

                  <p className="label-xs mt-3 text-muted-foreground">{nknmOpeningLabel}</p>
                </div>

                {!manuscriptOpen ? (
                  <article className="mx-auto mt-16 max-w-3xl border-y border-border/60 py-12">
                    <div className="tamil space-y-6 text-[1.05rem] leading-loose text-muted-foreground">
                      {nknmOpeningPreview.map((paragraph, index) => (
                        <p key={`nknm-preview-${index}`}>{paragraph}</p>
                      ))}
                    </div>

                    <div className="mt-10 flex items-center gap-6">
                      <div className="h-px flex-1 bg-border/60" />

                      <span className="label-xs text-muted-foreground/60">SELECTED OPENING</span>

                      <div className="h-px flex-1 bg-border/60" />
                    </div>

                    <button
                      type="button"
                      onClick={() => setManuscriptOpen(true)}
                      className="label-xs mt-10 border-b border-primary pb-2 text-foreground transition-colors hover:text-primary"
                    >
                      READ EXCERPT →
                    </button>
                  </article>
                ) : (
                  <article className="long-form-manuscript mx-auto mt-16 max-w-3xl">
                    <div className="mb-10 flex items-center justify-between border-y border-border/60 py-5">
                      <div>
                        <p className="label-xs text-primary">{nknmOpeningTitle}</p>

                        <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                          {nknmOpeningLabel}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setManuscriptOpen(false)}
                        className="label-xs border-b border-border pb-1 text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                      >
                        CLOSE ↑
                      </button>
                    </div>

                    <div className="tamil space-y-8 text-[1.08rem] leading-loose text-muted-foreground">
                      {nknmOpeningExcerpt.map((paragraph, index) => (
                        <p
                          key={`nknm-${index}`}
                          className="manuscript-paragraph"
                          style={{
                            animationDelay: `${index * 90}ms`,
                          }}
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <div className="mt-16 border-t border-border/60 pt-8">
                      <p className="label-xs text-primary">END OF SELECTED OPENING</p>

                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground/70">
                        This is an ongoing long-form work.
                      </p>

                      <button
                        type="button"
                        onClick={() => setManuscriptOpen(false)}
                        className="label-xs mt-8 border-b border-primary pb-1 text-foreground transition-colors hover:text-lilac"
                      >
                        CLOSE READING ↑
                      </button>
                    </div>
                  </article>
                )}
              </article>
            </Reveal>

            {/* ===================================================== */}
            {/* THENDRAL                                               */}
            {/* ===================================================== */}

            <Reveal delay={140}>
              <article id="thendral" className="mt-24 border-t border-border/60 pt-10">
                <div className="max-w-3xl">
                  <p className="label-xs text-primary">SELECTED EXCERPT</p>

                  <h2 className="tamil mt-5 text-4xl leading-snug text-foreground md:text-5xl">
                    {thendralTitle}
                  </h2>

                  <p className="mt-4 font-serif text-xl italic text-lilac md:text-2xl">
                    {thendralSubtitle}
                  </p>

                  <p className="tamil mt-3 text-sm text-muted-foreground">{thendralAuthor}</p>

                  <div className="mt-8 h-px w-20 bg-primary/60" />

                  <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    A Tamil short fiction about friendship, loneliness, ambition, and the people who
                    quietly become part of someone&apos;s journey.
                  </p>
                </div>

                {!thendralOpen ? (
                  <article className="mx-auto mt-16 max-w-3xl border-y border-border/60 py-12">
                    <div className="tamil space-y-5 text-[1.05rem] leading-loose text-muted-foreground">
                      {thendralExcerpt.slice(0, 2).map((paragraph, index) => (
                        <p key={`thendral-preview-${index}`}>{paragraph}</p>
                      ))}
                    </div>

                    <div className="mt-10 flex items-center gap-6">
                      <div className="h-px flex-1 bg-border/60" />

                      <span className="label-xs text-muted-foreground/60">EXCERPT</span>

                      <div className="h-px flex-1 bg-border/60" />
                    </div>

                    <button
                      type="button"
                      onClick={() => setThendralOpen(true)}
                      className="label-xs mt-10 border-b border-primary pb-2 text-foreground transition-colors hover:text-primary"
                    >
                      READ THENDRAL →
                    </button>
                  </article>
                ) : (
                  <article className="thendral-manuscript mx-auto mt-16 max-w-3xl">
                    <div className="mb-10 flex items-center justify-between border-y border-border/60 py-5">
                      <div>
                        <p className="label-xs text-primary">THENDRAL</p>

                        <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                          Selected Opening
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setThendralOpen(false)}
                        className="label-xs border-b border-border pb-1 text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                      >
                        CLOSE ↑
                      </button>
                    </div>

                    <div className="tamil space-y-8 text-[1.08rem] leading-loose text-muted-foreground">
                      {thendralExcerpt.map((paragraph, index) => (
                        <p
                          key={`thendral-${index}`}
                          className="thendral-paragraph"
                          style={{
                            animationDelay: `${index * 100}ms`,
                          }}
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <div className="mt-16 border-t border-border/60 pt-8">
                      <p className="label-xs text-primary">END OF SELECTED EXCERPT</p>

                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground/70">
                        The story continues beyond this excerpt.
                      </p>

                      <button
                        type="button"
                        onClick={() => setThendralOpen(false)}
                        className="label-xs mt-8 border-b border-primary pb-1 text-foreground transition-colors hover:text-lilac"
                      >
                        CLOSE READING ↑
                      </button>
                    </div>
                  </article>
                )}
              </article>
            </Reveal>

            {/* ===================================================== */}
            {/* VAYATHIRKU APPAAL ORU UNMAI                            */}
            {/* ===================================================== */}

            <Reveal delay={200}>
              <article id="vayathirku-appaal" className="mt-24 border-t border-border/60 pt-10">
                <div className="max-w-3xl">
                  <p className="label-xs text-primary">SELECTED STORY</p>

                  <h2 className="tamil mt-5 text-4xl leading-snug text-foreground md:text-5xl">
                    {vayathirkuTitle}
                  </h2>

                  <p className="mt-4 font-serif text-xl italic text-lilac md:text-2xl">
                    {vayathirkuSubtitle}
                  </p>

                  <p className="tamil mt-3 text-sm text-muted-foreground">{vayathirkuAuthor}</p>

                  <div className="mt-8 h-px w-20 bg-primary/60" />

                  <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {vayathirkuDescription}
                  </p>
                </div>

                {!vayathirkuOpen ? (
                  <article className="mx-auto mt-16 max-w-3xl border-y border-border/60 py-12">
                    <div className="tamil space-y-6 text-[1.05rem] leading-loose text-muted-foreground">
                      {vayathirkuExcerpt.slice(0, 2).map((paragraph, index) => (
                        <p key={`vayathirku-preview-${index}`}>{paragraph}</p>
                      ))}
                    </div>

                    <div className="mt-10 flex items-center gap-6">
                      <div className="h-px flex-1 bg-border/60" />

                      <span className="label-xs text-muted-foreground/60">SELECTED EXCERPT</span>

                      <div className="h-px flex-1 bg-border/60" />
                    </div>

                    <button
                      type="button"
                      onClick={() => setVayathirkuOpen(true)}
                      className="label-xs mt-10 border-b border-primary pb-2 text-foreground transition-colors hover:text-primary"
                    >
                      READ STORY →
                    </button>
                  </article>
                ) : (
                  <article className="vayathirku-manuscript mx-auto mt-16 max-w-3xl">
                    <div className="mb-10 flex items-center justify-between border-y border-border/60 py-5">
                      <div>
                        <p className="label-xs text-primary">VAYATHIRKU APPAAL</p>

                        <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                          Selected Story
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setVayathirkuOpen(false)}
                        className="label-xs border-b border-border pb-1 text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                      >
                        CLOSE ↑
                      </button>
                    </div>

                    <div className="tamil space-y-8 text-[1.08rem] leading-loose text-muted-foreground">
                      {vayathirkuExcerpt.map((paragraph, index) => (
                        <p
                          key={`vayathirku-${index}`}
                          className="vayathirku-paragraph"
                          style={{
                            animationDelay: `${index * 90}ms`,
                          }}
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <div className="mt-16 border-t border-border/60 pt-8">
                      <p className="label-xs text-primary">END OF SELECTED EXCERPT</p>

                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground/70">
                        The story continues beyond this excerpt.
                      </p>

                      <button
                        type="button"
                        onClick={() => setVayathirkuOpen(false)}
                        className="label-xs mt-8 border-b border-primary pb-1 text-foreground transition-colors hover:text-lilac"
                      >
                        CLOSE READING ↑
                      </button>
                    </div>
                  </article>
                )}
              </article>
            </Reveal>

            {/* Small Chapter III closing marker */}
            <Reveal delay={260}>
              <div className="mt-20 border-t border-border/60 pt-6">
                <p className="label-xs text-muted-foreground/60">STORIES IN PROGRESS</p>

                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  Stories that are still finding their final form.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ========================================================= */}
        {/* CHAPTER IV — THE SCREENPLAY                               */}
        {/* ========================================================= */}

        <section id="screenplay" className="border-t border-border/50">
          <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
            <Reveal>
              <ChapterHeading chapter="Chapter IV" title="THE SCREENPLAY" intro={screenplayIntro} />
            </Reveal>

            {!screenplayOpen ? (
              <Reveal delay={100}>
                <article className="mt-20 border-t border-border/60 pt-10">
                  <div className="grid gap-12 md:grid-cols-[0.8fr_1.6fr]">
                    <div>
                      <p className="label-xs text-primary">OPENING SEQUENCE</p>

                      <p className="mt-6 font-mono text-sm tracking-widest text-lilac">
                        SCENE 01 → SCENE 02
                      </p>
                    </div>

                    <div className="max-w-3xl">
                      <p className="font-mono text-sm tracking-wide text-muted-foreground">
                        {scenes[0].number}
                      </p>

                      <h3 className="mt-4 font-mono text-lg tracking-wide text-foreground md:text-xl">
                        {scenes[0].slug}
                      </h3>

                      <p className="mt-6 max-w-2xl font-mono text-sm leading-7 text-muted-foreground line-clamp-5">
                        {scenes[0].blocks[0].text}
                      </p>

                      <button
                        type="button"
                        onClick={() => setScreenplayOpen(true)}
                        className="label-xs mt-8 inline-block border-b border-primary pb-1 text-foreground transition-colors hover:text-lilac"
                      >
                        READ EXCERPT →
                      </button>
                    </div>
                  </div>
                </article>
              </Reveal>
            ) : (
              <Reveal delay={80}>
                <div className="mt-20">
                  <div className="mb-10 flex items-center justify-between border-y border-border/60 py-5">
                    <p className="label-xs text-primary">FULL OPENING SEQUENCE</p>

                    <button
                      type="button"
                      onClick={() => setScreenplayOpen(false)}
                      className="label-xs border-b border-border pb-1 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      CLOSE EXCERPT ↑
                    </button>
                  </div>

                  <div className="space-y-16">
                    {scenes.map((scene) => (
                      <article key={scene.number} className="border-t border-border/60 pt-10">
                        <p className="label-xs text-primary">{scene.number}</p>

                        <h3 className="mt-4 font-mono text-lg tracking-wide text-foreground md:text-xl">
                          {scene.slug}
                        </h3>

                        <div className="mt-8 max-w-3xl space-y-6 font-mono text-[0.9rem] leading-loose text-muted-foreground">
                          {scene.blocks.map((block, bi) => (
                            <div key={`${scene.number}-${bi}`}>
                              {block.heading && (
                                <p className="mb-3 tracking-wide text-foreground">
                                  {block.heading}
                                </p>
                              )}

                              {block.cue && (
                                <p className="text-right tracking-widest text-lilac">{block.cue}</p>
                              )}

                              {block.character && (
                                <p className="mt-2 text-center tracking-widest text-foreground">
                                  {block.character}
                                </p>
                              )}

                              {block.text && (
                                <p
                                  className={
                                    block.character ? "text-center text-foreground/90" : ""
                                  }
                                >
                                  {block.text}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </article>
                    ))}
                  </div>

                  <div className="mt-12 border-t border-border/60 pt-6">
                    <button
                      type="button"
                      onClick={() => setScreenplayOpen(false)}
                      className="label-xs border-b border-primary pb-1 text-foreground transition-colors hover:text-lilac"
                    >
                      CLOSE EXCERPT ↑
                    </button>
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        </section>

        {/* ========================================================= */}
        {/* INTERLUDE — POETRY                                        */}
        {/* ========================================================= */}

        <section id="poetry" className="border-t border-border/50">
          <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
            <Reveal>
              <ChapterHeading chapter="INTERLUDE" title="POETRY" intro={poetryIntro} />
            </Reveal>

            {/* POEM RACK */}
            <Reveal delay={100}>
              <div className="mt-20 border-y border-border/60">
                <div className="flex flex-col md:flex-row">
                  {poems.map((poem, i) => {
                    const isSelected = selectedPoem === i;

                    return (
                      <button
                        key={poem.englishTitle}
                        type="button"
                        onClick={() => {
                          setSelectedPoem(i);
                          setOpenPoem(false);
                        }}
                        className={`group flex-1 border-b border-border/60 px-5 py-6 text-left transition-colors last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 ${
                          isSelected ? "bg-primary/5" : "hover:bg-primary/[0.03]"
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <span
                            className={`label-xs transition-colors ${
                              isSelected ? "text-primary" : "text-muted-foreground/50"
                            }`}
                          >
                            0{i + 1}
                          </span>

                          <div>
                            <p
                              className={`tamil text-lg leading-snug transition-colors ${
                                isSelected ? "text-foreground" : "text-muted-foreground"
                              }`}
                            >
                              {poem.tamilTitle}
                            </p>

                            <p
                              className={`mt-2 text-xs tracking-[0.14em] transition-colors ${
                                isSelected ? "text-primary" : "text-muted-foreground/60"
                              }`}
                            >
                              {poem.englishTitle}
                            </p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            {/* SELECTED POEM */}
            <Reveal key={selectedPoem} delay={120}>
              {(() => {
                const poem = poems[selectedPoem];
                const previewLines = poem.lines.slice(0, 8);

                return (
                  <article className="mx-auto mt-20 max-w-3xl">
                    <p className="label-xs text-primary">
                      0{selectedPoem + 1} — {poem.englishTitle}
                    </p>

                    <h3 className="tamil mt-5 text-4xl leading-snug text-foreground md:text-5xl">
                      {poem.tamilTitle}
                    </h3>

                    <div
                      className={`manuscript-line mt-8 ${openPoem ? "manuscript-line-open" : ""}`}
                    />

                    <div
                      className={`tamil mt-10 text-[1.08rem] leading-loose text-muted-foreground ${
                        openPoem ? "manuscript-poem-open" : ""
                      }`}
                    >
                      {(openPoem ? poem.lines : previewLines).map((line, li) =>
                        line ? (
                          <p
                            key={`${poem.englishTitle}-${li}`}
                            className={openPoem ? "manuscript-line-item" : ""}
                            style={
                              openPoem
                                ? {
                                    animationDelay: `${li * 45}ms`,
                                  }
                                : undefined
                            }
                          >
                            {line}
                          </p>
                        ) : (
                          <p
                            key={`${poem.englishTitle}-${li}`}
                            className={`h-4 ${openPoem ? "manuscript-stanza" : ""}`}
                            style={
                              openPoem
                                ? {
                                    animationDelay: `${li * 45}ms`,
                                  }
                                : undefined
                            }
                          />
                        ),
                      )}
                    </div>

                    {!openPoem && poem.lines.length > 8 && (
                      <p className="mt-2 text-sm text-muted-foreground/60">...</p>
                    )}

                    <button
                      type="button"
                      onClick={() => setOpenPoem(!openPoem)}
                      className="mt-10 border-b border-primary/50 pb-2 text-xs font-medium tracking-[0.22em] text-foreground transition-colors hover:text-primary"
                    >
                      {openPoem ? "CLOSE POEM ↑" : "READ POEM →"}
                    </button>

                    {openPoem && poetSignature && (
                      <p className="tamil mt-12 text-sm text-muted-foreground/70">
                        {poetSignature}
                      </p>
                    )}
                  </article>
                );
              })()}
            </Reveal>
          </div>
        </section>

        {/* ========================================================= */}
        {/* CHAPTER V — THE WRITER'S DESK                            */}
        {/* ========================================================= */}

        <section id="desk" className="border-t border-border/50 bg-ink/40">
          <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
            <Reveal>
              <ChapterHeading chapter="Chapter V" title="THE WRITER'S DESK" intro={archiveIntro} />
            </Reveal>

            <ul className="mt-20 divide-y divide-border/60 border-y border-border/60">
              {archive.map((item, i) => (
                <li key={item.index}>
                  <Reveal delay={i * 60}>
                    <div className="group grid gap-4 py-8 md:grid-cols-[5rem_1fr_1.3fr]">
                      <span className="label-xs text-primary transition-transform duration-300 group-hover:translate-x-1">
                        {item.index}
                      </span>

                      <div>
                        <p className="label-xs text-foreground transition-colors duration-300 group-hover:text-lilac">
                          {item.title}
                        </p>

                        {item.tamilTitle && (
                          <p className="tamil mt-2 text-lg text-lilac">{item.tamilTitle}</p>
                        )}

                        <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                          {item.kind}
                        </p>
                      </div>

                      <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                        {item.notes.map((note) => (
                          <p key={note.slice(0, 24)}>{note}</p>
                        ))}

                        {item.link && (
                          <a
                            href={item.link}
                            target={item.link.startsWith("#") ? undefined : "_blank"}
                            rel={item.link.startsWith("#") ? undefined : "noreferrer"}
                            className="label-xs inline-block border-b border-primary pb-1 text-foreground transition-all duration-300 hover:border-lilac hover:text-lilac"
                          >
                            {item.linkLabel} →
                          </a>
                        )}
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ========================================================= */}
        {/* ABOUT — JOURNEY + RANGE                                   */}
        {/* ========================================================= */}

        <section className="border-t border-border/50">
          <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
            <Reveal>
              <div className="max-w-3xl">
                <p className="label-xs text-primary">About the writer</p>

                <p className="mt-8 font-serif text-2xl leading-relaxed text-foreground md:text-3xl">
                  {journeyLine.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>

                <p className="mt-10 text-sm leading-loose text-muted-foreground">
                  {journeySteps.join(" → ")}
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <ul className="mt-20 divide-y divide-border/60 border-y border-border/60">
                {writingRange.map((item) => (
                  <li key={item.index} className="grid gap-2 py-6 md:grid-cols-[6rem_1fr_1.2fr]">
                    <span className="label-xs text-primary">{item.index}</span>

                    <span className="label-xs text-foreground">{item.title}</span>

                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {item.detail}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ========================================================= */}
        {/* EPILOGUE — CONTACT                                        */}
        {/* ========================================================= */}

        <section id="contact" className="border-t border-border/50 bg-ink/40">
          <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
            <Reveal>
              <p className="label-xs text-primary">Epilogue</p>

              <h2 className="mt-6 font-serif text-5xl leading-tight text-foreground md:text-6xl">
                LET&apos;S WRITE SOMETHING.
              </h2>

              <p className="mt-6 max-w-xl font-serif text-xl italic text-lilac">
                “{contact.supporting}”
              </p>

              <div className="mt-16 grid gap-12 md:grid-cols-2">
                <div>
                  <p className="font-serif text-3xl text-foreground">{identity.name}</p>

                  <p className="mt-2 font-serif text-xl italic text-lilac">{identity.penName}</p>

                  <p className="label-xs mt-6 text-muted-foreground">
                    Screenwriter · Script Writer · Creative Writer
                  </p>
                </div>

                <ul className="space-y-4">
                  <li>
                    <span className="label-xs block text-primary">Email</span>

                    <a
                      href={`mailto:${contact.email}`}
                      className="text-foreground hover:text-lilac"
                    >
                      {contact.email}
                    </a>
                  </li>

                  <li>
                    <span className="label-xs block text-primary">Phone</span>

                    <a href={`tel:${contact.phone}`} className="text-foreground hover:text-lilac">
                      {contact.phone}
                    </a>
                  </li>

                  <li>
                    <span className="label-xs block text-primary">LinkedIn</span>

                    <a
                      href={contact.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground hover:text-lilac"
                    >
                      {contact.linkedinLabel}
                    </a>
                  </li>

                  {contact.cv && (
                    <li>
                      <span className="label-xs block text-primary">CV</span>

                      <a
                        href={contact.cv}
                        target="_blank"
                        rel="noreferrer"
                        className="text-foreground hover:text-lilac"
                      >
                        CV / Resume
                      </a>
                    </li>
                  )}
                </ul>
              </div>

              <p className="mt-24 font-mono text-sm tracking-widest text-muted-foreground">
                FADE OUT.
              </p>
            </Reveal>
          </div>
        </section>
      </main>
    </div>
  );
}
