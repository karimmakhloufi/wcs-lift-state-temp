import TempInput from "./Components/TempInput";

function App() {
  return (
    <div className="App">
      <h1>Temperature Converter</h1>
      <p>Celicius</p>
      <TempInput />
      <p>Farenheit</p>
      <TempInput />
    </div>
  );
}

export default App;
