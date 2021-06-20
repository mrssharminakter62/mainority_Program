import React from "react";
import "./Activity.css";
import progres from "../../../images/progress1.png";

const Activity = ({ module }) => {
  return (
    <div className="activity-design">
      <div>
        <button className="btn-course-progress">completed</button>
      </div>
      <h3 className="text-white" style={{marginLeft:"300px"}}>
        {module.period}:{module.title}
      </h3><br />
      <img src={progres} style={{marginLeft:"150px"}} alt="" />
      <p className="text-white" style={{marginLeft:"400px"}}>{module.completePercentage}</p>
    </div>
  );
};

export default Activity;
