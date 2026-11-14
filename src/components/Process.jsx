const steps = [
  {
    num: "01",
    title: "Message",
    copy: "Send a note on WhatsApp. A few lines about the business is enough to begin.",
  },
  {
    num: "02",
    title: "Frame",
    copy: "We name the pages, the audience, and what a visit should finish with.",
  },
  {
    num: "03",
    title: "Make",
    copy: "Design and code in the open. You see the work while it is still easy to steer.",
  },
  {
    num: "04",
    title: "Release",
    copy: "We launch, check the path on a phone, and adjust anything that feels slow.",
  },
];

export function Process() {
  return (
    <section className="section process" id="process" aria-labelledby="process-title">
      <div className="section-intro">
        <p className="eyebrow">Method</p>
        <h2 id="process-title">How a project moves</h2>
      </div>
      <div className="process-rail" aria-hidden="true"><span /></div>
      <ol className="process-grid">
        {steps.map((step) => (
          <li key={step.num}>
            <span>{step.num}</span>
            <h3>{step.title}</h3>
            <p>{step.copy}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
