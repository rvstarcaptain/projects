import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Statewise = () => {
  const [result, setResult]= useState([]);

  const getCovidData = () => {
    axios.get('https://data.covid19india.org/data.json').then((res) => {
      console.log(res.data.statewise);
      setResult(res.data.statewise)}).catch(error=>{
        setResult("something went wrong")
      })
    }
  
  useEffect( () => {
    getCovidData();
  },[]); 

  return(
       <>
          <div className='container-fluid mt-5'>
              <div className='main-heading'>
                <h1 className='mb-5 text-center'><span className='font-weight-bold'>INDIA</span></h1>
              </div>
              <div className='table-responsive'>
                <table className='table table-hover'>
                  <thead className='thead-dark'>
                    <tr>
                      <th>State</th>
                      <th>Confirmed</th>
                      <th>Recovered</th>
                      <th>Deaths</th>
                      <th>Active</th>
                      <th>Updated</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                    result.map((curElem,ind) => {
                     return (
                      <tr key = {ind} >
                          <th> {curElem.state} </th>
                          <td> {curElem.confirmed} </td>
                          <td> {curElem.recovered} </td>
                          <td> {curElem.deaths} </td>
                          <td> {curElem.active} </td>
                          <td> {curElem.updated} </td>
                       </tr>
                       )
                     })
                  }
                  </tbody>
                </table>
              </div>
          </div>
       </>
    )
}

export default Statewise;