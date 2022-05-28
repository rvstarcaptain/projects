import React, { useState } from 'react'

export default function Calculator() {
    const [result, setresult] = useState("");


    const getresult = (e) => {
        setresult(result.concat(e.target.name))
    }
    const clear = () => {
        setresult('')
    }
    const backspace = () => {
        setresult(result.slice(0, -1))
    }
    
    const output = ()=>{
        setresult(eval(result).toString())
    }
    return (
        <div>
            <h1>Calculator</h1>
            <form >
                <input type="text" defaultValue={result}></input>
            </form>
            <div>
                <button onClick={getresult} name="1">1</button>
                <button onClick={getresult} name="2">2</button>
                <button onClick={getresult} name="3">3</button>
                <button onClick={getresult} name="+">&#43;</button><br />
                <button onClick={getresult} name="4">4</button>
                <button onClick={getresult} name="5">5</button>
                <button onClick={getresult} name="6">6</button>
                <button onClick={getresult} name="-">&ndash;</button><br />
                <button onClick={getresult} name="7">7</button>
                <button onClick={getresult} name="8">8</button>
                <button onClick={getresult} name="9">9</button>
                <button onClick={getresult} name="*">&times;</button><br />
                <button onClick={getresult} name="0">0</button>
                <button onClick={getresult} name=".">.</button>
                <button onClick={backspace}>&#8592;</button>
                <button onClick={clear}>clear</button>
                <button onClick={output}>=</button>
                <button onClick={getresult} name="/">&divide;</button><br />
            </div>


        </div>
    )
}
