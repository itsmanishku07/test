import Image from "next/image";
import RESEARCH from "../icons/RESEARCH.png";
import REACH from "../icons/REACH.png";
import EFFICIENCY from "../icons/EFFICIENCY.png";
import ETHICS from "../icons/ETHICS.png";

export default function RoundContent() {
  const items = [
    {
      icon: RESEARCH,
      alt: "Research",
      title: "RESEARCH",
      text: "We conduct in-depth and extensive research on our clients of business and work force needs, ensuring delivery with the best talent fits, every time.",
    },
    {
      icon: REACH,
      alt: "Reach",
      title: "REACH",
      text: "We have a highly experienced core team of recruiters, added by the presence of strong networking channels - providing reach across industries.",
    },
    {
      icon: EFFICIENCY,
      alt: "Efficiency",
      title: "EFFICIENCY",
      text: "Faster turnarounds, supported by high first-touch conversions - achieved via top quality sourcing based on detailed understanding of your needs for skills and culture fits for organisations.",
    },
    {
      icon: ETHICS,
      alt: "Ethics",
      title: "ETHICS",
      text: "Highest degrees of work ethics, yielding Win-Win results.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {items.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="rounded-full border-[20px] border-gray-400 w-40 h-40 mx-auto flex items-center justify-center bg-white">
                <Image src={item.icon} alt={item.alt} width={60} height={60} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-800">{item.title}</h3>
              
              {/* Always visible on mobile, show on hover on desktop */}
              <p
                className="mt-2 text-sm text-gray-600 
                md:opacity-0 md:group-hover:opacity-100 
                md:max-h-0 md:group-hover:max-h-40 
                transition-all duration-300 overflow-hidden"
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
