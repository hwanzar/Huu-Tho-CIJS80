import logo from './logo.svg';
import './App.css';
import CardComponent from './components/CardComponent';
import InputComponent from './components/InputComponent';
import Button from './components/Button';
import { useState } from 'react';

function App() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  let [sum,setSum] = useState(0);
  const handleChangeFirstNumber = (e) => {
    setFirstNumber(e.target.value);
  }
  const handleChangeSecondNumber = (e) => {
    setSecondNumber(e.target.value);
  }
  const handleClickSumButton = () => {
    sum = Number(firstNumber) + Number(secondNumber)
    setSum(sum);
    return sum;
  }
  return (
    <div className='App'>
      <input 
        type="text" 
        id = "inputFirstNumber" 
        placeholder="input first number"
        value =  {firstNumber}
        onChange = {handleChangeFirstNumber} />
      <input 
        type="text" 
        id = "inputSecondNumber" 
        placeholder="input second number" 
        value = {secondNumber}
        onChange = {handleChangeSecondNumber} />
      <button onClick={handleClickSumButton}> Press to sum 2 number </button>
      <span> Sum 2 number is: {sum} </span>
    </div>
  );
}

export default App;
