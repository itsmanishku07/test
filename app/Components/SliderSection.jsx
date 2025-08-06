import Image from "next/image";
import "../css/SliderSection.css"
import INNOVATE from "../icons/REACH.png";
import SCALE from "../icons/REACH.png";
import IMPACT from "../icons/REACH.png";
import TRUST from "../icons/REACH.png";

export default function SliderSection() {
  const cards = [
    {
      title: "INNOVATE",
      desc: "We bring fresh ideas and creative solutions to every project.",
      icon: INNOVATE,
    },
    {
      title: "SCALE",
      desc: "Helping businesses grow fast and sustainably with smart strategies.",
      icon: SCALE,
    },
    {
      title: "IMPACT",
      desc: "Every decision is made to drive meaningful results for your goals.",
      icon: IMPACT,
    },
    {
      title: "TRUST",
      desc: "Transparency and ethics form the foundation of our partnerships.",
      icon: TRUST,
    },
  ];

  return (
    <section className="slider-section">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-10 text-indigo-700">Our Pillars</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="slider-card group">
              <div className="icon-wrapper">
                <Image src={card.icon} alt={card.title} width={60} height={60} />
              </div>
              <h3 className="title">{card.title}</h3>
              <p className="desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
