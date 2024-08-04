import clsx from "clsx";
import React from "react";
import clickSound from "../assets/audio/button-click.mp3";
const Button = ({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const PlayClickSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };

  return (
    <button
      onClick={PlayClickSound}
      className={clsx(
        className,
        " bg-black h-8   text-[6px] p-[2px] flex capitalize active:scale-95  shadow-[0_10px_20px_rgba(205,205,205,_0.5)] rounded-[4px]"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
