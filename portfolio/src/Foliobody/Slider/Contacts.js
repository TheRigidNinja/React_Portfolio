import React from "react";
import { Link } from "react-router-dom";

function Contacts({ activate }) {
  return (
    //Slide
    <div className="Contacts">
      <div className="Slide">

        <h2 className="center">Contact</h2>
        <p>
          <h4>What i say to myself</h4>
          <hr/><br/>
          I am a self-tought web developer and designer who loves functional and fluid
          interface, clean code, robotics, prosthetics and bushwalking. I
          develop under JavaScript, React, Jquery, PHP, Python, Nodejs, C# and
          Angular7/Angular.js. I do sketches, wireframes and mockups.
        </p>

        <Link to="/AboutMe"><span className="btn-large waves-effect waves-light viewProject z-depth-0">More Projects</span></Link>
        
      </div>
    </div>
  );
}

export default Contacts;
