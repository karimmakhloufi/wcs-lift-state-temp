import { useState } from "react";

const TempInput = () => {
  const [inputValue, setInputValue] = useState(0);
  return (
    <input
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    ></input>
  );
};

export default TempInput;
