import React from 'react';

const Home = (props) => {
    const {Course_name, Date, Time, img, price } = props.post;

    return (
        <div>

                   
<div>
    

    <div className ="col h-100">
    <div className =" card h-100 shadow p-3 mb-5 bg-body rounded">
      <img style={{"height":"300px","width":"300px"}} src={img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h3 className="card-title font-weight-bold">{Course_name}</h3>
        <p className="card-text "> <span className='fw-bold'>Date : </span>{Date} </p>
        <p className="card-text "> <span className='fw-bold'> Time:</span>{Time}hour</p>
        <p className="card-text "> <span className='fw-bold'> price:</span> {price}</p>

      </div>
     <div  className="btn btn-success">Enroll now</div>
      </div>

</div> 

 </div>
 </div>
            
    );
};

export default Home;