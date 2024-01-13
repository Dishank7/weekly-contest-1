import React, { useState } from 'react';

const App = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleInputChange = (e, inputType) => {
    const inputValue = e.target.value;

    // Check if the input is a valid integer
    if (/^-?\d*$/.test(inputValue)) {
      if (inputType === 'num1') {
        setNum1(inputValue);
      } else {
        setNum2(inputValue);
      }
    }
  };

  const calculate = (operation) => {
    // Check if both input fields are not empty
    if (num1.trim() === '' || num2.trim() === '') {
      alert('Please enter valid numbers in both fields.');
      return;
    }

    const operand1 = parseInt(num1);
    const operand2 = parseInt(num2);

    switch (operation) {
      case 'add':
        setResult(operand1 + operand2);
        break;
      case 'subtract':
        setResult(operand1 - operand2);
        break;
      case 'multiply':
        setResult(operand1 * operand2);
        break;
      case 'divide':
        // Check for division by zero
        if (operand2 === 0) {
          alert('Cannot divide by zero.');
          return;
        }
        setResult(operand1 / operand2);
        break;
      default:
        break;
    }
  };

  return (
    <div className='cal-div'>
      <div>
        <label>
          Number 1:
          <input
            type="text"
            value={num1}
            onChange={(e) => handleInputChange(e, 'num1')}
          />
        </label>
      </div>
      <div>
        <label>
          Number 2:
          <input
            type="text"
            
            value={num2}
            onChange={(e) => handleInputChange(e, 'num2')}
          />
        </label>
      </div>
      <div className='btn-div'>
        <button onClick={() => calculate('add')}>+</button>
        <button onClick={() => calculate('subtract')}>-</button>
        <button onClick={() => calculate('multiply')}>*</button>
        <button onClick={() => calculate('divide')}>/</button>
      </div>
      <div>
        <p>Result: {result !== null ? result : 'N/A'}</p>
      </div>
    </div>
  );
};

export default App