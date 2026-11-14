import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "../hooks";

const TEXT =
  "A website should feel like a person walking you through a room. Light on the thing that matters. A pause before the next step. Nothing shouting from the corners. That is a Helio site.";

const words = TEXT.split(" ");

export function Manifesto() {
  const ref = useRef(null);
  const reducedMotion = usePrefersReducedMotion();
  const [lit, setLit] = useState(() => (reducedMotion ? words.length : 0));
  const [scrubbing, setScrubbing] = useState(() => !reducedMotion);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (reducedMotion) {
      setLit(words.length);
      setScrubbing(false);
      return undefined;
    }

    setScrubbing(true);
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      const start = window.innerHeight * 0.85;
      const range = Math.max(rect.height, window.innerHeight * 0.45);
      const progress = Math.min(1, Math.max(0, (start - rect.top) / range));
      setLit(Math.round(progress * words.length));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reducedMotion]);

  return (
    <section className="manifesto-wrap" aria-label="Studio belief">
      <p ref={ref} className={scrubbing ? "manifesto is-scrubbing" : "manifesto"}>
        {words.map((word, index) => (
          <span key={`${word}-${index}`} className={index < lit ? "on" : undefined}>
            {word}{" "}
          </span>
        ))}
      </p>
    </section>
  );
}
