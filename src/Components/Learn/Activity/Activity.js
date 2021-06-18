import React from "react";
import "./Activity.css";

const Activity = ({ module }) => {
  return (
    <div className="activity-design">
      <div>
        <button className="btn-course-progress">completed</button>
      </div>
      <h3 className="text-white mr-2">
        {module.period}:{module.title}
      </h3><br />
      <p className="text-white">{module.completePercentage}</p>
    </div>
  );
};

export default Activity;
