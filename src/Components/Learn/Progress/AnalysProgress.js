import React from "react";
import progressData from "../../../Data/data3.json";
import { useParams } from "react-router";
import Tutorial from "./Tutorial";
import SidebarOne from "../SidebarOne/SidebarOne";



const AnalysProgress = () => {
  const { id } = useParams();
  const progressDetails = progressData.find((progress) => progress.id == id);
  return (
    <div className="row">
      <div className="col-sm-3 col-md-3 col-lg-3">
        <SidebarOne />
      </div>
      <div className="col-sm-9 col-md-9 col-lg-9 " >
        <div style={{marginLeft:'250px'}}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/9Rldobm7E58"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        </div>
        <Tutorial progressDetails={progressDetails} />
      </div>
    </div>
  );
};

export default AnalysProgress;
