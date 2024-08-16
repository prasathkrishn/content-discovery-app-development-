import React from "react";
import { RiSearchLine } from "react-icons/ri";
import './heto.css'
import 'bootstrap/dist/css/bootstrap.css'; 
const Hero = () => {
  return (
    <div className="wholecontent">
      <div className="each1">
        <p className="text1">
          Explore the Latest WebSeries!!
        </p>
        <p className="text2">
        Discover the Latest Movies!!
        </p>
        <div className="sear">
          
          <input
            type="search"
            className="search1"
            placeholder=" Search Here"
          />
          <div className="searchbutton">
            <RiSearchLine className="btn1" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;