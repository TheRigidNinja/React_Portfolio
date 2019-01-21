import React from "react";
import { Link } from "react-router-dom";

function Contacts({ activate }) {
  return (
    //Slide
    <div className="Contacts">
      <div className="Slide">

        <h2 className="center">ABOUT ME</h2>
        <p>Hi there</p>

        <Link to="/AboutMe"><span className="btn-large waves-effect waves-light viewProject z-depth-0">VIEW PROJECT</span></Link>
        
      </div>
    </div>
  );
}

export default Contacts;
