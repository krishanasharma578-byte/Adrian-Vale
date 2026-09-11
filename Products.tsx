import { products } from "@/lib/site";
import { Reveal } from "./ui/Reveal";

function Glyph({ id }: { id: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden="true">
      {id === "aura" && (
        <g {...common}>
          <path d="M8 24v-4a12 12 0 0 1 24 0v4" />
          <rect x="4.5" y="22" width="7" height="12" rx="3.5" />
          <rect x="28.5" y="22" width="7" height="12" rx="3.5" />
        </g>
      )}
      {id === "halo" && (
        <g {...common}>
          <ellipse cx="20" cy="22" rx="14" ry="6" />
          <path d="M6 22v3a14 6 0 0 0 28 0v-3" />
          <ellipse cx="20" cy="21" rx="5.5" ry="2.4" />
        </g>
      )}
      {id === "pulse" && (
        <g {...common}>
          <rect x="12.5" y="4.5" width="15" height="31" rx="4" />
          <path d="M17 9h6" />
          <path d="M15.5 24l3-5 3 7 3-9 2 4h1.5" />
        </g>
      )}
      {id === "vero" && (
        <g {...common}>
          <rect x="7.5" y="9.5" width="25" height="17" rx="2.5" />
          <path d="M4 30.5h32l-2 3H6z" />
        </g>
      )}
      {id === "lumen" && (
        <g {...common}>
          <circle cx="20" cy="20" r="6" />
          <circle cx="20" cy="20" r="12.5" strokeDasharray="3 5" />
          <path d="M20 2v3M20 35v3M2 20h3M35 20h3" />
        </g>
      )}
    </svg>
  );
}

export function Products() {
  return (
    <section id="products" className="relative bg-mist py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1320px] px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 border-b border-ink/8 pb-10 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="eyebrow text-muted-2">Products</p>
            <h2 className="display-lg mt-4 max-w-2xl text-[2.1rem] text-ink sm:text-[3rem] lg:text-[3.6rem]">
              Five concepts. One design language.
            </h2>
          </Reveal>
          <Reveal delay={120} className="md:max-w-xs">
            <p className="text-[0.98rem] leading-relaxed text-muted">
              Each project below is presented the way I present products: a clear idea, a considered
              interface, and details that reward a second look.
            </p>
          </Reveal>
        </div>

        <ul className="-mx-6 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-5">
          {products.map((product, i) => (
            <li key={product.id} className="min-w-[76%] snap-center sm:min-w-0">
              <Reveal delay={i * 80} distance={26} className="h-full">
                <a
                  href={product.target}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-ink/8 bg-white p-6 transition-[transform,box-shadow,border-color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-ink/15 hover:shadow-[0_30px_60px_-40px_rgba(10,10,11,0.45)]"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-ink/85 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110">
                      <Glyph id={product.id} />
                    </span>
                    <span className="text-[0.68rem] font-medium tracking-[0.18em] text-muted-2">
                      {product.index}
                    </span>
                  </div>

                  <div className="mt-12">
                    <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-muted-2">
                      {product.family}
                    </p>
                    <h3 className="mt-2 text-[1.15rem] font-semibold tracking-[-0.025em] text-ink">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-[0.86rem] leading-relaxed text-muted">{product.tagline}</p>

                    <span className="mt-5 flex items-center gap-1.5 text-[0.8rem] font-medium text-ink opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 sm:-translate-y-1 sm:group-hover:translate-y-0">
                      Explore
                      <span aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>

                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-ink/25 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
                  />
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
