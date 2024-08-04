import "./App.css";
import Macbook from "./components/Macbook";

function App() {
  return (
    <div>
      <div className="w-full h-[100rem]  hidden md:flex flex-col items-center justify-start pt-20">
        <div>
          <h1 className="text-4xl font-bold text-center px-12">
            This Macbook is built with Tailwindcss. No kidding.
          </h1>
        </div>
        <Macbook />
      </div>
      <div className="flex md:hidden flex-col font-bold  items-center justify-center text-2xl px-2 h-screen w-screen text-center">
        <div>Note : Please use this in computer.</div>
        <div className="text-base font-medium">
          Sorry for the inconvenience you are facing but we're not responsive
          yet for mobile or small screen devices. Please use a large screen
          device to use the app.
        </div>
        <div className="text-xl">Thanks for visiting.</div>
      </div>
    </div>
  );
}

export default App;
