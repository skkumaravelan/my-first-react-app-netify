import React from 'react'
import { useState } from 'react';

const Content = () => {

  const [str, setStr] = useState("Earn");

  function handleNameChange() {
    const names = ['donate', 'give', 'make'];
    const numbers = Math.floor(Math.random() * 3);
    setStr(names[numbers]);
  }

  const [count, setCount] = useState(99);
  function incrementFunction() {
    setCount(count + 1)
  }
  function decrementFunction() {
    setCount(count - 1);
  }

  // function namee(){
  //   return console.log("Printing sample string...")
  // }
  //const [name,setName] = useState(() => namee());

  // const handleClick = (e) => {
  //   console.log(e);
  // }
  // const  handleClick2 =(name) =>{
  //   console.log(`Thanks for the support ${name}`);
  // }

  return <main>

    <p>Lets {str} money</p>
    <button onClick={handleNameChange}>Subscribe</button>
    <button onClick={decrementFunction}>-</button>
    <span>{count}</span>
    <button onClick={incrementFunction}>+</button>

  </main>

}

export default Content
