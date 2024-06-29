import Button from "../UI/Button";
import {
  asdf,
  functional,
  lastRow,
  numberKeys,
  qwerty,
  secondLast,
} from "../keys";

import left from "../assets/keys/left.svg";
import top from "../assets/keys/top.svg";
import right from "../assets/keys/right.svg";
import down from "../assets/keys/down.svg";
import command from "../assets/keys/command.svg";
import screenshot from "../assets/images/macbook.png";

const Macbook = () => {
  return (
    <div className="w-[38rem] flex flex-col items-center">
      <Screen />
      <Keyboard />
    </div>
  );
};

const Screen = () => {
  return (
    <div className="w-full">
      <div className="outer-screen w-full h-80 mb-[-38px]">
        <div className=" screen  bg-black border-4 overflow-hidden border-b-0 rounded-xl border-[#171717]"></div>
      </div>
      {/* 
      <img
        className="w-[32rem] aspect-auto h-80 absolute top-0 left-0  object-cover"
        src={screenshot}
        alt=""
      /> */}
    </div>
  );
};
const Keyboard = () => {
  return (
    <div className="w-[34rem] h-80 px-12 bg-[#272729] rounded-md flex  flex-col items-center justify-start">
      <div className="bg-black w-full h-8" />
      <div className="w-full bg-[#141414] h-64 flex flex-col gap-[2px] rounded-md mt-6 p-1">
        {/* FIRST ROW  */}
        <div className="flex w-full gap-[1px]">
          <Button className="w-[9%] items-end justify-start">Esc</Button>

          {functional?.map((btn) => (
            <Button className=" flex-col items-center justify-center gap-1">
              <img
                src={btn.icon}
                alt=""
                className="invert filter grayscale w-2"
              />
              {btn.label}
            </Button>
          ))}
          <Button className="w-[7%] items-end justify-start"></Button>
        </div>

        {/* SECOND ROW  */}
        <div className="flex w-full gap-[1px]">
          {numberKeys?.map((btn) => (
            <Button className=" flex-col items-center justify-center">
              <div className="text-[7px]">{btn.alternate}</div>
              <div className="text-[6px]">{btn.label}</div>
            </Button>
          ))}
          <Button className="w-[9%] items-end justify-end">Delete</Button>
        </div>

        {/* THIRD ROW  */}
        <div className="flex w-full gap-[1px]">
          <Button className="w-[9%] items-end justify-start">Tab</Button>
          {qwerty?.map((btn) => (
            <Button className=" flex-col items-center justify-center">
              <div className="text-[7px]">{btn.alternate}</div>
              <div className={btn.alternate ? "text-[6px]" : "text-[8px]"}>
                {btn.label}
              </div>
            </Button>
          ))}
        </div>
        {/* FOURTH ROW  */}
        <div className="flex w-full gap-[1px]">
          <Button className="w-[13%]  ">
            <div className="relative items-end justify-start flex w-full h-full">
              <div className="w-[2px] h-[2px] bg-white rounded-full absolute top-2 left-1" />
              caps lock
            </div>
          </Button>
          {asdf?.map((btn) => (
            <Button className=" flex-col items-center justify-center">
              <div className="text-[7px]">{btn.alternate}</div>
              <div className={btn.alternate ? "text-[6px]" : "text-[8px]"}>
                {btn.label}
              </div>
            </Button>
          ))}
          <Button className="w-[12%] items-end justify-end">return</Button>
        </div>

        {/* SECOND LAST ROW  */}
        <div className="flex w-full gap-[1px]">
          <Button className="w-[15%] items-end justify-start">shift</Button>
          {secondLast?.map((btn) => (
            <Button className=" flex-col items-center justify-center">
              <div className="text-[7px]">{btn.alternate}</div>
              <div className={btn.alternate ? "text-[6px]" : "text-[8px]"}>
                {btn.label}
              </div>
            </Button>
          ))}
          <Button className="w-[15%] items-end justify-end">shift</Button>
        </div>
        {/* SIXTH ROW  */}
        <div className="flex w-full gap-[1px]">
          {/* <Button className="w-[9%] items-end justify-start">Tab</Button> */}
          {lastRow?.map((btn) => (
            <Button className=" flex-col items-center  justify-end gap-1">
              {/* <div className="text-[7px]">{btn.alternate}</div> */}
              <img
                src={btn.icon}
                alt=""
                className="invert filter grayscale w-2"
              />
              <div className={btn.icon ? "text-[6px]" : "text-[8px]"}>
                {btn.label}
              </div>
            </Button>
          ))}
          <Button className=" flex-col w-[9%]  items-center justify-end">
            <img src={command} alt="" className="invert filter grayscale w-2" />
            <div className={"text-[6px]"}>command</div>
          </Button>
          <Button className=" flex-col w-[36%]  items-center justify-center"></Button>
          <Button className=" flex-col w-[9%]  items-center justify-end">
            <img src={command} alt="" className="invert filter grayscale w-2" />
            <div className={"text-[6px]"}>command</div>
          </Button>
          <div className="w-[26%]  ">
            <div className="w-full flex justify-center">
              <Button className=" flex-col w-[25%] h-3 items-center justify-center">
                <img src={top} alt="" className="invert filter grayscale w-2" />
              </Button>
            </div>
            <div className="w-full flex  justify-center mt-[1px] gap-[2px]">
              <Button className=" flex-col w-[25%] h-3 items-center justify-center">
                <img
                  src={left}
                  alt=""
                  className="invert filter grayscale w-2"
                />
              </Button>
              <Button className=" flex-col w-[25%] h-3 items-center justify-center">
                <img
                  src={down}
                  alt=""
                  className="invert filter grayscale w-2"
                />
              </Button>
              <Button className=" flex-col w-[25%] h-3 items-center justify-center">
                <img
                  src={right}
                  alt=""
                  className="invert filter grayscale w-2"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-60 items-center  justify-center border border-gray-900 h-48 rounded-md "></div>
      <div className="h-4"></div>
    </div>
  );
};

export default Macbook;
