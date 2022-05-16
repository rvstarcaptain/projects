

import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from "./Item";
import './Nav.css'
export default function ProductList({name}) {
    
    const[item,setItem]=useState([]);
    const[page,setPage]=useState(1);
    const pageSize = 20;
    const[pagecount,setPageCount]=useState(0)
    
    const url = `https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=${name}&page=${page}&count=${pageSize}&sort_by=&sort_dir=desc&filter=`;
   
  
  
  function prev(){
    setPage((prevPage)=>prevPage-1);
    fetch(url).then((data)=> data.json()).then((resp)=> setItem(resp.result.products))
    
    
  }
  function next(){
    setPage((prevPage)=>prevPage+1);
    
    fetch(url).then((data)=> data.json()).then((resp)=>  setItem(resp.result.products))
    
  }

  useEffect(()=>{
    fetch(url).then((data)=> data.json()).then((resp)=> {setItem(resp.result.products);setPageCount(resp.result.count)} )

  },[])
  

  return (
    <div className="col">
      <div className="d-flex flex-wrap m-5" >
        {
            item.map((item,i)=>{
                return(
                    <div key={i}>
                        <Item 
                    img={item.image}
                    name={item.name}
                    price={item.selling_price}
                    desc={item.description} />
                    <hr></hr>
                    </div>

                    
                )
            })
        }
        <div className="container d-flex justify-content-between" >
        <Button variant="dark" onClick={()=>prev()} disabled={page<=1}> &lt; &lt; Prev</Button>{" "}
        <Button variant="dark" onClick={()=>next()} disabled={page>=Math.ceil(pagecount/pageSize)} >Next &gt; &gt;</Button>{" "}
        </div>

    </div>
    </div>
    
  )
}
