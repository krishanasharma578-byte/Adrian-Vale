import { useParallaxVars } from "@/hooks/useMotion";
import { primaryMailto, site } from "@/lib/site";
import { LinkButton } from "./ui/Buttons";
import { RevealLines } from "./ui/Reveal";
import { HeroScene } from "./HeroScene";

export function Hero() {
  const ref = useParallaxVars<HTMLDivElement>();

  return (
    <section id="top" ref={ref} className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      {/* ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_80%_at_50%_-10%,#ffffff_0%,#f7f6f4_45%,#efeeeb_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[70vh] opacity-[0.035] [background-image:linear-gradient(to_right,#0a0a0b_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0b_1px,transparent_1px)] [background-size:88px_88px] [mask-image:radial-gradient(70%_60%_at_50%_20%,#000,transparent)]"
      />

      <div className="mx-auto max-w-[1320px] px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <div
            className="animate-rise inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-3.5 py-1.5 text-[0.72rem] font-medium tracking-[-0.01em] text-muted backdrop-blur"
            style={{ animationDelay: "80ms" }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-signal" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
            </span>
            Available for select projects — Q3 2026
          </div>

          <h1 className="display-xl mt-7 text-[2.15rem] text-ink sm:text-[3.6rem] lg:text-[5.25rem]">
            <RevealLines
              lines={[
                <>I Design Digital</>,
                <>Experiences People</>,
                <>
                  Want to <span className="italic font-light tracking-[-0.03em]">Use.</span>
                </>,
              ]}
              stagger={95}
            />
          </h1>

          <p
            className="animate-rise mx-auto mt-7 max-w-xl text-balance text-[1.02rem] leading-relaxed text-muted sm:text-[1.15rem]"
            style={{ animationDelay: "420ms" }}
          >
            Premium websites and digital products, designed with clarity, motion, and purpose.
          </p>

          <div
            className="animate-rise mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ animationDelay: "560ms" }}
          >
            <LinkButton href="#work" tone="dark" size="lg" className="w-full sm:w-auto">
              View My Work
            </LinkButton>
            <LinkButton href={primaryMailto} tone="ghost" size="lg" arrow className="w-full sm:w-auto">
              Let's Work Together
            </LinkButton>
          </div>

          <p className="animate-rise mt-6 text-[0.78rem] text-muted-2" style={{ animationDelay: "680ms" }}>
            {site.location} · Replies within one business day
          </p>
        </div>

        <HeroScene className="mt-10 sm:mt-14 lg:mt-6" />
      </div>

      {/* marquee of disciplines */}
      <div className="relative mt-2 border-y border-ink/8 bg-white/50 py-4 backdrop-blur-sm sm:mt-6">
        <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-center gap-x-8 gap-y-2 px-6 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-muted-2 sm:gap-x-14">
          <span>Product Websites</span>
          <span className="hidden sm:inline">·</span>
          <span>Interface Design</span>
          <span className="hidden sm:inline">·</span>
          <span>Design Systems</span>
          <span className="hidden sm:inline">·</span>
          <span>Motion</span>
          <span className="hidden lg:inline">·</span>
          <span className="hidden lg:inline">Art Direction</span>
        </div>
      </div>
    </section>
  );
}
