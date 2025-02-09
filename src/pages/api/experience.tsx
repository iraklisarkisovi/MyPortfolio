import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { fredoka } from "..";
import { useSelector } from "react-redux";
import { RootState } from "./MainStore";

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
              duration: 1.5,
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
                duration: 5,
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
    <div>
      <div
        className={`p-20 grid place-items-center min-h-screen bg-cover bg-center transition-colors ${
          selector ? "text-white bg-black" : "text-black bg-white"
        }`}
        style={{ fontFamily: fredoka.style.fontFamily }}
      >
        <div className="text-center" ref={gridRef}>
          <h1
            ref={headerRef}  
            className="text-4xl font-thin mb-8"
          >
            Skills
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* React */}
            <a
              href="https://reactjs.org/docs/getting-started.html"
              target="_blank"
              rel="noopener noreferrer"
              className="grid-item flex flex-col items-center"
            >
              <Image
                className={`${
                  selector ? "bg-white" : "bg-slate-200"
                } rounded-md p-6 hover:scale-95 transition-all`}
                alt="React"
                src="https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000"
                width={100}
                height={100}
              />
              <h1 className="text-xl mt-4">React</h1>
            </a>

            {/* Next.js */}
            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="grid-item flex flex-col items-center"
            >
              <Image
                className={`${
                  selector ? "bg-white" : "bg-slate-200"
                } rounded-md p-6 hover:scale-95 transition-all`}
                alt="Next.js"
                src="https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000"
                width={100}
                height={100}
              />
              <h1 className="text-xl mt-4">Next.js</h1>
            </a>

            {/* JavaScript */}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noopener noreferrer"
              className="grid-item flex flex-col items-center"
            >
              <Image
                className={`${
                  selector ? "bg-white" : "bg-slate-200"
                } rounded-md p-6 hover:scale-95 transition-all`}
                alt="JavaScript"
                src="https://img.icons8.com/?size=100&id=39854&format=png&color=000000"
                width={100}
                height={100}
              />
              <h1 className="text-xl mt-4">JavaScript</h1>
            </a>

            {/* TypeScript */}
            <a
              href="https://www.typescriptlang.org/docs/"
              target="_blank"
              rel="noopener noreferrer"
              className="grid-item flex flex-col items-center"
            >
              <Image
                className={`${
                  selector ? "bg-white" : "bg-slate-200"
                } rounded-md p-6 hover:scale-95 transition-all`}
                alt="TypeScript"
                src="https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000"
                width={100}
                height={100}
              />
              <h1 className="text-xl mt-4">TypeScript</h1>
            </a>

            {/* HTML */}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              target="_blank"
              rel="noopener noreferrer"
              className="grid-item flex flex-col items-center"
            >
              <Image
                className={`${
                  selector ? "bg-white" : "bg-slate-200"
                } rounded-md p-6 hover:scale-95 transition-all`}
                alt="HTML"
                src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000"
                width={100}
                height={100}
              />
              <h1 className="text-xl mt-4">HTML</h1>
            </a>

            {/* CSS */}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              target="_blank"
              rel="noopener noreferrer"
              className="grid-item flex flex-col items-center"
            >
              <Image
                className={`${
                  selector ? "bg-white" : "bg-slate-200"
                } rounded-md p-6 hover:scale-95 transition-all`}
                alt="CSS"
                src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000"
                width={100}
                height={100}
              />
              <h1 className="text-xl mt-4">CSS</h1>
            </a>

            {/* Tailwind CSS */}
            <a
              href="https://tailwindcss.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="grid-item flex flex-col items-center"
            >
              <Image
                className={`${
                  selector ? "bg-white" : "bg-slate-200"
                } rounded-md p-6 hover:scale-95 transition-all`}
                alt="Tailwind CSS"
                src="https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000"
                width={100}
                height={100}
              />
              <h1 className="text-xl mt-4">Tailwind CSS</h1>
            </a>

            {/* GitHub */}
            <a
              href="https://docs.github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="grid-item flex flex-col items-center"
            >
              <Image
                className={`${
                  selector ? "bg-white" : "bg-slate-200"
                } rounded-md p-6 hover:scale-95 transition-all`}
                alt="GitHub"
                src="https://img.icons8.com/?size=100&id=106562&format=png&color=000000"
                width={100}
                height={100}
              />
              <h1 className="text-xl mt-4">GitHub</h1>
            </a>

            {/* Git */}
            <a
              href="https://git-scm.com/doc"
              target="_blank"
              rel="noopener noreferrer"
              className="grid-item flex flex-col items-center"
            >
              <Image
                className={`${
                  selector ? "bg-white" : "bg-slate-200"
                } rounded-md p-6 hover:scale-95 transition-all`}
                alt="Git"
                src="https://img.icons8.com/?size=100&id=32891&format=png&color=000000"
                width={100}
                height={100}
              />
              <h1 className="text-xl mt-4">Git</h1>
            </a>

            {/* Docker */}
            <a
              href="https://docs.docker.com/desktop/setup/install/windows-install/"
              target="_blank"
              rel="noopener noreferrer"
              className="grid-item flex flex-col items-center"
            >
              <Image
                className={`${
                  selector ? "bg-white" : "bg-slate-200"
                } rounded-md p-6 hover:scale-95 transition-all`}
                alt="Docker"
                src="https://img.icons8.com/?size=100&id=zFAYIdFZlGxP&format=png&color=000000"
                width={100}
                height={100}
              />
              <h1 className="text-xl mt-4">Docker</h1>
            </a>

            {/* MongoDB */}
            <a
              href="https://www.mongodb.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="grid-item flex flex-col items-center"
            >
              <Image
                className={`${
                  selector ? "bg-white" : "bg-slate-200"
                } rounded-md p-6 hover:scale-95 transition-all`}
                alt="MongoDB"
                src="https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000"
                width={100}
                height={100}
              />
              <h1 className="text-xl mt-4">MongoDB</h1>
            </a>

            {/* Material UI */}
            <a
              href="https://mui.com/material-ui/getting-started/overview/"
              target="_blank"
              rel="noopener noreferrer"
              className="grid-item flex flex-col items-center"
            >
              <Image
                className={`${
                  selector ? "bg-white" : "bg-slate-200"
                } rounded-md p-6 hover:scale-95 transition-all`}
                alt="Material UI"
                src="https://img.icons8.com/?size=100&id=gFw7X5Tbl3ss&format=png&color=000000"
                width={100}
                height={100}
              />
              <h1 className="text-xl mt-4">Material UI</h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
