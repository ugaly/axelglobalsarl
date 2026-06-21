import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About AXE GLOBAL SARLU — Mission, Vision & Leadership" },
      { name: "description", content: "Founded in 2025, AXE GLOBAL SARLU drives Africa's economic transformation through multi-sector industrial expertise and strategic partnerships." },
      { property: "og:title", content: "About AXE GLOBAL SARLU" },
      { property: "og:description", content: "Mission, vision, values and leadership of AXE GLOBAL." },
    ],v
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <section className="pt-40 pb-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="font-mono text-azure text-[11px] tracking-[0.35em] uppercase mb-6">About AXE GLOBAL</div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.9] max-w-5xl text-balance">
              A platform for growth, innovation and <span className="text-azure">transformation</span>.
            </h1>
            <p className="mt-10 max-w-3xl text-white/65 text-lg leading-relaxed">
              AXE GLOBAL SARLU is a multi-service company specializing in taxation, accounting,
              transportation, logistics, water treatment, drinking water production, IT solutions and
              industrial project development. We support public and private organizations with
              innovative solutions tailored to African realities.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
          <Reveal>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-azure mb-4">Mission</div>
              <h2 className="text-3xl font-extrabold tracking-tight mb-6">High-quality integrated solutions</h2>
              <p className="text-navy/70 leading-relaxed">
                To provide high-quality integrated solutions in commerce, industry, services,
                infrastructure and sustainable development, placing innovation, excellence,
                integrity and human capital at the heart of every action.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-azure mb-4">Vision</div>
              <h2 className="text-3xl font-extrabold tracking-tight mb-6">Leading Africa's economic development</h2>
              <p className="text-navy/70 leading-relaxed">
                To become a leading contributor to Africa's economic development by building a group
                of innovative, high-performing and sustainable companies that transform challenges
                into opportunities and create value for present and future generations.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-ice border-y border-slate-line">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-azure mb-3">Company Profile</div>
            <h2 className="text-4xl font-extrabold tracking-tight mb-12">Key facts</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-line border border-slate-line">
            {[
              { k: "Founded", v: "Nov 10, 2025" },
              { k: "Status", v: "SARLU" },
              { k: "ID NAT", v: "14-G7401-N87444F" },
              { k: "HQ", v: "Manika, DRC" },
              { k: "Coverage", v: "DRC · TZ · KE" },
              { k: "Sectors", v: "12+" },
              { k: "Hours", v: "Mon–Fri 08:00–17:00" },
              { k: "Languages", v: "FR · EN · SW" },
            ].map((f) => (
              <div key={f.k} className="bg-white p-8">
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-azure mb-3">{f.k}</div>
                <div className="font-bold text-navy text-lg">{f.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
