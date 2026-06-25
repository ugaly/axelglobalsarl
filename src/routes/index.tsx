import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Truck, Droplets, Cpu, Calculator, Wrench, Lightbulb, FileSpreadsheet, Leaf } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import heroPort from "@/assets/hero-port.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AXE GLOBAL SARLU — Africa's Industrial Engine" },
      { name: "description", content: "Multi-sector African company: logistics, water treatment, IT, taxation, accounting and industrial projects across DRC, Tanzania and Kenya." },
      { property: "og:title", content: "AXE GLOBAL SARLU — Africa's Industrial Engine" },
      { property: "og:description", content: "Innovation Through Difference, Excellence Through Action." },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Truck, name: "Transportation & Logistics", desc: "Cross-border heavy logistics and fleet management across the Central Corridor." },
  { icon: Droplets, name: "Water Treatment", desc: "Modern drinking water production systems and sustainable filtration infrastructure." },
  { icon: Cpu, name: "IT & Digital Solutions", desc: "Digital transformation for industrial enterprises and public institutions." },
  { icon: Calculator, name: "Taxation Services", desc: "Strategic fiscal planning and corporate compliance for international groups." },
  { icon: FileSpreadsheet, name: "Accounting", desc: "Robust financial frameworks and audit management for large-scale operations." },
  { icon: Wrench, name: "Industrial Equipment", desc: "Tractors, decanters, trailers and heavy-duty manufacturing spare parts." },
  { icon: Lightbulb, name: "Project Development", desc: "Consultancy for high-impact industrial projects from feasibility to execution." },
  { icon: Leaf, name: "Sustainability", desc: "Integrated waste management and eco-responsible production protocols." },
];

const partners = [
  {
    name: "AUTOMAX",
    tag: "01 / Driving Logistics",
    desc: "Tractors, trailers, prime movers and decanters powering regional industrial mobility.",
    image: "https://automax.atomcards.co.tz/logo/logo.png",
    href: "https://www.automaxspace.com/",
    kind: "logo" as const,
    imageBg: "bg-neutral-800",
  },
  {
    name: "BE Forward",
    tag: "02 / Vehicle Procurement Partner",
    desc: "Strategic partner for international vehicle sourcing, shipping and logistics coordination.",
    image: "https://cdn.beforward.jp/assets/images/logo.svg?_=64c30c27",
    href: "https://www.beforward.jp/",
    kind: "logo" as const,
  },
  {
    name: "WOODLANDS",
    tag: "03 / Manufacturing Excellence",
    desc: "Water production machines, packaging, plastic manufacturing and spare parts.",
    image: "https://woodlands.co.ke/wp-content/uploads/2025/07/33.png",
    href: "https://woodlands.co.ke/",
    kind: "logo" as const,
  },
  {
    name: "Clockwise Technologies",
    tag: "04 / Digital Transformation",
    desc: "Custom applications, cloud platforms, and digital systems for organizations across Africa and beyond.",
    image: "https://clockwise.atomcards.co.tz/logo/clockwise-logo.png",
    href: "http://clockwisetz.com/",
    kind: "logo" as const,
    imageBg: "bg-neutral-800",
  },
];

const stats = [
  { k: "EST.", v: "2025" },
  { k: "REGIONS", v: "03" },
  { k: "SECTORS", v: "12+" },
  { k: "PARTNERS", v: "4" },
];

const values = [
  "Integrity", "Excellence", "Innovation", "Leadership", "Responsibility",
  "Faith", "Commitment", "Team Spirit", "Value Creation", "Professionalism", "Customer Satisfaction",
];

