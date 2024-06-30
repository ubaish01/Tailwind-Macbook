import "./App.css";
import Macbook from "./components/Macbook";

function App() {
  return (
    <div className="w-full h-[100rem]   flex flex-col items-center justify-start pt-20">
      <div>
        <h1 className="text-4xl font-bold">
          This Macbook is built with Tailwindcss. No kidding.
        </h1>
      </div>
      <Macbook />
    </div>
  );
}

export default App;
