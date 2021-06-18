import React from 'react';
import progress from '../../../images/progress.png';
import { Link } from 'react-router-dom';
import './MyCourse.css'

const MyCourse = (props) => {
    const { id, name, details, modules, level} = props.feature;
    return (
        <div className=''> 
             <div className="row d-flex justify-content-center">  
                    <div className="col-md-4 course">
                        <h1>{name}</h1>
                        <p>{details}</p>
                         <button className='btn__one'>
                             <Link to={`/progress/${id}`}> Learn More</Link>
                        </button>
                        <p className="modul">{modules}</p> <br />
                        <img src={ progress} alt="" />
                        <p>{level} completed</p>
                    </div>
             </div>
        </div>
       
    );
};

export default MyCourse;