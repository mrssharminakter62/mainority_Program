import React from 'react';
import { Link } from 'react-router-dom';
import './Incubator.css';


const Incubator = () => {

    return (
        <div className="bg_baner" >
         <div className="row d-flex justify-content-end mb-5">
         <div className="col-md-4 mt-5 start_up">
                <h1 className="">Invest directly into <br /> minority innovations.</h1>
                <button className="btn_style"><Link to="view">View Startups</Link></button>
            </div>
         </div>
    </div>
    );
};

export default Incubator;