import { useEffect, useState } from "react";
import Types from "../../types";
import OutputError from "./Output-error";
import OutputSuccess from "./Output-success";
import axios from "axios";

interface outputProps {
  darkMode: boolean;
  word: string;
  definition: null | Types;
  setDefinition(definition: any): void;
}

const Output = ({
  darkMode,
  word,
  definition,
  setDefinition,
}: outputProps): JSX.Element => {
  const [showResult, setShowResult] = useState<boolean | null>(null);
  useEffect(() => {
    const searchWord = async () => {
      try {
        const response = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );
        const data = response.data[0];
        setDefinition(data);
        setShowResult(true);
      } catch (error) {
        setShowResult(false);
      }
    };
    if (word !== "") {
      searchWord();
    }
  }, [word]);
  return (
    <div className="w-full flex flex-col justify-center items-center">
      {showResult === true ? (
        <div className="flex flex-col gap-[28px] items-center w-full md:gap-10">
          <OutputSuccess darkMode={darkMode} definition={definition} />
        </div>
      ) : showResult === false ? (
        <OutputError darkMode={darkMode} />
      ) : null}
    </div>
  );
};

export default Output;
