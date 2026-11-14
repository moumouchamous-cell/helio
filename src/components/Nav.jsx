import { useEffect, useState } from "react";
import { WHATSAPP_DISPLAY } from "../contact";
import { useScrolled } from "../hooks";
import { WhatsAppLink } from "./WhatsAppLink";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={scrolled ? "nav scrolled" : "nav"} id="top">
      <a className="logo" href="#top" onClick={close}>
        <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden="true">
          <circle cx="16" cy="16" r="6" fill="#f0a202" />
          <circle cx="16" cy="16" r="11" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        Helio
      </a>

      <button
        type="button"
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="site-menu"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <span aria-hidden="true">{open ? "Close" : "Menu"}</span>
      </button>

      <nav id="site-menu" className={open ? "nav-links open" : "nav-links"} aria-label="Primary">
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={close}>
            {link.label}
          </a>
        ))}
        <WhatsAppLink className="link-wa" label={`WhatsApp ${WHATSAPP_DISPLAY}`}>
          WhatsApp
        </WhatsAppLink>
      </nav>
    </header>
  );
}
