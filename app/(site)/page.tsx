import { Metadata } from "next";
import Hero from "@/components/Hero";
import Feature from "@/components/Team";
import About from "@/components/About";
import Events from "@/components/Events";
import FunFact from "@/components/FunFact";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Dear Azure",
  description: "This is Dear Azure Website",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Events />
      <Feature />
      {/* <FunFact /> */}
      {/* <FAQ /> */}
      {/* <Contact /> */}
      {/* <Blog /> */}
    </main>
  );
}
