import React, { useState } from "react";

const AutoComplete = ({ options, onSelect }) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // 根据输入值过滤选项
    const filtered = options.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  const handleOptionSelect = (option) => {
    setInputValue(option);
    setFilteredOptions([]);
    onSelect(option);
  };

  return (
    <div className="autocomplete">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Start typing..."
      />
      {filteredOptions.length > 0 && (
        <ul className="options">
          {filteredOptions.map((option, index) => (
            <li key={index} onClick={() => handleOptionSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;
