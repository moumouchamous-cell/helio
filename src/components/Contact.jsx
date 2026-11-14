import { WHATSAPP_DISPLAY } from "../contact";
import { WhatsAppLink } from "./WhatsAppLink";

export function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <p className="eyebrow">Contact</p>
      <h2 id="contact-title">Hello.</h2>
      <p className="contact-lede">
        Tell us what the site needs to do. We read every message and reply on WhatsApp.
      </p>
      <WhatsAppLink className="button button-dark" label={`WhatsApp ${WHATSAPP_DISPLAY}`}>
        Message on WhatsApp
        <span>{WHATSAPP_DISPLAY}</span>
      </WhatsAppLink>
    </section>
  );
}
