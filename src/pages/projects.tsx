import React, { useEffect, useRef } from 'react'
import Header from './components/Header';
import { MoviqueTools } from './components/Tools';
import { fredoka } from '.';
import { useSelector } from 'react-redux';
import { RootState } from './api/MainStore';
import gsap from 'gsap';
import Link from 'next/link';

const projects: React.FC = () => {
  const selector = useSelector((state: RootState) => state.MStore.theme);

  const divref1 = useRef<HTMLDivElement>(null);
  const divref2 = useRef<HTMLDivElement>(null);
  const divref3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (async () => {
      if (typeof window !== "undefined") {
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        [divref1, divref2, divref3].forEach((ref, index) => {
          if (ref.current) {
            gsap.fromTo(
              ref.current,
              { opacity: 50, x: 50},
              {
                opacity: 1,
                x: 0,
                rotate: 0,
                duration: 1.5,
                ease: "power3.out",
                delay: index * 0.3,  
                scrollTrigger: {
                  trigger: ref.current,
                  start: "top 90%",
                  end: "top 40%",
                  scrub: false,
                  markers: false,
                },
              }
            );
          }
        });
      }
    })();
  }, []);


  return (
    <>
      <div>
        <Header />
      </div>
      <div
        className={`text-white flex flex-wrap place-items-center transition-colors ${
          selector ? "bg-black text-white" : "bg-white text-black"
        } w-full max-lg:h-full h-screen bg-cover bg-center items-center justify-center gap-5 p-4 max-lg:pt-20`}
        style={{ fontFamily: fredoka.style.fontFamily }}
      >
        <div
          className={`flex flex-col gap-2 min-h-[600px] sm:w-1/2 lg:w-1/4 transition-colors ${
            selector ? "bg-gray-700 text-white" : "bg-slate-300 text-black"
          } rounded-lg shadow-lg p-6`}
          ref={divref1}
        >
          <h1 className="text-lg font-bold">Movique</h1>
          <img src="Movique.png" className="rounded-lg p-1" />
          <p>Tools used:</p>
          <div className="grid grid-cols-3 gap-2">
            {MoviqueTools.map((tool) => (
              <>
                <p
                  className={`text-sm leading-relaxed p-1 text-center ${
                    selector
                      ? "bg-gray-500 text-white"
                      : "bg-slate-700 text-white"
                  } rounded-lg`}
                >
                  {tool}
                </p>
              </>
            ))}
          </div>
          <p className="mt-2">
            On this website, you can explore new and updated movie and show
            trailers, along with genres and their descriptions, all sourced from
            the TMDB API.
          </p>
          <div>
            <button
              className={`pr-4 p-2 pl-4 ${
                selector
                  ? "bg-black text-white hover:bg-gray-900"
                  : "bg-slate-400 text-black hover:bg-slate-500"
              } m-3 rounded-full transition-colors`}
            >
              <a href="https://reactsdanger-portfolio-movique-web.onrender.com/">
                View Website
              </a>
            </button>
            <button
              className={`pr-4 p-2 pl-4 ${
                selector
                  ? "bg-black text-white hover:bg-gray-900"
                  : "bg-slate-400 text-black hover:bg-slate-500"
              } m-3 rounded-full transition-colors`}
            >
              <a href="https://github.com/Reactsdanger/Portfolio-Movique-web.git">
                View Code
              </a>
            </button>
          </div>
        </div>
        <div
          className={`flex flex-col gap-2 min-h-[600px] sm:w-1/2 lg:w-1/4 transition-colors ${
            selector ? "bg-gray-700 text-white" : "bg-slate-300 text-black"
          } rounded-lg shadow-lg p-6`}
          ref={divref2}
        >
          <h1 className="text-lg font-bold">LiveWeather App</h1>
          <img src="weatherapp.png" className="rounded-lg p-1" />
          <p>Tools used:</p>
          <div className="grid grid-cols-3 gap-2">
            {MoviqueTools.map((tool) => (
              <>
                <p
                  className={`text-sm leading-relaxed p-1 text-center ${
                    selector
                      ? "bg-gray-500 text-white"
                      : "bg-slate-700 text-white"
                  } rounded-lg`}
                >
                  {tool}
                </p>
              </>
            ))}
          </div>
          <p className="mt-2">
            This app allows users to view the weather for any location around
            the globe, making it a great tool for planning outdoor hiking trips.
          </p>
          <div>
            <button
              className={`pr-4 p-2 pl-4 ${
                selector
                  ? "bg-black text-white hover:bg-gray-900"
                  : "bg-slate-400 text-black hover:bg-slate-500"
              } m-3 rounded-full transition-colors`}
            >
              <a href="https://portfolio-liveweather-app.onrender.com/">
                View Website
              </a>
            </button>
            <button
              className={`pr-4 p-2 pl-4 ${
                selector
                  ? "bg-black text-white hover:bg-gray-900"
                  : "bg-slate-400 text-black hover:bg-slate-500"
              } m-3 rounded-full transition-colors`}
            >
              <a href="https://github.com/Reactsdanger/Portfolio-Liveweather-app">
                {" "}
                View Code
              </a>
            </button>
          </div>
        </div>
        <div
          className={`flex flex-col gap-2 min-h-[600px] sm:w-1/2 lg:w-1/4 transition-colors ${
            selector ? "bg-gray-700 text-white" : "bg-slate-300 text-black"
          } rounded-lg shadow-lg p-6`}
          ref={divref3}
        >
          <h1 className="text-lg font-bold">NASA planetary data</h1>
          <img src="Planetary.png" className="rounded-lg p-1" />
          <p>Tools used:</p>
          <div className="grid grid-cols-3 gap-2">
            {MoviqueTools.map((tool) => (
              <>
                <p
                  className={`text-sm leading-relaxed p-1 text-center ${
                    selector
                      ? "bg-gray-500 text-white"
                      : "bg-slate-700 text-white"
                  } rounded-lg`}
                >
                  {tool}
                </p>
              </>
            ))}
          </div>
          <p className="mt-2">
            Visiting this informational website can enhance your knowledge about
            space and NASA. The information and images are sourced from NASA's
            database and are displayed for you to explore.
          </p>
          <div>
            <button
              className={`pr-4 p-2 pl-4 ${
                selector
                  ? "bg-black text-white hover:bg-gray-900"
                  : "bg-slate-400 text-black hover:bg-slate-500"
              } m-3 rounded-full transition-colors`}
            >
              <Link href="https://portfolio-nasa-planetary-data.onrender.com/">
                View Website
              </Link>
            </button>
            <button
              className={`pr-4 p-2 pl-4 ${
                selector
                  ? "bg-black text-white hover:bg-gray-900"
                  : "bg-slate-400 text-black hover:bg-slate-500"
              } m-3 rounded-full transition-colors`}
            >
              <Link href="https://github.com/Reactsdanger/Portfolio-NASA-Planetary-Data">
                View Code
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default projects
