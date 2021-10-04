import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Gcard from '../Groupcard/Gcard';


const Mainsec = () => {

    const [Course , setcourse] = useState([]);
    useEffect(() => {
            fetch("./fakedb.json")
            .then(res => res.json())
            .then(data => setcourse(data))

    },[])

   

    return (
        <div className="container">
        <div>
        <h1>WEL COME  <br /> TO  <br /> <span className = "fw-bold text-info">Our</span> <span className = "fw-bold text-warning">All Courses</span></h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">

            {
                Course.map(info => <Gcard
                    post={info}
                    >
 
                    </Gcard>)

                    
            }

            </div>
            

        </div>
        </div>
    );
};

export default Mainsec;