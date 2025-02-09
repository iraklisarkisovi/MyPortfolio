import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Roboto } from "next/font/google";
import Experience from "../api/experience";
import { gsap, Power3 } from "gsap";
import { fredoka } from "..";
import { useQuery } from "@tanstack/react-query";
import { fetchImages } from "../api/QueryFetch";
import { CircularProgress } from "@mui/material";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Welcome: React.FC = () => {
  const { data, isLoading, error } = useQuery({
    queryFn: fetchImages,
    queryKey: ["image"],
  });

  const UImages = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    UImages.current.forEach((el, index) => {
      if (el) {
        gsap.to(el, {
          opacity: 1,
          y: -20,
          ease: Power3.easeOut,
          delay: index * 0.2,
          duration: 0.8,
        });
      }
    });
  }, [data]);

  if (isLoading)
    return (
      <CircularProgress
        sx={{ position: "absolute", top: "50%", left: "50%" }}
      />
    );
  if (error) {
    console.error(error);
    return <div>Error loading images.</div>;
  }

  const getBackgroundImage = () => {
    if (!data || data.length === 0) return null;  
    return data[5].largeImageURL; 
   }


  return (
    <>
      <div
        className="relative grid place-items-center h-screen bg-cover bg-center"
        style={{
          fontFamily: fredoka.style.fontFamily,
        }}
      >
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `url(${
              getBackgroundImage() || "/fallback-image.jpg"
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",

            zIndex: 1,
          }}
        ></div>

        <div
          id="UImage"
          className="h-auto z-10 text-white flex max-lg:flex-col lg:flex-row items-center justify-between w-11/12 md:w-3/4 p-10  backdrop-blur-sm rounded-xl space-y-8 md:space-y-0"
        >
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h1
              className={`text-5xl font-bold text-gray-200 ${roboto.className}`}
            >
              Hello! there...
            </h1>
            <div className="flex md:flex-col text-left items-center justify-around">
              <h1 className="text-3xl font-thin text-gray-400">I'm Irakli</h1>
              <p className="text-2xl p-2 ml-5 text-gray-300 max-md:text-center max-md:text-sm">
                The Frontend Developer <br /> from Georgia
              </p>
            </div>
          </div>
          <div
            className={`text-center md:text-left max-w-xl md:ml-10 ${roboto.className}`}
          >
            <h1 className="text-lg leading-relaxed text-gray-300 max-md:text-left font-light">
              Have a strong background in building dynamic, responsive, and
              visually appealing web applications. Proficient in data fetching,
              styling, testing, and debugging to ensure optimal performance and
              user experience. Skilled in problem-solving and delivering
              scalable solutions using Next.js, React, and modern npm
              development tools. Thrives in both independent projects and
              collaborative team environments. Committed to writing clean,
              maintainable code and continuously improving workflows.
            </h1>
          </div>
        </div>
      </div>

      <Experience />
    </>
  );
};

export default Welcome;