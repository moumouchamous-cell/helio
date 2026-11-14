const items = [
  "Brand sites",
  "Product launches",
  "Commerce",
  "Campaign pages",
  "Redesigns",
  "Design systems",
];

export function Reel() {
  const group = items.map((item) => (
    <span key={item}>
      {item}
      <i aria-hidden="true" />
    </span>
  ));

  return (
    <div className="reel" aria-hidden="true">
      <div className="reel-track">
        <div className="reel-group">{group}</div>
        <div className="reel-group">{items.map((item) => (
          <span key={`copy-${item}`}>
            {item}
            <i />
          </span>
        ))}</div>
      </div>
    </div>
  );
}
