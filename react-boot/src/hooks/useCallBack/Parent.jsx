import { Button } from "./Child";
import { useState, useCallback } from "react";

export const Parent = ()=>{
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // This function is recreated on every render
  const handleClick1 = useCallback(()=>{
    setCount1(count1 + 1);
  },[count1])

   const handleClick2 = useCallback(()=>{
    setCount2(count2 + 1);
   },[count2])

  console.log("usecallback Parent rendered");
  
  return (
    <section id="center">
      <h1>useCallback:</h1>
      <p>Count 1: {count1}</p>
      <p>Count 2: {count2}</p>
      <Button onClick={handleClick1} text="Button 1" />
      <Button onClick={handleClick2} text="Button 2" />
    </section>
  )
} 