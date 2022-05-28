import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Bootstrap() {
    const [userData,setUserData]=useState({})
    const [currentpage, setCurrentPage] = useState('register');
    const [postinput, setPostInput] = useState({ description: "" });
    const [allpost, setAllPost] = useState([])
    const header = { 'content-type': 'application/json' };
    const [editpost, setEditpost] = useState();
    const [message,setmessage]=useState('')
    useEffect(() => {
        fetchallpost()
    }, [])
    const changeHandler = (e) => {
        if(currentpage === 'register'){
            let data = {...userData}
            data[e.target.name]= e.target.value
            setUserData[data]

        }else{
            let data = { ...postinput }
            data[e.target.name] = e.target.value
            setPostInput(data)
        }
       
    }
    const createpost = (e) => {
        e.preventDefault();
        if (editpost) {
            //send Data to backend through api
            axios.put(`http://localhost:8005/post/${editpost}`, postinput, { headers: header }).then(res => {
                setEditpost()
                setPostInput({ description: '' })
                fetchallpost();
            }).catch(error => {
                console.log(error)
            })


        } else {
            axios.post('http://localhost:8005/post/', postinput, { headers: header }).then(res => {
                console.log(res)
                setPostInput({ description: "" })
                fetchallpost();

            }).catch(error => {
                console.log(error)
            })

        }



    }
    const fetchallpost = (e) => {
        axios.get('http://localhost:8005/post/').then(Response => {
            setAllPost(Response.data)
        }).catch(e => {
            console.log(e)
        })
    }
    const deletepost = (id) => {
        axios.delete(`http://localhost:8005/post/${id}/`).then(responses => {
            console.log(responses.data)
        }).catch((error) => {
            console.log(error)
        }).finally(() => {
            fetchallpost();
        })
    }
    const editpostHandler = (postdata) => {
        setPostInput({ description: postdata.description })
        setEditpost(postdata._id)
    }

    return (
        <div className='container w-75 mt-4'>
            <h5>{message}</h5>
            {
                currentpage === "register" ? (
                    <div className='w-50'>'
                        <h2>register</h2>
                        <form>
                            <input type="text" placeholder='Enter Your FullName' value={userData.name} name='name' className='form-control my-2' />
                            <input type="email" placeholder='Enter Your Email' value={userDate.email} name='email' className='form-control' />
                            <input type="password" placeholder='Enter Your password' value={userData.password} name='password' className='form-control' />
                            <button type='submit' className='btn btn-primary'>Register</button>
                        </form>
                    </div>
                ) :
                    <>
                    {currentpage === "login"?<div>show login</div>:(

                    )}
                        <form onSubmit={createpost}>
                            <textarea name="description" value={postinput.description} onChange={changeHandler} className="form-control" col="4" />
                            <button className='btn btn-primary float-end mt-2' type='submit' >{editpost ? 'Update' : 'post'}</button>
                        </form>
                        <div className='mt-4 w-75'>
                            <h2 className='text-center' >All posts</h2>
                            {
                                allpost.map((post, id) => {
                                    return (
                                        <div className='p-2 my-2' style={{ border: "1px solid grey" }} key={id} >
                                            <div>{post.description}</div>
                                            <div>
                                                <div className='btn btn-secondary' onClick={() => { editpostHandler(post) }}> Edit</div>
                                                <div className='btn btn-danger' onClick={() => { deletepost(post._id) }}> delete</div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </>
            }
        </div>

    )
}
