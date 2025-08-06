import React from 'react';
import img from "../icons/EFFICIENCY.png";
import Image from 'next/image';

const ServiceItem = ({ icon, title, rotation }) => {
  const style = {
    transform: `rotate(${rotation}deg) translate(9rem) rotate(-${rotation}deg)`,
  };

  return (
    <div
      className="absolute top-1/2 left-1/2 w-20 h-20 sm:w-20 sm:h-20 -translate-x-1/2 -translate-y-1/2"
      style={style}
    >
      <div className="flex flex-col items-center justify-center text-center">
        <div className="w-20 h-20 sm:w-20 sm:h-20 rounded-full border-2 border-gray-400 bg-white flex items-center justify-center">
          <Image src={icon} alt={title} className="w-6 h-6 sm:w-13 sm:h-13 object-contain" />
        </div>
        <p className="mt-2 text-[10px] sm:text-xs text-black font-semibold text-center">{title}</p>
      </div>
    </div>
  );
};

// Main Services Section
export default function ServiceSection() {
  const services = [
    { icon: img, title: 'Warehouse Management', rotation: 0 },
    { icon: img, title: 'CXO and Executive Search', rotation: 60 },
    { icon: img, title: 'Compliance Management', rotation: 120 },
    { icon: img, title: 'Temporary Staffing', rotation: 180 },
    { icon: img, title: 'Volume Hiring', rotation: 240 },
    { icon: img, title: 'Lateral Hiring', rotation: 300 },
  ];

  return (
    <section className="bg-white min-h-screen flex items-center justify-center p-4">
      <div
        className="relative w-full max-w-7xl bg-cover bg-center rounded-xl overflow-hidden"
        style={{
          backgroundImage: "url('https://placehold.co/1200x600/2a2a2a/2a2a2a?text=.')",
        }}
      >
        <div className="absolute inset-0 bg-gray-100"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-6 sm:p-10 md:p-16 text-black">
          <div className="flex items-center justify-center h-[22rem] sm:h-[26rem] md:h-[30rem]">
            <div className="relative w-[18rem] h-[18rem] sm:w-[22rem] sm:h-[22rem] md:w-[24rem] md:h-[24rem]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-black font-extrabold">OUR CIRCLE</h3>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-black font-extrabold">OF SERVICES</h3>
              </div>

              {services.map((service, index) => (
                <ServiceItem key={index} {...service} />
              ))}
            </div>
          </div>

          <div className="text-white text-left max-w-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">SERVICES</h2>
            <div className="w-16 sm:w-20 h-1 bg-orange-500 mt-2 mb-6"></div>
            <p className="text-black mb-4 text-sm sm:text-base">
              We understand that time is of utmost essence, hence we provide absolute and quality service.
            </p>
            <p className="text-black text-sm sm:text-base">
              Pragati Technology bridges the gap in filling the constant talent needs to meet the workforce needs of organizations
              through their entire life-cycles and across their hierarchy spectrum - ensuring that every position is
              provided for, with the right fit for skill and will. We identify the best talents to work for you in highly
              professional and organized establishments pan India through our services that include:
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
