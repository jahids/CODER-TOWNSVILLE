import React from 'react';
import { Link } from 'react-router-dom';
const img = `https://learn.getgrav.org/user/pages/11.troubleshooting/01.page-not-found/error-404.png`;
const Notfound = () => {
    return (
      
            
            <div className="text-center">
            <img src={img} alt="" />
            <br />
            <Link to="/home">
                <button className="btn btn-lg btn-danger mt-4 mb-4 ">Back To Home</button>
            </Link>
        </div>
        
    );
};

export default Notfound;