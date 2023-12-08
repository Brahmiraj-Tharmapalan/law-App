export const metadata = {
  title: "Sudharsan Traffic Law ",
};

import Hero from "@/components/hero";
import Intro from "@/components/intro";
import Footer from "@/components/footer/footer";
import About from "@/components/about";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <About/>
      <Footer />
    </>
  );
}
   
