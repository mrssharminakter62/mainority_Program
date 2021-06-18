import React from "react";
import { Link, useHistory } from "react-router-dom";
import progressbar from "../../../images/progress1.png";

const ProgressList = ({ list }) => {
  return (
    <div>
      <div className="activity-design row">
        <div className="col-sm-3">
          <iframe
            width="130"
            height="85"
            src="https://www.youtube.com/embed/4Wp43whakbU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="col-sm-9">
          <button className="btn-course-progress">completed</button>
          <h5 className="text-white">
          <Link className="tutorial-link text-white" to={`/progressAnalysis/${list.id}`}>
            {list.period} : {list.title}
          </Link>
        </h5>
        <p className="text-white">{list.completePercent}</p>
        </div>
        
          <img className="image-progress" style={{marginLeft:'300px'}} src={progressbar} />
        
      </div>
    </div>
  );
};

export default ProgressList;