import React from 'react';
import Incubator from '../IncubatorOne/Incubator';
import InvestDirectly from '../Feature/Feature';
import FeatureImage from '../FeatureImage/FeatureImage';

const Main = () => {
    return (
        <div>
            <Incubator/>
            <FeatureImage/>
            <InvestDirectly/>
        </div>
    );
};

export default Main;