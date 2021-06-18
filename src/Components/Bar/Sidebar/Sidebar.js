import React, { useEffect, useState }  from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import twitter from "../../../images/twitt.png"
import facebook from "../../../images/faceb.png"
import linkedIn from "../../../images/linkedin.png";
import './Sidebar.css';


const Sidebar = ({data}) => {
    
    return (
      <div className="bg-white ml-5">
        <div className="ml-5">
          <div className="founded-style justify-content-center">
            <h5>Founded {data.founded}</h5>
          </div>
          <hr />
            <div className="row">
              <div className="head-style">
                <div className="text-design">
                  <div className="web-style">
                    <p>Website</p>
                    <div className="row ml-5">
                      <div> 
                           <a className="icon-incubator" style={{ textDecoration: "none" }} href={data.website} target="_blank" > mangoswap.com</a>
                      </div>
                      <div>
                        <a href={data.twitter} target="_blank">
                        <img src={twitter} style={{maxWidth:'30px'}} alt="" />
                        </a>
                        <a href={data.linkedIn} target="_blank">
                        <img src={linkedIn} style={{maxWidth:'30px'}} alt="" />
                        </a>
                        <a href={data.facebook} target="_blank">
                        <img src={facebook} style={{maxWidth:'20px'}} alt="" />
                        </a>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          <div className="head-style">
           <p>Location </p> 
            <h5 className="location">{data.Location}</h5>
            <p>Team size </p> 
            <h5  className="location">{data.size}</h5>
      </div>
      <hr />
      <ul>
        <h4 className="text-left">Meet the team</h4>
        <div className="d-flex">
          <h2>
            <FontAwesomeIcon className="icon-container" icon={faCircle} />
          </h2>
          <div className="founder-style">
             <h6>Founder</h6>
            <li className="member-list"> {data.founder}</li>
           
          </div>
        </div>
        <div className="d-flex">
          <h2>
            <FontAwesomeIcon className="icon-container" icon={faCircle} />
          </h2>
          <div className="founder-style">
            <h6>Co-founder</h6>
            <li className="member-list">
              {" "}
              {data.coFounder}
            </li>
          </div>
        </div>
        <div className="d-flex">
          <h2>
            <FontAwesomeIcon className="icon-container" icon={faCircle} />
          </h2>
          <div className="founder-style">
            <h6>Head of growth</h6>
            <li className="member-list">
              {" "}
              {data.HR}
            </li>
          </div>
        </div>
        <div className="d-flex">
          <h2>
            <FontAwesomeIcon className="icon-container" icon={faCircle} />
          </h2>
          <div className="founder-style">
            <h6>Head of product</h6>
            <li className="member-list">
              {" "}
              {data.HG}
            </li>
          </div>
        </div>
      </ul>
      <div className="btn-tag mb-5">
        <h3 className="tag-left">Tags</h3>
        <hr />
        <div>
          <button className="btn btn-info m-1">Crypto</button>
          <button className="btn btn-success m-1">Exchange</button>
          <button className="btn btn-dark m-1">NFT</button>
          <button className="btn btn-danger m-1">Blockchain</button>
        </div>  
      </div>
      </div>
    </div>

   );
};

export default Sidebar;