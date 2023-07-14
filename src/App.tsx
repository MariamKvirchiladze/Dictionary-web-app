import { useState } from "react";
import Header from "./components/default/Header";
import SearchBar from "./components/default/Search-bar";
import Output from "./components/output/Output";
import Types from "./types";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [font, setFont] = useState<number>(0);
  const [word, setWord] = useState<string>("");
  const [definition, setDefinition] = useState<Types | null>(null);
  return (
    <div
      className={`w-full min-h-screen px-[24px] pt-[24px] pb-[84px] flex-col flex justify-start items-center gap-[24px] md:px-[40px] md:pt-[58px] md:pb-[118px] md:gap-[51px] lg:pb-[124px] lg:px-[0] ${
        darkMode ? "bg-[#050505]" : "bg-[#FFFFFF]"
      } ${font === 0 ? "font-inter" : font === 1 ? "font-lora" : "font-mono"}`}
    >
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        font={font}
        setFont={setFont}
      />
      <SearchBar darkMode={darkMode} setWord={setWord} />
      <Output
        darkMode={darkMode}
        word={word}
        font={font}
        definition={definition}
        setDefinition={setDefinition}
      />
    </div>
  );
}

export default App;
