import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, CardImg, Container } from 'react-bootstrap';

const Gcard = (props) => {
    const {name, description, img, price,stage,duration } = props.post;
    console.log(props.post);

    return (
<div>

       
<div>
    

    <div className ="col h-100">
    <div className =" card h-100 shadow p-3 mb-5 bg-body rounded">
      <img src={img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h3 className="card-title font-weight-bold">{name}</h3>
        <p className="card-text "> <span className='fw-bold'> </span>{description} </p>
        <p className="card-text "> <span className='fw-bold'> Stage : </span>{stage}</p>
        <p className="card-text "> <span className='fw-bold'> Duration : </span> {duration} </p>
        <p className="card-text "> <span className='fw-bold'> price:</span> {price}</p>

      </div>
     <div  className="btn btn-success">Enroll now</div>
      </div>

</div> 

 </div>


        </div>
    );
};

export default Gcard;