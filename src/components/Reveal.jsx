import { useRef } from "react";
import { useInView } from "../hooks";

export function Reveal({ as: Tag = "div", className = "", children }) {
  const ref = useRef(null);
  const shown = useInView(ref);
  const classes = ["reveal", shown ? "in-view" : "", className].filter(Boolean).join(" ");

  return (
    <Tag ref={ref} className={classes}>
      {children}
    </Tag>
  );
}
