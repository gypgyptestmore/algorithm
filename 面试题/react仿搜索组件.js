import React from "react";
import AutoComplete from "./AutoComplete";

const App = () => {
  const options = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

  const handleSelect = (option) => {
    console.log("Selected:", option);
  };

  return (
    <div>
      <h1>AutoComplete Example</h1>
      <AutoComplete options={options} onSelect={handleSelect} />
    </div>
  );
};

export default App;
