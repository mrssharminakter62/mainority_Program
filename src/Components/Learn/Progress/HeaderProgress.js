import React from 'react';
import progressbar from "../../../images/progress1.png";
import "./Progress.css";

const HeaderProgress = (props) => {
    const {period, modules, level} = props.fDetails;
    return (
        <div className="progress-header-container">
      <div className="progress-head-period">
        <h2>{period}</h2>
      </div>
      <div className="progress-head-period">
        <h4 className="">Progress</h4>
      </div>
        <div className="text-center">
            <h4 className="text-white">{modules}</h4>
            <img className="image-progress" src={progressbar} />
            <h4 className="text-white">{level}</h4>
        </div>
    </div>
    );
};

export default HeaderProgress;