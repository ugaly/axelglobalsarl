import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

const LOGO = "https://ceo.axeglobalsarlu.com/log.png";

export function Footer() {
  return (
    <footer className="bg-navy-2 text-white pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-4">
            <div className="mb-6">
              <img src={LOGO} alt="AXE GLOBAL" className="h-16 w-auto brightness-0 invert" />
            </div>
            <p className="text-white/55 text-sm leading-relaxed max-w-sm mb-8">
              Creating opportunities, developing communities, and contributing to Africa's economic
              transformation through high-impact projects and sustainable strategic partnerships.
            </p>
            <div className="font-mono text-[10px] text-azure tracking-[0.25em] uppercase">
              ID NAT: 14-G7401-N87444F
            </div>
          </div>

          <div className="lg:col-span-2">
            <h5 className="font-mono text-[10px] uppercase tracking-[0.25em] text-azure mb-6">Explore</h5>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/partners" className="hover:text-white transition-colors">Partners</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h5 className="font-mono text-[10px] uppercase tracking-[0.25em] text-azure mb-6">Partners</h5>
            <ul className="space-y-3 text-sm text-white/60">
              <li>BE Forward</li>
              <li>AUTOMAX</li>
              <li>WOODLANDS</li>
              <li>Clockwise</li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h5 className="font-mono text-[10px] uppercase tracking-[0.25em] text-azure mb-6">Headquarters</h5>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-azure mt-0.5 shrink-0" />
                <span>16, Ngungu, Manika Commune, Q/QG<br />Democratic Republic of the Congo</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-azure shrink-0" />
                <a href="mailto:axeglobalsarlu@gmail.com" className="hover:text-white transition-colors">axeglobalsarlu@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-azure shrink-0" />
                <a href="tel:+243839094758" className="hover:text-white transition-colors">+243 839 094 758</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">© 2025 AXE GLOBAL SARLU. All rights reserved.</p>
          <p className="text-white/40 text-xs font-mono tracking-widest uppercase">
            Innovation Through Difference · Excellence Through Action
          </p>
        </div>
      </div>
    </footer>
  );
}
