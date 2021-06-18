import React, {useEffect, useState } from 'react';
import fData from '../../../Data/data2.json';
import MyCourse from './MyCourse';

const MyCoureses = () => {
    const [pages, setPages] = useState([]);
useEffect(() => {
    setPages(fData);
    // console.log(fData)
}, [])
    return (
        <div className='mt-5 ml-5'>
        <form className="mt-5 ml-5">
                     <input type="text" name="search" placeholder="Search.."/>
        </form> 
        <h1 style={{color: 'white'}}>My Courses__________________________________</h1>
        <div className=" box"> 
          {
             pages.map( page => <MyCourse page={page} key={page.id} ></MyCourse>) 
          }
        </div>
    </div>
    );
};

export default MyCoureses;