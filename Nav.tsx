import { useEffect, useState } from "react";
import { useScrollY } from "@/hooks/useMotion";
import { mailto, navItems, site } from "@/lib/site";
import { cn } from "@/utils/cn";

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.6] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const sectionIds = navItems.map((i) => i.href.replace("#", ""));

export function Nav() {
  const y = useScrollY();
  const scrolled = y > 24;
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          scrolled || open
            ? "border-b border-ink/8 bg-white/72 backdrop-blur-xl backdrop-saturate-150"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <nav
          aria-label="Primary"
          className={cn(
            "mx-auto flex max-w-[1320px] items-center justify-between px-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:px-8 lg:px-12",
            scrolled ? "h-14" : "h-[72px]",
          )}
        >
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className="group flex items-center gap-2.5"
            aria-label={`${site.name} — back to top`}
          >
            <span className="relative grid h-6 w-6 place-items-center overflow-hidden rounded-[7px] bg-ink transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
                <path d="M12 5 L18.5 19 H15.6 L12 11.2 L8.4 19 H5.5 Z" fill="#fff" />
              </svg>
            </span>
            <span className="text-[0.95rem] font-semibold tracking-[-0.02em] text-ink">{site.name}</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = active === item.href.replace("#", "");
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={cn(
                      "group relative block rounded-full px-4 py-2 text-[0.84rem] font-medium tracking-[-0.01em] transition-colors duration-300",
                      isActive ? "text-ink" : "text-muted hover:text-ink",
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-x-4 bottom-1 h-px origin-right scale-x-0 bg-ink/45 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:origin-left group-hover:scale-x-100",
                        isActive && "scale-x-100",
                      )}
                    />
                  </a>
                </li>
              );
            })}
            <li className="ml-3">
              <a
                href={mailto("New project enquiry")}
                className="group inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-[0.82rem] font-medium text-white transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-ink-3 active:scale-[0.98]"
              >
                Start a project
                <span className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            </li>
          </ul>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative -mr-2 grid h-10 w-10 place-items-center rounded-full transition-colors duration-300 hover:bg-ink/5 md:hidden"
          >
            <span
              className={cn(
                "absolute h-px w-5 bg-ink transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                open ? "rotate-45" : "-translate-y-[3.5px]",
              )}
            />
            <span
              className={cn(
                "absolute h-px w-5 bg-ink transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                open ? "-rotate-45" : "translate-y-[3.5px]",
              )}
            />
          </button>
        </nav>
      </header>

      {/* mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl transition-[opacity,visibility] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <div className="flex h-full flex-col justify-between px-6 pb-10 pt-28">
          <ul>
            {navItems.map((item, i) => (
              <li key={item.href} className="overflow-hidden border-b border-ink/8">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-5 text-[2rem] font-semibold tracking-[-0.04em] text-ink transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    transform: open ? "translateY(0)" : "translateY(105%)",
                    opacity: open ? 1 : 0,
                    transitionDelay: `${open ? 90 + i * 70 : 0}ms`,
                    transitionProperty: "transform, opacity",
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div
            className="space-y-5 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ opacity: open ? 1 : 0, transform: open ? "translateY(0)" : "translateY(18px)", transitionDelay: "380ms" }}
          >
            <div className="flex items-center gap-2 text-[0.8rem] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              Available for new projects
            </div>
            <a
              href={mailto("New project enquiry")}
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-base font-medium text-white active:scale-[0.99]"
            >
              Let's Work Together <span aria-hidden="true">→</span>
            </a>
            <p className="text-center text-[0.8rem] text-muted-2">{site.email}</p>
          </div>
        </div>
      </div>
    </>
  );
}
