import clsx from "clsx";
import React from "react";

const Button = ({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={clsx(
        className,
        " bg-black lg:h-8 h-5  text-[6px] p-[2px] flex capitalize active:scale-95  shadow-[0_10px_20px_rgba(205,205,205,_0.5)] rounded-[4px]"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
