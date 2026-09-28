import { useRef, useState } from "react"
import { StopWatch } from "./stopwatch";

export const UseRefHook = () =>{
    const buttonRef = useRef(0);
    const countRef = useRef(0);
    const [count,setCount] = useState(0);

    const incCount = ()=>{
        setCount(count + 1)
        countRef.current = countRef.current + 1
        console.log(countRef.current);
    }
    const changeColor = ()=>{
        buttonRef.current.style.backgroundColor = 'green'
    }
    return (
        <div>
            <h1>UseRef Hook</h1>
            <h6>{count}</h6>
            <button className="counter" onClick={incCount}>Inc</button>
            <br></br>
            <button ref={buttonRef} className="counter" onClick={changeColor}>Change color sing useRef</button>
 <br></br>
            <StopWatch/>
        </div>
    )
}