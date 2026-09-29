import { useState,useRef } from "react"

export const StopWatch = ()=>{
    const [count, setCount] = useState(0)
    const countRef = useRef(0) // we are storing setinteval in useref because count rerender component and sets everything to default vaules that are not in state

    const start = () =>{
        countRef.current = setInterval(() => {
            setCount(count => count + 1)
        }, 1000);
    }
    const pause = () =>{
        clearInterval(countRef.current)
    }
    const reset = () =>{
        pause();
        setCount(0)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button className="counter" onClick={start}>Start</button>
            <br></br>
            <button className="counter" onClick={pause}>Pause</button>
            <br></br>
            <button className="counter" onClick={reset}>Reset</button>
        </div>
    )
}