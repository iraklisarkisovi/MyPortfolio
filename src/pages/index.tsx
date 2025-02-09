import Image from "next/image";
import { Geist, Geist_Mono, Fredoka } from "next/font/google";
import Link from "next/link";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const fredoka = Fredoka({
  variable: "--font-fredoka", 
  subsets: ["latin"],  
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <div className="max-md:mb-14">
        <Header/>
      </div>
      <Welcome/>
    </>
  );
}
