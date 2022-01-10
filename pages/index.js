import { Compare } from "../components/Compare";
import { Cards } from "../components/Cards";
import { Deals } from "../components/Deals";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Panels } from "../components/Panels";
import { Calculator } from "../components/Calculator";

export default function Home() {
  return (
    <div className="">
      <div className="bg-gray-800">
        <Navbar />
        <div itemID="plan">
          <Panels />
        </div>
      </div>
      <section id="deals">
        <Deals />
      </section>
      <section id="cards">
        <Cards />
      </section>
      <section id="compare">
        <Compare />
      </section>
      <section id="footer">
        <Footer />
      </section>
      <Calculator />
    </div>
  );
}
