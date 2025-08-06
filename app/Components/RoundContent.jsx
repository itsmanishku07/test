import Image from "next/image";
import RESEARCH from "../icons/RESEARCH.png"
import REACH from "../icons/REACH.png"
import EFFICIENCY from "../icons/EFFICIENCY.png"
import ETHICS from "../icons/ETHICS.png"
export default function RoundContent() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          <div>
            <div className="rounded-full border-[20px] border-gray-400 w-40 h-40 mx-auto flex items-center justify-center bg-white r1">
              <Image src={RESEARCH} alt="Research" width={60} height={60} />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-800">RESEARCH</h3>
            <p className="p1">We conduct in-depth and extensive research on our clients of business and work force needs, ensuring delivery with the best talent fits, every time.</p>
          </div>

          <div>
            <div className="rounded-full border-[20px] border-gray-400 w-40 h-40 mx-auto flex items-center justify-center bg-white r2">
              <Image src={REACH} alt="Reach" width={60} height={60} />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-800">REACH</h3>
            <p className="p2">We have a highly experienced core team of recruiters, added by the presence of strong networking channels - providing reach across industries.</p>
          </div>

          <div>
            <div className="rounded-full border-[20px] border-gray-400 w-40 h-40 mx-auto flex items-center justify-center bg-white r3">
              <Image src={EFFICIENCY} alt="Efficiency" width={60} height={60} />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-800">EFFICIENCY</h3>
            <p className="p3">Faster turnarounds, supported by high first-touch conversions - achieved via top quality sourcing based on detailed understanding of your needs for skills and culture fits for organisations.</p>
          </div>

          <div>
            <div className="rounded-full border-[20px] border-gray-400 w-40 h-40 mx-auto flex items-center justify-center bg-white r4">
              <Image src={ETHICS} alt="Ethics" width={60} height={60} />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-800">ETHICS</h3>
            <p className="p4">Highest degrees of work ethics, yielding Win-Win results.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
