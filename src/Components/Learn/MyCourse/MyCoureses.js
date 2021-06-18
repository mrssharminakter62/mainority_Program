import React, { useEffect, useState } from 'react';
import fData from "./data2.json";
import MyCourse from './MyCourse';

const MyCoureses = () => {
    const [features, setFeatures] = useState([]);

    useEffect(()=>{
        setFeatures(fData);
    },[]);
    return (
        <div className='mt-5 ml-5'>
        <form className="">
                     <input type="text" name="search" placeholder="Search.."/>
        </form> 
        <h1 style={{color: 'white'}}>My Courses__________________________________</h1>
        <div className="box"> 
          {
              features.map((feature) => <MyCourse feature={feature} key={feature.id}></MyCourse> )
          }
        </div>
       
    </div>
    );
};

export default MyCoureses;