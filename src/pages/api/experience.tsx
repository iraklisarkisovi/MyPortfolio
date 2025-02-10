import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSelector } from "react-redux";
import { RootState } from "./MainStore";
import { fredoka } from "..";

const skills = [
  {
    name: "React",
    src: "https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000",
    link: "https://reactjs.org/docs/getting-started.html",
  },
  {
    name: "Next.js",
    src: "https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000",
    link: "https://nextjs.org/docs",
  },
  {
    name: "JavaScript",
    src: "https://img.icons8.com/?size=100&id=39854&format=png&color=000000",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    src: "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000",
    link: "https://www.typescriptlang.org/docs/",
  },
  {
    name: "HTML",
    src: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    src: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "Tailwind CSS",
    src: "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
    link: "https://tailwindcss.com/docs",
  },
  {
    name: "GitHub",
    src: "https://img.icons8.com/?size=100&id=106562&format=png&color=000000",
    link: "https://docs.github.com/",
  },
  {
    name: "Git",
    src: "https://img.icons8.com/?size=100&id=32891&format=png&color=000000",
    link: "https://git-scm.com/doc",
  },
  {
    name: "Docker",
    src: "https://img.icons8.com/?size=100&id=zFAYIdFZlGxP&format=png&color=000000",
    link: "https://docs.docker.com/desktop/setup/install/windows-install/",
  },
  {
    name: "MongoDB",
    src: "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000",
    link: "https://www.mongodb.com/",
  },
  {
    name: "Material UI",
    src: "https://img.icons8.com/?size=100&id=gFw7X5Tbl3ss&format=png&color=000000",
    link: "https://mui.com/material-ui/getting-started/overview/",
  },
];

const Experience = () => {
 const gridRef = useRef<HTMLDivElement>(null);
 const headerRef = useRef<HTMLHeadingElement>(null);
 const selector = useSelector((state: RootState) => state.MStore.theme);

 useEffect(() => {
   (async () => {
     if (typeof window !== "undefined") {
       const { ScrollTrigger } = await import("gsap/ScrollTrigger");
       gsap.registerPlugin(ScrollTrigger);

       if (headerRef.current) {
         gsap.fromTo(
           headerRef.current,
           { opacity: 0, y: -50 },
           {
             opacity: 1,
             y: 0,
             duration: 0.5,
             ease: "power3.out",
             scrollTrigger: {
               trigger: headerRef.current,
               start: "top 90%",
               end: "top 40%",
               scrub: false,
               markers: false,
             },
           }
         );
       }

       if (gridRef.current) {
         const items = gridRef.current.querySelectorAll(".grid-item");
         if (items) {
           gsap.fromTo(
             items,
             { opacity: 0, y: 50 },
             {
               opacity: 1,
               y: 0,
               duration: 8,
               ease: "power3.out",
               stagger: 0.2,
               scrollTrigger: {
                 trigger: gridRef.current,
                 start: "top 80%",
                 end: "bottom 20%",
                 scrub: true,
                 markers: false,
               },
             }
           );
         }
       }
     }
   })();
 }, []);

  return (
    <div className={`h-full w-full ${selector ? "bg-black" : "bg-white"}`}>
      <div
        className={`p-20 grid place-items-center min-h-screen bg-cover bg-center transition-colors${
          selector ? "bg-black text-white" : "bg-white text-black"
        }`}
        style={{ fontFamily: fredoka.style.fontFamily }}
      >
        <h1 ref={headerRef} className="text-4xl font-thin mb-8 z-30">
          Skills
        </h1>
        <div
          ref={gridRef}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {skills.map(({ name, src, link }) => (
            <a
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="grid-item flex flex-col items-center"
            > 
              <Image
                className={`rounded-md p-6 hover:scale-95 transition-all ${
                  selector ? "bg-gray-700" : "bg-gray-100"
                }`}
                alt={name}
                src={src}
                width={100}
                height={100}
              />
              <h1
                className={`text-xl mt-4 ${
                  selector ? "text-white" : "text-black"
                }`}
              >
                {name}
              </h1>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
