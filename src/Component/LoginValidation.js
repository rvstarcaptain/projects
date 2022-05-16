import React, { useState } from 'react'

export default function LoginValidation() {
    const [user,setUser]= useState('')
    const[password,setPassword] = useState('');
    const[userError,setUSerError] = useState(false);
    const[passwordError,setPasswordError] = useState(false);
    
    function buttonHandler(e){       
        e.preventDefault();
        if(user.length<3 && password.length<3){
            alert("value not entered correctly");
        }else{
            alert('all good');
        }
    }

    function userHandler(e){
        const validUser = e.target.value;
        if(validUser.length <3){
            setUSerError(true)
        }
        else{
            setUSerError(false);
            
        }
        setUser(validUser)
        
    }
    function PasswordHandler(e){
        const validPassword = e.target.value;
        if(validPassword.length<=3){
            setPasswordError(true)
        }else{
            setPasswordError(false);
        }
        setPassword(validPassword)
        
    }
   

  return (
    <div>
        <form onSubmit={buttonHandler}>
            <input type="text" value={user} onChange={userHandler} /><br></br> 
            {
                userError?<p>invalid user</p>:null
            }
            <br></br>
            <input type="text" value={password} onChange={PasswordHandler} /><br></br>
            {
                passwordError?<p>invalid password</p>:null
            }
            <br></br>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}
