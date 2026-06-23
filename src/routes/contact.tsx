import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, MessageCircle, ArrowUpRight, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Request a Quote — AXE GLOBAL SARLU" },
      { name: "description", content: "Request a quotation or contact AXE GLOBAL SARLU. HQ in Manika, DRC. Email axeglobal@gmail.com." },
      { property: "og:title", content: "Contact AXE GLOBAL" },
      { property: "og:description", content: "Request a quotation or talk with our team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <Layout>
      <section className="pt-40 pb-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="font-mono text-azure text-[11px] tracking-[0.35em] uppercase mb-6">Get in touch</div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.9] max-w-4xl text-balance">
              Request a <span className="text-azure">quotation</span>.
            </h1>
            <p className="mt-10 max-w-2xl text-white/65 text-lg">
              Tell us about your project — logistics, water infrastructure, IT, taxation, accounting
              or industrial equipment. Our team responds within one business day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <div className="space-y-8">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-azure mb-3">Headquarters</div>
                <div className="flex items-start gap-4 text-navy">
                  <MapPin className="text-azure mt-1 shrink-0" size={20} />
                  <div>
                    <div className="font-bold">16, Ngungu, Manika Commune, Q/QG</div>
                    <div className="text-muted-foreground text-sm mt-1">Democratic Republic of the Congo</div>
                    <a href="https://maps.app.goo.gl/hNrhAqA4vUzwaec7A" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-azure font-mono text-[11px] uppercase tracking-widest mt-2 hover:underline">
                      Open in Maps <ArrowUpRight size={12} />
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-azure mb-3">Email</div>
                <div className="space-y-2">
                  <a href="mailto:axeglobal@gmail.com" className="flex items-center gap-4 text-navy hover:text-azure transition-colors">
                    <Mail className="text-azure shrink-0" size={20} />
                    <span className="font-bold">axeglobal@gmail.com</span>
                  </a>
                  <a href="mailto:contact@axeglobal.com" className="flex items-center gap-4 text-navy hover:text-azure transition-colors">
                    <Mail className="text-azure shrink-0" size={20} />
                    <span className="font-bold">contact@axeglobal.com</span>
                  </a>
                </div>
              </div>

              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-azure mb-3">Phone</div>
                <div className="space-y-2">
                  <a href="tel:+243839094758" className="flex items-center gap-4 text-navy hover:text-azure transition-colors">
                    <Phone className="text-azure shrink-0" size={20} />
                    <span className="font-bold">+243 839 094 758</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Office</span>
                  </a>
                  <a href="tel:+243971798652" className="flex items-center gap-4 text-navy hover:text-azure transition-colors">
                    <Phone className="text-azure shrink-0" size={20} />
                    <span className="font-bold">+243 971 798 652</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">CEO</span>
                  </a>
                  <a href="https://wa.me/243971798652" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-navy hover:text-azure transition-colors">
                    <MessageCircle className="text-azure shrink-0" size={20} />
                    <span className="font-bold">WhatsApp Business</span>
                  </a>
                </div>
              </div>

              <div className="border-t border-slate-line pt-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-azure mb-2">Hours</div>
                <div className="text-navy font-bold">Monday – Friday · 08:00 – 17:00</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-7">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="bg-ice border border-slate-line p-8 md:p-10"
            >
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="inline-flex w-16 h-16 bg-azure text-white rounded-full items-center justify-center mb-6">
                    <Check size={28} />
                  </div>
                  <h3 className="text-2xl font-extrabold tracking-tight text-navy mb-3">Request received</h3>
                  <p className="text-muted-foreground">Our team will get back to you within one business day.</p>
                </motion.div>
              ) : (
                <>
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-azure mb-2">Quotation Form</div>
                  <h2 className="text-2xl font-extrabold tracking-tight text-navy mb-8">Tell us about your project</h2>
                  <div className="grid md:grid-cols-2 gap-5">
                    <Field label="Full Name" name="name" required />
                    <Field label="Company" name="company" />
                    <Field label="Email" name="email" type="email" required />
                    <Field label="Phone / WhatsApp" name="phone" />
                  </div>
                  <div className="mt-5">
                    <label className="block font-mono text-[10px] uppercase tracking-[0.25em] text-navy/70 mb-2">Service of interest</label>
                    <select name="service" className="w-full bg-white border border-slate-line px-4 py-3 text-navy focus:outline-none focus:border-azure transition-colors">
                      <option>Transportation & Logistics</option>
                      <option>Water Treatment / PURUS</option>
                      <option>IT & Digital Solutions</option>
                      <option>Taxation & Accounting</option>
                      <option>Industrial Equipment (AUTOMAX)</option>
                      <option>Manufacturing (WOODLANDS)</option>
                      <option>Project Development Consulting</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="mt-5">
                    <label className="block font-mono text-[10px] uppercase tracking-[0.25em] text-navy/70 mb-2">Project details</label>
                    <textarea name="message" rows={5} required className="w-full bg-white border border-slate-line px-4 py-3 text-navy focus:outline-none focus:border-azure transition-colors resize-none" placeholder="Describe scope, timeline, region..." />
                  </div>
                  <button
                    type="submit"
                    className="mt-8 w-full md:w-auto inline-flex items-center justify-center gap-3 bg-navy hover:bg-azure transition-colors text-white px-10 py-4 font-bold uppercase text-[11px] tracking-[0.2em]"
                  >
                    Submit request <ArrowUpRight size={14} />
                  </button>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block font-mono text-[10px] uppercase tracking-[0.25em] text-navy/70 mb-2">
        {label}{required && <span className="text-azure"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-white border border-slate-line px-4 py-3 text-navy focus:outline-none focus:border-azure transition-colors"
      />
    </div>
  );
}
