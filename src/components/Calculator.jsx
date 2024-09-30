import React, { useState, useEffect, useRef } from 'react';
import '../index.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [showMenu, setShowMenu] = useState(false);

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const result = eval(input);
        setHistory([...history, `${input} = ${result}`]);
        setInput(result.toString());
      } catch (error) {
        setInput('Error');
      }
    } else if (value === 'AC') {
      setInput('');
    } else if (value === 'del') {
      setInput(input.slice(0, -1)); 
    } else {
      setInput(input + value);
    }
  };

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const exportHistory = () => {
    const blob = new Blob([history.join('\n')], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'calculator_history.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const startVoiceRecognition = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.onresult = (event) => {
      const voiceInput = event.results[0][0].transcript;
      handleButtonClick(voiceInput);
    };
    recognition.start();
  };

  return (
    <div className="calculator">
      <div className="calculator-card">
        <button className="menu-button" onClick={toggleMenu}>
          ☰
        </button>
        <button className="menu-button" onClick={startVoiceRecognition}>
          🎤
        </button>
        <input 
          className="input" 
          type="text" 
          value={input} 
          readOnly 
        />
        <div className="container">
          <div className="row">
            <button className="button" onClick={() => handleButtonClick('AC')}>AC</button>
            <button className="button" onClick={() => handleButtonClick('%')}>%</button>
            <button className="button" onClick={() => handleButtonClick('mod')}>Mod</button>
            <button className="button" onClick={() => handleButtonClick('/')}>÷</button>
          </div>
          <div className="row">
            <button className="button" onClick={() => handleButtonClick('7')}>7</button>
            <button className="button" onClick={() => handleButtonClick('8')}>8</button>
            <button className="button" onClick={() => handleButtonClick('9')}>9</button>
            <button className="button" onClick={() => handleButtonClick('*')}>×</button>
          </div>
          <div className="row">
            <button className="button" onClick={() => handleButtonClick('4')}>4</button>
            <button className="button" onClick={() => handleButtonClick('5')}>5</button>
            <button className="button" onClick={() => handleButtonClick('6')}>6</button>
            <button className="button" onClick={() => handleButtonClick('-')}>-</button>
          </div>
          <div className="row">
            <button className="button" onClick={() => handleButtonClick('1')}>1</button>
            <button className="button" onClick={() => handleButtonClick('2')}>2</button>
            <button className="button" onClick={() => handleButtonClick('3')}>3</button>
            <button className="button" onClick={() => handleButtonClick('+')}>+</button>
          </div>
          <div className="row">
            <button className="button" onClick={() => handleButtonClick('0')}>0</button>
            <button className="button" onClick={() => handleButtonClick('.')}>.</button>
            <button className="button" onClick={() => handleButtonClick('=')}>=</button>
            <button className="button" onClick={() => handleButtonClick('del')}>Del</button>
          </div>
        </div>

        {showMenu && (
          <div className="dropdown-menu">
            <button className="menu-option" onClick={() => alert(history.join('\n'))}>
              History
            </button>
            <button className="menu-option" onClick={exportHistory}>
              Export History
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;
