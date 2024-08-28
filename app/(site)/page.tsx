import { Metadata } from "next";
import Hero from "@/components/Hero";
import Feature from "@/components/Features";
import About from "@/components/About";
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
      {/* <Feature />
      <FunFact />
      <FAQ />
      <Contact /> */}
      {/* <Blog /> */}
    </main>
  );
}
