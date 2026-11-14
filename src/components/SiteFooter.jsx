import { WHATSAPP_DISPLAY } from "../contact";
import { WhatsAppLink } from "./WhatsAppLink";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <a className="logo" href="#top">Helio</a>
      <p>Website agency. Sites people stay inside.</p>
      <WhatsAppLink label={`WhatsApp ${WHATSAPP_DISPLAY}`}>
        WhatsApp {WHATSAPP_DISPLAY}
      </WhatsAppLink>
      <small>© {year} Helio</small>
    </footer>
  );
}
