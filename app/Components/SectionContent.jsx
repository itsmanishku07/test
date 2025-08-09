"use client";
import { Lightbulb, Users, Target, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const sections = [
  {
    title: "EXPERTISE",
    text: "We are a team consisting of the sharpest professionals with rich industry experience. We have the experience to understand what kind of people you need for different roles. Be it a leader, a manager, an efficient employee or a support personnel, we have the expertise to meticulously screen and select the best.",
    icon: <Lightbulb className="w-10 h-10" />,
    iconColor: "text-orange-500",
    bgImage:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
  },
  {
    title: "TEAMWORK",
    text: "Our collaborative approach ensures that every project benefits from diverse perspectives, leading to more innovative solutions and effective execution.",
    icon: <Users className="w-10 h-10" />,
    iconColor: "text-blue-500",
    bgImage:
      "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg",
  },
  {
    title: "FOCUS",
    text: "We identify and work towards clear, measurable objectives to ensure all our efforts are aligned and results-driven.",
    icon: <Target className="w-10 h-10" />,
    iconColor: "text-green-500",
    bgImage:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
  },
  {
    title: "PROFESSIONALISM",
    text: "Our clients trust us because we consistently maintain high standards of conduct, communication, and delivery in all our engagements.",
    icon: <Briefcase className="w-10 h-10" />,
    iconColor: "text-purple-500",
    bgImage:
      "https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg",
  },
];

export default function SliderContent() {
  return (
    <div className="w-full flex flex-col divide-y">
      {sections.map((section, index) => (
        <motion.div
          key={index}
          className="flex flex-col md:flex-row items-center justify-between bg-white overflow-hidden group"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <div className="flex-shrink-0 flex items-center justify-center w-full md:w-1/6 py-8">
            <div
              className={`bg-gray-200 rounded-full p-5 shadow-lg transition-transform duration-300 group-hover:scale-110 ${section.iconColor}`}
            >
              {section.icon}
            </div>
          </div>

          <div className="w-full md:w-3/6 px-8 py-6">
            <h2 className="text-xl font-bold text-orange-600 mb-2">
              {section.title}
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              {section.text}
            </p>
          </div>

          <div className="relative hidden md:block w-2/6 h-[220px] overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transform transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${section.bgImage})` }}
            ></div>
            <div className="absolute inset-0 bg-blue-400 opacity-60 clip-angle"></div>
          </div>
        </motion.div>
      ))}

      <style jsx>{`
        .clip-angle {
          clip-path: polygon(85% 0, 100% 0, 100% 100%, 70% 100%);
        }
      `}</style>
    </div>
  );
}
