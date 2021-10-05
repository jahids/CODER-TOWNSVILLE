import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Home from '../../Home/Home';
import Header from '../header/Header';

const  headerImg =`https://codertsv.github.io/assets/images/banner.png`;

const Thome = () => {

    const [product , setproduct] = useState([]);
    useEffect(() => {
            fetch("./scndfakedb.json")
            .then(res => res.json())
            .then(data => setproduct(data))

    },[])

    return (


    
    
        <div>
     

         <div className ="mt-3 h-100">
            <img src={headerImg} alt="" />
        </div>
        <div className="mt-4">
        {/* <h1>WEL COME  <br /> TO  <br /> <span className = "fw-bold text-info">Coder</span> <span className = "fw-bold text-warning">Townsville</span></h1> */}
      <div className ="mt-4  latest-course " >
      <h4 className = "text-center text-white">Latest Courses</h4>
      <Row xs={1} md={3} lg= {4} className="g-4 m-2  ">      
       
      {
                product.map(into=> <Home
                    post={into}
                    >
 
                    </Home>)

                    
        }

        </Row>
       

        <Link to="/mainsec">
                <button className="btn btn-lg btn-success mt-4 mb-4 ">See All Services</button>
            </Link>
      </div>
        </div>
       
    </div>

    );
};

export default Thome;