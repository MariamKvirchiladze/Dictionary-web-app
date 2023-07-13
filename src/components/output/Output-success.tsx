import Types from "../../types";
import { useRef } from "react";
interface outputProps {
  darkMode: boolean;
  definition: Types | null;
}

const OutputSuccess = ({ darkMode, definition }: outputProps): JSX.Element => {
  const audioWord = useRef<HTMLAudioElement>(null);
  const audioUrl = definition?.phonetics
    .filter((phonetic) => phonetic.audio !== "")
    .map((phonetic) => phonetic.audio)[0];

  const playWord = () => {
    const audio = audioWord.current;
    if (audio) {
      audio.play();
    }
  };

  return (
    <div className="w-full max-w-[375px] flex flex-col justify-center items-start gap-[31px] md:max-w-[689px] md:gap-[44px] lg:max-w-[737px]">
      <div className="header flex w-full flex-row justify-between items-center ">
        <div className="flex flex-col gap-[7px] items-start md:gap-[5px]">
          <h1
            className={`text-[32px] leading-[34px] font-bold  md:text-[64px] md:leading-[67px] ${
              darkMode ? "text-[#ffffff]" : "text-[#2D2D2D]"
            }`}
          >
            {definition?.word}
          </h1>
          <p
            className={`text-[18px] font-normal text-[#A445ED] md:text-[24px]`}
          >
            {definition?.phonetic}
          </p>
        </div>
        <svg
          onClick={playWord}
          className="hover w-[48px] h-[48px] md:w-[75px] md:h-[75px] hover:animate-pulse"
          xmlns="http://www.w3.org/2000/svg"
          width="75"
          height="75"
          viewBox="0 0 75 75"
        >
          <g fill="#A445ED" fillRule="evenodd">
            <circle
              className="circle opacity-25 transition-opacity cursor-pointer"
              cx="37.5"
              cy="37.5"
              r="37.5"
            />
            <path d="M29 27v21l21-10.5" className="path cursor-pointer" />
          </g>
        </svg>
        <audio src={audioUrl} ref={audioWord}></audio>
      </div>
    </div>
  );
};

export default OutputSuccess;
