import React, { useState } from "react";
import "./App.css";
import Button from "./Button/Button.jsx";
import Input from "./Input/Input.jsx";
import { Modal, useModal } from "./Modal/Modal.jsx";
import Select from "./Select/Select.jsx";

const options1 = [
  { value: "전사", label: "전사" },
  { value: "무도가", label: "무도가" },
  { value: "헌터", label: "헌터" },
  { value: "마법사", label: "마법사" },
  { value: "암살자", label: "암살자" },
  { value: "스페셜리스트", label: "스페셜리스트" },
];

const options2 = [
  { value: "니나브", label: "니나브" },
  { value: "루페온", label: "루페온" },
  { value: "실리온", label: "실리온" },
  { value: "아만", label: "아만" },
  { value: "아브렐슈드", label: "아브렐슈드" },
  { value: "카단", label: "카단" },
  { value: "카마인", label: "카마인" },
  { value: "카제로스", label: "카제로스" },
];

function App() {
  const { showModal: showConfirmModal, openModal: openConfirmModal, closeModal: closeConfirmModal } = useModal();
  const { showModal: showCloseModal, openModal: openCloseModal, closeModal: closeCloseModal } = useModal();

  const [selectedValue1, setSelectedValue1] = useState("");
  const [selectedValue2, setSelectedValue2] = useState("");

  const handlePrimaryClick = () => {
    alert("This is Primary Button");
  };

  const handleNegativeClick = () => {
    alert("This is Negative Button");
  };

  const handleSelect1 = (option) => {
    setSelectedValue1(option.label);
  };

  const handleSelect2 = (option) => {
    setSelectedValue2(option.label);
  };

  return (
    <div className="body">
      <div>
        <h1>Button</h1>
      </div>
      <Button
        name="Large Primary Button"
        size="large"
        variant="primary"
        onClick={handlePrimaryClick}
      />
      <Button name="Medium" size="medium" variant="primary" />
      <Button name="Small" size="small" variant="primary" />
      <div>
        <Button
          name="Large Negative Button"
          size="large"
          variant="negative"
          onClick={handleNegativeClick}
        />
        <Button name="Medium" size="medium" variant="negative" />
        <Button name="Small" size="small" variant="negative" />
      </div>
      <div>
        <h1>Input</h1>
      </div>
      <div className="input-container">
        <div>
          <label>First Input</label>
          <Input value={selectedValue1} readOnly />
        </div>
        <div>
          <label>Second Input</label>
          <Input value={selectedValue2} readOnly />
        </div>
      </div>
      <div>
        <h1>Modal</h1>
        <Button name="Open Confirm Modal" size="medium" variant="primary" onClick={openConfirmModal} />
        <Button name="Open Close Modal" size="medium" variant="primary" onClick={openCloseModal} />
        
        <Modal show={showConfirmModal} onClose={closeConfirmModal} type="confirm" />
        <Modal show={showCloseModal} onClose={closeCloseModal} type="close" />
      </div>
      <div>
        <h1>Select</h1>
        {/* props로 정보 내려주기 */}
        <Select options={options1} onSelect={handleSelect1} placeholder="직업군" />
        <Select options={options2} onSelect={handleSelect2} placeholder="서버" />
      </div>
    </div>
  );
}

export default App;
