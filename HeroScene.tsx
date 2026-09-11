import type { ReactNode } from "react";
import { usePointerVars } from "@/hooks/useMotion";
import { cn } from "@/utils/cn";
import { ChargerPad } from "./visuals/ChargerPad";
import { Headphones } from "./visuals/Headphones";
import { LaptopFrame, PhoneFrame } from "./visuals/DeviceFrames";
import { HeroSiteScreen } from "./visuals/LaptopScreens";
import { PulseApp } from "./visuals/PulseApp";

type LayerProps = {
  children: ReactNode;
  className?: string;
  /** pointer parallax strength in px */
  depth?: number;
  /** scroll parallax strength in px */
  drift?: number;
  float?: string;
  delay?: number;
  z?: number;
};

function Layer({ children, className, depth = 12, drift = 0, float, delay = 0, z = 10 }: LayerProps) {
  return (
    <div
      className={cn("absolute will-change-transform", className)}
      style={{
        zIndex: z,
        transform: `translate3d(calc(var(--mx, 0) * ${depth}px), calc(var(--my, 0) * ${depth * 0.7}px + var(--pc, 0) * ${drift}px), 0)`,
        transition: "transform 700ms cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      <div className={cn(float)} style={{ animationDelay: `${delay}ms` }}>
        <div className="animate-rise" style={{ animationDelay: `${420 + delay}ms` }}>
          {children}
        </div>
      </div>
    </div>
  );
}

/** Floating composition of the five conceptual products. */
export function HeroScene({ className }: { className?: string }) {
  const { ref, onPointerMove, onPointerLeave } = usePointerVars<HTMLDivElement>();

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className={cn(
        "relative mx-auto aspect-[4/3.5] w-full max-w-[1280px] sm:aspect-[16/10] lg:aspect-[16/7.8]",
        className,
      )}
      aria-hidden="false"
    >
      {/* stage light */}
      <div className="pointer-events-none absolute inset-x-[6%] top-[6%] h-[86%] rounded-[50%] bg-[radial-gradient(ellipse_at_50%_45%,rgba(10,10,11,0.055),rgba(10,10,11,0)_62%)]" />
      <div className="pointer-events-none absolute inset-x-[12%] bottom-[6%] h-px bg-gradient-to-r from-transparent via-ink/12 to-transparent" />

      {/* laptop */}
      <Layer
        className="bottom-[22%] left-[15%] w-[70%] sm:bottom-[14%] sm:left-[24%] sm:w-[52%] lg:left-[27%] lg:w-[46%]"
        depth={16}
        drift={-26}
        z={20}
      >
        <LaptopFrame label="Vero Studio laptop displaying a product launch page">
          <HeroSiteScreen />
        </LaptopFrame>
      </Layer>

      {/* headphones */}
      <Layer
        className="-left-[2%] bottom-[2%] w-[34%] sm:bottom-[16%] sm:left-[1%] sm:w-[26%] lg:w-[24%]"
        depth={30}
        drift={34}
        float="animate-float-a"
        z={30}
      >
        <Headphones />
      </Layer>

      {/* phone */}
      <Layer
        className="bottom-[1%] right-[2%] w-[20%] sm:bottom-[6%] sm:right-[5%] sm:w-[14%] lg:w-[12%]"
        depth={38}
        drift={46}
        float="animate-float-c"
        delay={600}
        z={40}
      >
        <PhoneFrame label="Pulse mobile app concept">
          <PulseApp screen="today" />
        </PhoneFrame>
      </Layer>

      {/* charger */}
      <Layer
        className="bottom-[3%] left-[13%] hidden w-[18%] sm:block lg:left-[11%] lg:w-[17%]"
        depth={44}
        drift={54}
        float="animate-float-b"
        delay={300}
        z={35}
      >
        <ChargerPad />
      </Layer>

      {/* AI card */}
      <Layer
        className="right-[1%] top-[4%] hidden w-[30%] max-w-[330px] lg:block"
        depth={26}
        drift={-46}
        float="animate-float-b"
        delay={900}
        z={25}
      >
        <AiCard />
      </Layer>

      {/* spec chip */}
      <Layer
        className="left-[2%] top-[10%] hidden lg:block"
        depth={20}
        drift={-30}
        float="animate-float-c"
        delay={1200}
        z={25}
      >
        <div className="rounded-full border border-ink/10 bg-white/80 px-4 py-2 text-[0.72rem] font-medium tracking-[-0.01em] text-muted shadow-[0_18px_40px_-24px_rgba(10,10,11,0.4)] backdrop-blur">
          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-signal align-middle" />
          Design system · 128 components
        </div>
      </Layer>
    </div>
  );
}

function AiCard() {
  return (
    <div className="@container overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d10] p-5 text-white shadow-[0_40px_90px_-40px_rgba(10,10,11,0.75)]">
      <div className="flex items-center gap-2.5">
        <span className="relative grid h-6 w-6 place-items-center rounded-lg bg-white text-[0.7rem] font-semibold text-ink">
          L
        </span>
        <span className="text-[0.8rem] font-medium">Lumen</span>
        <span className="ml-auto flex items-center gap-1.5 text-[0.65rem] text-white/45">
          <span className="h-1.5 w-1.5 rounded-full bg-signal" />
          Live
        </span>
      </div>

      <p className="mt-4 text-[0.82rem] leading-relaxed text-white/80">
        “Draft a launch page for Aura One.”
      </p>

      <div className="mt-4 space-y-2">
        {[100, 82, 64].map((w, i) => (
          <span key={w} className="block h-1.5 overflow-hidden rounded-full bg-white/10">
            <span
              className="block h-full rounded-full bg-white/45"
              style={{ width: `${w}%`, animation: `sheen ${5 + i}s ease-in-out ${i * 0.4}s infinite` }}
            />
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-end gap-1" aria-hidden="true">
        {[38, 62, 44, 78, 56, 88, 48, 70, 40, 66, 52, 80].map((h, i) => (
          <span
            key={i}
            className="flex-1 rounded-full bg-white/25"
            style={{
              height: `${h * 0.28}px`,
              animation: `bar ${2 + (i % 5) * 0.3}s ease-in-out ${i * 0.1}s infinite`,
              transformOrigin: "bottom",
            }}
          />
        ))}
      </div>
    </div>
  );
}
