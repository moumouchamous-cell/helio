import { useEffect, useRef } from "react";
import { WHATSAPP_DISPLAY } from "../contact";
import { usePrefersReducedMotion } from "../hooks";
import { Reveal } from "./Reveal";
import { WhatsAppLink } from "./WhatsAppLink";

export function Hero() {
  const sun = useRef(null);
  const hero = useRef(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const node = sun.current;
    const shell = hero.current;
    if (!node || !shell) return undefined;

    if (reducedMotion) {
      node.style.transform = "";
      shell.style.removeProperty("--mx");
      shell.style.removeProperty("--my");
      return undefined;
    }

    let frame = 0;
    let pointerFrame = 0;
    let rect = null;
    let pointerX = 0;
    let pointerY = 0;

    const update = () => {
      frame = 0;
      const y = Math.min(window.scrollY, 800);
      node.style.transform = `translate3d(0, ${y * 0.35}px, 0)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    const refreshRect = () => {
      rect = shell.getBoundingClientRect();
    };

    const applyPointer = () => {
      pointerFrame = 0;
      shell.style.setProperty("--mx", `${pointerX}px`);
      shell.style.setProperty("--my", `${pointerY}px`);
    };

    const onPointer = (event) => {
      if (!rect) refreshRect();
      pointerX = event.clientX - rect.left;
      pointerY = event.clientY - rect.top;
      if (!pointerFrame) pointerFrame = requestAnimationFrame(applyPointer);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", refreshRect);
    shell.addEventListener("pointerenter", refreshRect);
    shell.addEventListener("pointermove", onPointer);
    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(pointerFrame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", refreshRect);
      shell.removeEventListener("pointerenter", refreshRect);
      shell.removeEventListener("pointermove", onPointer);
    };
  }, [reducedMotion]);

  return (
    <section className="hero" ref={hero} aria-labelledby="hero-title">
      <div className="sun" ref={sun} aria-hidden="true">
        <div className="sun-core" />
        <div className="sun-ring" />
      </div>

      <div className="hero-copy">
        <p className="eyebrow">Website agency</p>
        <h1 id="hero-title">
          <span>Sites people</span>
          <span className="serif">stay inside.</span>
        </h1>
        <Reveal>
          <p className="lede">
            Helio designs and builds marketing sites with pacing, type, and motion.
            The kind of page a visitor finishes — then writes you about.
          </p>
        </Reveal>
        <div className="hero-actions">
          <WhatsAppLink className="button button-solid" label={`WhatsApp ${WHATSAPP_DISPLAY}`}>
            WhatsApp {WHATSAPP_DISPLAY}
          </WhatsAppLink>
          <a className="button button-ghost" href="#work">
            See the work
          </a>
        </div>
      </div>

      <div className="hero-foot">
        <dl className="facts">
          <div>
            <dt>Focus</dt>
            <dd>Marketing sites with a pulse</dd>
          </div>
          <div>
            <dt>Craft</dt>
            <dd>Design and the code behind it</dd>
          </div>
          <div>
            <dt>Start</dt>
            <dd>A WhatsApp message is enough</dd>
          </div>
        </dl>
        <div className="scroll-cue" aria-hidden="true">
          <span>Scroll</span>
          <i />
        </div>
      </div>
    </section>
  );
}
