
import React from 'react'
import {Card} from "react-bootstrap"
import './Nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Item({img,name,price,desc}) {
  return (
    <div >
        <Card style={{ width: '14rem' }} className="m-3  ">
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text >
        {desc}<br></br>
      

    </Card.Text>
    <div variant="primary">{price}</div>
  </Card.Body>
</Card>
    </div>
  )
}
