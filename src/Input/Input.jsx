import React, { useState } from "react";
import "./Input.css";
import Button from "../Button/Button";

const Input = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  
  };
  const handleSaveClick = () => {
    alert(`Name: ${name}  Price: `);
  };

  const handleNumberChange = (e) => {
    const inputValue = e.target.value.replace(/,/g, "");

    if (/^\d*$/.test(inputValue)) {
      const formattedValue = new Intl.NumberFormat().format(inputValue);
      setNumber(formattedValue);
    }
  };

  return (
    <div className="input-wrapper">
      <div>
        Name:{" "}
        <input
          type="text"
          placeholder="이름을 입력해주세요."
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div>
        Price:{" "}
        <input
          type="text"
          value={number}
          onChange={handleNumberChange}
          placeholder="숫자를 입력해주세요."
        />
      </div>
      <div>
      <Button
          name="Save"
          size="medium"
          variant="primary"
          onClick={handleSaveClick}
        />
      </div>
    </div>
  );
};

export default Input;
