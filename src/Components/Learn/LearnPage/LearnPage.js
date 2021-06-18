import React from 'react';
import './LearnPage.css';

const LearnPage = () => {
    return (
     <div className="container row d-flex justify-content-center align-items-center" >
         <div className=" col-md-6 back_baner" ></div>
            <div className="col-md-6 mt-5 ">
                <h1 className="start_in ">Learn high in demand 
                    <br />IT Skills & Get Crypto.</h1>
                    <small className="end">powered by <span style={{color:"blue"}}>KoinStreet</span> </small>
            </div>
    </div>
    );
};

export default LearnPage;