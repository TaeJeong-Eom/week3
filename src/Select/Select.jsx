import React, { useState, useRef, useEffect } from "react";
import "./Select.css";

const Select = ({ options, onSelect, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const selectRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Select 클릭
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  // 외부영역 클릭시 Select 닫힘
  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      handleClickOutside(event);
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleToggle();
    }
  };

  return (
    <div className="select-container" ref={selectRef}>
      <div 
        className="select-display" 
        onClick={handleToggle} 
        tabIndex={0} 
        onKeyDown={handleKeyDown}
      >
        {selectedOption ? selectedOption.label : placeholder}
      </div>
      {/* isOpen 이 true 일 때만 렌더링 */}
      {isOpen && (
        <div className="select-options">
          {/* 옵션 배열을 순회하면서 렌더링 */}
          {options.map((option) => (
            <div
              key={option.value}
              className="select-option"
              onClick={() => handleOptionClick(option)}
              tabIndex={0}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
