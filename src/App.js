import { useState } from "react";
import TempInput from "./Components/TempInput";

function App() {
  const [celciusInputValue, setCelciusInputValue] = useState(0);
  const [farenheitInputValue, setFarenheitInputValue] = useState(32);

  const handleCelciusChange = (newValue) => {
    setCelciusInputValue(newValue);
    setFarenheitInputValue(newValue * (9 / 5) + 32);
  };

  const handleFarenheitChange = (newValue) => {
    setFarenheitInputValue(newValue);
    setCelciusInputValue((newValue - 32) * (5 / 9));
  };
  return (
    <div className="App">
      <h1>Temperature Converter</h1>
      <p>Celicius</p>
      <TempInput
        inputValue={celciusInputValue}
        setInputValue={handleCelciusChange}
      />
      <p>Farenheit</p>
      <TempInput
        inputValue={farenheitInputValue}
        setInputValue={handleFarenheitChange}
      />
    </div>
  );
}

export default App;