function HomePage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <img src={heroPort} alt="" width={1920} height={1080} className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-2 via-navy/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-azure" />
            <span className="font-mono text-azure text-[11px] tracking-[0.35em] uppercase">
              Leading Africa's Industrial Future
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.92] text-white text-balance max-w-6xl">
            Innovation Through <span className="text-azure">Difference</span>.
            <br />
            Excellence Through <span className="underline decoration-azure/40 decoration-4 underline-offset-[12px]">Action</span>.
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14 max-w-5xl">
            <p className="text-white/65 text-lg leading-relaxed max-w-md">
              AXE GLOBAL SARLU is a multi-sector catalyst for economic transformation, delivering
              high-impact industrial solutions across DRC, Tanzania and Kenya.
            </p>
            <div className="flex flex-wrap gap-3 md:justify-end items-start">
              <Link
                to="/services"
                className="group inline-flex items-center gap-3 bg-azure text-white px-8 py-4 font-bold uppercase text-[11px] tracking-[0.2em] shadow-2xl shadow-azure/30 hover:translate-y-[-2px] transition-transform"
              >
                Our Services <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border border-white/20 text-white px-8 py-4 font-bold uppercase text-[11px] tracking-[0.2em] hover:bg-white/5 transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Stat strip */}
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 border-t border-white/10 bg-navy-2/70 backdrop-blur-sm">
          {stats.map((s, i) => (
            <div
              key={s.k}
              className={`p-6 md:p-8 ${i < stats.length - 1 ? "md:border-r border-white/10" : ""} ${i < 2 ? "border-b md:border-b-0" : ""} ${i % 2 === 0 ? "border-r" : ""} border-white/10`}
            >
              <div className="text-azure font-mono text-[10px] tracking-[0.25em] mb-2">{s.k}</div>
              <div className="text-white font-extrabold text-2xl md:text-3xl tracking-tight">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION STRIP */}
      <section className="py-24 bg-white border-b border-slate-line">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          {[
            { k: "Mission", v: "Provide high-quality integrated solutions in commerce, industry, services and infrastructure — placing innovation, excellence, integrity and human capital at the heart of every action." },
            { k: "Vision", v: "Become a leading contributor to Africa's economic development by building innovative, high-performing and sustainable companies that transform challenges into opportunities." },
            { k: "Approach", v: "A multi-service platform with international partnerships and the ability to manage complete industrial projects — from feasibility to delivery." },
          ].map((b, i) => (
            <Reveal key={b.k} delay={i * 0.1}>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-azure mb-4">Our {b.k}</div>
                <p className="text-navy/80 text-lg leading-relaxed text-pretty">{b.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-24 bg-ice">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="flex items-center gap-4 mb-16">
              <h2 className="font-mono text-[11px] uppercase tracking-[0.4em] text-muted-foreground">Strategic Ecosystem</h2>
              <div className="h-px flex-grow bg-slate-line" />
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-line border border-slate-line">
            {partners.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.1}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white p-10 h-full flex flex-col cursor-pointer group hover:-translate-y-1 transition-transform"
                >
                  <div className={`aspect-[4/3] mb-8 overflow-hidden flex items-center justify-center ${p.imageBg ?? "bg-ice"} ${p.kind === "logo" ? "px-8 py-10" : ""}`}>
                    <img src={p.image} alt={p.name} loading="lazy" width={1200} height={800} className={`w-full h-full transition-all duration-700 ${p.kind === "logo" ? "object-contain" : "object-cover grayscale group-hover:grayscale-0"}`} />
                  </div>
                  <div className="font-extrabold text-3xl tracking-tighter text-navy mb-3 group-hover:text-azure transition-colors">{p.name}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{p.desc}</p>
                  <div className="font-mono text-[10px] text-azure tracking-[0.25em] uppercase">{p.tag}</div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-32 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="max-w-7xl mx-auto px-6 relative">
          <Reveal>
            <div className="max-w-3xl mb-20">
              <div className="font-mono text-azure text-[11px] tracking-[0.35em] uppercase mb-6">Capabilities</div>
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 leading-[0.95]">
                A Multi-Service Platform
                <br />
                <span className="text-azure">Engineered for Africa</span>.
              </h2>
              <p className="text-white/60 text-lg max-w-2xl">
                Eight core capabilities working in concert to deliver complete industrial projects
                across the continent.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-t border-white/10">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.name} delay={(i % 4) * 0.05}>
                  <div className="p-8 border-r border-b border-white/10 group h-full hover:bg-azure/5 transition-colors">
                    <div className="flex items-center justify-between mb-8">
                      <Icon className="text-azure" size={28} strokeWidth={1.5} />
                      <span className="font-mono text-[10px] text-white/30 tracking-widest">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold mb-3 group-hover:text-azure transition-colors">{s.name}</h4>
                    <p className="text-sm text-white/50 leading-relaxed">{s.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CEO */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <Reveal className="lg:col-span-5">
            <div className="relative">
              <div className="w-full aspect-[4/5] bg-navy/5 ring-1 ring-navy/5 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-2 to-azure/30 flex items-center justify-center">
                  <div className="text-center px-8">
                    <div className="font-mono text-azure text-[10px] uppercase tracking-[0.3em] mb-4">President & CEO</div>
                    <div className="text-white text-5xl font-extrabold tracking-tighter mb-2">BM</div>
                    <div className="text-white/60 text-sm">Boanerges Muyampe</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-azure p-6 text-white hidden md:block shadow-2xl shadow-azure/30">
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] mb-2 opacity-80">Direct Line</div>
                <div className="font-bold text-sm">+243 971 798 652</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-7">
            <div>
              <div className="font-mono text-azure text-[11px] tracking-[0.35em] uppercase mb-6">Leadership</div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-navy mb-8">
                Boanerges Muyampe
              </h2>
              <p className="text-xl text-navy/70 leading-relaxed italic mb-10 max-w-2xl">
                "AXE GLOBAL is not simply a company. We are a platform for growth, innovation and
                transformation committed to building sustainable solutions that positively impact
                Africa and the world."
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm">
                {[
                  { h: "Industrial Visionary", p: "Expert in large-scale logistics and international industrial partnerships." },
                  { h: "Regional Growth", p: "Directing development across East and Central Africa." },
                  { h: "Strategic Titles", p: "CEO AXE GLOBAL · Automax Congo · Woodlands Congo." },
                  { h: "Project Director", p: "Industrial projects & business development consulting." },
                ].map((b) => (
                  <div key={b.h} className="border-l-2 border-azure/30 pl-5">
                    <h4 className="font-bold uppercase text-navy mb-2 text-xs tracking-widest">{b.h}</h4>
                    <p className="text-muted-foreground leading-relaxed">{b.p}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUES BAND */}
      <section className="py-20 bg-ice border-y border-slate-line overflow-hidden">
        <Reveal>
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-center text-muted-foreground mb-10">
            Core Values
          </div>
        </Reveal>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 max-w-5xl mx-auto px-6">
          {values.map((v, i) => (
            <Reveal key={v} delay={i * 0.03}>
              <span className="text-navy text-xl md:text-2xl font-bold tracking-tight">
                {v}<span className="text-azure">.</span>
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy-2 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 text-balance">
              Build the next industrial chapter <span className="text-azure">with us</span>.
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
              From PURUS drinking water infrastructure to AUTOMAX logistics fleets — let's transform
              your project into reality.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-azure text-white px-10 py-5 font-bold uppercase text-xs tracking-[0.2em] shadow-2xl shadow-azure/30 hover:translate-y-[-2px] transition-transform"
            >
              Request a Quotation
              <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
