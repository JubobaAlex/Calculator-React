import React, { useState } from 'react';
import './App.css'
const Calculator = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleNumberClick = (num) => {
    setCurrentValue(currentValue === 0 ? num : `${currentValue}${num}`);
  };

  const handleOperatorClick = (op) => {
    setOperator(op);
    setPreviousValue(currentValue);
    setCurrentValue(0);
  };

  const handleEqualsClick = () => {
    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);

    switch (operator) {
      case '+':
        setCurrentValue(prev + current);
        break;
      case '-':
        setCurrentValue(prev - current);
        break;
      case '*':
        setCurrentValue(prev * current);
        break;
      case '/':
        setCurrentValue(prev / current);
        break;
      default:
        break;
    }

    setPreviousValue(null);
    setOperator(null);
  };

  const handleClear = () => {
    setCurrentValue(0);
    setPreviousValue(null);
    setOperator(null);
  };

  return (
    <div className='main'>
      <div className='result'>{currentValue}</div>
      <div className='numbers'>
      <button className='number' onClick={() => handleNumberClick(0)}>0</button>
      <button className='number' onClick={() => handleNumberClick(1)}>1</button>
      <button className='number' onClick={() => handleNumberClick(2)}>2</button>
      </div>
      <div className='numbers'>
      <button className='number' onClick={() => handleNumberClick(3)}>3</button>
      <button className='number' onClick={() => handleNumberClick(4)}>4</button>
      <button className='number' onClick={() => handleNumberClick(5)}>5</button>
      </div>
      <div className='numbers'>
      <button className='number' onClick={() => handleNumberClick(6)}>6</button>
      <button className='number' onClick={() => handleNumberClick(7)}>7</button>
      <button className='number' onClick={() => handleNumberClick(8)}>8</button>
      </div>
      <div className='operators'>
      <button className='number' onClick={() => handleNumberClick(9)}>9</button>
      
      <button className='operator' onClick={() => handleOperatorClick('/')}>/</button>
      <button className='operator' onClick={() => handleOperatorClick('*')}>*</button>
      </div>
      <div className='operators'>
      <button className='operator' onClick={() => handleOperatorClick('-')}>-</button>
      <button className='operator' onClick={() => handleOperatorClick('+')}>+</button>
      <button className='operator' onClick={handleClear}>C</button>
      </div>
      <div className='ravnos'>
      <button className='ravno' onClick={handleEqualsClick}>=</button>
      </div>
    </div>
  );
};

export default Calculator;