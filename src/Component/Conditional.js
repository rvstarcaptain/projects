import React,{useState} from 'react'

export default function Conditional() {
    const[loggedin,setLoggedin]=useState(2);
    function setuser1(){
        setLoggedin(!loggedin)
        console.log( setLoggedin(!loggedin))
    }
  return (
    <div>
        {
            loggedin==1?<h2>user1</h2>
            :loggedin==2?<h2>user2</h2>
            :<h2>user3</h2>
        }
        
        {/* <button onClick={setuser1}>setuser</button> */}
        {/* with button only two cases can be executed */}
    </div>
  )
}
