import React from 'react';
import './Button.css';

const Button = ({ name, size = 'medium', variant = 'primary', onClick }) => {
  const classNames = `button ${size} ${variant}`;
  return <button className={classNames} onClick={onClick}>{name}</button>;
};

export default Button;
