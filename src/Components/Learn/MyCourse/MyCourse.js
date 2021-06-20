import React from 'react';
import progress from '../../../images/progress.png';
import { Link } from 'react-router-dom';
import './MyCourse.css'

const MyCourse = (props) => {
    const {id, name, details, modules, level} = props.page;
    return (
        <div className='compon-style'> 
           <div className=""> 
                    <div className="course">
                        <h1>{name}</h1>
                        <p>{details}</p>
                         <button className='btn__one'>
                             <Link to={`/more/${id}`}> Learn More</Link>
                        </button>
                        <p className="mod">{modules}</p> <br />
                        <img src={ progress} style={{maxWidth:"320px"}} alt="" />
                        <p>{level} completed</p>
                    </div>
             </div>
        </div>
       
    );
};

export default MyCourse;