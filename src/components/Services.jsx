const services = [
  {
    num: "01",
    title: "Positioning",
    copy: "We decide what the page is for before we decorate it. Audience, offer, and the order a visit should follow.",
  },
  {
    num: "02",
    title: "Interface",
    copy: "Type, grid, color, and motion, composed so the page feels inevitable rather than assembled.",
  },
  {
    num: "03",
    title: "Build",
    copy: "Semantic, fast front-end code. The design you approved is the design that ships.",
  },
  {
    num: "04",
    title: "Care",
    copy: "After launch we watch what people actually do, then tighten the parts they touch.",
  },
];

export function Services() {
  return (
    <section className="section services" id="services" aria-labelledby="services-title">
      <div className="services-sticky">
        <p className="eyebrow">Offer</p>
        <h2 id="services-title">What we make</h2>
        <p className="section-lede">
          A Helio project is a site with a job: to hold attention long enough for someone to reach out.
        </p>
      </div>
      <ol className="service-list">
        {services.map((service) => (
          <li key={service.num}>
            <span>{service.num}</span>
            <div>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
