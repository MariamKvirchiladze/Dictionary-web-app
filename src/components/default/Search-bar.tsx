import { useState } from "react";
import searchIcon from "../../assets/images/icon-search.svg";

interface searchProps {
  darkMode: boolean;
  setWord(word: string): void;
}
const SearchBar = ({ darkMode, setWord }: searchProps): JSX.Element => {
  const [errorMessage, setErrorMessage] = useState(false);
  const checkInput = (e: any) => {
    e.preventDefault();
    setWord(e.target.search.value);
    if (e.target.search.value === "") {
      setErrorMessage(!errorMessage);
    } else {
      setErrorMessage(false);
    }
  };
  return (
    <div
      className={`w-full max-w-[375px] flex flex-col items-start justify-center gap-[8px] md:max-w-[689px] lg:max-w-[736px]`}
    >
      <form
        onSubmit={checkInput}
        className={`flex justify-center hover:border-[1px] hover:border-[#A445ED] cursor-pointer  gap-[20px] items-center rounded-[16px] w-full h-[48px] px-4 py-[14px] md:py-[22px] md:px-6 md:h-16  ${
          errorMessage ? "border-[1px] border-solid border-[#FF5252]" : ""
        } ${darkMode ? "bg-[#1F1F1F]" : "bg-[#F4F4F4]"}`}
      >
        <input
          autoComplete="off"
          type="search"
          id="search"
          placeholder="Search for any word…"
          className={`w-full  cursor-pointer outline-none border-none font-bold text-[16px] leading-[19.36px] bg-none appearance-none 
          placeholder:opacity-25 md:text-5 md:leading-[21px] bg-transparent ${
            darkMode ? "bg-[#1F1F1F]" : "bg-[#F4F4F4]"
          } ${darkMode ? "text-[#ffffff]" : "text-[#2D2D2D]"} `}
        />
        <button className="w-4 h-4 decoration-none" type="submit">
          <img src={searchIcon} alt="search icon" />
        </button>
      </form>
      <p
        className={`font-normal text-[16px] leading-[19.36px] text-[#FF5252] ${
          errorMessage ? "block" : "hidden"
        }`}
      >
        Whoops, can’t be empty…
      </p>
    </div>
  );
};

export default SearchBar;
