import { Yeseva_One, Philosopher } from "next/font/google";

const font = Yeseva_One({ weight: "400", subsets: ["latin"] });
const fontThree = Philosopher({ weight: "400", subsets: ["latin"] });

export default function Intro() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className={`h2 mb-4 text-slate-400 text-3xl ${font.className}`}>
              Defending Your Rights in Traffic Offenses
            </h2>
          </div>

          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            <div
              className="relative flex flex-col items-center bg-gray-950 p-4 rounded-lg h-full"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <h4
                className={`text-lg font-mono mb-2 text-center text-slate-400  p-2 rounded-tl-2xl rounded-br-2xl ${font.className}`}
              >
                Suspended License Driving
              </h4>
              <div className="flex items-center justify-center h-full">
                <p className={`text-md text-slate-100 text-center ${fontThree.className}`}>
                  With 25 years of experience, our dedicated team aggressively
                  defends your rights, navigating complex cases to safeguard
                  your driving privileges
                </p>
              </div>
            </div>

            <div
              className="relative flex flex-col items-center  bg-gray-950  p-4 rounded-lg h-full"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <h4
                className={`text-lg font-mono mb-2 text-center text-slate-400  p-2 rounded-tl-2xl rounded-br-2xl ${font.className}`}
              >
                Stop Sign Violations
              </h4>
              <div className="flex items-center justify-center h-full">
                <p className={`text-md text-slate-100 text-center ${fontThree.className}`}>
                  We have a proven track record of successfully defending
                  clients against these accusations. Trust us to navigate the
                  legal intricacies and protect your record.
                </p>
              </div>
            </div>

            <div
              className="relative flex flex-col items-center  bg-gray-950  p-4 rounded-lg h-full"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <h4
                className={`text-lg font-mono mb-2 text-center text-slate-400  p-2 rounded-tl-2xl rounded-br-2xl ${font.className}`}
              >
                Speeding Tickets
              </h4>
              <div className="flex items-center justify-center h-full">
                <p className={`text-md text-slate-100 text-center ${fontThree.className}`}>
                  Our expert paralegals specialize in challenging radar accuracy
                  and procedural errors. We strive for reduced fines and
                  minimized impact on your insurance premiums.
                </p>
              </div>
            </div>

            <div
              className="relative flex flex-col items-center bg-gray-950 p-4 rounded-lg h-full"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <h4
                className={`text-lg font-mono mb-2 text-center text-slate-400  p-2 rounded-tl-2xl rounded-br-2xl ${font.className}`}
              >
                Seatbelt Violations
              </h4>
              <div className="flex items-center justify-center h-full">
                <p className={`text-md text-slate-100 text-center ${fontThree.className}`}>
                  Even seemingly minor Seatbelt violations can lead to fines and
                  points on your licence. We ensure a strong defense to protect
                  your driving record.
                </p>
              </div>
            </div>

            <div
              className="relative flex flex-col items-center bg-gray-950 p-4 rounded-lg h-full"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <h3
                className={`text-lg font-mono mb-2 text-center text-slate-400  p-2 rounded-tl-2xl rounded-br-2xl ${font.className}`}
              >
                Red Light Violations
              </h3>
              <div className="flex items-center justify-center h-full">
                <p className={`text-md text-slate-100 text-center ${fontThree.className}`}>
                  Don't let red light violations tarnish your record. Our team
                  analyzes the evidence meticulously and explores legal
                  loopholes to provide a strong defense.
                </p>
              </div>
            </div>

            <div
              className="relative flex flex-col items-center  bg-gray-950  p-4 rounded-lg h-full"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <h3
                className={`text-lg font-mono mb-2 text-center text-slate-400  p-2 rounded-tl-2xl rounded-br-2xl ${font.className}`}
              >
                Stunt Driving Offenses
              </h3>
              <div className="flex items-center justify-center h-full">
                <p className={`text-md text-slate-100 text-center ${fontThree.className}`}>
                  Stunt driving accusations require a robust defense strategy.
                  We are helping clients avoid severe penalties and license
                  suspensions. Your freedom to drive is our priority
                </p>
              </div>
            </div>
            {/* 
            <div className="relative flex flex-col items-center shadow-xl shadow-white/20 p-4 rounded-lg h-full" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">          
              <h4 className="h4 mb-2 text-teal-300">Impaired Driving</h4>
              <div className="flex items-center justify-center h-full">
              <p className="text-lg text-cyan-300 text-center">
                Facing charges for impaired driving? Our experienced traffic ticket agents, 
                backed by skilled criminal defense lawyers, provide unwavering support. 
                We challenge sobriety tests and evidence to protect your rights and reputation
              </p>
            </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
