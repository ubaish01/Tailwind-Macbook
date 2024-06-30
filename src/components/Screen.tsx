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
      if (screenshotRef?.current)
        // screenshotRef.current.src = moveDown > 500 ? github : screenshot;
        screenshotRef.current.src = wallpaper;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="lg:w-full md:3/4 w-1/2 z-20">
      <div className="outer-screen w-full lg:h-80 h-48 mb-[-38px]">
        <div className=" screen  bg-black border-4 overflow-hidden border-b-0 rounded-xl border-[#171717]"></div>
      </div>

      <div className="ss-outer ">
        <img
          ref={screenshotRef}
          className={clsx(
            "lg:w-[37rem] w-[18rem] z-50 ss aspect-auto lg:h-72 h-48 rounded-md  absolute lg:top-[-264px] top-[-145px] left-2   "
          )}
          src={wallpaper}
          alt=""
        />
      </div>
    </div>
  );
};

export default Screen;
