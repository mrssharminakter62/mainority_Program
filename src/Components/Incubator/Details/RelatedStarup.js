import React from 'react';
import cards from '../../../images/Cards.png';

const RelatedStarup = () => {
    return (
         <div className="bg-white mt-3 mb-5">
          <div className="">
            <h4 className='ml-5'>Related Startups</h4>
            <div className="justify-content-center ml-5">
            <img src={cards} style={{maxWidth:'300px', margin:'5px'}} alt=""/> <img src={cards} style={{maxWidth:'300px', margin:'5px'}} alt="" /><img src={cards} style={{maxWidth:'300px', margin:'5px'}} alt="" />
            </div>
          </div>
        </div>
    );
};

export default RelatedStarup;