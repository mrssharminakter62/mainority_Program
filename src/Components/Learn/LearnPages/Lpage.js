import React from 'react';
import FeatureCourse from '../FeatureCoure/FeatureCourse';
import LearnPage from '../LearnPage/LearnPage';
import MyCourse from '../MyCourse/MyCourse';

const Lpage = () => {
    return (
        <div >
            <LearnPage/>
            <div style={{background:" #151371"}}>
            <MyCourse/>
            <FeatureCourse/>
            </div>
          
        </div>
    );
};

export default Lpage;