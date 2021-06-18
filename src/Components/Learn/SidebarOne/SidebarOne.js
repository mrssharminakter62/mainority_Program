import React from 'react';
import vec from "../../../images/vec.png";
import circle from "../../../images/circle.png";


const SidebarOne = () => {
    return (
        <div style={{ backgroundColor: "#151371" }}>
        <h4 style={{ color: "white" }}><img src={vec} alt="" /> Courses</h4>
        <h4 style={{ color: "white" }}>Introduction to Blockchain</h4>
        <div className="text-sidebar">
          <h4>Week-1</h4>
          <h6><img src={circle} alt="" /> Introduction</h6>
          <h6><img src={circle} alt="" /> Introduction</h6>
          <h6><img src={circle} alt="" /> Introduction</h6>
        </div>
        <div className="text-sidebar">
        <h4>Week-2</h4>
          <h6><img src={circle} alt="" /> Introduction</h6>
          <h6><img src={circle} alt="" /> Introduction</h6>
          <h6><img src={circle} alt="" /> Introduction</h6>
        </div>
        <div className="text-sidebar">
        <h4>Week-3</h4>
          <h6><img src={circle} alt="" /> Introduction</h6>
          <h6><img src={circle} alt="" /> Introduction</h6>
          <h6><img src={circle} alt="" /> Introduction</h6>
        </div>
        <div className="text-sidebar">
        <h4>Week-4</h4>
          <h6><img src={circle} alt="" /> Introduction</h6>
          <h6><img src={circle} alt="" /> Introduction</h6>
          <h6><img src={circle} alt="" /> Introduction</h6>
        </div>
        <div className="text-sidebar">
        <h4>Week-5</h4>
          <h6><img src={circle} alt="" /> Introduction</h6>
          <h6><img src={circle} alt="" /> Introduction</h6>
          <h6><img src={circle} alt="" /> Introduction</h6>
        </div>
      </div>
    );
};

export default SidebarOne;