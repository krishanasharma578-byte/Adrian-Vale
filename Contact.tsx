import { primaryMailto, site } from "@/lib/site";
import { Reveal, RevealLines } from "./ui/Reveal";

const reassurance = [
  { k: "Reply time", v: "Within one business day" },
  { k: "Typical start", v: "Two to three weeks out" },
  { k: "Engagements", v: "Three to eight weeks" },
];

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="dark-surface relative overflow-hidden bg-ink py-28 text-white sm:py-36 lg:py-44"
    >
      {/* ambient light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[70%] w-[120%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),rgba(255,255,255,0)_65%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:96px_96px] [mask-image:radial-gradient(60%_60%_at_50%_40%,#000,transparent)]"
      />

      <div className="relative mx-auto max-w-[1320px] px-6 text-center sm:px-8 lg:px-12">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3.5 py-1.5 text-[0.72rem] font-medium text-white/70">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-signal" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
            </span>
            Taking on two projects this quarter
          </div>
        </Reveal>

        <h2 id="contact-title" className="display-xl mx-auto mt-8 max-w-4xl text-[2.5rem] sm:text-[4.2rem] lg:text-[5.6rem]">
          <RevealLines
            lines={[<>Have a project</>, <>in mind?</>]}
            stagger={90}
          />
        </h2>

        <Reveal delay={260}>
          <p className="mx-auto mt-7 max-w-lg text-balance text-[1.05rem] leading-relaxed text-white/60 sm:text-[1.2rem]">
            Let's turn your idea into a digital experience.
          </p>
        </Reveal>

        <Reveal delay={340}>
          <div className="mt-12">
            <a
              href={primaryMailto}
              className="group relative inline-flex w-full max-w-md items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-10 py-6 text-[1.05rem] font-medium tracking-[-0.02em] text-ink transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.015] active:scale-[0.99] sm:px-14 sm:py-7 sm:text-[1.2rem]"
            >
              <span className="relative z-10">Let's Work Together</span>
              <span
                aria-hidden="true"
                className="relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5"
              >
                →
              </span>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-ink/[0.06] transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-[420%]"
              />
            </a>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <p className="mt-7 text-[0.9rem] text-white/45">
            Or email directly —{" "}
            <a
              href={primaryMailto}
              className="group relative inline-block font-medium text-white/85 transition-colors duration-300 hover:text-white"
            >
              {site.email}
              <span className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-white/60 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:origin-left group-hover:scale-x-100" />
            </a>
          </p>
        </Reveal>

        <Reveal delay={460}>
          <dl className="mx-auto mt-16 grid max-w-3xl gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-3">
            {reassurance.map((item) => (
              <div key={item.k} className="bg-ink px-6 py-7 text-left transition-colors duration-500 hover:bg-ink-2">
                <dt className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-white/40">{item.k}</dt>
                <dd className="mt-2 text-[0.95rem] text-white/80">{item.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={520}>
          <p className="mx-auto mt-12 max-w-xl text-[0.88rem] leading-relaxed text-white/40">
            Tell me what you're building, who it's for and when you'd like it live. If it's not the right
            fit, I'll point you to someone who is.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
