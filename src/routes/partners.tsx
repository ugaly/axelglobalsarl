import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners — AXE GLOBAL SARLU" },
      { name: "description", content: "Strategic partnerships powering AXE GLOBAL across Africa: AUTOMAX, WOODLANDS, PURUS and industrial equipment networks." },
      { property: "og:title", content: "Partners — AXE GLOBAL" },
      { property: "og:description", content: "International partnerships across logistics, water and manufacturing." },
    ],
  }),
  component: PartnersPage,
});

const partners = [
  { name: "AUTOMAX", focus: "Logistics & Heavy Equipment", region: "Central Africa", desc: "Tractors, trailers, truck heads, prime movers, decanters and industrial equipment." },
  { name: "WOODLANDS", focus: "Manufacturing", region: "Congo", desc: "Water production machines, packaging, industrial plastic manufacturing and spare parts." },
  { name: "PURUS", focus: "Drinking Water", region: "DRC · TZ · KE", desc: "Drinking water production, packaging and distribution infrastructure." },
];

function PartnersPage() {
  return (
    <Layout>
      <section className="pt-40 pb-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="font-mono text-azure text-[11px] tracking-[0.35em] uppercase mb-6">Strategic Ecosystem</div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.9] max-w-4xl text-balance">
              International partners. <span className="text-azure">African ambition</span>.
            </h1>
            <p className="mt-10 max-w-2xl text-white/65 text-lg">
              AXE GLOBAL operates a curated network of strategic partners across logistics, water and
              manufacturing — enabling complete project delivery from a single accountable platform.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-px bg-slate-line border border-slate-line">
            {partners.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <div className="bg-white p-10 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center hover:bg-ice transition-colors">
                  <div className="md:col-span-3">
                    <div className="text-4xl md:text-5xl font-extrabold tracking-tighter text-navy">{p.name}</div>
                  </div>
                  <div className="md:col-span-3 font-mono text-[10px] uppercase tracking-[0.25em] text-azure">{p.focus}</div>
                  <div className="md:col-span-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{p.region}</div>
                  <div className="md:col-span-4 text-sm text-navy/70 leading-relaxed">{p.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
