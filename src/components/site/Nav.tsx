import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LOGO = "https://ceo.axeglobalsarlu.com/log.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/partners", label: "Partners" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-navy/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={LOGO} alt="AXE GLOBAL" className="h-10 w-auto" />
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-extrabold tracking-tight text-navy text-sm">AXE GLOBAL</span>
            <span className="font-mono text-[9px] tracking-[0.25em] text-muted-foreground uppercase mt-1">SARLU</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-9 font-mono text-[11px] uppercase tracking-[0.18em]">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-navy/70 hover:text-azure transition-colors"
              activeProps={{ className: "text-azure" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center bg-navy text-white px-5 py-3 text-[11px] font-bold tracking-[0.18em] uppercase hover:bg-azure transition-colors"
          >
            Request Quote
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 text-navy"
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-white border-t border-navy/5 px-6 py-6 flex flex-col gap-4 font-mono text-xs uppercase tracking-[0.2em]"
        >
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="text-navy/70 hover:text-azure"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="bg-navy text-white px-5 py-3 text-center font-bold mt-2"
          >
            Request Quote
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
