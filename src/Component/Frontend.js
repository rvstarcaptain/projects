import axios from 'axios';
import React, { useState } from 'react'

export default function Frontend() {
    const[name,setName] = useState('');
    const[age,setAge]=useState('');
    const[myname,setmyName] = useState('');
    const[myage,setmyAge]=useState('');
    const[score,setScore]=useState('');

    function formHandler(e){
        e.preventDefault();
        let data = {name:name,age:age};
        axios.post("http://localhost:8002/test",data).then((res)=>{
            console.log(res.data)
        }).catch((error)=>{
            console.log("eror occure sorry",error)
        })
        setName('')
        setAge('')
    }
    function nameHandler(e){
        setName(e.target.value)
    }
    function ageHandler(e){
        setAge(e.target.value)
    }
    function getdata(){
        axios.get("http://localhost:8002/test").then((response)=>{
            console.log(response.data)
            setmyName(response.data.name)
            setmyAge(response.data.age)

        })
    }
    function getScore(){
        axios.get("http://localhost:8002/score").then((res)=>{
            console.log(res.data)
            setScore(res.data)
            

        })
    }
    return (

        <div>
            <form onSubmit={formHandler}>
                Name:<input type="text" value={name} onChange={nameHandler} /><br></br>
                Age:<input type="number" value={age} onChange={ageHandler} /><br></br>
                <button type='submit'  >submit</button>
            </form>
            <button onClick={getdata} >get data </button>
            <button onClick={getScore} >get score</button>
            <p> NAme:{myname}</p>
            <p>Age:{myage}</p>
            <p>{score.name}:{score.runs}-{score.wicket}</p>
            <p>{score.Over}:{score.over}</p>

        </div>
    )
}
