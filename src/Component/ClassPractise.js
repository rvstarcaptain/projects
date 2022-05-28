import axios from 'axios';
import React, { useEffect, useState } from 'react'

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
    const [inputdata, setInputData] = useState([]);
    const[bookdata,setBookdata] = useState([])
    const header = { 'content-Type': 'application/json' }
    const changeHandler = (e) => {
        let data = { ...inputdata }
        data[e.target.name] = e.target.value;
        setInputData(JSON.stringify(data))
    }
    const submitData = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8002/book/', inputdata, { headers: header }).then(res => {
                console.log('success')
            }).catch(e => {
                console.log('oops try again')
            }).finally(()=>{
                fetchbookdata()
            })
                        
    }
    const fetchbookdata = ()=>{
        axios.get('http://localhost:8002/book/').then(response =>{
            console.log(response)
            setBookdata(response.data)
        }).catch(err=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        fetchbookdata()
    },[])

    const deletbook = (id)=>{
        axios.delete(`http://localhost:8002/book/${id}/`).then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log(err)
        }).finally(()=>{
            fetchbookdata()
        })
    }
    return (

        <div>
            <form onSubmit={submitData}>
                <div>
                    <label>Book Name</label><br></br>
                    <input type="text"  onChange={changeHandler} name="name" />
                </div>
                <div>
                    <label>Book Author</label><br></br>
                    <input type="text"  onChange={changeHandler} name="author" />



                </div>
                <button type="submit">Save Data</button>
            </form>
            <div>
                {bookdata.map((item,id)=>{
                    return(
                        <div key={id} > 
                        Book Name:{item.name},Book Author:{item.author} <button onClick={()=>{deletbook(item._id)}}>Delete</button>
                    </div>
                    )
                    
                })}
            </div>

        </div>
    )
}
