import React from "react";
import { useHistory, useParams } from "react-router";
import myCourseData from "../../../Data/data2.json";
import Activities from "../Activity/Activities";
import SidebarOne from "../SidebarOne/SidebarOne";
import WelComeHeader from "./WelComeHeader";

const WelCome = () => {
  const history = useHistory();
  const { id } = useParams();
  const myCourse = myCourseData.find(
    (myCourseDetails) => myCourseDetails.id === id
  );

  const handleClick = () => {
    history.push(`/progress/${id}`);
  };
  return (
    <div className="row">
      <div className="col-sm-3 col-md-3 col-lg-3">
        <SidebarOne/>
      </div>
      <div className="col-sm-9 col-md-9 col-lg-9">
        <WelComeHeader handleClick={handleClick} />
        <Activities myCourse={myCourse} />
      </div>
    </div>
  );
};

export default WelCome;