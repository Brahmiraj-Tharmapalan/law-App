"use client";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import LAW from "./LAW.jpg";
import LOGO from "../public/Logo.png";
import { Cinzel, Goldman, Philosopher,Yeseva_One } from "next/font/google";

const font = Cinzel({ weight: "600", subsets: ["latin"] });
const fontTwo = Goldman({ weight: "400", subsets: ["latin"] });
const fontThree = Philosopher({ weight: "400", subsets: ["latin"] });
const fontFour = Yeseva_One({ weight: "400", subsets: ["latin"] });

export default function Hero() {
  return (
    <section className="w-full h-screen relative">
      <div className="flex items-start justify-start">
        <Image alt="" src={LOGO} className="w-36  h-36" />
      </div>
      <Image
        src={LAW}
        fill
        alt=""
        className="absolute w-full -z-10 object-cover opacity-20"
      />

      <div className="w-full mx-auto px-4 sm:px-6 relative">
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16  w-full">
          <div className=" mx-auto text-center">
            <div>
              <div
                className={`text-6xl max-md:text-4xl text-orange-300 ${fontFour.className} `}
              >
                <Typewriter
                  options={{
                    strings: ["Traffic Tickets"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <h3
                className={`text-5xl  max-md:text-4xl mb-2 text-green-400 ${fontTwo.className}`}
                data-aos="fade-up"
              >
                +1 (437) 345-8590
              </h3>
            </div>
            <p
              className={`md:text-4xl text-2xl font-mono text-white mb-8 text-center w-full ${fontThree.className}`}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              With a legacy of 25 years in Toronto, we are your trusted
              advocates in traffic law matters. As registered traffic ticket
              agents, we specialize in defending individuals charged with
              various offenses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
