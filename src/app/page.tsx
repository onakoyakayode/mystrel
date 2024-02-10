import Efficiency from "@/components/Efficiency";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import WhatWeDo from "@/components/WhatWeDo";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatWeDo />
      <Efficiency />
      <Reviews />
    </main>
  );
}
