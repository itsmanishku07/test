"use client";

import Image from "next/image";
import bg from "./Images/mainpage.jpg";
import { motion } from "framer-motion";
import About from "./Components/About";
import RoundContent from "./Components/RoundContent";
import SliderSection from "./Components/SliderSection";
import ServiceSection from "./Components/ServiceSection";
import ImageSlider from "./Components/SliderImage";
import SliderContent from "./Components/SectionContent";

export default function Page() {
    return (
        <div className="bg-white">
            <section className="relative w-full h-[670px]">
                <Image
                    src={bg}
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    priority
                    quality={100}
                    className="z-0"
                />
                <div className="absolute inset-0 bg-black/40 z-10"></div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="absolute z-20 top-1/2 left-1/3 md:left-1/4 transform -translate-x-1/2 md:-translate-x-0 -translate-y-1/2 text-center md:text-left px-4"
                >
                    <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
                        CRAFTING <br /> YOUR <br /> WORKFORCE
                    </h1>
                </motion.div>
            </section>
            <br />
            <br />
            <section className="w-full bg-white py-12 px-6 md:px-20 " id="about">
                <div className="flex flex-col md:flex-row items-center gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2"
                    >
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-blue-500 underline underline-offset-10 decoration-amber-500">
                            About Us
                        </h1>

                        <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justify">
                            With talent acquisition as our forte, we at Avsar provide you with end-to-end
                            solutions for all your recruitment needs. A next-generation recruitment service
                            provider, we pride in our customer-centric approach, offering our clients unmatched
                            quality, responsiveness and flexibility. Over the few years of inception, we have
                            been thoroughly appreciated by clients for our streamlined execution, highly
                            efficient service and exceptional talent management that go above and beyond
                            traditional staffing services. With a singular vision to help build a new
                            socio-economic environment, by bridging the gap between the new generation of
                            employable individuals and available opportunities – we work towards bringing in
                            as many into the bracket of India’s employed population.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2 flex justify-center"
                    >
                        <Image
                            src={bg}
                            alt="About Us"
                            className="rounded-xl  object-cover max-h-[400px] w-full"
                        />
                    </motion.div>
                </div>
            </section>

            <RoundContent/>
            <ServiceSection/>
            <SliderContent/>
            <ImageSlider/>
        </div>
    );
}
