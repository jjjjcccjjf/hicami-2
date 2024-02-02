import Image from "next/image";

import { Barlow_Condensed, Gloria_Hallelujah, Itim } from "next/font/google";
import Nav from "@/components/Nav";

const barlow = Barlow_Condensed({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--barlow-font",
});

const gloria = Gloria_Hallelujah({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--gloria-font",
});

const itim = Itim({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--itim-font",
});

export default function Home() {
  return (
    <main
      className={`${barlow.variable} ${gloria.variable} ${itim.variable} overflow-hidden`}
    >

      <Nav/>
    </main>
  );
}
