import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { Truck, Droplets, Cpu, Calculator, Wrench, Lightbulb, FileSpreadsheet, Leaf } from "lucide-react";
import { motion } from "motion/react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — AXE GLOBAL SARLU" },
      { name: "description", content: "Logistics, water treatment, IT, taxation, accounting, industrial equipment and project development services across Africa." },
      { property: "og:title", content: "Services — AXE GLOBAL" },
      { property: "og:description", content: "Eight core capabilities for complete industrial projects." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Truck, name: "Transportation & Logistics", desc: "End-to-end heavy logistics and prime mover fleet management supporting trade routes across East and Central Africa.", points: ["Cross-border freight", "Fleet management", "Prime movers & trailers", "Decanters & equipment transport"] },
  { icon: Droplets, name: "Water Treatment & Production", desc: "The PURUS project delivers drinking water production and distribution infrastructure across the Congo basin.", points: ["Industrial filtration", "Drinking water production", "Packaging & distribution", "Sustainable utilities"] },
  { icon: Cpu, name: "IT & Digital Solutions", desc: "Enterprise digital transformation and industrial automation for high-performing systems.", points: ["Enterprise software", "Industrial automation", "Digital transformation", "Public-sector platforms"] },
  { icon: Calculator, name: "Taxation Services", desc: "Specialized fiscal management and strategic compliance for international industrial groups.", points: ["Tax strategy", "International compliance", "Audit support", "Filing & reporting"] },
  { icon: FileSpreadsheet, name: "Accounting", desc: "Robust financial frameworks and audit management for large-scale operations.", points: ["Bookkeeping", "Financial reporting", "Audit management", "Corporate finance"] },
  { icon: Wrench, name: "Industrial Equipment Supply", desc: "Direct supply of tractors, decanters and heavy-duty manufacturing spare parts.", points: ["Tractors", "Trailers & truck heads", "Decanters", "Industrial spare parts"] },
  { icon: Lightbulb, name: "Project Development Consulting", desc: "Consultancy for high-impact industrial projects from feasibility to execution.", points: ["Feasibility studies", "Project structuring", "International partnerships", "Execution oversight"] },
  { icon: Leaf, name: "Sustainability & Manufacturing", desc: "Integrated waste management, plastic manufacturing and eco-responsible production protocols.", points: ["Plastic manufacturing", "Packaging solutions", "Waste integration", "Green protocols"] },
];

function ServicesPage() {
  return (
    <Layout>
      <section className="pt-40 pb-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="font-mono text-azure text-[11px] tracking-[0.35em] uppercase mb-6">Capabilities</div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.9] max-w-4xl text-balance">
              Eight capabilities. One <span className="text-azure">industrial platform</span>.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-px bg-slate-line border border-slate-line">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.name} delay={(i % 2) * 0.08}>
                <motion.div whileHover={{ y: -4 }} className="bg-white p-10 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <Icon className="text-azure" size={32} strokeWidth={1.5} />
                    <span className="font-mono text-[10px] text-muted-foreground tracking-widest">
                      SERVICE_{String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold tracking-tight text-navy mb-4">{s.name}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-3 text-sm text-navy/80">
                        <span className="w-1.5 h-1.5 bg-azure rounded-full" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
