import React from 'react';
import img1 from '../../../images/img1.png';
import img2 from '../../../images/img2.png';
import img3 from '../../../images/img3.png';
import './FeatureImage.css';

const FeatureImage = () => {
    
    return (
            <div className=" container justify-content-center row mt-5 feature">
                <div className="col-md-4 "><img src={img1} alt="" className="img__box"/></div>
                <div className="col-md-4 "><img src={img2} alt="" className="img__box" /></div>
                <div className="col-md-4 "><img src={img3} alt="" className="img__box" /></div>  
            </div>
    );
};

export default FeatureImage;