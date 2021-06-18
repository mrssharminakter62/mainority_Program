import React from 'react';
import FeatureCourse from '../FeatureCoure/FeatureCourse';
import LearnPage from '../LearnPage/LearnPage';
import MyCoureses from '../MyCourse/MyCoureses';
import MyCourse from '../MyCourse/MyCourse';

const Lpage = () => {
    return (
        <div >
            <LearnPage/>
            <div style={{background:" #151371"}}>
             <MyCoureses/>
             <FeatureCourse/>
            </div>
          
        </div>
    );
};

export default Lpage;