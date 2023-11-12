import { React, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { TbHexagonLetterA } from "react-icons/tb";

function NavBar() {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  const scrollToProjects = () => {
    window.scrollTo({
      top: 800,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed w-full z-30">
      <div className="text-text-100 bg-background-940 flex justify-between items-center h-16 px-6 border-b-2 border-background-900 bg-opacity-70 backdrop-blur-md">
        <div className="flex items-center cursor-pointer" onClick={scrollToTop}>
          <TbHexagonLetterA size="36px" className="text-text-50" />
          <h1 className="uppercase font-bold text-xl text-text-50 ml-0">
            kihiko
          </h1>
        </div>
        <ul className="hidden md:flex">
          <a href="https://github.com/akihiko47" target="_blank">
            <li className="px-4 py-2 font-bold bg-primary-300 text-background-800 rounded-md hover:bg-primary-200 transition ease-in-out duration-300">
              GitHub
            </li>
          </a>
          <li className="px-4 py-2 font-bold cursor-pointer" onClick={scrollToProjects}>Projects</li>
          <li className="px-4 py-2 font-bold">About</li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <AiOutlineMenu size="24px" className="text-text-50" />
          ) : (
            <AiOutlineClose size="24px" className="text-text-50" />
          )}
        </div>
        <div
          className={
            !nav
              ? "fixed left-0 top-0 bg-background-940 h-screen w-[70%] p-8 ease-in-out duration-500 shadow-xl md:hidden z-40 bg-opacity-95 backdrop-blur-lg border-r-2 border-background-900"
              : "fixed left-[-100%] top-0 bg-background-940 h-screen w-[70%] p-8 ease-in-out duration-500 shadow-xl z-40 bg-opacity-95 backdrop-blur-lg border-r-2 border-background-900"
          }
        >
          <ul className="py-4 mt-10">
            <li className="pt-4 pb-2 border-b-2 border-background-600 font-bold text-md">
              <a href="https://github.com/akihiko47" target="_blank">
                GitHub
              </a>
            </li>
            <li onClick={scrollToProjects} className="pt-4 pb-2 border-b-2 border-background-600 font-bold text-md">
              Projects
            </li>
            <li className="pt-4 pb-2 border-b-2 border-background-600 font-bold text-md">
              About
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
