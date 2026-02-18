import Link from "next/link";
import React, { useState, useEffect } from "react";
import { fredoka } from "..";
import { AntSwitch } from "../api/themeswitch";
import { useDispatch, useSelector } from "react-redux";
import { themeSwitcher } from "../api/MainSlice";
import { RootState } from "../api/MainStore";

type Props = {
  HandleAction: () => void;
};

const Header: React.FC<Props> = ({HandleAction}) => {
  const dispatch = useDispatch();
  const [bool, setBool] = useState(false);
  const selector = useSelector((state: RootState) => state.MStore.theme);
  const handleAppear = () => {
    setBool((prevBool) => !prevBool);
  };

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-colors duration-300 ${
        selector ? "text-white bg-black" : "text-black bg-white"
      }`}
      style={{
        fontFamily: fredoka.style.fontFamily,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href={"/"}>
          <h1 className="text-lg font-thin whitespace-nowrap">
            {"</>"} Welcome
          </h1>
        </Link>

        <nav
          className={`absolute p-4  ${
            selector
              ? "max-md:text-white max-md:bg-black"
              : "max-md:text-black max-md:bg-white"
          } top-20 duration-300 transition-all ${
            bool ? "right-0" : "-right-full"
          } md:static md:flex`}
        >
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/"
                className="hover:text-blue-600 transition duration-200"
              >
                Home
              </Link>
            </li>
            <li
              onClick={HandleAction}
              className="cursor-pointer hover:text-blue-600 transition duration-200"
            >
              Projects
            </li>
            <li>
              <Link
                href="/connect"
                className="hover:text-blue-600 transition duration-200"
              >
                Connection
              </Link>
            </li>
          </ul>
        </nav>
        <AntSwitch onClick={() => dispatch(themeSwitcher())} />
        <div className="flex items-center space-x-4">
          <a href="https://www.linkedin.com/in/irakli-sarkisovi-09099325a/">
            <img
              className="w-7 hover:scale-90 transition-transform"
              src="/linkedin.png"
              alt="Linkedin"
            />
          </a>
          <a href="https://github.com/iraklisarkisovi">
            <img
              className="w-7 hover:scale-90 transition-transform"
              src="/github.png"
              alt="Github"
            />
          </a>
        </div>

        <div className="md:hidden">
          <button className="hover:text-gray-400" onClick={handleAppear}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
