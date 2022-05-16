import { useState } from "react";

function User(props)
{
    const name= "rahul"
    return(
        <div>
            <h1>User Name is : {props.data}</h1>
            <button onClick={()=>props.data(name)} >Click Me</button>
        </div>
    )
}

export default User;