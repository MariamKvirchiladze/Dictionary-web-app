import logo from "../../assets/images/logo.svg";
import arrow from "../../assets/images/icon-arrow-down.svg";
import moonDark from "../../assets/images/icon-moonDark.svg";
import moonLight from "../../assets/images/icon-moonLight.svg";
import { useState } from "react";
import FontMenu from "./Font-menu";

interface headerProps {
  darkMode: boolean;
  setDarkMode(darkMode: boolean): void;
  font: number;
  setFont(font: number): void;
}

const Header = ({
  darkMode,
  setDarkMode,
  font,
  setFont,
}: headerProps): JSX.Element => {
  const [menu, setMenu] = useState<boolean>(false);
  const openMenu = () => {
    setMenu(!menu);
  };
  const changeMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="w-full max-w-[375px] flex flex-row justify-between items-center md:max-w-[689px] lg:max-w-[736px]">
      <img
        className="hover:animate-ping w-[28.05px] h-[32px] cursor-pointer md:w-[32px] md:h-[36.5px]"
        src={logo}
        alt="logo of dictionary"
        onClick={() => window.location.reload()}
      />
      <div className="flex flex-row gap-[16px] items-center md:gap-[26px]">
        <div
          onClick={openMenu}
          className="relative cursor-pointer flex flex-row gap-[18px] items-center "
        >
          <h4
            className={`text-[14px] font-bold leading-[24px] md:text-[18px] ${
              darkMode ? "text-[#FFFFFF]" : "text-[#2D2D2D]"
            }`}
          >
            {font === 0 ? "Sans-serif" : font === 1 ? "Serif" : "Mono"}
          </h4>
          <img className="hover:animate-bounce" src={arrow} alt="arrow down" />
          <FontMenu setFont={setFont} menu={menu} darkMode={darkMode} />
        </div>
        <div className="w-[1px] h-[32px] bg-[#E9E9E9]"></div>
        <div className="flex flex-row gap-[12px] items-center md:gap-[20px]">
          <label
            className={`${
              darkMode ? "bg-[#A445ED]" : "bg-[#757575]"
            } tablet:ml-[1.625rem] relative inline-block w-[40px] h-[20px] rounded-[10px]`}
          >
            <input
              onClick={changeMode}
              type="checkbox"
              className="peer opacity-0 w-0 h-0"
            />
            <span className="absolute cursor-pointer inset-0 rounded-[10px] bg-gray dark:bg-purple before:absolute before:content-[''] before:h-[14px] before:w-[14px] before:rounded-full before:left-[3px] before:bottom-[3px] before:bg-white peer-focus-visible:bg-violet-500 peer-checked:before:translate-x-[20px] before:transition-all"></span>
          </label>
        </div>
        <img
          className="hover:animate-spin cursor-pointer"
          src={darkMode ? moonDark : moonLight}
          alt="moon"
        />
      </div>
    </div>
  );
};

export default Header;
