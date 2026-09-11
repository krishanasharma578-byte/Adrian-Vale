import { Reveal } from "./ui/Reveal";
import { AuraProject } from "./work/AuraProject";
import { HaloProject } from "./work/HaloProject";
import { PulseProject } from "./work/PulseProject";
import { VeroProject } from "./work/VeroProject";
import { LumenProject } from "./work/LumenProject";

export function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="relative">
      {/* section masthead */}
      <div className="bg-white pb-16 pt-24 sm:pb-20 sm:pt-32 lg:pt-40">
        <div className="mx-auto max-w-[1320px] px-6 sm:px-8 lg:px-12">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <div>
              <Reveal>
                <p className="eyebrow text-muted-2">Portfolio</p>
              </Reveal>
              <Reveal delay={80}>
                <h2
                  id="work-title"
                  className="display-xl mt-5 text-[2.6rem] text-ink sm:text-[3.8rem] lg:text-[4.8rem]"
                >
                  Selected Work
                </h2>
              </Reveal>
            </div>
            <Reveal delay={140}>
              <div className="md:pb-3">
                <p className="text-[1.02rem] leading-relaxed text-muted">
                  A collection of digital products and experiences I've designed.
                </p>
                <div className="mt-6 flex items-center gap-4 text-[0.75rem] font-medium uppercase tracking-[0.18em] text-muted-2">
                  <span>05 Projects</span>
                  <span className="h-px flex-1 bg-ink/10" />
                  <span>2024 — 2026</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <AuraProject />
      <HaloProject />
      <PulseProject />
      <VeroProject />
      <LumenProject />
    </section>
  );
}
