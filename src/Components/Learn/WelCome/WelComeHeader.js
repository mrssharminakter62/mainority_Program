import { Grid } from "@material-ui/core";
import React from "react";
import image from "../../../images/humanCircle.png";

const WelComeHeader = ({ handleClick }) => {
  return (
    <div className="mb-5">
      <Grid container>
        <Grid item xs={10} md={5} lg={6}>
          <img className="img-holder" src={image} />
        </Grid>
        <Grid item xs={10} md={5} lg={6}>
          <div style={{ textAlign: "left" }}>
            <h1 className="welcome-headline mt-5 text-white">
              Welcome back, <br />
              <span className="text-dark">Shot Khan</span>
            </h1>
            <h3
              style={{
                fontStyle: "italic",
                alignItems: "center",
                color: "white",
              }}
            >
              {" "}
              75%{" "}
              <span style={{ fontStyle: "italic", color: "white" }}>
                Completed
              </span>
            </h3>
            <button className="btn_brand" onClick={handleClick}>
              Resume
            </button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default WelComeHeader;