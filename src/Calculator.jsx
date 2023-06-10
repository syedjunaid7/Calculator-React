import React, { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState('');

  function keyPress(id) {
    if (((display + id).toString().length) < 13 ? ((display + id).toString()) : setDisplay('error')) {
      if(display === 'error'){
        setDisplay('')
      }else{
        if (id === '=') {
          const result = eval(display);
          setDisplay(result);
        } else if (id === "AC") {
          setDisplay('');
        } else if (id === "DE") {
          const del = display.slice(0, -1);
          setDisplay(del);
        } else if (id === '%' && display.length > 0) {
          const number = parseFloat(display.slice(0, -1));
          const percent = number / 100;
          setDisplay(percent.toString());
        } else {
          const lastChar = display.slice(-1);
          if((id !== '*' || display.length>0) && (id !== '+' || display.length>0) && (id !== '/' || display.length>0) && (id !== '-' || display.length>0) && (id !== '.' || display.length>0)){    
          if (lastChar === '+' || lastChar === '-' || lastChar === '.' || lastChar === '*' || lastChar === '/') {
            if (id !== '+' && id !== '-' && id !== '.' && id !== '*' && id !== '/') {
              setDisplay((display + id).toString());
            }
          } else {
            setDisplay((display + id).toString());
          }
        }
        }
      }
    }
   
  }
  
  return (
    <div className="container">
      <input type="text" value={display} readOnly />
      <div className="row first">
        <button className="custom-btn btn-2" onClick={() => keyPress('AC')}>AC</button>
        <button className="custom-btn btn-2" onClick={() => keyPress('DE')}>DE</button>
        <button className="custom-btn btn-2" onClick={() => keyPress('%')}>%</button>
        <button className="custom-btn btn-2" onClick={() => keyPress('/')}>/</button>
      </div>
      <div className="row">
        <button className="custom-btn btn-2" onClick={() => keyPress('7')}>7</button>
        <button className="custom-btn btn-2" onClick={() => keyPress('8')}>8</button>
        <button className="custom-btn btn-2" onClick={() => keyPress('9')}>9</button>
        <button className="custom-btn btn-2" onClick={() => keyPress('+')}>+</button>
      </div>
      <div className="row">
        <button className="custom-btn btn-2" onClick={() => keyPress('4')}>4</button>
        <button className="custom-btn btn-2" onClick={() => keyPress('5')}>5</button>
        <button className="custom-btn btn-2" onClick={() => keyPress('6')}>6</button>
        <button className="custom-btn btn-2" onClick={() => keyPress('-')}>-</button>
      </div>
      <div className="row">
        <button className="custom-btn btn-2" onClick={() => keyPress('1')}>1</button>
        <button className="custom-btn btn-2" onClick={() => keyPress('2')}>2</button>
        <button className="custom-btn btn-2" onClick={() => keyPress('3')}>3</button>
        <button className="custom-btn btn-2" onClick={() => keyPress('*')}>*</button>
      </div>
      <div className="row last">
        <button className="custom-btn btn-2" onClick={() => keyPress('0')}>0</button>
        <button className="custom-btn btn-2" onClick={() => keyPress('.')}>.</button>
        <button className="custom-btn btn-2 equal" onClick={() => keyPress('=')}>=</button>
      </div>
    </div>
  );
}
