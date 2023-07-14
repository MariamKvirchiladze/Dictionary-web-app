import Types from "../../types";
import newWindow from "../../assets/images/icon-new-window.svg";

interface SoruceProps {
  darkMode: boolean;
  definition: Types | null;
}

const Source = ({ darkMode, definition }: SoruceProps): JSX.Element => {
  return (
    <div className="flex flex-col items center w-full gap-6 md:max-w-[737px]">
      <hr
        className={`border-none h-[1px] w-full ${
          darkMode ? "bg-[#3A3A3A]" : "bg-[#E9E9E9]"
        }`}
      />

      <div className="flex flex-col gap-2 w-full md:flex-row md:gap-[25px]">
        {" "}
        <h4
          className={`text-[#757575] text-[16px] leading-[19.3px] underline `}
        >
          Source
        </h4>
        <div className="flex gap-[9px] items-center">
          <a
            className={`text-[14px] underline leading-[16.94px] ${
              darkMode ? "text-[#ffffff]" : "text-[#2D2D2D]"
            } font-normal`}
            href={definition?.sourceUrls[0]}
            target="_blank"
          >
            {definition?.sourceUrls[0]}
          </a>
          <img src={newWindow} alt=" new tab " />
        </div>
      </div>
    </div>
  );
};

export default Source;
