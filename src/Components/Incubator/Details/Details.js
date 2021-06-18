import React from 'react';
import "./Details.css"
const Details = ({data}) => {

    return (
        <div className="bg-white">
          <div className="detail bg-white">
            <h3>About startup</h3>
            <p >{data.Descrip2}</p>
          </div>
          <div className="detail">
            <h3>Vision</h3>
            <p>{data.Descrip3}</p>
          </div>
       </div>
    );
};

export default Details;