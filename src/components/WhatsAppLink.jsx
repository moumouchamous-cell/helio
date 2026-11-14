import { WHATSAPP_DISPLAY, WHATSAPP_URL } from "../contact";

export function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.04 3.5A8.2 8.2 0 0 0 4.6 15.9L3.5 20.2l4.4-1.05A8.2 8.2 0 1 0 12.04 3.5Zm4.72 11.55c-.2.56-1.16 1.07-1.62 1.14-.42.06-.95.09-1.53-.1-.35-.11-.8-.26-1.38-.51-2.43-1.05-4.01-3.5-4.13-3.66-.12-.17-1-1.33-1-2.54s.63-1.8.86-2.05c.22-.24.48-.3.64-.3h.46c.15 0 .35-.05.54.41.2.48.68 1.66.74 1.78.06.12.1.26.02.42-.08.17-.12.26-.24.4-.12.14-.25.32-.36.43-.12.12-.24.24-.1.47.14.23.62 1.02 1.33 1.65.92.82 1.69 1.07 1.93 1.19.24.12.38.1.52-.06.14-.17.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.58-.14 1.14Z"
      />
    </svg>
  );
}

export function WhatsAppLink({ className, children, label }) {
  return (
    <a
      className={className}
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {children}
    </a>
  );
}

export function WhatsAppFloat() {
  return (
    <WhatsAppLink
      className="wa-float"
      label={`WhatsApp ${WHATSAPP_DISPLAY}`}
    >
      <ChatIcon />
    </WhatsAppLink>
  );
}
