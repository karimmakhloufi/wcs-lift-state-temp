import { useState } from "react";
import TempInput from "./Components/TempInput";

function App() {
  const [inputValue, setInputValue] = useState(0);
  return (
    <div className="App">
      <h1>Temperature Converter</h1>
      <p>Celicius</p>
      <TempInput inputValue={inputValue} setInputValue={setInputValue} />
      <p>Farenheit</p>
      <TempInput inputValue={inputValue} setInputValue={setInputValue} />
    </div>
  );
}

export default App;
