import axios from 'axios';
import React, { useState } from 'react'

export default function ClassPractise() {
    // const [inputData, setInputData] = useState({});
    // const changeHandler = (e) => {
    //     let data = { ...inputData }
    //     data(e.target.name) = e.target.value;
    //     setInputData(data);
    // }
    // const submitData = (e) => {
    //     e.preventDefault();
    // }
    const [inputdata,setInputData]=useState({});
    const changeHandler = (e)=>{
        let data = {...inputdata}
        data[e.target.name] = e.target.value;
        setInputData(data)
    }
const submitData = (e)=>{
    e.preventDefault();
}
    return (

        <div>
            <form onSubmit={submitData}>
                <div>
                    <label>Book Name</label><br></br>
                    <input type="text" name="name" value={inputData} onChange={changeHandler} />
                    <label>Book Author</label><br></br>
                    <input type="text" name='author' value={inputData} onChange={changeHandler} />
                   
                   

                </div>
                <button type="submit">Save Data</button>
            </form>

        </div>
    )
}
