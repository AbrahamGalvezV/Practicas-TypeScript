import { useState } from "react";
import "./MyButton.css"

const MyButton = () => {
  const [ counter, setCounter ] = useState(0);

  const handleClickIncrement = () => {
    const NewValue = counter + 1;
    setCounter(NewValue);
  }
    
  return <button onClick={handleClickIncrement}>Intrementar {counter}</button> 
 };

  export default MyButton;