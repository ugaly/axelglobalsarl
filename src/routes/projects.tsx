import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import waterPlant from "@/assets/water-plant.jpg";
import logisticsTruck from "@/assets/logistics-truck.jpg";
import manufacturing from "@/assets/manufacturing.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — PURUS, AUTOMAX & WOODLANDS | AXE GLOBAL" },
      { name: "description", content: "Flagship industrial projects: PURUS drinking water, AUTOMAX logistics, WOODLANDS manufacturing." },
      { property: "og:title", content: "AXE GLOBAL Projects" },
      { property: "og:description", content: "PURUS · AUTOMAX · WOODLANDS — flagship African industrial projects." },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    name: "PURUS",
    tag: "Drinking Water Infrastructure",
    desc: "An end-to-end drinking water production, packaging and distribution program serving communities across the Congo basin and East Africa. PURUS combines modern filtration, hygienic packaging and resilient logistics to deliver clean, affordable water at scale.",
    image: waterPlant,
    stats: [["Scope", "Production · Packaging · Distribution"], ["Region", "DRC · Tanzania · Kenya"], ["Status", "Active flagship"]],
  },
  {
    name: "AUTOMAX",
    tag: "Logistics & Heavy Equipment",
    desc: "AUTOMAX powers regional industrial mobility with tractors, trailers, prime movers and decanters. The platform anchors logistics partnerships connecting the DRC interior with Tanzanian and Kenyan ports.",
    image: logisticsTruck,
    stats: [["Fleet", "Tractors · Trailers · Decanters"], ["Corridor", "Central African Logistics"], ["Role", "Strategic Partner"]],
  },
  {
    name: "WOODLANDS",
    tag: "Manufacturing & Equipment",
    desc: "WOODLANDS specializes in water production machines, packaging solutions, industrial plastic manufacturing and spare parts — closing the loop between AXE GLOBAL's water and logistics verticals.",
    image: manufacturing,
    stats: [["Output", "Machines · Plastics · Spares"], ["Integration", "PURUS & AUTOMAX supply chain"], ["Role", "Strategic Partner"]],
  },
];

function ProjectsPage() {
  return (
    <Layout>
      <section className="pt-40 pb-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="font-mono text-azure text-[11px] tracking-[0.35em] uppercase mb-6">Flagship Projects</div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.9] max-w-4xl text-balance">
              Three pillars. One <span className="text-azure">integrated</span> platform.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        {projects.map((p, i) => (
          <div key={p.name} className={`py-24 ${i % 2 === 1 ? "bg-ice" : "bg-white"} border-b border-slate-line`}>
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
              <Reveal className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.name} loading="lazy" width={1200} height={800} className="w-full h-full object-cover" />
                </div>
              </Reveal>
              <Reveal delay={0.15} className="lg:col-span-5">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-azure mb-3">
                    Project 0{i + 1} · {p.tag}
                  </div>
                  <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-navy mb-6">
                    {p.name}
                  </h2>
                  <p className="text-navy/70 leading-relaxed mb-8">{p.desc}</p>
                  <div className="space-y-3 border-t border-slate-line pt-6">
                    {p.stats.map(([k, v]) => (
                      <div key={k} className="grid grid-cols-3 gap-4 text-sm">
                        <span className="font-mono uppercase text-[10px] tracking-widest text-muted-foreground pt-1">{k}</span>
                        <span className="col-span-2 font-semibold text-navy">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
}
