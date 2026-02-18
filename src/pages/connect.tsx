import React, { useEffect, useRef } from 'react'
import Header from './components/Header'
import { fredoka } from '.';
import { useSelector } from 'react-redux';
import { RootState } from './api/MainStore';
import gsap from 'gsap';
import { useRouter } from 'next/router';

const connect = () => {
  const selector = useSelector((state: RootState) => state.MStore.theme)
  const divref = useRef<HTMLDivElement>(null);
  const router = useRouter()

  useEffect(() => {
    (async () => {
      if (typeof window !== "undefined") {
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        if (divref.current) {
          gsap.fromTo(
            divref.current,
            { opacity: 0, y: -50},
            {
              opacity: 1,
              y: 0,
              duration: 1.5,
              ease: "power3.out",
              scrollTrigger: {
                trigger: divref.current,
                start: "top 90%",
                end: "top 40%",
                scrub: false,
                markers: false,
              },
            }
          );
        }
      }
    })();
  }, []);

  return (
    <div
      className={`w-screen h-screen ${
        selector ? "bg-black text-white" : "bg-white text-black"
      } grid place-items-center bg-cover bg-center`}
      style={{ fontFamily: fredoka.style.fontFamily }}
    >
      <Header HandleAction={() => router.push("/")} />
      <div
        className="flex flex-col items-center justify-center gap-3 p-4 bg-gradient-radial from-white to-zinc-900"
        ref={divref}
      >
        <h1 className="text-2xl">Lets work together!</h1>
        <h1>
          <b className="text-blue-500">Gmail:</b>{" "}
          <a href="http://gmail.com">irakliscode@gmail.com</a>
        </h1>
      </div>
    </div>
  );
}

export default connect
