import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CourseF'

const CourseF = (props) => {
    const {id, name, Details, modules, level} = props.course;
    return (
        <div className="">
            <div className="course">
                 <h1>{name}</h1>
                 <p>{Details}</p>
                 <button className='btn__one'><Link to={`/progress/${id}`}>Learn More</Link></button>
                 <p className="modul">{modules}</p>
                 <ProgressBar now={83} />
                 <p>{level} completed</p>
           </div>
        </div>
    );
};

export default CourseF;