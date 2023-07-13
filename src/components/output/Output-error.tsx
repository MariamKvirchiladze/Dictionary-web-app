import confusedEmoji from "../../assets/images/😕.png";
interface errorProps {
  darkMode: boolean;
}

const OutputError = ({ darkMode }: errorProps): JSX.Element => {
  return (
    <div className=" max-w-[327px] mt-[24px] gap-[24px] flex flex-col w-full justify-center items-center  md:max-w-[689px] md:gap-[44px] lg:max-w-[736px]">
      <img src={confusedEmoji} alt="confused face emoji" />
      <h1
        className={`font-bold text-[18px] lg:text-[20px] ${
          darkMode ? "text-[#ffffff]" : "text-[#2D2D2D]"
        }`}
      >
        No Definitions Found
      </h1>
      <p className="font-normal text-[16px] text-center leading-[24px] text-[#757575] lg:text-[18px]">
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </div>
  );
};

export default OutputError;
