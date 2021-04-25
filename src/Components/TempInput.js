const TempInput = ({ inputValue, setInputValue }) => {
  return (
    <input
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    ></input>
  );
};

export default TempInput;
