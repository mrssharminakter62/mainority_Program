import React from 'react';
import arrowLeft from "../../../images/Arrow left.png";
import mangoswap from "../../../images/Mangoswap.png";
import fund from "../../../images/fund.png";
import './Topbar.css';
import { Link } from 'react-router-dom';


const Topbar = () => {
    return (
        <div className="top-container">
      <Link to="/incubator"><img style={{maxWidth:'40px', marginTop:'10px'}} src={arrowLeft} /></Link> 
       <div style={{ display: "flex" }}>
        <img src={mangoswap} alt="" />
        <h1>Mangoswap</h1>
      </div>
      <img src={fund} />
      <button className="btn_sty">
      <Link to="/startup"><span className='text-white'> Fund Startup</span></Link> 
      </button>
    </div>
    );
};

export default Topbar;