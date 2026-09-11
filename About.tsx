import { primaryMailto, principles, processSteps, site, stats } from "@/lib/site";
import { Reveal } from "./ui/Reveal";
import { UnderlineLink } from "./ui/Buttons";

export function About() {
  return (
    <section id="about" className="relative bg-mist py-24 sm:py-32 lg:py-40" aria-labelledby="about-title">
      <div className="mx-auto max-w-[1320px] px-6 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
          {/* identity card */}
          <Reveal distance={28} className="h-full">
            <div className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-ink p-8 text-white sm:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.14),transparent_65%)]"
              />
              <div className="relative flex h-full flex-col justify-between gap-14">
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                      <path d="M12 4 L19 20 H15.9 L12 10.9 L8.1 20 H5 Z" fill="#fff" />
                    </svg>
                  </span>
                  <span className="flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-[0.72rem] text-white/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                    Available
                  </span>
                </div>

                <div>
                  <p className="text-[1.9rem] font-semibold tracking-[-0.035em] sm:text-[2.3rem]">{site.name}</p>
                  <p className="mt-2 text-[0.95rem] text-white/55">{site.role}</p>

                  <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
                    <div>
                      <dt className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-white/40">Based in</dt>
                      <dd className="mt-2 text-[0.95rem]">Lisbon, {site.timezone}</dd>
                    </div>
                    <div>
                      <dt className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-white/40">Working</dt>
                      <dd className="mt-2 text-[0.95rem]">Remote, worldwide</dd>
                    </div>
                    <div>
                      <dt className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-white/40">Focus</dt>
                      <dd className="mt-2 text-[0.95rem]">Product & marketing sites</dd>
                    </div>
                    <div>
                      <dt className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-white/40">Since</dt>
                      <dd className="mt-2 text-[0.95rem]">{site.since}</dd>
                    </div>
                  </dl>

                  <UnderlineLink href={primaryMailto} light className="mt-8">
                    {site.email}
                  </UnderlineLink>
                </div>
              </div>
            </div>
          </Reveal>

          {/* copy */}
          <div>
            <Reveal>
              <p className="eyebrow text-muted-2">About</p>
            </Reveal>
            <Reveal delay={80}>
              <h2
                id="about-title"
                className="display-lg mt-5 text-[2.4rem] text-ink sm:text-[3.2rem] lg:text-[3.8rem]"
              >
                Designing with purpose.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-7 max-w-xl text-[1.08rem] leading-relaxed text-ink/80">
                I'm {site.firstName}, an independent designer creating modern websites and digital
                experiences that are visually refined, easy to use, and built around what the people using
                them are actually trying to do.
              </p>
            </Reveal>
            <Reveal delay={190}>
              <p className="mt-5 max-w-xl text-[0.98rem] leading-relaxed text-muted">
                I work with founders, product teams and studios — usually as the single design partner from
                positioning through to launch. That means fewer handoffs, one consistent voice, and a site
                that still feels considered a year after it ships.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <dl className="mt-12 grid grid-cols-3 gap-6 border-y border-ink/8 py-8">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="text-[1.8rem] font-semibold tracking-[-0.04em] text-ink sm:text-[2.4rem]">
                      {s.value}
                    </dt>
                    <dd className="mt-1 text-[0.78rem] leading-snug text-muted">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {principles.map((p, i) => (
                <Reveal key={p.title} delay={i * 90} distance={18}>
                  <h3 className="text-[0.98rem] font-semibold tracking-[-0.02em] text-ink">{p.title}</h3>
                  <p className="mt-2 text-[0.88rem] leading-relaxed text-muted">{p.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* process */}
        <div className="mt-20 border-t border-ink/8 pt-12 lg:mt-28">
          <Reveal>
            <p className="eyebrow text-muted-2">How we'd work</p>
          </Reveal>
          <ol className="mt-8 grid gap-px overflow-hidden rounded-2xl bg-ink/8 md:grid-cols-4">
            {processSteps.map((step, i) => (
              <Reveal
                as="li"
                key={step.step}
                delay={i * 80}
                distance={16}
                className="group bg-mist p-7 transition-colors duration-500 hover:bg-white"
              >
                <span className="text-[0.72rem] font-medium tracking-[0.2em] text-muted-2">{step.step}</span>
                <h3 className="mt-4 text-[1.05rem] font-semibold tracking-[-0.02em] text-ink">{step.title}</h3>
                <p className="mt-2 text-[0.88rem] leading-relaxed text-muted">{step.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
