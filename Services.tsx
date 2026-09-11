import { services } from "@/lib/site";
import { mailto } from "@/lib/site";
import { Reveal } from "./ui/Reveal";

export function Services() {
  return (
    <section aria-labelledby="services-title" className="relative bg-white py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1320px] px-6 sm:px-8 lg:px-12">
        <div className="grid gap-8 border-b border-ink/8 pb-12 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <Reveal>
              <p className="eyebrow text-muted-2">Services</p>
            </Reveal>
            <Reveal delay={80}>
              <h2
                id="services-title"
                className="display-lg mt-5 max-w-2xl text-[2.3rem] text-ink sm:text-[3.1rem] lg:text-[3.7rem]"
              >
                What I design, end to end.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <p className="text-[1rem] leading-relaxed text-muted md:pb-2">
              Engagements usually run three to eight weeks. You get direction, design and the system behind
              it — documented well enough that any good developer can build it.
            </p>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal as="li" key={service.title} delay={(i % 3) * 90} distance={22}>
              <a
                href={mailto(`Project enquiry — ${service.title}`)}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-ink/8 bg-white p-7 transition-[transform,border-color,background-color,box-shadow] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-ink/15 hover:bg-mist hover:shadow-[0_28px_60px_-45px_rgba(10,10,11,0.6)]"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-ink/30 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
                />
                <div className="flex items-start justify-between">
                  <h3 className="max-w-[13ch] text-[1.28rem] font-semibold leading-tight tracking-[-0.03em] text-ink">
                    {service.title}
                  </h3>
                  <span className="text-[0.7rem] font-medium tracking-[0.2em] text-muted-2">{service.index}</span>
                </div>
                <p className="mt-14 text-[0.9rem] leading-relaxed text-muted">{service.body}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-[0.82rem] font-medium text-ink">
                  Start a conversation
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5"
                  >
                    →
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
