import React from 'react'
import { useState } from 'react'

const Calculator = () => {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [result, setResult] = useState(0);

    const changeValue1 = (event) => {
        setValue1(event.target.value);
    }
    const changeValue2 = (event) => {
        setValue2(event.target.value);
    }

    const sum = () => {
        setValue1(value1 + value2);
    }
    const minus = () => {
        setValue1(value1 - value2);
    }
    const multiply = () => {
        setValue1(value1 * value2);
    }
    const divide = () => {
            setValue1(value1 / value2);
    }

  return (
    <div>
        <h1>Calculator</h1>
        <div>
            <input type="number" value={value1} onChange={changeValue1}/>
            <br />
            <input type="number" value={value2} onChange={changeValue2}/>
            <p>`Result: {value1}</p>
            <button type="button" onClick={sum}>+</button>
            <button type="button" onClick={minus}>-</button>
            <button type="button" onClick={multiply}>x</button>
            <button type="button" onClick={divide}>/</button>
        </div>
    </div>
  )
}

export default Calculator