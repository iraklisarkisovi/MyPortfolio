import React, { useEffect, useRef } from "react";
 
import gsap from "gsap";
import { useSelector } from "react-redux";
import { RootState } from "../api/MainStore";
import Header from "./Header";
import { fredoka } from "..";

const MoviqueTools = [
  "Next.js",
  "TypeScript",
  "Redux",
  "Tailwind",
  "React Query",
  "Axios",
];

const projectsArr = [
  {
    name: "Movique",
    description:
      "On this website, you can explore new and updated movie and show trailers, along with genres and their descriptions, all sourced from the TMDB API.",
    weblink: "https://movique-web.vercel.app/",
    codelink: "https://github.com/justafront/Movique-web",
    img: "Movique.png",
  },
  {
    name: "LiveWeather App",
    description:
      "This app allows users to view the weather for any location around the globe, making it a great tool for planning outdoor hiking trips.",
    weblink: "https://portfolio-liveweather-app.vercel.app/",
    codelink: "https://github.com/justafront/Portfolio-Liveweather-app",
    img: "weatherapp.png",
  },
  {
    name: "TipType",
    description:
      "TipType is a little social media where user can read some advices posted by other people. User can also share the advices (tips) on website.",
    weblink: "https://tip-type.vercel.app/",
    codelink: "https://github.com/iraklisarkisovi/TipType.git",
    img: "tiptype.png",
  },
  {
    name: "NASA planetary data",
    description:
      "Visiting this informational website can enhance your knowledge about space and NASA. The information and images are sourced from NASA's database and are displayed for you to explore.",
    weblink: "https://portfolio-nasa-planetary-data.vercel.app/",
    codelink: "https://github.com/justafront/Portfolio-NASA-Planetary-Data",
    img: "Planetary.png",
  },
];

const Projects: React.FC = () => {
  const selector = useSelector((state: RootState) => state.MStore.theme);
  const divRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    (async () => {
      if (typeof window !== "undefined") {
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        divRefs.current.forEach((ref, index) => {
          if (ref) {
            gsap.fromTo(
              ref,
              { opacity: 0, y: 50 },
              {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                delay: index * 0.20,
                scrollTrigger: {
                  trigger: ref,
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
      <div
        className={`transition-colors ${
          selector ? "bg-black text-white" : "bg-white text-black"
        } w-full max-lg:h-full h-screen max-sm:h-full bg-cover bg-center flex items-center justify-center gap-5 p-4 max-lg:pt-20`}
        style={{ fontFamily: fredoka.style.fontFamily }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectsArr.map((it, index) => (
            <div
              key={index}
              ref={(el) => {
                divRefs.current[index] = el;
              }}
              className={`flex flex-col gap-2 min-h-[600px] transition-colors ${
                selector ? "bg-gray-700 text-white" : "bg-slate-300 text-black"
              } rounded-lg shadow-lg p-6`}
            >
              <h1 className="text-lg font-bold">{it.name}</h1>
              <img src={it.img} className="rounded-lg p-1" />
              <p>Tools used:</p>
              <div className="grid grid-cols-3 gap-2">
                {MoviqueTools.map((tool, idx) => (
                  <p
                    key={idx}
                    className={`text-sm leading-relaxed p-1 text-center ${
                      selector
                        ? "bg-gray-500 text-white"
                        : "bg-slate-700 text-white"
                    } rounded-lg`}
                  >
                    {tool}
                  </p>
                ))}
              </div>
              <p className="mt-2">{it.description}</p>
              <div>
                <button
                  className={`pr-4 p-2 pl-4 ${
                    selector
                      ? "bg-black text-white hover:bg-gray-900"
                      : "bg-slate-400 text-black hover:bg-slate-500"
                  } m-3 rounded-full transition-colors`}
                >
                  <a href={it.weblink}>View Website</a>
                </button>
                <button
                  className={`pr-4 p-2 pl-4 ${
                    selector
                      ? "bg-black text-white hover:bg-gray-900"
                      : "bg-slate-400 text-black hover:bg-slate-500"
                  } m-3 rounded-full transition-colors`}
                >
                  <a href={it.codelink}>View Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
