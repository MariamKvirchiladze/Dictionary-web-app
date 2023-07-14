import Types from "../../types";
import { useRef } from "react";
interface outputProps {
  darkMode: boolean;
  definition: Types | null;
  font: number;
}

const OutputSuccess = ({
  darkMode,
  definition,
  font,
}: outputProps): JSX.Element => {
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
      {definition?.meanings.map((meaning, index) => (
        <div
          key={index}
          className="flex flex-col gap-[31px] items-start w-full md:gap-10 md:max-w-[737px]"
        >
          <div className="flex gap-[25px]  w-full items-center">
            <h3
              className={`text-[18px] leading-[23px] md:text-[24px] md:leading-[29px] ${
                darkMode ? "text-[#ffffff]" : "text-[#2d2d2d]"
              } text-[18px] leading-[23px] ${
                font === 0 ? "italic" : font === 1 ? "italic" : ""
              }`}
            >
              {meaning.partOfSpeech}
            </h3>
            <hr
              className={`border-none h-[1px] w-full ${
                darkMode ? "bg-[#3A3A3A]" : "bg-[#E9E9E9]"
              }`}
            />
          </div>

          <div className="flex flex-col gap-[13px] w-full">
            <p
              className={`text-[#757575] text-[16px] leading-[19.3px] mb-1 md:-[11px] md:text-[20px] md:leading-[25.5px]`}
            >
              Meaning
            </p>
            {meaning?.definitions.map((definition, index) => (
              <div key={index} className="flex flex-col gap-6 w-full">
                <div className="flex gap-5 items-start">
                  <div className="min-w-[5px] min-h-[5px] rounded-full mt-[8px] bg-[#8F19E8]"></div>
                  <div>
                    <p
                      className={`  ${
                        darkMode ? "text-[#ffffff]" : "text-[#2D2D2D]"
                      } text-[15px] leading-6 font-normal md:text-[18px]`}
                    >
                      {definition?.definition}
                    </p>

                    <h4
                      className={`text-[#757575] text-[15px] leading-6] md:text-[18px] leading-6`}
                    >
                      {definition?.example && `"${definition?.example}"`}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
            {meaning.synonyms && meaning.synonyms.length > 0 && (
              <div
                className={` ${
                  meaning?.synonyms
                    ? " flex gap-6 items-center w-full flex-wrap flex-row"
                    : "hidden"
                }`}
              >
                <h4
                  className={` text-[#757575] font-normal text-[16px] leading-[19.3px] mb-1 md:text-[20px] md:leading-[25.5px]`}
                >
                  Synonyms
                </h4>
                {meaning?.synonyms.map((synonym, index) => (
                  <div key={index} className="flex  gap-[10px] ">
                    <h4
                      className={`text-[#A445ED] font-bold text-[16px] leading-[19.3px] md:text-[20px] md:leading-[25.5px] self-center cursor-pointer hover:underline hover:underline-offset-8 decoration-1 `}
                    >
                      {synonym}
                    </h4>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OutputSuccess;
