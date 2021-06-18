import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import featuredData from "../../../Data/data1.json"
import ProgressList from "./ProgressList";
import progressData from "../../../Data/data3.json";
import HeaderProgress from './HeaderProgress';
import SidebarOne from '../SidebarOne/SidebarOne';

const Progress = () => {
    const { id } = useParams();
    const [lists, setLists] = useState([]);
    
    const fDetails = featuredData.find(
        (course) => course.id == id);

      useEffect(() => {
        setLists(progressData);
      }, []);
    return (
        <div className="row">
        <div className="col-sm-3 col-md-3 col-lg-3">
          <SidebarOne />
        </div>
        <div className="col-sm-9 col-md-9 col-lg-9">
          <HeaderProgress fDetails={fDetails} />
          <div className="progress-container">
            {
                lists.map(list => <ProgressList list={list} key={list.id} /> )
            }
          </div>
        </div>
      </div>
    );
};

export default Progress;