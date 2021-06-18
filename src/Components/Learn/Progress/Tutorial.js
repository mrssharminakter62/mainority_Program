import React from "react";

const Tutorial = ({ progressDetails }) => {

  return (
    <div className="tutorial-container">
  
       <button className="btn-tutorial-progress">progress</button>
      <div>
        <h3 className="text-display">Our journey</h3>
        <p className="text-display">{progressDetails.activity}</p>
      </div>
      <div>
        <h3 className="text-display">Our journey</h3>
        <p className="text-display">{progressDetails.activity}</p>
      </div>
    </div>
  );
};

export default Tutorial;