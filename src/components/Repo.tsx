import { GITHUB_REPO_URL, PORTFOLIO_URL } from "../constants";

const Repo = () => {
  return (
    <div className="flex flex-col items-center justify-start mt-2">
      <div>
        Made with ❤️ by{" "}
        <span
          onClick={() => window.open(PORTFOLIO_URL, "_blank")}
          className="text-purple-500 cursor-pointer hover:underline "
        >
          Ubaish Malik
        </span>{" "}
      </div>
      <div className="mt-60 text-3xl text-center font-bold">
        <div className="">
          Do you like it ? Checkout the code{" "}
          <span
            onClick={() => window.open(GITHUB_REPO_URL, "_blank")}
            className="text-purple-500 hover:underline cursor-pointer"
          >
            here
          </span>
        </div>
        <div>Dont forget to give it a star.</div>
      </div>
    </div>
  );
};

export default Repo;
