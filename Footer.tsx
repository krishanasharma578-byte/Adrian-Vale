import { mailto, navItems, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="dark-surface border-t border-white/10 bg-ink pb-10 pt-16 text-white sm:pt-20">
      <div className="mx-auto max-w-[1320px] px-6 sm:px-8 lg:px-12">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <a href="#top" className="group inline-flex items-center gap-2.5" aria-label="Back to top">
              <span className="grid h-6 w-6 place-items-center rounded-[7px] bg-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
                  <path d="M12 5 L18.5 19 H15.6 L12 11.2 L8.4 19 H5.5 Z" fill="#0a0a0b" />
                </svg>
              </span>
              <span className="text-[1.05rem] font-semibold tracking-[-0.025em]">{site.name}</span>
            </a>
            <p className="mt-4 max-w-xs text-[0.9rem] leading-relaxed text-white/45">{site.role}</p>
            <p className="mt-6 flex items-center gap-2 text-[0.82rem] text-white/45">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              Available for new projects
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-white/35">Navigate</h2>
            <ul className="mt-5 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-[0.92rem] text-white/65 transition-colors duration-300 hover:text-white"
                  >
                    <span className="h-px w-0 bg-white/60 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-4" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-white/35">Contact</h2>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={mailto("New project enquiry")}
                  className="group relative inline-block text-[0.92rem] text-white/65 transition-colors duration-300 hover:text-white"
                >
                  {site.email}
                  <span className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-white/50 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:origin-left group-hover:scale-x-100" />
                </a>
              </li>
              <li className="text-[0.92rem] text-white/45">{site.location}</li>
              <li>
                <a
                  href="#top"
                  className="group inline-flex items-center gap-2 text-[0.92rem] text-white/65 transition-colors duration-300 hover:text-white"
                >
                  Back to top
                  <span aria-hidden="true" className="transition-transform duration-500 group-hover:-translate-y-0.5">
                    ↑
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-6 text-[0.78rem] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>Designed and built in Lisbon. Every render on this page is drawn in code.</p>
        </div>
      </div>
    </footer>
  );
}
