import Keyboard from "./Keyboard";
import Repo from "./Repo";
import Screen from "./Screen";

const Macbook = () => {
  return (
    <div className="w-[38rem] flex flex-col items-center">
      <div className="w-[38rem]  flex items-center justify-center">
        <Screen />
      </div>
      <div className="w-[34rem] flex items-center justify-center">
        <Keyboard />
      </div>
      <Repo />
    </div>
  );
};

export default Macbook;
