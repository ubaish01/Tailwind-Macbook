import wallpaper from "../assets/images/wallpaper.jpg";
import { useEffect, useRef } from "react";
import clsx from "clsx";

const Screen = () => {
  const screenshotRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const screenHeight = window.innerHeight;
      const moveDown = Math.min(scrollPosition, screenHeight);
      const xt = Math.ceil(moveDown / 19) - 35;

      if (screenshotRef.current) {
        if (scrollPosition > 0) {
          screenshotRef.current.style.transform = `translateY(${moveDown}px) rotateX(${xt}deg)`;
          screenshotRef.current.style.scale = `${
            100 + Math.ceil(moveDown / 10)
          }%`;
        } else {
          screenshotRef.current.style.transform =
            "translateY(0) rotateX(-35deg)";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full  z-20">
      <div className="outer-screen w-full h-80 mb-[-38px]">
        <div className=" screen  bg-black border-4 overflow-hidden border-b-0 rounded-xl border-[#171717]"></div>
      </div>

      <div className="ss-outer ">
        <img
          ref={screenshotRef}
          className={clsx(
            "w-[37rem]  z-50 ss aspect-auto h-72  rounded-md  absolute top-[-264px]  left-2   "
          )}
          src={wallpaper}
          alt=""
        />
      </div>
    </div>
  );
};

export default Screen;
