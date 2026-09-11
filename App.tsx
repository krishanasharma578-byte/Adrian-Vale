import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Products } from "@/components/Products";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";

export default function App() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to work
      </a>

      <ScrollProgress />
      <Nav />

      <main>
        <Hero />
        <Products />
        <Work />
        <About />
        <Services />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
