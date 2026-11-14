import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Manifesto } from "./components/Manifesto";
import { Nav } from "./components/Nav";
import { Process } from "./components/Process";
import { Progress } from "./components/Progress";
import { Reel } from "./components/Reel";
import { Services } from "./components/Services";
import { SiteFooter } from "./components/SiteFooter";
import { WhatsAppFloat } from "./components/WhatsAppLink";
import { Work } from "./components/Work";

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Progress />
      <Nav />
      <WhatsAppFloat />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Reel />
        <Work />
        <Services />
        <Process />
        <Manifesto />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
