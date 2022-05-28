import React, { useState } from 'react';
export default function Todolist1() {
    const [inputlist,setInputlist]= useState('');
    const[items,setItems]= useState([]);

    const itemEvents =(event)=>{
        setInputlist(event.target.value)
        
    }
    
    const listofitems=()=>{
        if(!inputlist){
            alert('please write something......')
        }else{
            setItems([...items,inputlist]);
            setInputlist('')
        }
        
           
    }
    const deletITems=(id)=>{
        const deletedItem=items.filter((ele,index)=>{
            return index !== id;
        });
        setItems(deletedItem)
    }
    
    const removall = ()=>{
        setItems([]);
    }  
  return (
    <div>
        <div>
            <h2>ToDoList.....</h2>
            <input type="text" placeholder="add list"  value={inputlist} onChange={itemEvents}/>
            <button onClick={listofitems} >+</button><br/>
            <button onClick={removall}>clearAll</button>
        </div>
        <div>
            <ul>
               { items.map((elem,id)=>{
                    return(
                        <li key={id}>{elem}  <span><button onClick={()=>deletITems(id)} >X</button></span></li>
                    )
                })}
            </ul>
               
            
            
        </div>
    </div>
  )
}
