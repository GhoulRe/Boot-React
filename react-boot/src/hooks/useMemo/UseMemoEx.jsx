import { useMemo } from "react"
import { useState } from "react"

export const UseMemoEx = ()=>{
    const[count,setCount] = useState(0)
    const[input,setInput] = useState(0)

    //expensive function
    const expensiveFn = (v)=>{
        console.log('expensive called');
        
        for(let i = 0; i < 1000000000; i++){}
        
        return v * 2
    }
    let double = useMemo(()=>expensiveFn(input),[input])

     const incCount = ()=>{
        setCount(count + 1)
    }

    return (
        <section id="center">
           <h1>UseRef Hook</h1>
            <h6>{count}</h6>
            <button className="counter" onClick={incCount}>Inc</button>
            <br></br>
            <input type="number" value={input} onChange={(e)=>setInput(e.target.value)} />
            <br></br>
            <p>double :{double}</p>
            <br></br>
        </section>
    )
}