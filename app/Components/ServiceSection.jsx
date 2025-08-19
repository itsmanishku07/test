import React from 'react';
import Image from 'next/image';
import img from "../icons/EFFICIENCY.png";

const ServiceItem = ({ icon, title, rotation }) => {
  const style = {
    transform: `rotate(${rotation}deg) translate(var(--radius)) rotate(-${rotation}deg)`,
  };

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group"
      style={style}
    >
      <div className="flex flex-col items-center justify-center text-center transition-transform duration-300 ease-in-out group-hover:scale-110">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-gray-400 bg-white flex items-center justify-center shadow-md">
          <Image src={icon} alt={title} className="w-8 h-8 md:w-10 md:h-10 object-contain" />
        </div>
        <p className="mt-2 text-[11px] md:text-xs text-black font-semibold">{title}</p>
      </div>
    </div>
  );
};

export default function ServiceSection() {
  // ✅ Fixed rotations → evenly spaced at 45°
  const services = [
    { icon: img, title: 'BPO & Customer support Services', rotation: 0 },
    { icon: img, title: 'Inbound & Outbound Call Center Services', rotation: 45 },
    { icon: img, title: 'Telemarketing Services', rotation: 90 },
    { icon: img, title: 'Customer Point Verification (CPV)', rotation: 135 },
    { icon: img, title: 'Telecalling & Field Collection', rotation: 180 },
    { icon: img, title: 'Temporary Staffing', rotation: 225 },
    { icon: img, title: 'Volume Hiring', rotation: 270 },
    { icon: img, title: 'Lateral Hiring', rotation: 315 },
  ];

  return (
    <section className="bg-white min-h-screen flex items-center justify-center p-4 sm:p-6" id="services">
      <div className="w-full max-w-7xl mx-auto">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center text-black">
          
          {/* Circle with services */}
          <div className="flex items-center justify-center min-h-[300px] sm:min-h-[400px] md:min-h-[450px]">
            <div
              className="relative 
                         w-[14rem] h-[14rem] [--radius:7rem] 
                         sm:w-[18rem] sm:h-[18rem] sm:[--radius:9rem] 
                         md:w-[22rem] md:h-[22rem] md:[--radius:11rem]"
            >
              {/* Inner circle background */}
              <div className="absolute inset-0 rounded-full bg-white/50 shadow-inner"></div>

              {/* Center text */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <h3 className="text-base md:text-lg font-extrabold text-gray-800">OUR CIRCLE</h3>
                <h3 className="text-base md:text-lg font-extrabold text-gray-800">OF SERVICES</h3>
              </div>

              {/* Service items around the circle */}
              {services.map((service, index) => (
                <ServiceItem key={index} {...service} />
              ))}
            </div>
          </div>

          {/* Right-side description */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">SERVICES</h2>
            <div className="w-20 h-1 bg-orange-500 mt-3 mb-6 mx-auto lg:mx-0"></div>
            <p className="text-gray-700 mb-4 text-sm md:text-base max-w-xl mx-auto lg:mx-0">
              We understand that time is of utmost essence, hence we provide absolute and quality service.
            </p>
            <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto lg:mx-0">
              Pragati Technology bridges the gap in filling the constant talent needs to meet the workforce needs of organizations through their entire life-cycles and across their hierarchy spectrum - ensuring that every position is provided for, with the right fit for skill and will. We identify the best talents to work for you in highly professional and organized establishments pan India through our services that include:
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
