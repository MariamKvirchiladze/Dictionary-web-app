interface FontMenuProps {
  darkMode: boolean;
  menu: boolean;
  setFont(font: number): void;
}

const FontMenu = ({ darkMode, menu, setFont }: FontMenuProps): JSX.Element => {
  const fontNames = ["Sans-Serif", "Serif", "Mono"];
  const fontsItems = fontNames.map((font, index) => {
    console.log(font, index);
    const fontItem = (
      <h2
        key={index}
        onClick={() => setFont(index)}
        className={`text-[18px] leading-[24px] font-bold cursor-pointer hover:text-[#A445ED] ${
          darkMode ? "text-[#FFFFFF]" : "text-[#2D2D2D]"
        } ${
          index === 0 ? "font-inter" : index === 1 ? "font-lora" : "font-mono"
        }`}
      >
        {font}
      </h2>
    );
    return <h2>{fontItem}</h2>;
  });
  return (
    <div
      className={`w-[183px] h-[152px] rounded-[16px] p-[24px] flex flex-col justify-between items-start absolute top-[40px] right-[0px] ${
        darkMode
          ? "shadow-darkShadow bg-[#1F1F1F]"
          : "shadow-lightShadow  bg-[#FFFFFF]"
      } ${menu ? "block" : "hidden"}`}
    >
      {fontsItems}
    </div>
  );
};

export default FontMenu;
