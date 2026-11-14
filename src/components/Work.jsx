import { Reveal } from "./Reveal";

const studies = [
  {
    num: "01",
    title: "The long read",
    copy: "A homepage with the pacing of a magazine. Large type, a slow reveal, and one next step that is impossible to miss.",
    tags: ["Editorial", "Brand", "Scroll"],
    tone: "editorial",
  },
  {
    num: "02",
    title: "The product film",
    copy: "One product. One scroll. Features arrive as the page moves, until the only thing left in the room is the decision.",
    tags: ["Launch", "Motion", "Product"],
    tone: "film",
  },
  {
    num: "03",
    title: "The quiet store",
    copy: "Commerce with the pace of a gallery. Fewer products in view, more reason to want the one in front of you.",
    tags: ["Shop", "Type", "Detail"],
    tone: "store",
  },
];

function Frame({ tone }) {
  if (tone === "film") {
    return (
      <div className="frame tone-film" aria-hidden="true">
        <div className="frame-top"><i /><i /><i /></div>
        <div className="frame-body film-body">
          <p>Lumen</p>
          <div className="orb" />
          <span>One object. Held in light.</span>
        </div>
      </div>
    );
  }

  if (tone === "store") {
    return (
      <div className="frame tone-store" aria-hidden="true">
        <div className="frame-top"><i /><i /><i /></div>
        <div className="frame-body">
          <p className="mock-kicker">Spring edit</p>
          <div className="tiles">
            <div><b /><em>01</em></div>
            <div><b /><em>02</em></div>
            <div><b /><em>03</em></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="frame tone-editorial" aria-hidden="true">
      <div className="frame-top"><i /><i /><i /></div>
      <div className="frame-body">
        <p className="mock-kicker">Issue 04 — Field notes</p>
        <strong>Atlas</strong>
        <div className="bars">
          <span /><span /><span /><span />
        </div>
      </div>
    </div>
  );
}

export function Work() {
  return (
    <section className="section work" id="work" aria-labelledby="work-title">
      <div className="section-intro">
        <p className="eyebrow">Selected shapes</p>
        <h2 id="work-title">Three shapes we return to.</h2>
        <p className="section-lede">
          These are the kinds of sites Helio makes. Each one is built to carry a visitor from the first line to a conversation.
        </p>
      </div>
      <div className="study-stack">
        {studies.map((study) => (
          <article className={`study tone-${study.tone}`} key={study.num}>
            <Reveal>
              <p className="study-num">{study.num}</p>
              <h3>{study.title}</h3>
              <p>{study.copy}</p>
              <ul>
                {study.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </Reveal>
            <Frame tone={study.tone} />
          </article>
        ))}
      </div>
    </section>
  );
}
