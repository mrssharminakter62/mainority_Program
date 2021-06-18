import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../../Data/data.json';
import Sidebar from '../../Bar/Sidebar/Sidebar';
import Topbar from '../../Bar/Topbar/Topbar';
import Details from '../Details/Details';
import RelatedStarup from '../Details/RelatedStarup';



const FeatureDetails = () => {

    const {id} = useParams();
    const data = fakeData.find((dt) => dt.id == id);
   
    return (
        <div>
          <Topbar></Topbar>
             <div className="row">
                <div className="col-md-4 ">
                  <Sidebar data={data}/>
                </div>
                <div className="col-md-8">
                   <Details data={data}/> 
                   <RelatedStarup/>
               </div>
             </div>
          </div>
    );
};

export default FeatureDetails;