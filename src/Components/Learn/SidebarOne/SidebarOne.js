import React from 'react';
import vec from "../../../images/search.png";
import circle from "../../../images/circle.png";
import { Link } from 'react-router-dom';


const SidebarOne = () => {
    return (
        <div className=" ml-2 mt-5 text-white" style={{ background: "#151371" }}>
          <div className="ml-3 mb-5" style={{height:'1000px'}}>
          <h4 className="ml-3"><Link to="/learn">
          <img src={vec} style={{maxWidth:'20px', padding:'5px'}}  alt="" />
            Courses
           </Link></h4>
          <h4 className="mb-5">Introduction to Blockchain</h4>
          <hr />
          <div className="text-sidebar">
          <h4 className="mb-3">Week-1</h4>
          <h6><img src={circle} style={{maxWidth:'20px'}} alt="" /> Introduction</h6>
          <h6><img src={circle} style={{maxWidth:'20px'}} alt="" /> Introduction</h6>
          <h6><img src={circle} style={{maxWidth:'20px'}} alt="" /> Introduction</h6>
        </div>
        <div className="text-sidebar">
        <h4 className="mb-3 mt-5">Week-2</h4>
          <h6><img src={circle} style={{maxWidth:'20px'}} alt="" /> Introduction</h6>
          <h6><img src={circle} style={{maxWidth:'20px'}} alt="" /> Introduction</h6>
          <h6><img src={circle} style={{maxWidth:'20px'}} alt="" /> Introduction</h6>
        </div>
        <div className="text-sidebar">
        <h4 className="mb-3 mt-5">Week-3</h4>
          <h6><img src={circle} style={{maxWidth:'20px'}} alt="" /> Introduction</h6>
          <h6><img src={circle} style={{maxWidth:'20px'}} alt="" /> Introduction</h6>
          <h6><img src={circle} style={{maxWidth:'20px'}} alt="" /> Introduction</h6>
        </div>
        <div className="text-sidebar">
        <h4 className="mb-3 mt-5">Week-4</h4>
          <h6><img src={circle} style={{maxWidth:'20px'}} alt="" /> Introduction</h6>
          <h6><img src={circle} style={{maxWidth:'20px'}} alt="" /> Introduction</h6>
          <h6><img src={circle} style={{maxWidth:'20px'}} alt="" /> Introduction</h6>
        </div>
        <div className="text-sidebar">
        <h4 className="mb-3 mt-5">Week-5</h4>
          <h6><img src={circle} style={{maxWidth:'20px'}} alt="" /> Introduction</h6>
          <h6><img src={circle} style={{maxWidth:'20px'}} alt="" /> Introduction</h6>
          <h6><img src={circle} style={{maxWidth:'20px'}} alt="" /> Introduction</h6>
        </div>
          </div>
      </div>
    );
};

export default SidebarOne;